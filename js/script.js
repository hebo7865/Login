var userEmail = document.getElementById('email');
var userPassword = document.getElementById('password');
var users = [];

users = JSON.parse(localStorage.getItem('users'));

document.addEventListener('click', function(e){
    if(e.target.classList.contains('login-btn')){
        login();
        welcomeMsg();
    }
})

function login(){
    if(userEmail.value == '' || userPassword.value == ''){
        document.getElementById('warningMsg').classList.remove('d-none')
    }else{
        document.getElementById('warningMsg').classList.add('d-none')
        for(var i = 0; i < users.length; i++){
            if(users[i].email.toLowerCase() == userEmail.value.toLowerCase() && users[i].password.toLowerCase() == userPassword.value.toLowerCase()){
                var userName= '';
                userName = users[i].name;
                sessionStorage.setItem('userName', JSON.stringify(userName))
                window.location.assign('../home.html')
            }
            else{
                document.getElementById('incorrect').classList.remove('d-none')
            }
        }
    }
}

