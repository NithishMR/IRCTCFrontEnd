import { MoveRight } from "lucide-react";
export default function OtherPackage() {
  return (
    <>
      <div className="mt-32 mb-28 Abel">
        <div className="mx-6 ">
          <div className="text-5xl text-center">Other Packages</div>
          <div className="text-center text-xl text-gray-400 mt-2 mb-10">
            Explore our exclusive packages designed to enhance your travel
            Journey
          </div>
          <div className="flex items-center justify-end mb-4">
            <div className="text-xl flex gap-2 items-center cursor-pointer">
              See All <MoveRight />
            </div>
          </div>
        </div>
        <div className="w-[95%] mx-auto">
          <div className="hidden lg:grid grid-cols-2 gap-6 justify-around">
            <div className="relative group">
              <img src="./temple.webp" alt="temple" className="rounded-lg" />
              <div className=" rounded-lg absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white text-lg font-thin opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-center">
                <p className="font-bold text-xl">Tirupati Dharshan</p>
                <p>
                  Book your Tirupati Dharshan effortlessly and experience divine
                  blessings with convenience
                </p>
              </div>
            </div>

            {/* Taj Mahal */}
            <div className="relative group">
              <img src="./tajmahal.webp" alt="tajahal" className="rounded-lg" />
              <div className="rounded-lg absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white text-lg font-thin opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-center">
                <p className="font-bold text-xl">Taj Mahal</p>
                <p>
                  Experience a seamless journey to Taj Mahal with our convenient
                  and affordable prices
                </p>
              </div>
            </div>

            {/* Domestic Flight Tickets */}
            <div className="relative group">
              <img src="./flight.webp" alt="temple" className="rounded-lg" />
              <div className="rounded-lg absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white text-lg font-thin opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-center">
                <p className="font-bold text-xl">Domestic Flight Tickets</p>
                <p>
                  Book affordable domestic flight tickets for hassle-free travel
                  across India
                </p>
              </div>
            </div>

            {/* Railway Tour Packages */}
            <div className="relative group">
              <img src="./trainTop.webp" alt="train1" className="rounded-lg" />
              <div className="rounded-lg absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white text-lg font-thin opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-center">
                <p className="font-bold text-xl">Railway Tour Packages</p>
                <p>
                  IRCTC offers exclusive rail tour packages with confirmed train
                  tickets, sightseeing, etc.
                </p>
              </div>
            </div>
          </div>
          <div className=" lg:hidden md:grid sm:grid md:grid-cols-2 sm:grid-cols-1 sm:gap-y-3 md:gap-6 justify-around">
            <div className="relative group mb-6">
              <img src="./temple.webp" alt="temple" className="rounded-lg" />
              <div className=" rounded-lg absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white text-lg font-thin opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-center">
                <p className="font-bold text-xl">Tirupati Dharshan</p>
                <p>
                  Book your Tirupati Dharshan effortlessly and experience divine
                  blessings with convenience
                </p>
              </div>
            </div>
            {/* Taj Mahal */}
            <div className="relative group mb-6">
              <img src="./tajmahal.webp" alt="tajahal" className="rounded-lg" />
              <div className="rounded-lg absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white text-lg font-thin opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-center">
                <p className="font-bold text-xl">Taj Mahal</p>
                <p>
                  Experience a seamless journey to Taj Mahal with our convenient
                  and affordable prices
                </p>
              </div>
            </div>
            {/* Domestic Flight Tickets */}
            {/* <div className="relative group">
              <img src="./flight.webp" alt="temple" className="rounded-lg" />
              <div className="rounded-lg absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white text-lg font-thin opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-center">
                <p className="font-bold text-xl">Domestic Flight Tickets</p>
                <p>
                  Book affordable domestic flight tickets for hassle-free travel
                  across India
                </p>
              </div>
            </div> */}
            {/* Railway Tour Packages */}
            {/* <div className="relative group">
              <img src="./trainTop.webp" alt="train1" className="rounded-lg" />
              <div className="rounded-lg absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-0 group-hover:bg-opacity-50 text-white text-lg font-thin opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 text-center">
                <p className="font-bold text-xl">Railway Tour Packages</p>
                <p>
                  IRCTC offers exclusive rail tour packages with confirmed train
                  tickets, sightseeing, etc.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
