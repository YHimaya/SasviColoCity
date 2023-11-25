window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            document.getElementById("navbar").style.top = "0";
          } else {
            document.getElementById("navbar").style.top = "-150px";
          }
        }