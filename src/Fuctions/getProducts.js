//Firebase
import { collection, getDocs } from "firebase/firestore";
import db from "../data/firebaseconfig";

const getProducts = async () =>{
    const productSnapshot = await getDocs(collection(db, "products"));
    /* console.log("productos firbase",productSnapshot) */
    const productList = productSnapshot.docs.map((doc)=> {
        /* console.log ("doc",doc.id, " => ", doc.data()) */
        let product = doc.data()
        product.id = doc.id
        return product
    })
    return productList
} 

    

export default getProducts