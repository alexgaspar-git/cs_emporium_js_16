let pitiPoin = document.querySelectorAll('#pitiPoin>div')
let rProducts = document.querySelectorAll('.rProducts')


pitiPoin[0].onclick = (e) => {
    pitiPoin.forEach(el => {
        el.style.backgroundColor = ""
        e.target.style.backgroundColor = "red"
    });
    rProducts.forEach(el => {
        el.style.left = "0"
    });
}
pitiPoin[1].onclick = (e) => {
    pitiPoin.forEach(el => {
        el.style.backgroundColor = ""
        e.target.style.backgroundColor = "red"
    });
    rProducts.forEach(el => {
        el.style.left = "-23%"
    });
}
pitiPoin[2].onclick = (e) => {
    pitiPoin.forEach(el => {
        el.style.backgroundColor = ""
        e.target.style.backgroundColor = "red"
    });
    rProducts.forEach(el => {
        el.style.left = "-46%"
    });
}
pitiPoin[3].onclick = (e) => {
    pitiPoin.forEach(el => {
        el.style.backgroundColor = ""
        e.target.style.backgroundColor = "red"
    });
    rProducts.forEach(el => {
        el.style.left = "-69%"
    });
}