export type Tag = {
  id: string;
  name: string;
  color: string;
};
type Props = {
  tags: Tag[] | undefined;
  uniqueId: string | undefined;
  className?: string;
  isShowAll?: boolean | undefined;
};

export default function TagList({
  tags,
  uniqueId,
  className,
  isShowAll,
}: Props) {
  return (
    <div
      className={`relative flex w-full gap-1 ${
        isShowAll ? 'flex-wrap' : 'whitespace-nowrap overflow-hidden'
      } ${className || ''}`}
    >
      {tags &&
        tags.map((tag, index) => (
          <span
            key={uniqueId + '_' + index}
            className="inline-block flex-none h-6 leading-6 px-[10px] rounded-sm text-t2 text-[13px] font-semibold bg-tag
            md:px-2 md:h-5 md:text-xs md:leading-5 sm:h-5 sm:px-2 sm:text-xs sm:leading-5"
          >
            {tag.name || ''}
          </span>
        ))}
      {isShowAll ? null : (
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-white-tp" />
      )}
    </div>
  );
}
