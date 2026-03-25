import data from '../data/process.json';
import ProcessCard from './ProcessCard';

const Process = () => {
  return (
    <section id="process" className="process-section" aria-labelledby="process-heading">
      <div className="container-fluid process-shell">
        <header className="process-header text-center">
          <p className="process-kicker">Case Progression</p>
          <h2 id="process-heading">How It Works</h2>
          <p className="process-lead">
            From your first message to the final debrief, here is how we move
            every case forward with care and precision.
          </p>
          <span className="process-header-accent" aria-hidden="true" />
        </header>
        <div className="process-grid" role="list">
          {data.map((step, index) => (
            <div
              key={step.id}
              className="process-grid-item"
              role="listitem"
            >
              <ProcessCard step={step} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
