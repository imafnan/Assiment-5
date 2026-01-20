const FilterSection = ({ filter, setFilter }) => {
    return (
        <div className="filter-bar">
            <div className="filter-label">Filter</div>

            <select value={filter} onChange={e => setFilter(e.target.value)}>
                <option value="firstName">First Name (A → Z)</option>
                <option value="lastName">Last Name (A → Z)</option>
                <option value="oldest">Oldest First</option>
            </select>
        </div>
    );
};

export default FilterSection;
