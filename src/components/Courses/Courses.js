import React, { useState } from "react";
import Card from "../Card/Card";
function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="page-container">
      <div className="flex justify-center ">
        {children.map((child, index) => (
          <div
            key={index}
            className={`cursor-pointer py-2 px-4 text-gray-500 ${
              index === activeTab
                ? "bg-gray-200 font-medium text-gray-800"
                : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </div>
        ))}
      </div>
      <div className="mt-4">{children[activeTab]}</div>
    </div>
  );
}
function Tab({ children }) {
  return <div>{children}</div>;
}
const Courses = () => {
  
  return (
    <section className="bg-[#F8F9FC]">
      <Tabs>
        <Tab label="All">
          <h2>Tab 1 content</h2>
        </Tab>
        <Tab label="Design">
          <h2>Tab 2 content</h2>
          <p>This is the content for Tab 2.</p>
        </Tab>
        <Tab label="Development">
          <h2>Tab 3 content</h2>
          <p>This is the content for Tab 3.</p>
        </Tab>
        <Tab label="Marketing">
          <h2>Tab 3 content</h2>
          <p>This is the content for Tab 3.</p>
        </Tab>
      </Tabs>
    </section>
  );
};

export default Courses;
