import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import { checkValidations } from "../../../../Helper/validation";

const MainForm = ({ setIsActive, setTabs }) => {
  const [data, setData] = useState({
    name: "",
    address: "",
    country: "",
    city: "",
    zip: "",
    date: "",
  });

  const [errors, setError] = useState({
    name: "",
    address: "",
    country: "",
    city: "",
    zip: "",
    date: "",
  });

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([
    { value: "New York", label: "New York" },
    { value: "Chicago", label: "Chicago" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "Austin", label: "Austin" },
    { value: "San Francisco", label: "San Francisco" },
    { value: "San Antonio", label: "San Antonio" },
    { value: "Dallas", label: "Dallas" },
  ]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryNames = response.data.map(
          (country) => country.name.common
        );
        setCountries(
          countryNames.map((count) => ({
            value: count,
            label: count,
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountry = e.value;
    setData((pre) => ({ ...pre, country: selectedCountry }));
    setError((pre) => ({ ...pre, country: "" }));
  };

  const handleFormChange = (e, tab) => {
    e.preventDefault();

    const validate = checkValidations(data);
    if (!validate.error) {
      setIsActive(tab);
      setTabs((pre) => ({
        ...pre,
        property: "complete",
        rent: "current",
        finance: "upcoming",
        income: "upcoming",
      }));
    } else {
      if (data.name == "") {
        setError((pre) => ({ ...pre, name: "Required!" }));
      }
      if (data.address == "") {
        setError((pre) => ({ ...pre, address: "Required!" }));
      }
      if (data.country == "") {
        setError((pre) => ({ ...pre, country: "Required!" }));
      }
      if (data.city == "") {
        setError((pre) => ({ ...pre, city: "Required!" }));
      }
      if (data.zip == "") {
        setError((pre) => ({ ...pre, zip: "Required!" }));
      }
      if (data.date == "") {
        setError((pre) => ({ ...pre, date: "Required!" }));
      }
    }
  };

  const handleValChange = (e) => {
    const { name, value } = e.target;
    const Error = { ...errors };
    switch (name) {
      case "name":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;
      case "address":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;

      case "zip":
        Error[name] = "";
        if (value.length < 1) {
          Error[name] = "Required";
          Error["disabled"] = true;
        } else {
          Error["disabled"] = true;
        }
        break;
      case "date":
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

  const handleCityChange = (e) => {
    const selectedCity = e.value;
    setData((pre) => ({ ...pre, city: selectedCity }));
    setError((pre) => ({ ...pre, city: "" }));
  };
  return (
    <>
      <div className="top">
        <h4 className="m-0 py-2 head">Property Details</h4>
      </div>
      <form>
        <div className="top mb-3">
          <h6 className="subHead py-2 m-0">Property Detail</h6>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 my-2">
            <label class="block text-sm font-medium text-slate-700">
              Property Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Storage 1"
              value={data.name}
              onChange={handleValChange}
              className="mt-1 block w-full px-3 h-12 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
               disabled:text-slate-500 disabled:border-slate-200 
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
            />
            <span className="warn-span">{errors.name}</span>
          </div>
          <div className="col-span-3 my-2">
            <label class="block text-sm font-medium text-slate-700">
              Address Line
            </label>
            <input
              type="text"
              name="address"
              value={data.address}
              onChange={handleValChange}
              placeholder="Address"
              className="mt-1 block w-full px-3 h-12 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
               disabled:text-slate-500 disabled:border-slate-200 
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
            />
            <span className="warn-span">{errors.address}</span>
          </div>
          <div className=" my-2">
            <label class="block text-sm font-medium text-slate-700">
              Country
            </label>
            <Select
              value={{ value: data.country, label: data.country }}
              className="cstmSelect mt-1"
              onChange={handleCountryChange}
              options={countries}
            />
            <span className="warn-span">{errors.country}</span>
          </div>
          <div className=" my-2">
            <label class="block text-sm font-medium text-slate-700">City</label>
            <Select
              value={{ value: data.city, label: data.city }}
              className="cstmSelect mt-1"
              onChange={handleCityChange}
              options={cities}
            />
            <span className="warn-span">{errors.city}</span>
          </div>
          <div className=" my-2">
            <label class="block text-sm font-medium text-slate-700">
              ZIP/Postal Code
            </label>
            <input
              type="text"
              name="zip"
              value={data.zip}
              placeholder="Address"
              onChange={handleValChange}
              className="mt-1 block w-full px-3 h-12 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
               disabled:text-slate-500 disabled:border-slate-200 
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
            />
            <span className="warn-span">{errors.zip}</span>
          </div>
          <div className="col-span-3 my-2">
            <label class="block text-sm font-medium text-slate-700">
              Close Date
            </label>
            <input
              type="Date"
              name="date"
              value={data.date}
              placeholder="Address"
              onChange={handleValChange}
              className="mt-1 block w-full px-3 h-12 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
               disabled:text-slate-500 disabled:border-slate-200 
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
            />
            <span className="warn-span">{errors.date}</span>
          </div>
          <div className="col-span-3 my-2">
            <div className="flex justify-end btnWrp mt-5">
              <button
                class="rounded text-white btn flex items-center justify-center submitBtn"
                onClick={(e) => handleFormChange(e, "rent")}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default MainForm;
