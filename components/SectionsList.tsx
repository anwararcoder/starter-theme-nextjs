"use client";

import { getSections } from "@/apis/api";
import { Section } from "@/types/sectionsTypes";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const SectionsList = () => {
  const { data, isLoading, isError, error } = useQuery<{
    success: boolean;
    message: string | null;
    data: Section[];
  }>({
    queryKey: ["sections"],
    queryFn: getSections,
  });

  if (isLoading) {
    return <div>Loading sections...</div>;
  }

  if (isError) {
    throw new Error(error.message);
  }

  if (!data?.success || !data.data.length) {
    return <div>No sections found</div>;
  }

  return (
    <div className="space-y-4">
      {data.data.map((section) => (
        <div
          key={section.id}
          className="rounded-md border p-4"
          style={{
            backgroundColor: section.background_color ?? "transparent",
          }}
        >
          <h3 className="font-semibold">{section.name}</h3>

          <div className="text-sm">
            <span>Type: {section.type}</span>
            {section.section_style && (
              <span> • Style: {section.section_style}</span>
            )}
          </div>

          {section.image && (
            <div className="relative mt-2 h-32 w-full overflow-hidden rounded">
              <Image
                src={section.image}
                alt={section.name}
                fill
                className="object-cover"
                priority
                quality={75}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionsList;
