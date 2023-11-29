import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#00C49F", "#FF444A", "#8BC34A", "#004d99"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Chart = ({ biodatas, maleBiodatas, femaleBiodatas, premiumBiodatas }) => {
  const data = [
    { name: "Total Biodata", value: biodatas.length },
    { name: "Total Male Biodata", value: maleBiodatas.length },
    { name: "Total Female Biodata", value: femaleBiodatas.length },
    { name: "Total Premium Biodata", value: premiumBiodatas.length },
  ];
  return (
    <div style={{ width: "100%", height: 500 }} className="p-5 md:p-4 lg:p-2">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={140}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
