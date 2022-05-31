const ItemDetail =({data})=> {
    const {title,image,stock,price} = data

    return(
        <>
        <div>
            <img src={`./${image}`}></img>
        </div>
        <div>
            <h2>{title}</h2>
            <p>{price}</p>
        </div>
        </>
    )
}

export default ItemDetail