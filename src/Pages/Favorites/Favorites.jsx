import { useEffect, useState } from "react";

import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  const [favorite, setFavorite] = useState([]);
  const [noFound, setNoFound] = useState("");
    const [isShow, setIsShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0)


  useEffect(() => {
    const favoriteITem = JSON.parse(localStorage.getItem("favorite"));
    console.log(favoriteITem);
    if (favoriteITem) {
        setFavorite(favoriteITem)

    } 
  }, []);




  useEffect(() => {
    if (favorite.length > 0) {
    
    const total = favorite.reduce((previous, current) => previous + current.price, 0)
    setTotalPrice(total)
    } else {
      
      setNoFound("No Data found");
    }
    
  },[favorite])

 

  const handleRemove = () => {
    localStorage.clear();
    setFavorite([]);
    setNoFound("No Data found");

  };

//   const handleSeeMore = () => {};

  //   console.log(favorite);
  return (
    <div>
      {noFound ? (
        <p>{noFound}</p>
      ) : (
        <div>
          {favorite.length > 0 && (
            <button
              onClick={handleRemove}
              className=" text-center bg-red-500 mx-auto p-5 text-white block"
            >
              Delete All Favorite
                          </button>
                          
                      )}
                      {
                          <p>Total price of all favorite item: { totalPrice}</p>
                      }

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {isShow
              ? favorite.map((phone) => (
                  <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                ))
              : favorite.slice(0,3).map((phone) => (
                  <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                ))}
          </div>
          {
            favorite.length > 3 && <button
            onClick={() => setIsShow(!isShow)}
            className=" text-center bg-red-500 mx-auto p-5 text-white block"
          >
            {isShow ?'See Less' : 'See More'}
          </button>
          }
        </div>
      )}
    </div>
  );
};

export default Favorites;
