System.register(['./chunk-a61457cf.system.js'], function (exports) {
    'use strict';
    var readTask, writeTask;
    return {
        setters: [function (module) {
                readTask = module.l;
                writeTask = module.w;
            }],
        execute: function () {
            exports('startStatusTap', startStatusTap);
            function startStatusTap(win) {
                win.addEventListener('statusTap', function () {
                    readTask(function () {
                        var width = win.innerWidth;
                        var height = win.innerHeight;
                        var el = win.document.elementFromPoint(width / 2, height / 2);
                        if (!el) {
                            return;
                        }
                        var contentEl = el.closest('ion-content');
                        if (contentEl) {
                            contentEl.componentOnReady().then(function () {
                                writeTask(function () { return contentEl.scrollToTop(300); });
                            });
                        }
                    });
                });
            }
        }
    };
});
