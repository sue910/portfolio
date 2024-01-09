'use client';
import { useEffect, useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { portfolioImageLength } from '../constant';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Icon from './Icon';
import Image from 'next/image';

type Props = {
  projectName: string;
  uniqueId: string;
};
export default function ProjectSwiper({ projectName, uniqueId }: Props) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [imgUrlList, setImgUrlList] = useState<string[]>([]);

  useEffect(() => {
    let temp = [];
    if (uniqueId && portfolioImageLength[uniqueId]) {
      for (let i = 1; i <= portfolioImageLength[uniqueId]; i++) {
        const imgUrl = `/images/portfolios/${uniqueId}/0${i}.jpg`;
        temp.push(imgUrl);
      }
      setImgUrlList(temp);
    } else {
      setImgUrlList([]);
    }
    return () => setImgUrlList([]);
  }, [uniqueId]);

  const openImageWindow = (index: number) => {
    window.open(`/images/portfolios/${uniqueId}/origin/0${index + 1}.jpg`);
  };

  return (
    <div className="relative pt-6">
      <Swiper
        cssMode={true}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        spaceBetween={24}
        pagination={{
          enabled: true,
          clickable: true,
        }}
        breakpoints={{
          1072: {
            autoHeight: true,
          },
        }}
        preventClicks={false}
        touchStartPreventDefault={false}
        allowTouchMove={true}
        modules={[Navigation, Pagination]}
        className="por-swiper pb-10 sm:pb-3"
      >
        {imgUrlList.map((imgUrl, index) => (
          <SwiperSlide key={uniqueId + '_' + index}>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                onClick={() => openImageWindow(index)}
                sizes="100vw"
                width={0}
                height={0}
                priority={index === 0}
                className="w-auto h-full border-default-border rounded-sm cursor-zoom-in md:h-auto md:w-auto md:max-h-[400px] sm:h-auto sm:w-auto sm:max-h-[360px]"
                src={imgUrl}
                loading={index === 0 ? 'eager' : 'lazy'}
                onLoad={(e) => (e.target as Element).classList.add('border')}
                alt={projectName + index}
              />
              <div className="swiper-lazy-preloader" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute right-0 -top-8 flex flex-row gap-4 z-10">
        <button
          ref={prevRef}
          className="flex items-center justify-center transition-all w-[40px] h-[40px] rounded-full hover:bg-default-border"
        >
          <Icon name="prev" />
        </button>
        <button
          ref={nextRef}
          className="flex items-center justify-center transition-all w-[40px] h-[40px] rounded-full hover:bg-default-border"
        >
          <Icon name="next" />
        </button>
      </div>
    </div>
  );
}
