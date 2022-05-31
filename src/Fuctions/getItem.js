import {productItem1} from '../Data/productsMocks'


const getItem =()=>{
    return new Promise((res, rej) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            res(productItem1)
        }, 2000);
    } else {
        rej("Error al cargar productos");
    }        
  })
} 

    

export default getItem