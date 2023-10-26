const arrayPakaiSampaiHabis = []

arrayPakaiSampaiHabis.push({
  nama: "novel",
  deskripsi: "#AngkutBarang",
  gambar: "img/pakaiSampaiHabis/novel.png",
  harga: 180000
})

arrayPakaiSampaiHabis.push({
  nama: "Baju Bayi",
  deskripsi: "#PakaiSampaiHabis",
  gambar: "img/pakaiSampaiHabis/baby-clothes.png",
  harga: 80000
})

arrayPakaiSampaiHabis.push({
  nama: "Buku",
  deskripsi: "#SalingSilang",
  gambar: "img/pakaiSampaiHabis/buku.png",
  harga: 65000
})

arrayPakaiSampaiHabis.push({
  nama: "Robot",
  deskripsi: "#SalingSilang",
  gambar: "img/pakaiSampaiHabis/robot.png",
  harga: 77000
})

arrayPakaiSampaiHabis.push({
  nama: "Kaos",
  deskripsi: "#PakaiSampaiHabis",
  gambar: "img/pakaiSampaiHabis/shirt-men.png",
  harga: 75000
})

arrayPakaiSampaiHabis.push({
  nama: "Lampu Belajar",
  deskripsi: "#AngkutBarang",
  gambar: "img/pakaiSampaiHabis/lampu-belajar.png",
  harga: 29000
})

arrayPakaiSampaiHabis.push({
  nama: "Lampu Vintage",
  deskripsi: "#AngkutBarang",
  gambar: "img/pakaiSampaiHabis/vintage-lamp.png",
  harga: 220000
})

arrayPakaiSampaiHabis.push({
  nama: "Mainan Anak",
  deskripsi: "#AngkutBarang",
  gambar: "img/pakaiSampaiHabis/mainan.png",
  harga: 21000
})

function tampilkanBarang() {
    for (let i = 0; i < arrayPakaiSampaiHabis.length; i++) {
        const object = arrayPakaiSampaiHabis[i];
        if (!object) {
            continue
        }

        let gambarBarang = object.gambar
        let namaBarang = object.nama
        let deskripsiBarang = object.deskripsi
        let hargaBarang = object.harga

        barangHTML = `<!-- card template -->
        <div class="col">
          <div class="card" id="barang-${i}">
            <img src="${gambarBarang}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${namaBarang}</h5>
              <p class="card-text">${deskripsiBarang}</p>
              <a href="#" class="btn btn-primary">Rp. ${hargaBarang}</a>
            </div>
          </div>
        </div>
        <!-- end of card template -->`

        document.querySelector('#grid-card-container').innerHTML += barangHTML
    }
}

