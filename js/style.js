//购物车
$("#header .shop-cart").hover(
	function(){
		$("#header .shop-cart-hide").stop(true).slideDown('fast');
	},
	function(){
		$("#header .shop-cart-hide").stop(true).slideUp('fast');
	}
);
//导航栏
$("#nav .sub-nav ul").find("li:not(':last')").append("<div class='gang'></div>");//相邻li间的竖杠
$("#nav .main-nav li.have-sub").hover(
	function(){
		$("#nav .sub-nav").stop(true).slideDown('fast');
		var n=$(this).index();
		$("#nav .sub-nav ul").eq(n).show().siblings(n).hide();
	},
	function(){
		$("#nav .sub-nav").stop(true).slideUp('fast');
	}
);
$("#nav .sub-nav").hover(
	function(){
		$(this).stop(true).slideDown('fast');
	},
	function(){
		$(this).stop(true).slideUp('fast');
	}
);
//搜索框
$("#nav .ipt-search").hover(
	function(){
		$("#nav .search input").addClass("ipt-hover");
	},
	function(){
		$("#nav .search input").removeClass("ipt-hover");
	}
);
$("#nav .ipt-search").on("focus",function(){
	$("#nav .search-hot").fadeOut(200);
	$("#nav .search ul").fadeIn(200);
	$("#nav .search input").addClass("ipt-focus");
});
$("#nav .ipt-search").on("blur",function(){
	$("#nav .search-hot").fadeIn(200);
	$("#nav .search ul").fadeOut(200);
	$("#nav .search input").removeClass("ipt-focus");
});
//轮播图
var time;
var idx;
run();
$("#banner .tab li").on("click",function(){
	clearInterval(time);
	idx=$(this).index();
	go(idx,0);
	run();
});
$("#banner .slideshow .btn.left").on("click",function(){
	clearInterval(time);
	idx = $("#banner .slideshow .img-box li.selected").index();
	go(idx,5);
	run();	
});
$("#banner .slideshow .btn.right").on("click",function(){
	clearInterval(time);
	idx = $("#banner .slideshow .img-box li.selected").index();
	go(idx);
	run();	
});
$("#banner .slideshow .img-box li").hover(
	function(){
		clearInterval(time);
	},
	function(){
		run();
	}
);
function run(){
	time = setInterval(function(){
		idx = $("#banner .slideshow .img-box li.selected").index();
		go(idx);
	},4000);
}
function go(id=0,n=1){
	id = (id+n)%6;
	$("#banner .slideshow .img-box li").eq(id).stop(true).fadeIn(200).siblings().fadeOut(200);
	$("#banner .slideshow .img-box li").eq(id).addClass("selected")
		.siblings().removeClass("selected");
	$("#banner .tab li").eq(id).addClass("selected")
		.siblings().removeClass("selected");	
}

