import { useRouter } from "next/dist/client/router";
import React from "react";
import { getDeployments } from "../../../../../../api/client";
import { asyncToGetServerSideProps } from "../../../../../../api/ssr";


const SingleDeployment = () => {
  const { query } = useRouter();

  return <div>{JSON.stringify(query)}</div>;
};

export default SingleDeployment;
