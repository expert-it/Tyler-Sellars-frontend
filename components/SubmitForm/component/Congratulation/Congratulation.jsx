import React from "react";

const Congratulation = ({ isActive, setIsActive, tabs, setTabs }) => {
  const handleFormChange = (e, tab) => {
    e.preventDefault();
    setIsActive(tab);
    setTabs((pre) => ({
      ...pre,
      property: "complete",
      rent: "complete",
      finance: "current",
      income: "upcoming",
    }));
  };
  return (
    <>
      <div className="flex items-center flex-col justify-content-center text-center justify-center h-screen">
        <div className="imgWrp text-center">
          <img
            src="/assets/images/congrats.png"
            alt=""
            className="img-fluid max-w-full m-auto"
          />
        </div>
        <div className="content">
          <p className="py-2 m-0 font-medium text-slate-800">
            Your Form has been Submitted
          </p>
        </div>
        <div className="formWrpper flex align-items-center justify-end mt-4">
          <button
            onClick={(e) => handleFormChange(e, "finance")}
            className="submitBtn text-white btn flex items-center justify-center rounded"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Congratulation;
