import { skills, Data } from "../../assets/data";
import icon from '../../assets/skills.svg';

const prefix = 'top-skills';

const About: React.FC = (): JSX.Element => {
  return (
    <div className={`${prefix}-container`}>
      <div className={`${prefix}-text`}>
        <h1>Skills</h1>
        {
          skills.map((skill: Data): JSX.Element => <h2 key={skill.title}>{skill?.title}</h2>)
        }
      </div>
      <div className={`${prefix}-img`}>
        <div className={`${prefix}-img-container`}>
          <img src={icon} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default About;