package com.mastergui.reviews;

import android.app.Activity;
import android.content.Context;
import android.os.Handler;

import com.google.android.play.core.review.ReviewInfo;
import com.google.android.play.core.review.ReviewManager;
// import com.google.android.play.core.review.FakeReviewManager;
import com.google.android.play.core.review.ReviewManagerFactory;
import com.google.android.gms.tasks.Task;

import java.util.Date;

import static com.mastergui.reviews.InAppReviewPreferenceHelper.getInstallDate;
import static com.mastergui.reviews.InAppReviewPreferenceHelper.getLaunchTimes;
import static com.mastergui.reviews.InAppReviewPreferenceHelper.getRemindInterval;
import static com.mastergui.reviews.InAppReviewPreferenceHelper.isFirstLaunch;
import static com.mastergui.reviews.InAppReviewPreferenceHelper.setInstallDate;
import static com.mastergui.reviews.InAppReviewPreferenceHelper.setRemindIntervalDate;


public class InAppReviewManager {

    private static InAppReviewManager singleton;

    private final Context context;

    private int installDate = 10;

    private int launchTimes = 10;

    private int remindInterval = 1;

    private boolean isDebug = false;

    private InAppReviewManager(Context context) {
        this.context = context.getApplicationContext();
    }

    public static InAppReviewManager with(Context context) {
        if (singleton == null) {
            synchronized (InAppReviewManager.class) {
                if (singleton == null) {
                    singleton = new InAppReviewManager(context);
                }
            }
        }
        return singleton;
    }

    public static boolean showRateDialogIfMeetsConditions(Activity activity) {
        boolean isMeetsConditions = singleton.isDebug || singleton.shouldShowRateDialog();
        if (isMeetsConditions) {
            singleton.showRateDialog(activity);
        }
        return isMeetsConditions;
    }

    private static boolean isOverDate(long targetDate, int threshold) {
        return new Date().getTime() - targetDate >= threshold * 24 * 60 * 60 * 1000;
    }

    public InAppReviewManager setLaunchTimes(int launchTimes) {
        this.launchTimes = launchTimes;
        return this;
    }

    public InAppReviewManager setInstallDays(int installDate) {
        this.installDate = installDate;
        return this;
    }

    public InAppReviewManager setRemindInterval(int remindInterval) {
        this.remindInterval = remindInterval;
        return this;
    }

    public void monitor() {
        if (isFirstLaunch(context)) {
            setInstallDate(context);
        }
        InAppReviewPreferenceHelper.setLaunchTimes(context, getLaunchTimes(context) + 1);
    }

    public void showRateDialog(Activity activity) {
        if (!activity.isFinishing()) {
            final Handler handler = new Handler();
            handler.postDelayed(new Runnable() {
                @Override
                public void run() {
                    showDialog(activity);
                }
            }, 5000);
        }
    }

    public boolean shouldShowRateDialog() {
        return isOverLaunchTimes() &&
                isOverInstallDate() &&
                isOverRemindDate();
    }

    private boolean isOverLaunchTimes() {
        return getLaunchTimes(context) >= launchTimes;
    }

    private boolean isOverInstallDate() {
        return isOverDate(getInstallDate(context), installDate);
    }

    private boolean isOverRemindDate() {
        return isOverDate(getRemindInterval(context), remindInterval);
    }

    public boolean isDebug() {
        return isDebug;
    }

    public InAppReviewManager setDebug(boolean isDebug) {
        this.isDebug = isDebug;
        return this;
    }

    public void showDialog(Activity activity) {
        ReviewManager manager = ReviewManagerFactory.create(context);
        Task<ReviewInfo> request = manager.requestReviewFlow();

        request.addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                // We can get the ReviewInfo object
                ReviewInfo reviewInfo = task.getResult();
                startReview(activity, manager, reviewInfo);
            } else {
                // There was some problem, continue regardless of the result.
                setRemindIntervalDate(context);
            }
        });
    }

    public void startReview(Activity activity, ReviewManager manager, ReviewInfo reviewInfo) {
        Task<Void> flow = manager.launchReviewFlow(activity, reviewInfo);
        flow.addOnCompleteListener(task -> {
            // The flow has finished. The API does not indicate whether the user
            // reviewed or not, or even whether the review dialog was shown. Thus, no
            // matter the result, we continue our app flow.
            setRemindIntervalDate(context);
        });
    }
    
    // public void showFakeDialog(Activity activity) {
    //     FakeReviewManager manager = ReviewManagerFactory.create(context);
    //     Task<ReviewInfo> request = manager.requestReviewFlow();

    //     request.addOnCompleteListener(task -> {
    //         if (task.isSuccessful()) {
    //             // We can get the ReviewInfo object
    //             ReviewInfo reviewInfo = task.getResult();
    //             startReview(activity, manager, reviewInfo);
    //         } else {
    //             // There was some problem, continue regardless of the result.
    //             setRemindIntervalDate(context);
    //         }
    //     });
    // }

    // public void startFakeReview(Activity activity, FakeReviewManager manager, ReviewInfo reviewInfo) {
    //     Task<Void> flow = manager.launchReviewFlow(activity, reviewInfo);
    //     flow.addOnCompleteListener(task -> {
    //         // The flow has finished. The API does not indicate whether the user
    //         // reviewed or not, or even whether the review dialog was shown. Thus, no
    //         // matter the result, we continue our app flow.
    //         setRemindIntervalDate(context);
    //     });
    // }

}
