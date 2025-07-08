import Image from "next/image";

export default function OurTeam() {
  return (
    <div className="container my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 gap-y-6">
        <div className="flex justify-center">
          <div className="relative h-[320px] flex-1 border-4 border-white rounded-xl overflow-hidden bg-gray-200">
            <Image
              src="/images/placeholder-image.webp"
              alt="about"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* TEXT ON RIGHT */}
        <div className="text-center md:text-right">
          <h2 className="font-bold text-3xl mb-2 text-neutral-700">
            What We Offer
          </h2>
          <p className="text-gray-600 mb-4">
            We are a digital job marketplace designed to connect top talent with
            great companies. Whether you&apos;re seeking a new opportunity or
            hiring the best, we make the process efficient, smart, and human.
          </p>
        </div>
      </div>
    </div>
  );
}
