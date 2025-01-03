let bilangan = prompt('Masukkan bilangan bang!');
if (isNaN(bilangan)) {
    alert('Input harus berupa angka.');
} else {
    if (bilangan % 2 === 0) {
        alert(`${bilangan} adalah bilangan genap.`);
    } else {
        alert(`${bilangan} adalah bilangan ganjil.`);
    }
}