export type Tag = {
  id: string;
  name: string;
  color: string;
};
type Props = {
  tags: Tag[] | undefined;
  uniqueId: string | undefined;
  className?: string;
};

export default function TagList({ tags, uniqueId, className }: Props) {
  return (
    <div
      className={`relative flex w-full whitespace-nowrap overflow-hidden ${
        className || ''
      }`}
    >
      {tags &&
        tags.map((tag, index) => (
          <span
            key={uniqueId + '_' + index}
            className="inline-block h-6 leading-6 px-[10px] rounded-sm text-t2 text-[13px] font-semibold bg-tag mr-1"
          >
            {tag.name || ''}
          </span>
        ))}
      <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-white-tp" />
    </div>
  );
}
