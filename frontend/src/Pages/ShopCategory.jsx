import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shopcategory'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <div className="shopcategory-indexSort1">
          <span>Showing</span>
          <p> some products</p> 
        </div>
          
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if(props.category === item.category){
            return <Item key = {i} id={item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price= {item.old_price} />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>

      <div className='popu'>
        <div className='popular1'>
          <p>Registered Office Address</p>
        </div>
        <div className='popular1-search'>
          <p>Buildings Alyssa,</p>
          <p>Begonia and Clover situated in Embassy Tech Village,</p>
          <p>Outer Ring Road,</p>
          <p>Devarabeesanahalli Village,</p>
          <p>Varthur Hobli,</p>
          <p>Bengaluru – 560103, India</p>
        </div>
      </div>
      <div className='popu'>
        <div className='popular1'>
          <p>ONLINE SHOPPING MADE EASY AT OUTFITZ</p>
        </div>
        <div className='popular1-search'>
          If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Outfitz is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories,jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items.Our   online store brings you the latest in designer products straight out of fashion houses. You can shop online at Outfitz from the comfort of your home and get your favourites delivered right to your doorstep.
        </div>
      </div>
    </div>
  )
}

export default ShopCategory
