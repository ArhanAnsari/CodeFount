import { FC } from 'react';

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabBar: FC<Props> = ({ activeTab, setActiveTab }) => {
  const tabs = ['HTML', 'CSS', 'JavaScript'];

  return (
    <div className="flex bg-gray-800 text-white">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`flex-1 py-2 ${activeTab === tab ? 'bg-gray-700' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabBar;
