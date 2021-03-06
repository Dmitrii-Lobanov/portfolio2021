import photo from '../../assets/home.jpg';
import { Data, achievements } from "../../assets/data";

const prefix = 'about';

const About: React.FC = (): JSX.Element => {
  return (
    <div className={`${prefix}-container`}>
      <div className={`${prefix}-text`}>
        <h1>Dmitrii Lobanov</h1>
        {
          achievements.map((achievement: Data): JSX.Element => <h2 key={achievement.title}>{achievement?.title}</h2>)
        }
      </div>
      <div className={`${prefix}-img`}>
        <div className={`${prefix}-img-container`}>
          <img src={photo} alt="This is how I look like"/>
        </div>
      </div>
    </div>
  )
}

export default About;