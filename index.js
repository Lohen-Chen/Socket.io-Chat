import {io} from "socket.io-client"; 

const messageButton = document.getElementById("send");
const joinButton = document.getElementById("join-room");
const roomInput = document.getElementById("roomid");
const messageInput = document.getElementById("message");
const message = "";
const messagecontainer = document.getElementById('messagecontainer');
const console = document.getElementById('console');

window.addEventListener('DOMContentLoaded', (event) => {
  var div = document.createElement("div");
  div.style.color = 'red';
  div.innerText = "Welcome to Lohen's Chat, join a room or just stick to the default one. Commands are used by adding a / before a command use /help or /commands to get a list of commands. Please read the rules and remember that this is only for educational purposes only :)"; 
  console.appendChild(div);
});

messaging.addEventListener("submit", e => {   e.preventDefault()
  const message = messageInput.value; 
  if(message === ""){
    return displayMessage(message);
  } else if(message.charAt(0) == "/") {
    displayCommand(message);
  }else {
    displayMessage(message);
  }
  messageInput.value = ""; 
})

room.addEventListener("submit", e => { e.preventDefault() 
  const roomInput = document.getElementById("roomid");
  var div = document.createElement("div");
  div.style.color = 'red';
  div.innerText = "You have join room: " + roomInput.value; 
  console.appendChild(div);
})

function displayMessage(message) {
  var div = document.createElement("div");
  div.innerText = message; 
  messagecontainer.appendChild(div);
  div.scrollIntoView(); 
}

function displayCommand(message) {
  var div = document.createElement("div");
  div.innerText = message; 
  console.appendChild(div);
  div.scrollIntoView(); 
}

