// show current playing song

function show() {
    $.ajax({
        url: "scripts/get_song.py",
        cache: false,
        success: function (track) {
            $('#title').html(track);
        },
    });
};
setInterval('show()', 5000)


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