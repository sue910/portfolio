import Dialog from '../components/Dialog';
import Card from '../components/Card';
import { getData, PortfolioItemType } from '../utils/getData';

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function ProjectList({ searchParams }: Props) {
  const list: PortfolioItemType[] = await getData();
  const projectId = searchParams?.projectId;
  const selectedItem = list.find((item) => item.id === projectId);

  return (
    <article className="w-full flex flex-col items-center">
      <div className="container flex flex-col text-t1 pt-[60px] pb-[180px] md:pt-[40px] md:pb-[120px] sm:pt-[24px] sm:pb-[80px]">
        <h2 className="flex flex-row items-center mb-[60px] md:mb-[40px] sm:mb-[40px]">
          <div className="font-bold text-4xl leading-10 mr-[20px] md:text-3xl md:leading-8 sm:text-2xl sm:leading-7">
            작업한 프로젝트들
          </div>
          <span className="text-t5 font-semibold text-sm-2 leading-4 md:text-sm sm:text-xs">
            2023 - 2020
          </span>
        </h2>

        <div className="w-full grid gap-x-5 gap-y-[60px] grid-cols-3 md:gap-x-4 md:gap-y-[40px] sm:gap-x-4 sm:gap-y-[36px] sm:flex sm:flex-col">
          {list.map((item: PortfolioItemType) => {
            const portfolio = item.properties;
            return (
              <Card
                key={portfolio.ID.id}
                id={item.id}
                title={portfolio.projectName.title[0].plain_text || ''}
                desc={portfolio.description.rich_text[0].plain_text || ''}
                tags={portfolio.tags.multi_select}
                uniqueId={
                  portfolio.ID.unique_id.prefix +
                  '-' +
                  portfolio.ID.unique_id.number
                }
              />
            );
          })}
        </div>
        <Dialog item={selectedItem} />
      </div>
    </article>
  );
}
