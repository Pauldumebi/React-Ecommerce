import React, { useEffect}  from 'react' ;
import {Link} from 'react-router-dom';
// import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {listProducts} from '../actions/productActions'

function HomeScreen(props) {
   const productList = useSelector(state => state.productList);
   const {products, loading, error} = productList;
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(listProducts());
      return () => {
         //
      }
      //  console.log('pro',products)
   }, [])
   return loading ? <div>Loading..</div> :
   error ? <div>{error}</div> :
    <div className="products">
              {/* <ul> */}
                {
                 products.map(product =>
                    <li key={product._id}>
                      <Link to={'/product/' + product._id}>   
                        <div className="product">
                            <img className="product-image" src={product.image} alt="products">
                            </img>
                            <div className="product-name">{product.name}</div>
                            <div className="product-price">₦{product.price}</div>
                            <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
                        </div>
                      </Link>
                    </li> )
                }
              {/* </ul> */}
         </div>
}

export default HomeScreen;