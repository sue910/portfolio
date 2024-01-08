import Image from 'next/image';
import Link from 'next/link';
import Icon from './components/Icon';
import Card from './components/Card';
import { getData, PortfolioItemType } from './utils/getData';
import { kakaoUrl } from './constant';

type SkillName = {
  [key: string]: string;
};

const SKILL_NAMES: SkillName = {
  ai: 'Illustrator',
  draw: 'Drawing',
  figma: 'Figma',
  git: 'Git/Github',
  html: 'HTML5',
  jira: 'Jira',
  js: 'Javascript',
  next: 'NextJs',
  notion: 'Notion',
  ps: 'Photoshop',
  react: 'ReactJs',
  'react-native': 'React Native',
  sass: 'Sass',
  slack: 'Slack',
  ts: 'Typescript',
  tail: 'Tailwind CSS',
  zeplin: 'Zeplin',
};

export default async function Home() {
  const list = await getData(true);

  const skillItem = (key: string, isFlex?: boolean) => {
    return (
      <li
        className={`text-lg leading-6 font-semibold text-t2 md:text-base sm:text-sm ${
          isFlex ? 'flex-1' : ''
        }`}
      >
        <Icon name={`logo-${key}`} dir="logos" className="mr-4" />
        {SKILL_NAMES[key]}
      </li>
    );
  };

  return (
    <article className="w-full flex flex-col items-center">
      <div className="container flex flex-col items-center text-t1">
        <section className="relative flex flex-col max-w-wrap w-full bg-gradient-primary h-[430px] rounded mb-[160px] md:mb-[120px] sm:mb-[100px] px-[70px] py-[60px] md:p-12 md:h-[360px] sm:h-auto sm:p-8 sm:pt-7 sm:justify-center sm:items-center">
          <div className="absolute animate-move-slow left-0 bottom-20 w-[122px] h-[123px] sm:bottom-auto sm:top-[120px] sm:w-[75px] sm:h-[76px] sm:left-[5%]">
            <Image
              className="w-auto h-auto"
              src="/images/main/blured-sphere.png"
              alt="blured-sphere"
              fill
              priority={true}
              quality={100}
            />
          </div>
          <Image
            className="absolute bottom-[70px] right-[324px] md:bottom-[50px] md:right-[240px] sm:hidden"
            src="/images/main/sphere.png"
            alt="sphere"
            width={40}
            height={40}
            priority={true}
            quality={100}
          />
          <div
            className="absolute flex-none -right-8 top-1/2 -translate-y-1/2 w-[440px] h-[369px]
           md:w-[368px] md:h-[309px] sm:static sm:translate-y-0 sm:w-[215px] sm:h-[178px] sm:mb-8"
          >
            <Image
              className="w-auto h-auto"
              src="/images/main/computer.png"
              alt="computer"
              fill
              sizes="100vw"
              priority={true}
              quality={100}
            />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between sm:justify-center sm:items-center">
            <h2 className="text-white font-bold text-5xl leading-tight md:text-4xl md:leading-[42px] sm:text-[28px] sm:leading-9">
              <p className="overflow-hidden h-[60px] md:h-[42px] sm:h-9 sm:text-center">
                <span className="inline-block animate-to-up-1 translate-y-[60px] md:translate-y-[42px] sm:translate-y-9">
                  웹 디자이너,
                </span>
              </p>
              <p className="overflow-hidden h-[60px] md:h-[42px] sm:h-9 sm:text-center">
                <span className="inline-block animate-to-up-2 translate-y-[60px] md:translate-y-[42px] sm:translate-y-9">
                  프론트엔드 개발자
                </span>
              </p>
              <p className="overflow-hidden h-[60px] md:h-[42px] sm:h-9 sm:text-center">
                <span className="inline-block animate-grow origin-top-left scale-x-0">
                  ―――
                </span>
                <span className="inline-block animate-to-up-3 translate-y-[60px] md:translate-y-[42px] sm:translate-y-9">
                  &nbsp;김수연 입니다.
                </span>
              </p>
            </h2>

            <Link
              href={kakaoUrl}
              target="_blank"
              className="black-btn h-[70px] w-[240px] text-lg transition-all md:w-[200px] md:h-[60px] md:text-base sm:h-[50px] sm:w-[180px] sm:text-sm-2 sm:mt-8"
            >
              연락하기
              <Icon name="papar-plane" className="ml-2" />
            </Link>
          </div>
          <Image
            className="absolute animate-move left-1/2 -bottom-6 -translate-x-1/2 h-auto md:left-[40%] sm:left-auto sm:right-[8%] sm:translate-x-0"
            src="/images/main/spring.png"
            alt="spring"
            width={93.6}
            height={0}
            priority={true}
            quality={100}
          />
        </section>
        <section className="flex flex-col items-center w-full">
          <h2 className="text-center mb-[60px] md:mb-[50px] sm:mb-[40px]">
            <span className="text-primary font-semibold text-header-sm leading-4 md:text-sm sm:text-xs">
              Projects
            </span>
            <div className="font-bold text-4xl leading-10 mt-3 md:text-3xl md:leading-8 sm:text-2xl sm:leading-7 sm:mt-1">
              작업한 프로젝트들
            </div>
          </h2>
          <div className="w-full flex flex-row gap-5 md:gap-4 sm:gap-4 sm:flex-col">
            {list.map((item: PortfolioItemType) => {
              const portfolio = item.properties;
              return (
                <Card
                  key={portfolio.ID.id}
                  id={item.id}
                  uniqueId={
                    portfolio.ID.unique_id.prefix +
                    '-' +
                    portfolio.ID.unique_id.number
                  }
                  title={portfolio.projectName.title[0].plain_text || ''}
                  desc={portfolio.description.rich_text[0].plain_text || ''}
                />
              );
            })}
          </div>
          <Link
            className="border-btn h-[70px] w-[240px] text-lg transition-all mt-[60px] md:w-[200px] md:h-[60px] md:text-base md:mt-[50px] sm:w-[180px] sm:h-[50px] sm:text-sm-2 sm:mt-[40px]"
            href={`/projects`}
          >
            프로젝트 더보기
          </Link>
        </section>
        <section className="pt-[200px] pb-[120px] w-full flex flex-row items-center justify-center md:pt-[160px] md:pb-[120px] sm:pt-[120px] sm:pb-[80px] sm:flex-col">
          <div className="relative mr-[120px] md:mr-[80px] sm:mr-0">
            <div className="w-[372px] h-[267px] md:w-[300px] md:h-[215px] sm:w-[250px] sm:h-[180px] sm:-ml-5">
              <Image
                className="w-full h-auto"
                src="/images/main/holding-paper-plane.png"
                alt="holding-paper-plane"
                fill
                sizes="100vw"
                priority={true}
                quality={100}
              />
            </div>
          </div>
          <div className="sm:w-full sm:flex sm:flex-col sm:items-center sm:justify-center">
            <h2 className="mb-6 sm:text-center sm:mt-[40px]">
              <span className="text-primary font-semibold text-header-sm leading-4 md:text-sm sm:text-xs">
                About Me
              </span>
              <div className="font-bold text-4xl leading-10 mt-3 md:text-3xl md:leading-8 sm:text-2xl sm:leading-7 sm:mt-1">
                반갑습니다!
              </div>
            </h2>
            <p className="font-semibold text-lg leading-7 mb-10 md:text-base sm:text-sm sm:text-center sm:leading-6">
              작은 디테일도 놓치지 않고 프로젝트의 완성도를 높이는
              <br />
              프론트엔드 개발자/웹 디자이너 김수연 입니다.
            </p>
            <ul>
              <li
                className="relative pl-6  pb-7
            before:absolute before:z-10 before:block before:left-0 before:top-1 before:content-[''] before:mr-4 before:w-2 before:h-2 before:rounded before:bg-t1
            after:absolute after:block after:left-[3px] after:top-1 after:content-[''] after:w-px after:h-full after:bg-dots
            "
              >
                <p className="font-bold leading-[18px] mb-2 md:text-sm-2 sm:text-sm md:mb-1 sm:mb-1">
                  주식회사 린코(Linco) 근무
                </p>
                <span className="text-t4 font-medium text-[13px] md:text-xs sm:text-xs">
                  2020.07 - 2023.08
                </span>
                <ul className="mt-3">
                  <li className="text-sm font-medium text-t2 leading-4 mb-1 sm:text-xs">
                    React 기반 웹/앱 프론트엔드 개발
                  </li>
                  <li className="text-sm font-medium text-t2 leading-4 sm:text-xs">
                    자체 서비스 및 외주 프로젝트 웹/앱 디자인
                  </li>
                </ul>
              </li>
              <li
                className="relative pl-6
            before:absolute before:z-10 before:block before:left-0 before:top-1 before:content-[''] before:mr-4 before:w-2 before:h-2 before:rounded before:bg-t1
            after:absolute after:block after:left-[3px] after:top-1 after:content-[''] after:w-px after:h-full after:bg-dots
            "
              >
                <p className="font-bold leading-[18px] mb-2 md:text-sm-2 sm:text-sm md:mb-1 sm:mb-1">
                  건국대학교 산업디자인과 졸업
                </p>
                <span className="text-t4 font-medium text-[13px] md:text-xs sm:text-xs">
                  2014.02
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section className="w-full flex flex-col items-center pt-[120px] pb-[180px] bg-light-gray md:pt-[80px] md:pb-[120px] sm:pt-[60px] sm:pb-[80px]">
        <div className="container">
          <h2 className="mb-6 md:mb-4">
            <span className="text-primary font-semibold text-header-sm leading-4 md:text-sm sm:text-xs">
              Skills &amp; Tools
            </span>
            <div className="font-bold text-4xl leading-10 mt-3 md:text-3xl md:leading-8 sm:text-2xl sm:leading-7 sm:mt-1">
              기술과 도구
            </div>
          </h2>
          <div className="flex flex-row flex-wrap pt-[60px] md:pt-[40px] sm:pt-[24px] sm:flex-col">
            <div className="flex-1">
              <h3 className="font-bold text-t5 pb-6 md:text-sm sm:text-xs">
                프론트엔드
              </h3>
              <ul className="grid gap-x-6 gap-y-6 grid-cols-2">
                {skillItem('react')}
                {skillItem('react-native')}
                {skillItem('next')}
                {skillItem('ts')}
                {skillItem('js')}
                {skillItem('html')}
                {skillItem('sass')}
                {skillItem('tail')}
              </ul>
            </div>
            <div className="flex-none w-px bg-default-border mx-[50px] sm:hidden" />
            <div className="flex-1 sm:pt-[48px]">
              <h3 className="font-bold text-t5 pb-6 md:text-sm sm:text-xs">
                디자인
              </h3>
              <ul className="grid gap-x-6 gap-y-6 grid-cols-2">
                {skillItem('figma')}
                {skillItem('zeplin')}
                {skillItem('ps')}
                {skillItem('ai')}
                {skillItem('draw')}
              </ul>
            </div>
            <div className="flex-[100%] h-px bg-default-border my-[40px] sm:hidden" />
            <div className="flex-[100%] sm:pt-[48px]">
              <h3 className="font-bold text-t5 pb-6 md:text-sm sm:text-xs">
                커뮤니케이션 툴
              </h3>
              <ul className="flex flex-row gap-x-6 gap-y-6 sm:flex-none sm:grid sm:grid-cols-2">
                {skillItem('git', true)}
                {skillItem('slack', true)}
                {skillItem('jira', true)}
                {skillItem('notion', true)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
