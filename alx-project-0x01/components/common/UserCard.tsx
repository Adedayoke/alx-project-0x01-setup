import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700"><strong>Email:</strong> {email}</p>
        <p className="text-gray-700"><strong>Phone:</strong> {phone}</p>
        <p className="text-gray-700"><strong>Website:</strong> <a href={`http://${website}`} className="text-blue-500 hover:underline">{website}</a></p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800">Address</h3>
        <p className="text-gray-600">{address.street}, {address.suite}</p>
        <p className="text-gray-600">{address.city}, {address.zipcode}</p>
        <p className="text-gray-600">Lat: {address.geo.lat}, Lng: {address.geo.lng}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800">Company</h3>
        <p className="text-gray-600"><strong>{company.name}</strong></p>
        <p className="text-gray-600 italic">"{company.catchPhrase}"</p>
        <p className="text-gray-600">{company.bs}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;