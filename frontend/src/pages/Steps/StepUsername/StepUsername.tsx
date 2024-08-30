
const StepUsername: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div>StepUsername
      <button onClick={onNext}>Next</button>
    </div>
  )
}

export default StepUsername