import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {


  const [categories, setCategories] = useState([ 'One Punch' ]);


  const onAddCategory = ( newCategory ) => {

    if(categories.some(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;

    setCategories(cat => [newCategory, ...cat])

  }



  return (    
  <>

    {/* titulo */}
    <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory 
      onNewCategory = { (value) => onAddCategory(value)}
    />
    
    {/* Listado de gifs */}
    { categories.map(category =>(
         <GifGrid 
          key = {category} 
          category= {category} /> 
        )
      )
    }
</>
  )
}



