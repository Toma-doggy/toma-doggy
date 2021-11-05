const loginForm = document.getElementById('login')
const signupForm = document.getElementById('signup')

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const loginEmail = document.getElementById('email').value
    const loginPassword = document.getElementById('password').value

    if(loginEmail && loginPassword){
        const resp = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email: loginEmail, password: loginPassword }),
            headers: { 'Content-Type': 'application/json' }
        })

        if(resp.ok){
            getUserData();
            console.log(resp);
            location.replace('/dogroom');
        } else {
            alert('YOU ENTERED THE WRONG INFORMATION')
        }
    }
});
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const signupEmail = document.getElementById('signupemail').value
    const signupUsername = document.getElementById('signupusername').value
    const signupPassword = document.getElementById('signuppassword').value

    if(signupEmail && signupPassword && signupUsername){
        const resp = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email:signupEmail, password:signupPassword, name:signupUsername }),
            headers: { 'Content-Type': 'application/json' }
        })

        if(resp.ok){
            location.href = '/adoption'
        } else {
            alert('User already exists!')
        }
    }
});
function getUserData (){
    fetch('api/users/loggedinuser')
    .then(response => response.json())
    .then(function(data){
    let currentBreed = data.userDogs[0].dog_id;
    if(currentBreed === 1){
       breed = "shibadog"
    }
    else if(currentBreed === 2){
       breed = "blackdog"
    }else if(currentBreed === 3){
       breed = "huskydog"
      }
      localStorage.setItem('breed',breed)
    });
  }