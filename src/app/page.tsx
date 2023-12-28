import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      home
      <Link href={"/portfolios?showDialog=y"}>포트폴리오</Link>
    </div>
  );
}
