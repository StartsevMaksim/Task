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

var elem1=localStorage.getItem("flag");
var flag=JSON.parse(elem1);

if (flag==null){
	localStorage.clear();

	flagAuto=false;
	localStorage.setItem("auto", JSON.stringify(flagAuto));
	
	flagSort=false;
	localStorage.setItem("sort", JSON.stringify(flagSort));
	
	flag=false;
	localStorage.setItem("flag", JSON.stringify(flag));

	var account={
		login: "SiteUser",
		password: "123456",
	}

	localStorage.setItem("account", JSON.stringify(account));

	for (var i=0; i<photos.length; i++){
		var elem=JSON.stringify(photos[i]);
		localStorage.setItem(photos[i].id, elem);
	}
	
	var pag=0;
	localStorage.setItem("pagin", JSON.stringify(pag));
}