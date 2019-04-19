function content(selector){
	this.div=document.querySelector(selector);
	this.btns=this.div.querySelector("ol").children;
	this.imgs=this.div.querySelector("ul").children;
	this.goPrev=this.div.querySelector("#goPrev");
	this.goNext = this.div.querySelector("#goNext");
	this.index = 0; //当前按钮;
	this.lastimges = 0; //上一张图片;
	this.endimges = 0; //上上一张图片;
	this.timer = null; //初始定时器;
	/*函数调用*/
	this.innt();
	this.nextGO();
	this.prveGO();
	this.auto();
	this.mouseenter();
	this.mouseleave();
}
/*按钮切换*/
content.prototype.innt=function(){
	let _this=this;
	for(let i=0;i<this.btns.length;i++){
		this.btns[i].onclick=()=>{
			if(i>=_this.index){
				_this.changeimges(i);
			}else{
				_this.lastchangeimges(i);
			}
		
		}
	}
	console.log(this.btns);
}

/*左->右*/
content.prototype.changeimges=function(i){
	this.btns[i].className="ac";
	this.btns[this.index].classList.remove("ac");
	//当前图片更改样式
	this.imgs[i].className="ac";
	this.imgs[i].classList.add("aa")
	// 清除上一张图片样式
	this.imgs[this.lastimges].classList.remove("ac");
	this.imgs[this.lastimges].classList.remove("aa");
	// 清除上上张及上张样式
	this.imgs[this.endimges].classList.remove("bb");
	this.imgs[this.lastimges].classList.remove("cc");
	this.imgs[this.endimges].classList.remove("dd");
	// 给上一张图片添加样式
	this.imgs[this.lastimges].classList.add("bb");
	// 前任变前前任
	this.endimges = this.lastimges;
	// 现任变前任；
	this.index = i;
	this.lastimges = i;
}
/*右->左*/
content.prototype.lastchangeimges = function(i) {
	// 给当前点击的按钮;
	this.btns[i].className = "ac";
	// 清除上一次按钮样式
	this.btns[this.index].classList.remove("ac");
	// 给当前图片添加样式并清除上一张样式
	this.imgs[i].className = "ac";
	this.imgs[this.lastimges].classList.remove("ac");
	this.imgs[i].classList.add("cc");
	this.imgs[this.lastimges].classList.add("dd");
	// 清除上上张样式及上张样式
	this.imgs[this.endimges].classList.remove("dd");
	this.imgs[this.lastimges].classList.remove("cc");
	this.imgs[this.endimges].classList.remove("bb");
	this.imgs[this.lastimges].classList.remove("aa");


	this.endimges = this.lastimges;
	// 现任变前任；
	this.index = i;
	this.lastimges = i;
}
//向后执行绑定事件
content.prototype.nextGO = function() {
	let _this = this;
	this.goNext.onclick = function() {
		_this.index = _this.index + 1 > _this.btns.length - 1 ? 0 : _this.index + 1;
		_this.changeimges(_this.index);
		
		
	}
}
// 向前执行绑定事件
content.prototype.prveGO = function() {
	let _this = this;
	this.goPrev.onclick = function() {
		_this.index = _this.index + 1 > _this.btns.length - 1 ? 0 : _this.index + 1;
		_this.lastchangeimges(_this.index);
	}
}
// 自动轮播;
content.prototype.auto = function() {
	let _this = this;
	this.timer = setInterval(function() {
		_this.goNext.onclick();
	}, 2000)
}
// 鼠标移入
content.prototype.mouseenter = function() {
	let _this = this;
	this.div.onmouseenter = function() {
		clearInterval(_this.timer);
	}
}
// 鼠标移出
content.prototype.mouseleave = function() {
	let _this = this;
	this.div.onmouseleave = function() {
		_this.auto();
	}
}
