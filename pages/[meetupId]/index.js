import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <MeetupDetail props={props.meetupData} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  //used in dynamic pages
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg",
        title: "first meetup",
        address: "Jordan",
        description: "description description description",
      },
    },
    revalidate: 10,
  };
}

export default MeetupDetails;
