const subBtn = document.querySelector(".sub-button");

window.addEventListener("DOMContentLoaded", (e) => {
    axios.get(`http://localhost:3000/user/get-details?userId=${localStorage.getItem("userId")}`, {headers : {"authorization" : localStorage.getItem("token")}})
    .then(res => {
        document.querySelector("#uname").value = res.data.details.name;
        document.querySelector("#cnumber").value = res.data.details.phonenumber;
        document.querySelector("#email").value = res.data.details.email;
        document.querySelector("#billamount").value = res.data.details.bill;
    })
});

subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const details = {
        username : document.querySelector("#uname").value,
        phonenumber  : document.querySelector("#cnumber").value,
        email  : document.querySelector("#email").value,
        bill : document.querySelector("#billamount").value
    }
    axios.put(`http://localhost:3000/user/update-details?userId=${localStorage.getItem("userId")}`, details, {headers : {"authorization" : localStorage.getItem("token")}})
    .then(res => {
        alert(res.data.message);
        window.location = "./login.html"
    })
    .catch(err => {
        console.log(err)
    })
})