import React, { useState } from "react";
import ProgressBar from "./component/ProgressBar";
import MainForm from "./component/PropertyDetails/MainForm";
import RentRoll from "./component/RentRoll/RentRoll";
import Financial from "./component/Financial/Financial";
import Congratulation from "./component/Congratulation/Congratulation";

const SubmitForm = () => {
  const [isActive, setIsActive] = useState("property");
  const [tabs, setTabs] = useState({
    property: "current",
    rent: "upcoming",
    finance: "upcoming",
    income: "upcoming",
  });
  return (
    <>
      <section
        className="FormWrpper py-3"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div className="container px-3 mx-auto">
          <div className="formInner bg-white drop-shadow  rounded-md">
            <div className="grid grid-cols-3 h-full">
              <div className="col-span-1 p-4 ">
                <ProgressBar
                  isActive={isActive}
                  setIsActive={setIsActive}
                  tabs={tabs}
                  setTabs={setTabs}
                />
              </div>
              <div
                className={`col-span-2 p-4 h-full min-h-screen border-l-2 border-gray-200 ${
                  isActive == "property" ? "" : "hidden"
                }`}
              >
                <MainForm
                  isActive={isActive}
                  setIsActive={setIsActive}
                  tabs={tabs}
                  setTabs={setTabs}
                />
              </div>
              <div
                className={`col-span-2 tableWrpperCol p-4 h-full min-h-screen border-l-2 border-gray-200 ${
                  isActive == "rent" ? "" : "hidden"
                }`}
              >
                <RentRoll
                  isActive={isActive}
                  setIsActive={setIsActive}
                  tabs={tabs}
                  setTabs={setTabs}
                />
              </div>
              <div
                className={`col-span-2 p-4 h-full min-h-screen border-l-2 border-gray-200 ${
                  isActive == "finance" ? "" : "hidden"
                }`}
              >
                <Financial
                  isActive={isActive}
                  setIsActive={setIsActive}
                  tabs={tabs}
                  setTabs={setTabs}
                />
              </div>
              <div
                className={`col-span-2 p-4 h-full min-h-screen border-l-2 border-gray-200 ${
                  isActive == "congrats" ? "" : "hidden"
                }`}
              >
                <Congratulation
                  isActive={isActive}
                  setIsActive={setIsActive}
                  tabs={tabs}
                  setTabs={setTabs}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubmitForm;
