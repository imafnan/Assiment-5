import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import FromContact from "../components/FromContact";
import Navbar from "../components/NavBar";
import "../styles/from.css";

const UpdateContact = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:3000/api/contact/getOne/${id}`,
                    { withCredentials: true }
                );
                
                

                setFormData(res.data.contactIteam)
            } catch (err) {
                console.error("Failed to load contact", err);
            }
        };

        fetchContact();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(
                `http://localhost:3000/api/contact/update/${id}`,
                formData,
                { withCredentials: true }
            );

            navigate("/");
        } catch (err) {
            console.error("Update failed", err);
        }
    };

    return (
        <div className="app-body">
            <Navbar />

            <main className="main-section">
                <div className="page-container">
                    <section className="form-card">
                        <div className="form-card-header">
                            <h2 className="form-title">Update This Contact</h2>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <FromContact
                                formData={formData}
                                handleChange={handleChange}
                                isUpdate={true}
                            />
                        </form>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default UpdateContact;
