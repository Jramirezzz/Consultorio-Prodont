import { useState } from 'react';
import { storage, db } from '../../Services/firebase-config'; 
import { ref, uploadBytes } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

export const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
    if (!file || !title || !description) {
      setError("Por favor completa todos los campos.");
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(null);

    try {
      // Subir el archivo a Firebase Storage
      const storageRef = ref(storage, `uploads/${file.name}`);
      await uploadBytes(storageRef, file);

      // Guardar la información del archivo en Firestore
      const docRef = collection(db, 'files');
      await addDoc(docRef, {
        title,
        description,
        fileName: file.name,
        createdAt: new Date()
      });

      setSuccess("Archivo subido y datos guardados correctamente.");
      setFile(null);
      setTitle('');
      setDescription('');
    } catch (err) {
      setError("Error al subir el archivo. Inténtalo de nuevo.");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-xl font-semibold text-violet-800">Formulario de carga de archivos</h3>

      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}

      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-64 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
      />

      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-64 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
      />

      <label className="w-36 cursor-pointer px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        Elegir archivo
      </label>

      <button
        className="w-36 px-4 py-2 bg-violet-500 text-white font-semibold rounded-lg shadow-md hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-opacity-75"
        disabled={!file || uploading}
        onClick={handleSubmit}
      >
        {uploading ? 'Subiendo...' : 'Subir Archivo'}
      </button>
    </div>
  );
};
