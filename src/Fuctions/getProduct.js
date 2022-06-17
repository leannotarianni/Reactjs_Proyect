import { doc,getDoc } from "firebase/firestore";
import db from "../data/firebaseconfig";

const getProduct = async (id) =>{
    console.log("id producto", id)
    const docRef = doc(db, "products", id)
    const docSnaptshop = await getDoc(docRef);
    /* console.log("productos firbase",productSnapshot) */
    let product = docSnaptshop.data()
    product.id = docSnaptshop.id
    return product
} 

    

export default getProduct