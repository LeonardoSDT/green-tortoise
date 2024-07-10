import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { list } from "./data";
import { AppCard } from "@/components/app-card";
import { Map } from "@/components/map";

const Page = () => {
  return (
    <Section className="flex flex-col gap-10 max-sm:px-4 main-continer">
      <Title className="max-w-fit text-4xl text-green-700 font-semibold underline underline-offset-8 max-sm:no-underline">
        Our Favorite Galleries and Museums
      </Title>
      <Section className="flex gap-10 h-[800px] pb-10 max-sm:flex-wrap max-sm:h-auto max-lg:gap-2">
        <Section
          className="flex-1 w-full min-h-64"
          mainClassName="flex-1 flex flex-col basis-3/5 flex-shrink max-sm:basis-full"
        >
          <Map />
        </Section>
        <Section
          className="flex flex-col gap-10 py-5"
          mainClassName="flex-1 flex flex-col basis-1/5 flex-shrink h-full overflow-auto"
        >
          {list.map((item, i) => (
            <AppCard key={item.boldInTitle + i} {...item} />
          ))}
        </Section>
      </Section>
    </Section>
  );
};

export default Page;
