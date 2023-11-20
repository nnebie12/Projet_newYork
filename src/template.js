export const City = ({
    Image : "assets/new york.jpg",
    Title : "À propos",
    Description : `New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. 
    En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, 
    financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme 
    l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est situé sur Times Square`,
    Météo : "3°C, vent NO à 10 km/h, 58 % d'humidité weather.com",
    Quartiers : "Harlem, Upper East Side, West Village, Flushing, SoHo, PLUS",
    Population : "8,468 millions (2021)",
    Superficie : "783,8 km²"
})


for(let index in City){
console.log(index+" "+City[index]+'\n')
}

export const Template = {
    el: document.querySelector("section"),
    printF(){
        this.el.innerHTML+=`<ul>
            <li>
            <img 
                src="${City.Image}" 
                alt="cover"
                itemprop="image"
                >
            </li>
            <li><ion-icon name="easel-outline"></ion-icon>
            <b>Description</b> : ${City.Description}</li>
            <li>
            <ion-icon name="cloudy-night-outline"></ion-icon><b> Météo : </b>${City.Météo}
            </li>
            <li>
            <ion-icon name="business-outline"></ion-icon>
            <b> Quartier</b> : ${City.Quartiers}
            </li>
            <li><ion-icon name="people-circle-outline"></ion-icon>
            <b>Population</b> : ${City.Population}</li>
            <li><ion-icon name="location-outline"></ion-icon>
            <b>Coordonnées</b> : ${City.Superficie}

        </ul>`;
    }
}