import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/button/Button'
import Image from 'next/image'


const data = [
  {
    id: 0,
    name: "creative portfolio",
    src: "/skwerl.webp",
    desc: "this is a creative portfolio of our company"
  },
  {
    id: 1,
    name: "radioactive waste",
    src: "/brexit.webp",
    desc: "and this is post brexit uk where we are located"
  },
  {
    id: 2,
    name: "nyehehehe",
    src: "/portfolio.png",
    desc: "pee ur pants"
    
  }
]

function Category({params}) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catistitle}>{params.Category}</h1>
      {data.map((cat) => 
        <div className={styles.item}>
        <div className={styles.content}>
          <h1>{cat.name}</h1>
          <p>
            {cat.desc}
          </p>
          <Button title={"see more"} url={"/"} />
        </div>
        <div className={styles.image}>
          <Image
          className={styles.imga}
          alt="portfolio image"
          fill={true}
          src={cat.src}/>
        </div>
      </div>)}
    </div>
  )
}

export default Category