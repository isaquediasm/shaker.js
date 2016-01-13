# Shaker.js

Shake.js is a vanilla javascript plugin to provide a simple access to Vibration API

## Installation

### Bower

```sh
bower install shakerjs
```

Include the **shaker.js** file into the index.html


## How to use

```js

// Create an instance of Shaker
var shaker = new Shaker();

// Start a continuous vibrations based on the passed speed and duration (ms)
shaker.continuousVibration('fast', 2000);

// Start a single vibration based on duration(ms).
shaker.vibrate(3000);
```

## Browser Support

This library relies on [Vibration API](https://www.w3.org/TR/vibration/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
webkit ✔ | 11+ ✔ | Nope ✘ | Nope ✘ | Nope ✘ |

## Contributing

Don't be shy, send a Pull Request! Here is how:

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D  