var moment = require('moment');
var internals = {};


internals.now = function() {

    return new Date().getTime();
};


internals.timers = {};


/**
 * Start timer.
 *
 */
exports.start = function(timer_name, verbose) {

    if (verbose === true) {
        console.log('[TIMER] start - %s', timer_name);
    }

    internals.timers[timer_name] = {
        'start': internals.now(),
        'stop': undefined,
        'delta': undefined
    };

    return internals.timers[timer_name];
};


/**
 * Stop timer and calculate delta.
 *
 */
exports.stop = function(timer_name, verbose) {

    var ms;

    if (verbose === true) {
        console.log('[TIMER] stop  - %s', timer_name);
    }

    var timer = internals.timers[timer_name];
    timer.stop = internals.now();
    timer.delta = timer.stop - timer.start;

    if (verbose === true) {
        console.log('[TIMER] delta - %s: %s (%s seconds)', timer_name, timer.delta, timer.delta/1000);
    }

    ms = timer.delta;

    delete internals.timers[timer_name];

    return ms;
};
