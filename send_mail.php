<?php
error_reporting(E_ALL);

require './vendor/autoload.php';
use Mailgun\Mailgun;

$name = $_POST['contact_name'];
$email = $_POST['contact_email'];
$phone = $_POST['contact_phone'];
$message = $_POST['contact_message'];


/* Desarrollo */
$api_key = 'key-eb656047b090ea091ef7c5d2fbd83dc5';
// $send_to = '';
$send_to = 'sanchezpineda03@gmail.com';

$mgClient = new Mailgun($api_key);
$domain = "mg.test.com";

error_log("Antes de enviar el mail", 0);

    $result = $mgClient->sendMessage($domain, array(
        'from' => 'Mavericks - Notificaciones <postmaster@'. $domain .'>',
        'to' => $send_to,
        'subject' => 'Nuevo contacto',
        'text' =>

        'Hola equipo de Mavericks.

        ' . $name . ' a enviado un nuevo mensaje

        Los datos son los siguientes

        Nombre del cliente: ' . $name . '
        Correo electrónico: ' . $email. '
        Tipo: ' . $type. '
        Mensaje:
        '. $message .'',
        'html' =>
        '<html>Hola equipo de Mavericks. <br>

        Los datos son los siguientes
        <ul>
        <li>Nombre del cliente: ' . $name . '</li>
        <li>Correo electrónico: ' . $email. '</li>
        <li>Tipo: ' . $type. '</li>
        <li>Mensaje: <p>'. $message .'</p> </li>
        </ul>
        <hr>
        </html>'
    ));

$response = '<div class="alert alert-success" role="alert">¡Tu mensaje ha sido enviado, pronto nos pondremos en contacto contigo!</div>';
echo $response;

?>
