import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (_name, value) => {
  return cookies.set(_name, value, { path: "/" });
};

export const getCookie = _name => {
  return cookies.get(_name, { path: "/" });
};

export const removeCookie = _name => {
  return cookies.remove(_name, { path: "/" });
};
