const StepName: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div>StepName
      <button onClick={onNext}>Next</button>

    </div>
  )
}


export default StepName;