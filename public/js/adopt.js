const nameForm = document.getElementById('name');

const adoptShibe = $('#shiba-btn');
const adoptShep = document.getElementById('shep-btn');
const adoptHusky = document.getElementById('husky-btn');

$('#shibeModal').on(adoptShibe.click)

// nameForm.addEventListener('submit', async (e) => {
//     e.preventDefault()
//     const dogName = document.getElementById('dog-name').value

//     if(dogName){
//         const resp = await fetch('/api/users', {
//             method: 'POST',
//             body: JSON.stringify({ name:dogName,})
//         })
//     }
// })