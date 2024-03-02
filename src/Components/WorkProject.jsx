import "./WorkProject.css"
export default function WorkProject(){
  return (
    <div className="workproject-head">
      <div className="work">
        <div className="title">WORK</div>
        <div className="work-item">
          <div className="work-title">CNH Industrial</div>
          <div className="work-role">Software Development Engineer Test (SDET)</div>
          <div className="work-duration">(June 2023 - Present)</div>
          <ul>
            <li>Test Auomation - Playwright</li>
            <li>Manual Testing</li>
            <li>Azure Devops</li>
          </ul>
        </div>
        <hr/>
      </div>
      <div className="project">
        <div className="title">PROJECT </div>
        <div className="project-item">
          <div className="project-title">
            Autonomous Vehicle Driving Maneuvers | IIT Roorkee { }
            <a href="https://drive.google.com/file/d/1bmpiP1-xVcmYFh5uXMAOLpc0ITIPzcOc/view?usp=sharing" target="_blank"><i class="fa fa-certificate"/></a>
          </div>
            <div className="project-role">Self-driving cars with Carla Simulator - RL and DRL.</div>
            <div className="project-duration">(June 2022 - May 2023)</div>
          </div>
          <hr/>
          <div className="project-item">
          <div className="project-title">
            Heart Failure Prediction | IIT Roorkee { }
            <a href="https://drive.google.com/file/d/1BFEA1m75lB77hx68sB8suH4P0TyeIPdL/view?usp=sharing" target="_blank"><i class="fa fa-certificate"/></a>
          </div>
            <div className="project-role">Machine Learning model</div>
            <div className="project-duration">(January 2022 - April 2022)</div>
          </div>
          <hr/>
          <div className="project-item">
          <div className="project-title">
            Hotel Management System | IIT Roorkee { }
            <a href="https://drive.google.com/file/d/1SzUHLGgox11K-F6VMduysbrNG_qvNow-/view?usp=sharing" target="_blank"><i class="fa fa-certificate"/></a>
          </div>
            <div className="project-role">Database and corresponding GUI for Hotel Management System.</div>
            <div className="project-duration">(August 2021 - October 2021)</div>
          </div>
          <hr/>
          <div className="project-item">
          <div className="project-title">
            MedCamp | KIIT, Bhubaneswar { }
            <a href="https://drive.google.com/file/d/1W2dDLowhMD5oUklPKC6j4z1hlJqyxu_U/view?usp=sharing" target="_blank"><i class="fa fa-certificate"/></a>
          </div>
            <div className="project-role">Android application</div>
            <div className="project-duration">(December 2019 - May 2020)</div>
          </div>
          <hr style={{marginBottom:"0"}}/>
          <span style={{fontSize:"1rem"}}>& more</span>
        </div>
    </div>
  );
}
