package org.mastergui.reviews;

import android.app.Activity
import android.content.Context
import android.widget.Toast
import com.google.android.gms.tasks.Task
import com.google.android.play.core.review.ReviewInfo
import com.google.android.play.core.review.ReviewManager
import com.google.android.play.core.review.ReviewManagerFactory

class InAppReview {

  companion object {

    private var reviewManager: ReviewManager? = null
    private var reviewInfo: ReviewInfo? = null

    /**
     * Call this method at app start etc to pre-cache the reviewInfo object to use to show
     * in-app review dialog later.
     */
    @JvmStatic
    fun getReviewInfo(
      applicationContext: Context,
      applicationActivity: Activity,
      debugMode: Boolean
    ) {
      reviewManager = ReviewManagerFactory.create(applicationActivity);
      val manager = reviewManager!!.requestReviewFlow();
      manager?.addOnCompleteListener { task: Task<ReviewInfo?> ->
        if (task.isSuccessful) {
          reviewInfo = task.result
        } else {
          if (debugMode) {
            Toast.makeText(
              applicationContext,
              "In App ReviewFlow failed to start",
              Toast.LENGTH_LONG
            ).show()
          }
        }
      }
    }

    /**
     * Call this method when you want to show the in-app rating dialog
     */
    @JvmStatic
    fun startReviewFlow(
      applicationContext: Context,
      applicationActivity: Activity,
      debugMode: Boolean
    ) {
      if (reviewInfo != null) {
        val flow = reviewManager!!.launchReviewFlow(applicationActivity, reviewInfo!!)
        flow.addOnCompleteListener {
          if (debugMode) {
            Toast.makeText(
              applicationContext,
              "Rating complete",
              Toast.LENGTH_LONG
            ).show()
          }
        }
      } else {
        if (debugMode) {
          Toast.makeText(applicationContext, "Rating failed", Toast.LENGTH_LONG).show()
        }
      }
    }
  }

}
