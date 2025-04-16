import CountryCard from "./CountryCard";
import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function CountryList() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchedData() {
      try {
        setLoading(true);
        const res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setCountry(data);
      } catch (err) {
        setError(err.message);
        console.log("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    }
    fetchedData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className="countries-container">
      {country.map((countries) => {
        return <CountryCard key={countries.cca3} countries={countries} />;
      })}
    </ul>
  );
}

export default CountryList;
