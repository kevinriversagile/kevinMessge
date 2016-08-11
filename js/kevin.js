function getAllMessages() {
  toggleSpinner(true);
  // TODO: your solution goes here
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4) {
      toggleSpinner(false);
      showMessages(xhttp.responseText);
    }
  };

  xhttp.open('GET', apiEndpointBase, true);
  xhttp.send();
}

function addMessage() {
  window.location.href = 'add-message.html';
}
//
function editMessage(messageId) {
  window.location.href = 'edit-message.html?messageId=' + messageId;
}

function deleteMessage(messageId) {
var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        getAllMessages();
      }     
    }
    xhttp.open("Delete", apiEndpointBase + '/' + messageId, true); 

    xhttp.send();  
  

}

function toggleSpinner(isVisible) {
  document.getElementById('loading').classList[isVisible ? 'add' : 'remove']('visible');
}

function showMessages(messages) {
  if (typeof messages === 'string') {
    messages = JSON.parse(messages);
  }

  // reverse sort so last updated is first!
  messages.sort(function(a, b) {
    if (a.updatedAt > b.updatedAt) {
      return -1;
    }
    
    if (a.updatedAt < b.updatedAt) {
      return 1;
    }

    return 0;
  });

  var myTable = document.getElementById('kevTable').getElementsByTagName('tbody')[0];
  // clear the existing messages
  // myTable.innerHTML = '';

  messages.forEach(function(message) {
    var row = myTable.insertRow(myTable.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = message.createdBy;


    if (message.isImportant) {
      cell1.innerHTML += '&#160;<span class="label label-danger">IMPORTANT</span>' ;
    }

    cell2.innerHTML = message.commentText;

    cell3.innerHTML = "Created" + moment(message.createdAt).fromNow();


     //message header
      var messageHtml = '<button class="btn btn-primary pull-right" onclick="editMessage(' + message.id + ')"><i class="glyphicon glyphicon-pencil"></i></button>'+'<button class="btn btn-danger pull-right" onclick="deleteMessage(' + message.id + ')"><i class="glyphicon glyphicon-trash"></i></button>';
    cell4.innerHTML = messageHtml;
    
    // // message text
    //messageTextDiv.innerHTML = message.commentText;

    // // message date
    // if (message.createdAt === message.updatedAt) {
    //   messageDateDiv.innerHTML = 'Created ' + moment(message.createdAt).fromNow();
    // } else {
    //   messageDateDiv.innerHTML = 'Last updated ' + moment(message.updatedAt).fromNow();
    // }

    // messageDateDiv.classList.add('date');

    // // update message div
     //messageDiv.classList.add('message');
     //messageDiv.innerHTML = messageHtml;
     //messageDiv.appendChild(messageTextDiv);
     //messageDiv.appendChild(messageDateDiv);

    // messagesContainer.appendChild(messageDiv);
  });
}

// This will make sure that all messages are loaded when page is loaded!
getAllMessages();



function getTable() {
  var table = document.getElementById('kevTable');
  var row = table.insertRow(table.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell3.innerHTML = "Works";
}



//+ message.createdBy +
      //(message.isImportant ? '&#160;<span class="label label-danger">IMPORTANT</span>' : '')