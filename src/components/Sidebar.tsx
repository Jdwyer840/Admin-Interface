"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();
    const menuItems = [
        { name: 'Dashboard', path: '/admin/' },
        { name: 'Analytics', path: '/admin/analytics' },
        { name: 'Users', path: '/admin/users' },
        { name: 'Orders', path: '/admin/orders' },
    ];

    return (
        <aside className="w-64 bg-gray-900 text-gray-400 flex flex-col p-4 space-y-4">
            <div className="text-2xl font-bold text-white mb-6">Admin Panel</div>
            <nav className="space-y-2">
                {menuItems.map((item) => (
                    <Link href={item.path} key={item.name}>
                        <span
                            className={`block py-2 px-4 rounded ${
                                pathname === item.path
                                    ? 'bg-gray-700 text-white'
                                    : 'hover:bg-gray-800'
                            }`}
                        >
                            {item.name}
                        </span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
