// console.log('test')
let arrayAngkut=[]


function klik(){
    let foto=document.querySelector("#photo").value
    console.log(foto);
    let barang = document.querySelector('#barang').value
      let sewa = document.querySelector('#sewa').value
      if(!barang){
          return alert('barang harus diisi')
          
        }
        if(!sewa){
            return alert('jenis harus diisi')
        }

// 
    let fileInput = document.querySelector("#photo");
    let displayImage = document.getElementById("displayImage");
     
         // Check if a file is selected
         if (fileInput.files.length > 0) {
             let file = fileInput.files[0];
             let reader = new FileReader();
     
             // When the file is loaded, set the source of the image
             reader.onload = function(e) {
                 displayImage.src = e.target.result;
             };
     
             // Read the selected file as a data URL
             reader.readAsDataURL(file);
         } else {
             // Clear the image source if no file is selected
             displayImage.src = "";
         }


        //  tampil4+=button.innerHTML='<button class="btn btn-primary"> Change</button>'

    let objekAngkut={
        nama:barang,
        deskripsi:sewa,
        gambar:displayImage.src
    }
    arrayAngkut.push(objekAngkut)
    document.getElementById('AngkutBrangkasCards').innerHTML=''
    for (let i = 0; i < arrayAngkut.length; i++) {
        const satu = arrayAngkut[i];
        console.log(satu.gambar);
        if(!satu){
            continue
        }
        
            let stringHtml=`
                <div class="col-md-4 mb-3">
                <div class="card">
                <img src="${satu.gambar}" class="card-img-top" alt="..." height="196px">
                <div class="card-body">
                <h5 class="card-title">${satu.nama}</h5>
                <p class="card-text">${satu.deskripsi}</p>
                <p class="card-text fw-bold">Free</p>
                <button class="btn btn-primary">Terima donasi</button>
                </div>
                </div>
                </div>
                `

          document.getElementById('AngkutBrangkasCards').innerHTML+=stringHtml
        
       
       
    }

         
}
function showImage() {
    let fileInput = document.querySelector("#photo");
    let displayImage = document.getElementById("displayImage");

    // Check if a file is selected
    if (fileInput.files.length > 0) {
        let file = fileInput.files[0];
        let reader = new FileReader();

        // When the file is loaded, set the source of the image
        reader.onload = function(e) {
            displayImage.src = e.target.result;
        };

        // Read the selected file as a data URL
        reader.readAsDataURL(file);
    } else {
        // Clear the image source if no file is selected
        displayImage.src = "";
    }
}






