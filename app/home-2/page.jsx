// import { useTranslations } from "next-intl";

import { getSections } from "@/apis/api";
import MainLayout from "@/components/common/MainLayout";
import SectionsList from "@/components/SectionsList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

// export default function HomePage() {
//   const t = useTranslations("HomePage");
//   return <h1>{t("title")}</h1>;
// }

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["sections"],
    queryFn: getSections,
  });

  return (
    <MainLayout>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SectionsList />
      </HydrationBoundary>
    </MainLayout>
  );
}
