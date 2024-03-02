import { Table } from 'react-bootstrap';
import './Education.css'
export default function Education(){
  return (
    <div className='Education-content'>
      <Table responsive>
        <thead>
          <th>Year</th>
          <th>Degree</th>
          <th>Institution</th>
          <th>Score</th>
        </thead>
        <tbody>
          <tr>
            <td>2021 - 2023</td>
            <td>Masters of Technology (M.Tech) in Computer Science & Engineering</td>
            <td>Indian Institute of Technology, Roorkee <a href="https://www.iitr.ac.in/" target="_blank"><i className="fa fa-graduation-cap"/></a></td>
            <td>7.053</td>
          </tr>
          <tr>
            <td>2017 - 2021</td>
            <td>Bachelors of Technology (B.Tech) in Computer Science & Engineering</td>
            <td>Kalinga Institute of Industrial Technology, Bhubaneswar <a href="https://kiit.ac.in/" target="_blank"><i className="fa fa-graduation-cap"/></a></td>
            <td>9.010</td>
          </tr>
          <tr>
            <td>2014 - 2016</td>
            <td>Intermediate (Class XII)</td>
            <td>New English Boarding H.S.School</td>
            <td>77.90%</td>
          </tr>
          <tr>
            <td>2002 - 2014</td>
            <td>Matriculate (Class X)</td>
            <td>Manakamana Public School</td>
            <td>83.88%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
