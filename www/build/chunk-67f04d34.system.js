System.register([], function (exports) {
    'use strict';
    return {
        execute: function () {
            exports({
                a: hapticSelectionStart,
                b: hapticSelectionEnd,
                c: hapticSelection,
                h: hapticSelectionChanged
            });
            /**
             * Check to see if the Haptic Plugin is available
             * @return Returns `true` or false if the plugin is available
             */
            function hapticAvailable() {
                var engine = window.TapticEngine;
                return !!engine;
            }
            /**
             * Trigger a selection changed haptic event. Good for one-time events
             * (not for gestures)
             */
            function hapticSelection() {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.selection();
                }
            }
            /**
             * Tell the haptic engine that a gesture for a selection change is starting.
             */
            function hapticSelectionStart() {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.gestureSelectionStart();
                }
            }
            /**
             * Tell the haptic engine that a selection changed during a gesture.
             */
            function hapticSelectionChanged() {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.gestureSelectionChanged();
                }
            }
            /**
             * Tell the haptic engine we are done with a gesture. This needs to be
             * called lest resources are not properly recycled.
             */
            function hapticSelectionEnd() {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.gestureSelectionEnd();
                }
            }
            /**
             * Use this to indicate success/failure/warning to the user.
             * options should be of the type `{ type: 'success' }` (or `warning`/`error`)
             */
            function hapticNotification(options) {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.notification(options);
                }
            }
            /**
             * Use this to indicate success/failure/warning to the user.
             * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
             */
            function hapticImpact(options) {
                var engine = window.TapticEngine;
                if (engine) {
                    engine.impact(options);
                }
            }
        }
    };
});
