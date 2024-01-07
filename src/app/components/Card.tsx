import Link from 'next/link';
import TagList, { Tag } from './TagList';

type Props = {
  title: string;
  desc: string;
  id?: string;
  tags?: Tag[] | undefined;
  className?: string | undefined;
  uniqueId?: string;
};

export default function Card({
  title,
  desc,
  tags,
  className,
  uniqueId,
  id,
}: Props) {
  return (
    <Link
      href={`/projects?projectId=${id}`}
      className={`flex-1 flex flex-col rounded-lg shadow-card overflow-hidden cursor-pointer ${
        className || ''
      }`}
    >
      <div className="w-full pt-[66.6%] bg-primary"></div>
      <div className="p-5 bg-white flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-lg leading-5 font-bold">{title || '-'}</h3>
          <p className="leading-5 mt-1 text-sm-2">{desc || '-'}</p>
        </div>
        {tags && <TagList tags={tags} uniqueId={uniqueId} className="mt-5" />}
      </div>
    </Link>
  );
}
