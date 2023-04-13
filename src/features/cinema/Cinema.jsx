import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hide } from "./cinemaSlice";
import "./Cinema.css";
import IconCross from "../icons/Cross";

export function Cinema() {
  const visible = useSelector((state) => state.cinema.visible);
  const link = useSelector((state) => state.cinema.link);
  const dispatch = useDispatch();

  let content = "";
  if (visible && !!link) content = <iframe src={link} />;
  return (
    <div className={visible ? "cinema-on" : "cinema-off"}>
      <button onClick={() => dispatch(hide())}>
        <IconCross />
      </button>
      {content}
    </div>
  );
}
