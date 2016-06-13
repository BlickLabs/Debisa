$("#myNavbarWeb a,#myNavbarMobile a, .click-scrolling ").on('click', function (event) {
    event.preventDefault();
    var pageRef = $(this).attr("href");
    var offset = 80;
    if(pageRef[0] != '#') {
        $('#navbar-collapse').removeClass('in');
        window.location.href = pageRef;
    }
    else{
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top -50
        }, 800, function () {
            $('#navbar-collapse').removeClass('in');
            window.location.hash = hash;
        });
    }
});
$('.header-container, .borders, .click-scrolling').click(function () {
    $('#navbar-collapse').removeClass('in');
});
$('#navbar-trigger').click(function () {
    $('#navbar-collapse').addClass('in');
});