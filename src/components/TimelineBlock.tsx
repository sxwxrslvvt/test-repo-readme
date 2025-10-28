import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TimelineSliderData } from '../types';
import { gsap } from 'gsap';
import 'swiper/css';

export type TimelineBlockProps = {
  segments?: TimelineSliderData[];
};

export const TimelineBlock: React.FC<TimelineBlockProps> = ({ segments }) => {
  // Здесь реализуется логика временных отрезков и переключения
  // Пример базовой структуры
  return (
    <div className="timeline-block">
      {/* интерактивные точки + Swiper */}
    </div>
  );
}
