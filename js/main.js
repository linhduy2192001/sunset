//chosse menu
let chooseMenu=document.querySelectorAll('.menu li a')
chooseMenu.forEach(function(menuitem){
    menuitem.addEventListener('click',function(){
        this.classList.add('active')
    })
})

let lang = document.querySelector('.header__btn '),
    langCurrent=document.querySelector('.header__btn .header__btn-lang '),
    langSelect=document.querySelector('.header__btn .header__btn-select'),
    langItems=document.querySelectorAll('.header__btn .header__btn-select li a')

    lang.addEventListener('click',function(e){
        e.preventDefault()
        e.stopPropagation()
        lang.classList.toggle('active')
    })
langItems.forEach(function(item){
    item.addEventListener('click',function(){
        let langText=this.textContent
        let langCurrentSpan=langCurrent.textContent
        langCurrent.innerHTML=langText
        this.innerHTML=langCurrentSpan
    })
})
document.addEventListener('click',function(){
    lang.classList.remove('active')
})


//menu mobile
function menuMobile(){
    const btnMenu =document.querySelector('.header .right .header__btn-menu') ,
    nav=document.querySelector('.nav')
    console.log(btnMenu)
    btnMenu.addEventListener('click',function(){
        btnMenu.classList.toggle('active')
        nav.classList.toggle('active')
    })
    function hideNav(){
        btnMenu.classList.remove('active')
        nav.classList.remove('active')
    }
    window.addEventListener('resize',function(){
        let w=window.innerWidth
        if (w>992){
            hideNav()
        }
    })
}
menuMobile()

function handleSliderHero(){
    //Khoi tao slider
    var slider = document.querySelector('.slider__list');
    if (!slider) return
    var flktySLider = new Flickity( 
    slider, 
        {
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround:true,
        prevNextButtons: false,
        autoPlay:true,
        }
    );

    let btnPrev=document.querySelector('.btnarrow.prev')
    let btnNext=document.querySelector('.btnarrow.next')
    console.log(btnPrev)
    btnPrev.addEventListener('click',function(e){
        e.preventDefault()
        flktySLider.previous(true)
    })
    btnNext.addEventListener('click',function(e){
        e.preventDefault()
        flktySLider.next(true)
    })
}
handleSliderHero()

//progress bar

function progressBar(){
    let progress = document.querySelector('.progressbar')
    window.addEventListener('scroll',function(){
        let scrollY = window.scrollY
        let percent = scrollY/ (document.body.offsetHeight - window.innerHeight) * 100
        progress.style.width= `${percent}%`
    })
}
progressBar()



//backtotop
function backToTop(){
    let btb=document.querySelector('.btb')
    window.addEventListener('scroll',function(){
        const y = window.pageYOffset
        if (y>this.document.querySelector('body').clientHeight/2){
            btb.classList.add('active')
        }else{
            btb.classList.remove('active')
        }
    })
    btb.addEventListener('click',function(e){
        e.preventDefault()
        window.scrollTo({
            'top':0,
            'behavior':"smooth",
        })
    })
}
backToTop()

//servie page
function handleServiceSlider(){
    var photo = document.querySelector('.posible .posible__slider .grid');
    if (!photo) return
    var flktySLider = new Flickity( 
    photo, 
        {
        cellAlign: 'center',
        contain: true,
        wrapAround:true,
        prevNextButtons:false,
        lazyLoad: 3,
        autoPlay:true
        }
    );
}
handleServiceSlider()

//menuyellow
let menu = document.querySelectorAll('.header__menu .menu a')
function removeActiveMenu(){
    menu.forEach(function(menu_element){
        menu_element.classList.remove('active')
    })
}
// menu.forEach(function(element){
//     element.addEventListener('click',function(e))
// })

// hide header
function hideHeader(){
    let lastScroll=0,
        header=document.querySelector('.header')
    document.addEventListener('scroll',function(){
        const scrollCurrent=window.pageYOffset
//neu no bang nhau thi no action
        if (scrollCurrent===lastScroll) return
// neu sau khi scroll ma current > last thi hide di
        if (scrollCurrent > lastScroll  &&  scrollCurrent > header?.clientHeight){
            
            header.classList.add('hide')
// neu nguoc lai thi show
        } else if (scrollCurrent < lastScroll) {
            header.classList.remove('hide')
        }
// sau tat cac action thi cap nhat lai diem scroll cuoi cung 
        lastScroll = scrollCurrent
})
}
hideHeader()

//popupvideo
function handleModalVideo(){
    let video = document.querySelector('.video'),
    btnClose=document.querySelector('.close'),
    iframeModalVideo=document.querySelector('iframe'),
    modalVideo=document.querySelector('.popupvideo')
    video?.addEventListener('click',function(e){
        e.preventDefault()
        modalVideo.classList.add('active')
        let dataID= video.getAttribute('data-video-src')
        iframeModalVideo.setAttribute('src',`https://www.youtube.com/embed/${dataID}?autoplay=1`)
    })

    function closeModal(){
        modalVideo.classList.remove('active')
        iframeModalVideo.setAttribute('src','')
    }
    btnClose?.addEventListener('click',function(){
        closeModal()
    })
    modalVideo?.addEventListener('click',function(){
        closeModal()
    })
}
handleModalVideo()


//tabs
function handleTabs(){
    let tabs=document.querySelectorAll('.btntab'),
        tabGallerys=document.querySelectorAll('.tab__gallery-item')
    tabs.forEach(function(tab){
      tab.addEventListener('click',function(){
        tabs.forEach(function(tab){
            tab.classList.remove('active')
        })
        //choose tab
        this.classList.add('active')
        //hide all tab
        tabGallerys.forEach(function(tabGallery){
            tabGallery.classList.remove('active')
        })

        let idTab=this.getAttribute('data-tab')

        document.querySelector('.tab__gallery-' + idTab).classList.add('active')
      })
    })
}
handleTabs()


// accordion
function handleAccordion(){
    const btnAccs=document.querySelectorAll('.accordion');
    const panels = document.querySelectorAll('.panel')

    btnAccs.forEach(function(btnAcc, index){
      btnAcc.addEventListener('click',function(e){
        const next = btnAcc.nextElementSibling;
        if(!btnAcc.classList.contains('active'))
        {
            btnAcc.classList.add('active')
            next.classList.add('active')
            next.style.height = `${next.scrollHeight}px`;
        }else{
            btnAcc.classList.remove('active')
            next.classList.remove('active')
            next.removeAttribute("style")
        }
        
      })
    })
}
handleAccordion()

// function handleBrandSlide(){
//     let brand=document.querySelector('.befirst__brand')
//     var flktySLider = new Flickity( 
//         brand, 
//             {
//             cellAlign: 'center',
//             contain: true,
//             wrapAround:true,
//             prevNextButtons:false,
//             lazyLoad: 3,
//             autoPlay:true
//             }
//         );
// }
// handleBrandSlide()