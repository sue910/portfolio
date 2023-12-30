import Image from 'next/image';

type Props = {
  name: string;
  size?: number;
  className?: string;
};

export default function Icon({ name, size, className }: Props) {
  return (
    <Image
      src={`/images/icons/${name}.svg`}
      width={size || 24}
      height={size || 24}
      alt={name}
      className={`inline ${className}`}
    />
  );
}
