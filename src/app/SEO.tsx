import Head from "next/head";
import React from "react";

type Props = {
  title: string;
};

const SEO: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>dripslips | {title}</title>
    </Head>
  );
};

export default SEO;
