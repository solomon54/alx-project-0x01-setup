
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-cyan-600">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">@{username}</p>
      <p className="text-gray-600 mb-2">{address.city}</p>
      <p className="text-gray-600 mb-2">{phone}</p>
      <p className="text-gray-600 mb-2">{website}</p>
      <p className="text-gray-600">Company: {company.name}</p>

    </div>
  );
};

export default UserCard;
