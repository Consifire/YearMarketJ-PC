jQuery(function($) {

	//放大镜
	$('div.img').xzoom({
		width: 200,
		height: 200,
		gap: 50
	});

	//飞入购物车
	//车子car
	var $car = $(".gcar"); //上面的购物车
	var $addgcar = $("#addgcar");

	console.log($car);

	$addgcar.on("click", function() {

		var $Img = $("#img").children(img);
		$copyImg = $Img.clone(); //克隆一个图片

		var startPos = $Img.offset(); //获取原图坐标
		var startWidth = $Img.width(); //获取原图宽度

		//给复制图片添加一个样式

		$copyImg.css({
			position: "absolute",
			left: startPos.left,
			top: startPos.top,
			width: startWidth
		});

		//把复制的图片放到body中来
		$copyImg.appendTo("body");

		var cartPos = $car.offset(); //购物车的宽高坐标

		$copyImg.animate({
			left: cartPos.left + $car.outerWidth() / 2, //目标的left + 克隆图片的一半
			top: cartPos.top + $car.outerHeight() / 2, //目标的top + 克隆图片的一半
			height: 0,
			width: 0,
			opacity: 1
		}, function() {
			$copyImg.remove(); //移除克隆，不占内存
		});

	});

});