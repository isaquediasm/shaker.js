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
		navigator.vibrate(duration || 1000);
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
	 * @param {object}
	 */

	Shaker.prototype.continuousVibration = function (options) {

		if (!options.speed || typeof options.speed !== 'string') {
			throw new Error('First arg (speed) must be a string.');
		}

		if (options.duration !== 'undefined' && typeof options.duration !== 'number') {
			throw new Error('Second arg (duration) must be a number.');
		}


		var speeds = {
			'slow': {
				'duration': 500,
				'interval': 1000
			},
			'medium': {
				'duration': 300,
				'interval': 500
			},
			'fast': {
				'duration': 200,
				'interval': 300
			}
		}

		// Start persistent vibration at given duration and interval
		// Assumes a number value is given
		function continuousVibration(opt) {
			vibrateInterval = setInterval(function () {
				Shaker.prototype.vibrate(opt.duration);
			}, opt.interval);


			setInterval(function () {
				Shaker.prototype.stopVibrate();
			}, options.duration || 2000);

		}

		continuousVibration(speeds[options.speed]);

	}

	return Shaker;

});
