import Head from "next/head";
import { getMetaDescription, getTitle } from "../../utils/meta";
import getPressCoverageGallery, { PressCoverageGallery } from "../../data/drupal/node--press_coverage_gallery";
import getPressCoverageLinks, { PressCoverageLink } from "../../data/drupal/node--press_coverage";
import ImageGallery from "./image-gallery";
import NewsPostsList from "./news-posts-list";
import SectionHeader from "../../components/ui/section-header";

type NewsroomArgs = {
  pressCoverage: PressCoverageGallery[];
  pressCoverageLinks: PressCoverageLink[];
};

function PressLinksTemplate({ articles }: { articles: PressCoverageLink[] }) {
  const posts = articles.map((a) => ({
    title: a.title,
    body: a.body.processed,
    publisher: a.field_publisher_name,
    image: a.field_link_to_image.uri,
    externalLink: a.field_link_to_news_article.uri,
  }));
  return <NewsPostsList posts={posts} />;
}

function PressCoverageGalleryTemplate({ images }: { images: PressCoverageGallery[] }) {
  const imagesNew = images.map((i) => ({
    title: i.title,
    src: i.field_link_to_image_clipping.uri,
  }));
  return <ImageGallery images={imagesNew} />;
}

export const metadata = {
  title: getTitle("Newsroom"),
  description: getMetaDescription("Newsroom"),
};

export default async function NewsRoom({ params }: { params: any }) {
  const context = { params };
  const [pressCoverage, pressCoverageLinks]: [PressCoverageGallery[], PressCoverageLink[]] = await Promise.all([
    getPressCoverageGallery(context),
    getPressCoverageLinks(context),
  ]);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <section className="container mt-12">
        <div>
          <PressLinksTemplate articles={pressCoverageLinks} />
        </div>
        <div className="mt-10">
          <SectionHeader title="News Clippings" center />
          <PressCoverageGalleryTemplate images={pressCoverage} />
        </div>
      </section>
    </>
  );
}
