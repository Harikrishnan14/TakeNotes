import BreadCrumb from "@/components/BreadCrumb";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (index) => {
    setIsModalOpen(true);
  };

  return (
    <div className='py-4 px-30 relative'>
       <BreadCrumb title={"My Notes"} />
      <h1 className="font-bold text-2xl text-amber-800 mb-6">Good Morning Deva!</h1>
      <div className='grid grid-cols-4 gap-4 overflow-auto py-1' style={{ height: 'calc(100vh - 180px)' }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            className='border-2 border-amber-900 rounded-lg overflow-hidden w-full h-[235px] bg-white cursor-pointer transition-shadow duration-200 hover:-translate-y-1 hover:shadow-lg'
            key={index.toString()}
            onClick={() => handleCardClick(index)}
          >
            <div className='flex items-center justify-between px-4 py-2 border-b border-amber-900 bg-yellow-500'>
              <h5 className='text-amber-900 text-sm font-bold'>Name</h5>
              <div className='flex items-center justify-center gap-1'>
                <div className='w-2 h-2 rounded-full bg-green-500'></div>
                <div className='w-2 h-2 rounded-full bg-blue-500'></div>
                <div className='w-2 h-2 rounded-full bg-red-500'></div>
              </div>
            </div>
            <div className='p-4 flex flex-col justify-between h-50'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maxime autem iusto atque dolor, nobis enim dolores pariatur quaerat. Nostrum!</p>
              <p className="text-right text-sm">last modified : Sun, 08 Sep 2024</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <button
          className="absolute h-15 w-15 bottom-5 right-5 rounded-full bg-yellow-500 p-3 font-bold text-white shadow-xl cursor-pointer hover:bg-yellow-400 transition ease-in"
          onClick={handleCardClick}
        >
          Add
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}
