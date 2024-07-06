"use client";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { Box } from "@mui/material";
import { cards, list } from "./data";
import { Card } from "@/components/card";
import { List } from "@/components/list";
import { DateRange } from "@/components/date-range";

const Page = () => {
  return (
    <Section className="max-w-screen-lg flex flex-wrap gap-10 pb-10 max-sm:px-4">
      <Title className="text-4xl underline text-green-800">
        Select Your Room
      </Title>
      <Section className="flex justify-center gap-20 max-sm:flex-wrap max-sm:gap-10">
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </Section>
      <Section mainClassName="flex-1 flex-shrink basis-1/2">
        <List
          showIcon
          list={list}
          className="text-sm text-gray-800 flex flex-wrap"
        />
      </Section>
      <Section mainClassName="flex-1 flex-shrink basis-1/3">
        <DateRange />
      </Section>
    </Section>
  );
};

export default Page;
