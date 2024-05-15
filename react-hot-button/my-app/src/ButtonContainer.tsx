import './ButtonContainer.css';
type Props = {
  buttonText: string;
  onButtonClick: () => void;
};

export function ButtonContainer({ buttonText, onButtonClick }: Props) {
  return (
    <div>
      <button id="button" className="cold" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
}
