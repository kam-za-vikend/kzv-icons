function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";

function Avto(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
    fill: "none"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M13.9 14.15h1.5c.3 0 .6-.3.6-.6v-.8m-9.8 1.4H4.7c-.3 0-.6-.3-.6-.6v-.8m0-2.8h11.8m-11.8 0H2.7c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h2.1l-.7 1.4zm11.8 0h1.4c.4 0 .7-.3.7-.7 0-.4-.3-.7-.7-.7h-2.1l.7 1.4zm1.8 2.4-2.1-2.8-1.3-3.5c-.2-.5-.7-.9-1.3-.9-2.1-.2-4-.2-5.9 0-.6 0-1.1.3-1.3.9l-1.4 3.6-2.1 2.7c-.2.3-.3.6-.3.9v4.4c0 .4.3.7.7.7h.7c.4 0 .7-.3.7-.7v-1.4h11.8v1.4c0 .4.3.7.7.7h.7c.4 0 .7-.3.7-.7v-4.4c0-.3-.1-.6-.3-.9z",
    strokeWidth: 1.3,
    strokeMiterlimit: 10
  }));
}

export default Avto;