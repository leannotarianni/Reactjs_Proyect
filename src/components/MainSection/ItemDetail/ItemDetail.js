import { useContext } from 'react';
import { Link } from 'react-router-dom';
//Components
import CartContext from '../../../Context/CartContext'
import ItemCount from "../ItemCount/ItemCount"
//dependencies
import { Grid} from "@mui/material"
//Styles
import './item-detail.scss'

const ItemDetail =({data})=> {
    const {title,image,price} = data
    const { addProductToCart } = useContext(CartContext);

    
    const onAdd =(data,quantity)=>{
        addProductToCart({data,quantity})
    }

    return(
            <Grid container>
                <Grid container sx={{margin:3}} className="item-detail-card" >
                <Grid item xs={12} sm={6} className='item-detail-img' >
                    <div>
                        <p>{title}</p>
                        <img src={`/${image}`}  alt={`./${title}`}/>  
                    </div> 
                </Grid>
                <Grid item xs={12} sm={6} className="item-detail-descripcion" >    
                    <div>
                        <p>{title}</p>
                        <p>${price} </p>
                        <ItemCount  data={data} onAdd={onAdd} 
                        />  
                        <button>
                            <Link to='/Cart'>View Cart</Link>
                        </button>
                    </div>
                    
                </Grid>
            </Grid>
            </Grid>
            
            

    )
}

export default ItemDetail

