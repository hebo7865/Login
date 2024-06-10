var userName = document.getElementById('name');
var userEmail = document.getElementById('email');
var userPassword = document.getElementById('password');
var exists = document.getElementById('exist');

var users = [];

if(localStorage.getItem('users') != null){
    users = JSON.parse(localStorage.getItem('users'));
}

document.addEventListener('click', function(e){
    if(e.target.classList.contains('signup-btn')){
        addUser();
    }else if(e.target.classList.contains('email'))
    {
        exists.classList.add('d-none')
    }
});

function addUser(){
    if(userName.value == '' || userEmail.value == '' || userPassword.value == '')
    {
        document.getElementById('warningMsg').classList.remove('d-none');
    }else{
        document.getElementById('warningMsg').classList.add('d-none');
        for(var i = 0; i < users.length; i++){
            if(userEmail.value.toLowerCase() == users[i].email.toLowerCase()){
                exists.classList.remove('d-none')
            }
        }

        if(exists.classList.contains('d-none')){
            var user = {
                name: userName.value,
                email: userEmail.value,
                password: userPassword.value
            }
            users.push(user)
            exists.classList.add('d-none')
            document.getElementById('success').classList.remove('d-none')
            clearInput()
            localStorage.setItem('users', JSON.stringify(users))
            setTimeout(function(){
                window.location.assign('../index.html')
            }, 500)
        }
    }
}

function clearInput(){
    userName.value = null;
    userEmail.value = null;
    userPassword.value = null;
}
