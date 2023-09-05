import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Valorant']);

    const onAddCategory = (newCategory) => {

        //validar si ya esta en el arreglo
        if(categories.includes(newCategory)){
            return;
        };

        //agregar la categoria nueva manteniendo la anterior
        //setCategories([newCategory, ...categories]);

        //agregar la categoria nueva eliminando la anterior
        setCategories([newCategory]);
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
