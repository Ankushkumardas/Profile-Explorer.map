import React, { useState, useEffect } from "react";
import ProfileList from "../components/ProfileList";
import SearchFilter from "../components/SearchFilter";
import MapComponent from "../components/MapComponent";
import { getProfiles } from "../lib/api";
import { Link } from "react-router-dom";

function Home() {
    const [profiles, setProfiles] = useState([]);
    const [filteredProfiles, setFilteredProfiles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProfiles().then((data) => {
            setProfiles(data);
            setFilteredProfiles(data);
            setIsLoading(false);
        });
    }, []);

    const handleSearch = (searchTerm, searchType) => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const filtered = profiles.filter((profile) => {
            if (searchType === "name") {
                return profile.name.toLowerCase().includes(lowercasedSearchTerm);
            } else if (searchType === "location") {
                return profile.address.toLowerCase().includes(lowercasedSearchTerm);
            }
            return true;
        });
        setFilteredProfiles(filtered);
    };

    return (
        <>
        <div>
            <nav className="flex justify-center gap-4 px-2 py-2 border rounded-md shadow-md">
                <Link to={'/'} className="px-2 py-1 text-white transition-all bg-black rounded-md hover:bg-gray-600">Home</Link>
                {/* <Link to={'/profile'}>Profile Page</Link> */}
                <Link to={'/admin'} className="px-2 py-1 text-white transition-all bg-black rounded-md hover:bg-gray-600">Admin Page</Link>
            </nav>
        </div>
        <main className="flex flex-col items-center justify-between min-h-screen p-8 bg-gray-50">
            <h1 className="mb-12 text-3xl font-bold tracking-tight text-gray-800">
                Profile Explorer.map
            </h1>
            <div className="flex w-full max-w-6xl gap-12 ">
                {/* Left Section: Search and Profile List */}
                <div className="w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <SearchFilter onSearch={handleSearch} />
                        {isLoading ? (
                            <div className="mt-4 text-center text-gray-500">Loading profiles...</div>
                        ) : (
                            <ProfileList profiles={filteredProfiles} />
                        )}
                </div>

                {/* Right Section: Map */}
                <div className="w-1/2 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-lg">
                        <MapComponent />
                </div>
            </div>
        </main>
        </>
    );
}

export default Home;