import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import styles from "./FullPages.module.css"

const FullPages = () => {
  return (
    <div className={styles.container__page}>
      <Navbar />
      <div className={styles.container__outlet}>
        <Outlet />
      </div>
    </div>
  )
}

export default FullPages
