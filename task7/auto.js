function submit_ (logS, pasS){
	var elem1=localStorage.getItem("account");
	var account=JSON.parse(elem1);
	if (logS==account.login && pasS==account.password){
		var elem2=localStorage.getItem("auto");
		var flagAuto=JSON.parse(elem2);
		if (flagAuto==false){
			localStorage.removeItem("auto");
			var array=[];
			let list=new photoList(array);
			localStorage.setItem("photoList", JSON.stringify(list));
			flagAuto=true;
			localStorage.setItem("auto", flagAuto);
		}

		localStorage.removeItem("flag");
		var flag=true;
		localStorage.setItem("flag", JSON.stringify(flag));
		window.location.href='tape.html';
		return false;
	}
	else {
		alert("Wrong login or password");
	}
}