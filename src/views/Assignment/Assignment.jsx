const Assignment = () => {
  return (
    <article>
      <h1>Oppgave</h1>

      <h3>Datasett</h3>

      <p>
        Lage en enkel webapp for å sjekke siste tilsynsresultat fra Mattilsynet hos spisesteder i Norge.
        Brukeren skal kunne søke opp spisesteder og få presentert det siste tilsynsresultatet.
      </p>

      <p>Webappen skal basere seg på data beskrevet på:</p>
  
      <ul>
        <li><a href="https://data.norge.no/datasets/288aa74c-e3d3-492e-9ede-e71503b3bfd9" target="_blank" rel="noreferrer">data.norge.no</a></li>
      </ul>

      <h3>API</h3>

      <p>Les beskrivelsen av hvordan api'et kan benyttes (filtrering, pagination etc.) på:</p>
      
      <ul>
        <li><a href="https://hotell.difi.no/api" target="_blank" rel="noreferrer">hotell.difi.no</a></li>
      </ul>

      <h3>Kompleksitet</h3>

      <p>
        Kandidaten kan selv velge kompleksiteten av webappen avh. av tid til rådighet 
        før intervjuet etc.
      </p>

      <p>Vi ønsker at kandidaten legger vekt på:</p>

      <ul>
        <li>Ryddig / Enkelt brukergrensesnitt</li>
        <li>Fornuftig bruk av tilgjengelige datasett / api'er</li>
      </ul>

      <h3>Publisering</h3>

      <p>Koden tilgjengeliggjøres på github e.l sammen med instruksjoner for bygg / kjøring etc. og evt kommentarer.</p>

      <h3>Teknologi</h3>

      <p>
        Valg av teknologi er opp til deg, men bruk gjerne tilgjengelige rammeverk / biblioteker der du mener det
        er fornuftig. Bruk helst teknologi du er kjent med fra før så du kan vise hva du kan.
      </p>

      <p>Resultatet skal inneholde kjørende kode, men det trenger ikke være et ferdig produkt, gjør så mye du rekker.</p>
    </article>
  )
}

export default Assignment;
