// Show/hide chat window
const chatIcon = document.getElementById('chatIcon');
const chatWindow = document.getElementById('chatWindow');
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var formattedTime = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0');
var show = 0 
var resp=""
chatIcon.addEventListener('click', () => {
  if (show==0){
    chatWindow.style.display = 'block';
    show=1
  }
  else {
    chatWindow.style.display = 'none';
    show=0
  } 
});



// Handle sending messages
const sendButton = document.getElementById('sendButton');
const messageInput = document.getElementById('messageInput');
const chatBody = document.querySelector('.chat-body');

sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    /* const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user');
    messageElement.textContent = message; */
    const messageElement = `
    <div class="msgTimeUser">sent at ${formattedTime} </div>
    <div class="messageUser">
  
    ${message}
    </div>`
    /* chatBody.appendChild(messageElement); */
    chatBody.innerHTML+=messageElement
    messageInput.value = '';
  }
  gnerateRespense(message) ;
});

function gnerateRespense(message){
    message.includes("hi")
    if (message!=""){
        if (message.includes("hello")|| message.includes("hi")|| message.includes("hey")|| message.includes("bonjour")|| message.includes("salut")){
            resp="hi , how can I help you ?"
        }
        else{
            resp=`sorry I'm not able to respond to your message the admin will 
            look into it soon or contact us with mail at : contact@codetn.com`
        }
        showresp(resp)
        resp="" 
    }
    
    
}
function showresp(resp){
  
    const messageElement = `
   
       <div class="content">
                <img src="../image/robot.png" class="boticon" alt="">
            
            <div>
                <div class="msgTime">sent at ${formattedTime} </div>
                <div class="messageChat">
                ${resp}
                </div>
            </div>
        </div>
    
    `
    chatBody.innerHTML+=messageElement
    messageInput.value = '';
    resp=""
}
