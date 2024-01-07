'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { PortfolioItemType } from '../utils/getData';
import React, {
  useState,
  useRef,
  useEffect,
  JSXElementConstructor,
} from 'react';

type Props = {
  list: PortfolioItemType[];
  onClose?: () => void;
  onOk?: () => void;
  children?: React.ReactNode;
};

export default function ProjectDialog({ list, onClose, onOk }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const projectId = searchParams.get('projectId') || undefined;
  const [item, setItem] = useState<PortfolioItemType | undefined | null>(null);

  useEffect(() => {
    if (projectId) {
      dialogRef.current?.showModal();
      const showItem = list.find((item) => item.id === projectId);
      setItem(showItem);
    } else {
      dialogRef.current?.close();
    }
  }, [projectId]);

  const closeDialog = () => {
    dialogRef.current?.close();
    router.push('/projects');
    if (onClose) onClose();
  };

  const clickOk = () => {
    if (onOk) onOk();
    closeDialog();
  };

  console.log(item);
  const dialog: JSX.Element | null = item ? (
    <dialog
      ref={dialogRef}
      className="fixed w-[900px] top-[100px] left-1/2 -translate-x-1/2 z-modal rounded backdrop:bg-gray-800/50 backdrop-blur-md"
    >
      <div className="w-[500px] max-w-fullbg-gray-200 flex flex-col">
        <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400">
          <h2 className="text-2xl">Title</h2>
          <button
            onClick={closeDialog}
            className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
          >
            X
          </button>
        </div>
        <div className="px-5 pb-6">
          <p>{item.id || ''}</p>
          <div className="flex flex-row justify-end"></div>
          <button className="bg-green-400 p-1 rounded" onClick={clickOk}>
            OK
          </button>
        </div>
      </div>
    </dialog>
  ) : null;

  return dialog;
}
