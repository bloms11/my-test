import { useEffect, useState } from "react";
import "./App.css";
import { CgMenuRight } from "react-icons/cg";
import { PiTooth } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { MdArrowDownward } from "react-icons/md";
import { CiInstagram } from "react-icons/ci";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { FaFan } from "react-icons/fa";
import { PiAtomThin } from "react-icons/pi";
import { PiDnaLight } from "react-icons/pi";
import { PiToothThin } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.jpg";
import img11 from "./assets/11.jpg";

import { useInView } from "react-intersection-observer";
function App() {
  const containerRef = useRef(null);
  const containerRefTwo = useRef(null);

  const controls = useAnimation();
  const controlsTwo = useAnimation();
  const controlsThree = useAnimation();

  const stackedCardsAnimationProps = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 0.1 },
  };

  // Animation properties for Card 1
  const card1AnimationProps = {
    initial: { rotate: -2, y: -200, opacity: 1 },
    animate: { rotate: -50, y: -1100, opacity: 1 },
    transition: { duration: 0.5, delay: 2 },
  };

  // Animation properties for Card 2
  const card2AnimationProps = {
    initial: { rotate: -11, y: -200, opacity: 1 },
    animate: { rotate: -50, y: -1100, opacity: 1 },
    transition: { duration: 0.5, delay: 3 },
  };

  // Animation properties for Card 3
  const card3AnimationProps = {
    initial: { rotate: -18, y: -200, opacity: 1 },
    animate: { rotate: -50, y: -1100, opacity: 1 },
    transition: { duration: 0.5, delay: 4 },
  };

  // Animation properties for Card 4
  const card4AnimationProps = {
    initial: { rotate: -24, y: -200, opacity: 1 },
    animate: { rotate: -50, y: -1100, opacity: 1 },
    transition: { duration: 0.5, delay: 5 },
  };
  const headerControls = useAnimation();
  const assistanceControls = useAnimation();
  const dentalControls = useAnimation();
  const fanControls = useAnimation();
  const careControls = useAnimation();

  const headerAnimation = {
    initial: { x: 120, opacity: 0 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 8 },
  };

  const assisstanceAnimation = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5, delay: 1.3 },
  };

  const dentalAnimation = {
    initial: { x: -200 },
    animate: { x: 0 },
    transition: { duration: 0.5, delay: 1 },
  };
  const fanAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 1.3, duration: 0.5 },
  };

  const careAnimation = {
    initial: { x: -200 },
    animate: { x: 0 },
    transition: { duration: 0.5, delay: 1 },
  };

  const { ref: refOne, inView: inViewOne } = useInView();
  useEffect(() => {
    if (inViewOne) {
      headerControls.start(headerAnimation);
      assistanceControls.start(assisstanceAnimation);
      dentalControls.start(dentalAnimation);
      careControls.start(careAnimation);
      fanControls.start(fanAnimation);
    }
  }, [inViewOne]);

  // For the second section
  const { ref: refTwo, inView: inViewTwo } = useInView();
  useEffect(() => {
    if (inViewTwo) {
      console.log("ddd");
    }
  }, [inViewTwo]);

  // For the third section

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          y: -1600, // Adjust the value for the distance you want the cards to move
          transition: { duration: 10, ease: "linear" }, // Adjust duration for speed
        });
        controls.set({ y: 0 }); // Reset position
      }
    };

    animate();

    return () => controls.stop();
  }, [controls]);

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controlsTwo.start({
          y: -1600, // Adjust the value for the distance you want the cards to move
          transition: { duration: 8, ease: "linear" }, // Adjust duration for speed
        });
        controlsTwo.set({ y: 0 }); // Reset position
      }
    };

    animate();

    return () => controlsTwo.stop();
  }, [controlsTwo]);

  return (
    <div className=" snap-y snap-mandatory h-screen w-screen overflow-x-hidden">
      <div className="flex snap-start"></div>
      <div
        ref={refOne}
        className="snap-start relative h-screen w-screen flex flex-col justify-between"
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="stacked-cards-container overflow-hidden left-[20%] xl:left-[30%] flex flex-col items-center justify-center w-[680px] h-[100%] z-[700]"
          style={{
            position: "absolute",
            top: -60,
            // left: "30%",
            // transform: "translate(-50%, -50%)",
          }}
        >
          {" "}
          <motion.div
            initial={{ rotate: -2, y: -200, opacity: 1 }}
            animate={{ rotate: -50, y: -1100, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="card absolute top-1/2 left-40 transform -translate-x-1/2 -translate-y-1/2 z-[600]"
            // style={{ backgroundColor: "#FFD700" }}
          >
            <img className=" object-cover w-full h-full" src={img9} />
          </motion.div>
          <motion.div
            initial={{ rotate: -11, y: -200, opacity: 1 }}
            animate={{ rotate: -50, y: -1100, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3 }}
            className="card absolute top-1/2 left-40 transform -translate-x-1/2 -translate-y-1/2  bg-fuchsia-700 mr-[2%] z-30"
            // style={{ rotate: "-11deg" }}
          >
            <img className=" object-cover w-full h-full" src={img8} />
          </motion.div>
          <motion.div
            initial={{ rotate: -18, y: -200, opacity: 1 }}
            animate={{ rotate: -50, y: -1100, opacity: 1 }}
            transition={{ duration: 0.5, delay: 4 }}
            className="card absolute top-1/2 left-40 transform -translate-x-1/2 -translate-y-1/2 -rotate-[16deg] bg-orange-700 mr-[3%] z-20"
            // style={{ rotate: "-18deg" }}
          >
            <img className=" object-cover w-full h-full" src={img7} />
          </motion.div>
          <motion.div
            initial={{ rotate: -24, y: -200, opacity: 1 }}
            animate={{ rotate: -50, y: -1100, opacity: 1 }}
            transition={{ duration: 0.5, delay: 5 }}
            className="card absolute top-1/2 left-40 transform -translate-x-1/2 -translate-y-1/2 -rotate-[22deg] bg-teal-700 mr-[4%] z-10"
            // style={{ rotate: "-24deg" }}
          >
            <img className=" object-cover w-full h-full" src={img6} />
          </motion.div>
        </motion.div>

        {/* NAVBAR */}
        <div className="flex w-full justify-between p-4 px-10 fixed">
          <div className="flex items-center">
            <h4 className=" border-[grey] rounded-full p-2 px-4 text-[14px] border-2">
              {" "}
              Menu
            </h4>
            <div className="flex items-center justify-center p-2 rounded-full border-2 border-[grey]">
              <CgMenuRight size={12} />
            </div>
          </div>
          <div className="flex items-center w-[30%] justify-center gap-x-2">
            <motion.div
              className="flex p-1 z-50 rounded-full bg-[#ff3300]"
              initial={{ opacity: 1, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
            >
              <PiTooth size={20} color="white" />
            </motion.div>
            <motion.h4
              className="font-[500] -z-10"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: -1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              DENTYTECH
            </motion.h4>
          </div>{" "}
          <div className="flex">
            <p className="flex items-center justify-center  border-[grey] border-2 p-1 text-[14px] rounded-full px-4">
              Log in
            </p>
            <p className="bg-[#ff3300] text-white flex items-center justify-center p-1 text-[14px] rounded-full px-4">
              Sign up
            </p>
          </div>
        </div>
        {/* <div className="flex"></div> */}
        <div className="flex h-[100%] mt-8 relative">
          <motion.h1
            className="mx-auto text-[100px] xl:text-[170px] font-[400] flex items-center justify-center"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            OUR ADVANTAGES
          </motion.h1>
        </div>
        <div className="flex p-8 w-full justify-between">
          <div className="flex flex-col">
            <GoDotFill className="mb-2" color="#ff3300" size={10} />
            <p>Your Smile, Our Passion</p>
          </div>
          <div className="flex items-center justify-center border-t-4 border-[#7d7d7d]  w-[70px] h-[70px] rounded-full">
            <motion.div
              animate={{
                y: [0, -10, 0],
                transition: { duration: 1.5, repeat: Infinity },
              }}
            >
              <MdArrowDownward color="grey" size={28} />
            </motion.div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-x-4 justify-end py-2">
              <CiInstagram color="#454444" size={20} />
              <SlSocialYoutube color="#454444" size={20} />
              <SlSocialFacebook color="#454444" size={20} />
            </div>
            <p>Best Startup of 2023</p>
          </div>
        </div>
      </div>
      <div
        ref={refTwo}
        className="snap-start py-4 h-screen w-screen flex-col items-center justify-between flex"
      >
        <div className="flex"></div>
        <div className="px-20 flex flex-col">
          <div className="flex items-center gap-x-8 overflow-hidden">
            <motion.h1
              {...headerAnimation}
              className="text-[70px] xl:text-[90px] font-[400] "
            >
              REVOLUTIONIZING
            </motion.h1>
            <motion.div className="flex flex-col">
              <div className="flex gap-x-1  py-2">
                <div className="flex items-center bg-[#e1eef5] justify-center rounded-full p-2">
                  <CiInstagram color="#ff3300" size={16} />
                </div>
                <div className="flex items-center bg-[#e1eef5] justify-center rounded-full p-2">
                  <SlSocialYoutube color="#ff3300" size={16} />
                </div>
                <div className="flex items-center bg-[#e1eef5] justify-center rounded-full p-2">
                  <SlSocialFacebook color="#ff3300" size={16} />
                </div>
              </div>
              <p className="text-[17px] font-[500]">Modern Solution</p>
              <p className="text-[17px] font-[500]">Timeless Smiles</p>
            </motion.div>
          </div>
          <div className="flex  w-[100%] px-2  justify-between items-center">
            <motion.div
              {...assisstanceAnimation}
              className="flex items-center gap-x-4"
            >
              <h4 className="font-[500] text-[#ff3300] p-2 rounded-full px-4  bg-[#e1eef5]">
                ASSISTANCE
              </h4>

              <div className="flex p-2 rounded-full bg-[#ff3300]">
                <PiTooth size={34} color="white" />
              </div>
            </motion.div>
            <motion.h1
              {...dentalAnimation}
              className=" text-[90px] font-[400] "
            >
              DENTAL
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="flex rounded-full bg-[#e1eef5] p-4"
            >
              <FaFan color="#ff3300" size={34} />
            </motion.div>
            <motion.h1 {...careAnimation} className=" text-[90px] font-[400] ">
              CARE
            </motion.h1>
          </div>
          <div className="flex items-center">
            <h1 className=" text-[90px] font-[400] ">WITH TECHNOLOGY</h1>
          </div>
        </div>
        <div className="flex px-8 w-full items-center justify-between">
          <div className="flex flex-col">
            <GoDotFill className="mb-2" color="#ff3300" size={10} />
            <p>Your Smile, Our Passion</p>
          </div>
          <div className="flex items-center justify-center border-b-2 border-[#ff3300]  w-[100px] h-[100px] rounded-full">
            <div className="flex rounded-full items-center justify-center w-[85px] h-[85px] bg-[#ff3300] text-center">
              <p className="text-white text-[14px] font-[700]">GET STARTED</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-x-4 justify-end py-2">
              <CiInstagram color="#454444" size={20} />
              <SlSocialYoutube color="#454444" size={20} />
              <SlSocialFacebook color="#454444" size={20} />
            </div>
            <p>Best Startup of 2023</p>
          </div>
        </div>
      </div>
      <div
        // ref={refThree}
        className="snap-start px-10 overflow-hidden h-screen w-screen grid grid-cols-2 gap-x-10"
      >
        <div className="flex mt-[14%] h-max flex-col">
          <div className="flex gap-x-1  py-2">
            <div className="flex items-center bg-[#e1eef5] overflow-hidden justify-center rounded-full p-2">
              <PiDnaLight color="#ff3300" size={24} />
            </div>
            <div className="flex items-center bg-[#e1eef5] justify-center rounded-full p-2">
              <PiToothThin color="#ff3300" size={24} />
            </div>
            <div className="flex items-center bg-[#e1eef5] justify-center rounded-full p-2">
              <PiAtomThin color="#ff3300" size={24} />
            </div>
          </div>
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[80px] font-[400]"
          >
            EXPLORE OUR <br /> SERVICE, MAKE <br /> YOUR SMILE SHINE
          </motion.h1>
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex mt-6 gap-x-4"
          >
            <p className="bg-[#ff3300] text-white flex items-center justify-center p-2 text-[14px] font-[500] rounded-full px-4">
              Get The App
            </p>

            <p className="flex items-center justify-center  border-[grey] border-2 p-2 text-[14px] font-[500] rounded-full px-4">
              Meet The Team
            </p>
          </motion.div>
          <div className="flex mt-[20%] w-full items-center justify-between">
            <div className="flex flex-col">
              <GoDotFill className="mb-2" color="#ff3300" size={10} />
              <p>Your Smile, Our Passion</p>
            </div>
            <div className="flex flex-col ">
              <div className="flex gap-x-4 justify-end py-2">
                <CiInstagram color="#454444" size={20} />
                <SlSocialYoutube color="#454444" size={20} />
                <SlSocialFacebook color="#454444" size={20} />
              </div>
              <p>Best Startup of 2023</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <div
            ref={containerRef}
            className="items-center overflow-hidden h-full relative"
            style={{ height: "100%" }}
          >
            <motion.div
              animate={controls}
              className="absolute w-full"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <motion.div
                className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"
                style={{ y: 0 }}
              >
                <img className=" object-cover w-full h-full" src={img5} />
              </motion.div>
              <motion.div
                className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"
                style={{ y: 0 }}
              >
                <img className=" object-cover w-full h-full" src={img6} />
              </motion.div>
              <motion.div
                className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"
                style={{ y: 0 }}
              >
                <img className=" object-cover w-full h-full" src={img7} />
              </motion.div>
              <motion.div
                className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"
                style={{ y: 0 }}
              >
                <img className=" object-cover w-full h-full" src={img8} />
              </motion.div>
              <motion.div
                className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"
                style={{ y: 0 }}
              >
                <img className=" object-cover w-full h-full" src={img9} />
              </motion.div>

              <motion.div
                className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"
                style={{ y: 0 }}
              >
                <img className=" object-cover w-full h-full" src={img10} />
              </motion.div>
            </motion.div>
          </div>{" "}
          <div
            ref={containerRefTwo}
            className="items-center overflow-hidden h-full relative"
            style={{ height: "100%" }}
          >
            <motion.div
              animate={controlsTwo}
              className="absolute w-full"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <motion.div
                className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"
                style={{ y: 0 }}
              >
                <img className=" object-cover w-full h-full" src={img11} />
              </motion.div>
              <motion.div
                className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"
                style={{ y: 0 }}
              >
                <img className=" object-cover w-full h-full" src={img1} />
              </motion.div>
              <motion.div
                className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"
                style={{ y: 0 }}
              >
                <img className=" object-cover w-full h-full" src={img2} />
              </motion.div>
              <motion.div
                className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"
                style={{ y: 0 }}
              >
                <img className=" object-cover w-full h-full" src={img3} />
              </motion.div>
              <motion.div
                className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"
                style={{ y: 0 }}
              >
                <img className=" object-cover w-full h-full" src={img4} />
              </motion.div>
              <motion.div
                className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"
                style={{ y: 0 }}
              >
                <img className=" object-cover w-full h-full" src={img8} />
              </motion.div>
            </motion.div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
