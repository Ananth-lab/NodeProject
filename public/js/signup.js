const signUpBtn = document.querySelector(".sub-button");

signUpBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const username = document.querySelector("#uname").value;
    const phonenumber  = document.querySelector("#cnumber").value;
    const email  = document.querySelector("#email").value;
    const password  = document.querySelector("#password").value;
    const agname = document.querySelector("#agname").value;
    const address1 = document.querySelector("#address1").value;
    const address2 = document.querySelector("#address2").value;
    const city = document.querySelector("#agcity").value;
    const state = document.querySelector("#agstate").value;
    const agphonenumber = document.querySelector("#agnumber").value;
    const bill = document.querySelector("#billamount").value



    const Details = {
        username,
        phonenumber,
        email,
        password,
        agname,
        address1,
        address2,
        state,
        city,
        agphonenumber,
        bill
    };
    console.log(Details)
    axios.post("http://localhost:3000/admin/signup",Details)
    .then(res => {
        alert(res.data.message);
        window.location = "./login.html"
    })
    .catch((err) => {
        errorPara.innerText = err.response.data
    })
})



const signUpBtn1 = document.querySelector(".sub-button");

signUpBtn1.addEventListener("click", (e) => {
    e.preventDefault()
    const username = document.querySelector("#uname").value;
    const phonenumber  = document.querySelector("#cnumber").value;
    const email  = document.querySelector("#email").value;
    const password  = document.querySelector("#password").value;
    const agid = document.querySelector("#agid").value;
    const bill = document.querySelector("#billamount").value;



    const Details = {
        username,
        phonenumber,
        email,
        password,
        agid,
        bill
    };
    console.log(Details)
    axios.post("http://localhost:3000/user/signup",Details)
    .then(res => {
        alert(res.data.message);
        window.location = "./login.html"
    })
    .catch((err) => {
        errorPara.innerText = err.response.data
    })
})

