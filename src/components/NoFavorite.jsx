import '../css/component.css';

function NoFavorite({size}) {

  return (
    <div>
      <div className={size}>
        <p>No anime has been added to your favorites yet.</p>
      </div>
    </div>
  );
}

export default NoFavorite;
