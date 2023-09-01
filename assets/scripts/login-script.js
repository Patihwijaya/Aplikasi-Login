/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/*coment: membuat variabel untuk setiap elemen view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');
/*coment: membuat variabel untuk menyimpan informasi emmail dan password */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';
/* coment: menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // TODO 1 : Mendapatkan input email dan password pengguna dari form.
    /*coment: mendapatkan email dari masing-masing input (email dan password) ketika tombol ditekan */
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
    /*coment: memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan */
       if (email == expectedEmail && password == expectedPassword) {
        /*eoment: jika email sesuai maka program akan berpindah ke halaman home */
        goToHome();
    } else {
        /*coment: namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah */
        showPopUp();
    }
});
