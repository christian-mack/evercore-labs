import Image from "next/image";

interface CoreValuesProps {
  titleText?: string;
  subtitleStart?: string;
  subtitleEnd?: string;
}

export function CoreValues({ 
  titleText = "Core Values",
  subtitleStart = "At the heart of everything we do",
  subtitleEnd = "are our core values:"
}: CoreValuesProps) {
  return (
    <section className="container mx-auto px-4 my-28">
      <div className="flex items-center gap-4 mb-16">
        <div className="bg-[#B9FF66] px-4 py-2 rounded-md">
          <h2 className="text-3xl font-medium">{titleText}</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-xl">{subtitleStart}</p>
          <p className="text-xl">{subtitleEnd}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Client Success First */}
        <div className="bg-white rounded-[45px] p-12 border border-black border-b-[5px]">
          <h3 className="text-3xl font-medium mb-10">Client Success First</h3>
          <div className="w-full h-0.5 bg-black my-10" />
          <p className="text-xl text-gray-600">
            We are dedicated to achieving measurable results for our clients. Each strategy is tailored to meet unique business goals and drive long-term success.
          </p>
        </div>

        {/* Innovation */}
        <div className="bg-white rounded-[45px] p-12 border border-black border-b-[5px]">
          <div className="flex justify-between items-start gap-8">
            <div className="flex-[0.55]">
              <h3 className="text-3xl font-medium">Innovation</h3>
              <div className="w-full h-0.5 bg-black my-10" />
              <p className="text-xl text-gray-600">
                We constantly strive to stay ahead of industry trends.
              </p>
            </div>
            <div className="flex-[0.45] relative aspect-square">
              <Image
                src="/illustrations/innovation.svg"
                alt="Innovation illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Collaboration */}
        <div className="bg-white rounded-[45px] p-12 border border-black border-b-[5px]">
          <div className="flex justify-between items-start gap-8">
            <div className="flex-[0.55]">
              <h3 className="text-3xl font-medium">Collaboration</h3>
              <div className="w-full h-0.5 bg-black my-10" />
              <p className="text-xl text-gray-600">
                We believe in the power of teamwork and partnership.
              </p>
            </div>
            <div className="flex-[0.45] relative aspect-square">
              <Image
                src="/illustrations/collaboration.svg"
                alt="Collaboration illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Transparency */}
        <div className="bg-white rounded-[45px] p-12 border border-black border-b-[5px]">
          <h3 className="text-3xl font-medium mb-10">Transparency</h3>
          <div className="w-full h-0.5 bg-black my-10" />
          <p className="text-xl text-gray-600">
            Open and honest communication is key to our success. We keep our clients informed every step of the way to ensure trust and clarity.
          </p>
        </div>
      </div>
    </section>
  );
} 