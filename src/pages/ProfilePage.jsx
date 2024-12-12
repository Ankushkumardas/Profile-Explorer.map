import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProfileById } from '../lib/api';
import MapComponent from '../components/MapComponent';

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getProfileById(id).then((data) => {
      setProfile(data);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <div>Loading profile...</div>;
  }

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="container p-4 mx-auto">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center mb-4 space-x-4">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-32 h-32 rounded-full"
          />
          <div>
            <h1 className="text-3xl font-bold">{profile.name}</h1>
            <p className="text-gray-600">{profile.description}</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="mb-2 text-xl font-semibold">Contact Information</h2>
          <p>Email: {profile.email}</p>
          <p>Phone: {profile.phone}</p>
          <p>Address: {profile.address}</p>
        </div>
        <div className="mb-4">
          <h2 className="mb-2 text-xl font-semibold">Interests</h2>
          <ul className="list-disc list-inside">
            {profile.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold">Location</h2>
          <MapComponent address={profile.address} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

