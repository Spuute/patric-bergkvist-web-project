## 2021-02-17 kl.07:56

     Gårdagen flöt på väldigt bra och designen är i princip helt färdig till landingpage. Det enda som är kvar där är att fylla ut med lite vettig text, men det tar jag som sagt i slutet när allting annat är färdigt.

     Målet för dagen är att få färdigt **Om mig** sidan, och i bästa av världar hinna påbörja den sida som ska innehålla datan från API anropen som ska visas efter man har loggat in.

## 2021-02-16 kl.13:06

     Jag glömde helt bort loggboken imorse, jag var så ivrig på att köra igång! Men jag började iallafall skissa på en design till hemsidan, men insåg snabbt att jag kommer vilja free-style:a lite. Har så många idéer för utseende och kommer att ta det lite som det kommer, se vad som passar bäst för mitt ändamål med hemsidan.

     Sent igårkväll fick jag färdigt navbar:en, buggarna var löste men när jag startade upp imorse så jag att det hade framkommit en ny bugg som jag fick börja med att fixa till innan jag gick på att börja designa landingpage.

     Jag har påbörjat min landingpage och har som mål för dagen att få färdigt den till största del; börjar med målet att få till utseende tillsammans med placeholder text, om tid finns så byts den ut mot någon "riktig" text.

## 2021-02-15 kl.08:19

     Målen för helgen lyckades uppnås, men då jag inte kände mig riktigt nöjd med valet av WEBAPI så har jag letat vidare och nu kommit fram till att jag ska testa ge mig på SMHI´s API.

     Mål för dagen: Börja fundera på / skissa upp en design för hemsidan så jag får en bild av hur jag ska bygga upp den. Ska försöka få en skiss jag är nöjd med och påbörja bygget av siten.

## 2021-02-14 kl.00:18

     Jag har hittat ett WEBAPI som verkar intressant;

          * https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md
          * https://github.com/erunion/sport-api-specifications/tree/master/nhl

## 2021-02-13 kl.08:12

     Målet för dagen är att välja ut ett WEBAPI att hämta data från, samt kolla närmare på dokumentationen för okta, samt kolla om det finns några alternativ värda att använda.

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

## 2021-02-12 kl.14.31

Idag räknar jag med att börja kolla på hur man skapar en inloggning med JavaScript så jag iallafall har fått en inblick i hur detta sker när specifikationen för hemsidan kommer.

## 2021-02-11 kl.15:29

First commit. Have been setting up the folder structure, and creating the main files: - index.html - style.css - script.js
En första commit. Har satt upp mappstrukturen samt skapat huvudfilerna: index.html + style.css + script.js
