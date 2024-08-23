import { useState } from "react";
import AccordionItem from "../accordion-item";

const Accordion = ({
  data,
}: {
  question: string;
  answer: string | JSX.Element;
}[]) => {
  console.log(data);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container">
      {data?.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
