export default function Places({ title, places, isLoading, loadingText, fallbackText, onSelectPlace }) {
  console.log(places, "test");
  return (
    <section className="places-category">
      <h2>{title}</h2>
      {isLoading && <p className="fallback-text">{loadingText}</p>}
      {!isLoading && places.length === 0 && <p className="fallback-text">{fallbackText}</p>}
      {!isLoading && places.length > 0 && (
        <ul className="places">
          {places.map((place) => (
            <li key={place.id} className="place-item">
              <button onClick={() => onSelectPlace(place)}>
                <img src={`${place.image.src}`} alt={place.image.alt} style={{ maxHeight: "200px", maxWidth: "300px", objectFit: "contain" }}/>
                {/* <img src={`http://localhost:3000/${place.image.src}`} alt={place.image.alt} /> */}
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
