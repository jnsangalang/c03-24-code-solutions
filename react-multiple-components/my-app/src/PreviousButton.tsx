type Props = {
  onClick: () => void;
};
export function PreviousButton({ onClick }: Props) {
  return <button onClick={onClick}>Prev</button>;
}
