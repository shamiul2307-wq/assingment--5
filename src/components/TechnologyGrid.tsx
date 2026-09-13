export default TechnologyGrid
 import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface Props {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}

function TechnologyGrid({
  technologies,
  stack,
  onAdd
}: Props) {

  return (
    <div className="technology-grid">

      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          onAdd={onAdd}
          isAdded={stack.some(
            (item) => item.id === technology.id
          )}
        />
      ))}

    </div>
  );
}