interface AtmosphericLayerCardProps {
  title: string;
  altitudeRange: string;
  features: string[];
  bgColor: string;
  textColor: string;
}

export default function AtmosphericLayerCard({
  title,
  altitudeRange,
  features,
  bgColor,
  textColor
}: AtmosphericLayerCardProps) {
  return (
    <div className={`${bgColor} p-6 rounded-lg`}>
      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
        {title} ({altitudeRange})
      </h4>
      <ul className={`text-sm ${textColor} space-y-1`}>
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </div>
  );
}