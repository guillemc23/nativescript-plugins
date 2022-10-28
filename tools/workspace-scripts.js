module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
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
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx run demo:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo:android',
          description: '⚆  Run Android  🤖',
        },
      },
      '...Angular...': {
        script: `npx cowsay "Test all the Angles!"`,
        description: ` 🔻 Angular`,
      },
      'demo-angular': {
        clean: {
          script: 'nx run demo-angular:clean',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx run demo-angular:ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx run demo-angular:android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@mastergui/* packages will keep your ⚙️ cranking"`,
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
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
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
