import { useState } from 'react';
import { storage, db } from '../../Services/firebase-config'; 
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

export const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async () => {
    if (!file || !title || !description) {
      setError("Por favor completa todos los campos.");
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(null);

    try {
      const fileRef = storageRef(storage, `uploads/${file.name}`);
      await uploadBytes(fileRef, file);

      const downloadURL = await getDownloadURL(fileRef);

      await addDoc(collection(db, 'uploads'), {
        title,
        description,
        fileName: file.name,
        filePath: `uploads/${file.name}`,
        downloadURL
      });

      setSuccess("Archivo y metadatos subidos exitosamente.");
    } catch (err) {
      setError(`Error al subir el archivo o los metadatos: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
      />
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Título" 
        className="mt-4 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Descripción" 
        className="mt-4 block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      ></textarea>
      <button 
        onClick={handleSubmit} 
        disabled={uploading} 
        className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        {uploading ? 'Subiendo...' : 'Subir'}
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {success && <p className="mt-4 text-green-500">{success}</p>}
    </div>
  );
};