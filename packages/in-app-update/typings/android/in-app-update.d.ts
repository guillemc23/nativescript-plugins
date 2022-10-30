declare module org {
  export module mastergui {
    export module updates {
      export class InAppUpdate {
        public static class: java.lang.Class<org.mastergui.updates.InAppUpdate>;
        public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
        public onResume(): void;
        public constructor(param0: globalAndroid.app.Activity);
        public onStateUpdate(param0: com.google.android.play.core.install.InstallState): void;
        public onDestroy(): void;
      }
    }
  }
}
