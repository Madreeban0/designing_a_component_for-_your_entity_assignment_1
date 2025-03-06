// write the component code here
import react from 'react';
import image from '../assets/enhanced profile.jpg';

const ProfileCard = ({ profile }) => {
    return (
      <div className="max-w-sm  bg-gray-100  shadow-lg rounded-lg overflow-hidden border">
        <div className="flex justify-center mt-4">
          <img
            className="w-25 h-25 rounded-full border-4 border-gray-200"
            src={image}
            alt="Profile"
          />
        </div>
        <div className="text-center px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-800">{profile.name}</h2>
          <p className="text-gray-600">{profile.mail}</p>
          <p className="text-gray-600">{profile.phone}</p>
          <p className="text-gray-600">{profile.address}</p>
        </div>
      </div>
    );
   
  };

  

  

  export default ProfileCard;