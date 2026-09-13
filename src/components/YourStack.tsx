
export default YourStack;

import type{ Technology } from "./TechnologyCard";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({
  stack,
  onRemove,
  onRemoveAll
}: YourStackProps) {

  return (
    <aside className="stack-section" id="stack">

      <div className="stack-header">
        <div>
          <h2>Your Stack</h2>

          <p>
            {stack.length} Technology
            {stack.length !== 1 ? "ies" : "y"} Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            className="remove-all"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">📦</div>

          <h3>Your Stack is Empty</h3>

          <p>
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        <div className="stack-list">

          {stack.map((technology) => (
            <div
              className="stack-item"
              key={technology.id}
            >

              <img
                src={technology.icon}
                alt={technology.name}
              />

              <div className="stack-item-info">
                <h4>{technology.name}</h4>
                <span>{technology.category}</span>
              </div>

              <button
                className="remove-btn"
                onClick={() => onRemove(technology.id)}
              >
                ×
              </button>

            </div>
          ))}

        </div>
      )}

    </aside>
  );
}