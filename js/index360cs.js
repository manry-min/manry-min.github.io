// JavaScript Document
           
			$(function(){
				 // 轮播图效果
				var c = 0;
				function run(){
					c++;
					if(c == 6){
						c = 0;
					}
					$("#wrap #slider img").eq(c).fadeIn(500);
					$("#wrap #slider img").eq(c).siblings('img').fadeOut(500);	
					
					$("#wrap #number li").eq(c).css({'opacity':'0.8'},{'filter':'alpha(opacity=80)'});	
					$("#wrap #number li").eq(c).siblings('li').css({'opacity':'0.3'},{'filter':'alpha(opacity=30)'});
				}
				
				var timer = setInterval(run,2000);				
                 $("#wrap #number li").mouseenter(function(){
             	   var jqthis = $(this);
             	   clearInterval(timer);
              	   tt = setTimeout(function(){
                    c = jqthis.index();
              	    $("#wrap #slider img").eq(c).stop().fadeIn(500);
              	    $("#wrap #slider img").eq(c).siblings('img').stop().fadeOut(500);	
					
					$("#wrap #number li").eq(c).css({'opacity':'0.8'},{'filter':'alpha(opacity=80)'});	
					$("#wrap #number li").eq(c).siblings('li').css({'opacity':'0.3'},{'filter':'alpha(opacity=30)'}); 	
                   },100)
				})
				
                $("#wrap #number li").mouseleave(function(){
             	    clearTimeout(tt);
             	    timer = setInterval(run,2000);
                })
	
                 //左侧导航鼠标移入显示菜单
//                $(".left-side ul li").mouseenter(function(){
//					  var c = $(this).index();
//					  $(".left-side ul li .left-sub-list").eq(c).show();
//					  $(".left-side ul li .left-sub-list").siblings("li").hide();
//					  })
//				  $(".left-side ul li").mouseleave(function(){
//					  $(".left-side ul li .left-sub-list").hide();
//					  })
				  $(".left-side ul li").hover(function(){
				  	var c = $(this).index();
				  	$(".left-side ul li .left-sub-list").eq(c).show().siblings("li").hide();
				  },function(){
				  	$(".left-side ul li .left-sub-list").hide();
				  })
			})
	