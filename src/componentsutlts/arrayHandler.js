export const HandleDuplicate =(arr)=>{
    const ids = arr.map(o => o.id);
    return  arr.filter(({id}, index) => !ids.includes(id, index + 1));
}