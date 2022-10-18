package org.mastergui.reviews;

import android.app.Activity
import android.content.Context
import android.util.Log
import android.widget.Toast
import com.google.android.play.core.review.ReviewInfo
import com.google.android.play.core.review.ReviewManager
import com.google.android.play.core.review.ReviewManagerFactory
import com.google.android.play.core.tasks.Task

class InAppReview {



  companion object {
    // private lateinit var reviewManager: ReviewManager
    var reviewManager: ReviewManager? = null
    var reviewInfo: ReviewInfo? = null

    @JvmStatic
    fun showReviewDialog(applicationContext: Context, applicationActivity: Activity) {
      reviewManager = ReviewManagerFactory.create(applicationContext);
      reviewManager?.requestReviewFlow()?.addOnCompleteListener { request ->
          if (request.isSuccessful) {
              // We got the ReviewInfo object
              val reviewInfo = request.result
              val flow = reviewManager!!.launchReviewFlow(applicationActivity, reviewInfo)
              flow.addOnCompleteListener {
                  // The flow has finished. The API does not indicate whether the user
                  // reviewed or not, or even whether the review dialog was shown. Thus, no
                  // matter the result, we continue our app flow.
              }
          } else {
              Log.d("Error: ", request.exception.toString())
              // There was some problem, continue regardless of the result.
          }
      }
}

   /**
    * Call this method at app start etc to pre-cache the reviewInfo object to use to show
    * in-app review dialog later.
    */
    @JvmStatic
    fun getReviewInfo(applicationContext: Context, applicationActivity: Activity) {
        reviewManager = ReviewManagerFactory.create(applicationActivity)
        val manager = reviewManager!!.requestReviewFlow();
        manager?.addOnCompleteListener { task: Task<ReviewInfo?> ->
            if (task.isSuccessful) {
                reviewInfo = task.result
            } else {
                Toast.makeText(
                    applicationContext,
                    "In App ReviewFlow failed to start",
                    Toast.LENGTH_LONG
                ).show()
            }
        }
    }

    /**
     * Call this method when you want to show the in-app rating dialog
     */
    @JvmStatic
    fun startReviewFlow(applicationContext: Context, applicationActivity: Activity) {
        if (reviewInfo != null) {
            val flow = reviewManager!!.launchReviewFlow(applicationActivity, reviewInfo!!)
            flow.addOnCompleteListener {
                Toast.makeText(
                    applicationContext,
                    "Rating complete",
                    Toast.LENGTH_LONG
                ).show()
            }
        } else {
            Toast.makeText(applicationContext, "Rating failed", Toast.LENGTH_LONG).show()
        }
    }
}

}
