/*http://radiopixta.zapto.org/script/track.txt*/
function show() {
    $.ajax({
        url: "txt/track.txt",
        cache: false,
        success: function (html) {
            $("#title").html(html);
        }
    });
}

$(document).ready(function () {
    show();
    setInterval('show()', 5000);
});

setInterval(function () {
    $("#title").load("txt/track.txt");
}, 5000);
//
/*player
$(function () {
    $("#player").hide();
    $("h4.show_player").mousedown(function () {
        $("#player").slideToggle("slow");
    });
});
*/
// menu+content 
$(function () {
    var content = $("#loadcontent");
    content.load('content/main.html');
    $('ul#menu li').click(function () {
        var linkname = $(this).attr('class'),
            link = 'content/' + linkname + '.html';
        if (linkname != "download") {
            $(".images").slideUp("slow", function () {
                content.fadeOut("normal", function () {
                    content.load(link).fadeIn('normal');
                });
                $(this).delay(1000);
                $(".images").slideDown("normal");
            });
        } else {}
    });
    $(".logo-content").click(function () {
        $(".images").slideUp("slow", function () {
            content.fadeOut("normal", function () {
                content.load('content/main.html').fadeIn('normal');
            });
            $(this).delay(1000);
            $(".images").slideDown("normal");
        });
    });
});
// images