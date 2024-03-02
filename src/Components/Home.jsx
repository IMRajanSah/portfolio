import "./Home.css"

export default function Home(){
  return (
    <div className="home">
      <div className="home-body">
        <div className="home-body-description">
        <p>Hi, I'm Rajan Sah, a Computer Science Engineering Master's student. I'm really excited about technology and learning how to make cool things with computers. Right now, I'm studying for my Master's degree in Computer Science Engineering, focusing on Full Stack Developer: React & .net. I already know a lot about React, C++, and I'm eager to learn even more. I love working with others and solving tricky problems together. I can't wait to use what I'm learning to help make the world a better place through technology!</p>
        <div className="home-contact-us">
          Connect With Me  
          <div className="contact-icon">
          <a href="https://www.facebook.com/profile.php?id=100010617722634" target="_blank"><i  class="fa fa-facebook-f"/></a> 
          <a href="https://github.com/IMRajanSah/" target="_blank"><i class="fa fa-github"/></a>
          <a href="https://www.instagram.com/imrajansah/" target="_blank"><i class="fa fa-instagram"/></a>
          <a href="https://students.iitr.ac.in/21535022.html" target="_blank"><i class="fa fa-firefox"/></a>
          <a href="https://www.linkedin.com/in/rajan-sah-4b938b191/" target="_blank"><i class="fa fa-linkedin"/></a>
          </div>
        </div>
        </div>
        <div className="home-body-pic">
          <img src={require("../img/home/ss.jpg")} alt="your" />
        </div>
      </div>
    </div>
  );
}
