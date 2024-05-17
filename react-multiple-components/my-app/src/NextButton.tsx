type Props = {
  onClick: () => void;
};
export function NextButton({ onClick }: Props) {
  return (
    <div>
      <button onClick={onClick}>Next</button>
    </div>
  );
}
