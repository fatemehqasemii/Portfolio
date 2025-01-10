import Star from "public/icons/star.svg";
import Branch from "public/icons/branch.svg";
import Eye from "public/icons/eye.svg";
import Git from "public/icons/git.svg";
import Pin from "public/icons/pin.svg";

const CardGitHub = () => {
  const listItem = [
    {
      title: "angular-algorithmic-trading",
      paragraph:
        " Web app with TD Ameritrade integration, backtesting, and automated live trading. Nodejs and Angular",
      eyeDesc: "0",
      branchDesc: "1",
      starDesc: "0",
    },
    {
      title: "angular-algorithmic-trading",
      paragraph:
        " Web app with TD Ameritrade integration, backtesting, and automated live trading. Nodejs and Angular",
      eyeDesc: "0",
      branchDesc: "1",
      starDesc: "0",
    },
    {
      title: "angular-algorithmic-trading",
      paragraph:
        " Web app with TD Ameritrade integration, backtesting, and automated live trading. Nodejs and Angular",
      eyeDesc: "0",
      branchDesc: "1",
      starDesc: "0",
    },
    {
      title: "angular-algorithmic-trading",
      paragraph:
        " Web app with TD Ameritrade integration, backtesting, and automated live trading. Nodejs and Angular",
      eyeDesc: "0",
      branchDesc: "1",
      starDesc: "0",
    },
  ];
  return listItem?.map((item) => (
    <div className="bg-[#1f2428] rounded p-4 flex  flex-col justify-between">
      <h1 className="text-[16px] sm:text-xl text-blue-600">{item?.title}</h1>
      <p className="text-[12px] sm:text-xl">{item.paragraph}</p>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Eye className="stroke-blue-600 stroke-1" />
          <p>{item.eyeDesc}</p>
          <Branch className="stroke-blue-600 stroke-1" />
          <p>{item.branchDesc}</p>
          <Star className="stroke-blue-600 stroke-1" />
          <p>{item.starDesc}</p>
        </div>
        <div className="flex items-center gap-2">
          <Git className="stroke-blue-600 stroke-1" />
          <Pin className="stroke-blue-600 stroke-1" />
        </div>
      </div>
    </div>
  ));
};

export default CardGitHub;
