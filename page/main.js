var maskBehavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
options = {onKeyPress: function(val, e, field, options) {
        field.mask(maskBehavior.apply({}, arguments), options);
    }
};

$('.mask-telefone').mask(maskBehavior, options);


$('.anchor').on('click',function(e){
  e.preventDefault();
  $('html, body').animate({scrollTop:$($(this).attr('href')).offset().top -100 }, 1300);
});

$(".menu-right ul li a").on('click',function(e){
    e.preventDefault();
    if($(window).width() <= 992){
      $(".menu-mobile").removeClass('open')
    }
  });

var SliderTopo = (function() {
  var $items = $('.slider-top .item');
  var $active = $('.slider-top .item.active');
  var $next = $('.slider-top .item.active').next();
  var timeout = 7000;
  var next = function() {
    $active.addClass('out').removeClass('active in').css('z-index',1);
    $next.removeClass('out').addClass('active in').css('z-index',2);
    $active = $next;
    if(!$next.next().length){
      $next = $items.first();
    }else{
      $next = $next.next();
    }
  }

  var auto = function(){
    setInterval(function(){
      next();
    },timeout)
  }
  return {
      next: next,
      auto: auto,
      items: $items,
      activeItem: $active,
      nextItem : $next
  };
})();


var SliderEbook = (function() {
  var $items = $('.ebook .col');
  var $active = $('.ebook .col.active');
  var $next = $('.ebook .col.active').next();
  var $prev = $('.ebook .col.active').prev();
  var timeout = 10000;
  if(!$prev.length){
    $prev = $items.last();
  }
  $('.ebook .next').on('click',function(e){
    e.preventDefault(); next();
  });
  $('.ebook .prev').on('click',function(e){
    e.preventDefault(); prev();
  }); 
  if ($items.length <= 1) {

     $('.ebook .prev').css('display', 'none')
     $('.ebook .next').css('display', 'none')
  }
  
  var next = function() {
    $active.addClass('out').removeClass('active');
    $next.removeClass('out').addClass('active');
    $active = $next;
    if(!$next.next().length){
      $next = $items.first();
    }else{
      $next = $next.next();
    }

    if(!$next.prev().length){
      $prev = $items.last();
    }else{
      $prev = $next.next();
    }

  }

  var prev = function() {
    
    $active.addClass('out').removeClass('active');
    $prev.removeClass('out').addClass('active');
    $active = $prev;
    if(!$prev.next().length){
      $next = $items.first();
    }else{
      $next = $prev.next();
    }

    if(!$prev.prev().length){
      $prev = $items.last();
    }else{
      $prev = $prev.prev();
    }

  }

  var auto = function(){
    setInterval(function(){
      next();
    },timeout)
  }
  return {
      next: next,
      prev: prev,
      auto: auto,
      items: $items,
      activeItem: $active,
      nextItem : $next
  };
})();

var SliderAccordion = (function() {
  var $items = $('.accordion .item');
  var $active = $('.accordion .item.active');
  var $next = $('.accordion .item.active').next();
  var $prev = $('.accordion .item.active').prev();
  var timeout = 10000;
  if(!$prev.length){
    $prev = $items.last();
  }

  $('.accordion .next').on('click',function(e){
    e.preventDefault(); next();
  });
  $('.accordion .prev').on('click',function(e){
    e.preventDefault(); prev();
  });
  var next = function() {
    $active.addClass('out').removeClass('active');
    $next.removeClass('out').addClass('active');
    $active = $next;
    if(!$next.next().length){
      $next = $items.first();
    }else{
      $next = $next.next();
    }

    if(!$next.prev().length){
      $prev = $items.last();
    }else{
      $prev = $next.next();
    }

  }

  var prev = function() {
    
    $active.addClass('out').removeClass('active');
    $prev.removeClass('out').addClass('active');
    $active = $prev;
    if(!$prev.next().length){
      $next = $items.first();
    }else{
      $next = $prev.next();
    }

    if(!$prev.prev().length){
      $prev = $items.last();
    }else{
      $prev = $prev.prev();
    }

  }

  var auto = function(){
    setInterval(function(){
      next();
    },timeout)
  }
  return {
      next: next,
      prev: prev,
      auto: auto,
      items: $items,
      activeItem: $active,
      nextItem : $next
  };
})();



SliderTopo.auto();


$("#form-contato input").blur(function(e){
  e.preventDefault();
  $(this).removeClass('flag-error');
   if($(this).val()){
    $(this).addClass('active');
   }
});
$(".menu-mobile").on('click',function(e){
  e.preventDefault();
   $(this).toggleClass('open');
});

$( window ).scroll(function() {
    if($(window).scrollTop() > $(".top.fixed").height()){
        $(".top.fixed").addClass('active')
    }else{$(".top.fixed").removeClass('active')}
});

if($(window).width() > 992){
    var z_index = 1;
  $(".saque-pague .cofre .topo").on('click',function(e){
    e.preventDefault();
    $(".saque-pague .cofre").removeClass('in active').addClass('out').fadeOut(1000);
    $(".saque-pague .caixa-eletronico").css( 'z-index',z_index);
    z_index++;
    $(".saque-pague .caixa-eletronico").removeClass('out').addClass('active in');
  });
  $(".saque-pague .caixa-eletronico .topo").on('click',function(e){
    e.preventDefault();
    $(".saque-pague .caixa-eletronico").removeClass('in active').addClass('out').fadeOut(1000);
    $(".saque-pague .cofre").css( 'z-index',z_index);
    z_index++;
    $(".saque-pague .cofre").removeClass('out').addClass('active in');
  });
  $(".accordion .item").on('click',function(e){
    e.preventDefault();
      $(".accordion .item").removeClass('active');
      $(this).addClass('active');
  });

}
if($(window).width() <= 992){

  // var MORE = "Saiba mais",
  //     LESS = "";

  // $(function(){
  //     $("p.mostrar-texto").each(function(){
  //         var $ths = $(this),
  //             txt = $ths.text();
  //         $ths.text("");
  //         $ths.append($("<span>").text(txt.substr(0,100)));
  //         $ths.append($("<span>").text(txt.substr(100, txt.length)).hide());
  //         $ths.append(
  //             $("<small class=\"small-saiba-mais\">").text(MORE).click(function(e){
  //               e.preventDefault();
  //                 var $ths = $(this);

  //                 if($ths.text() == MORE){
  //                     $ths.prev().show();
  //                     $ths.text(LESS);
  //                 }
  //                 else{
  //                     $ths.prev().hide();
  //                     $ths.text(MORE);
  //                 }
  //             })
  //         );
  //     });
  // });


}

var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
    "crop-green-top.png",
    "crop-green-bottom.png",
    "mais.png",
    "bg-azul.png",
    "bg-verde.png",
    "destaque-1.jpg",
    "destaque-2.jpg",
    "destaque-3.jpg",
    "accordion1.png",
    "accordion2.png",
    "accordion3.png",
    "accordion4.png",
    "money.png",
    "money-black.png",
    "budget.png",
    "timer-black.png",
    "team-black.png",
    "marcador.png"
    
)






$("#form-contato").on('submit',function(e){
  e.preventDefault();
  var $this = $(this);
  
  if(!$('[name="nome"]').val()){
    $('[name="nome"]').focus();
    return false;
  }

  if(!$('[name="email"]').val()){
    $('[name="email"]').focus();
    return false;
  }
  
  if(!$('[name="cidade"]').val()){
    $('[name="cidade"]').focus();
    return false;
  }

  if(!$('[name="telefone"]').val()){
    $('[name="telefone"]').focus();
    return false;
  }


  $(".contato-enviado").text('Obrigado pelo contato.');
  $this.find("input").val('');


  // var texto = $this.find('[type="submit"]').text();
  // $.ajax({
  //   url: "send.php",
  //   method: "POST",
  //   data: {
  //     nome : $('[name="nome"]').val(), 
  //     email : $('[name="email"]').val(), 
  //     cidade : $('[name="cidade"]').val(), 
  //     telefone : $('[name="telefone"]').val(), 
  //     cidade : $('[name="cidade"]').val(), 
  //     contato: "1" 
  //   },
  //   dataType: "json",
  //   timeout: 10000,
  //   beforeSend: function(){
  //     $this.find('[type="submit"]').prop('disabled',true);
  //     $this.find('[type="submit"]').text('Enviando...');
  //     $this.find("input").removeClass('flag-error');
  //     $(".contato-enviado").html('');
  //   },
  //   success:function(response){
  //     if(response.status == true){
  //       $(".contato-enviado").text('Obrigado pelo contato.');
  //       $this.find("input").val('');
  //     }else{
  //       if(response.hasOwnProperty('erros')){
  //         if(response.erros.length){
  //           for (var i = 0; i < response.erros.length ; i++) {
  //             $('[name="'+response.erros[i]+'"]').addClass('flag-error');
  //           }
  //         }
  //       }
  //       $(".contato-enviado").html('<strong>Ops, algo deu errado. Tente novamente.</strong>');
  //     }

  //     $this.find('[type="submit"]').prop('disabled',false);
  //     $this.find('[type="submit"]').text(texto);
  //   }
  // })
})






