type Props = {
  imageCap: string;
  index: number;
};

export function ImageCaption({ imageCap }: Props) {
  return (
    <div>
      <h3>{imageCap}</h3>
    </div>
  );
}
