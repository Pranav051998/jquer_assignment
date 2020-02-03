$(document).ready(function(){
	 //question1  
	   $(".section1 button").click(function(){
	   $(".section1 div").css("height","300px");
	  });
				 
	 //question2
	 $(".section2 button").click(function(){
	 $(".section2 div").css({"margin-left":"400px","transition":"7s"});
	 });
				
	//question 3
	 var scroll1=document.getElementsByClassName("full");
	 window.onscroll = function() {scrollFunction(); };
     function scrollFunction() {
	 if (document.documentElement.scrollTop >= 700 && document.documentElement.scrollTop  <= 900 ){
			       scroll1[0].style.position = "fixed";
                   scroll1[0] .style.top = 0;
                   scroll1[0] .style.width = "100%";

    } else if(document.documentElement.scrollTop  > 900 || document.documentElement.scrollTop  < 700) {
      scroll1[0] .style.position = "relative";
      // alert("900");
			}
			  }
			
		//question 4
		$(".section5 button").click(function(){
				$(".section5 p:nth-child(2) ").hide();
			});
				
		//question 5
		$(".section9 button").click(function(){
			$(".section9 button").attr("disabled", "disabled");
			 $("#test3").val("Pranav");
			 $("#test3").attr("disabled","disabled");
			});
					
		//question 6
			$(".section6 button").click(function(){
				$(".section6  p.intro").css({'background-color':'transparent'});
				});
				
		//uestion 7
			$(".section7 button").click(function(){
				$(".section7 li:nth-child(4),.section7 li:nth-child(5),.section7 li:nth-child(6)").css({'background-color':'yellow'});
			});
				
		//question 8
			$(".section8 button").click(function(){
				$(".section8 li:not(:nth-child(1))").css({'background-color':'yellow'});
				});
				
		//question 9
			$(".tabcontent button").click(function(){
				$(".content").text("Pranav");
				 /*$(".content").click(function(){
					  $(".content active").text("Prakash");
				}); */
				});
				
		//question 10
			$(".section10 button").click(function () {
			   $("html, body").animate({scrollTop: 0}, 5000);
			});
   });