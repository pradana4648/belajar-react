import React from "react";
import { IContentInterface } from "../interfaces/ContentInterface";

const divAttr: React.HtmlHTMLAttributes<HTMLDivElement> = {
  style: {
    padding: "2em",
    fontSize: "1em",
  },
};

const Content: React.FC<IContentInterface> = ({ children }) => {
  return <div {...divAttr}>{children}</div>;
};

export default Content;
