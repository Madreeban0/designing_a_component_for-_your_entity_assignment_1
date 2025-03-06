// import react from 'react';
// import './App.css';
import Usercard from './components/usercard.jsx';
import image from '../src/assets/enhanced profile.jpg'

const App = () => {
  
  const userProfile = {
    photo:{image} , // Replace with actual image URL
    name: "Reeban Austrive",
    mail: "reeban.austrive.s76@kalvium.community",
    phone: "+91 9345038941",
    address: "SNS street, Kalvium, Coimbatore",
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-black">
      <Usercard profile={userProfile}/>
    </div>
  );
};

export default App;
