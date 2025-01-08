const books =[
    {title:"Book one", genre:"language",publish_year:1980,edition:2004},
    {title:"Book two", genre:"History",publish_year:1981,edition:2005},
    {title:"Book three", genre:"Science",publish_year:1982,edition:2006},
    {title:"Book four", genre:"language",publish_year:1983,edition:2007},
    {title:"Book five", genre:"non-function",publish_year:1984,edition:2008},
    {title:"Book six", genre:"fiction",publish_year:1985,edition:2009},
    {title:"Book seven", genre:"education",publish_year:1986,edition:2010},
    {title:"Book eight", genre:"History",publish_year:1987,edition:2011},
    {title:"Book nine", genre:"Science",publish_year:1988,edition:2012},
    {title:"Book ten", genre:"language", publish_year:1989,edition:2013},
    {title:"Book eleven", genre:"Jeography",publish_year:1990,edition:2014},
    {title:"Book twelve", genre:"Finance",  publish_year:1991,edition:2015},
    {title:"Book thrteen", genre:"Art",publish_year:1992,edition:2016},
    {title:"Book forteen", genre:"function", publish_year:1993, edition:2017},
]

let userbooks = books.filter((item) => item.genre === "language")
 userbooks = books.filter((item) => {
    return item.publish_year >= 1990 && item.genre ==="History"
 })

console.log(userbooks);