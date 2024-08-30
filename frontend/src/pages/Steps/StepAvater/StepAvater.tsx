
const StepAvater: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div>StepAvater
      <button onClick={onNext}>Next</button>

    </div>
  )
}

export default StepAvater