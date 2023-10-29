import AppLayout from "@/layouts/AppLayout";
import Image from "next/image";

export default function Home() {
  return (
    <AppLayout>
      <div className="px-10 mt-10 flex items-start gap-5">
        <div className="w-3/4 pr-5 border-r">
          <h2 className="text-lg italic font-bold">Headlines</h2>
          <div className="flex items-start gap-5 mt-3">
            <div className="w-1/3">
              <h3 className="text-[#FF5C00] text-sm font-semibold">World Economy</h3>
              <h1 className="text-3xl mt-2.5 font-bold">Cities have stopped being the engines of growth and opportunity they once were</h1>
              <p className="text-[#5C5955] mt-2.5">The pandemic is dealing prodigious blows to cities across the country. But the world can't hope to thrive again if its cities don't—they're the places that have historically supplied the keys for unlocking human potential. Though beset by racism and other injustices, cities not only provided shared, robust public infrastructure like schools, libraries and transit systems, they stirred together vast numbers of people from different cultures and classes.</p>
            </div>
            <div className="flex-1">
              <div className="mb-1.5 text-[#5C5955] text-sm">17 Agustus 1945</div>
              <Image src={"/images/world-economy.png"} width={670} height={390} className="w-full h-full" alt="world economy" />
            </div>
          </div>
          <div className="h-1 border-b-2 border-t my-5"></div>
          <h3 className="text-[#FF5C00] text-sm font-semibold">Capital Market</h3>
        </div>
        <div className="flex-1">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, in magnam a dolores earum modi cupiditate unde esse distinctio. Repudiandae, in labore consectetur reprehenderit blanditiis sint! Sint veritatis quas veniam, recusandae architecto sequi, placeat porro, quo atque commodi nulla dolor! Asperiores delectus similique est dolor. Quo voluptates voluptate delectus minima?
        </div>
      </div>
    </AppLayout>
  );
}