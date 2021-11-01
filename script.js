let getModalContainer = document.querySelector('.modal-container')
let getModalContainerTwo = document.querySelector('.modal-container-two')
//Date 
    const date = new Date()
    let time = date.getMonth() + " 0" + date.getDay() + " " + date.getFullYear()

let buttonFunction = document.querySelector("#modalOn").addEventListener('click', () =>{
    getModalContainer.style.display = "flex"
})

function modalcontainerremove(){
    getModalContainer.remove()
}
function modalcontainerremovetwo(){
    getModalContainerTwo.remove()
}

let addUserFunction = document.querySelector('#addUser').addEventListener('click', () =>{
    let getCont = document.querySelector('.users-container')
    getCont.style.display = 'block'
    let name = document.getElementById("name").value
    let id = document.getElementById("id").value

    let getName = document.querySelector('.name').innerHTML = name
    let getId = document.querySelector('.id').innerHTML = id

    let getDate = document.querySelector('.date').innerHTML = time
})

let removeUser = document.querySelector('#addremoveuser').addEventListener('click', () =>{
    let getUserContainer = document.querySelector('.users-container').remove()
})
let addLicense = document.querySelector("#addlicense").addEventListener('click',()=>{
    let modalContainerTwo = document.querySelector('.modal-container-two').style.display = "block"
})
let licensecontainer = document.querySelector('#addUserTwo').addEventListener('click',()=>{
    //License ++
    let x = 0;
    let activelicense = document.querySelector('.activelicense')
    activelicense.innerHTML = x;
    for(let i = 0; i < 10;i++){
            let getCont = document.querySelector('.addlicensecontainer')
            getCont.style.display = "block"
        
            let licensetextget = document.querySelector('#license').value
            let expirestext = document.querySelector('#expires').value
        
            let licensetextset = document.querySelector('.license').innerHTML = licensetextget
            let expirestextset = document.querySelector('.expires').innerHTML = expirestext
        
    }
        activelicense.innerHTML = x++;
})
