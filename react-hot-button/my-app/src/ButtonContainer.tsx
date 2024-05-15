import './ButtonContainer.css';
type Props = {
  buttonText: string;
  onButtonClick: () => void;
  className: string;
};

export function ButtonContainer({
  buttonText,
  onButtonClick,
  className,
}: Props) {
  return (
    <div>
      <button className={className} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
}
