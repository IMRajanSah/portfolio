import "./GetInTouch.css"
export default function GetInTouch(){
  return (
    <div className="GetInTouch-head">
      <div className="getintouch-contact-us">
          <span style={{fontSize:"2rem"}}>Connect With Me</span>
          <div className="contact-icon-getintouch">
            <a href="https://www.facebook.com/profile.php?id=100010617722634" target="_blank"><i  class="fa fa-facebook-f"/></a> 
            <a href="https://github.com/IMRajanSah/" target="_blank"><i class="fa fa-github"/></a>
            <a href="https://www.instagram.com/imrajansah/" target="_blank"><i class="fa fa-instagram"/></a>
            <a href="https://students.iitr.ac.in/21535022.html" target="_blank"><i class="fa fa-firefox"/></a>
            <a href="https://www.linkedin.com/in/rajan-sah-4b938b191/" target="_blank"><i class="fa fa-linkedin"/></a>
          </div>
          e-mail: rajansah369@gmail.com
      </div>
      <div className="contact-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.4390713852454!2d77.0937107107545!3d28.49643479014737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c10b7ffc39%3A0xbad3efb72fd58b89!2sBuilding%209A!5e0!3m2!1sen!2sin!4v1709377075532!5m2!1sen!2sin" width="600" height="600" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}
{/* <form action="mailto:contact@yourdomain.com" method="POST" enctype="multipart/form-data" name="EmailForm">
        Name:<br>
    <input type="text" size="19" name="Contact-Name"><br><br>
    Email:<br>
    <input type="email" name="Contact-Email"><br><br> 
    Message:<br> 
    <textarea name="Contact-Message" rows="6″ cols="20″>
    </textarea><br><br> 
    <button type="submit" value="Submit">Send</button>
</form>  */}