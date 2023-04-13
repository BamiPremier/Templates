(function() {
    function isTouchDevice() {
        return (('ontouchstart' in window) ||
            (navigator.MaxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }

    window.ctSettings.isTouch = isTouchDevice();

    function userAgentDetection() {
        var ua = navigator.userAgent.toLowerCase(),
        platform = navigator.platform.toLowerCase(),
        UA = ua.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, 'unknown', 0],
        mode = UA[1] == 'ie' && document.documentMode;

        window.ctBrowser = {
            name: (UA[1] == 'version') ? UA[3] : UA[1],
            version: UA[2],
            platform: {
                name: ua.match(/ip(?:ad|od|hone)/) ? 'ios' : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ['other'])[0]
                }
        };
            }

    window.updateCTClientSize = function() {
        if (window.ctOptions == null || window.ctOptions == undefined) {
            window.ctOptions = {
                first: false,
                clientWidth: 0,
                clientHeight: 0,
                innerWidth: -1
            };
        }

        window.ctOptions.clientWidth = window.innerWidth || document.documentElement.clientWidth;
        if (document.body != null && !window.ctOptions.clientWidth) {
            window.ctOptions.clientWidth = document.body.clientWidth;
        }

        window.ctOptions.clientHeight = window.innerHeight || document.documentElement.clientHeight;
        if (document.body != null && !window.ctOptions.clientHeight) {
            window.ctOptions.clientHeight = document.body.clientHeight;
        }
    };

    window.updateCTInnerSize = function(width) {
        window.ctOptions.innerWidth = width != undefined ? width : (document.body != null ? document.body.clientWidth : 0);
    };

    userAgentDetection();
    window.updateCTClientSize(true);

    window.ctSettings.lasyDisabled = window.ctSettings.forcedLasyDisabled || (!window.ctSettings.mobileEffectsEnabled && (window.ctSettings.isTouch || window.ctOptions.clientWidth <= 800));
})();
