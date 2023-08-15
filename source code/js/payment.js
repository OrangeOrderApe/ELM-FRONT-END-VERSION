window.onload = function() {
	// 获取显示隐藏按钮的DOM对象
	let showButton = document.getElementById('showButton');
	// 课程视频中的对象名为showBtn

	// 获取订单明细的DOM对象
	let detailedBox = document.getElementById('detailedBox');

	// 设置默认状态为隐藏状态（初始时）
	detailedBox.style.display = 'none';

	showButton.onclick = function() {
		// 判断订单明细的DOM对象的状态,如果是隐藏状态则将其显示,如果是显示状态则将其隐藏
		if (detailedBox.style.display == 'none') {
			detailedBox.style.display = 'block';
		} else {
			detailedBox.style.display = 'none';
		}
	}
}