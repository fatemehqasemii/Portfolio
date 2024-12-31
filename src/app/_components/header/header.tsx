import Image from "next/image";

const Header: React.FC = () => {
  const navList = [
    { name: "File" },
    { name: "Edit" },
    { name: "View" },
    { name: "Go" },
    { name: "Run" },
    { name: "Terminal" },
    { name: "Help" },
  ];
  return (
    <div className="px-4 flex justify-between border-b border-[#191d20] shadow shadow-gray-900/50 items-center h-10">
      <div className="flex gap-6">
        <Image
          src="/icons/VS-Code.svg"
          alt="logo"
          width={15}
          height={15}
          className="w-4 h-4  md:w-5 md:h-5"
        />
        <ul className="text-sm text-gray-300 md:flex hidden gap-4">
          {navList?.map((items, index) => (
            <li key={index} className="cursor-pointer">
              {items?.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="rounded-lg border border-gray-600 bg-gray-800 w-[200px] h-5 sm:h-6 sm:w-[350px] flex justify-center items-center">
          <h5 className="sm:text-sm text-gray-300 text-[10px]">
            Fatemeh Qasemi - Visual Studio Code
          </h5>
        </div>
      </div>
      <div className="flex gap-1">
        <span className="w-2 h-2 md:w-4 md:h-4 bg-[#f1fa8c] rounded-full"></span>
        <span className="w-2 h-2 md:w-4 md:h-4 bg-[#50fa7b] rounded-full"></span>
        <span className="w-2 h-2 md:w-4 md:h-4 bg-[#f9826c] rounded-full"></span>
      </div>
    </div>
  );
};
export default Header;
