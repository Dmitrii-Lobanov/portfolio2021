import { Accomplishment, accomplishments } from "../../assets/data";

const prefix = 'skills';

const Accomplishments: React.FC = (): JSX.Element => {
  return (
    <div className={`${prefix}-container`}>
      {
        accomplishments.map((accomplishment: Accomplishment): JSX.Element => (
          <div className={`${prefix}-item`}>
            <h1>{accomplishment.title}</h1>
            <div className={`${prefix}-school`}><a href={accomplishment.schoolUrl} target="_blank" rel="noreferrer">{accomplishment.school}</a></div>
            {accomplishment.credential && <a href={accomplishment.credential} className={`${prefix}-credential`} target="_blank" rel="noreferrer">See certificate</a>}
          </div>
        ))
      }
    </div>
  )
}

export default Accomplishments;