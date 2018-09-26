(function($) {
    // A simple speedtest plugin to check download speed in a network.
    //Author : Harsha Jagadish
    //Version : V 0.2
    // TODO: Add waiting message and waiting image
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

                // TODO: add more types to handle for download
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
                console.log("startTime:" + startTime);
                cacheBuster = "?spdt=" + startTime;
                download.src = stest.fileUrl + cacheBuster;
                p = function see(){
                    // TODO: change the calculation to handle the error management
                   endTime = (new Date()).getTime();
                   console.log("endTime:" + endTime);
                   duration = Math.max((endTime - startTime), 1) / 1000;
                   console.log("duration:"+duration);
                   bitsLoaded = stest.fileSize * 8;
                   speedBps = (bitsLoaded / duration).toFixed(2);
                   console.log(speedBps);
                   speedKbps = (speedBps / 1024).toFixed(2);
                   console.log(speedKbps);
                   speedMbps = (speedKbps / 1024).toFixed(2);
                   console.log(speedMbps);
                   return speedMbps;
               };
               $(download).on('load', function callback(){
                   p();
                   if(stest.onLoad){
                       stest.onLoad.call(this, duration, speedMbps)
                   }
               }).on('error',function(err, msg) {
                   p();
                   if(stest.onError){
                       stest.onError.call(this, duration, speedMbps, event)
                   }
               });
                return p;
        }// end of foo


        return this.each(function() {
            //TODO: remove too many variable names
            var g = foo();
            // TODO: make the speed extension as a variable to fit user needs
            // $(this).text(g).append("&nbsp; Mbps");
            // $(this).text(g).append("Mbps");
        }); //end of for each function

    }; //end of the main function
}(jQuery));
