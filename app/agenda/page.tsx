import AgendaTemplate from "./AgendaTemplate";
import MainAgenda from "./MainAgenda";
// import { Layout } from "../components//layout";
import getConferenceEvents, { ConferenceEvent } from "../../data/drupal/node--conference_events";
import Head from 'next/head';


export default function AgendaPage({
  events
}: {
  events: ConferenceEvent[]
}) {
  return (<>
    <MainAgenda events={events} />
  </>)
}

export async function getserversideprops(context) {
  const events = await getConferenceEvents(context);

  return {
    props: {
      events,
    }
  };
}
