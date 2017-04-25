$(document).ready(function() {
   $('li').on("mouseenter", function() {
      $(this).fadeTo(600, .25);
       $(this).css({
         "opacity": ".25",
         "font-weight": "bolder"
         });
       })
   $('li').on('mouseleave', function() {
     $(this).fadeTo(600, 1);
     $(this).css({
       "opacity": "1",
     });
     })
   $('.index').on('click', function() {
     $(this).text('clicked')
     $('.index').on( "mouseover", function() {
  $( this ).css( "background-color", "red" );
      });
   })
   $('.about').on('click', function() {
     $(this).text('clicked')
     $('.about').on( "mouseover", function() {
     $( this ).css( "background-color", "blue" );
     });
   })
   $('.port').on('click', function() {
     $(this).text('clicked')
     $('.port').on( "mouseover", function() {
     $( this ).css( "background-color", "yellow" );
     });
   })
   $('.resume').on('click', function() {
     $(this).text('clicked')
     $('.resume').on( "mouseover", function() {
     $( this ).css( "background-color", "orange" );
     });
   })
   $('.click').click(function() {
     $('li').toggle('slow');
   });
 })
