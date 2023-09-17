<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $phone = $_POST['phone'];
  
  // Generate and send OTP to the provided phone number
  // You can use any SMS gateway service to send the OTP
  
  // Redirect to OTP verification page
  header("Location: otp-verification.php?phone=$phone");
  exit();
}
?>
