
let ac= document.getElementsByClassName('pro')[0];
let search =document.getElementsByClassName('sicon')[0];
let a=document.getElementsByClassName('li')[0];
let nav=document.getElementById('bar');
let list =document.getElementById('list');
let li = document.getElementsByTagName('li');
let icon=document.getElementsByClassName('air')[0];
let bar = document.getElementsByClassName('search');
let d=document.getElementsByClassName('logo');
let pro=document.getElementsByClassName('profile')[0];
let main=document.getElementsByClassName('comp');

window.addEventListener('scroll',()=>{
	
	if(window.scrollY>=100){
		icon.style.color='rgb(252, 66, 103)';
		
		nav.style.position = 'fixed';
		bar[0].style.display='flex';
		nav.style.backgroundColor = 'white';
		nav.style.color='black';
		list.style.display='none'
		nav.style.zIndex = '22';
		bar[0].style.border='1px solid gray'
		document.getElementById('s').style.color='rgb(252, 66, 103)';
		d[0].style.marginRight = '850px';
		document.getElementById('host').style.color='black';
		document.getElementsByClassName('lang')[0].style.color='black';
		pro.style.border='1px solid gray';
	}else{	
		document.getElementById('s').style.color='white';
		icon.style.color='white';
		document.getElementsByClassName('lang')[0].style.color='white';
		document.getElementById('host').style.color='white';
		list.style.display='flex'
		bar[0].style.display='none';
		nav.style.position = 'relative';
		nav.style.backgroundColor = 'black';
		d[0].style.marginRight = '0px';
	}
})
let fl=true;
/*
search.addEventListener('click',()=>{
		let p=document.createElement("p");
		p.innerHTML="";
	search.appendChild(p);

	if(fl==true){		
				document.getElementsByClassName('search-icon')[1].style.color='white';
		p.classList.add('newclass2');
	search.classList.add('newclass');
	main[0].style.flex='2';

p.innerHTML="Search";
}else{
	p.innerHTML='sdd';
	search.removeChild(p);
	main[0].style.flex='3';
	search.classList.remove('newclass');	
	document.getElementsByClassName('search-icon')[1].style.color='black';
}
fl=!fl;

});
*/
let cl=false;
ac.addEventListener('click', ()=>{
	let s=document.getElementsByClassName('menuoption')[0];
	if(cl==false){
	s.style.display = 'flex';
	}else{
	s.style.display = 'none';
	}
cl=!cl;
});

let flex=false;
main[0].addEventListener('click',()=>{
	if(flex==false){
		main[0].style.flex='2';
		document.getElementsByClassName('crate')[0].style.display='block';
	}else{
		main[0].style.flex='3';
		document.getElementsByClassName('crate')[0].style.display='none';
	}
	flex=!flex;
})
