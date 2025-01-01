import { Accordion } from "../accordion/accordion";
import { Accordion as AccordionType } from "@/types/accordion";
import ListAccordion from "../list-Accordion/listAccordion";

const Explorer = () => {
  const faqs: AccordionType[] = [
    {
      id: 1,
      title: "Portfolio",
      content: <ListAccordion />,
    },
  ];

  return (
    <div className="sm:flex flex-col pt-2 bg-[#161a1d] h-[calc(100vh-40px-20px)] w-[200px] pl-2 items-start hidden border-r border-[#161a1d]">
      <h3 className="text-gray-300 text-sm ">Explorer</h3>
      <Accordion data={faqs} />
    </div>
  );
};

export default Explorer;
