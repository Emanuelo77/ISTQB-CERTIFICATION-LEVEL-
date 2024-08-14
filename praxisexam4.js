
    const questions = [
        {
            question: `
                <p>Was ist eine wichtige Aufgabe während der Aktivität "Kommunikation und Analyse" im Reviewprozess?</p>
                <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
            `,
            answers: [
                { text: "Die Festlegung der Endekriterien für das Review", correct: false },
                { text: "Die Erstellung von Fehlerberichten für jeden identifizierten Fehlerzustand", correct: false },
                { text: "Die Festlegung des Umfangs des Reviews", correct: false },
                { text: "Treffen einer Entscheidung über ihren Status, ihre Verantwortlichkeit und die erforderlichen Maßnahmen für jede Anomalie", correct: true }
            ]
        },
        {
            question: `
                <p>"Beim Zweigtest wird mit einem Testfall 50% Überdeckung erreicht, wenn der Quellcode lediglich aus einer einzigen IF-Anweisung besteht."</p>
                <p><strong>Welche der folgenden Optionen trifft auf die obige Aussage am besten zu?</strong></p>
                <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
            `,
            answers: [
                { text: "Die Aussage ist falsch. Bei einem einzelnen Testfall ist der Entscheidungs¬ausgang der IF-Anweisung \"wahr\" und damit mindestens 50% abgedeckt.", correct: false },
                { text: "Die Aussage ist wahr. Bei einem einzelnen Testfall ist der Entscheidungs¬ausgang der IF-Anweisung entweder \"wahr\" oder \"falsch\".", correct: true },
                { text: "Die Aussage ist wahr. Bei einem einzelnen Testfall ist der Entscheidungs¬ausgang der IF-Anweisung \"wahr\" und damit mindestens 50% abgedeckt.", correct: false },
                { text: "Die Aussage ist falsch. Bei einem einzelnen Testfall kann nur eine Zweigüber¬deckung von 25% garantiert werden.", correct: false }
            ]
        },
        {
            question: `
                <p>Welche Kompetenz ist besonders wichtig, um Fehlerzustände zu erkennen, insbesondere solche, die schwer zu finden sind?</p>
                <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
            `,
            answers: [
                { text: "Technische Kenntnisse", correct: false },
                { text: "Gründlichkeit und Detailgenauigkeit", correct: true },
                { text: "Testwissen", correct: false },
                { text: "Gute Kommunikationsfähigkeit", correct: false }
            ]
        },
        {
            question: `
                <p>Welche der folgenden Aussagen beschreibt am besten, wie die Produktrisikoanalyse Intensität und Umfang des Testens beeinflussen kann?</p>
                <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
            `,
            answers: [
                { text: "Die Produktrisikoanalyse stellt sicher, dass Fehlerzustände im Entwicklertest identifiziert und behoben werden.", correct: false },
                { text: "Die Produktrisikoanalyse stellt sicher, dass risikoreiche Produktteile intensiver und früher getestet werden als risikoärmere.", correct: true },
                { text: "Die Produktrisikoanalyse stellt sicher, dass alle verfügbaren Testverfahren genutzt werden, um alle Fehlerzustände aufzudecken.", correct: false },
                { text: "Die Produktrisikoanalyse stellt sicher, dass risikoarme Produktteile aufgrund von Zeitdruck nicht getestet werden.", correct: false }
            ]
        },
        {
            question: `
                <p>Welche der folgenden Aussagen beschreibt kein gültiges Ziel des Testens?</p>
                <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
            `,
            answers: [
                { text: "Prüfen, ob das Testobjekt vollständig ist und validieren, dass alle möglichen Fehlerzustände identifiziert wurden.", correct: true },
                { text: "Verifizieren, ob alle spezifischen Anforderungen erfüllt sind.", correct: false },
                { text: "Fehlerwirkungen und Fehlerzustände aufdecken, wodurch man Risiken aufgrund einer unzureichenden Softwarequalität reduziert.", correct: false },
                { text: "Stakeholdern ausreichende Informationen zur Verfügung stellen, damit diese fundierte Entscheidungen treffen können, insbesondere bezüglich des Qualitätsniveaus des Testobjekts.", correct: false }
            ]
        },
        {
            question: `
                <p>Warum ist es wichtig, dass Testen an den Softwareentwicklungslebenszyklus (SDLC) angepasst wird, insbesondere in iterativen und inkrementellen Entwicklungsmodellen?</p>
                <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
            `,
            answers: [
                { text: "Um die Testabdeckung zu maximieren.", correct: false },
                { text: "Um die schnelle Rückmeldung und umfangreiche Regressionstests zu ermöglichen.", correct: true },
                { text: "Testaktivitäten sollten im Softwareentwicklungslebenszyklus nach den Entwicklungstätigkeiten beginnen.", correct: false },
                { text: "Um die dynamischen Tests auf frühere Teststufen zu verschieben.", correct: false }
            ]
        },
        {
            question: `
                <p>Welche der folgenden Testarten sollte verwendet werden, um Tests auf Basis der internen Struktur oder der Implementierung eines Systems abzuleiten?</p>
                <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
            `,
            answers: [
                { text: "Nicht-funktionale Tests", correct: false },
                { text: "Änderungsbezogenes Testen", correct: false },
                { text: "White-Box-Tests", correct: true },
                { text: "Funktionale Tests", correct: false }
            ]
        },
        {
            question: `
                <p>Ein Softwareentwicklungsprojektteam möchte die Testautomatisierung in ihrem Projekt verbessern und die Testpyramide einführen, um den Testaufwand effizienter zu verteilen und die Testqualität zu steigern.</p>
                <p>Was könnten in der Testpyramide-Modellstruktur mögliche Schichten darstellen (geordnet von der untersten zur obersten Schicht)?</p>
                <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
            `,
            answers: [
                { text: "Unit-Tests, End-To-End-Tests, Integrationstests", correct: false },
                { text: "Systemtests, Integrationstests, Unit-Tests", correct: false },
                { text: "Integrationstests, Unit-Tests, End-To-End-Tests", correct: false },
                { text: "Unit-Tests, Service-Tests, UI-Tests", correct: true }
            ]
        },
        {
            question: `
                <p>Welche der folgenden Aussagen beschreibt keinen Nutzen von statischen Tests, wie Reviews oder statische Analysen?</p>
               <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
            `,
            answers: [
                { text: "Verbesserte Kommunikation zwischen Teammitgliedern durch die Teilnahme an Reviews", correct: false },
                { text: "Reduzieren von Entwicklungs- und Testkosten", correct: false },
                { text: "Aufdeckung von Fehlerzuständen in den frühesten Phasen des SDLC", correct: false },
                { text: "Finden von Fehlerwirkungen durch Ausführen des Testobjekts", correct: true }
            ]
        },
        {
            question: `
                <p>Für die Einführung einer neuen Softwarekomponente wurden bereits Testfälle und deren Prioritäten für die Testdurchführung definiert. Diese sind in der nachfolgenden Tabelle dargestellt:</p>
                <img src="Diagram4.png" alt="Diagramm für Testfälle und Prioritäten">
                <p><strong>Welcher der folgenden Testausführungspläne berücksichtigt die Prioritäten sowie die technischen und logischen Abhängigkeiten am besten?</strong></p>
                <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
            `,
            answers: [
                { text: "TF4 - TF3 - TF2 - TF1 - TF5 - TF6", correct: false },
                { text: "TF3 - TF4 - TF2 - TF1 - TF6 - TF5", correct: true },
                { text: "TF4 - TF3 - TF1 - TF6 - TF2 - TF5", correct: false },
                { text: "TF3 - TF4 - TF1 - TF6 - TF2 - TF5", correct: false }
            ]
        },
        {
            question: `
                <p>Welche der folgenden Optionen beschreibt keine gültigen Eingabedaten für die Erweiterung der Äquivalenzklassenbildung durch die Grenzwertanalyse?</p>
                <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
            `,
            answers: [
                { text: "Ganze Zahlen im Bereich von 1 bis 100", correct: false },
                { text: "Letzte Ziffer von Telefonnummern", correct: false },
                { text: "Alphabetisch geordnete Anfangsbuchstaben von Vornamen", correct: false },
                { text: "Farben von Autos aus den Kategorien Grün, Blau, Rot und Schwarz", correct: true }
            ]
        },
        {
            question: `
                <p>Ein führendes Unternehmen in der Automobilbranche plant die Entwicklung einer neuen Generation von Fahrzeugsteuerungssoftware. Das Unternehmen hat in der Vergangenheit Schwierigkeiten gehabt, den Testaufwand für solche Projekte genau zu schätzen und möchte nun mit Hilfe von Testexperten die Dreipunktschätztechnik einführen, um diese Herausforderungen zu bewältigen.</p>
                <p>Die folgenden Schätzungen wurden gemacht:</p>
                <ul>
                    <li>Optimistische Schätzung: 3 Personentage</li>
                    <li>Wahrscheinlichste Schätzung: 11 Personentage</li>
                    <li>Pessimistischste Schätzung: 25 Personentage</li>
                </ul>
                <p>Welche der folgenden Möglichkeiten gibt die finale Schätzung korrekt wieder?</p>
                <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
            `,
            answers: [
                { text: "12 Personentage", correct: true },
                { text: "16 Personentage", correct: false },
                { text: "14 Personentage", correct: false },
                { text: "10 Personentage", correct: false }
            ]
        },
        {
            question: `
                <p>Warum ist es wichtig, dass die Testanalyse und der Testentwurf für eine bestimmte Teststufe bereits in der entsprechenden Entwicklungsphase des Softwareentwicklungslebenszyklus (SDLC) beginnen?</p>
                 <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
            `,
            answers: [
                { text: "Um Tester in das Review von Arbeitsergebnissen einzubeziehen.", correct: false },
                { text: "Um Redundanzen in den Testzielen zu vermeiden.", correct: false },
                { text: "Um den Grundsatz des frühen Testens zu erfüllen.", correct: true },
                { text: "Um sicherzustellen, dass alle Entwicklungsaktivitäten der Qualitätssteuerung unterliegen.", correct: false }
            ]
        },
        {
            question: `
                <p>Gegeben seien folgende Testaktivitäten und Testwerkzeuge:</p>
                <p>A. Management des Testens und für Testmittel</p>
                <p>B. Statische Tests</p>
                <p>C. Testentwurf und Realisierung</p>
                <p>D. Automatisierung des Build-Prozesses</p>
                <p>1. DevOps-Werkzeuge</p>
                <p>2. Testdateneditoren und -generatoren</p>
                <p>3. Statische Analysewerkzeuge</p>
                <p>4. Konfigurationsmanagementwerkzeuge</p>
                <p><strong>Welcher der folgenden Kombinationen passt am besten zu den Aktivitäten und Werkzeugen?</strong></p>
                 <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
                `,
            answers: [
                { text: "A1, C2, D3, B4", correct: false },
                { text: "D1, C2, A3, B4", correct: false },
                { text: "D1, C2, B3, A4", correct: true },
                { text: "A1, C2, B3, D4", correct: false }
            ]
        },
        {
            question: `
                <p>Welche der folgenden Optionen sollte in der initialen Testplanung und Vorbereitung berücksichtigt werden?</p>
                <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
            `,
            answers: [
                { text: "Testprotokolle", correct: false },
                { text: "Anzahl der Testfälle", correct: false },
                { text: "Schätzung des Testaufwands und der Kosten", correct: true },
                { text: "Schulung des Entwicklerteams", correct: false }
            ]
        },
        {
        question: `
        <p>Welche der folgenden Optionen beschreibt exploratives Testen am besten?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Testen, das auf der Erfahrung, dem Wissen und der Intuition des Testers basiert.", correct: false },
        { text: "Ein skriptbasiertes Verfahren, das Dateien mit Testdaten und erwarteten Ergebnissen beinhaltet, die zum Ausführen von Testskripten benötigt werden.", correct: false },
        { text: "Testvorgehensweise in einem Projekt mit agiler Softwareentwicklung, die Techniken und Methoden wie z. B. Extreme Programming (XP) einbindet, die Entwicklung als den Kunden des Testens ansieht, und die den Test-First-Entwicklungsansatz hervorhebt.", correct: false },
        { text: "Ein Testansatz, bei dem die Tests dynamisch entworfen und ausgeführt werden, basierend auf dem Wissen, der Erkundung des Testelements und den Ergebnissen früherer Tests.", correct: true }
    ]
},
{
    question: `
        <p>Warum ist häufiges Feedback der Stakeholder während des Softwareentwicklungslebenszyklus (SDLC) wichtig?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Um potenzielle Qualitätsprobleme frühzeitig zu kommunizieren und Missverständnisse über Anforderungen zu verhindern.", correct: true },
        { text: "Um die Kommunikation zwischen Testern und Entwicklern zu verbessern.", correct: false },
        { text: "Um sicherzustellen, dass das Entwicklungsteam unabhängig von den Stakeholdern arbeitet.", correct: false },
        { text: "Um das Entwicklungsteam zu kontrollieren und Schuldzuweisungen zu vermeiden.", correct: false }
    ]
},
{
    question: `
        <p>Gegeben sei folgendes Zustandsdiagramm für die Definition eines Stapels:</p>
        <img src="Diagram5.png" alt="Zustandsdiagramm für die Definition eines Stapels">
        <p>Welche der folgenden Zustandsübergangs-Sequenzen ergibt die höchste Überdeckung der Zustandsübergabe?</p>
         <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Erstellen -> Leer -> Gefüllt -> Gefüllt -> Leer -> Leer -> Gefüllt -> Voll -> Voll -> Gefüllt -> Leer -> Gefüllt -> Leer -> Löschen", correct: true },
        { text: "Erstellen -> Leer -> Gefüllt -> Gefüllt -> Leer -> Leer -> Gefüllt -> Voll -> Voll -> Gefüllt -> Leer -> Löschen", correct: false },
        { text: "Erstellen -> Leer -> Gefüllt -> Gefüllt -> Voll -> Gefüllt -> Leer -> Gefüllt -> Voll -> Voll -> Gefüllt -> Leer -> Löschen", correct: false },
        { text: "Erstellen -> Leer -> Gefüllt -> Gefüllt -> Voll -> Gefüllt -> Leer -> Gefüllt -> Voll -> Voll -> Gefüllt -> Voll -> Voll", correct: false }
    ]
},
{
    question: `
        <p>Ein System zur Auszahlung von Mitarbeiterprämien wird mit folgender Entscheidungstabelle spezifiziert:</p>
        <img src="Diagram6.png" alt="Entscheidungstabelle">
        <p>Für die beiden Regeln R2 und R3 wurden bereits folgende zwei Testfälle definiert:</p>
        <img src="Diagram7.png" alt="Testfälle R2 und R3">
        <p>Zusätzlich werden die folgenden vier Testfälle TF3, TF4, TF5 und TF6 aufgestellt:</p>
        <img src="Diagram8.png" alt="Zusätzliche Testfälle TF3, TF4, TF5 und TF6">
        <p>Welche zwei der zusätzlichen Testfälle TF3, TF4, TF5 und TF6 würden in Kombination mit den Testfällen TF1 und TF2 eine 100% Überdeckung der gesamten Entscheidungstabelle erreichen?</p>
         <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "TF3, TF6", correct: false },
        { text: "TF4, TF5", correct: true },
        { text: "TF5, TF6", correct: false },
        { text: "TF3, TF4", correct: false }
    ]
},
{
    question: `
        <p>Beim Test einer neuen Softwarekomponente eines Unternehmens hat ein Tester in kurzem Zeitraum sehr gute Resultate erzielt und einige Fehlerzustände aufdecken können. In weiteren Testrunden und auch nach längerer Zeit hat der Tester seine Testfälle jedoch nicht weiter modifiziert und auch keine weiteren Testfälle erstellt, sodass immer weniger Fehler gefunden werden.</p>
        <p>Welchen Grundsatz des Softwaretestens hat der Tester nicht beachtet?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Testen ist kontextabhängig", correct: false },
        { text: "Fehlerzustände treten gehäuft auf", correct: false },
        { text: "Vollständiges Testen ist unmöglich", correct: false },
        { text: "Tests nutzen sich ab", correct: true }
    ]
},
{
    question: `
        <p>Welche der folgenden Aussagen definiert die Risikostufe (Maß für das Risiko) am besten?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Die Risikostufe wird berechnet, indem die Wahrscheinlichkeiten aller Problemsituationen und der daraus resultierende finanzielle Schaden addiert werden.", correct: false },
        { text: "Die Risikostufe wird geschätzt, indem die Wahrscheinlichkeit einer Bedrohung des Systems multipliziert wird mit der Wahrscheinlichkeit, dass die Bedrohung auftritt und finanzielle Schäden verursacht.", correct: false },
        { text: "Die Risikostufe wird bestimmt durch eine Kombination der Wahrscheinlichkeit eines unerwünschten Ereignisses und der erwarteten Auswirkung dieses Ereignisses.", correct: true },
        { text: "Die Risikostufe ist die Summe aller potenziellen Gefahren für ein System multipliziert mit der Summe aller potenziellen Verluste aus diesem System.", correct: false }
    ]
},
{
    question: `
      <p>Welches der folgenden Entwicklungsmodelle beschreibt den Softwareentwicklungsprozess als linearen, sequentiellen Ablauf von Aktivitäten?</p>
       <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
      { text: "Wasserfallmodell", correct: true },
      { text: "Rational Unified Process", correct: false },
      { text: "Kanban", correct: false },
      { text: "Scrum", correct: false }
    ]
  },
  {
    question: `
        <p>Welche der folgenden Aussagen beschreibt einen Vorteil von unabhängigem Testen?</p>
         <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Die Verwendung eines unabhängigen Testteams kann zusätzliche und andere Fehler als die Entwickler finden, da sie objektiver arbeiten. Zusätzlich können sie implizite Annahmen, die in der Spezifikation oder bei der Programmierung getroffen wurden, kritisch hinterfragen.", correct: true },
        { text: "Die Verwendung eines unabhängigen Testteams erlaubt dem Projektmanagement die Verantwortung für die Qualität des finalen Arbeitsergebnisses auf das Testteam zu übertragen. Somit ist jedem bewusst, dass die Qualität in der Gesamtverantwortung des Testteams liegt.", correct: false },
        { text: "Die Verwendung eines unabhängigen Testteams erlaubt dem Projektmanagement das Einsparen von Entwicklerressourcen, da jegliche Entwicklertests durch das unabhängige Testteam durchgeführt werden können.", correct: false },
        { text: "Die Verwendung eines unabhängigen Testteams erlaubt dem Projektmanagement den kompletten Testprozess auf das Testteam zu übertragen. Somit kann das Testteam völlig unabhängig von den Entwicklern arbeiten und die Entwickler werden nicht durch Tests abgelenkt.", correct: false }
    ]
},
{
    question: `
        <p>Welche der folgenden Aussagen zum Vergleich zwischen den Reviewarten Walkthrough und Inspektion ist wahr?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Walkthroughs folgen einem definierten Prozess mit formalen dokumentierten Ergebnissen, während Inspektionen von recht informell bis hin zu sehr formal variieren können.", correct: false },
        { text: "Inspektionen werden von einem geschulten Moderator geleitet, während Walkthroughs üblicherweise vom Autor des Arbeitsergebnisses geleitet werden.", correct: true },
        { text: "Walkthroughs sind klar durch festgelegte Eingangs- und Endekriterien definiert, während Inspektionen ohne Eingangs- und Endekriterien durchgeführt werden können.", correct: false },
        { text: "Sowohl bei Inspektionen als auch bei Walkthroughs ist ein Protokollant, welcher nicht der Autor des Arbeitsergebnisses ist, unerlässlich, um die Ergebnisse des Reviews zu dokumentieren.", correct: false }
    ]
},
{
    question: `
        <p>Welches der folgenden Verfahren beschreibt <strong>keine</strong> Möglichkeit, um geeignete Testfälle aus den Kenntnissen und der Intuition des Testers heraus sowie aus seiner Erfahrung mit ähnlichen Anwendungen und Technologien zu entwerfen?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Werkzeugunterstütztes Testen", correct: true },
        { text: "Intuitive Testfallermittlung", correct: false },
        { text: "Exploratives Testen", correct: false },
        { text: "Checklistenbasiertes Testen", correct: false }
    ],
    userAnswer: 1 // Index of the user's answer
},
{
question: `
<p>Ein Autoverkäufer hat eine Rabattaktion gestartet, um einige seiner älteren Modelle besser verkaufen zu können. In der Beschreibung seiner Rabattaktion findet sich die folgende Textpassage:</p>
<p>"Bei einem Kaufpreis von weniger als 15.000€ soll kein Rabatt gewährt werden. Bei einem Preis bis zu 20.000€ sind 5% Rabatt angemessen. Liegt der Kaufpreis unter 25.000€, sind 7% Rabatt möglich, darüber sind 8,5% Rabatt einzuräumen."</p>
<p>Welche der folgenden Gruppen von Testeingabewerten sorgt für die beste Überdeckung von Äquivalenzklassen?</p>
<p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
`,
answers: [
{ text: "15000€, 15001€, 20001€, 24999€, 99999€", correct: false },
{ text: "0€, 14999€, 15001€, 21000€, 29000€", correct: true },
{ text: "0€, 500€, 20000€, 30000€, 40000€", correct: false },
{ text: "0€, 15000€, 15001€, 19999€, 24001€", correct: false }
]
},
{
    question: `
        <p>Welches der folgenden Verfahren kann der Kategorie Black-Box-Testverfahren zugeordnet werden?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Verfahren, welches auf einer Analyse der Architektur, dem Feinentwurf, der internen Struktur oder dem Code des Testobjekts basiert.", correct: false },
        { text: "Verfahren, welches auf einer Analyse der zugehörigen Testbasis, wie z. B. formalen Anforderungsdokumenten, Spezifikationen, Anwendungsfällen oder User-Stories, basiert.", correct: true },
        { text: "Verfahren, welches die Erfahrung von Entwicklern, Testern und Benutzern nutzt, um Tests zu entwerfen.", correct: false },
        { text: "Verfahren, welches Testfälle aus einer Testbasis ableitet, die Code zur Struktur der Software enthalten kann.", correct: false }
    ]
},
{
    question: `
        <p>Welche der folgenden Punkte beschreibt <strong>keinen</strong> typischen Grund für die Entstehung einer Fehlhandlung?</p>
       <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Zeitdruck", correct: false },
        { text: "Falsche Verwendung von Programmanforderungen", correct: false },
        { text: "Missverständnisse über systeminterne und systemübergreifende Schnittstellen", correct: false },
        { text: "Nicht gründliches Testen", correct: true }
    ]
},
{
    question: `
        <p>Welche der folgenden Aussagen beschreibt die Grenzwertanalyse am besten?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Die Grenzwertanalyse ist sinnvoll, um komplexe Regeln in Geschäftsprozessen zu erfassen, die ein System umzusetzen hat. Testbedingungen sollten dabei systematisch in einer Tabelle dargestellt werden.", correct: false },
        { text: "Die Grenzwertanalyse kann nur genutzt werden, wenn die Klasse geordnet ist und aus numerischen oder sequentiellen Daten besteht. Die Minimum- und Maximum-Werte einer Klasse sind dann ihre Grenzwerte.", correct: true },
        { text: "Die Grenzwertanalyse zeigt einerseits alle möglichen Softwarezustände selbst und andererseits auch, wie die Software in diesen Zustand eintritt, austritt und zwischen den Zuständen wechselt.", correct: false },
        { text: "Die Grenzwertanalyse teilt Daten so in Klassen auf, dass alle Elemente einer vorgegebenen Klasse erwartungsgemäß in derselben Art und Weise verarbeitet werden.", correct: false }
    ]
},
{
    question: `
        <p>Welchen wertvollen Beitrag leisten Tester bei der Iterationsplanung in einem iterativen Softwareentwicklungslebenszyklus?</p>
         <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Erstellung Testkonzept über alle Iterationen, Risikoanalyse, Aufteilung User Storys in Aufgaben, Identifizierung und Verfeinerung von funktionalen und nicht-funktionalen Testaspekten, Testbarkeitsbewertung", correct: false },
        { text: "Definition des Produkt-Backlogs, Verfeinerung größerer User Storys in eine Reihe kleinerer User Storys, Erstellung Testkonzept über alle Iterationen, Erstellung testbarer User Storys und Abnahmekriterien, Beteiligung an Projekt- und Qualitätsrisikoanalysen", correct: false },
        { text: "Schätzung des Testaufwands, Aufteilung User Storys in Aufgaben, Definition des Produkt-Backlogs, Beteiligung an Projekt- und Qualitätsrisikoanalysen, Testbarkeitsbewertung", correct: false },
        { text: "Risikoanalyse, Testbarkeitsbewertung, Aufteilung von User Storys in Aufgaben, Schätzung des Testaufwands, Identifizierung und Verfeinerung von funktionalen und nicht-funktionalen Testaspekten", correct: true }
    ]
},
{
    question: `
        <p>Welches der folgenden Verfahren kann nicht der Kategorie der Black-Box-Testverfahren zugeordnet werden?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Zustandsübergangstest", correct: false },
        { text: "Äquivalenzklassenbildung", correct: false },
        { text: "Zweigtest", correct: true },
        { text: "Entscheidungstabellentest", correct: false }
    ]
},
{
    question: `
        <p>Welche der folgenden Aussagen gibt den Unterschied zwischen statischen und dynamischen Tests am besten wieder?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Typische Fehlerzustände wie Anforderungsfehler lassen sich am besten durch dynamische Tests erkennen, während Entwurfs- und Programmierfehler leichter durch statische Analysen gefunden werden können.", correct: false },
        { text: "Statische Tests helfen Fehlerzustände in Arbeitsergebnissen direkt zu finden, während dynamische Tests erst die Fehlwirkungen identifizieren, die durch Fehlerzustände beim Ausführen des Testobjekts entstehen.", correct: true },
        { text: "Statische und dynamische Tests schließen sich gegenseitig eher aus, da sie die gleichen Fehlerbilder aufdecken.", correct: false },
        { text: "Statische Tests konzentrieren sich in der Regel auf extern sichtbares Verhalten, während dynamische Tests typischerweise genutzt werden, um die Konsistenz und interne Qualität der Arbeitsergebnisse zu verbessern.", correct: false }
    ]
},
{
    question: `
        <p>Welche der folgenden Optionen beschreibt die Notwendigkeit des Testens?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Durch Schulung des Entwicklerteams kann die Softwarequalität auch ohne Testen jederzeit sichergestellt werden.", correct: false },
        { text: "Das Testen identifiziert alle möglichen Fehlerzustände und stellt so die bestmögliche Softwarequalität sicher.", correct: false },
        { text: "Gründliches Testen von Komponenten oder Systemen und ihrer zugehörigen Dokumentation kann dabei helfen, das Risiko von Fehlerwirkungen zu reduzieren, die während des Betriebs auftreten können.", correct: true },
        { text: "Das Testen von Software dient durch die Behebung von Fehlerzuständen zur Steigerung der Softwarequalität, sodass vertragliche oder rechtliche Anforderungen oder branchenspezifische Standards erfüllt werden.", correct: false }
    ]
},
{
    question: `
        <p>Welche der folgenden Aktivitäten ist Teil der Hauptaktivität "Testentwurf" im Testprozess?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Erstellung oder Beschaffung der für die Testdurchführung erforderlichen Testmittel (z. B. Testdaten).", correct: false },
        { text: "Vergleich der Istergebnisse mit den erwarteten Ergebnissen.", correct: false },
        { text: "Analyse der Testbasis, um testbare Merkmale zu identifizieren und die zugehörigen Testbedingungen zu bestimmen und zu priorisieren, zusammen mit den damit verbundenen Risiken und Risikostufen.", correct: false },
        { text: "Ausarbeitung der Testbedingungen zu Testfällen und anderen Testmitteln (z. B. Test-Charts).", correct: true }
    ]
},

{
    "question": "Welche Aussage über die Beziehung zwischen der Anweisungsüberdeckung und der Zweigüberdeckung ist wahr?",
    "answers": [
      { "text": "100% Anweisungsüberdeckung schließt 100% Zweigüberdeckung ein.", "correct": false },
      { "text": "100% Zweigüberdeckung schließt 100% Anweisungsüberdeckung ein.", "correct": true },
      { "text": "Anweisungsüberdeckung kann nie 100% erreichen.", "correct": false },
      { "text": "Zweigüberdeckung kann nie 100% erreichen.", "correct": false }
    ]
  },
  {
    question: `
        <p>Was sind die charakteristischen Merkmale einer guten User Story nach dem INVEST-Prinzip, und was könnte es bedeuten, wenn ein Stakeholder nicht weiß, wie er eine User Story testen soll?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Eine gute User Story sollte unabhängig, verhandelbar, nützlich, schätzbar, klein und testbar sein. Wenn ein Stakeholder nicht weiß, wie er eine User Story testen soll, könnte dies darauf hindeuten, dass die User Story nicht klar genug ist oder für ihn keinen erkennbaren Mehrwert darstellt.", correct: true },
        { text: "Eine gute User Story sollte unabhängig, umfassend, technisch anspruchsvoll und detailliert sein. Wenn ein Stakeholder nicht weiß, wie er eine User Story testen soll, bedeutet dies, dass die Testabdeckung nicht ausreichend ist.", correct: false },
        { text: "Eine gute User Story sollte vom Product Owner ohne Rücksicht auf technische Machbarkeit erstellt werden. Wenn ein Stakeholder nicht weiß, wie er eine User Story testen soll, bedeutet dies, dass er zu wenig technisches Wissen hat.", correct: false },
        { text: "Eine gute User Story sollte von Entwicklern und Testern erstellt werden, ohne Beteiligung von Stakeholdern. Wenn ein Stakeholder nicht weiß, wie er eine User Story testen soll, liegt dies an mangelnder Schulung.", correct: false }
    ]
},
{
    question: `
        <p>Für welche der folgenden Situationen ist der Einsatz von checklistenbasiertem Testen am ehesten geeignet?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Wenn bereits spezifizierte Testfälle durch zusätzliche Anforderungen erweitert werden sollen.", correct: false },
        { text: "Wenn unter Zeitdruck die Durchführung bereits spezifizierter Tests beschleunigt werden muss.", correct: false },
        { text: "Wenn beim Fehlen detaillierter Testfälle ein bestimmtes Maß an Konsistenz geliefert werden soll.", correct: true },
        { text: "Wenn inkrementelle Software entwickelt und genauer spezifiziert werden soll.", correct: false }
    ]
},
{
    question: `
        <p>Testen und Debugging sind zwei völlig unterschiedliche und getrennte Aufgaben. Welche der folgenden Aussagen beschreibt den Unterschied beider Begriffe zutreffend?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Während Debugging das Ziel hat, Fehlerzustände zu lokalisieren und zu beheben, ist es Aufgabe des Tests, Fehlerwirkungen gezielt und systematisch aufzudecken.", correct: true },
        { text: "Während Testen das Ziel hat, Fehlerzustände zu lokalisieren und zu beheben, ist es Aufgabe des Debuggings, Fehlerwirkungen gezielt und systematisch aufzudecken.", correct: false },
        { text: "Debugging kann Fehlerwirkungen aufzeigen und verhindern, die durch Fehlerzustände in der Software hervorgerufen werden. Durch vorheriges Testen des Entwicklerteams können Fehlerzustände in der Software frühzeitig vermieden werden.", correct: false },
        { text: "Testen kann Fehlerwirkungen aufzeigen und verhindern, die durch Fehlerzustände in der Software hervorgerufen werden. Durch vorheriges Debugging des Entwicklerteams können Fehlerzustände in der Software frühzeitig vermieden werden.", correct: false }
    ]
},
{
    question: `
        <p>Welche der folgenden Metriken kann gesammelt werden, um die gegenwärtige Qualität des Testobjekts am besten zu beurteilen?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Prozentsatz des Budgets für externes Fachpersonal", correct: false },
        { text: "Anzahl der ausgeführten/nicht ausgeführten Testfälle", correct: true },
        { text: "Anzahl der Anforderungen, die in das Design und den Entwurf des Testobjekts einfließen", correct: false },
        { text: "Anzahl und Prioritäten der gefundenen/behobenen Fehlerzustände im letzten Projekt", correct: false }
    ]
},
{
    question: `
        <p>Während einer Risikoanalyse wurde das folgende Risiko identifiziert und bewertet:</p>
        <ul>
            <li>Risiko: Softwareabstürze können auftreten, wenn mehr als 100 Benutzer gleichzeitig auf das System zugreifen.</li>
            <li>Eintrittswahrscheinlichkeit: hoch; Schadensausmaß: mittel</li>
            <li>Risikobewältigung:</li>
            <ul>
                <li>Das Risiko wird von externen Experten im Bereich von Performanzrisiken analysiert.</li>
                <li>Es wird ein Plan entwickelt, um die Auswirkungen von Softwareabstürzen zu minimieren.</li>
            </ul>
        </ul>
        <p>Welche Maßnahme wird als Reaktion auf das analysierte Risiko ergriffen?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
    `,
    answers: [
        { text: "Risikominderung durch Testen", correct: false },
        { text: "Notfallplan", correct: true },
        { text: "Risikoakzeptanz", correct: false },
        { text: "Risikotransfer", correct: false }
    ]
}
];


let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null); // Stochează răspunsurile utilizatorului
let score = 0;
let timer;
let timeLeft = 3600; // 60 de minute în secunde

// Funcția pentru pornirea timer-ului
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').innerText = `Zeit: ${minutes}:${seconds.toString().padStart(2, '0')}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            finishQuiz(); // Finalizăm quiz-ul dacă timpul expiră
        }
    }, 1000);
}

// Funcția pentru afișarea întrebării curente și a numărului de întrebare
function showQuestion() {
    const questionElement = document.getElementById('question-container');
    const questionNumberElement = document.getElementById('question-number');
    const currentQuestion = questions[currentQuestionIndex];

    // Afișăm numărul întrebării
    questionNumberElement.innerText = `Frage ${currentQuestionIndex + 1} von ${questions.length}`;

    // Generăm conținutul întrebării
    let questionHTML = `
        <p>${currentQuestion.question}</p>
        <table class="answer-options">
    `;

    currentQuestion.answers.forEach((answer, index) => {
        questionHTML += `
            <tr>
                <td>${String.fromCharCode(97 + index)})</td>
                <td>${answer.text}</td>
                <td><input type="radio" name="answer" value="${index}" ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}></td>
            </tr>
        `;
    });

    questionHTML += `</table>`;
    questionElement.innerHTML = questionHTML;
}

// Salvăm răspunsul utilizatorului și trecem la următoarea întrebare
function saveUserAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const selectedAnswerIndex = parseInt(selectedOption.value);
        userAnswers[currentQuestionIndex] = selectedAnswerIndex;
        if (questions[currentQuestionIndex].answers[selectedAnswerIndex].correct) {
            score++;
        }
    }
}

// Calculăm răspunsurile corecte și afișăm rezultatul final
function finishQuiz() {
    clearInterval(timer);
    const totalQuestions = questions.length;
    const passingScore = 26;

    let resultMessage = `Du hast ${score} von ${totalQuestions} richtig. `;

    if (score >= passingScore) {
        resultMessage += 'Bestanden.';
        document.getElementById('smiley').innerText = '😊';
    } else {
        resultMessage += 'Nicht bestanden.';
        document.getElementById('smiley').innerText = '😢';
    }

    document.getElementById('result-message').textContent = resultMessage;
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('prev-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('finish-btn').style.display = 'none';
}

// Event listeners pentru butoane
document.getElementById('next-btn').addEventListener('click', function() {
    saveUserAnswer();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
});

document.getElementById('prev-btn').addEventListener('click', function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

document.getElementById('finish-btn').addEventListener('click', function() {
    saveUserAnswer(); // Salvăm răspunsul curent
    finishQuiz(); // Finalizăm quiz-ul
});

// Inițializăm quiz-ul la încărcarea paginii
document.addEventListener('DOMContentLoaded', () => {
    startTimer(); // Pornim timer-ul
    showQuestion(); // Afișăm prima întrebare
});