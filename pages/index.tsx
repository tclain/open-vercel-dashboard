import React, { useEffect } from "react";

import NLink from "next/link";
import { Flex, VStack, Heading, Link } from "@chakra-ui/react";
import { asyncToGetServerSideProps } from "../api/ssr";
import { getTeams } from "../api/client";
import { InferGetServerSidePropsType } from "next";
import { TeamLimited } from "../api/types";
import { useRouter } from "next/dist/client/router";
import fromPairs from "lodash/fromPairs";

export const getServerSideProps = asyncToGetServerSideProps(async () => {
  const teams = await getTeams();
  const noTeams = teams.pagination.length === 0;

  const response = teams.teams.map((team) => [team.name, { team }]);
});

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export const useTeamSelector = (teams: TeamLimited[]) => {
  const noTeams = teams.length === 0;
  const router = useRouter();
  useEffect(() => {
    if (noTeams) {
      router.replace("/teams/___");
    }
  }, [teams]);
};

const TeamSelector: React.FC<Props> = ({ teams }) => {
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
