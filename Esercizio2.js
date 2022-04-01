/*Da questa:
1. Ritorna i Total Confirmed
2. Ritorna la lista di tutte le Country (solo il nome)
3. Ritrona solo il più alto per i Total Confirmed e i Toltal confirmed più basso
Exenia Miglioli10:32
2.Ritorna la lista di tutte le country, con name countrycode e totalconfirmed*/




async function Confirmed() {
    const url = "https://api.covid19api.com/summary."
    const request = await fetch(url) 
    const res = await request.json()
    res.forEach(el => {
        country.value = el
        
    });
    const h1 = document.getElementById("total")
    h1.textContent = "Total Confirmed"
    const ul = document.getElementById("ul")
    ul.appendChild(li)
}



Confirmed()