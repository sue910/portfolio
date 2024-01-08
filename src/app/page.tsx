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
        className={`text-lg leading-6 font-semibold text-t2 ${
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
        <section className="relative max-w-wrap w-full bg-gradient-primary h-[430px] rounded mb-[160px] px-[70px] py-[60px] md:px-6 sm:px-4">
          <Image
            className="absolute animate-move-slow left-0 bottom-20"
            src="/images/main/blured-sphere.png"
            alt="blured-sphere"
            width={122}
            height={123}
            priority={true}
            quality={100}
          />
          <div className="relative z-10 h-full flex flex-col justify-between ">
            <h2 className="text-white font-bold text-5xl leading-tight md:text-4xl">
              <p className="overflow-hidden h-[60px]">
                <span className="inline-block animate-to-up-1 translate-y-[60px]">
                  웹 디자이너,
                </span>
              </p>
              <p className="overflow-hidden h-[60px]">
                <span className="inline-block animate-to-up-2 translate-y-[60px]">
                  프론트엔드 개발자
                </span>
              </p>
              <p className="overflow-hidden h-[60px]">
                <span className="inline-block animate-grow origin-top-left scale-x-0">
                  ―――
                </span>
                <span className="inline-block animate-to-up-3 translate-y-[60px]">
                  &nbsp;김수연 입니다.
                </span>
              </p>
            </h2>

            <Link
              href={kakaoUrl}
              target="_blank"
              className="black-btn h-[70px] w-[240px] text-lg transition-all"
            >
              연락하기
              <Icon name="papar-plane" className="ml-2" />
            </Link>
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
            className="absolute -right-8 top-1/2 -translate-y-1/2"
            src="/images/main/computer.png"
            alt="computer"
            width={440}
            height={369}
            priority={true}
            quality={100}
          />
          <Image
            className="absolute animate-move left-1/2 -bottom-6 -translate-x-1/2 h-auto"
            src="/images/main/spring.png"
            alt="spring"
            width={93.6}
            height={0}
            priority={true}
            quality={100}
          />
        </section>
        <section className="flex flex-col items-center w-full">
          <h2 className="text-center mb-[60px]">
            <span className="text-primary font-semibold text-header-sm leading-4">
              Projects
            </span>
            <div className="font-bold text-4xl leading-10 mt-3">
              작업한 프로젝트들
            </div>
          </h2>
          <div className="w-full flex flex-row gap-5">
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
            className="border-btn h-[70px] w-[240px] text-lg transition-all mt-[60px]"
            href={`/projects`}
          >
            프로젝트 더보기
          </Link>
        </section>
        <section className="pt-[200px] pb-[160px] w-full flex flex-row items-center justify-center">
          <div className="relative mr-[120px]">
            <Image
              className="h-auto"
              src="/images/main/holding-paper-plane.png"
              alt="holding-paper-plane"
              width={372}
              height={89}
              priority={true}
              quality={100}
            />
          </div>
          <div>
            <h2 className="mb-6">
              <span className="text-primary font-semibold text-header-sm leading-4">
                About Me
              </span>
              <div className="font-bold text-4xl leading-10 mt-3">
                반갑습니다!
              </div>
            </h2>
            <p className="font-semibold text-lg leading-7 mb-10">
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
                <p className="font-bold leading-[18px] mb-2">
                  주식회사 린코(Linco) 근무
                </p>
                <span className="text-t4 font-medium text-[13px]">
                  2020.07 - 2023.08
                </span>
                <ul className="mt-3">
                  <li className="text-sm font-medium text-t2 leading-4 mb-1">
                    React 기반 웹/앱 프론트엔드 개발
                  </li>
                  <li className="text-sm font-medium text-t2 leading-4">
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
                <p className="font-bold leading-[18px] mb-2">
                  건국대학교 산업디자인과 졸업
                </p>
                <span className="text-t4 font-medium text-[13px]">2014.02</span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section className="w-full flex flex-col items-center pt-[120px] pb-[180px] bg-light-gray">
        <div className="container">
          <h2 className="mb-6">
            <span className="text-primary font-semibold text-header-sm leading-4">
              Skills &amp; Tools
            </span>
            <div className="font-bold text-4xl leading-10 mt-3">
              기술과 도구
            </div>
          </h2>
          <div className="flex flex-row flex-wrap pt-[60px]">
            <div className="flex-1">
              <h3 className="font-bold text-t5 pb-6">프론트엔드</h3>
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
            <div className="flex-none w-px bg-default-border mx-[50px]" />
            <div className="flex-1">
              <h3 className="font-bold text-t5 pb-6">디자인</h3>
              <ul className="grid gap-x-6 gap-y-6 grid-cols-2">
                {skillItem('figma')}
                {skillItem('zeplin')}
                {skillItem('ps')}
                {skillItem('ai')}
                {skillItem('draw')}
              </ul>
            </div>
            <div className="flex-[100%] h-px bg-default-border my-[40px]" />
            <div className="flex-[100%]">
              <h3 className="font-bold text-t5 pb-6">커뮤니케이션 툴</h3>
              <ul className="flex flex-row gap-x-6 gap-y-6">
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
