import React from 'react';
import styles from './VerticalTimeline.module.css';
import { useInView } from 'react-intersection-observer';
import * as WorkIconSVG from '@/public/work.svg';
import Image from 'next/image';

const VerticalTimelineItem = ({ experience, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Calculate a delay based on the item's index
  const delay = `${index ==0 ? 0 : index+0.5}s`;

  const itemClass = inView ? `${styles.timelineItem} ${styles.visible}` : styles.timelineItem;

  return (
    <div ref={ref} className={itemClass} style={{ '--slide-delay': delay }}>
      <div className={styles.timelineMarker}>
        <div className={styles.circle}>
        <Image 
        src = {WorkIconSVG}
        width= '25px'
        height='25px'
        />
        </div>
      </div>
      <div className={styles.timelineContent}>
        <h2>{experience.title}</h2>
        <p>{experience.company}</p>
        <p>{experience.period}</p>
        <p>{experience.description}</p>
      </div>
    </div>
  );
};

export default VerticalTimelineItem;
