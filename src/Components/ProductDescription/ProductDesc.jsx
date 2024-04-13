import "./ProductDescStyle.css"
import { FaPlus } from "react-icons/fa6";
import { HiMinus } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi2";


export default function ProductDesc() {
  return (
    <div>
      
      <div className="maindiv">
        
        <div className="left">
          <div className="mainImg">
            <img src="/product.jpg" alt="img" />
          </div>
          <div className="subimgs">
            <div>            <img src="SmallProd1.jpg" alt="" /></div>
            <div>            <img src="SmallProd2.jpg" alt="" /></div>
            <div>            <img src="SmallProd3.jpg" alt="" /></div>
            <div>            <img src="SmallProd4.jpg" alt="" /></div>
          </div>
        </div>

        <div className="product-desc">
            <small id="Company-name">SNEAKER COMPANY</small>
            <h1 id="Prod-name">Name of product</h1>
            <p id="Prod-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus totam rem excepturi similique, sunt nobis quam eaque ab quaerat ut deserunt earum maiores aliquam voluptatibus ipsam, suscipit, esse tempore facilis!</p>
            <h2 id="prod-price">$120.00 </h2>
            {/* <small>oldprice</small> if discount exists */}
            
            <div className="Sub-Prod-Container">
              <div className="Quantity-control">
                <HiMinus />
                <input type="number" name="" value={2}  />
                <FaPlus width="5px"/>
              </div>
                
              <div className="add-to-cart-div">
                <button > <HiShoppingCart className="minicart" /> add to cart</button>                
              </div>
            </div>
        </div>

      </div>

    </div>
  );
}
