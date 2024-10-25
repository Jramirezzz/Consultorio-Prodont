import { FourTitle, Button } from "../../Components/index";
import { useEffect, useState } from 'react';
import { db } from "../../Services/firebase-config"; 
import { collection, getDocs } from "firebase/firestore";

export const CardNews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'uploads')); 
        const docs = [];
        querySnapshot.forEach(doc => {
          docs.push(doc.data());
        });
        setData(docs);
      } catch (err) {
        console.error("Error al obtener los datos: ", err);
      }
    };

    fetchData();
  }, []); 

  return (
    <section className="flex flex-wrap justify-center gap-4 mb-28">
      {data.map((newsData, index) => (
        <div key={index} className="flex flex-row bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 w-3/5 h-64 rounded-md">
          
          {/* Imagen a la izquierda */}
          <div className="flex justify-center items-center w-1/3">
            <img className="w-60 h-auto rounded-lg" src={newsData.downloadURL} alt={newsData.fileName || "Imagen"} />
          </div>

          {/* Contenido a la derecha */}
          <div className="flex flex-col justify-center w-2/3 p-4">
            {/* Título */}
            <FourTitle FourTitle={newsData.title} />
            
            {/* Descripción */}
            <p className="text-gray-700 mt-2">{newsData.description}</p>

            {/* Botón */}
            <div className="flex justify-end mt-4">
              <Button name="Ver más" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
