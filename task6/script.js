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
			let view=new View();
			view.viewAdd(post);
			return true;
		}
		else {
			return false;
		}
	}
	edit(id, changes){
		if ((changes.photo==null)&&(changes.description==null)){
			return false;
		}
		if (changes.photo!=null){
			for (var i=0; i<this.photoPosts.length; i++){
				if (this.photoPosts[i].id===id){
					let view=new View();
					view.viewEditPhoto(this.photoPosts[i], changes);
					this.photoPosts[i].photo=changes.photo;
				}
			}
		}
		if (changes.description!=null){
			for (var i=0; i<this.photoPosts.length; i++){
				if (this.photoPosts[i].id===id){
					let view=new View();
					view.viewEditDescription(this.photoPosts[i], changes);
					this.photoPosts[i].description=changes.description;
				}
			}
		}
		return true;
	}
	remove(id){
		for(var i=0; i<this.photoPosts.length; i++){
			if (this.photoPosts[i].id===id){
				let view=new View();
				view.viewDelete(this.photoPosts[i]);
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

class View{
	viewAdd(post){
		var elem=document.createElement('div');
		elem.className="post post-success";
		elem.innerHTML="<img src="+post.photo+"><i id=Author>"+post.author+"</i><small id=Date>"+post.createdDate+"</small><a>"+post.description+"</a><button id=Like>Like</button><br>";
		document.body.appendChild(elem);
	}
	viewDelete(post){
		var posts=document.getElementsByClassName('post');
		for (var j=0; j<posts.length; j++){
			if (posts[j].getElementsByTagName('img')[0].src.includes(post.photo)){
				document.body.removeChild(posts[j]);
			}
		}
	}
	viewEditDescription(post, change){
		var newElem=document.createElement('div');
		newElem.className="post post-success";
		newElem.innerHTML="<img src="+post.photo+"><i id=Author>"+post.author+"</i><small id=Date>"+post.createdDate+"</small><a>"+change.description+"</a><button id=Like>Like</button><br>";
		var posts=document.getElementsByClassName('post');
		for (var j=0; j<posts.length; j++){
			if (posts[j].getElementsByTagName('img')[0].src.includes(post.photo)){
				document.body.replaceChild(newElem, posts[j]);
			}
		}
	}
	viewEditPhoto(post, change){
		var newElem=document.createElement('div');
		newElem.className="post post-success";
		newElem.innerHTML="<img src="+change.photo+"><i id=Author>"+post.author+"</i><small id=Date>"+post.createdDate+"</small><a>"+post.description+"</a><button id=Like>Like</button><br>";
		var posts=document.getElementsByClassName('post');
		for (var j=0; j<posts.length; j++){
			if (posts[j].getElementsByTagName('img')[0].src.includes(post.photo)){
				document.body.replaceChild(newElem, posts[j]);
			}
		}
	}
	logIn(){
		var buttons=document.body.getElementsByTagName('header');
		var logIn=document.createElement('header');
		logIn.innerHTML="<br><h2 id=User>User</h2><button id=signB>Log Out</button><br>";
		document.body.replaceChild(logIn, buttons[0]);
		var elem=document.createElement('div');
		elem.className="addingButton";
		elem.innerHTML="<br><br><button id=addPhoto>Add Photo</button><br><br>";
		document.body.appendChild(elem);
	}
	logOut(){
		var buttons=document.body.getElementsByTagName('header');
		var logIn=document.createElement('header');
		logIn.innerHTML="<br><button id=signB>Sign in</button><br><br><br>";
		document.body.replaceChild(logIn, buttons[0]);
		document.body.removeChild(document.body.getElementsByClassName('addingButton')[0]);
	}
}
var photos=[
{
	id: "1",
	author: "author1",
	createdDate: new Date('2019-03-01T16:00:00'),
	description: "Lake",
	photo: "photo1.jpg",
},
{
	id: "2",
	author: "author2",
	createdDate: new Date('2019-03-01T17:00:00'),
	description: "Mountains",
	photo: "photo2.jpg",
},
{
	id: "3",
	author: "author3",
	createdDate: new Date('2019-03-01T20:00:00'),
	description: "Sunset",
	photo: "photo3.jpg",
},
{
	id: "4",
	author: "author4",
	createdDate: new Date('2019-03-01T13:00:00'),
	description: "Sunrise",
	photo: "photo4.jpg",
},
{
	id: "5",
	author: "author5",
	createdDate: new Date('2019-03-01T19:00:00'),
	description: "Stars",
	photo: "photo5.jpg",
},
];

var addPhotos=[
{
	id: "6",
	author: "author6",
	createdDate: new Date('2019-03-22T09:00:00'),
	description: "Sky",
	photo: "photo6.jpg",
},
{
	id: "7",
	author: "author7",
	createdDate: new Date('2019-05-01T18:00:00'),
	description: "City",
	photo: "photo7.jpg",
},
{
	id: "8",
	author: "author8",
	createdDate: new Date('2019-04-14T22:00:00'),
	description: "Islands",
	photo: "photo8.jpg",
},
]

var p=[];

let pl=new photoList (p);
for (var i=0; i<photos.length; i++){
	pl.add(photos[i]);
}
pl.remove("1");
pl.edit("5", {description: "Relax", photo: "photo9.jpg",});

let v=new View();
v.logIn();
v.logOut();

function comparator (post1, post2){
	if (post1.createdDate.getTime()>post2.createdDate.getTime()){
		return 1;
	}
	else {
		return -1;
	}
}
