class View{
	viewAdd(post){
		var elem=document.createElement('div');
		elem.className="post post-success";
		elem.innerHTML="<img src="+post.photo+"><i id=Author>"+post.author+"</i><small id=Date>"+post.createdDate+"</small><a>"+post.description+"</a><br><br>";
		document.body.appendChild(elem);
	}
	viewAddAuto(post){
		var elem=document.createElement('div');
		elem.className="post post-success";
		elem.innerHTML="<img src="+post.photo+"><i id=Author>"+"ID#"+post.id+"  "+post.author+"</i><small id=Date>"+post.createdDate+"</small><a>"+post.description+"</a><br><br>";
		document.body.appendChild(elem);
	}
	logIn(login){
		var buttons=document.body.getElementsByTagName('header');
		var logIn=document.createElement('header');
		logIn.innerHTML="<br><h2 id=User>"+login+"</h2><input type=button onclick=logout() value='Log Out'><br>";
		document.body.replaceChild(logIn, buttons[0]);
		var elem=document.createElement('div');
		elem.innerHTML="<br><br><input id=add type=button onclick=adding() value='Add Photo'><br><br>";
		document.body.appendChild(elem);

		var elem=document.createElement('div');
		elem.innerHTML="<br><br><input id=edit type=button onclick=edit() value='Edit Post'><br><br>";
		document.body.appendChild(elem);

	}
}