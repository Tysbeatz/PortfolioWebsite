const input =
document.getElementById("chat-input")

const messages =
document.getElementById("chat-messages")

input.addEventListener("keypress",function(e){

if(e.key==="Enter"){

let userText = input.value

messages.innerHTML +=
"<div>You: "+userText+"</div>"

let reply = "I am Sachin's AI assistant."

if(userText.includes("skills"))
reply = "Sachin knows HTML CSS JS Java SQL."

if(userText.includes("contact"))
reply = "You can contact via email."

messages.innerHTML +=
"<div>AI: "+reply+"</div>"

input.value=""

}

})
