import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export function GifGrid({category}) {

    const {images, isLoading} = useFetchGifs( category );


    //console.log({ isLoading });


    return(

        <>
            <h3>{ category }</h3>

            {
                isLoading && (<h2>Cargando... </h2>)  
            }

            {/* No se puede usar class para asigarlo porque es una palabra reservada */}
            <div className="card-grid">
                {   
                    images.map((image) =>
                    (
                        <GifItem 
                            key={image.id}
                            { ...image}

                        />            
                    )
                    )
                }

            </div>
            


        </>
    )
}




