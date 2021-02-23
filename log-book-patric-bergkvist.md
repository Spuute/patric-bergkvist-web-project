## 2021-02-22 kl.10:14

Idag är planen att fixa till väder sidan så rätt ikoner visas för varje timme samt fixa till så nuvarande temperatur alltid visar korrekt temperatur. Om tid finns ska jag även kolla på om jag ska lägga in ikoner till mina sociala medier under "Om mig". Jag misstänker dock att det kommer att ta lite tid att fixa med ikonerna.

## 2021-02-21 kl.19:24

     Sent igårkväll upptäckte jag att temperaturen för de kommande 6 timmarna blev väldigt missvisande, några låg där dom skulle och andra visade 10-20 grader över den korrekta temperaturen. Jag började kolla runt lite och hittade ganska snabbt problemet, och det låg i datan jag får från SMHI´s API. Jag märkte att dom strukturerar om all data och plcerar det på olika platser, så det jag har hämtat ut som var temperatur från börjar kan bli precis vad som helst. Jag fick börja kolla efter lösningar för detta, och det slutade med att jag använde mig av en foreach loop där jag först anger vad i api anropet som den ska kolla igenom, och sen la jag till en if sats som säger att där obj.name === "t" ska hämta värdet och t i detta fall är temperatur, så nu kommer den alltid att hämta ut temperatur oavsett hur mycket omstrukturering som sker i SMHI´s API. Jag fick i samma veva ner koden från 10 rader till 4.

     Jag har även lyckats style:a okta´s login widget genom att via developer tool kolla vilka klasser som används, sen har det bara varit att lägga in de klasserna i style.css. Anledningen till att detta fungerar är att jag i html filen lagt in okta´s css fil först av alla css filer, på så vis hämtar den först all data därifrån, sen override:ar den alla properties från style.css och applicerar dom.

## 2021-02-20 kl.10:08

     Igår missade jag att uppdatera loggboken. Men jag har gjort fina framsteg. Jag fick sitta ganska länge igår med att försöka lösa så vädret på weather.html visade temperatur och tid för de kommande sex timmarna. Det var många resor fram och tillbaka innan jag fick det att fungera.

     Jag fick började med att skapa en variabel timeSpans där jag använder querySelectorALL som går in och hämtar alla klasser med taggen ".plus", vilket i mitt fall är varje column som innehåller data om 6 kommande timmar. Kör man en console.log på den så kommer man att få ut en så kallad nodeList, ett object med alla klasserna. Denna används senare för att iterera igenom och i varje iteration skriva ut rätt data i rätt column.
     Inne i samma loop så hämtar jag ut dateTime för varje timme och parsar från json timeformat och skickar in till en funktion "convertTime" för att extrahera tiden följande format "HH:MM".
     Jag är väldigt nöjd med denna lösning, och jag fick slita mitt hår lite för att få det att fungera, men det känns skönt nu när den är på plats.

     Planen för dagen är att försöka hålla lite koll på denna del och se så att den verkligen uppdaterar med korrekt data, och detta kommer jag att dubbelkolla mot SMHI´s app i telefonen. Jag ska även börja fundera på en lösning för att i samma veva byta ut varje väderikon mot korrekt ikon baserat på väderlek. Eventuellt även bygga ut sidan med mer data, men det är inte skrivet i sten ännu då jag tror kund är nöjd med vad som finns nu.

## 2021-02-18 kl.09:01

     Jag hann påbörja design av väderpresentationen igår, men jag inser att jag inte riktigt kan bestämma mig för hur jag vill att den ska se ut, så dagen idag kommer att ägnas åt att testa lite olika designer för att få en bild av vad som kan tänkas passa bäst.

## 2021-02-18 kl.07:42

     Jag kom långt på about me sidan igår, den är i princip färdig, men jag kommer att lägga mer tid på den mot slutet när jag är klar med alla andra saker som är krav enligt specifikationen, samma sak gäller för alla sidor. Min plan just nu är att fylla på sidan med alla krav, och tiden som blir över när jag är klar med det kommer att läggas på att snygga till / förbättra hela sidan.

     Planer för dagen är att fundera ut en matchande design för sidan där själva api-anropet ska ske samt data ska presenteras. Jag är nöjd om jag kommer fram till en design att köra på. Tanke och förhoppningn är att ha hela den sidan färdig innan Måndag.

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
