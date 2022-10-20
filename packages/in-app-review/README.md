# @mastergui/in-app-review

```bash
ns plugin add @mastergui/in-app-review
```

## Usage

### Android

The Google Play In-App Review API lets you prompt users to submit Play Store ratings and reviews without the inconvenience of leaving your app or game.

![](https://developer.android.com/static/images/google/play/in-app-review/iar-flow.jpg)

>In-app review flow for an Android user

You must run this at the start of your app or at least before requesting to show the Review dialog. With the new In App Review API, it's Google who's in charge of deciding to show or not the dialog. Calling the `init()` method will initialize an instance of the ReviewManager and pre-cache a ReviewInfo object with the information needed for them to show it or not.

```javascript
import { InAppReview } from "@mastergui/in-app-review"

InAppReview.init()
```

To show the dialog, run the following method, and, depending on the ReviewInfo object previously obtained, the dialog will pop up or not.

```javascript
import { InAppReview } from "@mastergui/in-app-review"

InAppReview.showReviewDialog()
```

It's important to note that the dialog will **only** show if the app is on the Google Play Store. For development purposes, I added some toasts to understand if everything is going correctly.


For more information on the In-App-Review API, check the official [documentation](https://developer.android.com/guide/playcore/in-app-review)


### iOS
Presenting your users with a request for an App Store review using `SKStoreReviewController` is a good way to get feedback on your app.
![](https://www.apptentive.com/wp-content/uploads/2017/07/Screen-Shot-2017-07-09-at-6.34.53-PM.png)
>In-app review flow for a iOS user

On iOS there's no need to pre-cache the `SKStoreReviewController` object, but calling the `init()`method will not result in an error either way; so just calling this should work.

```javascript
import { InAppReview } from "@mastergui/in-app-review"

InAppReview.showReviewDialog()
```

As in Android's case, it's now Apple who decide whether to show the review dialog or not. Depending on the iOS version, the dialog shown could be different (iOS<13). Apple prevents the dialog from showing more than 3 times a year.

Apple provides some best practices on when and where to show the review dialog:
 - Try to make the request at a time that doesn’t interrupt what the user is trying to achieve in your app. For example, at the end of a sequence of events that the user successfully completes.

 - Avoid showing a request for a review immediately when a user launches your app, even if it isn’t the first time that it launches.

 - Avoid requesting a review as the result of a user action.

For more information on the Requesting App Store reviews, check the official [documentation](https://developer.apple.com/documentation/storekit/requesting_app_store_reviews)

## Acknowledgments

Thanks to @triniwiz the plugin master and the NativeScript team for building such good tutorials on their [blog](https://blog.nativescript.org/) 

## License

Apache License Version 2.0
