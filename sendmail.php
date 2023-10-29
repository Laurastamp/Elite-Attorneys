<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["your-name"];
    $email = $_POST["your-email"];
    $subject = $_POST["your-subject"];
    $message = $_POST["your-message"];

    // Recipient email address (your private email)
    $to = "laura@eliteattorneys.us";

    // Email headers
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        // Email sent successfully
        echo json_encode(array("success" => true));
    } else {
        // Email sending failed
        echo json_encode(array("success"=> false, "error" => "Failed to send email."));
    }
}
?>