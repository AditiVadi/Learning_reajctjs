import react from 'react'

//function Greet(){
 //   return <h1>heloo aditi</h1>
//}
// const Greet= (props) => {
//     //props.name="ksdn"; error ape
//     console.log(props);
//     return (
//     <div>
//     <h1>heloo {props.name} a.k.a {props.heroname}</h1>
//     {props.children} 
// </div>
//     )

// }
//destucturing props

const Greet= ({name,heroname}) => {//destucturing props
    //props.name="ksdn"; error ape
   
    return (
    <div>
    <h1>heloo {name} a.k.a {heroname}</h1>
   
</div>
    )

}
export default Greet 
 