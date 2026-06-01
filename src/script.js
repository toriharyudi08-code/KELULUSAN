// =========================================================
// DATA 16 SISWA (Silakan ubah Nama, NISN, Status, & Motivasi)
// =========================================================
const dataSiswa = [
    { 
        nama: "Ahmad Muzaki", 
        nisn: "0144711995", 
        status: "LULUS",
        foto: "https://i.postimg.cc/43Ty4qX6/Whats-App-Image-2026-05-29-at-19-53-36.jpg", 
        motivasi: "Selamat Zaki! Kerja keras dan ketekunanmu membuahkan hasil yang luar biasa. Pertahankan prestasimu di jenjang berikutnya!"
    },
    { 
        nama: "ALIFA MAHARANI", 
        nisn: "0149191535", 
        status: "LULUS",
        foto: "https://i.postimg.cc/R0QFWd0n/Whats-App-Image-2026-05-29-at-19-53-37-(6).jpg", 
        motivasi: "Selamat Alifa. Kejarlah Cita citamu setinggi langit, dan belajar lebih giat lagi!"
    },
    { 
        nama: "AQILA DZAHIRA HARYADI", 
        nisn: "0145581233", 
        status: "LULUS",
        foto: "https://i.postimg.cc/hGbjXsGr/Whats-App-Image-2026-05-29-at-19-53-42.jpg", 
        motivasi: "Selamat atas kelulusanmu! Semoga kesuksesan ini menjadi awal dari perjalanan panjang menuju cita-citamu."
    },
    { 
        nama: "ZIDAN MUHAMMAD FAHRI", 
        nisn: "0123391441", 
        status: "LULUS",
        foto: "https://i.postimg.cc/QMrCNwjg/Whats-App-Image-2026-05-29-at-19-53-37-(2).jpg", 
        motivasi: "Selamat! Pertahankan semangat belajarmu yang luar biasa ini di jenjang sekolah yang baru."
    },
    { 
        nama: "Chela Sevira Br Manjorang", 
        nisn: "0132298874", 
        status: "LULUS",
        foto: "https://i.postimg.cc/hPzVXFRx/16-jpg.jpg", 
        motivasi: "Alhamdulillah, selamat atas kelulusanmu. Teruslah menjadi kebanggaan orang tua dan guru!"
    },
    { 
        nama: "Enjel Sawalia Fitri", 
        nisn: "0144898070", 
        status: "LULUS",
        foto: "https://i.postimg.cc/wBdMxZ9k/Whats-App-Image-2026-05-29-at-19-53-37-(4).jpg", 
        motivasi: "Selamat ya! Masa depan cerah sedang menantimu. Terus melangkah dengan percaya diri."
    },
    { 
        nama: "GLADYS MIRACLE LACHA", 
        nisn: "0143348594", 
        status: "LULUS",
        foto: "https://i.postimg.cc/TPqwK0Pg/Whats-App-Image-2026-05-29-at-19-53-41.jpg", 
        motivasi: "Selamat atas pencapaian berharga ini. Jangan pernah lelah untuk menuntut ilmu!"
    },
    { 
        nama: "MIFTAHUR ROHIM", 
        nisn: "3135407294", 
        status: "LULUS",
        foto: "https://i.postimg.cc/DzK0fH7d/Whats-App-Image-2026-05-29-at-19-53-37-(1).jpg", 
        motivasi: "Hari ini kamu membuktikan bahwa kerja keras tidak akan mengkhianati hasil. Selamat!"
    },
    { 
        nama: "NAOMI NIKEN LARASATI", 
        nisn: "3131640040", 
        status: "LULUS",
        foto: "https://i.postimg.cc/GpJ24KpJ/Whats-App-Image-2026-05-29-at-19-53-42-(3).jpg", 
        motivasi: "Selamat lulus! Jadikan ilmu yang didapat selama ini sebagai pondasi meraih mimpi besarmu."
    },
    { 
        nama: "NIDA NURLIYANA", 
        nisn: "3138758900", 
        status: "LULUS",
        foto: "https://i.postimg.cc/d0m1h608/Whats-App-Image-2026-05-29-at-19-53-42-(2).jpg", 
        motivasi: "Selamat atas kelulusanmu! Gantungkan cita-citamu setinggi langit dan kejarlah dengan doa serta usaha."
    },
    { 
        nama: "NIMAS ANGGUN QUSAINI", 
        nisn: "0136253355", 
        status: "LULUS",
        foto: "https://i.postimg.cc/MGbTn5Gf/Whats-App-Image-2026-05-29-at-19-53-37-(5).jpg", 
        motivasi: "Selamat! Perjalanan baru telah menanti. Tetaplah menjadi pribadi yang tekun dan rendah hati."
    },
    { 
        nama: "NOUVAL HAFIZH RAMADHAN", 
        nisn: "0144500095", 
        status: "LULUS",
        foto: "https://i.postimg.cc/8CB574C6/Whats-App-Image-2026-05-29-at-19-53-37.jpg", 
        motivasi: "Selamat atas keberhasilanmu menyelesaikan tahap ini dengan sangat baik. Sukses selalu!"
    },
    { 
        nama: "SALMA NADIAH BELLA", 
        nisn: "0142590133", 
        status: "LULUS",
        foto: "https://i.postimg.cc/MG8HZNzy/Whats-App-Image-2026-05-29-at-19-53-37-(3).jpg", 
        motivasi: "Selamat lulus! Teruslah mengasah bakat dan potensimu di tingkat yang lebih tinggi."
    },
    { 
        nama: "SALWA NAJIBAH", 
        nisn: "3149684300", 
        status: "LULUS",
        foto: "https://i.postimg.cc/GpJ24Kpj/Whats-App-Image-2026-05-29-at-19-53-42-(4).jpg", 
        motivasi: "Selamat atas kelulusannya. Jadilah bintang yang selalu bersinar di mana pun kamu berada."
    },
    { 
        nama: "SANDI SAPUTRA", 
        nisn: "0142081659", 
        status: "LULUS",
        foto: "https://i.postimg.cc/5tMy9TfQ/Whats-App-Image-2026-05-29-at-19-53-36-(1).jpg", 
        motivasi: "Selamat! Keberhasilan hari ini adalah buah dari kesabaran dan doa yang tiada henti."
    },
    { 
        nama: "TAHTA NAYLA SIVA", 
        nisn: "0149705392", 
        status: "LULUS",
        foto: "https://placehold.co/120x160/png?text=Siswa+16", 
        motivasi: "Selamat atas kelulusanmu! Teruslah melangkah maju dan hadapi masa depan dengan penuh optimisme."
    }
];

// =========================================================
// LOGIKA SISTEM UTAMA (Jangan diubah)
// =========================================================
function periksaKelulusan(event) {
    event.preventDefault(); 

    const namaInput = document.getElementById("inputNama").value.trim();
    const nisnInput = document.getElementById("inputNisn").value.trim();
    const resultDiv = document.getElementById("result");

    const siswa = dataSiswa.find(s => 
        s.nama.toLowerCase() === namaInput.toLowerCase() && s.nisn === nisnInput
    );

    resultDiv.style.display = "block";

    if (siswa) {
        if (siswa.status === "LULUS") {
            resultDiv.className = "lulus";
            resultDiv.innerHTML = `
                <img src="${siswa.foto}" alt="Foto ${siswa.nama}" class="student-photo">
                <p>Selamat kepada <strong>${siswa.nama}</strong> (${siswa.nisn}), Anda dinyatakan:</p>
                <div class="result-status">LULUS</div>
                <div class="motivation-box">
                    <strong>Pesan Motivasi:</strong><br>
                    "${siswa.motivasi}"
                </div>
            `;
        } else {
            resultDiv.className = "tidak-lulus";
            resultDiv.innerHTML = `
                <img src="${siswa.foto}" alt="Foto ${siswa.nama}" class="student-photo">
                <p>Kepada <strong>${siswa.nama}</strong> (${siswa.nisn}), Anda dinyatakan:</p>
                <div class="result-status">TIDAK LULUS</div>
                <div class="motivation-box" style="color: #5c131a;">
                    <strong>Pesan Penyemangat:</strong><br>
                    "${siswa.motivasi}"
                </div>
            `;
        }
    } else {
        resultDiv.className = "tidak-ditemukan";
        resultDiv.innerHTML = `
            <p>Data tidak ditemukan.</p>
            <p style="font-size: 13px; margin-top: 5px;">Silakan periksa kembali Nama dan NISN yang Anda masukkan.</p>
        `;
    }
}