import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'

const Home = () => {

  const SignInLinkStyle = {
    color: '#0077ff',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '10px',
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title='Welcome to Codershouse!' icon='logo'>
        <p className={styles.text}>
          We are working hard to get Codershouse ready for everyone! While
          we wrap up the finishing youches, we are adding people gradually
          to make sure nothing breaks
        </p>
        <div>
          <Link to="/register">
            <Button text='Get Your username' icon='arrow-forward' />
          </Link>
        </div>
        <div className={styles.signinwrappper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link to="./login" style={SignInLinkStyle}>Sign-Up</Link>
        </div>
      </Card>
    </div>
  )
}

export default Home