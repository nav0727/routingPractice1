import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="con">
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="img1"
      />
      <p className="wave">Wave</p>
    </div>
    <ul className="contain">
      <li className="list">
        <Link style={{textDecoration: 'none'}} to="/">
          Home
        </Link>
      </li>

      <li className="list">
        <Link style={{textDecoration: 'none'}} to="/about">
          About
        </Link>
      </li>

      <li className="list">
        <Link style={{textDecoration: 'none'}} to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
