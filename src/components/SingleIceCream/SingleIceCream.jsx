import './SingleIceCream.css'

const SingleIceCream = ({ name, description, image, price, category }) => {

  return (

    <div className="card">

      <img src={image} alt={name} className="card-img" />

      <div className="card-info">

        <h3>{name}</h3>

        <p>{description}</p>

        <div className="card-footer">

          <h4 className="price">{price.toFixed(2)} €</h4>

          <h4 className='category'>{category}</h4>

        </div>

      </div>

    </div>

  )

}

export default SingleIceCream