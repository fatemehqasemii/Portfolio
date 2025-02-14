"use client";

const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 text-gray-300 text-justify text-wrap px-5 overflow-auto h-full">
      <div
        className="flex sm:justify-center justify-start
       pb-5 pt-10"
      >
        <h1 className="sm:text-[30px] text-lg font-bold">
          Front-end Developer
        </h1>
      </div>
      <p className="sm:text-justify text-left text-[10px] sm:text-sm md:text-xl md:leading-8">
        I am Fatemeh Qasemi, a front-end developer focused on designing and
        building fast, modern, and reliable web applications.
      </p>
      <p className="sm:text-justify text-left text-[10px] sm:text-sm md:text-xl md:leading-8">
        My experience includes working with tools and frameworks like React and
        Next.js to create visually appealing and interactive user interfaces. In
        my projects, I strive to deliver practical and creative solutions that
        align with user needs and business goals.
      </p>
      <p className="sm:text-justify text-left text-[10px] sm:text-sm md:text-xl md:leading-8">
        So far, I have participated in various projects, including designing
        complex user interfaces and developing custom web applications. Learning
        and improving my skills has always been an essential part of my
        professional journey, and new challenges are my main source of
        motivation.
      </p>
      <p className="sm:text-justify text-left text-[10px] sm:text-sm md:text-xl md:leading-8">
        I am looking to collaborate on projects that provide opportunities for
        learning, professional growth, and creating innovation.
      </p>
    </div>
  );
};
export default About;
