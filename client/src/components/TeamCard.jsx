

const TeamCard = ({ detective }) => {
  return (
    <div className="d-flex flex-column h-100" id="team-card">
      <div className="image-holder">
        <img
          className="img-fluid"
          src={detective.image}
          alt={detective.alt}
        />
      </div>
      <div id="detective-details">
        <p className="eng-name">{detective.engName}</p>
        <p className="alias">{detective.alias}</p>
      </div>
      <p className="desc">
        {detective.info}
      </p>
    </div>
  );
};

export default TeamCard;
