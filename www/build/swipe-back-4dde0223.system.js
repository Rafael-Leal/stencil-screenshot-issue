System.register(['./chunk-a61457cf.system.js', './index-609ae789.system.js'], function (exports) {
    'use strict';
    var createGesture;
    return {
        setters: [function () { }, function (module) {
                createGesture = module.createGesture;
            }],
        execute: function () {
            exports('createSwipeBackGesture', createSwipeBackGesture);
            function createSwipeBackGesture(el, canStartHandler, onStartHandler, onMoveHandler, onEndHandler) {
                var win = el.ownerDocument.defaultView;
                function canStart(detail) {
                    return detail.startX <= 50 && canStartHandler();
                }
                function onMove(detail) {
                    // set the transition animation's progress
                    var delta = detail.deltaX;
                    var stepValue = delta / win.innerWidth;
                    onMoveHandler(stepValue);
                }
                function onEnd(detail) {
                    // the swipe back gesture has ended
                    var delta = detail.deltaX;
                    var width = win.innerWidth;
                    var stepValue = delta / width;
                    var velocity = detail.velocityX;
                    var z = width / 2.0;
                    var shouldComplete = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
                    var missing = shouldComplete ? 1 - stepValue : stepValue;
                    var missingDistance = missing * width;
                    var realDur = 0;
                    if (missingDistance > 5) {
                        var dur = missingDistance / Math.abs(velocity);
                        realDur = Math.min(dur, 300);
                    }
                    onEndHandler(shouldComplete, stepValue, realDur);
                }
                return createGesture({
                    el: el,
                    gestureName: 'goback-swipe',
                    gesturePriority: 40,
                    threshold: 10,
                    canStart: canStart,
                    onStart: onStartHandler,
                    onMove: onMove,
                    onEnd: onEnd
                });
            }
        }
    };
});
