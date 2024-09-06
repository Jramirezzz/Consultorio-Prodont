import {ThirdTitle,CardServices} from "../../Components"
export function Services(){
    return(
        <>
        <ThirdTitle ThirdTitle="Servicios"/>
        <CardServices title ="Ortodoncia" 
                      image= "/assets/ServiceCard/Ortodoncia.jpg" 
                      Description="Es una de las especialidades de la odontología que busca estudiar, 
                                   prevenir y corregir la posición de los maxilares, arcadas y dientes.">
        </CardServices>
        <CardServices title ="Diseño de Sonrisa" 
                      Description="Procedimiento mediante el cual se modifica el aspecto de los dientes para conseguir una apariencia armónica." 
                      image= "/assets/ServiceCard/Diseño-Sonrisa.jpg">
        </CardServices>
        <CardServices title ="Aclaramiento Dental" 
                      Description="Es un tratamiento que nos permite aclarar el tono de los dientes para un resultado estético ideal" 
                      image= "/assets/ServiceCard/Aclaramiento-Dental.jpg">
        </CardServices>
        <CardServices title ="Prótesis Dental" 
                      Description="Una prótesis dental es un elemento artificial destinado a restaurar la anatomía y funcionalidad de una o varias piezas dentarias."   
                      image= "/assets/ServiceCard/Protesis.jpg">
        </CardServices>
        <CardServices title ="Odontología Estetica" 
                      Description="La odontología estética soluciona problemas relacionados con la salud bucal y la armonía estética de la boca en su totalidad."   
                      image= "/assets/ServiceCard/Odontologia-Estetica.jpg">
        </CardServices>
        <CardServices title ="Odontología General" 
                      Description="La odontología general se encarga de prevenir, diagnosticar y tratar aquellos problemas primarios relacionados con los dientes,
                                   las encías o la lengua."   
                      image= "/assets/ServiceCard/Odontologia-General.jpg">
        </CardServices>

        </>
    )
}