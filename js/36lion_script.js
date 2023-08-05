// JavaScript Document
$(document).ready(function(){
	$("#store2").hide()
	$("#store3").hide()
	
	setInterval(function(){
		
	$("#store1").fadeOut(2000,function(){$("#store2").fadeIn(2000, function(){
	$("#store2").fadeOut(2000,function(){$("#store3").fadeIn(2000, function(){
	$("#store3").fadeOut(2000,function(){$("#store1").fadeIn(2000)})
	})})
	})})		
	},12000);

});


$(document).ready(function(){
	$("#frame").fadeOut();
	$("#overlay").fadeOut();
	//$("#frame-form").fadeIn();
	//$("#overlay-form").fadeIn();
	
	
	

$("#overlay-form").click(function(){
		$("#frame-form").fadeOut();
		$("#overlay-form").fadeOut();
		
		})
$(".thumbnail").click(function(){
		var img_src =  $(this).children("img").attr('src')
		var img_alt =  $(this).children("img").attr('alt')
		var img_id =  $(this).children("img").attr('id')
		var img_price = $(this).children(".caption").children("p").attr('id')
		
		$("#price").text('N' + img_price + '.00');
		$("#amount").val(img_price);
		$("#item-img").val(img_src);
		$("#fr_main").attr("src", img_src);
		$("#item").html(img_alt);
		$("#item-name").val(img_id);
		$("#frame").fadeIn();
		$("#overlay").fadeIn();
				
			
			//alert(img_src)
			
		});
		
		$(".btn-succeess").click(function(){
			
			
			});
	
	});
	
	$(document).ready(function(){
	$(".msg_box").hide();
	$('.form_msg').hide();
	$(".leave_msg").fadeIn(2000);
		
	$(".leave_msg").click(function(){
		$(this).hide();
		$(".leave_msg").hide();
		$(".form_msg").fadeIn(1000);
   		//$(".msg_box").fadeIn(500);
   //	( $(this).attr('id') );
   //$(".msg_head>.inner").text($(this).attr('name')+ "'s Mesaage");  
	
	});
	$("#chat").click(function(){
		$(".form_msg").hide();
		
		$(".msg_box").fadeIn(1000);
   		//$(".msg_box").fadeIn(500);
   //	( $(this).attr('id') );
   //$(".msg_head>.inner").text($(this).attr('name')+ "'s Mesaage");  
	
	});
	
	
	$('.close').click(function(){
		$('.msg_box').hide();
		$(".leave_msg").fadeIn(2000);
	});
	
	$('.close_form').click(function(){
		$('.form_msg').hide();
		$(".leave_msg").fadeIn(2000);
	});
	$('.msg_head').click(function(){
		$('.msg_wrap').slideToggle('slow');
		
	});
	
	$(".msg_input").keypress(function(event){
		if(event.which == 13){
			event.preventDefault();
			$(".submit_input").click();
			
			}
		});
		
		$(".submit_input").click(function(){
			var userMessage = $(".msg_input").val();
			var id = '234e';
			//post to php
			$.post('submit.php', 
			{message: userMessage}, 
			function(){
			$.post('chat_proc.php', 
			{userid: id}, 
			function(data){
				$('.msg_body').html(data)
			$(".msg_body").scrollTop($(".msg_body").prop("scrollHeight"));
				});
			
				});
						
			$(".msg_input").val("");
			
			
		});	
		
	
	$(".remo").click(function(){
			var ordertime = $(this).attr('id');
			var orderemail = $(this).attr('title');
			//post to php
			$.post('remove.php', 
			{message: ordertime},
			
			function(){
			window.location='finish_order.php'
			
				});
	});
	
	
	
	
	});
	
	
	