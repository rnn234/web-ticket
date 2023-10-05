$(document).ready(function() {
    function loadNotifications() {
        $.ajax({
            url: "data.php", // Pastikan URL ke berkas PHP yang benar
            type: "GET",
            dataType: "json",
            success: function(response) {
                $("#notif").text(response.notifications.length);
                $("#pesan").empty(); // Kosongkan kontainer pesan notifikasi

                response.notifications.forEach(function(notification) {
                    var newNotification = `
                    <div class="ticket-card">
                        <div class="ticket-header">
                            <span class="ticket-id">${notification.id_report}</span>
                            <div class="waktu">
                                <span class="ticket-date">${notification.tanggal}</span>
                            </div>      
                        </div>
                        <div class="ticket-content">
                            <div class="ticket-info">
                                <div class="ticket-staloc">
                                    <h2 class="ticket-name">${notification.nama}</h2>
                                    <p class="ticket-status">Status: ${notification.pelapor}</p>
                                    <p class="ticket-location">Location: ${notification.lokasi}</p>
                                </div>
                            </div>
                            <div class="ticket-issue">
                                <p class="issue-text">${notification.jenis}</p>
                                <span>Pengerjaan: ${notification.status}</span> <br>
                                <span>dikerjakan oleh: ${notification.tenagakerja}</span>
                            </div>
                            <div class="ticket-description">
                                <div class="description-box">
                                ${notification.deskripsi}
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


// =============================================================


