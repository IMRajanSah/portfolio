import SkillsCard from "./comp/SkillsCard";
import "./Skills.css"
import cpp from "../img/skills/cpp.jpg"
export default function Skills(){
  const skills = [
    {imgageURL: cpp, id: 1, title: 'DSA with C++', description: 'Intermediate Level with Data Structure & Algorithms', certificateURL: 'https://leetcode.com/Iamrajansah50960/'},
    {imgageURL: 'Nicole', id: 2, title: 'ReactJS', description: 'Intermediate Level, Seeking for Opportunity', certificateURL: 'https://portfolio-rajansah.netlify.app/'},
    {imgageURL: 'Nicole', id: 3, title: 'PlayWright with Javascript', description: 'UI and API Automation using Playwright ', certificateURL: 'https://www.udemy.com/certificate/UC-d97fbd7c-70b7-42f6-a917-5d6e9fc824b3/'}
];
// console.log(skills)
  return (
    
    <div className="skills-head">
      {skills.map(skill=>(
        <SkillsCard {...skill} key={skill.id}/>
      ))}
        
    </div>
  );
}
