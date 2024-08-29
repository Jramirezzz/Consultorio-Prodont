export function CardServices (props) {
    const {image, Description, title} = props

    return(
        <>
        <section className="flex justify-center">
             <div className="grid grid-cols-2 justify-items-center justify-center place-content-center mt-10 items-center
              bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 h-screen w-3/5
              h-60 rounded-md">
                <div className="flex flex-col justify-center items-center">
                    <h3>
                        {title}
                    </h3>
                </div>
             <div className="grid grid-cols-subgrid col-span-2 justify-items-center">
                         <img className=" w-60 z-20" 
                             src= {image}
                             alt="Landing Photo" />

                <div className="flex flex-col justify-center">
                     <p className="text-left font-FuturaBook text-zinc-900">
                         {Description}
                     </p>
                 </div>
                 </div>
                 
             </div>
         </section>
        </>
    )
}