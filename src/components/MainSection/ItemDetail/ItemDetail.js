import { Grid } from "@mui/material"
/* import onAdd from "../../../fuctions/onAdd"
 */import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Button } from "@mui/material"
import './item-detail.scss'
import { Link } from "react-router-dom"

const ItemDetail =({data})=> {
    const {title,image,price} = data
    
    const [showButton, setShowButton] = useState(false)

    const onAdd =(data)=>{
        setShowButton(true)
        console.log(data)
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
                    <div p >
                        <p>{title}</p>
                        <span>${price} </span>
                        {!showButton ?
                        <ItemCount setShowButton={setShowButton} data={data} onAdd={onAdd} 
                        />
                        :                        
                        <Button variant={'outlined'}><Link to={'/Cart'}>Checkout</Link></Button>}
                        
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