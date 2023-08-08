import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (_name, value) => {
  // console.log("set_name", _name);
  // console.log("set value", value);
  return cookies.set(_name, value);
};

export const getCookie = _name => {
  // console.log("get_name", _name);
  return cookies.get(_name);
};

export const removeCookie = _name => {
  // console.log("remove_name", _name);
  return cookies.remove(_name);
};
