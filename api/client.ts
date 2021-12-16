import Axios from "axios";
import { Deployment, InResponse, TeamLimited } from "./types";

const client = Axios.create({
  baseURL: "https://api.vercel.com",
  headers: {
    Authorization: `Bearer ${process.env.VERCEL_AUTH_TOKEN}`,
  },
});

const buildUrl = (
  path: string,
  params?: Record<"teamId" | (string & {}), string>
) => {
  if (params.teamId === MAGIC_NO_TEAMS_FOUND) delete params.teamId;
  const searchParams = new URLSearchParams(params);
  return `${path}${searchParams.toString()}`;
};

export const getTeams = async () => {
  const { data } = await client.get<InResponse<"teams", TeamLimited[]>>(
    buildUrl("/v2/teams")
  );

  return data;
};

export const getDeployments = async (teamId: string) => {
  const { data } = await client.get<InResponse<"teams", Deployment[]>>(
    buildUrl("/v6/deployments", { teamId })
  );
  return data;
};
