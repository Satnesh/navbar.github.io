import React,{useState  } from 'react';
import {useDropzone} from 'react-dropzone';

import Images from './Images'

function Drag(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      if(acceptedFiles.length === 0 )
      {
        alert("please select image only")
      }
      console.log(acceptedFiles)
      setFiles(acceptedFiles.map(file =>  URL.createObjectURL(file)))
    }
  });


  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
  
     <Images ImagesList = {files} />
    </section>
  );
}

export default Drag
