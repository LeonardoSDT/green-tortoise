import { ButtonLink } from "@/components/button-link";
import { List } from "@/components/list";
import { P } from "@/components/paragraph";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { list } from "./data";
import { Slider } from "@/components/slider";

const Page = () => {
  return (
    <Section
      background
      className="flex flex-wrap justify-between gap-10 max-sm:px-4"
      mainClassName="py-10"
    >
      <Section className="flex flex-wrap justify-between max-sm:gap-5">
        <Title className="text-5xl max-w-[400px] merienda flex-1 basis-1/3 text-gray-200 max-sm:basis-full">
          Social San Francisco Events Every Night!
        </Title>
        <P className="flex-1 basis-1/3 text-sm leading-6 text-gray-200">
          Our San Francisco hostel has no shortage of activities, Pub Crawls and
          Social meetups here that will help you get to know some fellow
          travelers, while experiencing the local flavor at the same time! For
          some of our nightly events, we head out and mingle with Locals,
          Students, Au Pairs, and International Travelers from around San
          Francisco!
        </P>
      </Section>
      <Section className="flex gap-10 max-sm:flex-wrap">
        <Section
          className="flex flex-wrap gap-5"
          mainClassName="flex-1 basis-1/3 flex-shrink-1 max-sm:basis-full"
        >
          <ButtonLink
            label="Register here"
            link="https://www.sfhostelparty.com/"
            className="block w-fit bg-green-800 text-gray-200 px-8 py-2 border-4 border-green-500 hover:bg-transparent hover:border-transparent"
          />
          {
            <List
              list={list}
              className="text-white flex-col text-x"
              listItemClass="max-w-none border-t-2 items-start px-0"
              titleClass="text-lg font-semibold max-w-none"
              descriptionClass="text-sm"
            />
          }
        </Section>
        <Section mainClassName="flex-1 basis-2/3 flex-shrink-1 max-sm:basis-full">
          <Slider showMiniatures />
        </Section>
      </Section>
    </Section>
  );
};

export default Page;
