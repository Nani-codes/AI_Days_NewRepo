// import { Layout } from "../components/layout";
import Head from "next/head";
import { getMetaDescription, getTitle } from "../../utils/meta";
import { Course } from "../../data/drupal/node--courses";
import CoursePage from "../../NodePages/CoursePage";
import { drupal } from '../../lib/drupal'; // Ensure you have this import if you're using it for data fetching
import { DrupalJsonApiParams } from 'drupal-jsonapi-params';

const type = "node--courses";

const params = () => {
  return new DrupalJsonApiParams()
    .addInclude(["uid"])
    .addFields(type, [
      "uid",
      "title",
      "body",
      "path",
      "field_difficulty",
      "field_short_description",
      "field_subtitle",
      "field_target_audience",
      "field_type",
      "field_poster",
      "field_price",
    ]);
}

async function fetchCourses() {
  const res = await drupal.getResourceCollection<Course[]>(type, {
    params: params().getQueryObject()
  });
  return res;
}

export default async function MasterClassPage() {
  const courses = await fetchCourses();
  const masterClass = courses.find((c) => c.field_type === "masterclass"); // Adjust condition as needed

  return (
    <>
      <Head>
        <title>{getTitle("Masterclass")}</title>
        <meta name="description" content={getMetaDescription("masterclass")} />
      </Head>
      <CoursePage resource={masterClass} />
    </>
  );
}
