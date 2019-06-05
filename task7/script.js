
var flagSort=JSON.parse(localStorage.getItem("sort"));

var userListLength=JSON.parse(localStorage.getItem("pagin"));

if (!flagSort){
	for (var i=1; i<6; i++){
		var photo=localStorage.getItem(i);
		var elem=JSON.parse(photo);
		let view=new View();
		view.viewAdd(elem);
	}
}
else{
	var el=localStorage.getItem("account");
	var account=JSON.parse(el);

	var e=localStorage.getItem("sortList");
	var array=JSON.parse(e);

	var ele=localStorage.getItem("flag");
	var flagA=JSON.parse(ele);

	if (array.photoPosts.length<userListLength+5){
		for (var i=0; i<array.photoPosts.length; i++){
			let view=new View();
			if (array.photoPosts[i].author==account.login && flagA){
				view.viewAddAuto(array.photoPosts[i]);
			}
			else{
				view.viewAdd(array.photoPosts[i]);
			}
		}
	}
	else {
		for (var i=0; i<userListLength+5; i++){
			let view=new View();
			if (array.photoPosts[i].author==account.login && flagA){
				view.viewAddAuto(array.photoPosts[i]);
			}
			else{
				view.viewAdd(array.photoPosts[i]);
			}
		}
	}
	
}

var elem1=localStorage.getItem("flag");
var flag=JSON.parse(elem1);

var elem2=localStorage.getItem("photoList");
var photos=JSON.parse(elem2);

if (photos!=null && flag==false && !flagSort){
	let view=new View();
	if (photos.photoPosts.length<userListLength){
		for (var i=0; i<photos.photoPosts.length; i++){
			view.viewAdd(photos.photoPosts[i]);
		}
	}
	else {
		for (var i=0; i<userListLength; i++){
			view.viewAdd(photos.photoPosts[i]);
		}	
	}
}
else if (photos!=null && flag==true && !flagSort){
	let view=new View();
	if (photos.photoPosts.length<userListLength){
		for (var i=0; i<photos.photoPosts.length; i++){
			view.viewAddAuto(photos.photoPosts[i]);
		}
	}
	else {
		for (var i=0; i<userListLength; i++){
			view.viewAddAuto(photos.photoPosts[i]);
		}
	}
}

if (flag==true){
	let view=new View();
	var elem3=localStorage.getItem("account");
	var account=JSON.parse(elem3);
	view.logIn(account.login);
}

if (photos!=null && photos.photoPosts.length>=userListLength && photos.photoPosts.length!=0){
	let view=new View();
	view.pagin();
}


