const edtClient = document.querySelector(".client-edit");

const showTable = document.querySelector(".agency-details");

const ul = document.querySelector("ul")

edtClient.addEventListener("click", (e) => {
    e.preventDefault();
    window.location = "./edit-client.html"
})


showTable.addEventListener("click", (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3000/user/get-bills`, {headers : {"authorization" : localStorage.getItem("token")}})
    .then(res => {
        ul.textContent = "";
        res.data.result.forEach(element => {
            const li = document.createElement("li");
            li.append(document.createTextNode(`Agency Name : ${element.agencyName}`));
            li.append(document.createTextNode('\t'));
            li.append(document.createTextNode(`Client Name : ${element.clientName}   `));
            li.append(document.createTextNode('\t'));
            li.append(document.createTextNode(`Bill Amount : ${element.totalBill}   `));
            ul.append(li);
            
        });
    })
    .catch(err => {
        console.log(err)
    })
})