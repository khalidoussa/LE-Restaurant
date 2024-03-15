let btlenvoyer=document.querySelector('.envoyer')
    
    
btlenvoyer.addEventListener('click',function(){
  btlenvoyer.style.background='green'
})

btlenvoyer.addEventListener('mouseenter',function(){
  btlenvoyer.style.background='grey'
})

let contact=document.querySelector('#contact')

contact.addEventListener('mouseover',function(){
    contact.style.color='grey'
  })


document.addEventListener("submit", function(evenement) { 
if (document.getElementById("nom").value == "") {
            evenement.preventDefault();
            alert("Pensez à taper votre nom");
            document.getElementById("nom").focus();
        }
  else if (document.getElementById("email").value == "") {
      evenement.preventDefault();
      alert("Tapez un email valable pour avoir une réponse.");
      document.getElementById("email").focus();
  }
      else if (document.getElementById("message").value == "") {
            evenement.preventDefault();
            alert("Pensez à taper un message !");
            document.getElementById("message").focus();
        }
       
    });