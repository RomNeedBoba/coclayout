// Example: Smooth scroll to section
$(document).ready(function(){
    $('.menu a, .scroll-up-btn').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
});
// Add event listener to all images
document.querySelectorAll('.product img').forEach(img => {
    img.addEventListener("click", function() {
      this.classList.toggle("clicked");
    });
  });