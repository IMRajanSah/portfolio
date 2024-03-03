import Card from 'react-bootstrap/Card';
import './SkillsCard.css'
export default function SkillsCard(props){
  console.log(props.imageURL);
  return (
    <Card style={{ width: '13.5rem',margin:"0.5rem",height:"22rem",fontSize:"0.5rem" }}>
      <Card.Img style={{height:"50%"}} variant="top" src={props.imageURL} alt='PLAYWRIGHT'/>
      <Card.Body style={{backgroundColor:"#343a40"}}>
        <Card.Title style={{color:"wheat"}}>{props.title}</Card.Title>
        <Card.Text style={{fontSize:".75rem"}}>
          {props.description}
        </Card.Text>
        <Card.Link style={{fontSize:"1rem"}} href={props.certificateURL} target="_blank"><i className="fa fa-link"/></Card.Link>
      </Card.Body>
    </Card>
  );
}
