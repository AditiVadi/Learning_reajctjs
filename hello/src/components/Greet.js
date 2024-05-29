import react from 'react'

//function Greet(){
 //   return <h1>heloo aditi</h1>
//}
const Greet= (props) => {
    //props.name="ksdn"; error ape
    console.log(props);
    return (
    <div>
    <h1>heloo {props.name} a.k.a {props.heroname}</h1>
    {props.children} 
</div>
    )

}
export default Greet 
 