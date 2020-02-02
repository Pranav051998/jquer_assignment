
   $(document).ready(function(){
	 //question1  
	   $("#button1").click(function(){
	   $("#height1").css("height","300px");
	  });
				 
	 //question2
	 $("#button2").click(function(){
	 $("#height2").css({"margin-left":"400px","transition":"7s"});
	 });
				
	//question 3
	scroll1=document.getElementById("scrollid");
	 window.onscroll = function() {scrollFunction(); };
     function scrollFunction() {
	 if (document.documentElement.scrollTop >= 700 && document.documentElement.scrollTop  <= 900 ){
			 scroll1.style.position = "fixed";
			 scroll1.style.top = 0;
			 scroll1.style.width = "100%";

			} 
	else if(document.documentElement.scrollTop  > 900 || document.documentElement.scrollTop  < 700) {
		  scroll1.style.position = "relative";
			}
			  }
			
		//question 4
		$("#parahidebutton").click(function(){
				$("#parahide").hide();
			});
				
		//question 5
		$("#button4").click(function(){
			$("#button4").attr("disabled", "disabled");
			 $("#test3").val("Pranav");
			 $("#test3").attr("disabled","disabled");
			});
					
		//question 6
			$("#introclick").click(function(){
				$(".intro").css({'background-color':'transparent'});
				});
				
		//uestion 7
			$("#colorbutton").click(function(){
				$(".color").css({'background-color':'yellow'});
				});
				
		//question 8
			$("#colorbutton2").click(function(){
				$(".color2").css({'background-color':'yellow'});
				});
				
		//question 9
			$("#tab1").click(function(){
				$("#contentactive1").text("Pranav");
				 $("#tab2").click(function(){
					  $("#contentactive1").text("Prakash");
				}); 
				});
				
		//question 10
			$("#top").click(function () {
			   $("html, body").animate({scrollTop: 0}, 5000);
			});
   });