$(function(){
		var tree_span = $(".tree_box").find("span");
		var tree_b = $(".tree_one").find("b");
        var h3 = $(".tree_box").find("h3");
        var tree_one = $(".tree_box").find(".tree_one");
        var h4 = $(".tree_one").find("h4");
        var tree_two = $(".tree_one").find(".tree_two");
        h3.each(function(i){
            $(this).click(function(){
                tree_one.eq(i).slideToggle();
                tree_one.eq(i).parent().siblings().find(".tree_one").slideUp();
         
                if(tree_span.eq(i).hasClass("sselected")){
                	 tree_span.eq(i).removeClass("sselected");
                	 $(".bselected").removeClass("bselected");
                }else{
                	$(".sselected").removeClass("sselected");
                	tree_span.eq(i).addClass("sselected");
                }
                
                
                
            })
        })
        h4.each(function(i){
            $(this).click(function(){
                tree_two.eq(i).slideToggle();
                tree_two.eq(i).parent().siblings().find(".tree_two").slideUp();
                if(tree_b.eq(i).hasClass("bselected")){
                	 $(".bselected").removeClass("bselected");
                }else{
                	$(".bselected").removeClass("bselected");
                	tree_b.eq(i).addClass("bselected");
                }
            })
        })
        
        var a=1;
   		$("#a2").click(function(){
            $("#a2").css('display',"none");
            $("#a1").css('display',"block");
        })
   		$("#a1").click(function(){
            $("#a2").css('display',"block");
            $("#a1").css('display',"none");
        })
   		
   		var pic = $(".p1 ul li"),

	    pagesNode = $(".p2 ul li");
	    
	    pic.eq(0).show().siblings().hide();
	    pagesNode.eq(0).addClass("ssss"); 
	    
	    pagesNode.each(function(index){
				var zzz =$(this);
				$(this).click(function(){
					zzz.addClass("ssss").siblings().removeClass("ssss");
					var index =zzz.index();
					i=index;
					pic.eq(index).fadeIn(1000).siblings().fadeOut(1000);
				})
			}
		);
	       
	       var i=0;
	        var timerr = setInterval(autoplay,5000);
//	    核心向右运动函数
	    function autoplay(){
	    	i++;
	        if(i == 5){
	        	i = 0
	        }
	    	pic.eq(i).fadeIn(500).siblings().fadeOut(500);
	    	pagesNode.eq(i).addClass("ssss").siblings().removeClass("ssss");
	    }
	    
	    $("#big_banner_pic_wrap,#big_banner_change_wrap").hover(function(){
	    	clearInterval(timerr);
	    },function(){
	    	timerr = setInterval(autoplay,5000);
    });
    
	$("#news").hover(function(){
		$("#news .n361").animate({height:"160px"})
	},function(){
		$("#news .n361").animate({height:"0px"})
	}
	)
	$("#n360").hover(function(){
		$("#n360 .n361").animate({height:"160px"})
	},function(){
		$("#n360 .n361").animate({height:"0px"})
	}
	)

	$('#things').mouseenter(function(){
		$('.shoping').slideDown();
	});
	var th='';
	$('#things').mouseout(function(){
		th=setTimeout(function(){
			$('.shoping').slideUp();
		},3000)
	});
	$('.shoping').mouseenter(function(){
		clearTimeout(th);
	})
	$('.shoping').mouseleave(function(){
		$('.shoping').slideUp(1000);
	})
	$(window).scroll(function(event) { 
		 
		 console.log(  $(window).width());
	})
	if( $(window).width() < 1000){
		$(window).scroll(function(event) { 
			 if($(window).scrollTop() >380){
			 	$('#n360 .n361').animate({height:"160px"})
			 }
			 if($(window).scrollTop() >580){
			 	$('#news .n361').animate({height:"160px"})
			 }
		}) 
	}
	
	$('.top').click(function(){
		$("body,html").animate({scrollTop:0}, 500);
	});
	
	
   });
