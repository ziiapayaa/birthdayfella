// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
  Swal.fire({
      title: 'Do you want to play music in the background?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
  }).then((result) => {
      if (result.isConfirmed) {
          let audio = document.querySelector('.song');

          // Menunggu interaksi pertama pengguna
          document.body.addEventListener("click", function () {
              audio.play().catch(error => console.log("Autoplay blocked:", error));
          }, { once: true });

          animationTimeline();
      } else {
          animationTimeline();
      }
  });
});





// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
//

$('.collapse').collapse()
$('svg').click(function() {
  this.classList.toggle('rotated');
});


$(function(){
    $('.form-group').floatingLabel();
  });

  $('.form-group').floatingLabel({
      floatingLabelClass:'floating-label',
      floatingLabelOnClass:'floating-label-on',
      floatingInputClass:'floating-input'
    });

  $('.form-group').floatingLabel({
      floatingStyle:'primary'
    });
    


    $(document).ready(function(){
      $(window).scroll(function(){
          var scroll = $(window).scrollTop();
          if (scroll > 100) {
            $(".netflix-navbar").css("background" , "#0C0C0C");
          }
    
          else{
              $(".netflix-navbar").css("background" , "transparent");  	
          }
      });
  
    })
  
  
  function position(id){
    var card = document.getElementsByClassName('card')[id];
    // card.style.transform = 'scale(1.5)';
    console.log(id)
  }
  