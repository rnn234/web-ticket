<?php

require "function.php";

if(isset($_POST['submit'])){
    if(inputreport($_POST) > 0){
        echo"<script>alert('berhasil menambahkan report!');document.location.href='index.php'</script>";
    }
}

?>