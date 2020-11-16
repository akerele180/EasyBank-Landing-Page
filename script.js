const hamburgerCancel = document.getElementById('cancel');
const hamburger = document.getElementById('hamburger');
const dropDown = document.querySelector('.lists');

hamburger.addEventListener('click', ()=>{
    hamburger.style.display = 'none';
    hamburgerCancel.style.display = 'block';
    dropDown.style.display = 'flex';
    // dropDown.style = 'top 2s ease';
})

hamburgerCancel.addEventListener('click', ()=>{
    hamburger.style.display = 'block';
    hamburgerCancel.style.display = 'none';
    dropDown.style.display='none';
    dropDown.style.transition = 'top 1s ease';
})