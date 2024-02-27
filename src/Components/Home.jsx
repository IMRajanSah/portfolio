import "./Home.css"
import "../img/bg.jpg"
export default function Home(){
  return (
    <div className="home">
      <div className="home-body">
        <div className="home-body-description">
        <p>Hi, I'm Rajan Sah, a Computer Science Engineering Master's student. I'm really excited about technology and learning how to make cool things with computers. Right now, I'm studying for my Master's degree in Computer Science Engineering, focusing on Full Stack Developer: React & .net. I already know a lot about React, C++, and I'm eager to learn even more. I love working with others and solving tricky problems together. I can't wait to use what I'm learning to help make the world a better place through technology!</p>
        </div>
        <div className="home-body-pic">
          <img src={require("../img/ss.jpg")} alt="your" />
        </div>
      </div>
    </div>
  );
}
