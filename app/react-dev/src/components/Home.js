import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [nations, setNations] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('/odata/v4/betting/Nations')
            .then((res) => res.json())
            .then((data) => setNations(data.value || []))
            .catch((err) => console.error(err));
    }, []);

    const filteredNations = nations.filter((n) =>
        n.name?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
            {/* Navbar */}
            <nav className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-blue-600">🌎 Nations</h1>
                    <div className="flex gap-6 text-gray-600 text-sm font-medium">
                        <Link to="/" className="hover:text-blue-500">Home</Link>
                        <Link to="/about" className="hover:text-blue-500">About</Link>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <header className="text-center py-10 bg-gradient-to-br from-blue-100 to-blue-50 border-b">
                <h2 className="text-4xl font-bold text-gray-800 mb-3">
                    Participating Nations
                </h2>
                <p className="text-gray-600 mb-6">
                    Browse through different countries.
                </p>
                <input
                    type="text"
                    placeholder="🔍 Search nations..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="px-4 py-2 rounded-full border border-gray-300 w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
            </header>

            {/* Main Content */}
            <main className="flex-grow flex justify-center py-10">
                <div className="w-full max-w-6xl px-6">
                    {nations.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {(search ? filteredNations : nations).map((n) => (

                                <div
                                    key={n.ID}
                                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
                                >
                                    <h3 className="text-lg font-semibold text-red-800 mb-1">
                                        {n.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-1">
                                        ISO Code: <span className="font-mono text-cyan-700">{n.isoCode}</span>
                                    </p>
                                    <p className="text-sm text-magenta-600">
                                        Region: <span className="font-medium">{n.region}</span>
                                    </p>
                                </div>

                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 italic">No nations found 😢</p>
                    )}
                </div>
            </main>


        </div>

    );
}
