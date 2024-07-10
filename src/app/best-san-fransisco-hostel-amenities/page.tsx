"use client";
import { Banner } from "@/components/banner";
import { Section } from "@/components/section";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { banner, list } from "./data";
import { ListWhitIcons } from "@/components/list-whit-icons";
import { Slider } from "@/components/slider";

const Page = () => {
  const path = usePathname();
  return (
    <main className="main-continer">
      <Banner {...banner} />
      <Section className="py-10 px-20">
        <ListWhitIcons
          clasNameList="gap-x-12 gap-y-10"
          titleClass="text-green-900 font-semibold"
          list={list}
        />
      </Section>
      <Section background className="py-20">
        <Slider showMiniatures />
      </Section>
    </main>
  );
};

export default Page;
