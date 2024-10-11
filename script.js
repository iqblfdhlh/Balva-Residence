window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('section');
  var navLinks = document.querySelectorAll('.menu a');
  var navbar = document.querySelector('.navbar');  // Mendapatkan elemen navbar

  sections.forEach(function(section) {
      var top = window.scrollY;
      var offset = section.offsetTop - 150; // Sesuaikan dengan tinggi navbar
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
          navLinks.forEach(function(link) {
              link.classList.remove('active');
              if (link.getAttribute('href') === '#' + id) {
                  link.classList.add('active');
                  
                  if (id === 'about') {
                      navbar.style.backgroundColor = '#000000ab'; 
                  } else if (id === 'facility') {
                      navbar.style.backgroundColor = '#000000ab';  
                  } else if (id === 'gallery') {
                      navbar.style.backgroundColor = '#000000ab';
                  } else if (id === 'contact-us') {
                      navbar.style.backgroundColor = '#000000ab';  
                  } else {
                      navbar.style.backgroundColor = '#00000000'; 
                  }
              }
          });
      }
  });
});

function filterGallery(category) {
    var items = document.getElementsByClassName('gallery-item');
    if (category === 'all') {
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'block';
        }
    } else {
        for (var i = 0; i < items.length; i++) {
            if (items[i].classList.contains(category)) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none';
            }
        }
    }
}

window.addEventListener('scroll', function() {
    var scrollUpBtn = document.querySelector('.scroll-up');
    if (window.scrollY > 200) {
        scrollUpBtn.classList.add('show');
    } else {
        scrollUpBtn.classList.remove('show');
    }
});

document.querySelector('.scroll-up').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
