interface GreenhouseGasCardProps {
  title: string;
  features: string[];
  gwp: string;
  bgColor: string;
  textColor: string;
}

export default function GreenhouseGasCard({
  title,
  features,
  gwp,
  bgColor,
  textColor
}: GreenhouseGasCardProps) {
  return (
    <div className={`${bgColor} p-6 rounded-lg`}>
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
        {title}
      </h4>
      <ul className={`text-sm ${textColor} space-y-1`}>
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
      <div className={`mt-3 text-xs ${textColor.replace('800', '700').replace('200', '300')}`}>
        <strong>GWP:</strong> {gwp}
      </div>
    </div>
  );
}