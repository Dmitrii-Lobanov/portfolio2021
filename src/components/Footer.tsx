import { contacts } from '../assets/data';

const prefix = 'footer';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={`${prefix}-container`}>
      <div className={`${prefix}-icons`}>
        <contacts.phone.icon onClick={() => window.open(`tel:${contacts.phone.number}`)} className={`${prefix}-icon`} />
        <contacts.email.icon onClick={() => window.open(`mailto:${contacts.email.address}`)} className={`${prefix}-icon`} />
        <contacts.linkedIn.icon onClick={() => window.open(contacts.linkedIn.address)} className={`${prefix}-icon`} />
        <contacts.codepen.icon onClick={() => window.open(contacts.codepen.address)} className={`${prefix}-icon`} />
        <contacts.github.icon onClick={() => window.open(contacts.github.address)} className={`${prefix}-icon`} />
      </div>
      <div className={`${prefix}-copyright`}>2021 &copy; Dmitrii Lobanov. All rights reserved.</div>
    </footer>
  )
}

export default Footer;