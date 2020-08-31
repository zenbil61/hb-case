export const filterConstant= {
  data : [
      { text:"Most Voted (Z - A)", val: 1 },
      { text:"Less Voted (A - Z)", val: 2 }
    ],
  type: {
    MostVoted : 1,
    LessVoted : 2,
  }
}

export const globalConstant = {
    voteKey: "votes",
    filterKey: "filter",
    voteType : {
      Up:1,
      Down:2,
    },
    initialVotes : [   
        {
          id:2,
          count:8,
          lastVoted: new Date().getTime(),
          name: "Product Hunt",
          url: "https://www.producthunt.com"
        },
        {
          id:1,
          count:5,
          lastVoted: new Date().getTime(),
          name: "Hacker News",
          url: "https://www.hackernews.com"
        }
  ]
}