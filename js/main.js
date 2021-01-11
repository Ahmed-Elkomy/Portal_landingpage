let ApplyBtn=document.querySelectorAll('.Apply');




ApplyBtn.forEach(btn=>{
    btn.addEventListener('click' , (e)=>{
        e.preventDefault();
                // for overlay
            let overlay=document.createElement('div');
            overlay.className='popup-overlay';
            document.body.appendChild(overlay);
                // the container
            let popup_box=document.createElement('div');
            popup_box.className='popup_box';
            document.body.appendChild( popup_box);
            popup_box.innerHTML = `
            <div class="row">
            <div class="col-md">
                <div class="img">
                </div>
            </div>
            <div class="col-md">
                <div class="form">
                    <h2>Apply now</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sunt consequatur voluptatum quaerat</p>
                    <form>
                        <div class="name">
                            <input type="text" placeholder="First name">
                            <input type="text" placeholder="Last name">
                        </div>
                        <input type="text" class="block" placeholder="Email">
                        <input type="password" class="block" placeholder="Password">
                        <input type="text" class="block" placeholder="Mr:">
                        <div class="checked">
                            <div class="upper">
                                <input type="radio" name="tpye" id="">
                                <span>Terms & Conditions</span>
                            </div>
                            <div class="upper">
                                <input type="radio" name="tpye" id="">
                                <span>Data Protection Declaration</span>
                            </div>
                            <div class="down">
                                <input type="radio" name="tpye" id="">
                                <span>Newsletter</span>
                            </div>
                        </div>
                        <button class="res">SUBMIT  YOUR REQUEST
                        </button>
                    </form>
                    <p> Already have an account?<a href="login page.html">Log In now</a>
                    </p>
                </div>
            </div>
        </div>
        `;
        
    let sub=document.querySelector('.res');
    sub.addEventListener('click' , (e)=>{
        e.preventDefault();
        
        overlay.className='popup-overlay';
        document.body.appendChild(overlay);
        overlay.style.zIndex='100000'
        // the container
        let popup_box=document.createElement('div');
        popup_box.className='popup_box';
        popup_box.style.width='50%';
        popup_box.style.height='auto';
        document.body.appendChild( popup_box);
        popup_box.style.zIndex='100001';
        popup_box.innerHTML =`
            <div>
                <img src="img/thanks.png" class='w-100' alt="">
            </div>
            
            <h2 class='text-center mt-4'>Thank You
            </h2>
            <p class='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aliquid fuga ipsam nemo harum quis sequi reiciendis excepturi deleniti? Quo harum dolor cumque, veniam beatae quod vero doloribus perferendis quaerat.</p>
        `;
        // setInterval(()=>{
        //     location.reload();
        // },2000)
    })

    })
});


let LoginBtn=document.querySelector('.login');
LoginBtn.addEventListener('click' , (e)=>{
    e.preventDefault();

    let overlay=document.createElement('div');
        overlay.className='popup-overlay';
        document.body.appendChild(overlay);
        // the container
        let popup_box=document.createElement('div');
        popup_box.className='popup_box';
        document.body.appendChild( popup_box);
        popup_box.style.height='70%';
        popup_box.innerHTML = `
        <div class="row">
        <div class="col-md">
            <div class="img">
            </div>
        </div>
        <div class="col-md">
            <div class="form">
                <h2>login</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sunt consequatur voluptatum quaerat</p>
                <form>
                    <input type="text" class="block" placeholder="Email">
                    <input type="password" class="block" placeholder="password">
                    <div class="checked d-flex justify-content-between">
                        <div>   
                            <input type="radio">
                            <span>Remember password</span>
                        </div>
                        <a href="#">Forgot password</a>
                    </div>
                    <button>login</button>
                </form>
                <p>Don’t have an account?<a href="regestier.html"> Apply now</a></p>
            </div>
        </div>
    `;
})


