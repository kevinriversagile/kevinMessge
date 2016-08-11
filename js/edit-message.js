

function getMessage() {

    //var createdby = document.getElementById('myname').value;
    //var messageBox = document.getElementById('message').value;
    //var important = document.getElementById('important').checked;


    var myMessages ={
    
    
  }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var thisComment =JSON.parse(xhttp.responseText);
        document.getElementById('txtCreatedBy').value = thisComment.createdBy;
        document.getElementById('txtComment').value = thisComment.commentText;
        //document.getElementById('message').value = thisComment.id;
        document.getElementById('important').checked = thisComment.isImportant;
        console.log(xhttp.responseText);
      }     
    }
    xhttp.open("GET", apiEndpointBase + '/' + messageId, true); 
    xhttp.send();  
}


function editMessage() {
  var messageBox = document.getElementById('txtComment').value;
  var important = document.getElementById('important').checked;
 

  var edits = {
    comment: {
      commentText: messageBox,
      isImportant: important
    }
  };
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      window.location.href = 'kevin.htm';
    }
  }

  xhttp.open("PUT", apiEndpointBase + '/' + messageId, true); 
   xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify(edits));   

  return false;      
}

var messageId = getQueryStringValue('messageId');

if (messageId) {
  messageId = parseInt(messageId, 10);
} else {
  var result = confirm("Sorry pal, you can't edit a message unless it's got an id!");
}
  // result true means they clicked OK
  // if (result === true) {
  //   window.location.href = '/';
  // } else {
  //   window.location.href = '/';
   //}

  getMessage();

  // PSST! Hey you! Yeah, you intrepid student!
  // We're sending them back to the index no matter what they choose.
  // In that case, I didn't have to use an if/else block.
  // But, you might want to use a confirm box somewhere else in your code
  // and I thought this might be handy. HINT HINT!