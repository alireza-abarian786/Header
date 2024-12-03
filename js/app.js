import router from "./router.js";

let iconBar = document.querySelector(".icon-bar")
let iconClose = document.querySelector(".icon-close")
let ulElem = document.querySelector('.top-menu ul')

iconBar.addEventListener('click' , () => {
    ulElem.style.display = "flex"
})

iconClose.addEventListener('click' , () => {
    ulElem.style.display = "none"
})

document.addEventListener("click" , (e) => {
    e.preventDefault()    
    
    if (e.target.className !== 'page') {
        return false
    }
    
    changeUrl(e)
})

function changeUrl (e) {
    window.history.pushState({} , '' , e.target.href)
    root()
}

async function root () {
    let url = window.location.pathname
    let route = router[url] || router[404]
    let doc = await fetch(route.template).then(res => res.text())
    document.querySelector('html').innerHTML = doc
    document.title = route.title
}

window.onpopstate = root
