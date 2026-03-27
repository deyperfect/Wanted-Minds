import data from '../data/process.json';
import ProcessCard from './ProcessCard';

const Process = () => {
  const finalStep = data.at(-1);

  return (
    <section id="process" className="process-section" aria-labelledby="process-heading">
      <div className="container process-shell">
        <div className="process-intro">
          <header className="process-header">
            <p className="process-kicker">Case Progression</p>
            <h2 id="process-heading">A clear process from first contact to final report.</h2>
            <p className="process-lead">
              Every case moves through a deliberate path designed to keep the
              work confidential, focused, and easy to follow at every stage.
            </p>
            <span className="process-header-accent" aria-hidden="true" />
          </header>

          <aside className="process-summary" aria-label="Process overview">
            <p className="process-summary-label">What to expect</p>
            <p className="process-summary-copy">
              Five guided stages, one dedicated team, and a documented outcome
              you can review with confidence.
            </p>
            <div className="process-summary-footer">
              <span className="process-summary-count">{data.length} stages</span>
              <span className="process-summary-divider" aria-hidden="true" />
              <span className="process-summary-end">Ends with {finalStep?.title}</span>
            </div>
          </aside>
        </div>

        <div className="process-grid" role="list">
          {data.map((step, index) => (
            <div
              key={step.id}
              className={`process-grid-item ${index % 2 === 0 ? 'process-grid-item-left' : 'process-grid-item-right'}`}
              role="listitem"
            >
              <div className="process-timeline-marker" aria-hidden="true">
                <span className="process-timeline-dot" />
              </div>
              <ProcessCard step={step} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
