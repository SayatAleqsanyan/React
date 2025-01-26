import axios from "axios";



// axios.get( "https://fortniteapi.io/v1/challenges", {
//     params: {
//         lang: "ru",
//         season: "current"
//     },
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: "a6efea11-28ecf7a8-9f731e49-ade798b7",
//     }
// } )
//     .then( res => console.log( res.data ) )
//     .catch( err => console.log( err ) )

// ---------------------------------------------------------------------------------

// axios({
//     method:"get",  // կարելի է բաց թողնել
//     url:"https://jsonplaceholder.typicode.com/posts",
//     params: {
//         lang: "ru",
//         season: "current"
//     },
//     headers: {
//         "Content-Type": "application/json",
//         Authorization: "a6efea11-28ecf7a8-9f731e49-ade798b7",
//     }
// })
//     .then( res => console.log( res.data ) )
//     .catch( err => console.log( err ) )

// **********************************************************************************       

// axios.post("https://jsonplaceholder.typicode.com/posts", {
//     userId: 1,
//     title: "Hello World title",
//     body: "Hello World body"
// }) 
//     .then( res => console.log( res.data ) )
//     .catch( err => console.log( err ) )

// ---------------------------------------------------------------------------------

axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
        userId: 1,
        title: "Hello World title",
        body: "Hello World body"
    }
})
    .then( res => console.log( res.data ) )
    .catch( err => console.log( err ) )


