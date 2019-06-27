$(document).ready(function() {
    $('.animsition').animsition({
            inDuration: 800,
            outDuration: 800,
            linkElement: '.animsition-link',
            loading: true,
            loadingParentElement: 'body',
            loadingClass: 'animsition-loading',
            loadingInner: '',
            transition: function(url){ window.location.href = url; }
       
            }
        );

    $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });

