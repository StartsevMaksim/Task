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
		if ((changes.photo==null)&&(changes.description==null)){
			return false;
		}
		if (changes.photo!=null){
			for (var i=0; i<this.photoPosts.length; i++){
				if (this.photoPosts[i].id===id){
					this.photoPosts[i].photo=changes.photo;
				}
			}
		}
		if (changes.description!=null){
			for (var i=0; i<this.photoPosts.length; i++){
				if (this.photoPosts[i].id===id){
					this.photoPosts[i].description=changes.description;
				}
			}
		}
		return true;
	}
	remove(id){
		for(var i=0; i<this.photoPosts.length; i++){
			if (this.photoPosts[i].id===id){
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
	id: "7",
	author: "author7",
	createdDate: new Date('2019-03-22T09:00:00'),
	description: "Sky",
	photo: "photo7.jpg",
},
{
	id: "8",
	author: "author8",
	createdDate: new Date('2019-05-01T18:00:00'),
	description: "City",
	photo: "photo8.jpg",
},
{
	id: "9",
	author: "author9",
	createdDate: new Date('2019-04-14T22:00:00'),
	description: "Islands",
	photo: "photo9.jpg",
},
]

let pl=new photoList(photos);
var res1=pl.getPage(0, 5);
showArray(res1);
console.log("");
var res2=pl.get("2");
showInformation(res2);
console.log("");
var res3=pl.add({id: "6", author: "author6", createdDate: new Date('2019-04-01T17:00:00'), description: "River", photo: "river.jpg"});
var res31=pl.getPage(0, 6);
console.log(res3);
showArray(res31);
console.log("");
var res4=pl.edit("3", {description: "Forest"});
console.log(res4);
var res41=pl.getPage(0, 6);
showArray(res41);
console.log("");
var res5=pl.remove("1");
console.log(res5);
var res51=pl.getPage(0, 5);
showArray(res51);
console.log("");
var res6=photoList.validate({id: "6", author: "author6"});
console.log(res6);
console.log("");
var res7=pl.addAll(addPhotos);
showArray(res7);
var res71=pl.getPage(0, 8);
showArray(res71);

function showInformation (res){
	console.log(res.id+"  "+res.author+"  "+res.createdDate+"  "+res.description+"  "+res.photo);
};
function showArray(array){
	for (var i=0; i<array.length; i++){
		showInformation(array[i]);
	}
}
function comparator (post1, post2){
	if (post1.createdDate.getTime()>post2.createdDate.getTime()){
		return 1;
	}
	else {
		return -1;
	}
}
