import { motion } from 'framer-motion';
import Link from 'next/link';

interface CardProps {
  href: string;
  imgSrc: string;
  layoutId: string;
}

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutId }) => {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
        <motion.img src={imgSrc} className="w-full h-full" layoutId={layoutId} />
      </div>
    </Link>
  );
};

export default Card;