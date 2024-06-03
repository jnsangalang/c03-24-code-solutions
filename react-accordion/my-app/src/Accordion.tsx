import { TopicCard } from './TopicCard';
import { useState } from 'react';
export type Props = {
  topics: Topics[];
};
export type Topics = {
  id: number;
  title: string;
  content: string;
};
export function Accordion({ topics }: Props) {
  const [openId, setOpenId] = useState<number>();

  function handleOnClick(id: number) {
    setOpenId(id === openId ? undefined : id);
  }
  return (
    <div>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          onClick={handleOnClick}
          topics={topic}
          isOpen={topic.id === openId}
        />
      ))}
    </div>
  );
}
