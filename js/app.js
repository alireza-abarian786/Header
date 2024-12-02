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
    console.log(3);
    let url = window.location.pathname
    let route = router[url] || router[404]
    let doc = await fetch(route.template).then(res => res.text())
    document.querySelector('html').innerHTML = doc
    document.title = route.title
}

window.onpopstate = root


formElem.addEventListener('submit' , (e) => {
    e.preventDefault()
    console.log(window.location.pathname = "/courses");
    
    h1Elem.innerHTML = e.target.children[0].value
    changeUrl(e)
    
})


