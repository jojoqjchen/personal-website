<?php
if($_POST["message"]) {
    mail("jojochen@berkeley.edu", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>
