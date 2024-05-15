type Props = {
  click: string;
  number: number;
};

export function ClickCount({ click, number }: Props) {
  return (
    <div>
      <p>
        {click} {number}
      </p>
    </div>
  );
}
