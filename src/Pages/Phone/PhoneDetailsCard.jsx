import swal from 'sweetalert';

const PhoneDetailsCard = ({ phone }) => {
//   console.log(phone);

    const { image, phone_name, price, rating, brand_name,id } = phone || {};
    
    const handleAddToFavorite = () => {
        const addedFavoritesArray = [];
        const favoriteITem = JSON.parse(localStorage.getItem('favorite'))

        if (!favoriteITem) {
            addedFavoritesArray.push(phone);
            localStorage.setItem('favorite', JSON.stringify(addedFavoritesArray))
            swal("Product Added!", "", "success");
            
        }
        else {
            const isExits = favoriteITem.find(item => item.id === id)

            if (!isExits) {
                addedFavoritesArray.push(...favoriteITem, phone);
                localStorage.setItem('favorite', JSON.stringify(addedFavoritesArray))
                swal("Product Added!","", "success");
     
            }
            
            else{ 
                swal("Already Exits", "" ,"error");
 
                
            }
        }




  /*       if (!favoriteITem) {
            addedFavoritesArray.push(phone)
            localStorage.setItem('favorite', JSON.stringify(addedFavoritesArray))
        }
        else {
            const items = JSON.parse(favoriteITem)
            items.push(phone)
            localStorage.setItem('favorite', JSON.stringify(items))
        }
 */


    }
  return (
    <div>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-yellow-500 antialiased">
            {brand_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Price: ${price}. Rating: {rating}
          </p>
          <a className="inline-block" href="#">
                      <button
                          onClick={handleAddToFavorite}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-yellow-500 transition-all hover:bg-yellow-500/10 active:bg-yellow-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add To Favorite
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetailsCard;
