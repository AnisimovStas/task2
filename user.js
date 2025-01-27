// Нужно менять userid через sessionStorage
const userid=1
let userurl = `https://jsonplaceholder.typicode.com/users/${userid}`;


async function fetchUserData(){
    // типа делаю запрос
    let response = await fetch(userurl)
    console.log(response)
    const user=await response.json()
    console.log(user)

    const nameText=document.getElementById("user-name");
    nameText.innerText=user.name;

    const emailText=document.getElementById("user-email");
    emailText.innerText=user.email;

    const addressText=document.getElementById("user-address");
    addressText.innerText=user.address;

    const phoneText=document.getElementById("user-phone");
    phoneText.innerText=user.phone;

    const websiteText=document.getElementById("user-website");
    websiteText.innerText=user.website;

}
console.log ("privet")
fetchUserData();
