









 var firebaseConfig = {
    apiKey: "AIzaSyALkS4WuY-N6PqtQWmLPfw5daXr_f1FFmM",
    authDomain: "fan-forum-800ba.firebaseapp.com",
    databaseURL: "https://fan-forum-800ba.firebaseio.com",
    projectId: "fan-forum-800ba",
    storageBucket: "fan-forum-800ba.appspot.com",
    messagingSenderId: "1022660901135",
    appId: "1:1022660901135:web:88b2d50318ec67dcac667a",
    measurementId: "G-ZWWKMC2T19"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const rootRef=firebase.database().ref();
const CommentsRef=rootRef.child('comments');

document.getElementById('sub').addEventListener('click',function(){

var newComment=document.getElementById('com').value.replace(/\n/g,"<br>");
var newPostRef=CommentsRef.push();
newPostRef.set({
    name:document.getElementById('tbname').value.trim(),
    comment:newComment.trim(),
    frompage:location.pathname,
    when:firebase.database.ServerValue.TIMESTAMP
});

});


function showpastcomments(){
     var showat=document.getElementById('pastComments');
     var CommentsRef=firebase.database().ref('comments/').orderByChild('frompage').equalTo(location.pathname);
     CommentsRef.once('value',function(snapshot){
            snapshot.forEach(function(itemSnapshot){
                   var itemData=itemSnapshot.val();
                   var name=itemData.name;
                   var comment=itemData.comment;
                   var when=new Date(itemData.when).toLocaleDateString("en-us");
                   showat.innerHTML+="<li>" +comment + "<span>--"+name+"("+ when +")</span></li>";



            })

     })
    }
     showpastcomments()

















  var felid=document.querySelector('textarea');
  var backup=felid.getAttribute('placeholder');
  var btn=document.querySelector('.btnn');
var clear=document.getElementById('clear');
  felid.onfocus=function(){

    this.setAttribute('placeholder','');
    this.style.borderColor='#333';
   btn.style.display='block';
  }
  felid.onblur=function(){

   this.setAttribute('placeholder',backup);
   this.style.borderColor='#aaa'
  }
  clear.onclick=function(){
      btn.style.display='none';
      felid.value='';
  }
 

