import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const asyncToGetServerSideProps =
  <T>(
    op: (ctx: GetServerSidePropsContext) => Promise<T>
  ): GetServerSideProps<T> =>
  async (ctx) => {
    return {
      props: await op(ctx),
    };
  };
