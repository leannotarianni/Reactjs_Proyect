import { useContext , useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//Firebase
import {addDoc,collection} from 'firebase/firestore'
import db from '../data/firebaseconfig';
//Components
import CartContext from '../Context/CartContext';
import ModalContact from '../components/ModalContact/ModalContact';
import CartCount from '../components/CartWidget/CartCount';
//Dependencies
import { Container, Button , TextField, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import validator from 'validator';
//Styles
import './cart.scss'

const Cart =()=> {
    const {productsInCart,clearCart,removeProductFromCart,totalPrice} = useContext(CartContext)
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [validateEmail, setValidateEmail] = useState(true)
    const [validateName, setValidateName] = useState(true)
    const [validatePhone, setValidatePhone] = useState(true)

    const [formValue, setFormValue] = useState({
        name: '',
        phone:'',
        email:'',
    })
    const [order, setOrder] = useState({
        buyer:{},
        items: productsInCart.map( item =>{
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
            }
        }),
        date:new Date() ,
        total:'00',
    })
    const[succes, setSuccesOrder] = useState()





    const handleSubmit = (e) =>{
        e.preventDefault()
        validation(validateEmail & validateName & validatePhone && setOrder({...order,buyer: formValue}) & console.log("orden sin errores",order))
    }

    const validation = () => {
        setValidateEmail(validator.isEmail(formValue.email))
        console.log("validation email",validateEmail)
        
        setValidateName(validator.isAlpha(formValue.name))
        console.log("validation name",validateName)

        setValidatePhone(validator.isNumeric(formValue.phone))
        console.log("validation phone",validatePhone)
    }

    const handleChange = (e)=> {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const finishOrder = () => {
        navigate('/')
    }

    /* const saveData = async (newOrder) => {
        const orderFirebase = collection (db,'orders')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        setSuccesOrder(orderDoc.id)
        clearCart()
    } */

    
    return(
        <Container className='general-container'>
        <div className='container-item-list-cart'>
            {productsInCart.length === 0 && (
                <>
                    <p>No hay productos agregados al carrito</p>
                    <Link to='/' >Empezar a comprar</Link>
                </>
            )}
            {productsInCart.length !== 0 && (
            <div className='item-cart-head'>
                <h2>Product</h2>
                <h2>Description</h2>
                <h2>Price/unit</h2>
                <h2>Quantity</h2>
                <h2>edit</h2>
                <h2>Delet</h2>
            </div>
            )}
            {productsInCart.map( (item) => {
                return(
                <div className='item-cart' key={item.id}>
                    <div className='item-cart-mage'>
                        <img src={`/${item.image}`} alt="prod carrito" />
                    </div>
                    <div className='item-cart-title'>
                        <p>{item.title}</p>
                    </div>
                    <div className='item-cart-price'>
                        <span>$ {item.price}</span>
                    </div>
                    <div className='item-cart-quantity'>
                        <p>{item.quantity}</p>
                    </div>
                    <CartCount item={item}/>
                    <div className='item-cart-delete'>
                        <button onClick={() =>removeProductFromCart(item)}>
                            <DeleteIcon  />
                        </button>
                    </div>
                </div>
                )
            })
            }
            {productsInCart.length !== 0 && ( 
            <div className='item-cart-footer'>
                <button onClick={clearCart}>
                    clear Cart
                </button>
                <div>
                    <p>total: </p>
                    <p>${totalPrice()}</p>
                </div>
                <Button variant={'outlined'} onClick={()=> setShowModal(true)}>
                    Complete Check Out
                </Button>
            </div>)
            }
        </div>
        <ModalContact
          open={showModal}
          handleClose={()=> setShowModal(false)}
          className='container-contact-form'
        >   {succes ? (
            <>
            <div>your order was generated successfully</div>
            <div>your order ID is: "{succes}"</div>
            <button onClick={finishOrder}>accept</button>
            </>
            ): (
            <>
            <DialogTitle>Contact</DialogTitle>
            <form className='contact-form' onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    name='email'
                    autoFocus
                    size='small'
                    color="warning"
                    margin="dense"
                    label="Email Address"
                    required
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                    value={formValue.email}
                />
                {!validateEmail && <p>Invalid Email</p>}
                <TextField
                    id="outlined-basic"
                    name='name'
                    autoFocus
                    size='small'
                    color="warning"
                    margin="dense"
                    label="Complete Name"
                    required
                    fullWidth
                    onChange={handleChange}
                    variant="standard"
                    value={formValue.name}
                />
                {!validateName && <p>Invalid</p>}
                <TextField
                    id="outlined-basic"
                    name='phone'
                    autoFocus
                    size='small'
                    color="warning"
                    margin="dense"
                    label="Phone"
                    required
                    fullWidth
                    variant="standard"
                    onChange={handleChange}
                    value={formValue.phone}
                />
                {!validatePhone && <p>Invalid number</p>}
                <Button variant='outlined' type='submit'>Submit</Button>
            </form>
            </>)}
        </ModalContact>
        </Container>
    )
}

export default Cart