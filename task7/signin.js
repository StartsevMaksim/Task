function signin(){
	var flag=false;
	localStorage.removeItem("sort");
	localStorage.setItem("sort", JSON.stringify(flag));
	window.location.assign('authorization.html');
}

function logout(){
	var flag=false;
	localStorage.removeItem("sort");
	localStorage.setItem("sort", JSON.stringify(flag));
	var elem=localStorage.getItem("flag");
	localStorage.removeItem("flag");
	var flag=false;
	localStorage.setItem("flag", JSON.stringify(flag));
	window.location.assign('tape.html');
}

function adding(){
	var flag=false;
	localStorage.removeItem("sort");
	localStorage.setItem("sort", JSON.stringify(flag));
	window.location.assign('adding.html');
}

function edit(){
	var flag=false;
	localStorage.removeItem("sort");
	localStorage.setItem("sort", JSON.stringify(flag));
	window.location.assign('edit.html');
}

function submitFilter(filter){
	flag=true;
	localStorage.removeItem("sort");
	localStorage.setItem("sort", JSON.stringify(flag));

	var elem1=localStorage.getItem("photoList");
	var array=[];
	let list=new photoList(array);
	var userPhotos=JSON.parse(elem1);
	if (userPhotos!=null){
		list.addAll(userPhotos.photoPosts);
	}

	for (var i=1; i<6; i++){
		var photo=localStorage.getItem(i);
		var e=JSON.parse(photo);
		list.add(e);
	}

	if (filter=="author"){
		list.photoPosts.sort(comparatorAuthor);
	}
	else {
		list.photoPosts.sort(comparatorDescription);
	}

	localStorage.removeItem("sortList");
	localStorage.setItem("sortList", JSON.stringify(list));

	window.location.href='tape.html';
	return false;
}

function comparatorAuthor (post1, post2){
	if (post1.author>post2.author){
		return 1;
	}
	else {
		return -1;
	}
}

function comparatorDescription (post1, post2){
	if (post1.description>post2.description){
		return 1;
	}
	else {
		return -1;
	}
}