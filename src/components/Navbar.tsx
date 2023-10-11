import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <div>
          <img
            src="https://learnhub.thanayut.in.th/logo.svg"
            alt="LearnHub logo"
          />
          <span>LearnHub</span>
        </div>
      </Link>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/">Register</Link>
      </nav>
    </header>
  )
}

export default Navbar
