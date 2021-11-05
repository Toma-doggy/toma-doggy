
const shibaAdoptForm = document.getElementById('shiba-name');

shibaAdoptForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const shibaDogName = document.getElementById('shiba-dog-name').value;

    if(shibaDogName){
        const resp = await fetch('/api/userdogs', {
            method: 'POST',
            body: JSON.stringify({name: shibaDogName}),
            headers: { 'Content-Type': 'application/json' }
        })

        if(resp.ok){
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
            body: JSON.stringify({name: blackDogName}),
            headers: { 'Content-Type': 'application/json' }
        })

        if(resp.ok){
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
            body: JSON.stringify({name: huskyDogName}),
            headers: { 'Content-Type': 'application/json' }
        })

        if(resp.ok){
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