import { useState } from 'react';

const dummyData = Array.from({ length: 20 }, (_, i) => ({
    first_name: ['Jane', 'Kristen', 'Zoey', 'William', 'Tony'][i % 5],
    last_name: ['Fisher', 'Copper', 'Lang', 'Howard', 'Reichert'][i % 5],
    email: `user${i + 1}@example.com`,
    password_hash: '*****',
    customer_pod: `POD${(i % 3) + 1}`,
    catalog_customer_group: ['Group A', 'Group B', 'Group C'][i % 3],
    role: ['Sr. Dev', 'S. Manager', 'Tech Lead', 'C.M.', 'CEO'][i % 5],
    status: ['Active', 'Paused', 'Vacation', 'Active', 'Active'][i % 5],
}));

const UsersTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const totalPages = Math.ceil(dummyData.length / rowsPerPage);
    const paginatedData = dummyData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg max-w-full min-h-90 mx-auto ">
            <div className="flex items-center justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="bg-gray-700 text-gray-200 rounded p-2 text-sm w-1/3"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Add New
                </button>
            </div>

            <div className="overflow-auto max-h-100 rounded-lg ">
                <table className="w-full text-left text-gray-400">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-700">Name</th>
                        <th className="py-2 px-4 border-b border-gray-700">Role</th>
                        <th className="py-2 px-4 border-b border-gray-700">Email</th>
                        <th className="py-2 px-4 border-b border-gray-700">Status</th>
                        <th className="py-2 px-4 border-b border-gray-700">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {paginatedData.map((user, index) => (
                        <tr key={index} className="hover:bg-gray-700">
                            <td className="py-2 px-4 border-b border-gray-700 flex items-center">
                                <span className="w-8 h-8 bg-gray-600 rounded-full mr-2"></span>
                                <div>
                                    <div className="text-white">{user.first_name} {user.last_name}</div>
                                    <div className="text-sm text-gray-400">{user.email}</div>
                                </div>
                            </td>
                            <td className="py-2 px-4 border-b border-gray-700">{user.role}</td>
                            <td className="py-2 px-4 border-b border-gray-700">{user.email}</td>
                            <td className="py-2 px-4 border-b border-gray-700">
                              <span className={`px-2 py-1 rounded-full text-xs ${user.status === 'Active' ? 'bg-green-600' : user.status === 'Paused' ? 'bg-yellow-600' : 'bg-red-600'}`}>
                                {user.status}
                              </span>
                            </td>
                            <td className="py-2 px-4 border-b border-gray-700 text-right">
                                <button className="text-gray-400 hover:text-white">...</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-400">Total {dummyData.length} users</div>
                <div className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-200 hover:bg-gray-500'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UsersTable;
