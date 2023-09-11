import React, { useState, useEffect } from "react";

const AddressAddon = ({ data, handleChange }) => {
  const [state, setState] = useState({
    addons: data,
  });
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    setState({ addons: data });
  }, [data]);

  useEffect(() => {
    handleChange(state.addons);
  }, [isChange]);

  const addRow = (e) => {
    e.preventDefault();
    setState((pre) => ({
      ...pre,
      addons: [...pre.addons, ""],
    }));
  };

  const deleteRow = (e, index) => {
    e.preventDefault();
    const addons = state.addons.filter((e, i) => i !== index);
    setState({
      addons: [...addons],
    });
    setIsChange(!isChange);
  };

  const changeRowvalue = (e, i) => {
    const { name, value } = e.target;
    setState((pre) => ({
      ...pre,
      addons: [...pre.addons.slice(0, i), value, ...pre.addons.slice(i + 1)],
    }));
    setIsChange(!isChange);
  };

  return (
    <>
      {state.addons &&
        state.addons.map((s, i) => {
          return (
            <div className="range-inner my-2">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <input
                    type="text"
                    name="address"
                    value={s}
                    onChange={(e) => changeRowvalue(e, i)}
                    placeholder=""
                    className="mt-1 block w-full px-3 h-12 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
               disabled:text-slate-500 disabled:border-slate-200 
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "
                  />
                </div>
                <div className="col-span-3">
                  {i ? (
                    <button
                      className=" 
                          border border-slate-300 innerBtn h-12 px-3 rounded h-[45] mt-1"
                      onClick={(e) => deleteRow(e, i, "addons")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
      <div className="expension-btn text-left">
        <button
          type="button"
          className=" border border-slate-300 innerBtn h-12 px-3 rounded h-[45]"
          data-toggle="modal"
          data-target="#exampleModalScrollable1"
          onClick={(e) => addRow(e, "addons")}
        >
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
      </div>
    </>
  );
};

export default React.memo(AddressAddon);
