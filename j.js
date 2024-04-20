const input = document.getElementById("input")
const btn = document.getElementById("btn")
const list = document.getElementById("list")
const delAll = document.getElementById("delALL")

delAll.onclick = () => {
    list.innerText = ""
}

btn.onclick = () => {
     console.log(btn.innerText)
     console.log(input.value)
    const liTag = document.createElement("li")
     liTag.innerText = input.value
    console.log(liTag)
    list.appendChild(liTag)
     input.value = ""
    liTag.onclick= () =>{
        liTag.style.textDecoration = "line-through"
        liTag.onclick= () =>{
            liTag.style.textDecoration = "none"
        }
    }
}

// input.onchange = () => {
//     console.log(btn.innerText)
//     console.log(input.value)
//     const liTag = document.createElement("li")
//     liTag.innerText = input.value
//     console.log(liTag)
//     list.appendChild(liTag)
//     names.push(input.value)
//     input.value = ""
//     liTag.onclick= () =>{
//         liTag.remove()
//     }
// }










