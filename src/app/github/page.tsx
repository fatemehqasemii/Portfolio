import Activity from "public/icons/activity.svg";
import CardGitHub from "../_components/card-github/card";

const GitHub: React.FC = () => {
  return (
    <div className=" p-0 sm:p-5 flex flex-col gap-6 overflow-y-auto h-full ">
      <div className="bg-[#1f2428] ">
        <div className="flex text-sm py-3 sm:py-0 sm:text-xl sm:flex-row flex-col font-bold text-gray-300 gap-5 items-center justify-center h-fit sm:h-[100px]">
          <p>fatemehqasemii</p>
          <p className="text-3xl text-blue-600">|</p>
          <p>20 repos</p>
          <p className="text-3xl text-blue-600">|</p>
          <p>3 followers</p>
        </div>
      </div>
      <div className="grid grid-cols-16 gap-6 ">
        <CardGitHub />
      </div>
      <div className="flex flex-col gap-0 sm:gap-2 ">
        <Activity className="stroke-none w-[230px] sm:w-auto h-[50px] sm:h-auto" />
        <p className="text-[8px] sm:text-sm font-bold">
          46 contributions in the last year
        </p>
      </div>
    </div>
  );
};
export default GitHub;
