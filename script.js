// ====================
// LOGIN
// ====================

function masukWebsite() {

    let nama = document.getElementById("nama").value;
    let npm = document.getElementById("npm").value;
    let kelas = document.getElementById("kelas").value;

    if (nama == "" || npm == "" || kelas == "") {
        alert("Isi semua data terlebih dahulu!");
        return;
    }

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("homePage").style.display = "block";

    document.getElementById("dataUser").innerHTML =
        "Nama: " + nama +
        " | NPM: " + npm +
        " | Kelas: " + kelas;

    bukaMenu("materi");

}


// ====================
// MENU
// ====================

function bukaMenu(id) {

    let semuaMenu = document.getElementsByClassName("menuContent");

    for (let i = 0; i < semuaMenu.length; i++) {
        semuaMenu[i].style.display = "none";
    }

    document.getElementById(id).style.display = "block";

}


// ====================
// KALKULATOR SEDERHANA
// ====================

function hitungLimit() {

    let fungsi = document.getElementById("fungsi").value;
    let nilaiX = document.getElementById("nilaiX").value;

    if (fungsi == "" || nilaiX == "") {

        alert("Masukkan fungsi dan nilai x!");

        return;

    }

    document.getElementById("hasilKalkulator").innerHTML =
        "<h3>Hasil</h3>" +
        "<p>Fungsi: " + fungsi + "</p>" +
        "<p>x mendekati: " + nilaiX + "</p>" +
        "<p><b>Fitur kalkulator lengkap akan ditambahkan nanti.</b></p>";

}


// ====================
// RESET KALKULATOR
// ====================

function resetKalkulator() {

    document.getElementById("fungsi").value = "";
    document.getElementById("nilaiX").value = "";

    document.getElementById("hasilKalkulator").innerHTML =
        "Hasil perhitungan akan muncul di sini.";

}


// ====================
// SOAL SEDERHANA
// ====================

function cekJawaban() {

    document.getElementById("hasilSoal").innerHTML =
        "<h3>Latihan soal 50 nomor akan ditambahkan nanti.</h3>";

}