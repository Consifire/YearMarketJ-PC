//列表页的js文件

$(function() {

	//我的账户下拉
	var $myuser = $(".header p.myuser");
	var $header_li_myuser = $(".header ul li:eq(2)");
	$myuser.hide(); //我的账户子菜单默认是隐藏的
	$header_li_myuser.on("mouseover", function() { //鼠标滑进去就显示
		$myuser.show();
	}).on("mouseout", function() { //划出就隐藏
		$myuser.hide();
	})
	$myuser.children().on("mouseover", function() { //在列表里面移动就显示
		$myuser.show();
	}).on("mouseleave", function() { //移出就隐藏
		$myuser.hide();
	});

	//我的手机下拉
	var $myphone = $(".myphone");
	var $header_li_myphone = $(".header ul li:eq(3)");
	$myphone.hide(); //我的手机默认是隐藏的
	$header_li_myphone.on("mouseover", function() { //鼠标移进去就显示
		$myphone.show();
	}).on("mouseout", function() { //移出就隐藏
		$myphone.hide();
	})
	$myphone.on("mouseover", function() { //移进去就显示
		$myphone.show();
	}).on("mouseleave", function() { //移出就隐藏
		$myphone.hide();
	});

	//内容左边部分的点击特效		
	//-------左上1
	var $ulbtn = $(".content_left .con_ltop ul");
	$(".content_left .con_ltop ul li").hide();
	$("#show").children("li").show();
	$ulbtn.click(function() { //点击标题
		$(this).children("li").show()
			.end().siblings().children("li").hide();
	});

	//------左中2
	var $ulbtn2 = $(".content .content_left .con_lmid ul");
	$ulbtn2.eq(0).find("h3").hide();
	$ulbtn2.eq(0).find("li").show().end().siblings().children("li").hide();

	$ulbtn2.click(function() { //点击
		$ulbtn2.eq(0).find("h3").show();
		$(this).children("li").show() //点击自己的li显示
			.end().siblings().children("li").hide(); //其他的li隐藏
		$(this).children("h3").hide() //点击自己的h3隐藏
			.end().siblings().children("h3").show(); //其他的h3显示
	});

	//懒加载效果
	//ajax请求实现
	var $ajaxlist = $(".con_ajaxrequset"); //获取节点			
	$ajaxlist.addClass(".con_ajaxrequset");
	var $ul = $(".ajaxlist");
	$ul.addClass("ajaxlist");

	$.ajaxSetup({
		url: "../js/goodslist.json", //请求地址

		success: function(res) { //成功以后

			//生成一个ul
			$.each(res, function(idx, item) {

				var $li = $("<li/>"); //创建li
				$li.addClass("ajaxli"); //添加样式

				$("<a/>").attr("href", "#").html("<img src='" + item.imgurl + "' />").appendTo($li); // 图片
				$("<h4/>").addClass("title").html(item.title).appendTo($li); //标题
				$("<p/>").addClass("place").html(item.place).appendTo($li); //产地
				$("<p/>").addClass("price").html("￥：" + item.price).appendTo($li); //价钱

				var $div1 = $("<div/>"); //好评度
				$div1.text("好评度");
				$("<p/>").addClass("ratepercent").html(item.ratepercent).appendTo($div1);
				$div1.addClass("div").appendTo($li);

				var $div2 = $("<div/>"); //销售量
				$div2.text("销售量");
				$("<p/>").addClass("soldnum").html(item.soldnum).appendTo($div2);
				$div2.addClass("div").appendTo($li);

				var $div3 = $("<div/>"); //评论
				$div3.text("评论数");
				$("<p/>").addClass("commentCount").html(item.commentCount).appendTo($div3);
				$div3.addClass("div").appendTo($li);

				$li.appendTo($ul);

			});
			$ul.appendTo($ajaxlist);
		}

	});

	$.ajax();

	var n = 0;
	$(window).on("scroll", function() { //鼠标滚动事件

		var scrollTop = $(window).scrollTop(); //获取window的高度

		if(scrollTop >= $(document).height() - $(window).height() - 2800) { //距离底部2800的时候加载
			n++;
			if(n < 3) { //加载两次数据，距离底部2800就是一次
				$.ajax();
			}

		}
	});

});