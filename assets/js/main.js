$('.header-container, .borders, .click-scrolling').click(function () {
    $('#navbar-collapse').removeClass('in');
});
$('#navbar-trigger').click(function () {
    $('#navbar-collapse').addClass('in');
});
jQuery.extend(jQuery.validator.messages, {
    required: "Este campo es obligatorio",
    remote: "Please fix this field",
    email: "Ingresa una dirección de correo válida",
    url: "Ingresa una URL válida",
    date: "Ingresa una fecha válida",
    dateISO: "Ingresa una fecha válida (ISO)",
    number: "Ingresa un número válido",
    digits: "Solo se permiten números dígitos",
    creditcard: "Ingresa un número de tarjeta válido",
    equalTo: "Los valores deben coincidir",
    accept: "Please enter a value with a valid extension",
    maxlength: jQuery.validator.format("No ingreses más de {0} caracteres"),
    minlength: jQuery.validator.format("Ingresa al menos {0} caracteres"),
    rangelength: jQuery.validator.format("El texto debe tener entre {0} y {1} caracteres"),
    range: jQuery.validator.format("Ingresa un valor entre {0} y {1}"),
    max: jQuery.validator.format("Ingresa un valor menor o igual que {0}"),
    min: jQuery.validator.format("Ingresa un valor mayor o igual que {0}")
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
            required: false,
            number: true
        },
        contact_message: {
            required: true
        }
    },
    submitHandler: function(form) {
        $.ajax({
          type: 'POST',
          url: 'send_mail.php',
          data: $(form).serialize(),
          success: function(data){
            $('<div class="alert alert-success">Tu mensaje fue enviado</div>')
              .insertBefore($(form));
          },
          error: function (data) {
            $('<div class="alert alert-danger">Ocurrió un error: <br/>' + data.statusText + '</div>')
              .insertBefore($(form));
          },
          complete: function () {
            $(form)[0].reset();
            setTimeout(function () {
              $(form).siblings('.alert').remove();
              $('#contact-modal').modal('hide');
            }, 3000);
          }
        });
      }
});