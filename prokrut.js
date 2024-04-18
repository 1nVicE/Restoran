const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


document.querySelector('.arrow-up a').addEventListener('click', function(e) {
  e.preventDefault();
  
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});