import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from './firebase'; // Asegúrate de que exportaste storage desde tu archivo de configuración de Firebase

export const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  // Manejar la selección del archivo
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Función para subir el archivo
  const handleUpload = () => {
    if (!file) {
      alert("Por favor selecciona un archivo primero");
      return;
    }

    const storageRef = ref(storage, `uploads/${file.name}`); // Crear referencia

    // Subir archivo a Firebase Storage
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        setUploadStatus('Archivo subido exitosamente');
        // Obtener la URL de descarga del archivo subido
        return getDownloadURL(snapshot.ref);
      })
      .then((downloadURL) => {
        console.log('URL de descarga:', downloadURL); // Aquí puedes usar la URL para mostrar el archivo subido
      })
      .catch((error) => {
        console.error("Error al subir el archivo:", error);
        setUploadStatus('Error al subir el archivo');
      });
  };

  return (
    <div>
      <h3>Subir archivo a Firebase Storage</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir Archivo</button>
      <p>{uploadStatus}</p>
    </div>
  );
};

