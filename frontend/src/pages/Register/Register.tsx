import { useState } from 'react'
import StepAvater from '../Steps/StepAvater/StepAvater'
import StepName from '../Steps/StepName/StepName'
import StepOtp from '../Steps/StepOtp/StepOtp'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepUsername from '../Steps/StepUsername/StepUsername'
import { StepsType } from '../../../types'
// import styles from '/Register.module.css'


const steps: StepsType = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvater,
  5: StepUsername
}

function Register() {

  const [step, setStep] = useState<number>(1);
  const Step = steps[step];

  const onNext = () => {
    if (step === 5) {
      console.log('Form submitted successfully!');
      return;
    }

    setStep(step + 1);
  }

  return (
    <div>
      <Step onNext={onNext} />
    </div>
  )
}

export default Register