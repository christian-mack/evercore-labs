import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    image: "/team/john-smith.svg",
    linkedIn: "#",
    description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    image: "/team/jane-doe.svg",
    linkedIn: "#",
    description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    image: "/team/michael-brown.svg",
    linkedIn: "#",
    description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    image: "/team/emily-johnson.svg",
    linkedIn: "#",
    description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    image: "/team/brian-williams.svg",
    linkedIn: "#",
    description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    image: "/team/sarah-kim.svg",
    linkedIn: "#",
    description: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
  }
]

function LinkedInIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#1D1D1D"/>
      <path d="M12.6667 21.3333H10V13.3333H12.6667V21.3333ZM11.3333 12.1667C10.6 12.1667 10 11.5667 10 10.8333C10 10.1 10.6 9.5 11.3333 9.5C12.0667 9.5 12.6667 10.1 12.6667 10.8333C12.6667 11.5667 12.0667 12.1667 11.3333 12.1667ZM22 21.3333H19.3333V17.0833C19.3333 15.5833 18.6667 15.0833 17.8333 15.0833C17 15.0833 16.1667 15.8333 16.1667 17.1667V21.3333H13.5V13.3333H16.0833V14.5C16.3333 14 17.3 13 18.7 13C20.2667 13 21.9167 13.9167 21.9167 16.75V21.3333H22Z" fill="white"/>
    </svg>
  )
}

export function Team() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-8 mb-12">
        <div className="bg-[#B9FF66] px-6 py-2 rounded-[3rem]">
          <h2 className="text-3xl font-medium">Team</h2>
        </div>
        <p className="text-xl max-w-[40%]">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div 
            key={member.name}
            className="relative p-8 rounded-[2rem] border border-black"
            style={{ borderBottom: '5px solid black' }}
          >
            <Link 
              href={member.linkedIn}
              className="absolute top-8 right-8"
            >
              <LinkedInIcon />
            </Link>

            <div className="flex items-end gap-6 mb-6">
              <div className="relative w-24 h-24 flex-shrink-0">
                <div className="absolute inset-0 bg-[#B9FF66] rounded-full transform rotate-45" />
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div 
                    className="absolute inset-0 bg-[#B9FF66] mix-blend-color"
                  />
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-medium">{member.name}</h3>
                <p className="text-lg text-gray-600">{member.role}</p>
              </div>
            </div>

            <div className="h-px bg-black mb-6" />
            <p className="text-lg">{member.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <button className="bg-[#1D1D1D] text-white px-8 py-4 rounded-full text-lg">
          See all team
        </button>
      </div>
    </section>
  )
} 