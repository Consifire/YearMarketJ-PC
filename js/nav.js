//导航下拉菜单和二级子菜单的样式

$(function() {

	//获取元素节点
	//一级菜单
	var $nav_list_ul_li = $("#choosemid .nav_list .nav_list_ul").children("li");
	var $nav_list_ul_li1 = $nav_list_ul_li.eq(0);
	var $nav_list_ul_li2 = $nav_list_ul_li.eq(1);
	var $nav_list_ul_li3 = $nav_list_ul_li.eq(2);
	var $nav_list_ul_li4 = $nav_list_ul_li.eq(3);

	//二级菜单
	var $nav_list_2 = $(".nav_list_2");
	var $nav_list_22 = $(".nav_list_22");
	var $nav_list_222 = $(".nav_list_222");
	var $nav_list_2222 = $(".nav_list_2222");

	$nav_list_2.hide(); //二级菜单隐藏
	$nav_list_22.hide(); //二级菜单隐藏
	$nav_list_222.hide(); //二级菜单隐藏
	$nav_list_2222.hide(); //二级菜单隐藏

	//滑进一级菜单就显示二级菜单
	$nav_list_ul_li1.on("mouseenter", function() { //鼠标移到下来框里面,二级菜单显示
		$nav_list_2.fadeIn();
	}).on("mouseleave", function() { //移出下来框,二级菜单就隐藏
		$nav_list_2.hide();
	});
	$nav_list_ul_li2.on("mouseenter", function() { //鼠标移到下来框里面,二级菜单显示
		$nav_list_22.fadeIn();
	}).on("mouseleave", function() { //移出下来框,二级菜单就隐藏
		$nav_list_22.hide();
	});
	$nav_list_ul_li3.on("mouseenter", function() { //鼠标移到下来框里面,二级菜单显示
		$nav_list_222.fadeIn();
	}).on("mouseleave", function() { //移出下来框,二级菜单就隐藏
		$nav_list_222.hide();
	});
	$nav_list_ul_li4.on("mouseenter", function() { //鼠标移到下来框里面,二级菜单显示
		$nav_list_2222.fadeIn();
	}).on("mouseleave", function() { //移出下来框,二级菜单就隐藏
		$nav_list_2222.hide();
	});

	//在二级菜单里面移动继续显示
	$nav_list_2.on("mouseenter mousemove", function() { //移入二级菜单或是在二级下单上面移动，都显示菜单
		$nav_list_2.show();
	}).on("mouseleave", function() { //移出就会消失
		$nav_list_2.hide();
	});
	$nav_list_22.on("mouseenter mousemove", function() { //移入二级菜单或是在二级下单上面移动，都显示菜单
		$nav_list_22.show();
	}).on("mouseleave", function() { //移出就会消失
		$nav_list_22.hide();
	});
	$nav_list_222.on("mouseenter mousemove", function() { //移入二级菜单或是在二级下单上面移动，都显示菜单
		$nav_list_222.show();
	}).on("mouseleave", function() { //移出就会消失
		$nav_list_222.hide();
	});
	$nav_list_2222.on("mouseenter mousemove", function() { //移入二级菜单或是在二级下单上面移动，都显示菜单
		$nav_list_2222.show();
	}).on("mouseleave", function() { //移出就会消失
		$nav_list_2222.hide();
	});

}); //1