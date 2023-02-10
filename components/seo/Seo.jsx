import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Junaid Malik`}
      </title>
    </Head>
  </>
);

export default Seo;
