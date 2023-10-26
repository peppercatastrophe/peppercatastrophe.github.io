const objectKeranjang = {}
const elementTabelKeranjang = document.querySelector('#tabel-keranjang')
const htmlHeadTabel = `<thead>
<tr>
    <th scope="col">Hapus</th>
    <th scope="col">Gambar</th>
    <th scope="col">Produk</th>
    <th scope="col">Harga</th>
    <th scope="col">Jumlah</th>
    <th scope="col">Harga</th>
</tr>
</thead>`


function tambahkanKeKeranjang(id) {
    if (!objectKeranjang[id]) {
        
        for (let i = 0; i < arrayPakaiSampaiHabis.length; i++) {
            const objectBarang = arrayPakaiSampaiHabis[i];
            if (objectBarang.id === id) {
                objectKeranjang[id] = objectBarang
            }
        }
        objectKeranjang[id].kuantitas = 0
    }

    objectKeranjang[id].kuantitas++
    console.log(objectKeranjang)
}

function refreshKeranjang() {
  document.querySelector('#tabel-keranjang').innerHTML = htmlHeadTabel
  tampilkanKeranjang()
}

function hapusBarangDariKeranjang(id) {
  delete objectKeranjang[id]
  refreshKeranjang()
}

function tambahKuantitasBarang(id) {
  objectKeranjang[id].kuantitas++
  refreshKeranjang()
}

function kurangKuantitasBarang(id) {
  objectKeranjang[id].kuantitas--
  if (objectKeranjang[id].kuantitas === 0) {
    hapusBarangDariKeranjang(id)
  }
  refreshKeranjang()
}

function tampilkanKeranjang() {
  const arrayKey = Object.keys(objectKeranjang)
  if (arrayKey.length === 0){
    return
  }
  let totalHarga = 0
  for (let i = 0; i < arrayKey.length; i++) {
    const key = arrayKey[i];
    const barang = objectKeranjang[key]
    const id = barang.id
    const nama = barang.nama
    const gambar = barang.gambar
    const harga = barang.harga
    const kuantitas = barang.kuantitas
    totalHarga += harga * kuantitas
    const htmlBarangDiKeranjang = `
    <tbody class="align-middle">
    <tr>
      <th scope="row"><a href="#"><i class="bi bi-trash text-danger fs-4" onclick="hapusBarangDariKeranjang('${id}')"></i></a></th>
      <td><img src="${gambar}" class="img-keranjang"></td>
      <td>${nama}</td>
      <td>Rp. ${harga}</td>
      <td>
        <button type="button" class="btn btn-dark btn-sm" onclick="kurangKuantitasBarang('${id}')"><i class="bi bi-dash-circle"></i></button>
        <span class="mx-2" id="${id}">${kuantitas}</span>
        <button type="button" class="btn btn-dark btn-sm" onclick="tambahKuantitasBarang('${id}')"><i class="bi bi-plus-circle"></i></button>
      </td>
      <td>Rp. ${harga * kuantitas}</td>
    </tr>
    </tbody>`
    document.querySelector('#tabel-keranjang').innerHTML += htmlBarangDiKeranjang
  }



  const htmlRowTotalHarga = `<tbody class="align-middle">
  <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td>Total:</td>
    <td>Rp. ${totalHarga}</td>
  </tr>
  </tbody>`
  document.querySelector('#tabel-keranjang').innerHTML += htmlRowTotalHarga

  const htmlLastRow = `<tbody class="align-middle">
  <tr>
    <th scope="row"></th>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><a class="btn btn-primary" onclick="">Checkout</a></td>
  </tr>
  </tbody>`
  document.querySelector('#tabel-keranjang').innerHTML += htmlLastRow
}