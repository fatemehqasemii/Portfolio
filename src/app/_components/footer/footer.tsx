import Git from "../../../../public/icons/git-merge.svg";
import Refresh from "../../../../public/icons/refresh.svg";
import Circle from "../../../../public/icons/x-circle.svg";

const Footer: React.FC = () => {
  return (
    <div className="flex items-center gap-4 border-t border-gray-900 shadow shadow-gray-900/50 px-5">
      <div className="flex gap-2 items-center">
        <Git className="stroke-white w-3 h-3" />
        <span className="text-gray-300 text-[12px]">main</span>
      </div>
      <div>
        <span className="flex items-center gap-1">
          <Circle className="stroke-white w-3 h-3" />
          <p className="text-gray-300 text-[12px]">0</p>
        </span>
      </div>
      <div>
        <p>Powered by Next.js</p>
      </div>
    </div>
  );
};
export default Footer;
