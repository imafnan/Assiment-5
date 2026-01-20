import { useState } from "react";
import "../styles/from.css";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FromContact from "../components/FromContact";

const AddContact = () => {
    const navigate = useNavigate();

    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const { firstName, lastName, email, phone, address } = formData;

        if (!firstName || !lastName || !email || !phone || !address) {
            setError("All fields are required!");
            return;
        }

        try {
            await axios.post(
                "http://localhost:5173/api/contact/create",
                formData,
                { withCredentials: true }
            );

            navigate("/");
        } catch (err) {
            console.error(err);
            setError("Contact creation failed");
        }
    };

    return (
        <div className="app-body">
            <Navbar />

            <main className="main-section">
                <div className="page-container">
                    <section className="form-card">
                        <div className="form-card-header">
                            <h2 className="form-title">Add New Contact</h2>
                        </div>

                        <div className="form-card-body">
                            {error && <div className="error">{error}</div>}

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <FromContact
                                    formData={formData}
                                    handleChange={handleChange}
                                />
                            </form>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default AddContact;
