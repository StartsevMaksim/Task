var photoPosts=[
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
	photo: "photo5",
},
];
(function(){
	function getPhotoPosts (skip, top){
		var postsArray=[];
		postsArray=photoPosts;
		postsArray.splice(0, +skip);
		postsArray.splice(+top, postsArray.length-(+top));
		postsArray.sort(comparator);
		return postsArray;
	}
	function comparator (post1, post2){
		if (post1.createdDate.getTime()>post2.createdDate.getTime()){
			return 1;
		}
		else {
			return -1;
		}
	}
	function getPhotoPost (info){
		for (var i=0; i<photoPosts.length; i++){
			if (photoPosts[i].id==info){
				return photoPosts[i];
			}
		}
	}
	function validatePhotoPost (post){
		if ((post.id!=null)&&(post.author!=null)&&(post.createdDate!=null)&&(post.description!=null)&&(post.photo!=null)){
			return true;
		}
		else {
			return false;
		}
	}
	function addPhotoPost (post){
		if(validatePhotoPost(post)){
			photoPosts.push(post);
			return true;
		}
		else{
			return false;
		}
	}
	function editPhotoPost (id, changes){
		if ((changes.photo==null)&&(changes.description==null)){
			return false;
		}
		if (changes.photo!=null){
			for (var i=0; i<photoPosts.length; i++){
				if (photoPosts[i].id===id){
					photoPosts[i].photo=changes.photo;
				}
			}
		}
		if (changes.description!=null){
			for (var i=0; i<photoPosts.length; i++){
				if (photoPosts[i].id===id){
					photoPosts[i].description=changes.description;
				}
			}
		}
		return true;
	}
	function removePhotoPost (id){
		for(var i=0; i<photoPosts.length; i++){
			if (photoPosts[i].id===id){
				photoPosts.splice(i, 1);
				return true;
			}
		}
		return false;
	}
	function showInformation (res){
		alert(res.id+"  "+res.author+"  "+res.createdDate+"  "+res.description+"  "+res.photo);
	};
	function showArray(array){
		for (var i=0; i<array.length; i++){
			showInformation(array[i]);
		}
	}
	editPhotoPost("1", {description: "Desert", photo: "desert.jpg"});
	showArray(photoPosts);
	var post={
		id: "6",
		author: "author6",
		createdDate: new Date('2019-04-01T19:00:00'),
		description: "River",
		photo: "photo6",
	}

}())
