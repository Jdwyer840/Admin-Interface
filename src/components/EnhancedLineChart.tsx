import { LineChart, Line, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 4780 },
    { name: 'May', revenue: 5890 },
    { name: 'Jun', revenue: 4390 },
    { name: 'Jul', revenue: 6490 },
];

const EnhancedLineChart = () => (
    <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="url(#colorRevenue)" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
    </ResponsiveContainer>
);

export default EnhancedLineChart;
