import React from 'react';
import { Link } from 'react-router-dom';

function ProfileCard({ profile, onSummary }) {
  return (
    <div className="flex items-center p-4 space-x-4 border rounded-lg">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h2 className="text-xl font-semibold">{profile.name}</h2>
        <p className="text-gray-600">{profile.description}</p>
        <div className="mt-2 space-x-2">
          <button
            onClick={() => onSummary(profile.address)}
            className="px-3 py-1 text-white bg-blue-500 rounded"
          >
            Summary
          </button>
          <Link
            to={`/profile/${profile.id}`}
            className="px-3 py-1 text-gray-800 bg-gray-200 rounded"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

