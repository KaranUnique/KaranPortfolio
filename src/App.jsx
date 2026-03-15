import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import FloatingNav from './components/FloatingNav';
import TopNav from './components/TopNav';

function App() {
  return (
    <>
      <TopNav />
      <div className="layout">
        <Sidebar />
        <MainContent />
      </div>
      <FloatingNav />
    </>
  );
}

export default App;
