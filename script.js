function changeMode(themeObj){
	if(themeObj.dataset.mode=="dark"){
		document.documentElement.setAttribute("data-theme","light");
		themeObj.dataset.mode="light";
	}
	else{
		document.documentElement.setAttribute("data-theme","dark");
		themeObj.dataset.mode="dark";
	}
}