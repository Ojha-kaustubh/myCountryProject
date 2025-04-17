export default function CountryCard({ country }) {
  //   const { name, flags, population, region, capital } = country;

  return (
    <a
      className="country-card"
      href={`/country.html?name=${country.name.common}`}
    >
      <img src={country.flag.svg} alt={country.name.common + "Flag"} />
      <div className="card-text">
        <h3 className="card-title">{country.name.common}</h3>
        <p>
          <b>Population :</b> {country.population.toLocaleString("en-IN")}
        </p>

        <p>
          <b>Region: </b>
          {country.region}
        </p>
        <p>
          <b>Capital: </b>
          {country.capital?.[0]}
        </p>
      </div>
    </a>
  );
}
