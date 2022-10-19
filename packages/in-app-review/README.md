# @mastergui/in-app-review

![npm](https://img.shields.io/npm/dw/@mastergui/in-app-review)

```bash
ns plugin add @mastergui/in-app-review
```

## Usage

### Android

The Google Play In-App Review API lets you prompt users to submit Play Store ratings and reviews without the inconvenience of leaving your app or game.

![](https://developer.android.com/static/images/google/play/in-app-review/iar-flow.jpg)

>In-app review flow for a user

You must run this at the start of your app or at least before requesting to show the Review dialog. With the new In App Review API, it's Google who's in charge of deciding to show or not the dialog. Calling the `init` method will initialize an instance of the ReviewManager and pre-cache a ReviewInfo object with the information needed for them to show it or not.

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

Not yet implemented :( Feel free to contribute! 

It would be cool to implement something like [SwiftRater](https://github.com/takecian/SwiftRater)

## Acknowledgments

Thanks to @triniwiz the plugin master and the NativeScript team for building such good tutorials on their [blog](https://blog.nativescript.org/) 

## License

Apache License Version 2.0
