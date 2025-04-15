document.getElementById('inventoryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;

    fetch('php/functions.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            action: 'add',
            name: name,
            quantity: quantity,
            price: price
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('message').textContent = 'Barang berhasil ditambahkan!';
            document.getElementById('inventoryForm').reset();
        } else {
            document.getElementById('message').textContent = 'Gagal menambahkan barang.';
        }
    })
    .catch(error => console.error('Error:', error));
});