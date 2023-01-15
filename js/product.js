const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get("id")
console.log({ id })

fetch(`http://localhost:3000/api/products/${id}`)

.then((Response) => Response.json())
.then((res) => handleData(res))

function handleData( duck) {
    console.log({ duck })
    const { altText, colors, description, imageUrl, name, price, _id } =duck
    makeImage(imageUrl, altText)
    maketitle(name)
    makePice(price)
    makeDescription(description)
    makeColors(colors)
}
function  makeImage(imageUrl, altText) {
    const image = document.createElement("img")
    image.src = imageUrl
    image.alt = altText
    const parent = document.querySelector(".item__img")
    if (parent != null ) parent.appendChild(image)
}
function maketitle(name) {
    const h1 = document.querySelector("#title")
    if (h1 != null) h1.textContent = name
    
}
function makePice(price) {
const span = document.querySelector("#price")
if (span != null) span.textContent = price
}
function makeDescription(description){
    const p = document.querySelector("#description")
    if (p != null) p.textContent = description
}
function makeColors(colors){
    const select = document.querySelector("#colors")
    if (select != null) {
        colors.forEach((color) => {
            const option = document.createElement("option")
            option.value = color
            option.textContent = color
            select.appendChild(option)
        })
    }
}