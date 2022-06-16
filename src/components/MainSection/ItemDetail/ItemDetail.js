import { useContext } from 'react';
import CartContext from '../../../Context/CartContext'
import { Link } from 'react-router-dom';
//Components
import ItemCount from "../ItemCount/ItemCount"
//dependencies
import { Grid} from "@mui/material"
//Styles
import './item-detail.scss'

const ItemDetail =({data})=> {
    const {title,image,price} = data
    const { addProductToCart } = useContext(CartContext);

    
    const onAdd =(data,quantity)=>{
        console.log(quantity)
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
                            <Link to='/Cart'>Check Out</Link>
                        </button>
                        <ul>
                            <h3>CARACTERÍSTICAS</h3>
                            <li>Quad high performance.</li>
                            <li>Tabla pensada para surfearse en medidas inferiores a las habituales.</li>
                            <li>Velocidad y manejabilidad.</li>
                            <li>Perfecta para olas desde la rodilla hasta más arriba de la cabeza.</li>
                        </ul> 
                    </div>
                    
                </Grid>
            </Grid>
            </Grid>
            
            

    )
}

export default ItemDetail

/* <Card sx={{maxWidth:300,margin:'auto',padding:'auto' }} >
            <CardContent className="item-detail">
                <div>
                    <div>
                      <img src={`./${image}`} className='sufrboards_img' alt='al merrick boddy quad'/>
                    </div>
                    <p>{title}</p>
                    <span>${price} </span>
                    <ItemCount stock={stock} onAdd={onAdd} />
                </div>
            </CardContent>
        </Card> */