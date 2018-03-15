var gitbook = window.gitbook;
var options;
var imgUrls;
var time;
gitbook.events.bind('start', function (e, config){
    // Save config data
    options = config['change_girls'] || {};
    imgUrls = options.urls || ["http://o7cqr8cfk.bkt.clouddn.com/18-3-4/62171757.jpg-atguiguImg"];
    time = options.time || 5;

});
var id;
gitbook.events.bind("page.change", function (){
    var index = 0;
    clearInterval(id);
    $("<div>").addClass("girls").prependTo($(".book-body"));
    $(".girls").css("backgroundImage", "url(" + imgUrls[index++] + ")");
    id = setInterval(function (){
        $(".girls").css("backgroundImage", "url(" + imgUrls[index++] + ")");
        if (index == imgUrls.length) index = 0;
    }, time * 1000);
})

/*require(['gitbook', 'jQuery'], function (gitbook, $){
    var options;
    var imgUrls = ["http://o7cqr8cfk.bkt.clouddn.com/18-3-4/62171757.jpg-atguiguImg"];
    var time = 5;
    gitbook.events.bind('start', function (e, config){
        options = config['change_girls'];
        $("<div>").addClass("girls").prependTo($(".book-body"));
        options && options.urls && (imgUrls = options.urls);
        options.time && (time = options.time);
        var index = 0;
        $(".girls").css("backgroundImage", "url(" + imgUrls[index++] + ")");
        setInterval(function (){
            $(".girls").css("backgroundImage", "url(" + imgUrls[index++] + ")");
            if (index == imgUrls.length) index = 0;
        }, time * 1000);
    });

});*/


