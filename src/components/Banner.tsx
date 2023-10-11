import styles from "./Banner.module.css"

const Banner = () => {
  return (
    <section className={styles.container__banner}>
      <h1 className={styles.main__title}>LearnHub</h1>
      <h2 className={styles.sub__title}>Hub for Educational Videos</h2>
    </section>
  )
}

export default Banner
