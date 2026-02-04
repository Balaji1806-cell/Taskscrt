import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>Jamda</h2>
      <div className="icons">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  )
}
