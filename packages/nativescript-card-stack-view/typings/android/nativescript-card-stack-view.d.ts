declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export class BuildConfig {
          public static class: java.lang.Class<com.yuyakaido.android.cardstackview.BuildConfig>;
          public static DEBUG: boolean;
          public static APPLICATION_ID: string;
          public static BUILD_TYPE: string;
          public static FLAVOR: string;
          public static VERSION_CODE: number;
          public static VERSION_NAME: string;
          public constructor();
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export class CardStackLayoutManager {
          public static class: java.lang.Class<com.yuyakaido.android.cardstackview.CardStackLayoutManager>;
          public setRewindAnimationSetting(param0: com.yuyakaido.android.cardstackview.RewindAnimationSetting): void;
          public setDirections(param0: java.util.List<com.yuyakaido.android.cardstackview.Direction>): void;
          public setSwipeThreshold(param0: number): void;
          public scrollToPosition(param0: number): void;
          public computeScrollVectorForPosition(param0: number): globalAndroid.graphics.PointF;
          public setVisibleCount(param0: number): void;
          public setScaleInterval(param0: number): void;
          public constructor(param0: globalAndroid.content.Context, param1: com.yuyakaido.android.cardstackview.CardStackListener);
          public generateDefaultLayoutParams(): androidx.recyclerview.widget.RecyclerView.LayoutParams;
          public canScrollVertically(): boolean;
          public getTopView(): globalAndroid.view.View;
          public setOverlayInterpolator(param0: globalAndroid.view.animation.Interpolator): void;
          public onScrollStateChanged(param0: number): void;
          public getCardStackSetting(): com.yuyakaido.android.cardstackview.internal.CardStackSetting;
          public setSwipeAnimationSetting(param0: com.yuyakaido.android.cardstackview.SwipeAnimationSetting): void;
          public setSwipeableMethod(param0: com.yuyakaido.android.cardstackview.SwipeableMethod): void;
          public setCanScrollHorizontal(param0: boolean): void;
          public setMaxDegree(param0: number): void;
          public getTopPosition(): number;
          public onLayoutChildren(param0: androidx.recyclerview.widget.RecyclerView.Recycler, param1: androidx.recyclerview.widget.RecyclerView.State): void;
          public constructor(param0: globalAndroid.content.Context);
          public canScrollHorizontally(): boolean;
          public setStackFrom(param0: com.yuyakaido.android.cardstackview.StackFrom): void;
          public scrollHorizontallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
          public scrollVerticallyBy(param0: number, param1: androidx.recyclerview.widget.RecyclerView.Recycler, param2: androidx.recyclerview.widget.RecyclerView.State): number;
          public setTranslationInterval(param0: number): void;
          public smoothScrollToPosition(param0: androidx.recyclerview.widget.RecyclerView, param1: androidx.recyclerview.widget.RecyclerView.State, param2: number): void;
          public setTopPosition(param0: number): void;
          public getCardStackState(): com.yuyakaido.android.cardstackview.internal.CardStackState;
          public getCardStackListener(): com.yuyakaido.android.cardstackview.CardStackListener;
          public setCanScrollVertical(param0: boolean): void;
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export class CardStackListener {
          public static class: java.lang.Class<com.yuyakaido.android.cardstackview.CardStackListener>;
          /**
           * Constructs a new instance of the com.yuyakaido.android.cardstackview.CardStackListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onCardDragging(param0: com.yuyakaido.android.cardstackview.Direction, param1: number): void; onCardSwiped(param0: com.yuyakaido.android.cardstackview.Direction): void; onCardRewound(): void; onCardCanceled(): void; onCardAppeared(param0: globalAndroid.view.View, param1: number): void; onCardDisappeared(param0: globalAndroid.view.View, param1: number): void; <clinit>(): void });
          public constructor();
          public static DEFAULT: com.yuyakaido.android.cardstackview.CardStackListener;
          public onCardCanceled(): void;
          public onCardRewound(): void;
          public onCardSwiped(param0: com.yuyakaido.android.cardstackview.Direction): void;
          public onCardAppeared(param0: globalAndroid.view.View, param1: number): void;
          public onCardDisappeared(param0: globalAndroid.view.View, param1: number): void;
          public onCardDragging(param0: com.yuyakaido.android.cardstackview.Direction, param1: number): void;
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export class CardStackView {
          public static class: java.lang.Class<com.yuyakaido.android.cardstackview.CardStackView>;
          public constructor(param0: globalAndroid.content.Context);
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          public rewind(): void;
          public setAdapter(param0: androidx.recyclerview.widget.RecyclerView.Adapter): void;
          public swipe(): void;
          public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
          public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
          public setLayoutManager(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): void;
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export class Direction {
          public static class: java.lang.Class<com.yuyakaido.android.cardstackview.Direction>;
          public static Left: com.yuyakaido.android.cardstackview.Direction;
          public static Right: com.yuyakaido.android.cardstackview.Direction;
          public static Top: com.yuyakaido.android.cardstackview.Direction;
          public static Bottom: com.yuyakaido.android.cardstackview.Direction;
          public static HORIZONTAL: java.util.List<com.yuyakaido.android.cardstackview.Direction>;
          public static VERTICAL: java.util.List<com.yuyakaido.android.cardstackview.Direction>;
          public static FREEDOM: java.util.List<com.yuyakaido.android.cardstackview.Direction>;
          public static values(): androidNative.Array<com.yuyakaido.android.cardstackview.Direction>;
          public static valueOf(param0: string): com.yuyakaido.android.cardstackview.Direction;
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export class Duration {
          public static class: java.lang.Class<com.yuyakaido.android.cardstackview.Duration>;
          public static Fast: com.yuyakaido.android.cardstackview.Duration;
          public static Normal: com.yuyakaido.android.cardstackview.Duration;
          public static Slow: com.yuyakaido.android.cardstackview.Duration;
          public duration: number;
          public static valueOf(param0: string): com.yuyakaido.android.cardstackview.Duration;
          public static values(): androidNative.Array<com.yuyakaido.android.cardstackview.Duration>;
          public static fromVelocity(param0: number): com.yuyakaido.android.cardstackview.Duration;
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export class RewindAnimationSetting extends com.yuyakaido.android.cardstackview.internal.AnimationSetting {
          public static class: java.lang.Class<com.yuyakaido.android.cardstackview.RewindAnimationSetting>;
          public getDirection(): com.yuyakaido.android.cardstackview.Direction;
          public getInterpolator(): globalAndroid.view.animation.Interpolator;
          public getDuration(): number;
        }
        export module RewindAnimationSetting {
          export class Builder {
            public static class: java.lang.Class<com.yuyakaido.android.cardstackview.RewindAnimationSetting.Builder>;
            public constructor();
            public setDuration(param0: number): com.yuyakaido.android.cardstackview.RewindAnimationSetting.Builder;
            public setDirection(param0: com.yuyakaido.android.cardstackview.Direction): com.yuyakaido.android.cardstackview.RewindAnimationSetting.Builder;
            public setInterpolator(param0: globalAndroid.view.animation.Interpolator): com.yuyakaido.android.cardstackview.RewindAnimationSetting.Builder;
            public build(): com.yuyakaido.android.cardstackview.RewindAnimationSetting;
          }
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export class StackFrom {
          public static class: java.lang.Class<com.yuyakaido.android.cardstackview.StackFrom>;
          public static None: com.yuyakaido.android.cardstackview.StackFrom;
          public static Top: com.yuyakaido.android.cardstackview.StackFrom;
          public static TopAndLeft: com.yuyakaido.android.cardstackview.StackFrom;
          public static TopAndRight: com.yuyakaido.android.cardstackview.StackFrom;
          public static Bottom: com.yuyakaido.android.cardstackview.StackFrom;
          public static BottomAndLeft: com.yuyakaido.android.cardstackview.StackFrom;
          public static BottomAndRight: com.yuyakaido.android.cardstackview.StackFrom;
          public static Left: com.yuyakaido.android.cardstackview.StackFrom;
          public static Right: com.yuyakaido.android.cardstackview.StackFrom;
          public static values(): androidNative.Array<com.yuyakaido.android.cardstackview.StackFrom>;
          public static valueOf(param0: string): com.yuyakaido.android.cardstackview.StackFrom;
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export class SwipeAnimationSetting extends com.yuyakaido.android.cardstackview.internal.AnimationSetting {
          public static class: java.lang.Class<com.yuyakaido.android.cardstackview.SwipeAnimationSetting>;
          public getDirection(): com.yuyakaido.android.cardstackview.Direction;
          public getInterpolator(): globalAndroid.view.animation.Interpolator;
          public getDuration(): number;
        }
        export module SwipeAnimationSetting {
          export class Builder {
            public static class: java.lang.Class<com.yuyakaido.android.cardstackview.SwipeAnimationSetting.Builder>;
            public constructor();
            public setDirection(param0: com.yuyakaido.android.cardstackview.Direction): com.yuyakaido.android.cardstackview.SwipeAnimationSetting.Builder;
            public setDuration(param0: number): com.yuyakaido.android.cardstackview.SwipeAnimationSetting.Builder;
            public setInterpolator(param0: globalAndroid.view.animation.Interpolator): com.yuyakaido.android.cardstackview.SwipeAnimationSetting.Builder;
            public build(): com.yuyakaido.android.cardstackview.SwipeAnimationSetting;
          }
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export class SwipeableMethod {
          public static class: java.lang.Class<com.yuyakaido.android.cardstackview.SwipeableMethod>;
          public static AutomaticAndManual: com.yuyakaido.android.cardstackview.SwipeableMethod;
          public static Automatic: com.yuyakaido.android.cardstackview.SwipeableMethod;
          public static Manual: com.yuyakaido.android.cardstackview.SwipeableMethod;
          public static None: com.yuyakaido.android.cardstackview.SwipeableMethod;
          public static values(): androidNative.Array<com.yuyakaido.android.cardstackview.SwipeableMethod>;
          public static valueOf(param0: string): com.yuyakaido.android.cardstackview.SwipeableMethod;
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export module internal {
          export class AnimationSetting {
            public static class: java.lang.Class<com.yuyakaido.android.cardstackview.internal.AnimationSetting>;
            /**
             * Constructs a new instance of the com.yuyakaido.android.cardstackview.internal.AnimationSetting interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getDirection(): com.yuyakaido.android.cardstackview.Direction; getDuration(): number; getInterpolator(): globalAndroid.view.animation.Interpolator });
            public constructor();
            public getInterpolator(): globalAndroid.view.animation.Interpolator;
            public getDuration(): number;
            public getDirection(): com.yuyakaido.android.cardstackview.Direction;
          }
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export module internal {
          export class CardStackDataObserver {
            public static class: java.lang.Class<com.yuyakaido.android.cardstackview.internal.CardStackDataObserver>;
            public constructor(param0: androidx.recyclerview.widget.RecyclerView);
            public onChanged(): void;
            public onItemRangeMoved(param0: number, param1: number, param2: number): void;
            public onItemRangeChanged(param0: number, param1: number): void;
            public onItemRangeChanged(param0: number, param1: number, param2: any): void;
            public onItemRangeInserted(param0: number, param1: number): void;
            public onItemRangeRemoved(param0: number, param1: number): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export module internal {
          export class CardStackSetting {
            public static class: java.lang.Class<com.yuyakaido.android.cardstackview.internal.CardStackSetting>;
            public stackFrom: com.yuyakaido.android.cardstackview.StackFrom;
            public visibleCount: number;
            public translationInterval: number;
            public scaleInterval: number;
            public swipeThreshold: number;
            public maxDegree: number;
            public directions: java.util.List<com.yuyakaido.android.cardstackview.Direction>;
            public canScrollHorizontal: boolean;
            public canScrollVertical: boolean;
            public swipeableMethod: com.yuyakaido.android.cardstackview.SwipeableMethod;
            public swipeAnimationSetting: com.yuyakaido.android.cardstackview.SwipeAnimationSetting;
            public rewindAnimationSetting: com.yuyakaido.android.cardstackview.RewindAnimationSetting;
            public overlayInterpolator: globalAndroid.view.animation.Interpolator;
            public constructor();
          }
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export module internal {
          export class CardStackSmoothScroller {
            public static class: java.lang.Class<com.yuyakaido.android.cardstackview.internal.CardStackSmoothScroller>;
            public constructor(param0: com.yuyakaido.android.cardstackview.internal.CardStackSmoothScroller.ScrollType, param1: com.yuyakaido.android.cardstackview.CardStackLayoutManager);
            public onStop(): void;
            public onSeekTargetStep(param0: number, param1: number, param2: androidx.recyclerview.widget.RecyclerView.State, param3: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
            public onStart(): void;
            public onTargetFound(param0: globalAndroid.view.View, param1: androidx.recyclerview.widget.RecyclerView.State, param2: androidx.recyclerview.widget.RecyclerView.SmoothScroller.Action): void;
          }
          export module CardStackSmoothScroller {
            export class ScrollType {
              public static class: java.lang.Class<com.yuyakaido.android.cardstackview.internal.CardStackSmoothScroller.ScrollType>;
              public static AutomaticSwipe: com.yuyakaido.android.cardstackview.internal.CardStackSmoothScroller.ScrollType;
              public static AutomaticRewind: com.yuyakaido.android.cardstackview.internal.CardStackSmoothScroller.ScrollType;
              public static ManualSwipe: com.yuyakaido.android.cardstackview.internal.CardStackSmoothScroller.ScrollType;
              public static ManualCancel: com.yuyakaido.android.cardstackview.internal.CardStackSmoothScroller.ScrollType;
              public static valueOf(param0: string): com.yuyakaido.android.cardstackview.internal.CardStackSmoothScroller.ScrollType;
              public static values(): androidNative.Array<com.yuyakaido.android.cardstackview.internal.CardStackSmoothScroller.ScrollType>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export module internal {
          export class CardStackSnapHelper {
            public static class: java.lang.Class<com.yuyakaido.android.cardstackview.internal.CardStackSnapHelper>;
            public calculateDistanceToFinalSnap(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: globalAndroid.view.View): androidNative.Array<number>;
            public constructor();
            public findTargetSnapPosition(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager, param1: number, param2: number): number;
            public findSnapView(param0: androidx.recyclerview.widget.RecyclerView.LayoutManager): globalAndroid.view.View;
          }
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export module internal {
          export class CardStackState {
            public static class: java.lang.Class<com.yuyakaido.android.cardstackview.internal.CardStackState>;
            public status: com.yuyakaido.android.cardstackview.internal.CardStackState.Status;
            public width: number;
            public height: number;
            public dx: number;
            public dy: number;
            public topPosition: number;
            public targetPosition: number;
            public proportion: number;
            public constructor();
            public next(param0: com.yuyakaido.android.cardstackview.internal.CardStackState.Status): void;
            public isSwipeCompleted(): boolean;
            public canScrollToPosition(param0: number, param1: number): boolean;
            public getRatio(): number;
            public getDirection(): com.yuyakaido.android.cardstackview.Direction;
          }
          export module CardStackState {
            export class Status {
              public static class: java.lang.Class<com.yuyakaido.android.cardstackview.internal.CardStackState.Status>;
              public static Idle: com.yuyakaido.android.cardstackview.internal.CardStackState.Status;
              public static Dragging: com.yuyakaido.android.cardstackview.internal.CardStackState.Status;
              public static RewindAnimating: com.yuyakaido.android.cardstackview.internal.CardStackState.Status;
              public static AutomaticSwipeAnimating: com.yuyakaido.android.cardstackview.internal.CardStackState.Status;
              public static AutomaticSwipeAnimated: com.yuyakaido.android.cardstackview.internal.CardStackState.Status;
              public static ManualSwipeAnimating: com.yuyakaido.android.cardstackview.internal.CardStackState.Status;
              public static ManualSwipeAnimated: com.yuyakaido.android.cardstackview.internal.CardStackState.Status;
              public isDragging(): boolean;
              public toAnimatedStatus(): com.yuyakaido.android.cardstackview.internal.CardStackState.Status;
              public static values(): androidNative.Array<com.yuyakaido.android.cardstackview.internal.CardStackState.Status>;
              public isSwipeAnimating(): boolean;
              public static valueOf(param0: string): com.yuyakaido.android.cardstackview.internal.CardStackState.Status;
              public isBusy(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module yuyakaido {
    export module android {
      export module cardstackview {
        export module internal {
          export class DisplayUtil {
            public static class: java.lang.Class<com.yuyakaido.android.cardstackview.internal.DisplayUtil>;
            public static dpToPx(param0: globalAndroid.content.Context, param1: number): number;
          }
        }
      }
    }
  }
}

//Generics information:
