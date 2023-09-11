import React from "react";

const RentRoll = ({ isActive, setIsActive, tabs, setTabs }) => {
  const handleFormChange = (e, tab, move) => {
    e.preventDefault();
    setIsActive(tab);
    if (move == "next") {
      setTabs((pre) => ({
        ...pre,
        property: "complete",
        rent: "complete",
        finance: "current",
        income: "upcoming",
      }));
    } else {
      setTabs((pre) => ({
        ...pre,
        property: "current",
        rent: "complete",
        finance: "complete",
        income: "upcoming",
      }));
    }
  };
  return (
    <>
      <div className="top flex items-center justify-between w-full">
        <h4 className="m-0 py-2 head">Rent roll</h4>
        <div className="flex items-center justify-end gap-3 text-left font-normal filterBtns">
          <button className="flex items-center justify-content-center font-medium transparent">
            <span className="icn me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </span>{" "}
            Export Template
          </button>
          <button className="flex items-center justify-content-center font-medium transparent">
            <span className="icn me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </span>{" "}
            Import File
          </button>
        </div>
      </div>
      <div className="table-responsive max-h-screen overflow-auto mt-3">
        <table class=" border-2 h-full min-w-full table-auto rounded">
          <thead>
            <tr>
              <th className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                ID
              </th>
              <th className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Type
              </th>
              <th className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Rent
              </th>
              <th className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Width (ft)
              </th>
              <th className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Length (ft)
              </th>
              <th className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Market Rent
              </th>
              <th className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Status
              </th>
              <th className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                SQFT/SQM
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                E22
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                <button className="flex items-center justify-between">
                  Indoor{" "}
                  <span className="icn ml-3 ">
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
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </span>
                </button>
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                $160
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                10
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                20
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200"></td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Rented
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                50
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                E22
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                <button className="flex items-center justify-between">
                  Indoor{" "}
                  <span className="icn ml-3 ">
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
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </span>
                </button>
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                $160
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                10
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                20
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200"></td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Rented
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                50
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                E22
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                <button className="flex items-center justify-between">
                  Indoor{" "}
                  <span className="icn ml-3 ">
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
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </span>
                </button>
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                $160
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                10
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                20
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200"></td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Rented
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                50
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                E22
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                <button className="flex items-center justify-between">
                  Indoor{" "}
                  <span className="icn ml-3 ">
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
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </span>
                </button>
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                $160
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                10
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                20
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200"></td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Rented
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                50
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                E22
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                <button className="flex items-center justify-between">
                  Indoor{" "}
                  <span className="icn ml-3 ">
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
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </span>
                </button>
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                $160
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                10
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                20
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200"></td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Rented
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                50
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                E22
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                <button className="flex items-center justify-between">
                  Indoor{" "}
                  <span className="icn ml-3 ">
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
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </span>
                </button>
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                $160
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                10
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                20
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200"></td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Rented
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                50
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                E22
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                <button className="flex items-center justify-between">
                  Indoor{" "}
                  <span className="icn ml-3 ">
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
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </span>
                </button>
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                $160
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                10
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                20
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200"></td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Rented
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                50
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                E22
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                <button className="flex items-center justify-between">
                  Indoor{" "}
                  <span className="icn ml-3 ">
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
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </span>
                </button>
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                $160
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                10
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                20
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200"></td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Rented
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                50
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                E22
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                <button className="flex items-center justify-between">
                  Indoor{" "}
                  <span className="icn ml-3 ">
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
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </span>
                </button>
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                $160
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                10
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                20
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200"></td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Rented
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                50
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                E22
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                <button className="flex items-center justify-between">
                  Indoor{" "}
                  <span className="icn ml-3 ">
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
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </span>
                </button>
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                $160
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                10
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                20
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200"></td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                Rented
              </td>
              <td className="px-3 py-4 text-left text-xs font-medium text-slate-500 border-b-2 border-gray-200">
                50
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="formWrpper flex align-items-center justify-end mt-4">
        <button
          onClick={(e) => handleFormChange(e, "property", "back")}
          className="px-3 font-semibold btn flex items-center justify-center rounded"
        >
          Back
        </button>
        <button
          onClick={(e) => handleFormChange(e, "finance", "next")}
          className="submitBtn text-white btn flex items-center justify-center rounded"
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default RentRoll;
