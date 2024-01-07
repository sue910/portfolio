import Link from 'next/link';
import PortfolioDialog from '../components/projectDIalog';
import { getData, PortfolioItemType } from '../utils/getData';
import Card from '../components/Card';

export default async function ProjectList() {
  const list = await getData();

  async function onClose() {
    'use server';
  }

  async function onOk() {
    'use server';
  }

  return (
    <article className="w-full flex flex-col items-center">
      <div className="container flex flex-col text-t1 pt-[60px] pb-[180px]">
        <h2 className="flex flex-row items-center mb-[60px]">
          <div className="font-bold text-4xl leading-10 mr-[20px]">
            작업한 프로젝트들
          </div>
          <span className="text-t5 font-semibold text-sm-2 leading-4">
            2023 - 2020
          </span>
        </h2>

        <div className="w-full grid gap-x-5 gap-y-10 grid-cols-3">
          {list.map((item: PortfolioItemType) => {
            const portfolio = item.properties;
            return (
              <Card
                key={
                  portfolio.ID.unique_id.prefix + portfolio.ID.unique_id.number
                }
                id={item.id}
                title={portfolio.projectName.title[0].plain_text || ''}
                desc={portfolio.description.rich_text[0].plain_text || ''}
                tags={portfolio.tags.multi_select}
                uniqueId={portfolio.ID.unique_id.number}
              />
            );
          })}
        </div>
        <PortfolioDialog list={list} />
      </div>
    </article>
  );
}
