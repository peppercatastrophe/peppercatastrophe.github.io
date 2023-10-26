const elementDminimalism = document.querySelector('#Dminimalism')
const htmlDminimalism = elementDminimalism.innerHTML

const elementSalingSilang = document.querySelector('#SalingSilang')
const htmlSalingSilang = elementSalingSilang.innerHTML
console.log('baris 6')
elementSalingSilang.innerHTML = ''

function emptyContent() {
    elementDminimalism.innerHTML = ''
    elementSalingSilang.innerHTML = ''
}

function showSalingSilang() {
    emptyContent()
    elementSalingSilang.innerHTML = htmlSalingSilang
}

function showDMinimalism() {
    emptyContent()
    elementDminimalism.innerHTML = htmlDminimalism
}