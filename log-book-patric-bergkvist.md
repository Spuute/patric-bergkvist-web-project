## 2021-02-11 kl.15:29

First commit. Have been setting up the folder structure, and creating the main files: - index.html - style.css - script.js
En första commit. Har satt upp mappstrukturen samt skapat huvudfilerna: index.html + style.css + script.js

## 2021-02-12 kl.14.31

Idag räknar jag med att börja kolla på hur man skapar en inloggning med JavaScript så jag iallafall har fått en inblick i hur detta sker när specifikationen för hemsidan kommer.

## 2021-02-12 kl.14:58

Jag har byggt upp grundstrukturen i HTML dokumentet samt kopplat ihop CSS samt JavaScript filerna till HTML dokumentet.
Jag har även skapat de mest basic grundpelarna i css filen så man kan börja bygga utifrån dom.

    * Jag kör asterisk selectorn för att plocka bort all margin och padding på alla element, eftersom exempelvis h1 taggen har en margin by default.

    * Jag lägger även till box-sizing till border box. Detta gör jag för att det ska bli enklare att jobba med storlekar på boxar. Sätter man exempelvis ett div element till en width på 500px så inkluderas både border samt padding på det elementet.

    * Under HTML selectorn så har jag lite basic grejer som bakgrundsfärg, en font-family med en backup font ifall en font inte skulle stödjas i någon webbläsare.

         * Jag sätter även font-weight till 300 som då blir default över hela sidan.
         * font-size sätter jag till 20px som blir ett mått jag kommer att utgå från.

    * Selectorn för h1, h2 och h3 elementen har jag några egenskaper som ska gälla för alla dessa element.

    * Jag har sedan separata selectors för varje enskild av dessa som jag till en början har för att sätta en font-size, denna är anvgiven i % och har då 20px som jag tidigare tilldelade font-size i html som bas. (h1 250% = 20 * 2,5 = 50px). Selectorn för alla 3 h element har gemensamma egenskaper för alla element, medan de separata h selector lägger till specifika egenskaper utöver de gemensamma.

## 2021-02-13 kl.08.12

     Målet för dagen är att välja ut ett WEBAPI att hämta data från, samt kolla närmare på dokumentationen för okta, samt kolla om det finns några alternativ värda att använda.
