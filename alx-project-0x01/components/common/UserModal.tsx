import { UserProps, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserProps>({
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      if (addressField === "geo") {
        const geoField = name.split(".")[2];
        setUser((prevUser) => ({
          ...prevUser,
          address: {
            ...prevUser.address,
            geo: {
              ...prevUser.address.geo,
              [geoField]: value
            }
          }
        }));
      } else {
        setUser((prevUser) => ({
          ...prevUser,
          address: {
            ...prevUser.address,
            [addressField]: value
          }
        }));
      }
    } else if (name.startsWith("company.")) {
      const companyField = name.split(".")[1];
      setUser((prevUser) => ({
        ...prevUser,
        company: {
          ...prevUser.company,
          [companyField]: value
        }
      }));
    } else {
      setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="id" className="block text-gray-700 font-medium mb-2">ID</label>
            <input
              type="number"
              id="id"
              name="id"
              value={user.id}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter ID"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter full name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={user.website}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter website"
              required
            />
          </div>
          <fieldset className="mb-4">
            <legend className="text-lg font-medium text-gray-800 mb-2">Address</legend>
            <div className="mb-2">
              <label htmlFor="address.street" className="block text-gray-700 font-medium mb-1">Street</label>
              <input
                type="text"
                id="address.street"
                name="address.street"
                value={user.address.street}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter street"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address.suite" className="block text-gray-700 font-medium mb-1">Suite</label>
              <input
                type="text"
                id="address.suite"
                name="address.suite"
                value={user.address.suite}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter suite"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address.city" className="block text-gray-700 font-medium mb-1">City</label>
              <input
                type="text"
                id="address.city"
                name="address.city"
                value={user.address.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter city"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address.zipcode" className="block text-gray-700 font-medium mb-1">Zipcode</label>
              <input
                type="text"
                id="address.zipcode"
                name="address.zipcode"
                value={user.address.zipcode}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter zipcode"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address.geo.lat" className="block text-gray-700 font-medium mb-1">Latitude</label>
              <input
                type="text"
                id="address.geo.lat"
                name="address.geo.lat"
                value={user.address.geo.lat}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter latitude"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address.geo.lng" className="block text-gray-700 font-medium mb-1">Longitude</label>
              <input
                type="text"
                id="address.geo.lng"
                name="address.geo.lng"
                value={user.address.geo.lng}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter longitude"
                required
              />
            </div>
          </fieldset>
          <fieldset className="mb-4">
            <legend className="text-lg font-medium text-gray-800 mb-2">Company</legend>
            <div className="mb-2">
              <label htmlFor="company.name" className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                id="company.name"
                name="company.name"
                value={user.company.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company name"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="company.catchPhrase" className="block text-gray-700 font-medium mb-1">Catch Phrase</label>
              <input
                type="text"
                id="company.catchPhrase"
                name="company.catchPhrase"
                value={user.company.catchPhrase}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter catch phrase"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="company.bs" className="block text-gray-700 font-medium mb-1">BS</label>
              <input
                type="text"
                id="company.bs"
                name="company.bs"
                value={user.company.bs}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter BS"
                required
              />
            </div>
          </fieldset>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;