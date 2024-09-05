import { Titles } from "../index"
import './FeedCard.css'
export function FeedCard() {
    return (
        
        <section>
             
            <div className="grid grid-cols-2 justify-items-start place-content-center mt-10 items-center">
                <div className="flex flex-col justify-start">
                    <Titles title={"Bienvenido a Prodont"}/> 
                    <p className="text-left mt-4 font-FuturaBook text-zinc-900">
                        ¡Tu destino para lograr una sonrisa radiante y una salud bucal óptima! En nuestro consultorio odontológico, 
                        nos enorgullece ofrecer servicios de alta calidad respaldados por un equipo de profesionales apasionados 
                        por tu bienestar dental!
                    </p>
                </div>
                
                <div className="grid grid-cols-subgrid gap-4 col-span-1 justify-items-center">
                        <img className="w-80 z-20" 
                            src="/assets/LandingPage/LandingPhoto.png" 
                            alt="Landing Photo" />

                            <div className="BackgoundBlur z-10 bg-opacity-10 rounded-lg shadow-md p-4 w-96 h-72 absolute top-72 ">
                            
                            </div >
                            <div className="rounded-full z-0 bg-purple-500 h-40 w-40 absolute top-50 right-40 " ></div>   
                            <div className="rounded-full z-0 bg-cyan-400 h-40 w-40 absolute top-96 left-2/3 " ></div>   

                </div>
                
            </div>
        </section>
    )   
}
