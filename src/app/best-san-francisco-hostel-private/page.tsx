"use client";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { cards, list } from "./data";
import { Card } from "@/components/card";
import { DateRange } from "@/components/date-range";
import { P } from "@/components/paragraph";

const Page = () => {
  return (
    <Section className="max-w-screen-lg flex flex-wrap gap-10 pb-10 max-sm:px-4 main-continer">
      <Title className="text-4xl underline text-green-800 max-w-fit">
        Choose Your Private Room
      </Title>
      <Section className="flex flex-wrap justify-center gap-10">
        {cards.map((card, i) => (
          <Card key={i} {...card} className="flex-1 flex-shrink basis-1/3" />
        ))}
        <Section
          className="flex flex-col gap-4"
          mainClassName="flex-1 flex-shrink basis-1/3 pt-7"
        >
          <Title className="text-green-700 font-semibold">
            How to Make a Reservation
          </Title>
          <DateRange />
          <P>
            Check Availability here to start making a reservation. A Credit Card
            is requested for authorization only, Payment for your stay will be
            taken upon your arrival. We hold a 48 hour cancellation policy.
            Please Inform us of your change in plans within 48 hours of Check in
            time.
          </P>
        </Section>
      </Section>
    </Section>
  );
};

export default Page;
