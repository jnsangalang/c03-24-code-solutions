type Props = {
  onClick: () => void;
};
export function NextButton({ onClick }: Props) {
  return <button onClick={onClick}>Next</button>;
}
