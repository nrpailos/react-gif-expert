import { useState } from "react";
import { GifGrid, AddCategory } from "./components";



export default function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        //dos maneras de agregar una categoria al array:

        setCategories([newCategory])
        // setCategories(cat => [...cat, 'Valorant'])

    }


    return (
        <>
            {/*/titulo */}
            <h1>GifExpertApp</h1>

            {/*Input */}
            <AddCategory
                //setCategories={setCategories} 
                onNewCategory={onAddCategory}
            />


            {/*Listado de gif*/}


            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))
            }



            {/*Gif Item*/}
        </>

    )
}
