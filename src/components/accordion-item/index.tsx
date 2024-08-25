"use client";

import { useRef } from "react";
import style from "./style.module.css";

export default function AccordionItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string | JSX.Element;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentHeight = useRef<HTMLDivElement | null>(null);
  return (
    <div className={style.wrapper}>
      <button
        className={
          isOpen
            ? style.questionContainer + " " + style.active
            : style.questionContainer
        }
        onClick={onClick}
      >
        <p className="font-semibold">{question}</p>
        <i className="ti ti-arrow-down"></i>
      </button>

      <div
        ref={contentHeight}
        className={style.answerContainer}
        style={
          isOpen
            ? { height: contentHeight?.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        {answer
          ? typeof answer === "string"
            ? answer.split("\n").map((item, index) => (
                <p key={index} className={style.answerContent}>
                  {item}
                </p>
              ))
            : answer
          : null}
      </div>
    </div>
  );
}
