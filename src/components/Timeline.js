import React from 'react';
import './Timeline.css'; // Add your timeline styles here

const Timeline = () => {
  const stages = [
    { title: 'Concept', description: 'Idea generation and concept development.' },
    { title: 'Design', description: 'User interface and user experience design.' },
    { title: 'Prototyping', description: 'Creating prototypes for user testing.' },
    { title: 'Testing', description: 'User testing and feedback collection.' },
    { title: 'Launch', description: 'Official product launch and distribution.' },
  ];

  return (
    <div id='timeline' className='section reveal timeline-2'>
      <div id='filler-timeline'></div>
      <div className='timeline-parent'>
        <h1>Timeline</h1>
        <div className="timeline row">
      {stages.map((stage, index) => (
        <div className="timeline-event col-lg-2 col-md-5 col-sm-7" key={index}>
          <div className="timeline-event-content">
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
};

export default Timeline;
