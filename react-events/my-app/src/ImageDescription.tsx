type Props = {
  imageDescrip: string;
  index: number;
};

export function ImageDescription({ imageDescrip }: Props) {
  return (
    <div>
      <p>{imageDescrip}</p>
    </div>
  );
}
