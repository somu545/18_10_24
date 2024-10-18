import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function DetailsPage() {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => setShowProfile((prev) => !prev);

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6 box-border relative">
      <div className="w-full h-full bg-gray-200 rounded-lg flex flex-col lg:flex-row overflow-hidden lg:h-[93vh]">
        
        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden absolute top-4 right-4 z-10">
          <button onClick={toggleProfile} className="bg-gray-300 p-2 rounded">
            {showProfile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Main Content Section */}
        <div className="bg-white bg-cover bg-center shadow-md lg:mr-8 flex-grow p-8 rounded-lg mb-8 lg:mb-0 flex flex-col justify-between bg-[url('/src/assets/image2.svg')]">
          <div>
            <h1 className="text-black text-2xl font-bold mb-6">Account Details</h1>
            
            <section className="mb-6">
              <div className="flex justify-between items-center mb-2 border-b border-black">
                <h2 className="text-xl text-cyan-400 font-semibold">Personal Details</h2>
              </div>
              <div className="flex flex-col gap-2 text-black">
                <p><strong>Name:</strong> Kartik Dubey</p>
                <p><strong>Address:</strong> Biswa Bangla Sarani, Rajarhat, Action Area III, Kolkata, 700159</p>
              </div>
            </section>
            
            <section className="mb-6">
              <div className="flex justify-between items-center mb-2 border-b border-black">
                <h2 className="text-xl text-cyan-400 font-semibold">Contact Details</h2>
              </div>
              <div className="flex flex-col gap-2 text-black">
                <p><strong>Phone No.:</strong> 9123456789 <span className="bg-blue-100 text-cyan-400 text-xs px-1 rounded">Primary</span></p>
                <p><strong>Email:</strong> Kartikdubey11234@gmail.com <span className="bg-blue-100 text-cyan-400 text-xs px-1 rounded">Primary</span></p>
                <p><strong>Secondary Phone No.:</strong> 9123456789</p>
                <p><strong>Secondary Email:</strong> -</p>
              </div>
            </section>

            {/* Account Section - Always visible on large screens */}
            <section className="mb-6">
              <div className="flex justify-between items-center mb-2 border-b border-black">
                <h2 className="text-xl text-cyan-400 font-semibold">Account Settings</h2>
              </div>
              <div className="flex flex-col gap-2 text-black">
                <p><strong>Account Type:</strong> Premium</p>
                <p><strong>Joined On:</strong> January 1, 2021</p>
              </div>
            </section>
          </div>
          
          <div className="flex justify-end gap-4 mt-8">
            <button className="px-4 py-2 rounded-md font-medium bg-gray-200 text-black hover:bg-gray-300 transition-colors">Cancel</button>
            <button className="px-4 py-2 rounded-md font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors">Apply Changes</button>
          </div>
        </div>

        {/* Profile Section - Always visible on Large Screens */}
        <div className="hidden lg:block w-80 bg-white shadow-md p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            <img src="/src/assets/dp.jpeg" alt="Profile" className="w-32 h-32 rounded-full object-cover" />
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

        {/* Profile Section - Overlay for Small Screens */}
        {showProfile && (
          <div className="fixed inset-0 backdrop-blur-sm bg-opacity-60 z-20 flex justify-center items-center lg:hidden">
            <div className="bg-white rounded-lg shadow-md w-11/12 md:w-64 p-6 flex flex-col items-center">
              <button onClick={toggleProfile} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
              <div className="flex justify-center mb-4">
                <img src="/src/assets/dp.jpeg" alt="Profile" className="w-32 h-32 rounded-full object-cover" />
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
        )}
      </div>
    </div>
  );
}
