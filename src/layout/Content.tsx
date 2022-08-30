import React from "react";
import { IContentInterface } from "../interfaces/ContentInterface";
import "./content.css";

const Content: React.FC<IContentInterface> = ({ children }) => {
  return <div className="content">{children}</div>;
};

export default Content;
