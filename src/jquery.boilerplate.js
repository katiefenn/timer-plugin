;(function ( $, window, document, undefined ) {

    var pluginName = "timer",
        defaults = {
        propertyName: "value"
    };

    function Plugin ( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.time = 120;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
        }
    };

    function formatTime(time) {
        var minutes = Math.floor(time / 60),
            seconds = time % 60;

        if (seconds < 10) {
            seconds = "0" + seconds.toString();
        }

        return minutes + ':' + seconds;
    };

    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );
