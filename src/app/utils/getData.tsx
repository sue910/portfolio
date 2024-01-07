import { Tag } from '../components/TagList';
import { DATABASE_ID, TOKEN } from '../config/notion';
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: TOKEN });
export async function getData(isMain: boolean = false) {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
  });
  let list = response.results;
  if (isMain) {
    list = list?.filter(
      (item: PortfolioItemType) =>
        item.properties.order.number > 1 && item.properties.order.number < 5,
    );
  }
  list =
    list?.sort((a: PortfolioItemType, b: PortfolioItemType) => {
      if (a.properties.order.number < b.properties.order.number) {
        return -1;
      } else if (a.properties.order.number > b.properties.order.number) {
        return 1;
      } else {
        return 0;
      }
    }) || [];
  return list;
}

type strObj = { [key: string]: string };

export type PortfolioItemType = {
  id: string;
  properties: {
    type: { multi_select: strObj[] };
    client: { rich_text: strObj[] };
    timeline: { date: strObj };
    isMaintain: { checkbox: boolean };
    tags: { multi_select: Tag[] };
    ID: { id: string };
    works: { id: string; rich_text: strObj[] };
    [key: string]: any;
  };
};
