import React from 'react'
import "./css/Subtotal.css"
import Currencyformat from "react-currency-format";
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <Currencyformat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            {user && (
                <button>Proceed to Checkout</button>
            )}
            {!user && (
                <button onClick={(e) => navigate('/login')}>Sign in or Create account to Checkout</button>
            )}

        </div>
    )
}

export default Subtotal;




// pk_test_51LVC7bSJ0Uka01M1SEhfyUhxNo03cAjQ0F9SffJ3xJHqszNG5KZVQMhrMKI25k41B6SZe06IP8iqC5auvOriwieE00NiyLicdd


// sk_test_51LVC7bSJ0Uka01M1EC0fAFFZZ1x1LTLkgOvWyUx7F3dSBaPaTKmDCUicVsNiGXbsmA3KTidXcr9VaqjjVVJq6YJo00fTrqgpQx