import Image from 'next/image';
import Link from 'next/link';
import Icon from './components/Icon';

export default function Home() {
  return (
    <div className="container flex flex-col items-center">
      <div className="relative max-w-wrap w-full bg-gradient-primary h-[430px] rounded mb-[160px] px-[70px] py-[60px] md:px-6 sm:px-4">
        <Image
          className="absolute animate-vertical-slow left-0 bottom-20"
          src="/images/main/blured-sphere.png"
          alt="blured-sphere"
          width={122}
          height={123}
          priority={true}
          quality={100}
        />
        <div className="relative z-10 h-full flex flex-col justify-between ">
          <h2 className="text-white font-bold text-5xl leading-tight">
            웹 디자이너,
            <br />
            프론트엔드 개발자
            <br />
            ――― 김수연 입니다.
          </h2>

          <button className="h-[70px] w-[240px] text-white text-lg bg-t1 font-bold rounded-md transition-all hover:bg-t2">
            연락하기
            <Icon name="papar-plane" className="ml-2" />
          </button>
        </div>
        <Image
          className="absolute bottom-[70px] right-[324px]"
          src="/images/main/sphere.png"
          alt="blured-sphere"
          width={40}
          height={40}
          priority={true}
          quality={100}
        />
        <Image
          className="absolute animate-to-up -right-8 top-1/2 "
          src="/images/main/computer.png"
          alt="computer"
          width={440}
          height={369}
          priority={true}
          quality={100}
        />
        <Image
          className="absolute animate-vertical left-1/2 -bottom-6 -translate-x-1/2"
          src="/images/main/spring.png"
          alt="spring"
          width={93.6}
          height={88}
          priority={true}
          quality={100}
        />
      </div>
    </div>
  );
}
