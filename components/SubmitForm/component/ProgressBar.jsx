import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const ProgressBar = ({ isActive, setIsActive, tabs, setTabs }) => {
  return (
    <>
      <div className="px-4 py-3 ">
        <nav className="relative flex navbarCstm">
          <ol className="space-y-3">
            <li className={`py-2 ${tabs.property}`}>
              <a className="flex items-center relative ">
                <span className="icn relative mr-2">
                  <CheckCircleIcon
                    className="h-full w-full text-black-600 group-hover:text-black-800"
                    aria-hidden="true"
                  />
                </span>
                <span className=" text-sm font-medium text-gray-500 group-hover:text-gray-900">
                  Property Details
                </span>
              </a>
            </li>
            <li className={`py-2 ${tabs.rent}`}>
              <a className="flex items-center relative">
                <span className="icn relative mr-2">
                  <CheckCircleIcon
                    className="h-full w-full text-black-600 group-hover:text-black-800"
                    aria-hidden="true"
                  />
                </span>
                <span className=" text-sm font-medium text-gray-500 group-hover:text-gray-900">
                  Rent Roll
                </span>
              </a>
            </li>
            <li className={`py-2 ${tabs.finance}`}>
              <a className="flex items-center relative">
                <span className="icn relative mr-2">
                  <CheckCircleIcon
                    className="h-full w-full text-black-600 group-hover:text-black-800"
                    aria-hidden="true"
                  />
                </span>
                <span className=" text-sm font-medium text-gray-500 group-hover:text-gray-900">
                  Financing
                </span>
              </a>
            </li>
            <li className={`py-2 ${tabs.income}`}>
              <a className="flex items-center relative">
                <span className="icn relative mr-2">
                  <CheckCircleIcon
                    className="h-full w-full text-black-600 group-hover:text-black-800"
                    aria-hidden="true"
                  />
                </span>
                <span className=" text-sm font-medium text-gray-500 group-hover:text-gray-900">
                  Income and expenses
                </span>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};

export default ProgressBar;
