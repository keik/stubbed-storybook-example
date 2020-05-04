# stubbed-storybook-example

Example of using stubbed child component on Storybook / StoryShots.

## Problem

When Using Storybook, sometime a story of *Presentational Component* may have child of *Container Component* which have side-effect like API fetching.

Like that story is going to be difficult to render on Storybook and also snapshot testing.

## Solution

Stub *Container Component*.

Normally settings of stub is place at each test which required, but when using Storyshots for snapshot testing, the place for settings of stub is only test entrypoint only like Storyshots.test.js.
Maybe there are many modules which you want to stub, so putting all settings of stub to one test entrypoint is painful.

[babel-plugin-stub-import](https://github.com/keik/babel-plugin-stub-import) can test importing name and replace to stub module.

You would be using naming convention for Component Container like `UserContainer` against Presentational Component `User`.
You can automatically select the modules to stub with naming convention.

## Example

The example separate two babel context. For Storybook and for another.

[.storybook/.babelrc](./.storybook/.babelrc) is for Storybook.
It is used Storybook automatically and also for Storyshots via [.storybook/jest.config.js](.storybook/jest.config.js).

As a results both Storybook and snapshot testing use stub.

Built Storybook is here.
https://keik.github.io/stubbed-storybook-example/storybook-static/index.html
