import { useEffect, useState } from 'react';
import { db } from "../../Services/firebase-config"; 
import { collection, getDocs } from "firebase/firestore";
import CardNews from '../Components/CardNews/CardNews'; 

const DataNews = () => {
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
    <div>
      {data.map((newsItem, index) => (
        <CardNews key={index} newsData={newsItem} />
      ))}
    </div>
  );
};

export default DataNews; 
