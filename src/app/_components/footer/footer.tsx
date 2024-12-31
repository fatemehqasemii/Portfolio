import Git from "../../../../public/icons/git-merge.svg";
import Check from "../../../../public/icons/check.svg";
import Alert from "../../../../public/icons/alert-triangle.svg";
import Bell from "../../../../public/icons/bell.svg";
import Circle from "../../../../public/icons/x-circle.svg";

const Footer: React.FC = () => {
  return (
    <div className="flex items-center gap-4 border-t border-gray-900 shadow shadow-gray-900/50 px-5 justify-between bg-[#24292e]">
      <div className="flex gap-5 ">
        <span className="flex items-center gap-1 ">
          <Git className="stroke-white w-3 h-3" />
          <p className="text-gray-300 text-[10px] sm:text-[12px]">main</p>
        </span>
        <span className="flex items-center gap-[5px]">
          <Circle className="stroke-white w-3 h-3" />
          <p className="text-gray-300 text-[10px] sm:text-[12px]">0</p>
          <Alert className="stroke-white w-3 h-3" />
          <p className="text-gray-300 text-[10px] sm:text-[12px]">0</p>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-gray-300 hidden text-[12px] sm:flex">
          Powered by Next.js
        </p>
        <span className="flex items-center gap-1">
          <Check className="stroke-white w-3 h-3" />
          <p className="text-gray-300 text-[10px] sm:text-[12px]">Prettier</p>
        </span>
        <span>
          <Bell className="stroke-white w-3 h-3" />
        </span>
      </div>
    </div>
  );
};
export default Footer;
