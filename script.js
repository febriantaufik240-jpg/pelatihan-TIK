// 1. pilih tombol berdasarkan ID-nya
const tombol sapa = documen.getElementById('sapaButton');
//2. tambahkan 'event listener'untuk aksi 'clik'
tombol sapa.addEventListener('clik', function(){
    //3.jalankan kode ini ketika tombol di-klik
     alert('Halo! Terima kasih sudah berkunjung!');
});
