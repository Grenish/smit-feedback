import React, { useState } from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleSidebar = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
    Hello, World!
    </>
  );
};

export default Sidebar;
