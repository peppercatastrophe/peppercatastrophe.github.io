const elementDminimalism = document.querySelector('#Dminimalism')
const htmlDminimalism = elementDminimalism.innerHTML

const elementSalingSilang = document.querySelector('#SalingSilang')
const htmlSalingSilang = elementSalingSilang.innerHTML

const elementAngkutBrangkas = document.querySelector('#AngkutBrangkas')
const htmlAngkutBrangkas = elementAngkutBrangkas.innerHTML

const elementPakaiSampaiHabis = document.querySelector('#PakaiSampaihabis')
const htmlPakaiSampaihabis = elementPakaiSampaiHabis.innerHTML

console.log('baris 6')
elementSalingSilang.innerHTML = ''
elementAngkutBrangkas.innerHTML=''
elementPakaiSampaiHabis.innerHTML = ''


function emptyContent() {
    elementDminimalism.innerHTML = ''
    elementSalingSilang.innerHTML = ''
    elementAngkutBrangkas.innerHTML=''
    elementPakaiSampaiHabis.innerHTML = ''
}

function showAngkutBrangkas() {
    emptyContent()
    elementAngkutBrangkas.innerHTML = htmlAngkutBrangkas
}

function showSalingSilang() {
    emptyContent()
    elementSalingSilang.innerHTML = htmlSalingSilang
}

function showDMinimalism() {
    emptyContent()
    elementDminimalism.innerHTML = htmlDminimalism
}

function showPakaiSampaihabis() {
    emptyContent()
    elementPakaiSampaiHabis.innerHTML = htmlPakaiSampaihabis
}