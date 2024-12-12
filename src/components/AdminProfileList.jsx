import React from 'react';

function AdminProfileList({ profiles, onProfileDeleted }) {
  const handleDelete = async (id) => {
    try {
      // In a real application, you would call an API to delete the profile
      // await deleteProfile(id);
      onProfileDeleted(id);
    } catch (error) {
      console.error('Failed to delete profile:', error);
    }
  };

  return (
    <ul className="space-y-4">
      {profiles.map(profile => (
        <li key={profile.id} className="flex items-center justify-between p-4 border rounded">
          <span>{profile.name}</span>
          <button
            onClick={() => handleDelete(profile.id)}
            className="px-3 py-1 text-white bg-red-500 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AdminProfileList;

