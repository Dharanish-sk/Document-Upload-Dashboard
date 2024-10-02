import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = ( ) => {
    const [files, setFiles] = useState([]);  
    const [uploadedFiles, setUploadedFiles] = useState([]);  

   
    useEffect(() => {
        const storedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
        setUploadedFiles(storedFiles); 
    }, []);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);  
        const fileObjects = selectedFiles.map(file => ({
            name: file.name,
            url: URL.createObjectURL(file)  
        }));
        setFiles(fileObjects); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (files.length === 0) {  
            alert('Please upload at least one document');
            return;
        }

     
        const allUploadedFiles = [...uploadedFiles, ...files];
        
        
        setUploadedFiles(allUploadedFiles); 
        localStorage.setItem('uploadedFiles', JSON.stringify(allUploadedFiles));  
        setFiles([]);  
        alert('Documents uploaded successfully'); 
    };


    return (
         
        <div className='doc'>
            <div className='upload-sec'>
            <h1 className='upload-topic'>Upload Documents</h1>
            <form onSubmit={handleSubmit}>
            <div className="container">
            <div className="folder">
            <div className="front-side">
            <div className="tip"></div>
            <div className="cover"></div>
            </div>
    <div className="back-side cover"></div>
  </div>

              
                <label className='custom-file-upload'>PAN
                <input className='title'
                    type='file'
                    onChange={handleFileChange}
                    accept='.pdf,.doc,.docx'
                    multiple
                    required
                /></label></div>
         
         <button className='button'>
  <svg
    aria-hidden="true"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeWidth="2"
      stroke="#ffffff"   
      d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="#ffffff"
      d="M17 15V18M17 21V18M17 18H14M17 18H20"
    ></path>
  </svg>
Upload
</button>


            </form>
            <form onSubmit={handleSubmit}>
            <div className="container">
  <div className="folder">
    <div className="front-side">
      <div className="tip"></div>
      <div className="cover"></div>
    </div>
    <div className="back-side cover"></div>
  </div>

              
                <label className='custom-file-upload'>AADHAR
                <input className='title'
                    type='file'
                    onChange={handleFileChange}
                    accept='.pdf,.doc,.docx'
                    multiple
                    required
                /></label></div>
         
         <button className='button'>
  <svg
    aria-hidden="true"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeWidth="2"
      stroke="#ffffff"  
      d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="#ffffff"
      d="M17 15V18M17 21V18M17 18H14M17 18H20"
    ></path>
  </svg>
  Upload
</button>


            </form>
            <form onSubmit={handleSubmit}>
            <div className="container">
  <div className="folder">
    <div className="front-side">
      <div className="tip"></div>
      <div className="cover"></div>
    </div>
    <div className="back-side cover"></div>
  </div>

              
                <label className='custom-file-upload'>Voter ID
                <input className='title'
                    type='file'
                    onChange={handleFileChange}
                    accept='.pdf,.doc,.docx'
                    multiple
                    required
                /></label></div>
         
         <button className='button'>
  <svg
    aria-hidden="true"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeWidth="2"
      stroke="#ffffff"  
      d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="#ffffff"
      d="M17 15V18M17 21V18M17 18H14M17 18H20"
    ></path>
  </svg>
  upload
</button>
</form>
</div>
<div className='upload-info'>
                {uploadedFiles.length > 0 && (
                    <div>
                        <h1 className='upload-topic'>Upolded files</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>File Name</th>
                                    <th>Uploaded Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {uploadedFiles.map((file, index) => (
                                    <tr key={index}>
                                        <td className='td'>Admin</td>  
                                        <td className='td'>{file.name}</td>
                                        <td className='td'>Uploaded</td>  
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
