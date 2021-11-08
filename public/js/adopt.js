// Coded by Marco ;)
const shibaAdoptForm = document.getElementById('shiba-name');

shibaAdoptForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const shibaDogName = document.getElementById('shiba-dog-name').value;

    if(shibaDogName){
        const resp = await fetch('/api/userdogs', {
            method: 'POST',
            body: JSON.stringify({
                name: shibaDogName,
                dog_id:1
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if(resp.ok){
            getUserData();
            console.log(resp);
            location.replace('/dogroom')
        } else {
            alert('AN ERROR HAS OCCURED PLEASE TRY AGAIN!')
        }
    }
});

const blackdogAdoptForm = document.getElementById('shep-name');

blackdogAdoptForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const blackDogName = document.getElementById('black-dog-name').value;

    if(blackDogName){
        const resp = await fetch('/api/userdogs', {
            method: 'POST',
            body: JSON.stringify({
                name: blackDogName,
                dog_id: 2}),
            headers: { 'Content-Type': 'application/json' }
        })

        if(resp.ok){
            getUserData();
            console.log(resp);
            location.replace('/dogroom')
        } else {
            alert('AN ERROR HAS OCCURED PLEASE TRY AGAIN!')
        }
    }
});

const huskydogAdoptForm = document.getElementById('husky-name');

huskydogAdoptForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const huskyDogName = document.getElementById('husky-dog-name').value;

    if(huskyDogName){
        const resp = await fetch('/api/userdogs', {
            method: 'POST',
            body: JSON.stringify({
                name: huskyDogName,
                dog_id:3
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if(resp.ok){
            getUserData();
            console.log(resp);
            location.replace('/dogroom')
        } else {
            alert('AN ERROR HAS OCCURED PLEASE TRY AGAIN!')
        }
    }
});

$(".prev").click(function(){
    $("#carousel").carousel("prev");
  });

$("#carousel").carousel();


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
  // coded by Marco ;)