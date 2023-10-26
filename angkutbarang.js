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
    document.getElementById('cardContainer').innerHTML=''
    for (let i = 0; i < arrayAngkut.length; i++) {
        const satu = arrayAngkut[i];
        console.log(satu.gambar);
        if(!satu){
            continue
        }
        
            let stringHtml=`
        
            <div class="card container mb-3  "  style="width: 18rem; display:inline-block; margin-left:20px">
                <img class="card-img-top" style="width: 200px; margin-left:30px" src="${satu.gambar}"  alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${satu.nama}</h5>
                <p class="card-text">${satu.deskripsi}</p>
                <button class="btn btn-primary"> Change</button>
                 </div>
          </div>
          `

          document.getElementById('cardContainer').innerHTML+=stringHtml
        
       
       
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






