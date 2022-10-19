declare module org {
  export module mastergui {
    export module reviews {
      export class InAppReview {
        public static class: java.lang.Class<org.mastergui.reviews.InAppReview>;
        public static startReviewFlow(param0: globalAndroid.content.Context, param1: globalAndroid.app.Activity, param2: boolean): void;
        public static getReviewInfo(param0: globalAndroid.content.Context, param1: globalAndroid.app.Activity, param2: boolean): void;
        public constructor();
      }
      export module InAppReview {
        export class Companion {
          public static class: java.lang.Class<org.mastergui.reviews.InAppReview.Companion>;
          public startReviewFlow(param0: globalAndroid.content.Context, param1: globalAndroid.app.Activity, param2: boolean): void;
          public getReviewInfo(param0: globalAndroid.content.Context, param1: globalAndroid.app.Activity, param2: boolean): void;
        }
      }
    }
  }
}
