import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminProfileForm({ onProfileAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    photo: '',
    email: '',
    phone: '',
    address: '',
    interests: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // In a real application, you would call an API to create the profile
      // const newProfile = await createProfile({
      //   ...formData,
      //   interests: formData.interests.split(',').map(i => i.trim())
      // });

      const newProfile = {
        id: Date.now().toString(),
        ...formData,
        interests: formData.interests.split(',').map(i => i.trim())
      };
      onProfileAdded(newProfile);
      setFormData({
        name: '',
        description: '',
        photo: '',
        email: '',
        phone: '',
        address: '',
        interests: ''
      });
    } catch (error) {
      console.error('Failed to create profile:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="url"
        name="photo"
        value={formData.photo}
        onChange={handleChange}
        placeholder="Photo URL"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="interests"
        value={formData.interests}
        onChange={handleChange}
        placeholder="Interests (comma-separated)"
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="px-4 py-2 text-white bg-green-500 rounded">
        Create Profile
      </button>
    </form>
  );
}

export default AdminProfileForm;

