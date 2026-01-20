import React from 'react';
import '../styles/index.css';
import { useNavigate } from 'react-router-dom';

const DengarPOP = ({ onCancel, onDelete }) => {

  const navigate = useNavigate();

  const hendelSubmit = (e)=>{
            e.preventDefault();
  }


  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Delete Contact</h2>
        <p>Are you sure you want to delete this contact?</p>
        <form onClick={(e)=>{
          hendelSubmit(e)
        }}>

          <div className="popup-actions">
            <button className="btn btn-danger" onClick={async () => {
              await onDelete()
              navigate('/')
            }}>
              Delete
            </button>

            <button className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DengarPOP;
