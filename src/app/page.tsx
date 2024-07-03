import { Section } from "@/components/section";
import { Slider } from "@/components/slider";
import { Cards } from "@/components/card/cards-data";
import { Card } from "@/components/card";
import ProGallery from "@/components/gallery";
import { ListWhitIcons } from "@/components/list-whit-icons";
import { Box, List, ListItem } from "@mui/material";
import { Title } from "@/components/title";
import { P } from "@/components/paragraph";
import { DescriptionList } from "@/components/description-list";

export default function Home() {
  return (
    <main>
      <Slider showDetail />
      <Section className="flex justify-center gap-20 p-10">
        {Cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </Section>
      <Section background className="flex flex-col gap-10 p-10">
        <Title>
          Social Events every Night, and A Grand Ballroom for some Downtime!
        </Title>
        <Slider showMiniatures />
      </Section>
      <Section className="flex flex-col items-center gap-8 text-center p-10">
        <Title className="text-green-900">
          A Social San Francisco Hostel Filled with surprising Amenities and
          Activities!
        </Title>
        <P>
          The Green Tortoise San Francisco offers a variety of room types to fit
          your needs while in San Francisco on a budget. Each of our dorms and
          guest-rooms offers modern amenities like complimentary breakfast,
          cheap social events, fast WiFi, and a giant ballroom common space. We
          have a kitchen open 23 hours a day as well as free luggage storage on
          your check in and check out day. Wether you are a solo Backpacker, a
          couple on a getaway or a group adventuring through California, this is
          the place for you.
        </P>
        <P>
          The San Francisco Bay is calling your name! There will be no lack of
          San Francisco Magic felt during your time in Northern California at
          the Green Tortoise Hostel. This city is a hub of excitement, famous
          for its Lively Music, Seafood to Table dining, and so much more. A
          true beautiful symphony of cultures working in one place. From riding
          around on cable cards and to exploring green gardens –This Unique City
          by the bay has plenty to offer. We hope you find what is makes you
          happy at this San Fran Hostel.
        </P>
      </Section>
      <Section background className="p-10 flex flex-wrap gap-x-16 gap-y-10">
        <ListWhitIcons
          className="flex-1 basis-1/3"
          title="Unique Amenities to Keep You Comfortable"
          description="At our SF hostel, we want to make your stay as easy as possible. Take advantage of the free amenities meant to relieve the stress of visiting a new city. We have some unique ones here at the Green Tortoise Like our Free Sauna and Weekly dinners so don't forget to take advantage."
        />
        <Section
          mainClassName="flex-1 basis-1/3"
          className="flex flex-col gap-5"
        >
          <Title className="text-gray-200">Amazing Attractions Close By</Title>
          <P className="text-gray-200 max-w-[450px]">
            {`We are within 15 min walking distance to some of San Francisco Must
            see attractions like Fishermans Wharf, Chinatown, and Coit Tower.
            With our centrally located location and the Bay Area's famous public
            transportation you'll find your way to everything else easily!`}
          </P>
          <List
            className="text-gray-200 flex flex-wrap"
            sx={{
              li: {
                position: "relative",
                overflow: "visible",
                flex: "1 1 50%",
              },
              "li:before": {
                position: "absolute",
                content: '""',
                width: "8px",
                height: "8px",
                backgroundColor: "white",
                left: "0",
                borderRadius: "50%",
              },
            }}
          >
            <ListItem>Golden Gate Bridge</ListItem>
            <ListItem>Fishermans Wharf</ListItem>
            <ListItem>Alcatraz Terminal</ListItem>
            <ListItem>Golden Gate Park</ListItem>
            <ListItem>Castro</ListItem>
            <ListItem>Lands End</ListItem>
            <ListItem>Haight St​</ListItem>
            <ListItem>Twin Peaks​</ListItem>
            <ListItem>Coit Tower​</ListItem>
            <ListItem>Baker Beach</ListItem>
          </List>
        </Section>
        <Section className="text-white flex gap-10">
          <Box className="flex-1">
            <Slider showMiniatures />
          </Box>
          <Box className="flex flex-col gap-5 flex-1">
            <Title>Digital Nomads, We Got You Covered!</Title>
            <P className="max-w-[450px]">
              We have just finished renovating our New Digital Nomad Work Space
              for those who wish to focus on getting somethings done during
              there adventures. A 24 hours access space with 4 work stations
              that will keep you checking things off the list as you explore San
              Francisco.
            </P>
          </Box>
        </Section>
      </Section>
      <Section className="p-10 flex flex-wrap gap-x-16 gap-y-10">
        <Section
          className="flex flex-col gap-5"
          mainClassName="flex-1 basis-1/3 flex-shrink"
        >
          <Title className="text-green-900">
            Explore Our North beach Neighborhood
          </Title>
          <P>
            {`North Beach is a centrally located area of San Francisco sandwiched
            between Fishermans Wharf and the Financial District. Our Hostel lies
            in one San Francisco's most historic, diverse and unique
            neighborhoods, with many one of a kind landmarks within a short walk`}
          </P>
        </Section>
        <Section mainClassName="flex-1 basis-1/3 flex-shrink">Map</Section>
        <Section mainClassName="flex-1 basis-1/3 flex-shrink">
          <Slider showMiniatures />
        </Section>
        <Section mainClassName="flex-1 basis-1/3 flex-shrink">
          <DescriptionList />
        </Section>
      </Section>
      <Section background className="flex flex-wrap gap-y-10 p-10">
        <Section
          className="flex flex-col gap-10"
          mainClassName="flex-1 basis-1/3 flex-shrink"
        >
          <Title className="text-gray-200">{`Our Hostel's Origin:`}</Title>
          <Title className="text-gray-200">
            Helping Travelers Explore since 1974
          </Title>
        </Section>
        <Section
          className="flex flex-col gap-6"
          mainClassName="flex-1 basis-1/2 flex-shrink"
        >
          <P className="text-gray-200">
            The World Famous Green Tortoise Adventure Travel began over 40 years
            ago, with one sturdy bus and the realization that beautiful places,
            great food, and sociable people were the only essentials for
            gratifying travel experiences.
          </P>
          <P className="text-gray-200">
            The Green Tortoise hostels in Seattle and San Francisco are built on
            the fine tradition of a social communal experience. We have expanded
            and refined the hostel experience with free internet, free meals,
            private bathrooms, and comforts that make The Green Tortoise
            unique.Be sure to include the Green Tortoise on your Next San
            Francisco hosteling adventure!
          </P>
        </Section>
        <Section>
          <Slider showMiniatures />
        </Section>
      </Section>
    </main>
  );
}
