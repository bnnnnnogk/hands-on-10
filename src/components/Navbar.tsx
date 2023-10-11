import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <header className={styles.header__navbar}>
      <Link to="/">
        <div className={styles.container__logo}>
          <img
            className={styles.logo__img}
            src="https://learnhub.thanayut.in.th/logo.svg"
            alt="LearnHub logo"
          />
          <span>LearnHub</span>
        </div>
      </Link>
      <nav className={styles.container__navbar}>
        <Link to="/">Login</Link>
        <Link to="/">Register</Link>
      </nav>
    </header>
  )
}

export default Navbar
