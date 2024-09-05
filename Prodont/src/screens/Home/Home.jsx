import { NavigationBar,FeedCard,SecondTitle,ThirdTitle,CardServicesHome} from "../../Components/index"
export function Home() {
  
  return (
    <>

    <NavigationBar/>
    <FeedCard/>
    <SecondTitle SecondTitle="Servicios"/>
    <CardServicesHome title="Ortodoncia"    
                      image="/assets/ServiceCard/Ortodoncia.jpg" 
    />
    <CardServicesHome title="Diseño De Sonrisa"   
                      image="/assets/ServiceCard/Diseño-Sonrisa.jpg"
    />
    <CardServicesHome title="Aclaramiento Dental" 
                      image="/assets/ServiceCard/Aclaramiento-Dental.jpg" 
    />
    <CardServicesHome title="Protesis Dental"  
                      image="/assets/ServiceCard/Protesis.jpg" 
    />
    <CardServicesHome title="Odontología Estetica" 
                      image="/assets/ServiceCard/Odontologia-Estetica.jpg" 
    />
    <CardServicesHome title="Odontología General" 
                      image="/assets/ServiceCard/Odontologia-General.jpg"
    />
    <ThirdTitle ThirdTitle="Articulos"/>

    </>
  )
}


