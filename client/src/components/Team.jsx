import TeamCard from "./TeamCard";
import team from '../data/team';

const Team = ({ sectionTitle = "Behind Closed Doors" }) => {
  return (
    <section id="team" className="py-5">
      <h2 className="text-center mb-5"> {sectionTitle}</h2>

      <div className="container">
        <div className="row justify-content-center g-5">

            {team.map((detective) => (
              <div key={detective.id} className="col-10 col-md-6 col-lg-4 detectives">
                <TeamCard detective={detective} />
              </div>
            ))}

        </div>
      </div>
    </section>
  );
};

export default Team;
