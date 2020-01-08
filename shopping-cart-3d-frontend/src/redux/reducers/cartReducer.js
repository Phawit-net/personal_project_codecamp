import { ADD_CART, REMOVE_CART } from '../actions/actions'

function userReducer(carts = [], action) {
    switch (action.type) {
        case ADD_CART:
            return [...carts].find(x => x.id === action.id) ? [...carts] : [...carts,
            {
                id: action.id,
                name: action.name,
                price: action.price,
                image: action.image,
                sellerName: action.sellerName,
            }]

        case REMOVE_CART:
            return [...carts].filter(x => x.id !== action.id)

        default:
            return carts
    }
}


export default userReducer