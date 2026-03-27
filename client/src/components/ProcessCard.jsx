import {
  ClipboardList,
  FileCheck,
  FilePlus,
  Search,
  Users,
} from 'lucide-react';

const ICONS = {
  ClipboardList,
  FileCheck,
  FilePlus,
  Search,
  Users,
};

const ProcessCard = ({ step, index = 0 }) => {
  const Icon = ICONS[step.icon] ?? FilePlus;

  return (
    <article className="process-card">
      <div className="process-card-glow" aria-hidden="true" />
      <div className="process-step-card__rail">
        <span className="process-index">{step.step ?? String(index + 1).padStart(2, '0')}</span>
        <span className="process-sequence" aria-hidden="true">
          {index + 1}
        </span>
      </div>
      <div className="process-card-content">
        <div className="process-card-heading">
          <Icon className="process-icon" strokeWidth={1.75} />
          <div>
            <p className="process-meta">Stage {step.step ?? String(index + 1).padStart(2, '0')}</p>
            <h3 className="process-title">{step.title}</h3>
          </div>
        </div>
        <p className="process-desc">{step.description}</p>
      </div>
    </article>
  );
};

export default ProcessCard;
