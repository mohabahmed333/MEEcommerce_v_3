import{createSelector} from 'reselect'
 export const categoriesSelectorReducer = (state)=>state.Categories;

export const selectCategories = createSelector(
   [categoriesSelectorReducer],
   (categoriesSlice)=>{
      return categoriesSlice.categories

   }
)

export const CatougriesSelector = createSelector([selectCategories],(categories)=>{
 return   categories.reduce((acc,itemsArray)=>{
      const {routeName,title,items,} = itemsArray;
      acc[title.toLowerCase()] = items;
         return acc
      },{}); 

})

export const CategoryImage = createSelector([selectCategories],(categories)=>{
 return   categories.reduce((acc,itemsArray)=>{
      const {routeName,title,items,collImg} = itemsArray;
 
      acc[title.toLowerCase()]={collImg}  
 
      acc[title.toLowerCase()] ={collImg}  
 
         return acc
      },{}); 

})
export const IsLoadingSelector = createSelector([categoriesSelectorReducer],(cat)=>cat.isLoading)
// =(state)=>state.Categories.categories.reduce((acc,itemsArray)=>{
// const {routeName,title,items} = itemsArray;
// acc[title.toLowerCase()] = items;
//    return acc
// },{}); 