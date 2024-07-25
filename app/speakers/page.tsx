import SpeakersGrid from "../../components/ui/speakers-grid";
import Head from "next/head";
import { getMetaDescription, getTitle } from "../../utils/meta";
import getSpeakers, {
  FieldRole,
  Speaker,
  SpeakerPreview,
} from "../../data/drupal/node--speakers";
import { nullishSort } from "../../lib/utils";

type SpeakerPageArgs = {
  speakers: SpeakerPreview[];
  distinguishedSpeakers: SpeakerPreview[];
  closingSpeakers: any;
};

export default async function SpeakersPage() {
  const allSpeakers: SpeakerPreview[] = (await getSpeakers()).map(
    ({ body, ...speaker }: Speaker) => speaker
  ); // optimising page load

  const speakers = allSpeakers.filter((s) =>
    s.field_role.includes(FieldRole.Speaker)
  );

  const distinguishedSpeakers = allSpeakers.filter((s) =>
    s.field_role.includes(FieldRole.DistinguishedSpeaker)
  );

  const closingSpeakers = allSpeakers.filter((s) =>
    s.field_role.includes(FieldRole.closing)
  );

  return (
    <>
      <Head>
        <title>{getTitle("Speakers")}</title>
        <meta name="description" content={getMetaDescription("Speakers")} />
      </Head>
      <Template
        speakers={speakers}
        distinguishedSpeakers={distinguishedSpeakers}
        closingSpeakers={closingSpeakers}
      />
    </>
  );
}

function Template({
  speakers,
  distinguishedSpeakers,
  closingSpeakers,
}: SpeakerPageArgs) {
  return (
    <>
      <SpeakersGrid
        gridSize={3}
        title={"Distinguished Speakers"}
        speakers={distinguishedSpeakers.sort((a, b) =>
          nullishSort(a.field_speaker_weight, b.field_speaker_weight)
        )}
      />
      {/* <div className="container mt-10">
        <SpeakersGrid
          gridSize={1}
          title={""}
          speakers={closingSpeakers}
        />
      </div> */}
      <SpeakersGrid
        gridSize={4}
        title={"Speakers"}
        speakers={speakers.sort((a, b) => {
          return nullishSort(a.field_speaker_weight, b.field_speaker_weight);
        })}
      />
    </>
  );
}
