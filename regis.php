<?php 

session_start();

include "function.php";
 
error_reporting(0); 
 
if (isset($_SESSION['username'])) {
    header("Location: login.php");
}

 
if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $password = md5($_POST['password']);
    $cpassword = md5($_POST['cpassword']);
    $status = $_POST['status'];
 
    if ($password == $cpassword) {
        $sql = "SELECT * FROM akun WHERE email='$email'";
        $result = mysqli_query($conn, $sql);
        if (!$result->num_rows > 0) {
            $sql = "INSERT INTO akun (username, nama, email, password, status)
            VALUES ('$username','$nama','$email', '$password', '$status')";
            $result = mysqli_query($conn, $sql);
            if ($result) {
                echo "<script>alert('Selamat, registrasi berhasil!')</script>";
                $username = "";
                $nama = "";
                $email = "";
                $_POST['password'] = "";
                $_POST['cpassword'] = "";
                $status = "";
            } else {
                echo "<script>alert('Woops! Terjadi kesalahan.')</script>";
            }
        } else {
            echo "<script>alert('EMAIL TIDAK BISA DIDAFTAR 2 KALI.')</script>";
        }
         
    } else {
        echo "<script>alert('Password Tidak Sesuai')</script>";
    }
}

?>
 
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" type="text/css" href="style.css">
 
    <title>Niagahoster Register</title>
</head>
<body>
    <div class="container">
        <form action="regis.php" method="POST" class="login-email">
            <p class="login-text" style="font-size: 2rem; font-weight: 800;">Register</p>

            <div class="input-group">
                <label>username</label>
                <br>
                <input type="text" id="username" name="username" required>
            </div>

            <div class="input-group">
                <label>nama</label>
                <br>
                <input type="text" id="nama" name="nama"  required>
            </div>

            <div class="input-group">
                <label>email</label>
                <br>
                <input type="email" id="email" name="email" required>
            </div>

            <div class="input-group">
                <label>password</label>
                <br>
                <input type="password" id="password" name="password" minlength="6" required>
            </div>

            <div class="input-group">
                <label>confirm password</label>
                <br>
                <input type="password" id="cpassword" name="cpassword" minlength="6" required>
            </div>

            <div class="input-group">
                <select name="status" id="status" >
                    <option disabled selected value> Pilih status anda </option>
                    <option value="mahasiswa">mahasiswa</option>
                    <option value="pegawai">pegawai</option>
                    <option value="dosen">dosen</option>
                </select>
            </div>

            <div class="input-group">
                <button type="submit" value="submit" name="submit" class="btn">Register</button>
            </div>
            <p class="login-register-text">Anda sudah punya akun? <a href="login.php">Login </a></p>
        </form>
    </div>
</body>
</html>
