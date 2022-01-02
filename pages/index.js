import Head from "next/head";
import Image from "next/image";
import Layout from "../src/components/layout/layout";
import Courses from "../src/components/Courses/Courses";
import Mentors from "../src/components/Mentors/Mentors";

export default function Home({ post }) {
  return (
    <>
      <Head>
        <title>Bushro academy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <main></main>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  /*
    All Fetchs
  */

  return {
    props: {
      post: {},
    },
  };
}
