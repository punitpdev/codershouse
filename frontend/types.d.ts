type StepProps = {
  onNext: () => void;
};

export type StepsType = {
  [key: number]: React.ComponentType<StepProps>;
};
