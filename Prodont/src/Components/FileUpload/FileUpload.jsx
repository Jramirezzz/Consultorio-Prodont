// src/FileUpload.jsx
import { useState } from 'react';

export const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-xl font-semibold text-violet-800">Formulario de carga de archivos</h3>

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
        disabled={!file}
      >
        Subir Archivo
      </button>
    </div>
  );
};
