

const TeamCard = ({ detective }) => {
  return (
    <div className="d-flex flex-column h-100" id="card1">
      <img
        className="icon img-fluid"
        id="img1"
        src={detective.image}
        alt={detective.alt}
      />
      <p className="eng-name">{detective.engName}</p>
      <p className="jp-name">{detective.jpName}</p>
      <p className="desc">
        {detective.info}
      </p>
    </div>
  );
};

export default TeamCard;
