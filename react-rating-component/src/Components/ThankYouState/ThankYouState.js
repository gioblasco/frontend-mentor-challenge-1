import {ReactComponent as ThankYouIllustration} from '../../Assets/illustration-thank-you.svg';
import styles from './ThankYouState.module.sass';

function ThankYouState(props) {
    return (
      <div className={styles.container}>
            <ThankYouIllustration />

            <div className={styles.badge}>
              <span>You selected {props.rate} out of 5</span>
            </div>
            

            <h2 className='title'>Thank you!</h2>

            <div className={`subtitle ${styles.subtitle}`}>We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</div>
      </div>
    );
  }
  
  export default ThankYouState;