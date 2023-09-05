import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        //validar si ya esta en el arreglo
        if(categories.includes(newCategory)){
            return;
        };

        //agregar la categoria nueva
        setCategories([newCategory, ...categories]);
    }

  return (
    <>
        <h1>GiftExpertApp</h1>
        <AddCategory 
            onNewCategory={(value) => onAddCategory(value)}
        />
        {
            categories.map((category) => 
                (
                    <GifGrid key={category} category={category}/>
                ))
        }
    </>
  )
}
