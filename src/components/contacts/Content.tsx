import { contacts } from '../../assets/data';

const prefix = 'contacts';

const Content: React.FC = ():JSX.Element => {
  return (
    <div className={`${prefix}-container`}>
      <div className="item">
        <div onClick={() => window.open(`tel:${contacts.phone.number}`)} className={`${prefix}-item-title`}>
          <contacts.phone.icon className={`${prefix}-icon`} />
          <span className={`${prefix}-tag`}>PHONE</span>
        </div>
        <div className={`${prefix}-text`}>Send me a message</div>
      </div>
      <div className="item">
        <div onClick={() => window.open(`mailto:${contacts.email.address}`)} className={`${prefix}-item-title`}>
          <contacts.email.icon className={`${prefix}-icon`} />
          <span className={`${prefix}-tag`}>EMAIL</span>
        </div>
        <div className={`${prefix}-text`}>You can write me anytime</div>
      </div>
      <div className="item">
        <div onClick={() => window.open(contacts.linkedIn.address)} className={`${prefix}-item-title`}>
          <contacts.linkedIn.icon className={`${prefix}-icon`} />
          <span className={`${prefix}-tag`}>LINKEDIN</span>
        </div>
        <div className={`${prefix}-text`}>Let's connect on LinkedIn</div>
      </div>
      <div className="item">
        <div onClick={() => window.open(contacts.codepen.address)} className={`${prefix}-item-title`}>
          <contacts.codepen.icon className={`${prefix}-icon`} />
          <span className={`${prefix}-tag`}>CODEPEN</span>
        </div>
        <div className={`${prefix}-text`}>You can see some of my projects there</div>
      </div>
      <div className="item">
        <div onClick={() => window.open(contacts.github.address)} className={`${prefix}-item-title`}>
          <contacts.github.icon className={`${prefix}-icon`} />
          <span className={`${prefix}-tag`}>GITHUB</span>
        </div>
        <div className={`${prefix}-text`}>Follow my open-source projects</div>
      </div>
    </div>
  )
}

export default Content;