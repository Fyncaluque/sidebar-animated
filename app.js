const btnToggle = document.querySelector('#toggle');

btnToggle.addEventListener('click',function(){
    document.getElementById('sidebar').classList.toggle('active');
    //toggle agrega la clase si no la tine  o quitarla si ya la tiene
});