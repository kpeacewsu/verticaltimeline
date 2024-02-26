import VerticalTimeline from '@/component/VerticalTimeline';

const experiences = [
  { title: 'Frontend Developer', company: 'Company A', period: 'Jan 2020 - Present', description: 'Working on various web development projects.' },
  { title: 'Frontend Developer', company: 'Company A', period: 'Jan 2020 - Present', description: 'Working on various web development projects.' },
  { title: 'Frontend Developer', company: 'Company A', period: 'Jan 2020 - Present', description: 'Working on various web development projects.' },
  { title: 'Frontend Developer', company: 'Company A', period: 'Jan 2020 - Present', description: 'Working on various web development projects.' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-400">
     <div>
      <h1>My Work Experience</h1>
      <VerticalTimeline experiences={experiences} />
    </div>
    </main>
  );
}
