let name = document.querySelector("#name");
let bludo = document.querySelector("#bludo");
let adres = document.querySelector("#adres");
let number = document.querySelector("#number");
let submit = document.querySelector("#submit");

let users = {};
function User(name, bludo, adres, number){
    this.name = name;
    this.bludo = bludo;
    this.adres = adres;
    this.number = number;
}


function createId(users){
    return Object.keys(users).length;
}

submit.addEventListener("click", () => {
    const nameUser = name.value;
    const bludoUser = bludo.value;
    const adresUser = adres.value;
    const numberUser = number.value;


    const user = new User(nameUser, bludoUser, adresUser, numberUser)

    const userId = "User" + createId(users);

    users[userId] = user;

    console.log(users);

    alert(`${nameUser}, Ваш заказ принят!`)
})