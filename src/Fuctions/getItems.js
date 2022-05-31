import productsMock from '../Data/productsMocks'


const getItems =()=>{
    return new Promise((res, rej) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            res(productsMock)
        }, 2000);
    } else {
        rej("Error al cargar productos");
    }        
  })
} 

    

export default getItems