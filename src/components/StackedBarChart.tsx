import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', online: 4000, inStore: 2400 },
    { name: 'Feb', online: 3000, inStore: 1398 },
    { name: 'Mar', online: 2000, inStore: 9800 },
    { name: 'Apr', online: 2780, inStore: 3908 },
    { name: 'May', online: 1890, inStore: 4800 },
    { name: 'Jun', online: 2390, inStore: 3800 },
    { name: 'Jul', online: 3490, inStore: 4300 },
];

const StackedBarChart = () => (
    <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <Bar dataKey="online" stackId="a" fill="#8884d8" />
            <Bar dataKey="inStore" stackId="a" fill="#82ca9d" />
        </BarChart>
    </ResponsiveContainer>
);

export default StackedBarChart;
