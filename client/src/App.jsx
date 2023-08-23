import { useState, useEffect } from 'react';
// import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}`;

const imageContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  boxSizing: 'border-box',
};

const imageStyle = {
  width: '100%',
  height: 250,
  boxSizing: 'border-box',
};

function App() {
  const [images, setImages] = useState([]);

  async function fetchImages() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div style={imageContainerStyle}>
      {images.map((image, index) => (
        <div key={index} style={{ width: '25%', boxSizing: 'border-box' }}>
          <img style={imageStyle} src={image.urls.full} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default App;
