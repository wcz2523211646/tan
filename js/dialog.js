class Dialog{
	//构造函数
	constructor(title = '天气预报',content = '今天晴转多云'){
		this.title = title;
		this.content = content;
		this.init();
	}
	//实例方法
	init(){
		this.createWrap();
	}
	addEvent(){
		let span = document.querySelectorAll('.sp')[0];
		let btn = document.querySelectorAll('.success')[0];
		let btns = document.querySelectorAll('.error')[0];
		span.addEventListener('click',() => {
			this.hide();
		});
		btn.addEventListener('click',() => {
			this.hide();
		});
		btns.addEventListener('click',() => {
			this.hide();
		});
	}
	hide(){
		let oDiv = document.querySelectorAll('.dialog')[0];
		oDiv.style.display = 'none';
	}
	createButton(txt,cls) {
		let btn = document.createElement('button');
		btn.innerHTML = txt;
		btn.className = cls;
		return btn;
	}
	createTitle() {
        let ol = document.createElement('ol');
        let span = document.createElement('span');

        ol.className = 'title';
        ol.innerHTML = this.title;
        span.className = 'sp';
        span.innerHTML = '<i class="icon iconfont icon-cuo"></i>';
        ol.append(span);
        return ol;
    }
    createContent() {
        let ul = document.createElement('ul');
        let btnSuccess = this.createButton('确定', 'success');
        let btnError = this.createButton('取消', 'error');
        ul.className = 'content';
        ul.innerHTML = this.content;
        ul.append(btnSuccess);
        ul.append(btnError);
        return ul;
    }
    createWrap() {
        let oDiv = document.createElement('div');
        let oTit = this.createTitle();
        let oCon = this.createContent();

        oDiv.append(oTit);
        oDiv.append(oCon);
        oDiv.className = 'dialog';

        document.body.append(oDiv);
        this.addEvent();
    }
	
}
let dialog = new Dialog();