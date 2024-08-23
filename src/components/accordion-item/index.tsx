import { useRef } from "react";
import "./style.css";

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
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <i className="ti ti-arrow-down"></i>
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight?.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        {/* <p className="answer-content">{answer}</p> */}
        {answer
          ? typeof answer === "string"
            ? answer.split("\n").map((item, index) => (
                <p key={index} className="answer-content">
                  {item}
                </p>
              ))
            : answer
          : null}
      </div>
    </div>
  );
}
