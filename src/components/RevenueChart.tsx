import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart} from 'recharts';

const data = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
];

export default function RevenueChart() {
    console.log("herherehrher")
    // return null;
    return <BarChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey="value" stroke="#82ca9d"/>
        <CartesianGrid stroke="#ccc"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
    </BarChart>;
}

