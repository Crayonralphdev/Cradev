  window.addEventListener('scroll', function() {
      var header = document.querySelector('header');
      var scrollPosition = window.scrollY;

      if (scrollPosition > 5) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    });