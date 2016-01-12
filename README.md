# Shaker.js

Shake.js is a vanilla javascript plugin to provide a simple access to Vibration API

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