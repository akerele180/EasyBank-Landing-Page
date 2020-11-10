const listStyle = document.getElementsByTagName('header')[0].getElementsByTagName('ul')[0].querySelectorAll('li')[1];

listStyle.addEventListener('mouseover', function(){
    listStyle.style.cssText = 'border-bottom: 5px solid var(--LimeGreen);'
});
listStyle.addEventListener('mouseout', function(){
    listStyle.style.cssText = 'border-bottom: none;'
})