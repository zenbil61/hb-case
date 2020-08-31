export const biggestShort = (property) => {
   return (a,b) => {
        if(a[property] < b[property])  return 1           
        return -1
     }
}

export const sortVote = () => {
   return (a,b) => {
       if (a.count > b.count) return 1;
       else if (a.count < b.count) return -1
       else if(new Date(a.lastVoted) > new Date(b.lastVoted)) return 1; // buraya geliyorsa eşittir
       
       return -1
   }
}  