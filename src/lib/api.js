const profiles = [
    {
    id: '1',
    name: 'John Doe',
    description: 'Software Developer',
    photo: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    interests: ['coding', 'hiking', 'photography']
  },
  {
    id: '2',
    name: 'Alice Johnson',
    description: 'Graphic Designer',
    photo: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid',
    email: 'alice@example.com',
    phone: '987-654-3210',
    address: '456 Elm St, Springfield, USA',
    interests: ['design', 'travel', 'art']
  },
  {
    id: '3',
    name: 'Bob Smith',
    description: 'Data Scientist',
    photo: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid',
    email: 'bob@example.com',
    phone: '555-123-4567',
    address: '789 Oak St, Metropolis, USA',
    interests: ['data analysis', 'basketball', 'reading']
  },
  {
    id: '4',
    name: 'Sophie Lee',
    description: 'Web Developer',
    photo: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid',
    email: 'sophie@example.com',
    phone: '321-654-9870',
    address: '101 Pine St, Rivertown, Canada',
    interests: ['programming', 'gaming', 'music']
  },
  {
    id: '5',
    name: 'Mark Williams',
    description: 'Product Manager',
    photo: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid',
    email: 'mark@example.com',
    phone: '888-555-7777',
    address: '202 Maple Ave, Lakeside, UK',
    interests: ['product strategy', 'cycling', 'cooking']
  },
  {
    id: '6',
    name: 'Emily Davis',
    description: 'UX/UI Designer',
    photo: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid',
    email: 'emily@example.com',
    phone: '333-222-1111',
    address: '303 Birch Rd, Greenwood, Australia',
    interests: ['user experience', 'photography', 'fashion']
  }
  // Add more mock profiles here
];

export function getProfiles() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(profiles), 1000);
  });
}

export function getProfileById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const profile = profiles.find(p => p.id === id);
      resolve(profile);
    }, 1000);
  });
}

