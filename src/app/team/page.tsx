import { teamData } from "@/lib/info_helper.server";
import Image from "next/image";

export const metadata = {
  title: "Ciampitti Lab - Team",
  description:
    "Meet the researchers, students and staff behind our digital agriculture projects.",
};

export default function Students() {
  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-lg text-purdue-secondary-gray2 max-w-3xl mx-auto">
            Meet the researchers, scientists, and students working together to
            advance digital agriculture and crop management systems at the
            Ciampitti Lab.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 text-purdue-black">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1"
            >
              <div className="relative w-full aspect-square sm:aspect-[4/5] lg:h-64 bg-purdue-secondary-gray2">
                <Image
                  src={`/pfp/${member.pfp_file_name}`}
                  alt={member.name}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 256px"
                />
              </div>
              <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
                <div className="flex-grow">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <span className="text-lg text-purdue-rush font-medium">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-purdue-secondary-gray2">
                    {member.research_info}
                  </p>
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purdue-rush hover:underline font-heading font-bold mt-4"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    LinkedIn Profile
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
