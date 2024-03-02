import Card from 'react-bootstrap/Card';
import './SkillsCard.css'
export default function SkillsCard({imageURL,title,description,certificateURL}){
  console.log(imageURL);
  return (
    <Card style={{ width: '13.5rem',margin:"0.5rem",height:"22rem",fontSize:"0.5rem" }}>
      <Card.Img style={{height:"65%"}} variant="top" src={""} />
      <Card.Body style={{backgroundColor:"#343a40"}}>
        <Card.Title style={{color:"wheat"}}>{title}</Card.Title>
        <Card.Text style={{fontSize:".75rem"}}>
          {description}
        </Card.Text>
        <Card.Link style={{fontSize:"1rem"}} href={certificateURL} target="_blank"><i class="fa fa-link"/></Card.Link>
      </Card.Body>
    </Card>
  );
}
