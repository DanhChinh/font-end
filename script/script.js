
var usersAPI = "http://localhost:3000/users";


function renderHtml(users){
    let text = "";
    users.forEach(user => {
        text += `<tr>
        <td>${user.id}</td>
        <td>${user.fullname}</td>
        <td>${user.address}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td><button onclick = "deleteUser(${user.id})">Delete</button></td>


    </tr>`
    });
    document.querySelector(".table-body").innerHTML = text;
}



function showUsers(callback){
    fetch(usersAPI)
    .then(response=>response.json())
    .then(callback)
}



function addUser(){
    let fullname = document.querySelector("input[name='fullname']").value;
    let address = document.querySelector("input[name='address']").value;
    let phone = document.querySelector("input[name='phone']").value;
    let email = document.querySelector("input[name='email']").value;


    if ( fullname && address && phone && email ){
        fetch(usersAPI,{
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname,
                address,
                phone,
                email
            }),
        })
    }
}

function deleteUser(userId){
    fetch(usersAPI+"/"+userId,{
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json',
        }
    })
}




showUsers(renderHtml)