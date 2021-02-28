$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#inlaytile").show();
    }).mouseout(function(){
      $("#inlaytile").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#inlaytile2").show();
    }).mouseout(function(){
      $("#inlaytile2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#inlaytile3").show();
    }).mouseout(function(){
      $("#inlaytile3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#inlaytile4").show();
    }).mouseout(function(){
      $("#inlaytile4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#inlaytile5").show();
    }).mouseout(function(){
      $("#inlaytile5").hide();
    });
    $("#work6").mouseover(function(){
      $("#inlaytile6").show();
    }).mouseout(function(){
      $("#inlaytile6").hide();
    });
    $("#work7").mouseover(function(){
      $("#inlaytile7").show();
    }).mouseout(function(){
      $("#inlaytile7").hide();
    });
    $("#work8").mouseover(function(){
      $("#inlaytile8").show();
    }).mouseout(function(){
      $("#inlaytile8").hide();
    });
  });
  
  $(document).ready(function(){
    $("form#form1A").submit(function(event){
      // event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });