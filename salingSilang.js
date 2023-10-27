const arraySalingSilang = []

arraySalingSilang.push({
id:"SalingSilang1",
nama: "Sewa Motor",
deskripsi: "#SalingSilang Sewa Motor",
gambar: "img/SalingSilangMotor.jpg",
harga: 90000
})

arraySalingSilang.push({
id:"SalingSilang2",
nama: "Sewa Scooter",
deskripsi: "#SalingSilang Sewa Scooter",
gambar: "img/SalingSilangScooter.jpg",
harga: 80000
})

arraySalingSilang.push({
id:"SalingSilang3",
nama: "Sewa Rumah",
deskripsi: "#SalingSilang Sewa Rumah",
gambar: "img/SalingSilangRumah.jpg",
harga: 100000
})

arraySalingSilang.push({
id:"SalingSilang4",
nama: "Sewa Sepeda",
deskripsi: "#SalingSilang Sewa Sepeda",
gambar: "img/SalingSilangSepeda.jpg",
harga: 80000
})

function tampilkanBarangSalingSilang() {
    console.log('testing tampilkan barang');
    for (let i = 0; i < arraySalingSilang.length; i++) {
        const object = arraySalingSilang[i];
        if (!object) {
            continue
        }

        let idBarang = object.id
        let gambarBarang = object.gambar
        let namaBarang = object.nama
        let deskripsiBarang = object.deskripsi
        let hargaBarang = object.harga

        barangHTML = `<!-- card template -->
        <div class="col-md-4 mb-3">
        <div class="card" id="barang-${i}">
            <img src="${gambarBarang}" class="card-img-top" alt="..." height="196px">
            <div class="card-body">
            <h5 class="card-title">${namaBarang}</h5>
            <p class="card-text">${deskripsiBarang}</p>
            <p class="card-text fw-bold">Rp. ${hargaBarang}</p>
            <a href="#" class="btn btn-primary stretched-link" onclick="tambahkanSalingSilangKeKeranjang('${idBarang}')">Sewa sekarang</a>
            </div>
        </div>
        </div>
        <!-- end of card template -->`

        document.querySelector('#SalingSilangCards').innerHTML += barangHTML
    }
}

function tambahkanSalingSilangKeKeranjang(id) {
    if (!objectKeranjang[id]) {
        
        for (let i = 0; i < arraySalingSilang.length; i++) {
            const objectBarang = arraySalingSilang[i];
            if (objectBarang.id === id) {
                objectKeranjang[id] = objectBarang
            }
        }
        objectKeranjang[id].kuantitas = 0
    }

    objectKeranjang[id].kuantitas++
    console.log(objectKeranjang)
    document.querySelector('#logo-keranjang').classList.add('text-warning')
}