"use client";

interface PolysaccharideItem {
  name: string;
  description: string;
  details: string[];
  bgColor: string;
  textColor: string;
}

interface PolysaccharideSectionProps {
  title: string;
  items: PolysaccharideItem[];
}

export default function PolysaccharideSection({ title, items }: PolysaccharideSectionProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        {title}
      </h3>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className={`p-4 rounded ${item.bgColor}`}>
            <h4 className={`font-semibold ${item.textColor} mb-2`}>
              {item.name}
            </h4>
            <p className={`text-sm ${item.textColor.replace('800', '600').replace('200', '400')} mb-2`}>
              {item.description}
            </p>
            <ul className={`text-sm ${item.textColor.replace('800', '700').replace('200', '300')} space-y-1`}>
              {item.details.map((detail, detailIndex) => (
                <li key={detailIndex}>• {detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}