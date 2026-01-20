import React, { useEffect, useState } from 'react';
import '../styles/show.css'
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/NavBar';
import axios from 'axios';
import DengarPOP from '../components/DengarPOP';


const ContactDetails = () => {
    const { id } = useParams();
    const [contactDitailes, setContactDitailes] = useState({})
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => setShowPopup(true);
    const closePopup = () => setShowPopup(false);

    const getContactDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/contact/getOne/${id}`, { withCredentials: true });
            setContactDitailes(response.data.contactIteam)
            setShowPopup(false);
            console.log(response.data);
            

        } catch (error) {
            console.error('Error fetching contact details:', error);
        }
    }
    const handleDelete = async () => {
        try {
            await axios.post(
                "http://localhost:3000/api/contact/delete",
                { _id: contactDitailes._id },
                { withCredentials: true }
            );
            setShowPopup(false);
            console.log("Deleted successfully");

        } catch (error) {
            console.error("Delete failed", error);
        }
    }

    


    useEffect(() => { getContactDetails() }, []);

    return (
        <>
            {showPopup && (
                <DengarPOP onCancel={closePopup} onDelete={ handleDelete} />
            )}
            <div className="app-body">


                <Navbar />


                <main className="main-section">
                    <div className="page-container">


                        <section className="contact-card">


                            <div className="card-header">
                                <h2 className="card-title">Contact Details</h2>
                            </div>


                            <div className="card-body">

                                <div className="contact-detail-row">
                                    <span className="detail-label">First Name</span>
                                    <span className="detail-value">{contactDitailes.firstName}</span>
                                </div>

                                <div className="contact-detail-row">
                                    <span className="detail-label">Last Name</span>
                                    <span className="detail-value">{contactDitailes.lastName}</span>
                                </div>

                                <div className="contact-detail-row">
                                    <span className="detail-label">Email</span>
                                    <span className="detail-value">{contactDitailes.email}</span>
                                </div>

                                <div className="contact-detail-row">
                                    <span className="detail-label">Phone</span>
                                    <span className="detail-value">{contactDitailes.phone}</span>
                                </div>

                                <div className="contact-detail-row">
                                    <span className="detail-label">Address</span>
                                    <span className="detail-value">{contactDitailes.address}</span>
                                </div>

                                <div className="action-buttons">
                                    <Link to={`/updateContact/${id}`} className="btn btn-info">Edit</Link>
                                    <button onClick={openPopup} className="btn btn-danger"> Delete</button>
                                    <Link to={'/'} className="btn-primary"> Cancel</Link>
                                </div>

                            </div>
                        </section>

                    </div>
                </main>

            </div>
        </>
    );
};

export default ContactDetails;
