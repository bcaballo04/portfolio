let txt = "I am Brian Caballo, a current sophomore studying Computer Science at the University of Michigan with experience in software, data, and research!"
let i = 0;
let speed = 20; 

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".textbox").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;


function sendMail(contactForm) {
  emailjs.send("service_w07gg49", "template_pqwi8zz", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.email.value,
      "message": contactForm.message.value
  })
  .then(
    function(response) {
      alert("Email Sent!");
  },
  function(error) {
      alert("Email Error" + JSON.stringify(error));
  }
  );
  return false;  
}



