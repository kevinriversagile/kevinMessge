var apiEndpointBase = 'http://code-school-comments-api.herokuapp.com/comments';


function addMessage() {

  var createdby = document.getElementById('myname').value;
  var messageBox = document.getElementById('message').value;
  var important = document.getElementById('important').checked;

  var comments = {
    comment: {
      commentText: messageBox,
      createdBy: createdby,
      isImportant: important
    }
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      window.location.href = 'kevin.htm';
    }
  }
  xhttp.open("POST", apiEndpointBase, true); 
  xhttp.setRequestHeader('Content-Type', 'application/json');
  xhttp.send(JSON.stringify(comments));       
}

//function editMessage() {
  //var editComments = {
//     comment: {
//       commentText: messageBox,
//       isImportant: false
//     }
//   }
// }
//   var xhttp = new XMLHttpRequest

