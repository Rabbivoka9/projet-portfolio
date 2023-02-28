function sendMail() {
    let rec = {
        nom: form.nom.value,
        email: form.email.value,
        projet: form.projet.value,
    };
    const serviceID = "service_oc20sel";
    const templateID = "template_ecy0wr4";
    emailjs.send(serviceID, templateID, rec)
        .then(res => {
            nom: form.nom.value = "";
            email: form.email.value = "";
            projet: form.projet.value = "";
            console.log(res);
            alert('Votre message a bien été envoyer');
        })
        .catch(err => console.log(err));
  }
  const form = document.querySelector('form');
  form.addEventListener('submit', (e)=>{
      e.preventDefault();
      let nom = document.querySelector('#nom');
  let email = document.querySelector('#email');
  let projet= document.querySelector('#projet');
  const nomValue = nom.value;
  const projetValue = projet.value;    sendMail();
  });


  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.liste a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.liste a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)
