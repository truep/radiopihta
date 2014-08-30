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

$(function () {
    $('#loadcontent').load('content/main.html');

    $('ul#menu li').click(function () {
        var linkname = $(this).attr('class');
        var link = 'content/' + linkname + '.html';
        if (linkname != "download") {
            $('#loadcontent').load(link);
            $('ul#menu li').children('a').removeClass('active');
            $(this).children('a').addClass('active');
        } else {}
    });
});