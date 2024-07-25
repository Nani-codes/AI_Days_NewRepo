import getSupporter, { Supporter } from "../../data/drupal/node--supporter";
import Head from "next/head";
import { getMetaDescription, getTitle } from "../../utils/meta";
import { SupportersTemplate } from "./SupportersTemplate";

type SupporterPageProps = {
  supporters: Supporter[];
};

export const metadata = {
  title: getTitle("Supporters"),
  description: getMetaDescription("Supporters"),
};

export default async function SupportersPage() {
  const supporters: Supporter[] = await getSupporter();

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <section className="container">
        <SupportersTemplate supporters={supporters} />
      </section>
    </>
  );
}
