import React, { useState } from "react";
import Addons from "../../../../Helper/addons";
import { checkValidations } from "../../../../Helper/validation";

const Financial = ({ isActive, setIsActive, tabs, setTabs }) => {
  const [activeTab, setActiveTab] = useState("Debt-1");
  const [data, setData] = useState({
    lender: [""],
    loanAmount: "",
    startDate: "",
    typeRate: "fixed",
    interestRate: "",
    interestCapitalization: "monthly",
    rateInterest: "",
    term: "",
    amortization: "",
    financingFee: "",
  });

  const [errors, setError] = useState({
    lender: "",
    loanAmount: "",
    startDate: "",
    typeRate: "",
    interestRate: "",
    interestCapitalization: "",
    rateInterest: "",
    term: "",
    amortization: "",
    financingFee: "",
  });

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleFormChange = (e, tab, move) => {
    e.preventDefault();
    if (move == "next") {
      const validate = checkValidations(data);

      if (!validate.error && data.lender[0] !== "") {
        setIsActive(tab);
        setTabs((pre) => ({
          ...pre,
          property: "complete",
          rent: "complete",
          finance: "complete",
          income: "upcoming",
        }));
      } else {
        if (data.lender.length < 1 || data.lender[0] == "") {
          setError((pre) => ({ ...pre, lender: "Required!" }));
        }
        if (data.loanAmount == "") {
          setError((pre) => ({ ...pre, loanAmount: "Required!" }));
        }
        if (data.startDate == "") {
          setError((pre) => ({ ...pre, startDate: "Required!" }));
        }
        if (data.interestRate == "") {
          setError((pre) => ({ ...pre, interestRate: "Required!" }));
        }
        if (data.rateInterest == "") {
          setError((pre) => ({ ...pre, rateInterest: "Required!" }));
        }
        if (data.term == "") {
          setError((pre) => ({ ...pre, term: "Required!" }));
        }
        if (data.amortization == "") {
          setError((pre) => ({ ...pre, amortization: "Required!" }));
        }
        if (data.financingFee == "") {
          setError((pre) => ({ ...pre, financingFee: "Required!" }));
        }
      }
    } else {
      setIsActive(tab);
      setTabs((pre) => ({
        ...pre,
        property: "complete",
        rent: "current",
        finance: "complete",
        income: "upcoming",
      }));
    }
  };

  const handleLenderChange = (e) => {
    setError((pre) => ({ ...pre, lender: "" }));
    setData((pre) => ({ ...pre, lender: e }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const Error = { ...errors };
    switch (name) {
      case "loanAmount":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;
      case "startDate":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "typeRate":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;
      case "interestRate":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "interestCapitalization":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;
      case "rateInterest":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "term":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;
      case "amortization":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "financingFee":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      default:
        break;
    }
    setData((pre) => ({ ...pre, [name]: value }));
    setError((pre) => ({ ...pre, ...Error }));
  };
  return (
    <>
      <div className="top flex items-center justify-between w-full">
        <h4 className="m-0 py-2 head">Financial</h4>
      </div>
      <div className="tabWrpper mt-3">
        {/* Tab buttons */}
        <ul className="flex border-b">
          <li className="-mb-px mr-1">
            <a
              href="#"
              className={`bg-white relative inline-block font-semibold border-b-3  rounded-t py-2 px-4 text-blue-500 font-semibold ${
                activeTab === "Debt-1"
                  ? "active  border-emerald-600"
                  : "text-stone-500"
              }`}
              onClick={() => handleTabClick("Debt-1")}
            >
              Debit 1
            </a>
          </li>
          <li className="mr-1">
            <a
              href="#"
              className={`bg-white relative inline-block py-2 px-4 text-gray-500 border-b-3  hover:text-blue-500 font-semibold ${
                activeTab === "AddDebt"
                  ? "active  border-emerald-600"
                  : "text-stone-500"
              }`}
              onClick={() => handleTabClick("AddDebt")}
            >
              Add debt
            </a>
          </li>
        </ul>

        {/* Tab content */}
        <div className="p-4">
          <div
            id="Debt-1"
            className={`tab-content ${activeTab === "Debt-1" ? "" : "hidden"}`}
          >
            <form>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                  <label class="block text-sm font-medium text-slate-700">
                    Lender
                  </label>
                  <Addons
                    data={data.lender}
                    handleChange={handleLenderChange}
                  />
                  <span className="warn-span">{errors.lender}</span>
                  {/* <div className="flex items-center gap-4">
                    <input
                      type="text"
                      placeholder="ABC Capitals"
                      className="mt-1 block w-full px-3 h-12 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
               disabled:text-slate-500 disabled:border-slate-200 
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
                    />
                    <button className=" border border-slate-300 innerBtn h-12 px-3 rounded h-[45]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div> */}
                </div>
                <div className="col-span-12">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4">
                      <label class="block text-sm font-medium text-slate-700">
                        Loan Amount
                      </label>
                      <input
                        type="number"
                        name="loanAmount"
                        value={data.loanAmount}
                        onChange={handleChange}
                        placeholder="$ 5,000,000"
                        className="mt-1 block w-full px-3 h-12 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:text-slate-500 disabled:border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                      <span className="warn-span">{errors.loanAmount}</span>
                    </div>
                    <div className="col-span-4">
                      <label class="block text-sm font-medium text-slate-700">
                        Start Date
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={data.startDate}
                        onChange={handleChange}
                        placeholder="$ 5,000,000"
                        className="mt-1 block w-full px-3 h-12 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:text-slate-500 disabled:border-slate-200 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      />
                      <span className="warn-span">{errors.startDate}</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4">
                      <label class="block text-sm font-medium">
                        Type of Rate
                      </label>
                      <div className="inputSelect relative rounded-md flex items-center text-slate-700 border border-slate-300 ">
                        <input
                          checked={data.typeRate == "fixed"}
                          type="radio"
                          className="absolute h-full left-0 top-0"
                          name="rate"
                          onChange={() =>
                            setData((pre) => ({ ...pre, typeRate: "fixed" }))
                          }
                        />
                        <div className="inputWrp text-center w-full p-3">
                          Fixed
                        </div>
                        <input
                          type="radio"
                          className="right-0 top-0 h-full absolute"
                          name="rate"
                          onChange={() =>
                            setData((pre) => ({ ...pre, typeRate: "variable" }))
                          }
                          checked={data.typeRate == "variable"}
                        />
                        <div className="inputWrp text-center  w-full p-3">
                          Variable
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                      <label class="block text-sm font-medium">
                        Interest Rate
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="interestRate"
                          value={data.interestRate}
                          onChange={handleChange}
                          placeholder=""
                          className="mt-1 block w-full px-3 h-12 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
               disabled:text-slate-500 disabled:border-slate-200 
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
                        />
                        <span className="icn absolute top-3 right-2">%</span>
                      </div>
                      <span className="warn-span">{errors.interestRate}</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6">
                      <label class="block text-sm font-medium">
                        Interest Capitalization
                      </label>
                      <div className="inputSelect relative rounded-md flex items-center text-slate-700 border border-slate-300 ">
                        <input
                          checked={data.interestCapitalization == "monthly"}
                          type="radio"
                          className="absolute h-full left-0 top-0"
                          name="Interest"
                          onChange={() =>
                            setData((pre) => ({
                              ...pre,
                              interestCapitalization: "monthly",
                            }))
                          }
                        />
                        <div className="inputWrp text-center w-full p-3">
                          Monthly
                        </div>
                        <input
                          type="radio"
                          className="right-0 top-0 h-full absolute"
                          name="Interest"
                          onChange={() =>
                            setData((pre) => ({
                              ...pre,
                              interestCapitalization: "semiAnnual",
                            }))
                          }
                          checked={data.interestCapitalization == "semiAnnual"}
                        />
                        <div className="inputWrp text-center  w-full p-3">
                          Semi-Annual
                        </div>
                      </div>
                      <span className="warn-span">
                        {errors.interestCapitalization}
                      </span>
                    </div>
                    <div className="col-span-6">
                      <label class="block text-sm font-medium">
                        Interest Rate
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="rateInterest"
                          value={data.rateInterest}
                          placeholder=""
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 h-12 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
               disabled:text-slate-500 disabled:border-slate-200 
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
                        />
                        <span className="icn absolute top-3 right-2">
                          Months
                        </span>
                      </div>
                      <span className="warn-span">{errors.rateInterest}</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-4">
                      <div className="col-span-4">
                        <label class="block text-sm font-medium text-slate-700">
                          Term
                        </label>
                        <div className="flex items-center gap-4">
                          <input
                            type="number"
                            name="term"
                            value={data.term}
                            placeholder="25"
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 h-12 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
               disabled:text-slate-500 disabled:border-slate-200 
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
                          />
                        </div>
                        <span className="warn-span">{errors.term}</span>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="col-span-4">
                        <label class="block text-sm font-medium text-slate-700">
                          Amortization
                        </label>
                        <div className="flex items-center gap-4">
                          <input
                            type="number"
                            name="amortization"
                            value={data.amortization}
                            onChange={handleChange}
                            placeholder="25"
                            className="mt-1 block w-full px-3 h-12 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
               disabled:text-slate-500 disabled:border-slate-200 
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
                          />
                        </div>
                        <span className="warn-span">{errors.amortization}</span>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="col-span-4">
                        <label class="block text-sm font-medium text-slate-700">
                          Financing Fees
                        </label>
                        <div className="flex items-center gap-4">
                          <input
                            type="number"
                            name="financingFee"
                            value={data.financingFee}
                            onChange={handleChange}
                            placeholder="25"
                            className="mt-1 block w-full px-3 h-12 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
               disabled:text-slate-500 disabled:border-slate-200 
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
                          />
                        </div>
                        <span className="warn-span">{errors.financingFee}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="formWrpper flex align-items-center justify-end mt-4">
                    <button
                      onClick={(e) => handleFormChange(e, "rent", "back")}
                      className="px-3 font-semibold btn flex items-center justify-center rounded"
                    >
                      Back
                    </button>
                    <button
                      onClick={(e) => handleFormChange(e, "congrats", "next")}
                      className="submitBtn text-white btn flex items-center justify-center rounded"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            id="AddDebt"
            className={`tab-content ${activeTab === "AddDebt" ? "" : "hidden"}`}
          >
            {/* Tab 2 Content */}
            <p>This is the content for Tab 2.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financial;
