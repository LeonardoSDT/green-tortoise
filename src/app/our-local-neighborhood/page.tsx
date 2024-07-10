import { DescriptionList } from "@/components/description-list";
import { Map } from "@/components/map";
import { P } from "@/components/paragraph";
import { Section } from "@/components/section";
import { Title } from "@/components/title";

const Page = () => {
  return (
    <Section
      background
      className="flex gap-10 px-20 py-10 max-sm:flex-wrap max-sm:px-4 main-continer"
    >
      <Section className="flex flex-col gap-5 flex-1">
        <Title className="text-gray-200 max-w-fit">
          Our North Beach Neighborhood
        </Title>
        <P className="text-gray-200">
          {`North Beach is a centrally located area of San Francisco sandwiched
          between Fishermans Wharf and the Financial District. Our Hostel lies
          in one San Francisco's most historic, diverse and unique
          neighborhoods, with many one of a kind landmarks within a short walk.`}
        </P>
        <Section
          className="flex-1 w-full min-h-96"
          mainClassName="flex-1 flex flex-col basis-1/3 flex-shrink"
        >
          <Map />
        </Section>
      </Section>
      <Section className="flex-1">
        <DescriptionList
          className="text-gray-200 font-bold"
          descriptionClass="text-gray-300"
        />
      </Section>
    </Section>
  );
};

export default Page;
