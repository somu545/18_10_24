import React, { useState } from 'react';

export default function DetailsPage() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6 box-border">
      <div className="w-full h-full bg-gray-200 rounded-lg flex flex-col lg:flex-row overflow-hidden lg:h-[93vh] p-auto">
        <div className="bg-white bg-cover bg-center shadow-md lg:mr-8 flex-grow p-8 rounded-lg mb-8 lg:mb-0 flex flex-col justify-between bg-[url('/src/assets/image2.svg')] ">
          <div>
            <h1 className="text-black text-2xl font-bold mb-6">Account Details</h1>
            
            <section className="mb-6">
              <div className="flex justify-between items-center mb-2 border-b border-black">
                <h2 className="text-xl text-cyan-400 font-semibold">Personal Details</h2>
                <button onClick={() => setEditMode(!editMode)} className="text-gray-500 hover:text-gray-700">   
                  <span className="mr-2">Edit</span>
                  <img src="/src/assets/edit.jpeg" alt="Edit" className="inline-block w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-col gap-2 text-black">
                <p><strong>Name:</strong> Kartik Dubey</p>
                <p><strong>Address:</strong> Biswa Bangla Sarani, Rajarhat, Action Area III, Kolkata, 700159</p>
              </div>
            </section>
            
            <section className="mb-6">
              <div className="flex justify-between items-center mb-2 border-b border-black">
                <h2 className="text-xl text-cyan-400 font-semibold">Contact Details</h2>
                <button onClick={() => setEditMode(!editMode)} className="text-gray-500 hover:text-gray-700">
                  <span className="mr-2">Edit</span>
                  <img src="/src/assets/edit.jpeg" alt="Edit" className="inline-block w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-col gap-2 text-black">
                <p><strong>Phone No.:</strong> 9123456789 <span className="bg-blue-100 text-cyan-400 text-xs px-1 rounded">Primary</span></p>
                <p><strong>Email:</strong> Kartikdubey11234@gmail.com <span className="bg-blue-100 text-cyan-400 text-xs px-1 rounded">Primary</span></p>
                <p><strong>Secondary Phone No.:</strong> 9123456789</p>
                <p><strong>Secondary Email:</strong> -</p>
              </div>
            </section>

            <section className="mb-6">
              <div className="flex justify-between items-center mb-2 border-b border-black">
                <h2 className="text-xl text-cyan-400 font-semibold">Personal Details</h2>
                <button onClick={() => setEditMode(!editMode)} className="text-gray-500 hover:text-gray-700">
                  <span className="mr-2">Edit</span>
                  <img src="/src/assets/edit.jpeg" alt="Edit" className="inline-block w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-col gap-2 text-black">
                <p><strong>Name:</strong> Kartik Dubey</p>
                <p><strong>Address:</strong> Biswa Bangla Sarani, Rajarhat, Action Area III, Kolkata, 700159</p>
              </div>
            </section>
          </div>
          
          <div className="flex justify-end gap-4 mt-8">
            <button className="px-4 py-2 rounded-md font-medium bg-gray-200 text-black hover:bg-gray-300 transition-colors">Cancel</button>
            <button className="px-4 py-2 rounded-md font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors">Apply Changes</button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md w-full lg:w-64 p-6 flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-4">
            <img src="/src/assets/dp.jpeg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <button className="w-full py-2 mb-2 rounded-md text-black bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center">
            <img src="/src/assets/edit.jpeg" alt="Edit" className="w-4 h-4 mr-2" />
            Change Profile Picture  
          </button>
          <button className="w-full py-2 mb-2 text-red-500 bg-transparent hover:text-red-600 transition-colors text-sm border-b border-gray-800">
            Remove Profile Picture
          </button>
          <button className="w-full py-2 mb-2 rounded-md text-black bg-gray-200 hover:bg-gray-300 transition-colors mt-6">
            Change Account Password
          </button>
          <button className="w-full py-2 rounded-md bg-red-100 text-red-500 hover:bg-red-200 transition-colors">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}