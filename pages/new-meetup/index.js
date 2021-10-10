//www.domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const { Fragment, useState } = require("react");

function NewMeetupPage() {
  const [meetup, setNewMeetup] = useState({});

  function handle_new_meetup(e) {
    let new_meetup = meetup;
    new_meetup[e.target.name] = e.target.value;
    setNewMeetup(new_meetup);
  }

  function new_meetup_handler() {
    console.log(meetup);
  }

  return (
    <NewMeetupForm
      handle_change={handle_new_meetup}
      onAddMeetup={new_meetup_handler}
    />
  );
}

export default NewMeetupPage;
