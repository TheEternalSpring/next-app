import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

function Blog() {
  return (
    <div className={styles.mainContent}>
      This is Blog Page
      <Link href={"/blog/123"} className={styles.minorContent}>
        <div className={styles.imagecunt}>
          <Image src="https://images.pexels.com/photos/19329504/pexels-photo-19329504/free-photo-of-black-and-white-photo-of-a-mountain-in-the-distance.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={400} height={200} className={styles.theImagetheman}/>
        </div>
        <h1 className={styles.title}>Blog of us</h1>
        <p className={styles.desc}>
          please add more details Aaaaron
        </p>
      </Link>
    </div>
  )
}

export default Blog