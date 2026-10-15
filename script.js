const angkaA = document.getElementById("angka-a");
const angkaB = document.getElementById("angka-b");
const tombolTambah = document.getElementById("tombol-tambah");
const tombolKurang = document.getElementById("tombol-kurang");
const tombolKali = document.getElementById("tombol-kali");
const tombolBagi = document.getElementById("tombol-bagi");
const tombolHapus = document.getElementById("tombol-hapus");
const hasil = document.getElementById("hasil");
const statistik = document.getElementById("statistik");
const sifatHasil = document.getElementById("sifat-hasil");
const tombolPanduan = document.getElementById("tombol-panduan");
const panduan = document.getElementById("panduan");
const infoPembuat = document.getElementById("info-pembuat");

let jumlahPerhitungan = 0;
let panduanTampil = false;
const namaPembuat = "Abdul Rosyid Al Khoerum";

function hitung(operasi) {
  if (angkaA.value === "" || angkaB.value === "") {
    hasil.textContent = "Masukkan kedua angka!";
    sifatHasil.textContent = "Sifat hasil: -";
    return;
  }

  const a = Number(angkaA.value);
  const b = Number(angkaB.value);
  let hasilHitung = 0;

  if (operasi === "tambah") {
    hasilHitung = a + b;
  } else if (operasi === "kurang") {
    hasilHitung = a - b;
  } else if (operasi === "kali") {
    hasilHitung = a * b;
  } else if (operasi === "bagi") {
    if (b === 0) {
      hasil.textContent = "Tidak dapat dibagi 0!";
      sifatHasil.textContent = "Sifat hasil: -";
      return;
    }
    hasilHitung = a / b;
  }

  hasil.textContent = "Hasil: " + hasilHitung;

  jumlahPerhitungan = jumlahPerhitungan + 1;
  statistik.textContent = "Jumlah perhitungan: " + jumlahPerhitungan;

  if (hasilHitung > 0) {
    sifatHasil.textContent = "Sifat hasil: Positif";
  } else if (hasilHitung < 0) {
    sifatHasil.textContent = "Sifat hasil: Negatif";
  } else {
    sifatHasil.textContent = "Sifat hasil: Nol";
  }
}

tombolTambah.addEventListener("click", function () {
  hitung("tambah");
});

tombolKurang.addEventListener("click", function () {
  hitung("kurang");
});

tombolKali.addEventListener("click", function () {
  hitung("kali");
});

tombolBagi.addEventListener("click", function () {
  hitung("bagi");
});

tombolHapus.addEventListener("click", function () {
  angkaA.value = "";
  angkaB.value = "";
  hasil.textContent = "Hasil: 0";
  sifatHasil.textContent = "Sifat hasil: -";
});

tombolPanduan.addEventListener("click", function () {
  panduanTampil = !panduanTampil;

  if (panduanTampil) {
    panduan.style.display = "block";
    tombolPanduan.textContent = "Sembunyikan Panduan";
  } else {
    panduan.style.display = "none";
    tombolPanduan.textContent = "Tampilkan Panduan";
  }
  
  infoPembuat.textContent = "© 2026 " + namaPembuat + " - Praktikum Pemrograman Web Dasar";
});