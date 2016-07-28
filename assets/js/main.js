$('.header-container, .borders, .click-scrolling').click(function () {
    $('#navbar-collapse').removeClass('in');
});
$('#navbar-trigger').click(function () {
    $('#navbar-collapse').addClass('in');
});
$('#contact-modal form').validate({
    rules: {
        contact_name: {
            required: true
        },
        contact_email: {
            required: true,
            email: true
        },
        contact_phone: {
            required: true,
            number: true
        },
        contact_message: {
            required: true
        }
    }
});