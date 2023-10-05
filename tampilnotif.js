$(document).ready(function() {
    function loadNotifications() {
        $.ajax({
            url: "data_notif.php", // Pastikan URL ke berkas PHP yang benar
            type: "GET",
            dataType: "json",
            success: function(response) {
                $("#notif").text(response.notifications.length);
                $("#pesan").empty(); // Kosongkan kontainer pesan notifikasi

                response.notifications.forEach(function(notification) {
                    var newNotification = `
                        <div class="center-ticket">
                            <div class="card-ticket">
                                
                                <div class="atas-ticket">
                                    <div class="info-atas">
                                        <h2 class="code">${notification.id_report}</h2>
                                        <div class="tgl">
                                            <span>Tanggal:</span>
                                            <p>${notification.tanggal}</p>
                                        </div>
                                        <div class="jam">
                                            <span>Jam:</span>
                                            <p>${notification.jam}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tengah-ticket">
                                    <div class="kiri-ticket">
                                        <div class="tag-nama">
                                            <span>Nama:</span>
                                            <p>${notification.nama}</p>
                                        </div>
                                        <div class="tag-status">
                                            <span>Status</span>
                                            <p>${notification.pelapor}</p>
                                        </div>
                                        <div class="tag-lokasi">
                                            <span>Lokasi:</span>
                                            <p>${notification.lokasi}</p>
                                        </div>
                                    </div>
                                    <div class="kanan-ticket">
                                        <h1 class="problem">${notification.jenis}</h1>
                                        <div class="box-ket">
                                            <span>${notification.deskripsi}</span>
                                        </div>
                                        <span class="foot-title">Berikan feedback untuk masalah kamu!*</span>
                                    </div>
                                    <div class="feedback-ticket">
                                        <h1 class="feedback"><a href="../problem/form-feedback.html">Feedback</a></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

                    $("#pesan").append(newNotification); // Tambahkan pesan notifikasi ke kontainer
                });
            },
            error: function() {
                console.log("Terjadi kesalahan saat memuat pesan notifikasi.");
            }
        });
    }

    loadNotifications(); // Memuat pesan notifikasi saat halaman dimuat

    setInterval(loadNotifications, 5000); // Memuat pesan notifikasi setiap 5 detik
});
