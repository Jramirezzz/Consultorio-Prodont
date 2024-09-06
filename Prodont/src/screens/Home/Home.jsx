import { FeedCard, SecondTitle, ThirdTitle, CardServicesHome } from "../../Components/index";

export function Home() {
  return (
    <>
      <FeedCard />
      <SecondTitle SecondTitle="Servicios" />

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

      <ThirdTitle ThirdTitle="Artículos" />
    </>
  );
}
