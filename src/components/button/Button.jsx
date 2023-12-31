import React from 'react'
import styles from "./button.module.css"
import Link from "next/link";


function Button({title}) {
  return (
    <Link href={"/"}>
    <button classname={styles.button}>
      title
    </button>
    </Link>
  )
}

export default Button