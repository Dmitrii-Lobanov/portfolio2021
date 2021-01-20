import { Link } from "react-router-dom";

const prefix = 'nav';

function Nav () {
  return (
    <div className={`${prefix}-container`}>
      <Link to='/' className={`${prefix}-logo`}>{`<DL />`}</Link>
      <span className={`${prefix}-items`}>
        <Link to='/' className={`${prefix}-tab`}>Home</Link>
        <Link to='/portfolio' className={`${prefix}-tab`}>Portfolio</Link>
        <Link to='/skills' className={`${prefix}-tab`}>Skills</Link>
        <Link to='/contacts' className={`${prefix}-tab`}>Contacts</Link>
      </span>
    </div>
  )
}

export default Nav;