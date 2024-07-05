"use client";
import { Section } from "@/components/section";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { list } from "./data";
import { AppCard } from "@/components/app-card";
import { Title } from "@/components/title";

const Page = () => {
  return (
    <Section>
      <Title className="ml-8 font-bold text-green-700">
        Useful San Francisco Apps & Websites
      </Title>
      <Section className="flex flex-wrap justify-center gap-5 py-16">
        {list.map((item, i) => (
          <AppCard key={i} {...item} />
        ))}
      </Section>
    </Section>
  );
};

export default Page;
