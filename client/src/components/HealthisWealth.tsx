import { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
// import Footer from './Footer';
import Header from './Header';
 /*This was an update suggested by copilot, very similar, but may be a bit easier to set up/modify:
 import { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import AddNote from './pages/AddNote';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
// import Footer from './Footer';
import Header from './Header';

export default function HealthIsWealth() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'AddNote':
        return <AddNote />;
      case 'Profile':
        return <Profile />;
      case 'Settings':
        return <Settings />;
      default:
        return <Home />; // Fallback to Home page if the currentPage value is not recognized
    }
  };

  const handlePageChange = (page: string) => setCurrentPage(page);

  return (
    <>
//       {/* Optionally pass currentPage and handlePageChange to Header */}
//       <Header currentPage={currentPage} handlePageChange={handlePageChange} />

//       <main className="my-4">{renderPage()}</main>
//       {/* Uncomment Footer if needed */}
//       {/* <Footer className="Footer" /> */}
//     </>
//   );
// }



export default function HealthIsWealth() {
  const [currentPage, setCurrentPage] = useState('AddNote');
  // TODO: change useState to Home after more pages are running and navbar is functional


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    
    
    if (currentPage === 'AddNote') {
    return <AddNote />;
    }
  };

  const handlePageChange = (page: string) => setCurrentPage(page);

  return (
    <>
      
      {/* <Header currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      <Header />
     
      <main className="my-4">{renderPage()}</main>
      {/* <Footer className="Footer"></Footer> */}
    </>
  );
}