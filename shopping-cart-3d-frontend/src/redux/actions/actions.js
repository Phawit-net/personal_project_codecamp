import { TOKEN } from '../../config/constants'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const ADD_CART = 'ADD_CART'
export const REMOVE_CART = 'REMOVE_CART'


export function logoutUser() {
    localStorage.removeItem("ACCESS_TOKEN")
    return {
        type: LOGOUT_USER,
    }
}

function fetchLogin(token) {
    localStorage.setItem(TOKEN, token)
}

export function login(user, token) {
    fetchLogin(token)
    return {
        type: LOGIN_USER,
        ...user
    }
}

function fetchLogout() {
    localStorage.removeItem(TOKEN)
}

export function logout() {
    fetchLogout()
    return {
        type: LOGOUT_USER,
    }
}

export function addcart(id, name, price, image) {
    return {
        type: ADD_CART,
        id: id,
        name: name,
        price: price,
        image: image
    }
}

export function removecart() {
    return { type: REMOVE_CART }
}  