function submitEdit(ident, file, description){
	var elem1=localStorage.getItem("photoList");
	localStorage.removeItem("photoList");
	var list=JSON.parse(elem1);
	let photos=new photoList(list.photoPosts);

	var link=file;
	if (file!=null){
		var mstr=file.split('\\');
		link=mstr[mstr.length-1];
	}

	photos.edit(ident, {description: description, photo: link,});

	localStorage.setItem("photoList", JSON.stringify(photos));
	window.location.href='tape.html';
	return false;
}

function submitRemove(ident){
	var elem1=localStorage.getItem("photoList");
	localStorage.removeItem("photoList");
	var list=JSON.parse(elem1);
	let photos=new photoList(list.photoPosts);

	photos.remove(ident);

	localStorage.setItem("photoList", JSON.stringify(photos));
	window.location.href='tape.html';
	return false;
}