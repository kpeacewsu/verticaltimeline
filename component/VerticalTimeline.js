'use client'

import React from 'react';
import VerticalTimelineItem from './VerticalTimelineItem';
import styles from './VerticalTimeline.module.css';

const VerticalTimeline = ({ experiences }) => {
  return (
    <div className={styles.timelineContainer}>
      {experiences.map((experience, index) => (
        <VerticalTimelineItem key={index} experience={experience} index={index} />
      ))}
    </div>
  );
};

export default VerticalTimeline;
