userName = JSON.parse(sessionStorage.getItem('userName'));

document.getElementById('msg').innerHTML = `<h1>Welcome ${userName}<h1>`

document.addEventListener('click', function(e){
    if(e.target.classList.contains('signout-btn')){
        sessionStorage.removeItem('userName')
        location.assign('../index.html')
    }
})