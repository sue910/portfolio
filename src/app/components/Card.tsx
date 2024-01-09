import Link from 'next/link';
import TagList, { Tag } from './TagList';
import Image from 'next/image';

type Props = {
  title: string;
  desc: string;
  uniqueId: string;
  id?: string;
  tags?: Tag[] | undefined;
  className?: string | undefined;
  isScroll?: boolean | undefined;
};

export default function Card({
  title,
  desc,
  tags,
  className,
  uniqueId,
  id,
  isScroll,
}: Props) {
  const imgUrl = `/images/portfolios/${uniqueId}/01.jpg`;

  return (
    <Link
      href={`/projects?projectId=${id}`}
      scroll={isScroll || false}
      className={`group flex-1 flex flex-col rounded-lg shadow-card overflow-hidden cursor-pointer ${
        className || ''
      }`}
    >
      <div
        className="relative w-full pt-[66.6%] overflow-hidden
        after:block after:absolute after:z-10 after:top-0 after:bg-gradient-thumb after:left-0 after:w-full after:h-full after:contents-[''] "
      >
        <Image
          className="scale-100 group-hover:scale-110 transition-all duration-300 origin-center absolute w-full h-full left-0 top-0 object-cover"
          fill
          sizes="100%"
          src={imgUrl}
          loading="lazy"
          alt={uniqueId}
        />
      </div>
      <div className="p-5 bg-white flex-1 flex flex-col md:p-4 sm:p-4 sm:pt-3">
        <div className="flex-1">
          <h3 className="text-lg leading-5 font-bold md:text-base sm:text-base">
            {title || '-'}
          </h3>
          <p className="leading-5 mt-1 text-sm md:leading-4 sm:leading-4 md:mt-0.5 sm:mt-0.5">
            {desc || '-'}
          </p>
        </div>
        {tags && (
          <TagList tags={tags} uniqueId={uniqueId} className="mt-5 sm:mt-4" />
        )}
      </div>
    </Link>
  );
}
