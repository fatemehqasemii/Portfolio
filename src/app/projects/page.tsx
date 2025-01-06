import Image from "next/image";
import Activity from "public/images/shape.svg";

const Project: React.FC = () => {
  return (
    <div className="p-5 flex flex-col h-full gap-6">
      {/* <div> */}
      <h1>Stuff I've Built So Far</h1>
      {/* </div> */}
      <div className="grid grid-cols-16 gap-6">
        <div className="flex flex-col rounded bg-[#1f2428] gap-6">
          <div>
            <Image src="images/shape.svg" width={100} height={100} alt="text" />
          </div>
          <div className="p-8">
            <h3>NFT Marketplace</h3>
            <p>
              This is a fullstack DApp NFT Marketplace built as a study project
              to learn more about blockchain and smart contract development.
              Made with NodeJS, Hardhat, Solidity, ReactJS, NextJS and Vercel.s
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded bg-[#1f2428] gap-6">
          <div className="w-full flex items-center justify-center">
            <Image
              src="images/shape.svg"
              width={100}
              height={100}
              alt="text"
              className=""
            />
          </div>
          <div className="p-8">
            <h3>NFT Marketplace</h3>
            <p>
              This is a fullstack DApp NFT Marketplace built as a study project
              to learn more about blockchain and smart contract development.
              Made with NodeJS, Hardhat, Solidity, ReactJS, NextJS and Vercel.s
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded bg-[#1f2428] gap-6">
          <div>
            <Image src="images/shape.svg" width={100} height={100} alt="text" />
          </div>
          <div className="p-8">
            <h3>NFT Marketplace</h3>
            <p>
              This is a fullstack DApp NFT Marketplace built as a study project
              to learn more about blockchain and smart contract development.
              Made with NodeJS, Hardhat, Solidity, ReactJS, NextJS and Vercel.s
            </p>
          </div>
        </div>
        <div className="flex flex-col rounded bg-[#1f2428] gap-6">
          <div>
            <Image src="images/shape.svg" width={100} height={100} alt="text" />
          </div>
          <div className="p-8">
            <h3>NFT Marketplace</h3>
            <p>
              This is a fullstack DApp NFT Marketplace built as a study project
              to learn more about blockchain and smart contract development.
              Made with NodeJS, Hardhat, Solidity, ReactJS, NextJS and Vercel.s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
