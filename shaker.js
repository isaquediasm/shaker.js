(function (root, factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		define('Shaker', factory);
	} else if (typeof exports === 'object') {
		exports = module.exports = factory();
	} else {
		root.Shaker = factory();
	}

})(this, function () {
	'use strict';

	var vibrateInterval;

	var Shaker = function () {};

	/**
	 * This method should return if browser supports
	 * Vibrate.
	 *
	 * @return {boolean}
	 */
	Shaker.prototype.verifySupport = function () {
		return (navigator.vibrate) ? true : false;
	}

	/**
	 * Starts a vibration at passed duration
	 *
	 * @param {string}
	 */

	Shaker.prototype.vibrate = function vibrate(duration) {
		navigator.vibrate(duration);
	}


	/**
	 * Stops a continuous vibration
	 */

	Shaker.prototype.stopVibrate = function stopVibrate() {
		// Clear interval and stop persistent vibrating
		if (vibrateInterval) clearInterval(vibrateInterval);
		navigator.vibrate(0);
	}

	/**
	 * Starts a continuous vibration based on 
	 * speed(slow, medium, fast) and duration (ms)
	 *
	 * @param {string}
	 */

	Shaker.prototype.continuousVibration = function (speed, duration) {

		// Start persistent vibration at given duration and interval
		// Assumes a number value is given
		function continuousVibration(_duration, _interval) {
			vibrateInterval = setInterval(function () {
				Shaker.prototype.vibrate(_duration);
			}, _interval);

			if (duration)
				setInterval(function () {
					Shaker.prototype.stopVibrate();
				}, duration);

		}

		switch (speed) {
			case 'slow':
				continuousVibration(500, 1000);
				break;

			case 'medium':
				continuousVibration(300, 500);
				break;

			case 'fast':
				continuousVibration(200, 300);
				break;
		}

	}

	return Shaker;

});
