import Image from "next/image";
import Link from "next/link";

export function JoinTeam() {
  return (
    <section className="container mx-auto px-4 mt-[140px] mb-[140px]">
      <div className="bg-[#B9FF66] rounded-[45px] px-16 py-20 flex justify-between items-center border-t border-l border-r border-black border-solid border-b-[5px]">
        <div className="max-w-[600px]">
          <h2 className="text-[30px] font-medium mb-[30px]">Join Our Team</h2>
          <p className="text-lg mb-8">
            At Positivus, we thrive on innovation and collaboration. We're always looking for passionate individuals to join our team and help businesses grow. Ready to make an impact?
          </p>
          <Link 
            href="/careers" 
            className="inline-flex px-12 py-4 bg-[#1D1D1D] text-white rounded-2xl hover:bg-black transition-colors"
          >
            Explore Careers
          </Link>
        </div>

        <div className="relative w-[400px] h-[300px]">
          <Image
            src="/illustrations/join-our-team.svg"
            alt="Join our team illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
} 