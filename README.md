# Shaker.js

Shake.js is a vanilla javascript plugin to provide a simple access to Vibration API

## Installation

### Bower

```sh
bower install shakerjs
```

Include the **shake.js** file into the index.html


## How to use

```js

// create an instance of Shaker with some options
var shaker = new Shaker({
    'duration': 1000
});

// Start a continuous vibrations based on the passed speed and the duration (ms)
shaker.continuousVibration('fast', 2000);

// Start a single vibration based on duration(ms) passed on instance.
shaker.vibrate();
```


## Contributing

Don't be shy, send a Pull Request! Here is how:

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D  