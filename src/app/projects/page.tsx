import Link from 'next/link';
import PortfolioDialog from '../components/projectDIalog';

export default function ProjectList() {
  async function onClose() {
    'use server';
    console.log('close');
  }

  async function onOk() {
    'use server';
    console.log('ok');
  }
  return (
    <div className="h-4000px">
      <h4>포트폴리오</h4>
      <PortfolioDialog title={'모달 테스트'} onClose={onClose} onOk={onOk}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde rem
          tenetur assumenda, accusantium dignissimos aspernatur. Similique
          possimus harum facere odit deserunt minus, impedit excepturi
          accusantium voluptatum velit, reiciendis, veritatis animi.
        </p>
      </PortfolioDialog>
    </div>
  );
}
