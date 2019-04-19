class Tweet {
	constructor(btn) {
		// 找到点击弹框按钮
		// 传参或者直接查找根据实际情况决定
	    this.btn = document.querySelector(btn);
		this.container = document.querySelector("#container");
		this.bindEvents();
	}
	
	bindEvents () {
		let _this = this;
		this.btn.onclick = function () {
			console.log(_this);
			// 给container插入内容
			_this.container.innerHTML = '<h4>用户发布</h4>'+
			'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
			'<p><label>用户名：<input id="username" type="text"></label></p>'+
			'<p class="aa">内容：<textarea id="cont" cols="30" rows="10"></textarea></p>'+
			'<p><button id="loginBtn" class="logonBtn" type="button">提交</button></p>';
			// 让container显示并且居中
			tools.showCenter(_this.container);
			// 创建模态层
			_this.modal = document.createElement("div");
			_this.modal.className = "modal";
			document.body.appendChild(_this.modal);
			
			/*拖拽*/
			new Drag(_this.container, "h4").init();
			
			
		}
		
		// 给删除按钮绑事件（委托给container）
		this.container.onclick = function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;
			
			// 利用case穿透
			switch(target.id) {
				case "loginBtn":
					let username = document.querySelector("#username").value;
					let cont = document.querySelector("#cont").value;
					
					let day=new Date();	
					let timer=day.toLocaleString();//获取日期与时间
					// --- 发送后端进行登录 ----
					console.log("用户名：",username);
					console.log("提交内容：", cont);
					console.log("发布时间：",timer);
				case "closeBtn" :
					_this.container.style.display = "none";
					document.body.removeChild(_this.modal);
			}	
		}
	}
}
