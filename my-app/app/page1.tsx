// "use client"

// import React, { useEffect } from 'react';
// import TaskPage from './taskPage';
// import Modal from 'react-modal';

// const HomePage: React.FC = () => {
//   const [modalIsOpen, setModalIsOpen] = React.useState(
//     () => JSON.parse(localStorage.getItem('modalIsOpen') || 'false')
//   );

//   useEffect(() => {
//     localStorage.setItem('modalIsOpen', JSON.stringify(modalIsOpen));
//   }, [modalIsOpen]);

//   const navigateToPage = () => {
//     setModalIsOpen(true);
//   };
//   // const [showTaskPage, setShowTaskPage] = React.useState(false);

//     // const navigateToPage = () => {
//   //   setShowTaskPage(true);
//   // };
// //   return (
// //     <div className="flex items-center justify-center h-screen bg-gray-100">
// //       {showTaskPage ? <TaskPage /> : (
// //         <div className="text-center">
// //           <h1 className="text-5xl font-bold mb-6">
// //             : <span className="text-blue-600">Open Calendar?</span>
// //           </h1>
// //           <p className="mb-10 text-gray-700">
// //             By: Hamza, 
// //           </p>
// //           <button
// //             onClick={navigateToPage}
// //             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out"
// //           >
// //             Enter!
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// return (
//   <div className="flex items-center justify-center h-screen bg-gray-100">
//     <div className="text-center">
//       <h1 className="text-5xl font-bold mb-6">
//         zzz <span className="text-blue-600">wonderful</span>
//       </h1>
//       <p className="mb-10 text-gray-700">
//         zzz
//       </p>
//       <button
//         onClick={navigateToPage}
//         className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out"
//       >
//         Open Page
//       </button>
//     </div>
//     <Modal
//       isOpen={modalIsOpen}
//       onRequestClose={() => setModalIsOpen(false)}
//       contentLabel="Task Page"
//     >
//       <TaskPage />
//     </Modal>
//   </div>
// );
// };
// export default HomePage;

"use client"
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskPage from './page';
import { ThemeProvider } from '@/context/ThemeContext';
import ClientThemeWrapper from '@/context/ClientThemeWrapper';
import Dropdown from '@/components/Dropdown';
import Tutorial from '@/components/Tutorial';

const HomePage: React.FC = () => {
  return (
    <ThemeProvider>
    <ClientThemeWrapper>
    
    <div className=""><Dropdown /> </div>
   
    
<div className="flex flex-col items-center justify-center h-screen">
  <div className="text-center">
    <div className="flex justify-center items-center mb-4">
      <img src="/cal.png" alt="Logo" />
    </div>
    <h1 className="text-3xl font-bold mb-6">WELCOME TO THE TASKMANAGEMENT WEB APP!</h1>
    <p className="mb-6">Hamza, Nia, Safiya, Dan, Conor, Akhil.</p>
    <Link to="/tasks">
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
      >
        Enter
      </button>
    </Link>
  </div>
  </div>

</ClientThemeWrapper>
      </ThemeProvider>

  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
    </Router>
  );
};

export default App;
// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import TaskPage from './taskPage';

// const HomePage: React.FC = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-white">
//       <div className="text-center">
//         <div className="mb-4">
//           <img src="/path-to-your-logo.png" alt="Logo" />
//         </div>
//         <h1 className="text-3xl font-bold mb-6">WELCOME TO THE TASKMANAGEMENT WEB APP</h1>
//         <p className="mb-6">Hamza, Nia, Safiya, Dan, Conor, Akhil.</p>
//         <button
//           onClick={openModal}
//           className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
//         >
//           Enter
//         </button>
//       </div>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         contentLabel="Task Page"
//         // Add your modal styling here
//       >
//         <TaskPage />
//       </Modal>
//     </div>
//   );
// };

// export default HomePage;

// 'use client'
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import TaskPage from './taskPage';

// const HomePage: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={
//           <div className="flex flex-col items-center justify-center h-screen bg-white">
//             <div className="text-center">
//               <div className="mb-4">
//                 <img src="/path-to-your-logo.png" alt="Logo" />
//               </div>
//               <h1 className="text-3xl font-bold mb-6">WELCOME TO THE TASKMANAGEMENT WEB APP</h1>
//               <p className="mb-6">Hamza, Nia, Safiya, Dan, Conor, Akhil.</p>
//               <Link to="/tasks">
//                 <button
//                   className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
//                 >
//                   Enter
//                 </button>
//               </Link>
//             </div>
//           </div>
//         } />
//         <Route path="/tasks" element={<TaskPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default HomePage;