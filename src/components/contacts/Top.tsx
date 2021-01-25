// import { GrContact } from "react-icons/gr";
import icon from '../../assets/contacts.svg';

const prefix = 'top-contacts';

const Top: React.FC = ():JSX.Element => {
  return (
    <div className={`${prefix}-container`}>
      <div className={`${prefix}-text`}>
        <h1>Contacts</h1>
        <h2>Do you have any feedback on my articles or website, or just want to say hi? Feel free to call or write me.</h2>
      </div>
      <div className={`${prefix}-img`}>
        <div className={`${prefix}-img-container`}>
          <img src={icon} alt="" className={`${prefix}-icon`} />
        </div>
      </div>
    </div>
  )
}

export default Top;