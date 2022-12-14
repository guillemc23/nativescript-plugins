module.exports = {
  message: 'NativeScript Plugins ~ made with โค๏ธ  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '๐ง': {
      script: `npx cowsay "NativeScript plugin demos make developers ๐"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla ๐ฆ"`,
        description: ` ๐ป Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` ๐ป Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: 'โ  Clean  ๐งน',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: 'โ  Run iOS  ๏ฃฟ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: 'โ  Run Android  ๐ค',
        },
      },
    },
    'โ๏ธ': {
      script: `npx cowsay "@mastergui/* packages will keep your โ๏ธ cranking"`,
      description: '_____________  @mastergui/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@mastergui': {
      // @mastergui/in-app-review
      'in-app-review': {
        build: {
          script: 'nx run in-app-review:build.all',
          description: '@mastergui/in-app-review: Build',
        },
      },
      // @mastergui/app-rater
      'app-rater': {
        build: {
          script: 'nx run app-rater:build.all',
          description: '@mastergui/app-rater: Build',
        },
      },
      // @mastergui/in-app-update
      'in-app-update': {
        build: {
          script: 'nx run in-app-update:build.all',
          description: '@mastergui/in-app-update: Build',
        },
      },
      // @mastergui/nativescript-swipeable-cards
      'nativescript-swipeable-cards': {
        build: {
          script: 'nx run nativescript-swipeable-cards:build.all',
          description: '@mastergui/nativescript-swipeable-cards: Build',
        },
      },
      // @mastergui/nativescript-card-stack-view
      'nativescript-card-stack-view': {
        build: {
          script: 'nx run nativescript-card-stack-view:build.all',
          description: '@mastergui/nativescript-card-stack-view: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    'โก': {
      script: `npx cowsay "Focus only on source you care about for efficiency โก"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      'in-app-review': {
        script: 'nx run in-app-review:focus',
        description: 'Focus on @mastergui/in-app-review',
      },
      'app-rater': {
        script: 'nx run app-rater:focus',
        description: 'Focus on @mastergui/app-rater',
      },
      'in-app-update': {
        script: 'nx run in-app-update:focus',
        description: 'Focus on @mastergui/in-app-update',
      },
      'nativescript-swipeable-cards': {
        script: 'nx run nativescript-swipeable-cards:focus',
        description: 'Focus on @mastergui/nativescript-swipeable-cards',
      },
      'nativescript-card-stack-view': {
        script: 'nx run nativescript-card-stack-view:focus',
        description: 'Focus on @mastergui/nativescript-card-stack-view',
      },
      reset: {
        script: 'nx g @mastergui/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
