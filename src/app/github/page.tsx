import Activity from "public/icons/activity.svg";
import Star from "public/icons/star.svg";
import Branch from "public/icons/branch.svg";
import Eye from "public/icons/eye.svg";
import Git from "public/icons/git.svg";
import Pin from "public/icons/pin.svg";

const GitHub: React.FC = () => {
  return (
    <div className="p-5 flex flex-col gap-6 overflow-y-auto h-full ">
      <div className="bg-[#1f2428]">
        <div className="flex text-xl font-bold text-gray-300 gap-5 items-center justify-center h-[100px]">
          <p>fatemehqasemii</p>
          <p className="text-3xl text-blue-600">|</p>
          <p>20 repos</p>
          <p className="text-3xl text-blue-600">|</p>
          <p>3 followers</p>
        </div>
      </div>
      <div className="grid grid-cols-16 gap-6">
        <div className="bg-[#1f2428] p-4 flex gap-3 flex-col justify-between">
          <h1 className="text-xl text-blue-600">angular-algorithmic-trading</h1>
          <p>
            Web app with TD Ameritrade integration, backtesting, and automated
            live trading. Nodejs and Angular
          </p>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Eye className="stroke-blue-600 stroke-1" />
              <p>0</p>
              <Branch className="stroke-blue-600 stroke-1" />
              <p>1</p>
              <Star className="stroke-blue-600 stroke-1" />

              <p>0</p>
            </div>
            <div className="flex items-center gap-2">
              <Git className="stroke-blue-600 stroke-1" />
              <Pin className="stroke-blue-600 stroke-1" />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2428] p-4 flex gap-3 flex-col justify-between">
          <h1 className="text-xl text-blue-600">angular-algorithmic-trading</h1>
          <p>
            Web app with TD Ameritrade integration, backtesting, and automated
            live trading. Nodejs and Angular
          </p>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Eye className="stroke-blue-600 stroke-1" />
              <p>0</p>
              <Branch className="stroke-blue-600 stroke-1" />
              <p>1</p>
              <Star className="stroke-blue-600 stroke-1" />

              <p>0</p>
            </div>
            <div className="flex items-center gap-2">
              <Git className="stroke-blue-600 stroke-1" />
              <Pin className="stroke-blue-600 stroke-1" />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2428] p-4 flex gap-3 flex-col justify-between">
          <h1 className="text-xl text-blue-600">angular-algorithmic-trading</h1>
          <p>
            Web app with TD Ameritrade integration, backtesting, and automated
            live trading. Nodejs and Angular
          </p>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Eye className="stroke-blue-600 stroke-1" />
              <p>0</p>
              <Branch className="stroke-blue-600 stroke-1" />
              <p>1</p>
              <Star className="stroke-blue-600 stroke-1" />

              <p>0</p>
            </div>
            <div className="flex items-center gap-2">
              <Git className="stroke-blue-600 stroke-1" />
              <Pin className="stroke-blue-600 stroke-1" />
            </div>
          </div>
        </div>
        <div className="bg-[#1f2428] p-4 flex gap-3 flex-col justify-between">
          <h1 className="text-xl text-blue-600">angular-algorithmic-trading</h1>
          <p>
            Web app with TD Ameritrade integration, backtesting, and automated
            live trading. Nodejs and Angular
          </p>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Eye className="stroke-blue-600 stroke-1" />
              <p>0</p>
              <Branch className="stroke-blue-600 stroke-1" />
              <p>1</p>
              <Star className="stroke-blue-600 stroke-1" />

              <p>0</p>
            </div>
            <div className="flex items-center gap-2">
              <Git className="stroke-blue-600 stroke-1" />
              <Pin className="stroke-blue-600 stroke-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <Activity className="stroke-none" />
        <p className="text-sm font-bold">46 contributions in the last year</p>
      </div>
    </div>
  );
};
export default GitHub;
