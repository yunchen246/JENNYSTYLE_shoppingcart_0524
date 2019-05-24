
 //slide-gototop 事件

$(function() {
    /* 按下GoTop按鈕時的事件 */
    $('#slide-gototop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
     
    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 400){
            $('#slide-gototop').fadeIn();
        } else {
            $('#slide-gototop').fadeOut();
        }
    });
});


 //slide-gototop 事件

// $(function() {
     
//     /* 偵測卷軸滑動時，往下滑超過400px就讓按鈕出現 */
//     $(window).scroll(function() {
//         if ( $(this).scrollTop() > 400){
//             $('#slide-active-box').fadeIn();
//         } else {
//             $('#slide-active-box').fadeOut();
//         }
//     });
// });


 //modal-title 事件
 
    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip()
      //modal事件
      $('#removeModal').on('show.bs.modal' ,function(event){
        var btn = $(event.relatedTarget);
        var title = btn.data('title')

        var modal = $(this);
        modal.find('.modal-title').text(title);
      })
    });


//Modal 事件

  $(document).ready(function () {

    // 編輯的 Modal 事件
   $('#removeModal').on('show.bs.modal',function(event){
    var btn = $(event.relatedTarget);
    var title = btn.data('title');

    var modal = $(this);
    modal.find('.modal-title').text('Sure ' + title);
   })

  });


//needs-validation必填事件
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


//pay事件

  $(document).ready(function() {
    $('.radio_pay_01').click(function(event) {
      /* Act on the event */
      $('#pay02').hide();
      $('#pay03').hide();
      $('#pay01').show();
    });
  });

  $(document).ready(function() {
    $('.radio_pay_02').click(function(event) {
      /* Act on the event */
      $('#pay01').hide();
      $('#pay03').hide();
      $('#pay02').show();
    });
  });

    $(document).ready(function() {
    $('.radio_pay_03').click(function(event) {
      /* Act on the event */
      $('#pay01').hide();
      $('#pay02').hide();
      $('#pay03').show();
    });
  });

