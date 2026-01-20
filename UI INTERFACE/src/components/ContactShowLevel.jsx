import axios from "axios";
import { useState, useEffect } from "react";
import ActionBtns from "./ActionBtns";
import "../styles/noContact.css";

const ContactShowLevel = ({ filter, search }) => {
    const [contactData, setContactData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:5173/api/contact")
            .then(res => {
                setContactData(res.data.contactIteam || []);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    let filteredData = [...contactData];

    if (search) {
        filteredData = filteredData.filter(item =>
            item.firstName.toLowerCase().includes(search.toLowerCase()) ||
            item.lastName.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase()) ||
            item.phone.includes(search)
        );
    }

    if (filter === "firstName") {
        filteredData.sort((a, b) =>
            a.firstName.localeCompare(b.firstName)
        );
    }

    if (filter === "lastName") {
        filteredData.sort((a, b) =>
            a.lastName.localeCompare(b.lastName)
        );
    }

    if (filter === "oldest") {
        filteredData.sort((a, b) =>
            new Date(a.createdAt) - new Date(b.createdAt)
        );
    }

    
    if (!loading && filteredData.length === 0) {
        return (
            <tbody>
                <tr>
                    <td colSpan="6">
                        <div className="no-contact-box">
                            <h3>No Contact Information</h3>
                            <p>
                                {search
                                    ? "No contact matches your search."
                                    : "You haven't added any contact yet."}
                            </p>
                        </div>
                    </td>
                </tr>
            </tbody>
        );
    }

    return (
        <tbody>
            {filteredData.map((e, id) => (
                <tr key={e._id}>
                    <td>{id + 1}</td>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.email}</td>
                    <td>{e.phone}</td>
                    <td><ActionBtns contactId={e._id} /></td>
                </tr>
            ))}
        </tbody>
    );
};

export default ContactShowLevel;
