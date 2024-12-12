import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css'

const AdminDashboard = () => {
    const [data, setData] = useState({
        users: [],
        teams: [],
        players: [],
        matches: [],
        venues: [],
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const users = await axios.get('/api/users');
            const teams = await axios.get('/api/teams');
            const players = await axios.get('/api/players');
            const matches = await axios.get('/api/matches');
            const venues = await axios.get('/api/venues');
            setData({
                users: users.data,
                teams: teams.data,
                players: players.data,
                matches: matches.data,
                venues: venues.data,
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAdd = async (type, newItem) => {
        try {
            await axios.post(`/api/${type}`, newItem);
            fetchData();
        } catch (error) {
            console.error(`Error adding ${type}:`, error);
        }
    };

    const handleUpdate = async (type, id, updatedItem) => {
        try {
            await axios.put(`/api/${type}/${id}`, updatedItem);
            fetchData();
        } catch (error) {
            console.error(`Error updating ${type}:`, error);
        }
    };

    const handleDelete = async (type, id) => {
        try {
            await axios.delete(`/api/${type}/${id}`);
            fetchData();
        } catch (error) {
            console.error(`Error deleting ${type}:`, error);
        }
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-sections">
                <Section title="Users" data={data.users} handleAdd={handleAdd} handleUpdate={handleUpdate} handleDelete={handleDelete} type="users" />
                <Section title="Teams" data={data.teams} handleAdd={handleAdd} handleUpdate={handleUpdate} handleDelete={handleDelete} type="teams" />
                <Section title="Players" data={data.players} handleAdd={handleAdd} handleUpdate={handleUpdate} handleDelete={handleDelete} type="players" />
                <Section title="Matches" data={data.matches} handleAdd={handleAdd} handleUpdate={handleUpdate} handleDelete={handleDelete} type="matches" />
                <Section title="Venues" data={data.venues} handleAdd={handleAdd} handleUpdate={handleUpdate} handleDelete={handleDelete} type="venues" />
            </div>
        </div>
    );
};

const Section = ({ title, data, handleAdd, handleUpdate, handleDelete, type }) => {
    const [newItem, setNewItem] = useState({});
    const [editItem, setEditItem] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prevItem) => ({
            ...prevItem,
            [name]: value,
        }));
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditItem((prevItem) => ({
            ...prevItem,
            [name]: value,
        }));
    };

    const handleEdit = (item) => {
        setEditItem(item);
        setNewItem({});
    };

    return (
        <div className="section">
            <h2>{title}</h2>
            <table>
                <thead>
                    <tr>
                        {data.length > 0 && Object.keys(data[0]).map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            {Object.keys(item).map((key) => (
                                <td key={key}>{item[key]}</td>
                            ))}
                            <td>
                                <button onClick={() => handleEdit(item)}>Edit</button>
                                <button onClick={() => handleDelete(type, item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="add-edit-section">
                <h3>{editItem ? `Edit ${title.slice(0, -1)}` : `Add New ${title.slice(0, -1)}`}</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (editItem) {
                        handleUpdate(type, editItem.id, editItem);
                    } else {
                        handleAdd(type, newItem);
                    }
                    setEditItem(null);
                    setNewItem({});
                }}>
                    {(editItem || (newItem && Object.keys(data[0] || {}).map((key) => (
                        <div key={key} className="form-group">
                            <label htmlFor={key}>{key}</label>
                            <input
                                type="text"
                                id={key}
                                name={key}
                                value={editItem ? editItem[key] || '' : newItem[key] || ''}
                                onChange={editItem ? handleEditChange : handleChange}
                            />
                        </div>
                    ))))}
                    <button type="submit">{editItem ? 'Update' : 'Add'}</button>
                </form>
            </div>
        </div>
    );
};

export default AdminDashboard;
