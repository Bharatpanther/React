// const reactElement = {
//     type : 'a',
//     props : {
//         href : "https://google.com",
//         target : "_balnk"
//     },
//     children : "click me to visit google"
// }
// const mainContainer = document.querySelector('#root')



const reactElement = React.createElement(
    'a',
    {href : "https://google.com", target :"_blank"},
    'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    reactElement
)