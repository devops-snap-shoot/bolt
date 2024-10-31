import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <MainContent isCollapsed={isCollapsed} />
    </div>
  );
}