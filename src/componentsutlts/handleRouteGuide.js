export const   handleRouteGuide=(catogriesItems,location,name)=>{
    let arr= [];
    if( catogriesItems){ 
      arr = Object.keys(catogriesItems).map(title=>{
   let  item = catogriesItems[title].find(item=>{
        return item.name===name
    })
    if(item){
         let urlE = item.name.replaceAll(' ','')
        location(`/shop/${title}/${urlE}`);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
       return catogriesItems[title]
    });

}


     }