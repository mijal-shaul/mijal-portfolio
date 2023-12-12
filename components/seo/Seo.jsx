import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Mijal Shaul - UX/UI Portfolio`}
      </title>
    </Head>
  </>
);

export default Seo;
