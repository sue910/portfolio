'use client';
import { useRouter } from 'next/navigation';
import { PortfolioItemType } from '../utils/getData';
import React, { useRef, useEffect } from 'react';
import Icon from './Icon';
import TagList from './TagList';
import Link from 'next/link';
import ProjectSwiper from './Swiper';

type Props = {
  item: PortfolioItemType | undefined | null;
  onClose?: () => void;
  onOk?: () => void;
};

export default function Dialog({ item, onClose, onOk }: Props) {
  const router = useRouter();
  const dialogRef = useRef<null | HTMLDialogElement>(null);

  useEffect(() => {
    if (item) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [item]);

  const closeDialog = () => {
    dialogRef.current?.close();
    router.push('/projects', { scroll: false });
    if (onClose) onClose();
  };

  const clickOk = () => {
    if (onOk) onOk();
    closeDialog();
  };

  const onBackdropClick = (event: React.MouseEvent<HTMLElement>): void => {
    const rect = dialogRef.current?.getBoundingClientRect();
    if (
      rect &&
      (event.clientY < rect.top ||
        event.clientY > rect.bottom ||
        event.clientX < rect.left ||
        event.clientX > rect.right)
    ) {
      closeDialog();
    }
  };

  const returnShortDate = (date: string): string | undefined => {
    if (date) {
      const arr = date.split('-');
      const year = arr[0].slice(2);
      return year + '.' + arr[1];
    }
  };

  const returnDuration = (start: string, end: string): string | undefined => {
    if (start && end) {
      const startMonth = start.split('-')[1];
      const endMonth = end.split('-')[1];
      const yearGap = Number(end.split('-')[0]) - Number(start.split('-')[0]);
      let result;
      if (yearGap > 0) {
        result = Number(endMonth) + yearGap * 12 - Number(startMonth);
      } else {
        result = Number(endMonth) - Number(startMonth);
      }
      return ` (약 ${result || 1}개월)`;
    }
  };

  const dialog: JSX.Element | null = item ? (
    <dialog ref={dialogRef} className="dialog" onClick={onBackdropClick}>
      <div className="static dialog-contents w-full flex flex-col">
        <button
          onClick={closeDialog}
          className="fixed top-4 right-4 bg-transparent w-[50px] h-[50px] rounded-full overflow-hidden transition-all hover:bg-default-border sm:right-3 sm:top-3"
        >
          <div className="flex items-center justify-center w-full h-full">
            <Icon name="close" />
          </div>
        </button>
        <div className="px-[100px] pt-[80px] pb-[60px] md:p-[60px] sm:p-[20px] sm:pt-[24px]">
          <h3 className="font-bold text-[40px] leading-10 sm:text-2xl sm:leading-8">
            {item.properties.projectName.title[0].plain_text || ''}
          </h3>
          <p className="mt-1.5 font-semibold text-lg leading-6 sm:text-sm-2 sm:leading-5">
            {item.properties.description.rich_text[0].plain_text || ''}
          </p>
          <ul className="mt-6 leading-4">
            <li className="flex flex-row mb-2 sm:mb-1.5">
              <div className="text-sm font-bold text-t4 w-[80px] mr-1 sm:text-xs sm:w-[70px] sm:leading-5">
                유형
              </div>
              <div>
                {item.properties.type.multi_select
                  ? item.properties.type.multi_select.map((itemType) => (
                      <span
                        key={itemType.id}
                        className="item-type font-medium text-t4 text-sm sm:text-[13px]"
                      >
                        {itemType.name || '-'}
                      </span>
                    ))
                  : '-'}
              </div>
            </li>
            {item.properties.client.rich_text[0]?.plain_text ? (
              <li className="flex flex-row mb-2 sm:mb-1.5">
                <div className="text-sm font-bold text-t4 w-[80px] mr-1 sm:text-xs sm:w-[70px] sm:leading-5">
                  클라이언트
                </div>
                <div className="font-medium text-t4 text-sm sm:text-[13px]">
                  {item.properties.client.rich_text[0].plain_text}
                </div>
              </li>
            ) : null}

            <li className="flex flex-row">
              <div className="text-sm font-bold text-t4 w-[80px] mr-1 sm:text-xs sm:w-[70px] sm:leading-5">
                타임라인
              </div>
              <div className="font-medium text-t4 text-sm sm:text-[13px]">
                {returnShortDate(item.properties.timeline.date.start)}-
                {returnShortDate(item.properties.timeline.date.end)}
                {returnDuration(
                  item.properties.timeline.date.start,
                  item.properties.timeline.date.end,
                )}
                {item.properties.isMaintain.checkbox && (
                  <span className="maintain font-medium text-t4 text-sm sm:text-[13px] before:bg-t4">
                    유지보수중
                  </span>
                )}
              </div>
            </li>
          </ul>
          <div className="divider" />
          <h4 className="text-lg leading-6 font-bold text-t4 sm:text-sm-2 sm:leading-5">
            태그
          </h4>
          {item.properties.tags.multi_select && (
            <TagList
              tags={item.properties.tags.multi_select}
              uniqueId={item.properties.ID.id}
              className="mt-4"
            />
          )}
          <div className="divider" />
          {item.properties.works.rich_text[0]?.plain_text ? (
            <>
              <h4 className="text-lg leading-6 font-bold text-t4 sm:text-sm-2 sm:leading-5">
                수행 업무
              </h4>
              <ul className="pt-1">
                {item.properties.works.rich_text[0]?.plain_text
                  .split('\n')
                  .map((str, index) => (
                    <li
                      key={item.properties.works.id + index}
                      className="leading-6 mt-3 sm:text-sm sm:leading-5"
                    >
                      {str}
                    </li>
                  ))}
              </ul>
              <div className="divider" />
            </>
          ) : null}

          <div className="flex flex-row justify-between">
            <h4 className="text-lg leading-6 font-bold text-t4 sm:text-sm-2 sm:leading-5">
              스크린샷
            </h4>
          </div>
          <ProjectSwiper
            projectName={item.properties.projectName.title[0].plain_text || ''}
            uniqueId={
              item.properties.ID.unique_id.prefix +
              '-' +
              item.properties.ID.unique_id.number
            }
          />

          {item.properties.url_1.url ? (
            <>
              <div className="divider" />
              <h4 className="text-lg leading-6 font-bold text-t4 mb-4 sm:text-sm-2 sm:leading-5">
                관련 사이트
              </h4>
              <Link
                target="_blank"
                href={item.properties.url_1.url}
                className="flex flex-col justify-center border border-t5 h-[60px] rounded-sm px-3.5 transition-colors hover:border-primary hover:text-primary sm:h-[50px]"
              >
                <h5 className="font-medium leading-6 sm:text-sm sm:leading-5">
                  {item.properties.url_1_caption.rich_text[0]?.plain_text ||
                    '-'}
                </h5>
                <p className="text-[13px] text-t4 sm:text-xs">
                  {item.properties.url_1.url || '-'}
                </p>
              </Link>
              {item.properties.url_2.url ? (
                <Link
                  target="_blank"
                  href={item.properties.url_2.url}
                  className="mt-2 flex flex-col justify-center border border-t5 h-[60px] rounded-sm px-3.5 transition-colors hover:border-primary hover:text-primary sm:h-[50px]"
                >
                  <h5 className="font-medium leading-6 sm:text-sm sm:leading-5">
                    {item.properties.url_2_caption.rich_text[0]?.plain_text ||
                      '-'}
                  </h5>
                  <p className="text-[13px] text-t4 sm:text-xs">
                    {item.properties.url_2.url || '-'}
                  </p>
                </Link>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    </dialog>
  ) : null;

  return dialog;
}
