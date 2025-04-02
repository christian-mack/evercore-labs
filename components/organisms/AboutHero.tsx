import Image from "next/image";

export function AboutHero() {
  return (
    <section className="container mx-auto px-4 mt-20 mb-20">
      <div className="bg-[#F3F3F3] rounded-[45px]">
        <div className="py-16 px-16 flex items-start justify-between gap-24">
          <div className="relative w-1/2">
            <Image
              src="/illustrations/trophy.svg"
              alt="Trophy illustration"
              width={564}
              height={470}
              className="w-full h-[470px] object-contain"
            />
            <div className="absolute top-8 left-8">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0L19.1265 12.8735L32 16L19.1265 19.1265L16 32L12.8735 19.1265L0 16L12.8735 12.8735L16 0Z" fill="#B9FF66"/>
              </svg>
            </div>
            <div className="absolute bottom-8 right-8">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0L19.1265 12.8735L32 16L19.1265 19.1265L16 32L12.8735 19.1265L0 16L12.8735 12.8735L16 0Z" fill="#B9FF66"/>
              </svg>
            </div>
          </div>
          
          <div className="w-1/2 pt-4">
            <h1 className="text-7xl font-medium leading-tight mb-16">Together for<br />Success</h1>
            <p className="text-xl text-gray-600">
              At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 