import { cn } from '@/lib/utils';

interface PriceTableProps {
  title: string;
  columns: string[];
  services: {
    name: string;
    price: string;
    description: string;
  }[];
  headerBgColor: string;
}

export default function PriceTable({ 
  title, 
  columns, 
  services, 
  headerBgColor 
}: PriceTableProps) {
  return (
    <div className="w-full max-w-5xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      {/* 表格标题 */}
      <div className={cn("py-4 px-6 text-center", headerBgColor)}>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      
      {/* 表格 */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* 表头 */}
          <thead>
            <tr className={cn("text-left", headerBgColor)}>
              {columns.map((column, index) => (
                <th key={index} className="px-6 py-4 font-semibold text-white">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          
          {/* 表格内容 */}
          <tbody className="divide-y divide-gray-700">
            {services.map((service, index) => (
              <tr 
                key={index} 
                className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
              >
                <td className="px-6 py-4 font-medium text-white">{service.name}</td>
                <td className="px-6 py-4 text-gray-300">{service.price}</td>
                <td className="px-6 py-4 text-gray-300">{service.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}