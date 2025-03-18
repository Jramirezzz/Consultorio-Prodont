import { FeedCard, SecondTitle, ThirdTitle, CardServicesHome, CardNewsHome } from "../../Components/index";
import { ServiceData } from "../../Data/ServiceData"; 
import { Link } from "react-router-dom"; // Importa Link para navegación

export function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4">
        <FeedCard />
        <Link to="/services">
          <SecondTitle SecondTitle="Servicios" />
        </Link>
      </div>

      {/* Sección de Servicios */}
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {ServiceData.map((service, index) => (
            <CardServicesHome
              key={index}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </div>

      {/* Sección de Noticias */}
      <Link to="/news">
        <ThirdTitle ThirdTitle="Noticias" />
      </Link>
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-6 p-4">
          <CardNewsHome />
        </div>
      </div>
    </>
  );
}
