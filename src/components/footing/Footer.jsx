import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.container}>
      <div>all right reserved</div>
      <div className={styles.socialNetworks}>
        <Image src="/1.png" width={15} className={styles.Icon} height={15} alt='Facebook'/>
        <Image src="/2.png" width={15} className={styles.Icon} height={15} alt='Instagram'/>
        <Image src="/3.png" width={15} className={styles.Icon} height={15} alt='Twitter'/>
        <Image src="/4.png" width={15} className={styles.Icon} height={15} alt='Youtube'/>
      </div>
    </div>
  )
}

export default Footer