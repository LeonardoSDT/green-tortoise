import Image from "next/image";
import { Section } from "@/components/section";
import { Slider } from "@/components/slider";
import { Cards } from "@/components/card/cards-data";
import { Card } from "@/components/card";
import ProGallery from "@/components/gallery";

export default function Home() {
  return (
    <main>
      <Slider />
      <Section className="flex justify-center gap-20">
        {Cards.map((card) => (
          <Card {...card} />
        ))}
      </Section>
      <Section
        background
        title="Social Events every Night, and A Grand Ballroom for some Downtime!"
      >
        <ProGallery />
      </Section>
      <Section
        title="A Social San Francisco Hostel Filled with surprising Amenities and Activities!"
        description={[
          "The Green Tortoise San Francisco offers a variety of room types to fit your needs while in San Francisco on a budget. Each of our dorms and guest-rooms offers modern amenities like complimentary breakfast, cheap social events, fast WiFi, and a giant ballroom common space. We have a kitchen open 23 hours a day as well as free luggage storage on your check in and check out day.  Wether you are a solo Backpacker, a couple on a getaway or a group adventuring through California, this is the place for you.",
          "The San Francisco Bay is calling your name! There will be no lack of San Francisco Magic felt during your time in Northern California at the Green Tortoise Hostel. This city is a hub of excitement, famous for its Lively Music, Seafood to Table dining, and so much more. A true beautiful symphony of cultures working in one place. From riding around on cable cards and to exploring green gardens –This Unique City by the bay has plenty to offer. We hope you find what is makes you happy at this San Fran Hostel.",
        ]}
        className="flex flex-col items-center text-center"
      />
    </main>
  );
}
