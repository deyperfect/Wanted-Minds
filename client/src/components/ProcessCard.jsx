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
          <div className="process-card-heading">
            <Icon className="process-icon" strokeWidth={1.75} />
            <div>
              <h3 className="process-title">{step.title}</h3>
            </div>
          </div>
          <span className="process-sequence" aria-hidden="true">
            {index + 1}
          </span>
        </div>
        <div className="process-card-content">
          <p className="process-desc">{step.description}</p>
        </div>
      </article>
  );
};

export default ProcessCard;
