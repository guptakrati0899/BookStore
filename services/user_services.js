import axiosService from '../services/axios_service';

const obj = new axiosService();
const baseurl = "https://new-bookstore-backend.herokuapp.com/bookstore_user/"
const token = localStorage.getItem("token");
const headerconfig = {
    headers: {
        "x-access-token": token,
    }
};

class UserService {
    signup(data) {
        let response = obj.postMethod(`${baseurl}registration`, data, headerconfig);
        return response;
    }
    login(data) {
        let response = obj.postMethod(`${baseurl}login`, data, headerconfig);
        return response;
    }
    getAllbooks(data){
        let response = obj.getMethod(`${baseurl}get/book`, headerconfig);
        return response;

    }
    getCartItem(data){
        let response = obj.getMethod(`${baseurl}get/get_cart_items`, headerconfig);
        return response;
    }

    addToCart(id){
        let response = obj.postMethod(`${baseurl}add_cart_item/${id}`,{}, headerconfig);
        return response;
    
    }
    getCartItem() {
        let response = obj.getMethod(`${baseurl}get_cart_items`, headerconfig);
        return response;
    }

    customerDetails(data) {
        let response = obj.putMethod(`${baseurl}edit_user`, data, headerconfig);
        return response;
      
    }

    orderItem(data) {

        let response = obj.postMethod(`${baseurl}add/order`, data, headerconfig);
        return response;
    
    }

    
    removeCartItem(id){
        let response = obj.deleteMethod(`${baseurl}remove_cart_item/${id}`, headerconfig);
        return response;
     

}

addToWishList(id){
    let response = obj.postMethod(`${baseurl}add_wish_list/${id}`, {}, headerconfig);
    return response;
}

getWishlist(data){
    let response = obj.getMethod(`${baseurl}get_wishlist_items`, headerconfig);
    return response;

}

deleteWishlistItem(id){
    let response = obj.deleteMethod(`${baseurl}remove_wishlist_item/${id}`, headerconfig);
    return response;
    
}

}
export default UserService