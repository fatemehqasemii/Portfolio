import Link from "next/link";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col px-5 gap-5">
      <div>
        <h1 className="text-xl font-bold">Reach Out Via Socials</h1>
      </div>
      <div className="flex flex-col gap-5 text-xl ">
        <span className="flex items-center">
          <p className="text-[#808080] text-xl">1</p>
          <p className="pl-3 text-blue-600 flex gap-2 text-[20px]">
            <span className="font-bold">.</span>
            socials
            <span className="text-gray-300 font-bold">{`{`}</span>
          </p>
        </span>
        <span className="flex items-center gap-5">
          <p className="text-[#808080] text-xl">2</p>
          <p className="text-gray-300 text-xl pl-4">
            email
            <span className="text-gray-300 text-xl font-bold pl-2">:</span>
          </p>
          <p className=" text-blue-600">
            hello.fatemeh1@gmail.com
            <span className="text-gray-300 text-xl font-bold pl-2">;</span>
          </p>
        </span>
        <span className="flex items-center gap-5">
          <p className="text-[#808080] text-xl">3</p>
          <p className="text-gray-300 text-xl pl-4">
            github
            <span className="text-gray-300 text-xl font-bold pl-2">:</span>
          </p>
          <Link
            href={"https://github.com/fatemehqasemii"}
            className=" text-blue-600"
          >
            fatemehqasemii
            <span className="text-gray-300 text-xl font-bold pl-2">;</span>
          </Link>
        </span>
        <span className="flex items-center gap-5">
          <p className="text-[#808080] text-xl">4</p>
          <p className="text-gray-300 text-xl pl-4">
            linkedin
            <span className="text-gray-300 text-xl font-bold pl-2">:</span>
          </p>
          <Link
            href={"https://www.linkedin.com/in/fatemeh-qasemi-952636217/"}
            className=" text-blue-600"
          >
            fatemeh-qasemi-952636217
            <span className="text-gray-300 text-xl font-bold pl-2">;</span>
          </Link>
        </span>
        <span className="flex items-center gap-5">
          <p className="text-[#808080] text-xl">5</p>
          <span className="text-gray-300 font-bold">{`}`}</span>
        </span>
      </div>
    </div>
  );
};
export default Contact;
