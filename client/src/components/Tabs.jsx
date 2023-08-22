import React from "react";
import { facultyMember } from "../tests";
import { Tab } from "@headlessui/react";

const Tabs = () => {
  return (
    <div className="w-full h-16 bg-timberWolf">
      <div className="w-[90%] p-2 h-full m-auto flex items-center justify-center space-x-4">
        <Tab.Group>
          <Tab.List className="flex items-center justify-center space-x-4">
            <Tab className="text-white font-bold text-lg">Newsfeed</Tab>
            <Tab className="text-white font-bold text-lg">Faculty</Tab>
            <Tab className="text-white font-bold text-lg">Profile</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>Hello World</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Tabs;
