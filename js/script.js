const buttonDash1 = document.querySelector('.block-button');
const moneyDash1 = document.querySelector('.block-money');
buttonDash1.addEventListener('click', function (params) {
    buttonDash1.classList.toggle('block-button-active')
    let r = ((Math.random() * 10) - 4.5).toFixed(2);
    console.log(+r);
    buttonDash1.innerHTML = +r;
    let money = +moneyDash1.innerHTML;
    let tt = (+money + + buttonDash1.innerHTML).toFixed(2);
    moneyDash1.innerHTML = `${String(tt)} `
})


const diagr1 = document.querySelectorAll('.line__diagr1');
const diagr2 = document.querySelectorAll('.line__diagr2');
const diagr3 = document.querySelectorAll('.line__diagr3');
const diagr4 = document.querySelectorAll('.line__diagr4');
const diagrButton1 = document.querySelector('.block-color1__board2');
const diagrButton2 = document.querySelector('.block-color2__board2');
const diagrButton3 = document.querySelector('.block-color3__board2');
const Button1 = document.querySelector('.block-board2__color1');
const Button2 = document.querySelector('.block-board2__color2');
const Button3 = document.querySelector('.block-board2__color3');
diagrButton1.addEventListener('click', function (params) {
    for (const iterator1 of diagr1) {
        iterator1.classList.toggle('line__diagr-show')
    }
    for (const iterator2 of diagr4) {
        iterator2.classList.toggle('line__diagr-show')
    }
    Button1.classList.toggle('block-board2__color1-active')
})
diagrButton2.addEventListener('click', function (params) {
    for (const iterator of diagr3) {
        iterator.classList.toggle('line__diagr-show')
    }
    Button2.classList.toggle('block-board2__color2-active')
})
diagrButton3.addEventListener('click', function (params) {
    for (const iterator3 of diagr2) {
        iterator3.classList.toggle('line__diagr-show')
    }
    Button3.classList.toggle('block-board2__color3-active')
})
const blockCub1 = document.querySelector('.flex-info__board3-block1');
const blockCub2 = document.querySelector('.flex-info__board3-block2');
const blockCub3 = document.querySelector('.flex-info__board3-block3');
const blockCub4 = document.querySelector('.flex-info__board3-block4');
const cubik1 = document.querySelector('.cubik1');
const cubik2 = document.querySelector('.cubik2');
const cubik3 = document.querySelector('.cubik3');
const cubik4 = document.querySelector('.cubik4');
const blue = document.querySelector('.blue');
const yelow = document.querySelector('.yellow');
const cyan = document.querySelector('.cyan');
const pink = document.querySelector('.pink');
const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');
const bg3 = document.querySelector('.bg3');
const bg4 = document.querySelector('.bg4');
const gb = document.querySelector('.board3__text2');


blockCub1.addEventListener('click', function (params) {
    cubik1.classList.toggle('cubik1-active')
    blue.classList.toggle('active')
    bg4.classList.toggle('bg-active')
    gb.innerHTML = +gb.innerHTML + 30
})
blockCub2.addEventListener('click', function (params) {
    cubik2.classList.toggle('cubik2-active')
    yelow.classList.toggle('active')
    bg3.classList.toggle('bg-active')
    gb.innerHTML = +gb.innerHTML + 50
})
blockCub3.addEventListener('click', function (params) {
    cubik3.classList.toggle('cubik3-active')
    cyan.classList.toggle('active')
    bg2.classList.toggle('bg-active')
    gb.innerHTML = +gb.innerHTML - 40
})
blockCub4.addEventListener('click', function (params) {
    cubik4.classList.toggle('cubik4-active')
    pink.classList.toggle('active')
    bg1.classList.toggle('bg-active')
    gb.innerHTML = +gb.innerHTML - 10
})


const bg5 = document.querySelector('.bg5');
const bg6 = document.querySelector('.bg6');
const bg7 = document.querySelector('.bg7');
const bg8 = document.querySelector('.bg8');
const bg9 = document.querySelector('.bg9');
const gb2 = document.querySelector('.board4__text2');
bg5.addEventListener('click', function (params) {
    bg5.classList.toggle('active-bgg5')
    gb2.innerHTML = +gb2.innerHTML + 30
})
bg6.addEventListener('click', function (params) {
    bg6.classList.toggle('active-bgg6')
    gb2.innerHTML = +gb2.innerHTML - 40
})
bg7.addEventListener('click', function (params) {
    bg7.classList.toggle('active-bgg7')
    gb2.innerHTML = +gb2.innerHTML + 50
})
bg8.addEventListener('click', function (params) {
    bg8.classList.toggle('active-bgg8')
    gb2.innerHTML = +gb2.innerHTML - 10
})
bg9.addEventListener('click', function (params) {
    bg9.classList.toggle('active-bgg9')
    gb2.innerHTML = +gb2.innerHTML - 20
})

const but = document.querySelector('.button__board6')
const svgStr1 = document.querySelector('.svg-str1')
const svgStr2 = document.querySelector('.svg-str2')
const svgStr3 = document.querySelector('.svg-str3')
const svgStr4 = document.querySelector('.svg-str4')
const svgStr5 = document.querySelector('.svg-str5')

but.addEventListener('click', function (params) {
    but.classList.toggle('button__board6-active')
    svgStr1.classList.toggle('svg-str-active')
    svgStr5.classList.toggle('svg-str-active')
    svgStr4.classList.toggle('svg-str-active')
    svgStr3.classList.toggle('svg-str-active')
    svgStr2.classList.toggle('svg-str-active')


})