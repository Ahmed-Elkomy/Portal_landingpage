//To move between page
let goToreg=document.querySelectorAll('.go-res');
goToreg.forEach(btn=>{
    btn.addEventListener('click' , function(){
        console.log('welcomoe');
        window.location.href="regestier.html";
    });
})



let reg =document.querySelector('.res');
// to create popup thanks
reg.addEventListener('click' ,(e)=>{
    e.preventDefault();
    let overlay=document.createElement('div');
    overlay.className='popup-overlay';
    document.body.appendChild(overlay);
    let popup_box=document.createElement('div');
    popup_box.className='popup_box';

    document.body.appendChild( popup_box);

    let popupimg=document.createElement('img');
    popupimg.src='img/thanks.png';
    popup_box.appendChild(popupimg);

    let h2=document.createElement('h2');
    h2.innerHTML='thank you';

    let p=document.createElement('p');
    p.innerHTML='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aliquid fuga ipsam nemo harum quis sequi reiciendis excepturi deleniti? Quo harum dolor cumque, veniam beatae quod vero doloribus perferendis quaerat.';
    popup_box.appendChild(h2);
    popup_box.appendChild(p);

   setInterval(()=>{
    window.location.href="login page.html";
   },4000)

});

