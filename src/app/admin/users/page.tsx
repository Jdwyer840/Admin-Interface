"use client"

import UsersTable from './UsersTable';

const UsersPage = () => {
    return (
        <div className=''>
            <h1 className="text-2xl font-bold text-gray-100 mb-4">Users</h1>
            <UsersTable />
        </div>
    );
};

export default UsersPage;
