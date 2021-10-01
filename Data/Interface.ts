export interface ProductInterface {
    
    name: string,
    category: string,
    price: number,
    currency: string,
    image: {
        src: string,
        alt: string
    },
    bestSeller: boolean,
    featured: boolean,
    details?:{
        dimension:{
            width: number,
            height: number,
        },
        size: number,
        description: string,
        recommendation:{
            src: string,
            alt: string
        }[]
    }
    
    
}