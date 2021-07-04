 /* Menu nav toggle */
 $("#Nav_toggle").on("click", function(event) {
    event.preventDefault();
    
    $(this).toggleClass("active");
    $('#Nav').toggleClass("active");
});

var slider = document.getElementById('myRange');
slider.addEventListener("mousemove", function(){
  {
    var x = slider.value;
    var color = 'linear-gradient(to right, #d7b3f4, #8b87c6 '+ x +'%, transparent '+ x +'%, #e8e8e8 76%)'; 
    slider.style.background = color;
  }
})

    /* Smooth scroll */
    $("[data-scroll").on("click", function(event) {
      event.preventDefault();

      var $this = $(this),
          blockId = $this.data('scroll'),
          blockOffest = $(blockId).offset().top;

      $("#nav a").removeClass("active");
      $this.addClass("active");    

      $("html, body").animate({
          scrollTop: blockOffest
      }, 100);
  });