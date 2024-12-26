export const isPresentInFavourites=(favourites,restaurant)=>{
    for(let item of favourites){
        if(item.id==favourites.id){
            return true;
        }
    return false;
        
    }
}