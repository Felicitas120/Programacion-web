const Title = document.getElementById('Title');

Title.addEventListener('mouseenter', function() {
  this.classList.add('highlight');
});

Title.addEventListener('mouseleave', function() {
  this.classList.remove('highlight');
});
  