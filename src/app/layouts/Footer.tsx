import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="h-[50px] flex items-center justify-center bg-footer-bg-color">
      <p className="text-t5 text-xs">
        Copyright &copy; Suyeon Kim. All rights reserved.
      </p>
    </footer>
  );
}
