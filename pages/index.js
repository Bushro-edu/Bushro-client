import Head from "next/head";
import Image from "next/image";

export default function Home({ post }) {
  return (
    <>
      <main>
        <h1>Main Page</h1>
      </main>
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
