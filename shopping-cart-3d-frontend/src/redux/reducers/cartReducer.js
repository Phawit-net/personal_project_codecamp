import { ADD_CART, REMOVE_CART } from '../actions/actions'

const INITIAL_STATE = {
    carts: [],
    total: 0
};


function userReducer(carts=[], action) {
    switch (action.type) {
        case ADD_CART:
            // return {
            //     carts: [...detail.carts].find(x => x.id === action.id) ? [...detail.carts] : [...detail.carts,
            //         {
            //             id: action.id,
            //             name: action.name,
            //             price: action.price,
            //             image: action.image,
            //             sellerName:action.sellerName,
            //         }
            // ],
            // total: [...detail.total] + action.price
        // }
        return [...carts].find(x => x.id === action.id) ? [...carts] : [...carts,
        {
            id: action.id,
            name: action.name,
            price: action.price,
            image: action.image,
            sellerName:action.sellerName,
        }]

        case REMOVE_CART:
            // return []
            return [...carts].filter(x=>x.id !== action.id)

        default:
            // return detail
            return carts
    }
}


export default userReducer