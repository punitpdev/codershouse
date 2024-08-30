import styles from './Card.module.css'

const Card: React.FC<{ title: string; icon: string, children: React.ReactNode }> = ({ title, icon, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
        <img src={`/images/${icon}.png`} alt="" />
        <h1 className={styles.heading} >{title}</h1>
      </div>
      {children}
    </div>
  )
}

export default Card