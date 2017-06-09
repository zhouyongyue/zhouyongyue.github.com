$(()=>{
		let oAbout = document.getElementById('w3l-about')
		let aUl = oAbout.getElementsByTagName('ul')
		let oPre = document.getElementById('previous');
		let oNext = document.getElementById('next');
		let num=0;

		function briefNext(){
			setTimeout(function(){
				num++;
				if(num==aUl.length){
					num=0;
				}
				for(let i=0;i<aUl.length;i++){
					aUl[i].style.display='none'
				}
				aUl[num].style.display='block';
			},100)
		}
		function briefPre(){
			setTimeout(function(){
				num--;
				if(num==-1){
					num=aUl.length-1;
				}
				for(let i=0;i<aUl.length;i++){
					aUl[i].style.display='none'
				}
				aUl[num].style.display='block';
			},100)
		}

		oPre.addEventListener('click',briefPre,false)
		oNext.addEventListener('click',briefNext,false)
})
