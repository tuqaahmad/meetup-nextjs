import MeetupList from "../components/meetups/MeetupList";

const meetups = [
  {
    id: "m1",
    imageUrl:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg",
    title: "Paradigm Representative",
    address: "Paris, France",
    description:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    id: "m2",
    imageUrl:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg",
    title: "Paradigm Representative",
    address: "Paris, France",
    description:
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   //better only when we need to access the req for auth. etc...
//   //otherwise getStaticProps is better and faster

//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API
//   return {
//     props: {
//       meetups: meetups,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: meetups,
    },
    revalidate: 10,
  };
}

export default HomePage;
