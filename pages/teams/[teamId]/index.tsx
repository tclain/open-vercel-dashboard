import { Flex, Heading, Link, VStack } from "@chakra-ui/layout";
import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { useTeamSelector } from "../..";
import { getDeployments } from "../../../api/client";
import { asyncToGetServerSideProps } from "../../../api/ssr";
import { Deployment } from "../../../api/types";

export const getServerSideProps = asyncToGetServerSideProps((ctx) =>
  getDeployments((ctx.query.teamId as string) ?? "")
);

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const ProjetsList: React.FC<Props> = ({ teams }) => {
  useTeamSelector(teams);
  return (
    <Flex>
      <VStack>
        <Heading>Open Vercel Dashboard</Heading>
        <VStack>
          {teams.map((team) => {
            return (
              <Link as={NLink} href={`/teams/${team.id}`}>
                {team.name}
              </Link>
            );
          })}
        </VStack>
      </VStack>
    </Flex>
  );
};

export default TeamSelector;

export default AllDeployementsView;
