// Complex example with real-world patterns
import React, { useState, useEffect, useCallback } from 'react';

interface UserData {
  id: number;
  name: string;
  email?: string;
  profile_image?: string; // snake_case should be allowed
}

interface ComponentProps {
  userData: UserData;
  onUserUpdate?: (user: UserData) => void;
  _internalFlag?: boolean; // Should be ignored by unused-vars
}

// React component with various patterns
export const UserProfile: React.FC<ComponentProps> = ({
  userData,
  onUserUpdate,
  _internalFlag, // Should not warn about unused
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [_loadingState, setLoadingState] = useState(false); // Should not warn
  
  // Using any type (should be allowed)
  const [formData, setFormData] = useState<any>(userData);
  
  useEffect(() => {
    setFormData(userData);
  }, [userData]);
  
  const handleSave = useCallback(async () => {
    setLoadingState(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      onUserUpdate?.(formData);
      setIsEditing(false);
    } catch (_error) { // Should not warn about unused error
      console.error('Save failed');
    } finally {
      setLoadingState(false);
    }
  }, [formData, onUserUpdate]);
  
  const handleInputChange = (field: keyof UserData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };
  
  // Destructuring with ignored variables
  const { id, name, email, ...restProps } = formData;
  const [_firstItem, secondItem, ...otherItems] = [1, 2, 3, 4]; // _firstItem should be ignored
  
  return (
    <div className="user-profile">
      {/* Comments around elements should be allowed */}
      
      <div className="profile-header">
        <h2>{name}</h2>
        <p>ID: {id}</p>
      </div>
      
      {/* Another comment */}
      
      {isEditing ? (
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}>
          <input
            type="text"
            value={name}
            onChange={handleInputChange('name')}
            placeholder="Name"
          />
          <input
            type="email"
            value={email || ''}
            onChange={handleInputChange('email')}
            placeholder="Email"
          />
          <button type="submit">Save</button>
          <button 
            type="button" 
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <div className="profile-display">
          <p>Name: {name}</p>
          {email && <p>Email: {email}</p>}
          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
      
      {/* Test unused console.log */}
      <pre>{JSON.stringify(restProps, null, 2)}</pre>
      <p>Second item: {secondItem}, Others: {JSON.stringify(otherItems)}</p>
    </div>
  );
};

export default UserProfile;