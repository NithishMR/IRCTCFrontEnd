import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
export default function Discount() {
  return (
    <>
      <div className="Abel">
        <div className="px-6">
          <div className="flex items-center justify-between ">
            <div className="text-3xl">Get Discount Offers</div>
            <div className="text-xl flex gap-2 items-center cursor-pointer">
              See All <MoveRight />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 lg:gap-6 md:grid-cols-1 md:gap-8 sm:grid-cols-1 sm:gap-8 justify-around mt-6">
            <div className="pb-4">
              <img
                src="./Discount50.png"
                alt="50% discount"
                className="rounded-lg"
              />
            </div>
            <div className="pb-4">
              <img
                src="./Discount75.png"
                alt="75% discount"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="mt-32 mb-20">
            <div className="">
              <img
                src="./app.png"
                alt="get app on playstore"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mx-auto">
            <div className="">
              <img
                src="./IRCTCLOGO.png"
                alt="IRCTCLOGO"
                className="w-28 lg:w-64 md:w-52 sm:w-36"
              />
            </div>
            <div className="w-[60%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              voluptates autem ipsam iure eligendi, cupiditate dicta! Corporis
              velit quas nesciunt itaque! Fugiat exercitationem inventore nemo
              eveniet culpa maiores distinctio iusto?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
