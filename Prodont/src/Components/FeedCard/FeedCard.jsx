import { Titles } from "../index";
import './FeedCard.css';

export function FeedCard() {
    return (
        <section className="flex justify-center items-center p-16">
            <div className="flex flex-col justify-center items-center text-center p-4 mx-4 md:mx-8">
                <Titles title={"Bienvenido a Prodont"} />
                <p className="mt-2 font-FuturaBook text-zinc-900">
                    ¡Tu destino para lograr una sonrisa radiante y una salud bucal óptima! En nuestro consultorio odontológico, 
                    nos enorgullece ofrecer servicios de alta calidad respaldados por un equipo de profesionales apasionados 
                    por tu bienestar dental!
                </p>
            </div>
        </section>
    );   
}
