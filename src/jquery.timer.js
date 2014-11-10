;(function ( $, window, document, undefined ) {

    var pluginName = "timer",
        defaults = {
            time: 120
        };

    function Plugin ( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.time = this.options.time;
        this.ticking = false;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            $(this.element).text(formatTime(this.time));
            $(this.element).on("click", {plugin: this},  function (event) {
                if (event.data.plugin.ticking === false) {
                    event.data.plugin.start();
                } else {
                    event.data.plugin.stop();
                }
            });
        },
        start: function () {
            this.ticking = true;
            var plugin = this;
            this.interval = setInterval(function () {
                tick.call(plugin);
            }, 1000);
        },
        stop: function () {
            this.ticking = false;
            clearInterval(this.interval);   
        }
    };

    function tick() {
        if (this.time === 0) {
            this.stop();
        } else {
            this.time--;
        }
        $(this.element).text(formatTime(this.time));
    }

    function formatTime(time) {
        var minutes = Math.floor(time / 60),
            seconds = time % 60;

        if (seconds < 10) {
            seconds = "0" + seconds.toString();
        }

        return minutes + ":" + seconds;
    }

    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );
