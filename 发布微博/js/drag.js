function  Drag (obj,title){
	this.obj=obj;
	this.title=title? this.obj.querySelector(title):obj;//有无title
}
/*原型时新增方法*/
Drag.prototype = Object.assign(Drag.prototype, {
	init:function(){
		var _this=this;
		this.title.onmousedown=function(e){
			var disX=e.offsetX,
			disY=e.offsetY;
			//鼠标移动
			document.onmousemove=function(e){
					//_div的左上角坐标=鼠标坐标-偏移量
				var _left=e.clientX-disX,
					_top=e.clientY-_disY;
					_this.move(_top, _left);
			}
			
			
			//onmouseup:函数（事件）当用户在元素具有焦点时释放鼠标按钮时激发。
			document.onmouseup=function(){
			//停止拖动,move事件解除绑定：同一个元素_div中的同一个document.onmousemove事件，只能绑定一个处理函数，后面会覆盖前面
				document.onmousemove=null;
			}
			//默认选择文字,文字可以单独拖出来
			return false;//阻止默认圈选文字事件
		}
	},
	move:function(top,left){
// 		var _maxW=tools.getBody().width-this.obj.offsetWidth;
// 		var _maxH=tools.getBody().height-this.obj.offsetHeight;
		if(left<0) 	left=0;
		// else if (left>maxW) left=_maxW;
		if(top<0)	top=0;
		// else if(top>_maxH) top=_maxH;
		
		if(left > tools.getBody().width - this.obj.offsetWidth) left = tools.getBody().width - this.obj.offsetWidth;
		if(top > tools.getBody().height - this.obj.offsetHeight) top = tools.getBody().height - this.obj.offsetHeight;
		tools.setStyle(this.obj,{
			left :	left+"px",
			top :	top+"px"
		})
		
	}
})