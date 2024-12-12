import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import MapComponent from './MapComponent';

function ProfileList({ profiles }) {
  const [selectedAddress, setSelectedAddress] = useState(undefined);

  return (
    <div className=''>
    <div className="flex flex-col space-y-4">
      {profiles.length === 0 ? (
        <p>No profiles found matching your search criteria.</p>
      ) : (
        profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSummary={(address) => setSelectedAddress(address)}
          />
        ))
      )}
      
    </div>
    <div className="mt-4 ">
        <MapComponent address={selectedAddress} />
      </div>
    </div>
  );
}

export default ProfileList;

