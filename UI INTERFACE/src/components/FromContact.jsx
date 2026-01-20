import React from "react";
import { Link } from "react-router-dom";
import "../styles/from.css";

const FromContact = ({ formData, handleChange, isUpdate = false }) => {
    
    
    return (
        <>
            {/* First Name */}
            <div className="form-row">
                <label className="form-label">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    className="form-input"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Last Name */}
            <div className="form-row">
                <label className="form-label">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    className="form-input"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>

            {/* Email */}
            <div className="form-row">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            {/* Phone */}
            <div className="form-row">
                <label className="form-label">Phone</label>
                <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="+8801XXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            {/* Address */}
            <div className="form-row">
                <label className="form-label">Address</label>
                <textarea
                    name="address"
                    className="form-textarea"
                    placeholder="Enter address"
                    value={formData.address}
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="form-divider"></div>

            {/* Actions */}
            <div className="form-actions">
                <button type="submit" className="btn-primary">
                    {isUpdate ? "Update Contact" : "Save Contact"}
                </button>

                <Link to="/" className="btn-primary">
                    Cancel
                </Link>
            </div>
        </>
    );
};

export default FromContact;
