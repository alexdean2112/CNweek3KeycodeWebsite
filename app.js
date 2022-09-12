const infobar = document.getElementById("infobar")
const infobar2 = document.getElementById("infobar2")
const h1 = document.getElementsByTagName("h1")
const h3 = document.getElementsByTagName("h3")
const p = document.getElementsByTagName("p")


document.addEventListener("keypress", (event) => {
    infobar.style.display = "flex"
    infobar2.style.display = "flex"
    h1[0].textContent = "charCode" + (event.charCode)
    h1[0].style.fontSize = "150px"
    h1[0].style.marginTop = "30vh"
    h3[0].textContent = "charCode" + (event.charCode)
    h3[0].style.marginTop = "30vh"
    p[0].textContent = (event.key)
    p[1].textContent = (event.code)
    p[2].textContent = (event.which)
})

