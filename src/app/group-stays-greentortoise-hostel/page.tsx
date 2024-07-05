"use client";
import { GetInTouch } from "@/components/get-in-touch";
import { P } from "@/components/paragraph";
import { Section } from "@/components/section";
import { Title } from "@/components/title";
import { Box } from "@mui/material";
import Image from "next/image";

const Page = () => {
  return (
    <Section className="flex pb-10 px-10 gap-16">
      <Section className="flex flex-col gap-5" mainClassName="flex-1 basis-1/3">
        <Title className="text-5xl font-semibold max-w-fit text-green-800">
          Bring the Whole Crew
        </Title>
        <Box className="border-4 border-green-800 w-fit">
          <Image
            src={
              "https://static.wixstatic.com/media/a4f49d_baf60032310a415b9e0362d1de7fa1c2~mv2.png/v1/fill/w_371,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SFH_ballroompeople.png"
            }
            alt="image"
            width={370}
            height={240}
          />
        </Box>
        <Title className="font-semibold max-w-fit text-green-600">
          Bring the Whole Crew
        </Title>
        <P>
          {`We have accommodated no shortage of large groups here at the Green
          Tortoise And we hope you consider us for your adventure to San
          Francisco. Our Common space we call "The Ballroom" will allow for
          those meetings to go smoothly and comfortably, while our large
          selection dorm options and private rooms can keep everybody rested and
          happy during your travels.`}
        </P>
      </Section>
      <Section mainClassName="flex-1 basis-1/2">
        <GetInTouch />
      </Section>
    </Section>
  );
};

export default Page;
