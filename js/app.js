import router from "./router.js";

let iconBar = document.querySelector(".icon-bar")
let iconClose = document.querySelector(".icon-close")
let ulElem = document.querySelector('.top-menu ul')
let formElem = document.querySelector(".header-bottom form")
let inputElem = document.querySelector(".header-bottom form input")
let h1Elem = document.querySelector(".header-bottom h1")


iconBar.addEventListener('click' , () => {
    ulElem.style.left = "0"
})

iconClose.addEventListener('click' , () => {
    ulElem.style.left = "-340px"
})

document.addEventListener("click" , (e) => {
    e.preventDefault()

    if (!e.target.className.includes('page')) {
        return false
    }
    
    changeUrl(e)
    console.log(1);    
})

function changeUrl (e) {
    console.log(2);
    window.history.pushState({} , '' , e.target.href)
    root()
}

async function root () {
    // url = window.location.pathname  
    console.log(window.location.pathname );
      
    let route = router[window.location.pathname] || router[404]
    console.log(route);
    let doc = await fetch(route.template).then(res => res.text())
    document.querySelector('html').innerHTML = doc
    document.title = route.title
}

window.onpopstate = root
