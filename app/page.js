import Image from 'next/image';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './globals.css';

export default function Home() {
  return (
    <div className="Page">
      <SortingVisualizer></SortingVisualizer>
    </div>
  )
}
