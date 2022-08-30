import React from "react";

interface ICardProps {
  children?: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ children }) => {
  const [focus, setFocus] = React.useState({
    hover: false,
    transform: false,
  });

  // Hover
  const onMouseEnter = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault();
      setFocus((state) => ({ ...state, hover: !state.hover }));
    },
    [focus.hover]
  );
  const onMouseLeave = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault();
      setFocus((state) => ({ transform: false, hover: !state.hover }));
    },
    [focus.hover]
  );

  const onClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setFocus((state) => ({ ...state, transform: !state.transform }));
    },
    [focus.transform]
  );

  const divAttr: React.HtmlHTMLAttributes<HTMLDivElement> = {
    style: {
      boxShadow: focus.hover ? "5px 10px black" : "none",
      border: "2px solid black",
      paddingInline: "1em",
      cursor: "pointer",
      transform: focus.transform ? "translateY(5px)" : "none",
      transition: "box-shadow 0.5s",
    },
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onClick: onClick,
  };
  return <div {...divAttr}>{children}</div>;
};

export default Card;
