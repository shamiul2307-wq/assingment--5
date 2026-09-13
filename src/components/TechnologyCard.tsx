
 
  import type { Technology } from "../types/technology";
   

interface Props {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

function TechnologyCard({ technology, onAdd, isAdded }: Props) {
  return (
     
    <div className="technology-card">
      <div className="technology-card-top">
        <img
          src={technology.icon}
          alt={technology.name}
          className="technology-icon"
        />

        <span className="badge">
          {technology.difficulty}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

      <div className="card-info">
        <span className="category">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>
      </div>

      <div className="rating">
        ⭐ {technology.rating}
      </div>

      <button
        className={`add-button ${isAdded ? "added" : ""}`}
        onClick={() => onAdd(technology)}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added to Stack" : "+ Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;