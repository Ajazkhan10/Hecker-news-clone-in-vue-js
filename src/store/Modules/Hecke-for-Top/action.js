// import axios from 'axios'
// export default {
 
// //    const response=await fetch(' https://hacker-news.firebaseio.com/v0/topstories.json',)
// //      const responseData=response.json();
// //      if(!response.ok){
// //         const error=new Error(responseData.message || 'Fail to fetch data')
// //         throw error
// //        }
// //        const requests=response.data;
// //        requests.forEach( => {
        
// //        });

// //     //    for(const key in responseData){
// //     //     const resquest={
// //     //         id:key,
// //     //         by:responseData[key].by,
// //     //         descendants:responseData[key].descendants,
// //     //         kids:responseData[key].kids,
// //     //         title:responseData[key].title,
// //     //         url:responseData[key].url
// //     //     };
// //         requests.push(resquest)
// //        }
// //        context.commit('setrequest',requests)
// //     }
//     // ,
//      getDataFortopNews(context){
//     axios
//     .get("https://hacker-news.firebaseio.com/v0/topstories.json")
//     .then((response) => {
//       const requests = response.json();
//       requests.forEach((storyId) => {
//        axios
//           .get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
//           .then((response) => {
//             this.requests.push(response.data);
//             // console.log(this.topData);
//           })
//           .catch((err) => {
//             console.log(err);
//             context.commit('setrequest',requests)
//         });
//         });
//     });
// }
// }