import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

const Catagory = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 bg-white rounded-lg">
      <Tabs>
        <TabList className="flex justify-between border-b border-red-600">
          <Tab
            className="w-full text-center py-3 px-6 cursor-pointer text-gray-700 border-b-2 border-transparent hover:text-blue-500 transition-all duration-200 focus:outline-none"
            selectedClassName="border-blue-600 text-blue-600 font-semibold"
          >
            Plastic Raw Meterial
          </Tab>
          <Tab
            className="w-full text-center py-3 px-6 cursor-pointer text-gray-700 border-b-2 border-transparent hover:text-blue-500 transition-all duration-200 focus:outline-none"
            selectedClassName="border-blue-600 text-blue-600 font-semibold"
          >
            Stilness Still Processing
          </Tab>
          <Tab
            className="w-full text-center py-3 px-6 cursor-pointer text-gray-700 border-b-2 border-transparent hover:text-blue-500 transition-all duration-200 focus:outline-none"
            selectedClassName="border-blue-600 text-blue-600 font-semibold"
          >
            Export Whole Spices & Others
          </Tab>
        </TabList>

        <TabPanel>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900">Any content 1</h2>
            <p className="text-gray-600 mt-2">Description for content 1.</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900">Any content 2</h2>
            <p className="text-gray-600 mt-2">Description for content 2.</p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900">Any content 3</h2>
            <p className="text-gray-600 mt-2">Description for content 3.</p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Catagory;
