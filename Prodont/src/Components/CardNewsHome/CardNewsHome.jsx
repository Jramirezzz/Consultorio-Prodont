import { useEffect, useState } from 'react';
import { db } from "../../Services/firebase-config"; 
import { collection, getDocs } from "firebase/firestore";

export const CardNewsHome = () => {
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
        <div className="flex flex-wrap p-4">
            {data.map((newsData, index) => (
            <div key={index} className="flex bg-gradient-to-r from-purple-200/50 via-blue-200/50 to-cyan-400/50 rounded shadow-md p-4 rounded-lg m-8">
                <div className="flex flex-col items-center w-64 h-56">
                    <img className="w-60 h-40 mb-4 rounded-lg object-cover" src={newsData.downloadURL} alt={newsData.fileName || "Imagen"} />
                    <h3 className="text-violet-800 font-FuturaBook text-lg text-center">{newsData.title}</h3>
                </div>   
            </div>
            ))}
        </div>    
    )}