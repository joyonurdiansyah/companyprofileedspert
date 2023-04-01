const formatToRupiah = (angka, prefix) => {
    var angkaString = angka.replace(/[^,\d]/g, '').toString(),
    angkaSplit = angkaString.split(','),
    sisa = angkaSplit[0].length % 3,
    rupiah = angkaSplit[0].substr(0, sisa),
    ribuan = angkaSplit[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        let separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
    
    rupiah = angkaSplit[1] !== undefined ? rupiah + ',' + angkaSplit[1] : rupiah;
    
    return prefix === undefined ? rupiah : (rupiah ? 'Rp ' + rupiah : '');

}

export default formatToRupiah