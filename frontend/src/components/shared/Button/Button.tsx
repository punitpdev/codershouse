import styles from './Button.module.css'

const Button: React.FC<{ text: string, icon: string }> = ({ text, icon }) => {
  return (
    <button className={styles.button}>
      <span>{text}</span>
      <img className={styles.arrow} src={`/images/${icon}.png`} alt="" />
    </button>
  )
}

export default Button;