import { DescriptionList } from "@/components/description-list";
import { Map } from "@/components/map";
import { P } from "@/components/paragraph";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { list } from "./data";
import { ContactCard } from "@/components/contact-card";

const Page = () => {
  return (
    <Section className="flex flex-wrap px-8 gap-10 pb-10">
      <Section
        className="flex flex-col gap-10"
        mainClassName="flex-1 basis-1/5"
      >
        <Title className="text-4xl font-bold text-green-800">
          Our Location
        </Title>
        <P>
          Our location allows for a smooth and eventful visit to San Francisco.
          We are centrally located between historic Chinatown, North Beach
          (Little Italy), and the Financial District. Fisherman’s Wharf and Pier
          39 are a quick walk away and the cable car takes our guests to Union
          Square with ease. Traversing San Francisco is a breeze as our hostel
          sits close to all types of public transportation: Muni, Bart, cable
          cars, and ferries!
        </P>
      </Section>
      <Section
        className="flex-1 min-h-96 w-full"
        mainClassName="flex flex-col flex-1 basis-3/5"
      >
        <Map />
      </Section>
      <Section
        className="flex flex-col gap-10"
        mainClassName="flex-1 basis-1/3"
      >
        <Title className="text-4xl font-bold text-green-800">
          How to Get Here
        </Title>
        <DescriptionList list={list} titleClass="text-2xl text-green-700" />
      </Section>
      <Section
        className="flex flex-col gap-10"
        mainClassName="flex-1 basis-1/3"
      >
        <Title className="text-4xl font-bold text-green-800">
          Get in touch
        </Title>
        <ContactCard className="text-4xl text-green-800" />
      </Section>
    </Section>
  );
};

export default Page;
