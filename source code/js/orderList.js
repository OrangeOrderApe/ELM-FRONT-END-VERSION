window.onload = function() {
	// 获取显示隐藏按钮的DOM数组
	let showBtnArr = document.getElementsByClassName('fa-caret-down');

	// 获取订单明细的DOM数组
	let detailedBoxArr = document.getElementsByClassName('order-detailed');

	// 设置所有订单明细的默认状态均为隐藏状态（初始时）
	for (let i = 0; i < detailedBoxArr.length; i++) {
		detailedBoxArr[i].style.display = 'none';
	}

	for (let i = 0; i < showBtnArr.length; i++) {
		showBtnArr[i].onclick = function() {
			// 判断订单明细的DOM对象的状态,如果是隐藏状态则将其显示,如果是显示状态则将其隐藏
			if (detailedBoxArr[i].style.display == 'none') {
				detailedBoxArr[i].style.display = 'block';
			} else {
				detailedBoxArr[i].style.display = 'none';
			}
		}
	}
}