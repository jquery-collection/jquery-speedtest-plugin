
(function($) {
    $.fn._speedTest = function(options) {

        function foo(){
            var stest = $.extend({
                    fileSize: null,
                    fileType: null,
                    fileUrl: null,
                    waitingText: null,
                    errorText: null

                }, options),
                duration, download, startTime, endTime, bitsLoaded,cacheBuster,speedMbps,speedKbps,speedBps,p;


                if (stest.fileType == "text") {
                    download = new Document();
                } else if (stest.fileType == "image") {
                    download = new Image();
                }

                if (stest.errorText) {
                    download.onerror = function(err, msg) {
                        $(this).text(stest.errorText);
                    };
                } //error if

                startTime = (new Date()).getTime();
                cacheBuster = "?spdt=" + startTime;
                download.src = stest.fileUrl + cacheBuster;
                 p = function see(){
                   endTime = (new Date()).getTime();
                   duration = (endTime - startTime) / 1000;
                   bitsLoaded = stest.fileSize * 8;
                   speedBps = (bitsLoaded / duration).toFixed(2);
                   console.log(speedBps);
                   speedKbps = (speedBps / 1024).toFixed(2);
                   console.log(speedKbps);
                   speedMbps = (speedKbps / 1024).toFixed(2);
                   console.log(speedMbps);
                   return speedMbps;
               };
                return p;
        }// end of foo


        return this.each(function() {
            var g = foo();
            $(this).text(g);
        }); //end of for each function

    }; //end of the main function
}(jQuery));
