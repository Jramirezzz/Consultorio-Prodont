import { FourTitle, Button } from "../../Components/index";
import { useEffect, useState } from 'react';
import { db } from "../../Services/firebase-config"; 
import { collection, getDocs } from "firebase/firestore";

export const CardNews = () => {
  const [data, setData] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

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
    <>
      <section className="flex flex-wrap justify-center gap-4 mb-28">
        {data.map((newsData, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-pink-500/25 w-full md:w-3/5 h-auto md:h-64 rounded-md overflow-hidden shadow-lg"
          >
            <div className="flex justify-center items-center w-full md:w-1/3">
              <img className="w-60 h-auto rounded-lg" src={newsData.downloadURL} alt={newsData.fileName || "Imagen"} />
            </div>

            <div className="flex flex-col justify-center w-full md:w-2/3 p-4">
              <FourTitle FourTitle={newsData.title} />

              <p className="text-gray-700 mt-2">{newsData.description.length > 100 ? newsData.description.slice(0, 100) + "..." : newsData.description
                }

              </p>

              <div className="flex justify-end mt-4">
              <Button 
              name="Ver más" 
              onClick={() => {
                setSelectedNews(newsData);
              }} 
/>
              </div>
            </div>
          </div>
        ))}
      </section>
      {console.log("selectedNews:", selectedNews)}


      {selectedNews && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white w-[600px] h-[500px] p-6 rounded-lg shadow-lg flex flex-col">
      {/* Título */}
      <h2 className="text-xl font-bold text-black">{selectedNews.title}</h2>
      
      {/* Contenedor con scroll si el contenido es muy grande */}
      <div className="mt-2 text-gray-700 overflow-y-auto max-h-[350px]">
        {selectedNews.description}
      </div>

      {/* Botón de cierre */}
      <button 
        className="bg-violet-500 text-white w-full mt-4 rounded-lg py-2 px-4 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50"
        onClick={() => setSelectedNews(null)}
      >
        Cerrar
      </button>
    </div>
  </div>
)}

    </>
  );
}
