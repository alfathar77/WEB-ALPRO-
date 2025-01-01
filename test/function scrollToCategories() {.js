function scrollToCategories() {
    document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
}

function filterCategory(category) {
    alert(`Anda memilih kategori: ${category}`);
    // Tambahkan logika untuk menampilkan hanya pakaian dari kategori tersebut
}

document.querySelectorAll(".product button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Produk berhasil ditambahkan ke keranjang!");
    });
});


