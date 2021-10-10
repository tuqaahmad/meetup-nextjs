import { useRouter } from "next/router";

export default function MeetupList({ meetups }) {
  const router = useRouter();

  function handle_show_details(id) {
    router.push("/" + id);
  }

  return (
    <ul className="grid grid-cols-1 mx-20 gap-10  ">
      {meetups.map((meetup) => (
        <li
          id={meetup.id}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow-md divide-y divide-gray-200 p-4"
        >
          <div className="flex-1 flex flex-col">
            <img className="w-auto h-96" src={meetup.imageUrl} alt="" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">
              {meetup.title}
            </h3>
            <dl className="mt-2 flex-grow flex flex-col justify-between">
              <dd className="text-gray-700 text-sm">{meetup.description}</dd>
            </dl>
            <dl className="mt-2 flex-grow flex flex-col justify-between">
              <dd className="text-gray-500 text-sm">{meetup.address}</dd>
            </dl>
            <div className="my-4 flex justify-center text-center">
              <button
                onClick={() => {
                  handle_show_details(meetup.id);
                }}
                className="inline-flex items-center px-4 py-2 border border-purple-300 shadow-sm text-base  rounded-md text-purple-700 bg-white hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Show Details
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
