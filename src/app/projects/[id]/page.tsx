'use client';
import { useParams } from 'next/navigation';

export default function ProjectItem() {
  const { id } = useParams();
  return <div>projectItem {id}</div>;
}
