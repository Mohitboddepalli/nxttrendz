// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <div className="cart-summary-container">
          <h1 className="order-total-value">
            <span className="order-total-label">Order Total: </span> RS {total}
            /-{' '}
          </h1>
          <p className="total-items">{cartList.length} items in cart</p>
          <button type="button" className="chechout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
