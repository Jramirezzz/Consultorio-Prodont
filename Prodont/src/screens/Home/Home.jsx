import { FeedCard, SecondTitle, ThirdTitle, CardServicesHome, CardNewsHome } from "../../Components/index";

export function Home() {
  return (
    <>
    <div className="max-w-screen-xl mx-auto p-4">
      <FeedCard />
      <SecondTitle SecondTitle="Servicios" />
      </div>

      <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-6 p-4">
        <CardServicesHome
          title="Ortodoncia"
          image="/assets/ServiceCard/Ortodoncia.jpg"
        />
        <CardServicesHome
          title="Diseño De Sonrisa"
          image="/assets/ServiceCard/Diseño-Sonrisa.jpg"
        />
        <CardServicesHome
          title="Aclaramiento Dental"
          image="/assets/ServiceCard/Aclaramiento-Dental.jpg"
        />
        <CardServicesHome
          title="Protesis Dental"
          image="/assets/ServiceCard/Protesis.jpg"
        />
        <CardServicesHome
          title="Odontología Estetica"
          image="/assets/ServiceCard/Odontologia-Estetica.jpg"
        />
        <CardServicesHome
          title="Odontología General"
          image="/assets/ServiceCard/Odontologia-General.jpg"
        />
      </div>
      </div>

      <ThirdTitle ThirdTitle="Noticias" />
      <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-6 p-4">
       <CardNewsHome/>
      </div>
      </div>
    </>
  );
}
