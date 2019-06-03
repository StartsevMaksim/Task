function submitAdding(file, description){
	var elem1=localStorage.getItem("photoList");
	localStorage.removeItem("photoList");
	var photos=JSON.parse(elem1);
	var array=[];
	let list=new photoList(array);
	list.addAll(photos.photoPosts);

	var i=photos.photoPosts.length;
	var ident=i+1;

	var elem2=localStorage.getItem("account");
	var account=JSON.parse(elem2);
	var author=account.login;

	var date=new Date();

	var mstr=file.split('\\');
	var link=mstr[mstr.length-1];

	var post= {
		id: ident,
		author: author,
		createdDate: date,
		description: description,
		photo: link,
	}

	list.add(post);
	localStorage.setItem("photoList", JSON.stringify(list));
	window.location.href='tape.html';
	return false;
}