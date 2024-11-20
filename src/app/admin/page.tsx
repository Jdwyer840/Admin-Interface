"use client"
import RevenueChart from "../../components/RevenueChart";
import EnhancedLineChart from "@/components/EnhancedLineChart";
import StackedBarChart from "@/components/StackedBarChart";
import RevenuePieChart from "@/components/RevenuePieChart";

const Dashboard = () => {
    const stats = [
        { label: 'New Visits', value: '57,820', percentage: 71 },
        { label: 'Purchases', value: '$89,745', percentage: 54 },
        { label: 'Active Users', value: '178,391', percentage: 63 },
        { label: 'Revenue', value: '$32,592', percentage: 84 },
    ];

    return (
        <div className="space-y-10">
            <h1 className="text-3xl font-bold text-gray-100">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="p-4 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg flex flex-col items-center"
                    >
                        <div className="text-3xl font-semibold text-white">{stat.value}</div>
                        <div className="text-gray-400">{stat.label}</div>
                        <div className="w-full h-2 bg-gray-600 rounded-full mt-2">
                            <div
                                className="h-full bg-green-500 rounded-full"
                                style={{ width: `${stat.percentage}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Additional sections for detailed analytics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold text-white mb-4">Revenue Analysis</h2>
                    <EnhancedLineChart/>
                </div>

                <div className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold text-white mb-4">Sales Breakdown</h2>
                    <StackedBarChart/>
                </div>

                <div className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg col-span-1 md:col-span-2">
                    <h2 className="text-lg font-bold text-white mb-4">Revenue Sources</h2>
                    <RevenuePieChart/>
                </div>
                <div className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold text-white mb-4">Revenue Analysis</h2>
                    {/* Replace this with an actual chart */}
                    <div className="h-32 bg-gray-700 rounded">
                        <RevenueChart/>
                    </div>
                </div>
                <div className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg">
                    <h2 className="text-lg font-bold text-white mb-4">User Geography</h2>
                    {/* Placeholder map */}
                    <div className="h-32 bg-gray-700 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
