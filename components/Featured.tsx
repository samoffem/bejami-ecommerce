import React from 'react'
import Image from 'next/image'
import styles from '../styles/Featured.module.css'

const Featured:React.FC = () => {
    return (
        <div className={styles.container} >
            <div className={styles.content}>
                <div className={styles.top}>
                    <h3>Samurai King Resting</h3>
                    <button>ADD TO CART</button>
                </div>
                <div className={styles.featuredImg}>
                    <Image src="/dog.jpg" layout="fill" alt="img" />
                    <div className={styles.photoText}>
                        Photo of the day
                    </div>
                </div>

                <div className={styles.about}>
                    <div className={styles.description}>
                        <h3>About the Samurai King resting</h3>
                        <h4>Pets</h4>
                        <p>So how did the classical Latin become so incoherent?
                            According to McClintock, a 15th century typesetter 
                            likely scrambled part of Cicero De Finibus in order 
                            to provide placeholder text to mockup various fonts 
                            for a type specimen book.So how did the classical 
                            Latin become so incoherent? According to McClintock, 
                            a 15th century typesetter likely scrambled part of 
                            Cicero De Finibus in order to provide placeholder 
                            text to mockup various fonts for a type specimen 
                            book.So how did the classical Latin become so
                             incoherent? According to McClintock.
                        </p>
                    </div>
                    <div className={styles.recommendation}>
                        <h3>People Also buy</h3>
                        <div className={styles.recommendationImgs}>
                           { [1,2,3].map((item, ind) =>(
                               <div  key={ind}  className={styles.recImg}>
                                <Image layout="fill"  src={`/art${item}.jpg`} alt="rec" />
                               </div>
                                
                            ))}
                        </div>
                        <h3>Details</h3>
                        <p>Size: 1020 by 1020 pixel</p>
                        <p>Size: 15mb</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Featured
