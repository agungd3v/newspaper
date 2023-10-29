import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const rts = useRouter();

  return (
    <>
      <div className="flex items-start justify-between px-10 pt-5">
        <div className="flex items-center gap-2.5">
          <Image src={"/images/globe-orange.svg"} width={16} height={16} alt="globe" />
          <span className="text-sm select-none">Thursday, February 25, 2021</span>
        </div>
        <Link href={"/"}>
          <Image src={"/images/logo.png"} width={165} height={44} alt="logo" />
        </Link>
        <div className="flex items-center gap-6">
          <button type="button">
            <Image src={"/images/search.svg"} width={28} height={28} alt="search icon" />
          </button>
          <Link href={"#"} className="text-sm font-semibold">Sign in</Link>
          <button type="button" className="text-sm py-2.5 px-7 rounded-full bg-[#FF5C00] text-white font-semibold">Subscribe</button>
        </div>
      </div>
      <div className="px-10 pt-5 sticky top-0">
        <div className="border-b flex justify-center items-center">
          <div className={`px-4 h-10 border-b-2 ${rts.asPath == "/" ? "border-[#FF5C00]" : "border-transparent"}`}>
            <Link href={"/"} className="font-semibold text-sm">Home</Link>
          </div>
          <div className={`px-4 h-10 border-b-2 ${rts.asPath == "/capital-market" ? "border-[#FF5C00]" : "border-transparent"}`}>
            <Link href={"/capital-market"} className="font-semibold text-sm">Capital Market</Link>
          </div>
          <div className={`px-4 h-10 border-b-2 ${rts.asPath == "/world-economy" ? "border-[#FF5C00]" : "border-transparent"}`}>
            <Link href={"/world-economy"} className="font-semibold text-sm">World Economy</Link>
          </div>
          <div className={`px-4 h-10 border-b-2 ${rts.asPath == "/opinion" ? "border-[#FF5C00]" : "border-transparent"}`}>
            <Link href={"/opinion"} className="font-semibold text-sm">Opinion</Link>
          </div>
          <div className={`px-4 h-10 border-b-2 ${rts.asPath == "/finance" ? "border-[#FF5C00]" : "border-transparent"}`}>
            <Link href={"/finance"} className="font-semibold text-sm">Finance</Link>
          </div>
          <div className={`px-4 h-10 border-b-2 ${rts.asPath == "/companies" ? "border-[#FF5C00]" : "border-transparent"}`}>
            <Link href={"/companies"} className="font-semibold text-sm">Companies</Link>
          </div>
          <div className={`px-4 h-10 border-b-2 ${rts.asPath == "/environment" ? "border-[#FF5C00]" : "border-transparent"}`}>
            <Link href={"/environment"} className="font-semibold text-sm">Environment</Link>
          </div>
          <div className={`px-4 h-10 border-b-2 ${rts.asPath == "/sport-economy" ? "border-[#FF5C00]" : "border-transparent"}`}>
            <Link href={"/sport-economy"} className="font-semibold text-sm">Sport Economy</Link>
          </div>
          <div className={`px-4 h-10 border-b-2 ${rts.asPath == "/blog" ? "border-[#FF5C00]" : "border-transparent"}`}>
            <Link href={"/blog"} className="font-semibold text-sm">Blog</Link>
          </div>
          <div className={`px-4 h-10 border-b-2 ${rts.asPath == "/podcats" ? "border-[#FF5C00]" : "border-transparent"}`}>
            <Link href={"/podcats"} className="font-semibold text-sm">Podcats</Link>
          </div>
          <div className={`px-4 h-10 border-b-2 ${rts.asPath == "/video" ? "border-[#FF5C00]" : "border-transparent"}`}>
            <Link href={"/video"} className="font-semibold text-sm">Video</Link>
          </div>
        </div>
      </div>
    </>
  );
}