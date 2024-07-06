"use client";
import { Gallery } from "@/components/gallery";
import { Map } from "@/components/map";
import { P } from "@/components/paragraph";
import { Section } from "@/components/section";
import { Title } from "@/components/title";

const Page = () => {
  return (
    <Section className="flex flex-wrap gap-10 px-12 pb-12 max-sm:px-4">
      <Section mainClassName="flex-1 basis-1/5">
        <Title className="text-4xl font-semibold text-green-700">
          San Francisco
        </Title>
        <Title className="text-4xl font-semibold text-green-700">
          Destinations in Every Direction.
        </Title>
      </Section>
      <Section mainClassName="flex-1 basis-3/5" className="flex flex-col gap-5">
        <P className="text-sm max-w-fit">
          {`You'll find the the Green Tortoise Hostel will be conveniently
          situated amongst all of San Francisco's most exciting attractions. Be
          sure to ask the Front Desk any questions about public transportation,
          If it isn't walking distance. We have plenty of maps and informational
          posters in our lobby to peruse before you head off on your adventures.`}
        </P>
        <P className="text-sm max-w-fit">
          {`Click on the Links Below for Directions to these locations from our
          hostel. Feel free to save the pictures to your smartphones or print
          them in advance if you prefer.`}
        </P>
      </Section>
      <Section
        mainClassName="flex flex-col flex-1 basis-1/3 min-h-[600px] max-sm:basis-full max-sm:min-h-72"
        className="flex-1 h-full w-full"
      >
        <Map />
      </Section>
      <Section mainClassName="flex-1 basis-1/3 max-h-[600px] overflow-auto">
        <Gallery />
      </Section>
    </Section>
  );
};

export default Page;
