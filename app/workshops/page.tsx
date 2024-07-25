// import { Layout } from "components/layout";
import SectionHeader from "../../components/ui/section-header";
import InteractiveWorkshopCard from "../../components/ui/InteractiveWorkshopCard";
import Head from "next/head";
import { getTitle } from "../../utils/meta";
import { getCourses, Course } from '../../data/drupal/node--courses';

type WorkshopsPageProps = {
  courses: Course[];
};

export default async function WorkshopsPage() {
  // Fetch courses server-side
  const courses = (await getCourses()).filter(
    (c) => c.field_type === 'workshop'
  );

  return (
    <>
      <Head>
        <title>{getTitle('Workshops')}</title>
      </Head>
      <section className="container mb-12 mt-10">
        <SectionHeader
          title="Workshops"
          pretitle="Learn more about leveraging AI in innovative ways"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {courses.map((c) => (
            <InteractiveWorkshopCard
              key={c.title}
              title={c.title}
              description={c.field_short_description}
              path={c.path.alias}
              badge="beginner"
            />
          ))}
        </div>
      </section>
    </>
  );
}