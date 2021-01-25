import Card from '../components/Card';

import cardsData from '../cardsData';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-light text-gray-900">Build modern sites with agility without going ouy from HTML</h1>

      <div className="mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 grid-rows-1">
        {cardsData.map(card => (
          <Card
            href={card.href}
            imgSrc={card.imgSrc}
            layoutId={card.layoutId}
          />
        ))}
      </div>
    </div>
  );
};
