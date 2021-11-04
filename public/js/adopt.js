
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