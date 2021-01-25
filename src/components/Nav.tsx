import { NavLink } from "react-router-dom";

const prefix = 'nav';

const Nav: React.FC = (): JSX.Element => {
  return (
    <div className={`${prefix}-container`}>
      <NavLink to='/' className={`${prefix}-logo`}>{`<DL />`}</NavLink>
      <span className={`${prefix}-items`}>
        <NavLink to='/' className={`${prefix}-tab`} activeClassName={`${prefix}-active`}>Home</NavLink>
        <NavLink to='/portfolio' className={`${prefix}-tab`} activeClassName={`${prefix}-active`}>Portfolio</NavLink>
        <NavLink to='/skills' className={`${prefix}-tab`} activeClassName={`${prefix}-active`}>Skills</NavLink>
        <NavLink to='blog' className={`${prefix}-tab`} activeClassName={`${prefix}-active`}>Blog</NavLink>
        <NavLink to='/contacts' className={`${prefix}-tab`} activeClassName={`${prefix}-active`}>Contacts</NavLink>
      </span>
    </div>
  )
}

export default Nav;