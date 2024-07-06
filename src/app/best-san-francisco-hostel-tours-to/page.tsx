import { AppCard } from "@/components/app-card";
import { ListWhitIcons } from "@/components/list-whit-icons";
import { Section } from "@/components/section";
import { Slider } from "@/components/slider";
import { Title } from "@/components/title";
import { list, data } from "./data";
import { ButtonLink } from "@/components/button-link";

const Page = () => {
  return (
    <Section className="flex flex-wrap gap-10 pb-10 max-">
      <Title className="max-w-full text-5xl font-semibold flex-1 flex-shrink-1 basis-4/5 max-2xl:px-4">
        Green Tortoise Adventure Travel
      </Title>
      <Section mainClassName="flex-1 basis-3/5">
        <Slider showMiniatures />
      </Section>
      <Section mainClassName="flex-1 basis-1/5 max-sm:basis-full max-sm:px-4">
        <ListWhitIcons
          list={data}
          clasNameList="gap-y-5 gap-x-10  max-sm:flex-col max-sm:gap-y-10"
          description="Our a la carte style of travel attracts people of all ages and from all over the world.  The special, comfortable coaches lend to socializing and relaxing on the way to unbelievable natural wonders.  Go camping and trekking through America’s National Parks on a wilderness adventure that won’t soon be forgotten.  Come explore with us!"
        />
        <ButtonLink
          className="block w-fit py-2 px-5 mt-10 rounded-md text-green-800 hover:bg-green-800 hover:text-gray-200"
          link="san-francisco-hostel-neighborhood"
          label="Book Your Next Camping Adventure"
          showIcon
        />
      </Section>
      <Section
        className="flex justify-center flex-wrap gap-10 px-20 max-sm:px-4"
        mainClassName="flex flex-1 basis-1/ max-sm:px-43"
      >
        {list.map((item, i) => (
          <AppCard key={i} {...item} />
        ))}
      </Section>
    </Section>
  );
};

export default Page;
