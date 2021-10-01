import React, { useContext } from 'react'
import Image from 'next/image'
import styles from '../styles/Featured.module.css'
import { ProductInterface } from '../Data/Interface'
import { Store } from '../utils/Store'

interface FeaturedProps{
    featured: ProductInterface
}
const Featured:React.FC<FeaturedProps> = ({featured}) => {
    const {cartDispatch} = useContext(Store)
    return (
        <div className={styles.container} >
            <div className={styles.content}>
                <div className={styles.top}>
                    <h3>{featured.name}</h3>
                    <button onClick={()=>cartDispatch({type:'ADD_TO_CART', payload:featured})}>ADD TO CART</button>
                </div>
                <div className={styles.featuredImg}>
                    <Image src={featured.image.src} layout="fill" alt="img" />
                    <div className={styles.photoText}>
                        Photo of the day
                    </div>
                </div>

                <div className={styles.btnMobile}>
                    <button onClick={()=>cartDispatch({type:'ADD_TO_CART', payload:featured})}>ADD TO CART</button>
                </div>

                <div className={styles.about}>
                    <div className={styles.description}>
                        <h3>About the {featured.name}</h3>
                        <h4>{featured.category.toUpperCase()}</h4>
                        <p>{featured.details.description}</p>
                    </div>
                    <div className={styles.recommendation}>
                        <h3>People Also buy</h3>
                        <div className={styles.recommendationImgs}>
                           { featured.details.recommendation.map((item, ind) =>(
                               <div  key={ind}  className={styles.recImg}>
                                <Image layout="fill"  src={item.src} alt={item.alt} />
                               </div>
                                
                            ))}
                        </div>
                        <h3>Details</h3>
                        <p>Size: {featured.details.dimension.width} by {featured.details.dimension.height} pixel</p>
                        <p>Size: {featured.details.size}mb</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Featured
