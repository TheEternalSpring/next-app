import React from "react";
import styles from './navbar.module.css'
//this is just a funny text that sits here and i have wasted ur time trying to find it hehehe
//WHO MUST GO!?

function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Portfolio",
    },
    {
      id: 3,
      title: "Blog",
    },
    {
      id: 4,
      title: "Redundancy Department",
    },
    {
      id: 5,
      title: "Not A Crocodile",
    },
    {
      id: 6,
      title: "Dashboard",
    },
  ];

  return (
    <div className={styles.container}>
      <div>Main</div>
      <div className={styles.links}>
        {links.map((link) => (
          <div>{link.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Navbar