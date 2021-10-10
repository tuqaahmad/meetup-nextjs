// import { Fragment } from "react";
// import { Popover, Transition } from "@headlessui/react";

import MainNav from "./MainNav";

export default function Layout(props) {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <MainNav />
      <main className="py-2">
        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2">
          <div className="space-y-6 lg:col-start-1 lg:col-span-2">
            {/* Description list*/}
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">{props.children}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
