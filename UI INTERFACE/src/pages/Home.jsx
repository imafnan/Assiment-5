import { useState } from 'react';
import '../styles/index.css'
import { Link } from 'react-router-dom';
import ActionBtns from '../components/ActionBtns';
import Navbar from '../components/NavBar';
import ContactShowLevel from '../components/ContactShowLevel';
import DengarPOP from '../components/DengarPOP';

import FilterSection from '../components/FilterSection';

const Home = () => {

    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");
    return (


        <>

            <Navbar />


            <main className="main-section">
                <div className="page-container">


                    <section className="contact-card">


                        <div className="card-header">
                            <h2 className="card-title">All Contacts</h2>

                            <div className="card-actions">
                                <div className="search-box">
                                    <input name='searchContact' type="text" className="search-input" placeholder="Search contact"  onChange={e => setSearch(e.target.value)}/>
                                    <button className="btn btn-success">Search</button>
                                </div>

                                <Link to={'/addcontact'} className="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>

                                    <strong>Add New</strong></Link>
                            </div>
                        </div>


                        <FilterSection filter={filter} setFilter={setFilter} />


                        <div className="card-body">
                            <table className="contact-table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th className="action-col">Actions</th>
                                    </tr>
                                </thead>


                                <ContactShowLevel filter={filter} search={search}/>


                            </table>
                        </div>

                    </section>

                </div>
            </main>

        </>
    );
};

export default Home;
