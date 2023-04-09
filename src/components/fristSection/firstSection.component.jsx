import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { CatougriesSelector } from "../../store/categories/category.selector"
import { Dailu_item_image } from "../first_sections/collectionCarousel/carousel.style";

export default function FirstSection() {
  let items =[] ;
   const categories = useSelector(CatougriesSelector);
  categories&&Object.keys(categories).map(title=>{
    items.push(categories[title])
    });
     return (
      <div className="relative overflow-hidden bg-white mb-3">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
   <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {items.filter((i,idx)=>idx<2).map(item=>(
   <div  key={item.name} className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
     <img
       src={item[2].imageUrl}
       alt=""
       className="h-full w-full object-cover object-center"
     />
   </div>
  
 ))}


 </div>

                   
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {items.map(item=>(

                  
                        <div key={item.name} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={item[0].imageUrl}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                           ))}
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {items.filter((i,idx)=>idx<2).map(item=>(
                        <div key={item.name} className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={item[1].imageUrl}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>
  
                <Link
                  to='/shop'
                  className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }