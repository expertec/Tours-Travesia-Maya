import { Car, Plane, Briefcase, Map, Home, Palmtree } from 'lucide-react';

interface ServiceIconProps {
  iconName: string;
  className?: string;
}

const iconMap = {
  car: Car,
  plane: Plane,
  briefcase: Briefcase,
  map: Map,
  home: Home,
  palmtree: Palmtree,
};

export default function ServiceIcon({ iconName, className = "w-16 h-16" }: ServiceIconProps) {
  const Icon = iconMap[iconName.toLowerCase() as keyof typeof iconMap];

  if (!Icon) return null;

  return <Icon className={className} />;
}
