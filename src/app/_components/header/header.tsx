import Image from "next/image";

const Header: React.FC = () => {
  const navList = [
    { name: "File" },
    { name: "Edit" },
    { name: "Selection" },
    { name: "View" },
    { name: "Go" },
    { name: "Run" },
    { name: "Terminal" },
    { name: "Help" },
  ];
  return (
    <div className="px-4 flex">
      <div>
        <Image
          src="/icons/VS-Code.svg"
          alt="logo"
          width={15}
          height={15}
          className="w-4 h-4  md:w-5 md:h-5"
        />
        <ul className="text-sm text-gray-300 flex">
          {navList?.map((items, index) => (
            <li key={index} className="cursor-pointer">
              {items?.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="">
          <h5 className="text-sm text-gray-300">
            Fatemeh Qasemi - Visual Studio Code
          </h5>
        </div>
      </div>
      <div>
        <span className="w-2 h-2 bg-[#f1fa8c] rounded-full"></span>
        <span className="w-2 h-2 bg-[#50fa7b] rounded-full"></span>
        <span className="w-2 h-2 bg-red-700 rounded-full"></span>
      </div>
    </div>
  );
};
export default Header;
// <div className="h-10 w-full md:px-4 px-8 border-b border-gray-900 shadow shadow-gray-900/50 flex items-center justify-between">
//   <div className="flex items-center">
//     <Image src="/icons/VS-Code.svg" alt="logo" width={15} height={15} />
//     <ul className="hidden 900px:flex md:gap-6 gap-3 md:text-sm text-[10px] text-gray-100">
//       {navList?.map((items, index) => (
//         <li key={index} className="cursor-pointer">
//           {items?.name}
//         </li>
//       ))}
//     </ul>
//   </div>
//   <div className="">
//     <div className="w-[200px] md:w-[500px] h-6 rounded-lg border border-gray-600 bg-gray-800 flex justify-center items-center text-gray-100 md:text-sm text-[10px]">
//       <h4>Fatemeh Qasemi - Visual Studio Code</h4>
//     </div>
//   </div>
//   <div className="flex gap-2">
//     <span className="md:w-4 md:h-4 w-2 h-2 bg-[#f1fa8c] rounded-full"></span>
//     <span className="md:w-4 md:h-4 w-2 h-2 bg-[#50fa7b] rounded-full"></span>
//     <span className="md:w-4 md:h-4 w-2 h-2 bg-red-700 rounded-full"></span>
//   </div>
// </div>
