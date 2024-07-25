import Hackathon from "./Hackathon";
// import { Layout } from "components/layout";
import Head from "next/head";
import { getTitle } from "../../utils/meta";

export default function page() {
  return (
    <>
      <Head>
        <title>
          {getTitle("Hackathon")}
        </title>
      </Head>
      <Hackathon />
    </>

  )
}
