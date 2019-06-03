class photoList{
	constructor (photoPost){
		this.photoPosts=photoPost;
	}
	getPage(skip, top){
		var postsArray=this.photoPosts;
		postsArray.splice(0, +skip);
		postsArray.splice(+top, postsArray.length-(+top));
		postsArray.sort(comparator);
		return postsArray;
	}
	get(id){
		for (var i=0; i<this.photoPosts.length; i++){
			if (this.photoPosts[i].id==id){
				return this.photoPosts[i];
			}
		}
	}
	add(post){
		if (this.validatePhotoPost(post)){
			this.photoPosts.push(post);
			return true;
		}
		else {
			return false;
		}
	}
	edit(id, changes){
		if ((changes.photo==="")&&(changes.description==="")){
			return false;
		}
		if (changes.photo!==""){
			for (var i=0; i<this.photoPosts.length; i++){
				if (this.photoPosts[i].id==id){
					this.photoPosts[i].photo=changes.photo;
				}
			}
		}
		if (changes.description!==""){
			for (var i=0; i<this.photoPosts.length; i++){
				if (this.photoPosts[i].id==id){
					this.photoPosts[i].description=changes.description;
				}
			}
		}
		return true;
	}
	remove(id){
		for(var i=0; i<this.photoPosts.length; i++){
			if (this.photoPosts[i].id==id){
				this.photoPosts.splice(i, 1);
				return true;
			}
		}
		return false;
	}
	static validate(post){
		return new photoList(post).validatePhotoPost(post);
	}
	addAll(photoArray){
		var array=[];
		for (var i=0; i<photoArray.length; i++){
			if (this.validatePhotoPost(photoArray[i])){
				this.photoPosts.push(photoArray[i]);
			}
			else{
				array.push(photoArray[i]);
			}
		}
		return array;
	}
	validatePhotoPost (post){
		if ((post.id!=null)&&(post.author!=null)&&(post.createdDate!=null)&&(post.description!=null)&&(post.photo!=null)){
			return true;
		}
		else {
			return false;
		}
	}
}