import { useState } from "react";
import StepOtp from "../Steps/StepOtp/StepOtp"
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail"
import { StepsType } from "../../../types"

const steps: StepsType = {
  1: StepPhoneEmail,
  2: StepOtp,
}

const Login = () => {

  const [step, setStep] = useState<number>(1);
  const Step = steps[step];

  const onNext = () => {
    if (step === 2) {
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

export default Login