import { useState } from "react";
import { AddCategory } from "./Components/AddCategory";

export const GifExpertApp = () => {
/* Cuando quiero almacenar información y esa información tiene
que cambiar el HTML, usualmente en lo primero que debemos pensar
es en un Hook para mantener el estado como el useState
 */

//No poner condicionalmente hooks. Ej. 
/* if(true){
        const [ categories, setcategories] = useState(['One Punch','Dragon Ball'])
}
*/
    const [ categories, setcategories] = useState(['One Punch','Dragon Ball'])
    
    const onAddCategory = () =>{
        //Valorant
        setcategories([...categories, 'Valorant']);
        //setcategories(cat =>[...cat, 'Valorant']) otra forma de 
        //hacerlo.
    }
    console.log(categories);
    return (
        <>
            {/*titulo*/}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory/>
            {/*Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {
                categories.map(category =>{
                    return <li key= { category }> { category } </li>
                })}
                
            </ol>
                {/* Gif Item */}
        </>
    )
}