// const p = document.getElementById("demo")
// console.log("p", typeof p)

// p.innerHTML = "Hello cac ban"

// const tag = document.getElementsByTagName("p")
// for (var el in tag) {
//     tag[el].innerHTML = "Hello cac ban"
// }

// const title = document.getElementsByClassName("title")
// console.log("title", title)

const title = document.querySelector("#title")
title.innerHTML = `
    <button>Submit</button>
`

const linkGG = document.getElementById("linkGG")
linkGG.style.color = "red"
linkGG.style.textDecoration = "none"

//thêm attribute cho element
title.class = "title"

console.log("title", title)

const inp = document.getElementById("submit")
inp.placeholder = "Your full name"

//setAttribute => tham số 1: attribute, tham số 2: value
inp.setAttribute("placeholder", "Your password")

//Các phương thức để thao tác với phần tử trong DOM


// const congTinh = document.getElementById("congTinh")
// const h3 = document.createElement("h3")

// h3.textContent = "Cong Tinh yeu mau hong, ghet su gia doi"
// h3.style.color = "pink"
// congTinh.appendChild(h3)

document.body.onload = function() {
    // const newDiv = document.createElement("div")
    // const newContent = document.createTextNode("Cong Tinh dep trai")
    // newDiv.appendChild(newContent)

    // const currentDiv = document.getElementById('div1')
    // document.body.insertBefore(newDiv, currentDiv)

    const tabl = document.createElement("table")
    tabl.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Username</th>
        </tr>
        <tbody>
            <td>1</td>
            <td>Nguyen Minh Hung</td>
        </tbody>
    
    `
    tabl.style.border = "1px solid #000"
    tabl.style.marginTop = "15px"
    
    const div1 = document.getElementById("div1")
    div1.appendChild(tabl)
};

// const btnEl = document.getElementById("btn")
// btnEl.addEventListener("click", function(event) {
    
// })

const cT = document.getElementById("congTinh")
cT.addEventListener("click", function() {
    cT.innerHTML = "Oopps!"
})

function displayDate() {
    document.getElementById("demo").innerHTML = Date()
}

function mOver() {
   const listDiv= document.getElementsByTagName("div")[1]
   listDiv.innerHTML = "Thank You "
}

function mOut(obj) {
    obj.innerHTML = "Mouse over me"
}


function onKeyDownEvent() {
    alert("Bạn đã nhấn 1 phím vào ô input")
}

function onKeyUpEvent() {
    let x = document.getElementById("fname")
    x.value = x.value.toUpperCase()
}

function onChangeEvent() {
    let x = document.getElementById("mySelect").value
    document.getElementById("demo2").innerHTML = "You selected: " + x
}

const parentNode = document.getElementById("parent")
const spanEl = document.createElement("span")
parentNode.appendChild(spanEl)
spanEl.innerHTML = "Hien cc"
console.log("parentNode", parentNode)
const childN = parentNode.childNodes
console.log("childN", childN)


const nextSib = parentNode.nextSibling.nextSibling

//setItem nhận vào 2 tham số: 1.key 2.value
window.localStorage.setItem("Hien tre trau", true)

const listProducts1 = [
    {
        id: "1",
        masp: "Ip",
        sp: "15promax"
    }
]
// const listProducts2 = [
//     {
//         id: "1",
//         masp: "Ip",
//         sp: "13promax"
//     }
// ]
// const listProducts3 = [
//     {
//         id: "1",
//         masp: "Ip",
//         sp: "12promax"
//     }
// ]
//JSON.stringify convert object, array => string
window.localStorage.setItem("ListProducts1", JSON.stringify(listProducts1))
// window.localStorage.setItem("ListProducts2", JSON.stringify(listProducts2))
// window.localStorage.setItem("ListProducts3", JSON.stringify(listProducts3))
// const str = JSON.stringify(listProducts)
console.log("str", typeof str)

//JSON.parse convert string => array object js
// const listProductParse = JSON.parse(localStorage.getItem("ListProducts"))
// console.log("listProductParse", listProductParse)

localStorage.removeItem("Hien tre trau")

// const keys = localStorage.key("ListProducts")
// console.log("keys", keys)

// for(let i = 0; i < localStorage.length;i++) {
//     console.log(localStorage.getItem(localStorage.key(i)))
// }

console.log(JSON.parse(localStorage.getItem(localStorage.key("ListProducts1"))))