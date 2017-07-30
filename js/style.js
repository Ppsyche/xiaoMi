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
var bannerTime;
var bannerIdx;
bannerRun();
$("#banner .tab li").on("click",function(){//点小圆点切换
	clearInterval(bannerTime);
	bannerIdx=$(this).index();
	bannerGo(bannerIdx,0);
	bannerRun();
});
$("#banner .slideshow .btn.left").on("click",function(){//点左箭头
	clearInterval(bannerTime);
	bannerIdx = $("#banner .slideshow .img-box li.selected").index();
	bannerGo(bannerIdx,5);
	bannerRun();	
});
$("#banner .slideshow .btn.right").on("click",function(){//点右箭头
	clearInterval(bannerTime);
	bannerIdx = $("#banner .slideshow .img-box li.selected").index();
	bannerGo(bannerIdx);
	bannerRun();	
});
$("#banner .slideshow .img-box li").hover(//鼠标悬停暂停轮播
	function(){
		clearInterval(bannerTime);
	},
	function(){
		bannerRun();
	}
);
function bannerRun(){
	bannerTime = setInterval(function(){
		bannerIdx = $("#banner .slideshow .img-box li.selected").index();
		bannerGo(bannerIdx);
	},4000);
}
function bannerGo(id=0,n=1){
	id = (id+n)%6;
	$("#banner .slideshow .img-box li").eq(id).stop(true).fadeIn(200).siblings().fadeOut(200);
	$("#banner .slideshow .img-box li").eq(id).addClass("selected")
		.siblings().removeClass("selected");
	$("#banner .tab li").eq(id).addClass("selected")
		.siblings().removeClass("selected");	
}
//小米明星单品轮播
startRun();
$("#start-product .arrows .left").on("click",function(){//点向左箭头
	clearInterval(startTime);
	if($(this).is(".usable")){
		startGo("0","left","right");
	}
	startRun();	
});
$("#start-product .arrows .right").on("click",function(){//点向右箭头
	clearInterval(startTime);
	if($(this).is(".usable")){
		startGo("-1226px","right","left");
	}	
	startRun();
});
$("#start-product .product ul").hover(//鼠标悬停暂停轮播
	function(){
		clearInterval(startTime);
	},
	function(){
		startRun();
	}
);
function startRun(){//自动轮播
	startTime = setInterval(function(){
		if($("#start-product .arrows .left").is(".usable")){
			startGo("0","left","right");
		}else if($("#start-product .arrows .right").is(".usable")){
			startGo("-1226px","right","left");
		}
	},4000);
}
function startGo(n,direction1,direction2){
	$("#start-product .product ul").css('left',n);
	$("#start-product .arrows ."+direction1).addClass("unusable").removeClass("usable");
	$("#start-product .arrows ."+direction2).addClass("usable").removeClass("unusable");
}
//主体部分选项卡
for (let i = 0; i < $("#main .main-show").length; i++) {
	$("#main .main-show").eq(i).find(".ms-title .ms-tab li").on("mouseover",function(){
		var mainShoeIdx=$(this).index();
		$(this).addClass("selected").siblings().removeClass("selected");
		$("#main .main-show").eq(i).find(".ms-main .msm-shop-list").eq(mainShoeIdx)
			.addClass("selected").siblings().removeClass("selected");
	});
}
//推荐部分切换
var rvUlWidth=1240-$("#recommend .visible-box ul").width();
$("#recommend .title .arrows .left").on("click",function(){
	var left=$("#recommend .visible-box ul").position().left;
	if(left<0){
		left+=1240;
		$("#recommend .visible-box ul").css("left",left+"px");
		if(left>=0){
			$("#recommend .title .arrows .left").addClass("unusable").removeClass("usable");
		}
	}
	if(left>rvUlWidth){
		$("#recommend .title .arrows .right").addClass("usable").removeClass("unusable");
	}
});
$("#recommend .title .arrows .right").on("click",function(){
	var left=$("#recommend .visible-box ul").position().left;
	if(left>rvUlWidth){
		left-=1240;
		$("#recommend .visible-box ul").css("left",left+"px");
		if(left<=rvUlWidth){
			$("#recommend .title .arrows .right").addClass("unusable").removeClass("usable");
		}
	}
	if(left<0){
		$("#recommend .title .arrows .left").addClass("usable").removeClass("unusable");
	}
});

