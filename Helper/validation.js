export const checkValidations = (state) => {
  let newState = {};
  let error = "";

  for (let [key, value] of Object.entries(state)) {
    if (value !== null && value !== undefined && value !== "") {
      // Trim and assign value if not null, undefined, or empty string
      newState[key] = typeof value === "string" ? value.trim() : value;
    } else {
      key = key.charAt(0).toUpperCase() + key.slice(1);
      error += `${key},`;
    }
  }

  if (error !== "") {
    error = error.substring(0, error.length - 1);
    error += " is required!";
  } else {
    error = false;
  }

  return { data: newState, error: error };
};
