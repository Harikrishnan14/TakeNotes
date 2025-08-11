import React from 'react'

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-lg w-full max-w-md relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex items-center justify-between px-4 py-2 border-b border-amber-900 bg-yellow-500'>
                    <h5 className='text-amber-900 text-sm font-bold'>Add Notes</h5>
                    <div className='flex items-center justify-center gap-1'>
                        <button
                            className="text-red-500 hover:text-red-700 text-xl font-bold cursor-pointer transition ease-in"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                    </div>
                </div>
                <div className='p-6'>
                    <input type="text" id='name' name='name' placeholder='Name' className='border-2 border-amber-900 p-2 bg-white w-full rounded-xl text-sm mb-4' />
                    <textarea name="desc" id="desc" placeholder='Description' className='border-2 border-amber-900 p-2 bg-white w-full rounded-xl text-sm mb-4 h-[200px] resize-none' />
                    <div className='flex items-center justify-end gap-5'>
                        <button className='p-2 bg-green-300 rounded-lg w-[125px] text-white cursor-pointer hover:bg-green-500 transition ease-in'>Add</button>
                        <button className='p-2 bg-red-300 rounded-lg w-[125px] text-white cursor-pointer hover:bg-red-500 transition ease-in' onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal