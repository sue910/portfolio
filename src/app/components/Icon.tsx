import Image from 'next/image';

type Props = {
  name: string;
  size?: number;
  className?: string;
  dir?: string;
  ext?: string;
};

export default function Icon({ name, size, className, dir, ext }: Props) {
  return (
    <Image
      src={`/images/${dir || 'icons'}/${name}.${ext || 'svg'}`}
      width={size || 24}
      height={size || 24}
      alt={name}
      priority
      className={`inline h-auto ${className || ''}`}
    />
  );
}
