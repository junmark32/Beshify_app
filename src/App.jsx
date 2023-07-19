import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import ReactLogo from './assets/react.svg';
import ViteLogo from './assets/vite.svg';
import BootstrapLogo from './assets/bootstrap-4.svg';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [previewText, setPreviewText] = useState('');
  const emoji = '🤸'; // You can change the emoji here

  const updatePreview = (e) => {
    const textWithEmoji = e.target.value.replace(/ /g, `${emoji}`); // Add emoji after each space
    setInputText(e.target.value);
    setPreviewText(textWithEmoji);
  };

  const copyText = () => {
    const tempInput = document.createElement('input');
    tempInput.value = previewText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast('Text copied to clipboard!');
  };

  const showToast = (message) => {
    toast.success(message, { position: toast.POSITION.TOP_CENTER });
  };

  return (
    
    <div className="custom-container">

      <div className="circles">
        <div className="c"></div>
        <div className="c"></div>
        <div className="c"></div>
      </div>
      

      <h1 className="text-center custom-h1">Welcome to Beshify🤸</h1>

      <div className="input-group">
        <input
          type="text"
          id="text-input"
          className="custom-input"
          value={inputText}
          onInput={updatePreview}
          placeholder="Enter text"
        />
      </div>

      {inputText && (
        <div className="preview" id="preview-text">
          {previewText}
        </div>
      )}

      <div className="input-group-append d-flex justify-content-center">
          <button
            id="copy-button"
            className="btn btn-primary"
            onClick={copyText}
          >
            Copy
          </button>
      </div>



      <h6 className='insta'>Developed By: Jun Mark Moreno</h6>

      <div className="footer">
        <div className='footer-content'>
        <h6 className='insta'>Made via:</h6>
          <img src={ReactLogo} alt="React Logo" className="react-logo" />
          <img src={ViteLogo} alt="Vite Logo" className="vite-logo" />
          <img src={BootstrapLogo} alt="React Logo" className="bootstrap-logo" />
        </div>
      </div>



      <ToastContainer />
    </div>
  );
};

export default App;
