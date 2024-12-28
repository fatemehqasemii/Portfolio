import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 py-2">
      <div>
        <Image src="/VS-Code.svg" alt="logo" width={500} height={500} />
      </div>
    </header>
  );
};
export default Header;
