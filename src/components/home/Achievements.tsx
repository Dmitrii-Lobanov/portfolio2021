import { Data, achievements } from '../../assets/data';
import { IconContext } from "react-icons";

const prefix = 'achievement';

const Achievements: React.FC = (): JSX.Element => {
  return(
    <div className={`${prefix}-container`}>
      {
        achievements.map((achievement: Data): JSX.Element => {
          const Icon = achievement?.icon;
          return (
            <div className={`${prefix}-item`} key={achievement.title}>
              <div className={`${prefix}-icon-container`}>
                <IconContext.Provider value={{ className: 'achievement-icon' }}>
                  <Icon />
                </IconContext.Provider>
              </div>
              <div className={`${prefix}-title`}>{achievement?.title}</div>
              <div className={`${prefix}-description`}>{achievement?.description}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Achievements;