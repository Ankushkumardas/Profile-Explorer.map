import React, { useState, useEffect } from 'react';
import AdminProfileList from '../components/AdminProfileList';
import AdminProfileForm from '../components/AdminProfileForm';
import { getProfiles } from '../lib/api';

function AdminPage() {
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProfiles().then((data) => {
      setProfiles(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-3xl font-bold">Admin Panel</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Add New Profile</h2>
          <AdminProfileForm onProfileAdded={(newProfile) => setProfiles([...profiles, newProfile])} />
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Manage Profiles</h2>
          {isLoading ? (
            <div>Loading profiles...</div>
          ) : (
            <AdminProfileList 
              profiles={profiles} 
              onProfileDeleted={(deletedId) => setProfiles(profiles.filter(p => p.id !== deletedId))}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

