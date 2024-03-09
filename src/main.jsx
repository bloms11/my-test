import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// import { useEffect, useState } from "react";
// import "./App.css";
// import { CgMenuRight } from "react-icons/cg";
// import { PiTooth } from "react-icons/pi";
// import { GoDotFill } from "react-icons/go";
// import { MdArrowDownward } from "react-icons/md";
// import { CiInstagram } from "react-icons/ci";
// import { SlSocialYoutube } from "react-icons/sl";
// import { SlSocialFacebook } from "react-icons/sl";
// import { FaFan } from "react-icons/fa";
// import { PiAtomThin } from "react-icons/pi";
// import { PiDnaLight } from "react-icons/pi";
// import { PiToothThin } from "react-icons/pi";
// import { motion } from "framer-motion";
// function App() {
//   return (
//     <div className=" snap-y snap-mandatory h-screen w-screen overflow-x-hidden">
//       <div className="snap-start h-screen w-screen flex flex-col justify-between">
//         {/* NAVBAR */}
//         <div className="flex w-full justify-between p-4 px-10 fixed">
//           <div className="flex items-center">
//             <h4 className=" border-[grey] rounded-full p-2 px-4 text-[14px] border-2">
//               {" "}
//               Menu
//             </h4>
//             <div className="flex items-center justify-center p-2 rounded-full border-2 border-[grey]">
//               <CgMenuRight size={12} />
//             </div>
//           </div>
//           <div className="flex items-center justify-center gap-x-2">
//             <motion.div
//               className="flex p-1 z-50 rounded-full bg-[#ff3300]"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, ease: "linear" }}
//             >
//               <PiTooth size={20} color="white" />
//             </motion.div>
//             <motion.h4
//               className="font-[500] -z-10"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.1, ease: "linear" }}
//             >
//               DENTYTECH
//             </motion.h4>
//           </div>{" "}
//           <div className="flex">
//             <p className="flex items-center justify-center  border-[grey] border-2 p-1 text-[14px] rounded-full px-4">
//               Log in
//             </p>
//             <p className="bg-[#ff3300] text-white flex items-center justify-center p-1 text-[14px] rounded-full px-4">
//               Sign up
//             </p>
//           </div>
//         </div>
//         {/* <div className="flex"></div> */}
//         <div className="flex h-[100%] border-2 border-[red] mt-8 relative">
//           <motion.h1
//             className="mx-auto text-[170px] font-[400] flex items-center justify-center"
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.4 }}
//           >
//             OUR ADVANTAGES
//           </motion.h1>

//           <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="stacked-cards-container overflow-hidden  flex flex-col border-2 items-center justify-center w-[680px] h-[100%]"
//             style={{
//               position: "absolute",
//               top: 60,
//               left: "30%",
//               // transform: "translate(-50%, -50%)",
//             }}
//           >
//             {" "}
//             <motion.div
//               initial={{ y: -200, opacity: 1 }}
//               animate={{ y: -800, opacity: 1 }}
//               transition={{ duration: 0.6, delay: 2 }}
//               className="card absolute top-1/2 left-40 transform -translate-x-1/2 -translate-y-1/2 -rotate-[2deg] bg-yellow-500 z-[600]"
//             >
//               Card 1
//             </motion.div>
//             <div className="card absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-[9deg] bg-fuchsia-700 mr-[2%] z-30">
//               Card 2
//             </div>
//             <div className="card absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-[16deg] bg-orange-700 mr-[3%] z-20">
//               Card 3
//             </div>
//             <div className="card absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-[22deg] bg-teal-700 mr-[4%] z-10">
//               Card 4
//             </div>
//           </motion.div>
//         </div>
//         <div className="flex p-8 w-full justify-between">
//           <div className="flex flex-col">
//             <GoDotFill className="mb-2" color="#ff3300" size={10} />
//             <p>Your Smile, Our Passion</p>
//           </div>
//           <div className="flex items-center justify-center border-t-4 border-[#7d7d7d]  w-[70px] h-[70px] rounded-full">
//             <motion.div
//               animate={{
//                 y: [0, -10, 0],
//                 transition: { duration: 1.5, repeat: Infinity },
//               }}
//             >
//               <MdArrowDownward color="grey" size={28} />
//             </motion.div>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex gap-x-4 justify-end py-2">
//               <CiInstagram color="#454444" size={20} />
//               <SlSocialYoutube color="#454444" size={20} />
//               <SlSocialFacebook color="#454444" size={20} />
//             </div>
//             <p>Best Startup of 2023</p>
//           </div>
//         </div>
//       </div>
//       <div className="snap-start py-4 h-screen w-screen flex-col items-center justify-between flex">
//         <div className="flex"></div>
//         <div className="  flex flex-col">
//           <div className="flex items-center gap-x-8">
//             <h1 className=" text-[90px] font-[400] ">REVOLUTIONIZING</h1>
//             <div className="flex flex-col">
//               <div className="flex gap-x-1  py-2">
//                 <div className="flex items-center bg-[#e1eef5] justify-center rounded-full p-2">
//                   <CiInstagram color="#ff3300" size={16} />
//                 </div>
//                 <div className="flex items-center bg-[#e1eef5] justify-center rounded-full p-2">
//                   <SlSocialYoutube color="#ff3300" size={16} />
//                 </div>
//                 <div className="flex items-center bg-[#e1eef5] justify-center rounded-full p-2">
//                   <SlSocialFacebook color="#ff3300" size={16} />
//                 </div>
//               </div>
//               <p className="text-[17px] font-[500]">Modern Solution</p>
//               <p className="text-[17px] font-[500]">Timeless Smiles</p>
//             </div>
//           </div>
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-x-4">
//               <h4 className="font-[500] text-[#ff3300] p-2 rounded-full px-4  bg-[#e1eef5]">
//                 ASSISTANCE
//               </h4>

//               <div className="flex p-2 rounded-full bg-[#ff3300]">
//                 <PiTooth size={34} color="white" />
//               </div>
//             </div>

//             <h1 className=" text-[90px] font-[400] ">DENTAL</h1>
//             <div className="flex rounded-full bg-[#e1eef5] p-4">
//               <FaFan color="#ff3300" size={34} />
//             </div>
//             <h1 className=" text-[90px] font-[400] ">CARE</h1>
//           </div>
//           <div className="flex items-center">
//             <h1 className=" text-[90px] font-[400] ">WITH TECHNOLOGY</h1>
//           </div>
//         </div>
//         <div className="flex px-8 w-full items-center justify-between">
//           <div className="flex flex-col">
//             <GoDotFill className="mb-2" color="#ff3300" size={10} />
//             <p>Your Smile, Our Passion</p>
//           </div>
//           <div className="flex items-center justify-center border-b-2 border-[#ff3300]  w-[100px] h-[100px] rounded-full">
//             <div className="flex rounded-full items-center justify-center w-[85px] h-[85px] bg-[#ff3300] text-center">
//               <p className="text-white text-[14px] font-[700]">GET STARTED</p>
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <div className="flex gap-x-4 justify-end py-2">
//               <CiInstagram color="#454444" size={20} />
//               <SlSocialYoutube color="#454444" size={20} />
//               <SlSocialFacebook color="#454444" size={20} />
//             </div>
//             <p>Best Startup of 2023</p>
//           </div>
//         </div>
//       </div>
//       <div className="snap-start px-10 h-screen w-screen grid grid-cols-2 gap-x-10">
//         <div className="flex mt-[20%] h-max flex-col">
//           <div className="flex gap-x-1  py-2">
//             <div className="flex items-center bg-[#e1eef5] justify-center rounded-full p-2">
//               <PiDnaLight color="#ff3300" size={24} />
//             </div>
//             <div className="flex items-center bg-[#e1eef5] justify-center rounded-full p-2">
//               <PiToothThin color="#ff3300" size={24} />
//             </div>
//             <div className="flex items-center bg-[#e1eef5] justify-center rounded-full p-2">
//               <PiAtomThin color="#ff3300" size={24} />
//             </div>
//           </div>
//           <h1 className="text-[90px] font-[400]">
//             EXPLORE OUR <br /> SERVICE, MAKE <br /> YOUR SMILE SHINE
//           </h1>
//           <div className="flex mt-6 gap-x-4">
//             <p className="bg-[#ff3300] text-white flex items-center justify-center p-2 text-[14px] font-[500] rounded-full px-4">
//               Get The App
//             </p>

//             <p className="flex items-center justify-center  border-[grey] border-2 p-2 text-[14px] font-[500] rounded-full px-4">
//               Meet The Team
//             </p>
//           </div>
//           <div className="flex mt-[20%] w-full items-center justify-between">
//             <div className="flex flex-col">
//               <GoDotFill className="mb-2" color="#ff3300" size={10} />
//               <p>Your Smile, Our Passion</p>
//             </div>
//             <div className="flex flex-col ">
//               <div className="flex gap-x-4 justify-end py-2">
//                 <CiInstagram color="#454444" size={20} />
//                 <SlSocialYoutube color="#454444" size={20} />
//                 <SlSocialFacebook color="#454444" size={20} />
//               </div>
//               <p>Best Startup of 2023</p>
//             </div>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-x-5">
//           <div className="l items-center overflow-y-visible h-[100%] ">
//             <div className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"></div>
//             <div className="flex mx-auto border-2 bg-green-500 rounded-[20px] w-[95%] h-[400px] my-10"></div>
//             <div className="flex mx-auto border-2 bg-yellow-500 rounded-[20px] w-[95%] h-[400px] my-10"></div>
//             <div className="flex mx-auto border-2 bg-pink-500 rounded-[20px] w-[95%] h-[400px] my-10"></div>
//             <div className="flex mx-auto border-2 bg-purple-500 rounded-[20px] w-[95%] h-[400px] my-10"></div>
//           </div>
//           <div className="l items-center overflow-y-visible h-[100%] ">
//             <div className="flex mx-auto border-2 bg-red-500 rounded-[20px] w-[95%] h-[400px] my-10"></div>
//             <div className="flex mx-auto border-2 bg-orange-500 rounded-[20px] w-[95%] h-[400px] my-10"></div>
//             <div className="flex mx-auto border-2 bg-[lightblue] rounded-[20px] w-[95%] h-[400px] my-10"></div>
//             <div className="flex mx-auto border-2 bg-teal-500 rounded-[20px] w-[95%] h-[400px] my-10"></div>
//             <div className="flex mx-auto border-2 bg-slate-500 rounded-[20px] w-[95%] h-[400px] my-10"></div>
//           </div>
//         </div>
//       </div>
//       <div className="snap-start bg-green-500 h-screen w-screen items-center justify-center flex flex-col">
//         Hello
//       </div>
//     </div>
//   );
// }

// export default App;
