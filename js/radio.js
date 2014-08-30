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
// menu+content 
$(function () {
    var content = $("#loadcontent");
    content.load('content/main.html');
    $('ul#menu li').click(function () {
        var linkname = $(this).attr('class'),
            link = 'content/' + linkname + '.html';
        content.fadeOut("normal", function () {
            if (linkname != "download") {
                content.load(link).fadeIn('normal');
            } else {}
        });
    });
});