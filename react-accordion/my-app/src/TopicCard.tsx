import { Topics } from './Accordion';
type Props = {
  topics: Topics;
  onClick: (id: number) => void;
  isOpen: boolean;
};
export function TopicCard({ topics, onClick, isOpen }: Props) {
  // const listTopic = topics.map((string, index)=> <div className={string.id.toString() +' '+ 'title'} key={index}>{string.title}</div>)
  return (
    <>
      <div onClick={() => onClick(topics.id)} className="title" key={topics.id}>
        {topics.title}
      </div>
      {isOpen && <p>{topics.content}</p>}
    </>
  );
}
