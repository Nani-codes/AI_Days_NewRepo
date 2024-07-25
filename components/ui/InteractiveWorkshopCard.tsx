// components/templates/workshops/InteractiveWorkshopCard.tsx

'use client'; // This directive makes this component a Client Component

import WorkshopCard from './WorkshopCard';

interface InteractiveWorkshopCardProps {
  title: string;
  description: string;
  path: string;
  badge: string;
}

const InteractiveWorkshopCard: React.FC<InteractiveWorkshopCardProps> = ({ title, description, path, badge }) => {
  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() => window.location.href = path}
    >
      <WorkshopCard
        title={title}
        description={description}
        badge={badge}
      />
    </div>
  );
};

export default InteractiveWorkshopCard;
