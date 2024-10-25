import { FeedCard, SecondTitle, ThirdTitle, CardServicesHome, CardNewsHome } from "../../Components/index";
import { ServiceData } from "../../Data/ServiceData"; 

export function Home() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4">
        <FeedCard />
        <SecondTitle SecondTitle="Servicios" />
      </div>

      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {ServiceData.map((service, index) => (
            <CardServicesHome
              key={index}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </div>

      <ThirdTitle ThirdTitle="Noticias" />
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-wrap justify-center gap-6 p-4">
          <CardNewsHome />
        </div>
      </div>
    </>
  );
}
