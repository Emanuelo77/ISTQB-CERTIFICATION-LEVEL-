
const questions = [
    // Question 21
    {
        question: `
        <p>Welche der folgenden Aussagen zu statischen Tests, wie Reviews oder statische Analysen, ist am ehesten gültig?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Statische Tests reduzieren die Gesamtkosten über die Lebenszeit der Software hinweg, da weniger Fehlerwirkungen zu einem späteren Zeitpunkt im Lebenszyklus oder nach Auslieferung in die Produktion auftreten.", correct: true },
            { text: "Statische Tests können aufgrund ihrer Vielfältigkeit ohne Probleme Wartungstests in der produktiven Umgebung ersetzen.", correct: false },
            { text: "Statische Tests, wie z. B. Reviews, lassen sich lediglich auf Anforderungsdokumente oder Testkonzepte anwenden, nicht jedoch auf Entwicklerscode.", correct: false },
            { text: "Statische Tests machen dynamische Tests überflüssig, da Fehlerzustände bereits beim statischen Test aufgedeckt werden.", correct: false }
        ]
    },
    // Question 22
    {
        question: `
        <p>Von welcher Rolle in einem formalen Review hängt der Erfolg des Reviews maßgeblich ab?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Gutachter", correct: false },
            { text: "Reviewmoderator", correct: true },
            { text: "Reviewleiter", correct: false },
            { text: "Autor", correct: false }
        ]
    },
    // Question 23
    {
        question: `
        <p>Welche der nachfolgenden Informationen sind am sinnvollsten, um sie in den Fehlerbericht mit aufzunehmen?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "1, 3, 5", correct: false },
            { text: "2, 4, 5", correct: false },
            { text: "3, 5, 6", correct: true },
            { text: "1, 2, 6", correct: false }
        ]
    },
    // Question 24
    {
        question: `
        <p>Ein agiles Projektteam hat ein neues Softwareprojekt begonnen und möchte die Teststrategie unter Verwendung der Quadranten von Brian Marick entwickeln. Das Team möchte sicherstellen, dass alle relevanten Testarten und -stufen im Projekt berücksichtigt werden, um die Qualität des Produkts zu gewährleisten.</p>
        <p>Folgende Zuordnungen von Quadranten zu Testarten und -stufen wurden vorgeschlagen:</p>
        <ol>
            <li>Q1: Komponentenintegrationstests, Q2: Funktionale Tests, Q3: Explorative Tests, Q4: Smoke-Tests</li>
            <li>Q1: Funktionale Tests, Q2: Explorative Tests, Q3: Komponentenintegrationstests, Q4: Smoke-Tests</li>
            <li>Q1: Komponentenintegrationstests, Q2: Funktionale Tests, Q3: Explorative Tests, Q4: Smoke-Tests</li>
            <li>Q1: Smoke-Tests, Q2: Komponentenintegrationstests, Q3: Explorative Tests, Q4: Funktionale Tests</li>
        </ol>
        <p><strong>Welche Zuordnung der Testarten zu den Testquadranten entspricht den Testquadranten von Brian Marick?</strong></p>
        `,
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false }
        ]
    },
    // Question 25
    {
        question: `
        <p>Gegeben sind folgende Beispiele für Eingangs- und Endekriterien:</p>
        <ol>
            <li>60% der geplanten Tests wurden durchgeführt.</li>
            <li>Alle User-Stories konnten geschlossen werden.</li>
            <li>Testwerkzeuge für einen Performanztest sind vorhanden.</li>
            <li>CSV-Dateien mit den spezifizierten Testdaten liegen zur Verfügung.</li>
            <li>Zwei kritische Fehlerzustände mit mittlerer Priorität sind dokumentiert.</li>
            <li>Ein unabhängiges Testteam ist für den Testprozess definiert und anwesend.</li>
        </ol>
        <p><strong>Welche der folgenden Kombinationen beschreiben die Eingangs- und Endekriterien korrekt?</strong></p>
        `,
        answers: [
            { text: "Eingangskriterien: 1, 3, 4, 6. Endekriterien: 2, 5.", correct: true },
            { text: "Eingangskriterien: 1, 4, 6. Endekriterien: 3, 2, 5.", correct: false },
            { text: "Eingangskriterien: 3, 5, 6. Endekriterien: 1, 2, 4.", correct: false },
            { text: "Eingangskriterien: 2, 4, 5. Endekriterien: 1, 3, 6.", correct: false }
        ]
    },
    // Question 26
    {
        question: `
        <p>In welcher Teststufe werden die codebasierten White-Box-Verfahren am häufigsten angewendet?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Systemstufe", correct: false },
            { text: "Systemintegrationsstufe", correct: false },
            { text: "Komponentenstufe", correct: true },
            { text: "Abnahmestufe", correct: false }
        ]
    },
    // Question 27
    {
        question: `
        <p>Was impliziert beim White-Box-Zweigtest eine Zweigüberdeckung von 100%?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "0% Anweisungsüberdeckung", correct: false },
            { text: "50% Anweisungsüberdeckung", correct: false },
            { text: "mindestens 33% Anweisungsüberdeckung", correct: false },
            { text: "100% Anweisungsüberdeckung", correct: true }
        ]
    },
    // Question 28
    {
        question: `
        <p>Warum ist es wichtig, beim Testen den "Shift-Left"-Ansatz zu berücksichtigen und bewährte Verfahren wie das Schreiben von Testfällen vor der Coderealisierung zu verwenden?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Um den Entwicklungsprozess zu überprüfen und zusätzlichen Aufwand zu vermeiden.", correct: false },
            { text: "Um sicherzustellen, dass nicht-funktionale Tests erst spät im SDLC durchgeführt werden.", correct: false },
            { text: "Um potenzielle Fehlerzustände frühzeitig zu identifizieren und zu beheben.", correct: true },
            { text: "Um zu vermeiden, dass Testen zu zusätzlichen Schulungen, Aufwand und/oder Kosten führt.", correct: false }
        ]
    },
    // Question 29
    {
        question: `
        <p>Welches der folgenden Beispiele ist kein Beispiel für den Shift-Left-Ansatz?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Überprüfung der Benutzeranforderungen, bevor sie formell von den Stakeholdern akzeptiert werden.", correct: false },
            { text: "Schreiben eines Testskripts, bevor der Konfigurationsmanagementprozess eingerichtet wird.", correct: true },
            { text: "Schreiben eines Komponententests, bevor der entsprechende Code geschrieben wird.", correct: false },
            { text: "Ausführen eines Performanztests für eine Komponente während des Komponententests.", correct: false }
        ]
    },
    // Question 30
    {
        question: `
        <p>Welche der folgenden Aussagen beschreibt das Konzept von unabhängigem Testen am besten?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Testen liegt in der Verantwortung des Entwicklerteams, da ein Entwickler das Testobjekt und seinen Programmcode am besten kennt.", correct: false },
            { text: "Zwischen Test- und Entwicklungsarbeiten sollte nicht unterschieden werden. Entwickler sollten unabhängig sein und alle Testaufgaben mitübernehmen.", correct: false },
            { text: "Mitglieder eines Entwicklerteams sind ausschließlich für Testarbeiten zuständig. Diese Tester erledigen alle Testarbeiten ihres Teams.", correct: true },
            { text: "Testen sollte nicht in der Verantwortung des Entwicklerteams liegen, da der eigene Programmcode nicht objektiv gesehen werden kann. Das Projektmanagement sollte für jegliche Testarbeiten zuständig sein.", correct: false }
        ]
    },
    // Question 31
    {
        question: `
        <p>Welche der folgenden Aussagen ist eher ein Fehlerzustand als eine Grundursache für einen Fehlerzustand in einem Radiowecker?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Das Designteam des Unternehmens sitzt im Ausland und hat das Format der angezeigten Zeit falsch entworfen.", correct: false },
            { text: "Nicht benötigter Code, der standardmäßig um Mitternacht einen Alarm auslöst, wurde in die Software des Weckers mit aufgenommen.", correct: true },
            { text: "Der Projektmanager war mit den Anforderungen der Stakeholder nicht vertraut und hat diese falsch an den Entwickler kommuniziert.", correct: false },
            { text: "Der Tester des Radioweckers war nicht im Softwaretesten geschult und hat daher einen signifikanten Fehler übersehen.", correct: false }
        ]
    },
    // Question 32
    {
        question: `
        <p>Nachfolgend sind vier Hauptaktivitäten des Testprozesses (A - D.) und vier Testaufgaben (1. - 4.) dargestellt:</p>
        <ul>
            <li>A: Testplanung</li>
            <li>B: Testüberwachung und -steuerung</li>
            <li>C: Testentwurf</li>
            <li>D: Testdurchführung</li>
        </ul>
        <p>1. Prüfung von Testergebnissen und -protokollen gegen spezifische Überdeckungskriterien</p>
        <p>2. Entwurf der Testumgebung und Identifizierung benötigter Infrastruktur und Werkzeuge</p>
        <p>3. Spezifizierung geeigneter Testverfahren und Aufgaben</p>
        <p>4. Vergleich der Ist-Ergebnisse mit den erwarteten Ergebnissen</p>
        <p><strong>Welches ist die korrekte Paarung von Testaktivitäten und Testaufgaben?</strong></p>
        `,
        answers: [
            { text: "A1, B2, C4, D3", correct: false },
            { text: "A3, B2, C1, D4", correct: false },
            { text: "A3, B1, C2, D4", correct: true },
            { text: "A2, B3, C1, D4", correct: false }
        ]
    },
    // Question 33
    {
        question: `
        <p>Was ist der Hauptzweck der Aktivität "Reviewbeginn" im Reviewprozess?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Die Sicherstellung, dass alle Teilnehmer vorbereitet sind, um mit dem Review zu beginnen.", correct: true },
            { text: "Die Analyse von Anomalien und Empfehlungen.", correct: false },
            { text: "Die Identifizierung von Fehlern im zu prüfenden Arbeitsergebnis.", correct: false },
            { text: "Die Erstellung von Fehlerberichten für alle während des Reviews identifizierten Fehlerzustände.", correct: false }
        ]
    },
    // Question 34
    {
        question: `
        <p>Angenommen, Sie sind der Testmanager für ein Softwareprojekt zur Entwicklung einer E-Commerce-Website. Ihr Team ist dafür verantwortlich, die Zahlungsabwicklungsfunktion der Website zu testen. Welche der folgenden Aussagen beschreibt am besten ein Endekriterium für die erfolgreiche Testphase der Zahlungsabwicklungsfunktion?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Die Website wurde von einer unabhängigen dritten Partei überprüft.", correct: false },
            { text: "Der Projektmanager ist mit dem Fortschritt der Testphase zufrieden.", correct: false },
            { text: "Die Entwicklung des Zahlungsabwicklungscodes wurde abgeschlossen.", correct: false },
            { text: "Alle definierten Testfälle für die Zahlungsabwicklung wurden erfolgreich ausgeführt.", correct: true }
        ]
    },
    // Question 35
    {
        question: `
        <p>Welche der folgenden Aussagen beschreibt die Äquivalenzklassenbildung am besten?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Die Äquivalenzklassenbildung kann nur genutzt werden, wenn die Klasse geordnet ist und aus numerischen oder sequentiellen Daten besteht. Die Minimum- und Maximum-Werte einer Klasse sind dann ihre Grenzwerte.", correct: false },
            { text: "Äquivalenzklassen zeigen einerseits alle möglichen Softwarezustände selbst und andererseits auch, wie die Software in diesen Zustand eintritt, austritt und zwischen den Zuständen wechselt.", correct: false },
            { text: "Äquivalenzklassen sind sinnvoll, um komplexe Regeln in Geschäftsprozessen zu erfassen, die ein System umzusetzen hat. Testbedingungen sollten dabei systematisch in einer Tabelle dargestellt werden.", correct: false },
            { text: "Die Äquivalenzklassenbildung teilt Daten so in Klassen auf, dass alle Elemente einer vorgegebenen Klasse erwartungsgemäß in derselben Art und Weise verarbeitet werden.", correct: true }
        ]
    },
    // Question 36
    {
        question: `
        <p>Welche der folgenden Aussagen über Testschätzverfahren ist korrekt?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Bei expertenbasierten Testschätzverfahren beruht die Schätzung des Testaufwands auf der Erfahrung der für die Testaufgaben zuständigen Person oder von Experten, während die Schätzung des Testaufwands bei metriksbasierten Verfahren auf der Analyse früherer Projekte basiert.", correct: false },
            { text: "Bei metriksbasierten Testschätzverfahren beruht die Schätzung des Testaufwands auf der Analyse von Metriken aus früheren Projekten oder durch Extrapolation verschiedener Datenpunkte, während die Schätzung des Testaufwands bei expertenbasierten Verfahren auf der Erfahrung der für die Testaufgaben zuständigen Person oder von Experten basiert.", correct: true },
            { text: "Bei expertenbasierten Testschätzverfahren beruht die Schätzung des Testaufwands auf Metriken früherer ähnlicher Projekte, während die Schätzung des Testaufwands bei metriksbasierten Verfahren auf der Erfahrung der für die Testaufgaben zuständigen Person oder von Experten basiert.", correct: false },
            { text: "Bei metriksbasierten Testschätzverfahren beruht die Schätzung des Testaufwands auf Basis der Metriken aller Anforderungen der Kunden und der Anzahl der Testfälle, während die Schätzung des Testaufwands bei expertenbasierten Verfahren auf der Erfahrung der für die Testaufgaben zuständigen Person oder von Experten basiert.", correct: false }
        ]
    },
    // Question 37
    {
        question: `
        <p>In einem Softwareprojekt wird ein Testkonzept erstellt, um die Testziele, Ressourcen und Prozesse festzulegen. Welche der folgenden Aussagen über ein Testkonzept ist <strong>nicht</strong> korrekt?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Ein Testkonzept dokumentiert die Mittel und den Zeitplan zur Erreichung der Testziele.", correct: false },
            { text: "Ein Testkonzept dient als Mittel zur Kommunikation mit Teammitgliedern und anderen Stakeholdern.", correct: false },
            { text: "Ein Testkonzept hilft sicherzustellen, dass das Testen die bestehende Testrichtlinie und Teststrategie einhält.", correct: false },
            { text: "Ein Testkonzept kann die Testaktivitäten festlegen, die von den festgelegten Kriterien abweichen.", correct: true }
        ]
    },
    // Question 38
    {
        question: `
        <p>Bei der Einführung einer neuen Waschmaschine konnte das interne Testteam keine Fehlerwirkungen im Test aufzeigen. Aufgrund dieser Tatsache betitelt der Projektmanager die Waschmaschine als fehlerfreies System. Welchen Grundsatz des Softwaretestens hat der Projektmanager hierbei nicht beachtet?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Vollständiges Testen ist unmöglich", correct: false },
            { text: "\"Keine Fehler\" bedeutet ein brauchbares System", correct: false },
            { text: "Testen zeigt das Vorhandensein, nicht die Abwesenheit von Fehlerzuständen", correct: true },
            { text: "Frühes Testen spart Zeit und Geld", correct: false }
        ]
    },
    // Question 39
    {
        question: `
        <p>Ein durchgeführter Test hat folgende Eigenschaften:</p>
        <ul>
            <li>Ziel ist es, Vertrauen in die Qualität des Systems als Ganzes aufzubauen</li>
            <li>Der Test kann Informationen bereitstellen, mit denen sich die Bereitschaft des Systems für den Einsatz und die Nutzung durch den Kunden beurteilen lässt</li>
            <li>Fehlerzustände im System aufzudecken ist keines der Ziele</li>
        </ul>
        <p><strong>Auf welcher der folgenden Teststufen wird dieser Test am wahrscheinlichsten durchgeführt?</strong></p>
        `,
        answers: [
            { text: "Systemintegrationstest", correct: false },
            { text: "Komponententest", correct: false },
            { text: "Systemtest", correct: false },
            { text: "Abnahmetest", correct: true }
        ]
    },
    // Question 40
    {
        question: `
        <p>Ein neues Projekt im agilen Umfeld nutzt Continuous Integration und Continuous Deployment (CI/CD), um kontinuierlich neue Versionen des Produkts zu erstellen und bereitzustellen. Welche Art von Test wird dabei typischerweise in einem CI/CD-Prozess automatisiert durchgeführt, um sicherzustellen, dass eine neue Version keine kritischen Fehlerzustände enthält, bevor sie bereitgestellt wird?</p>
        <p><strong>Wählen Sie genau eine korrekte Option.</strong></p>
        `,
        answers: [
            { text: "Lasttest", correct: false },
            { text: "Smoke-Test", correct: true },
            { text: "Usability-Test", correct: false },
            { text: "Komponententest", correct: false }
        ]
    },
    
        // Question 1
        {
            question: "Unter welchem Umstand ist es nicht möglich eine vollständige Überdeckung aller Anweisungen zu erreichen?",
            answers: [
                { text: "Wenn der Programmcode lediglich eine IF-Anweisung enthält mit leerem ELSE-Teil.", correct: false },
                { text: "Bei lediglich 25% Zweigüberdeckung.", correct: false },
                { text: "Wenn der Programmcode nicht erreichbare Anweisungen enthält.", correct: true },
                { text: "Wenn der Programmcode Kommentare enthält, die in einer IF-Bedingung vorkommen.", correct: false },
            ]
        },
        // Question 2
        {
            question: "Ein Unternehmen plant ein neues Bonussystem für seine Mitarbeiter einzuführen. Dabei sollen die Mitarbeiter je nach Dauer des Angestelltenverhältnisses am Erfolg des Unternehmens beteiligt werden.\n\n" +
                      "Der jährliche Bonus kann dabei wie folgt ausfallen:\n" +
                      "- 500€ Bonus (weniger als oder gleich 2 Jahre angestellt)\n" +
                      "- 1000€ Bonus (mehr als 2 Jahre und weniger als oder gleich 5 Jahre angestellt)\n" +
                      "- 2000€ Bonus (mehr als 5 Jahre und weniger als oder gleich 7 Jahre angestellt)\n" +
                      "- 3000€ Bonus (mehr als 7 Jahre angestellt)\n\n" +
                      "Für eine Überdeckung von 100%, welcher wäre der notwendige Satz von Werten (Dauer des Angestelltenverhältnisses in ganzen Jahren), der durch die Grenzwertanalyse identifiziert wird, wobei nur die Werte auf den Grenzen der Äquivalenzklassen zu wählen sind?",
            answers: [
                { text: "1, 2, 3, 4, 5, 6", correct: false },
                { text: "3, 4, 5, 6, 7, 8", correct: false },
                { text: "2, 3, 5, 6, 7, 8", correct: true },
                { text: "1, 2, 3, 4, 6, 8", correct: false },
            ]
        },
        // Question 3
        {
            question: "Welche der folgenden Aussagen ist eine gültige Definition des V-Modells?",
            answers: [
                { text: "Die Festlegung der Anforderungen, der Entwurf, die Implementierung und das Testen des Systems erfolgt in Teilen.", correct: false },
                { text: "Entwicklung und Test erfolgen in einer von vornherein geplanten Abfolge von Versionsständen und Zwischenlieferungen.", correct: false },
                { text: "Das Testen wird als separate Phase betrachtet und findet erst statt, nachdem alle Entwicklungsaktivitäten abgeschlossen sind.", correct: false },
                { text: "Es werden arbeitsteilige Teststufen unterschieden, wobei jede Stufe gegen ihre jeweilige Testbasis verifiziert wird.", correct: true },
            ]
        },
        // Question 4
        {
            question: "Welche der folgenden Aussagen beschreibt ein gültiges Ziel des Testens?",
            answers: [
                { text: "Vorbereitung von Testdaten und Sicherstellung, dass sie ordnungsgemäß in die Testumgebung geladen sind.", correct: false },
                { text: "Stakeholdern ausreichende Informationen zur Verfügung stellen.", correct: true },
                { text: "Erstellen eines Testabschlussberichts.", correct: false },
                { text: "Durchführung von Testaktivitäten nach den vorgegebenen Zeitplänen.", correct: false },
            ]
        },
        // Question 5
        {
            question: "Für welche der folgenden Situationen ist der Einsatz von explorativem Testen am ehesten geeignet?",
            answers: [
                { text: "Wenn jegliche Dokumente, die als Grundlage für die Erstellung der Testfälle heranzuziehen sind, von sehr schlechter Qualität, veraltet oder sogar gar nicht vorhanden sind.", correct: true },
                { text: "Wenn unter Zeitdruck die Durchführung bereits spezifizierter Tests beschleunigt werden muss.", correct: false },
                { text: "Wenn bereits ein sehr detailliertes Wissen über das Testsystem und die Anforderungen vorhanden ist.", correct: false },
                { text: "Wenn das System inkrementell entwickelt wird und der Testprozess durch Werkzeuge unterstützt werden soll.", correct: false },
            ]
        },
        // Question 6
        {
            question: "Welche Option über die Beziehung zwischen der Anweisungsüberdeckung und der Zweigüberdeckung ist für obige Aussage wahr?",
            answers: [
                { text: "Werden zwei Testfälle ausgeführt, so ist eine Zweigüberdeckung von 100% und eine Anweisungsüberdeckung von ungefähr 66% gegeben.", correct: false },
                { text: "Werden zwei Testfälle ausgeführt, so ist eine Anweisungsüberdeckung von 100% und eine Zweigüberdeckung von ungefähr 66% möglich.", correct: true },
                { text: "Wird ein einziger Testfall ausgeführt, so ist eine Anweisungsüberdeckung von 100% und eine Zweigüberdeckung von ungefähr 50% gegeben.", correct: false },
                { text: "Wird ein einziger Testfall ausgeführt, so ist eine Anweisungsüberdeckung von 50% und eine Zweigüberdeckung von ungefähr 33% gegeben.", correct: false },
            ]
        },
        // Question 7
        {
            question: "Welche der folgenden Optionen beschreibt die Notwendigkeit des Testens?",
            answers: [
                { text: "Durch Testen kann die Brauchbarkeit eines Systems nach den Vorstellungen und Erwartungen der Nutzer gezeigt werden.", correct: false },
                { text: "Testen bietet ein Mittel zur direkten Bewertung der Qualität eines Testobjekts in verschiedenen Phasen des Softwarelebenszyklus.", correct: true },
                { text: "Das Testen identifiziert alle möglichen Fehlerzustände und stellt so die bestmögliche Softwarequalität sicher.", correct: false },
                { text: "Testen zeigt die Fehlerfreiheit eines Systems.", correct: false },
            ]
        },
        // Question 8
        
        // Question 10
        {
            question: "Welche der folgenden Aussagen zur Anweisungsüberdeckung ist korrekt?",
            answers: [
                { text: "Die Anweisungsüberdeckung ist ein Maß für die Anzahl aller Kommentare im Quellcode, die durch den Test ausgeführt wurden.", correct: false },
                { text: "Die Anweisungsüberdeckung ist ein Maß für den prozentualen Anteil aller ausführbaren Anweisungen im Quellcode, die durch den Test ausgeführt wurden.", correct: true },
                { text: "Die Anweisungsüberdeckung ist ein Maß für die Anzahl aller Anweisungen im Quellcode, die durch den Test ausgeführt wurden.", correct: false },
                { text: "Die Anweisungsüberdeckung ist ein Maß für den prozentualen Anteil aller Kommentare im Quellcode, die durch den Test ausgeführt wurden.", correct: false },
            ]
        },
        {
            question: "Welche der folgenden Aussagen zur Anweisungsüberdeckung ist korrekt?",
            answers: [
              { text: "Die Anweisungsüberdeckung ist ein Maß für die Anzahl aller Kommentare im Quellcode, die durch den Test ausgeführt wurden.", correct: false },
              { text: "Die Anweisungsüberdeckung ist ein Maß für den prozentualen Anteil aller ausführbaren Anweisungen im Quellcode, die durch den Test ausgeführt wurden.", correct: true },
              { text: "Die Anweisungsüberdeckung ist ein Maß für die Anzahl aller Anweisungen im Quellcode, die durch den Test ausgeführt wurden.", correct: false },
              { text: "Die Anweisungsüberdeckung ist ein Maß für den prozentualen Anteil aller Kommentare im Quellcode, die durch den Test ausgeführt wurden.", correct: false }
            ]
          },
          {
            question: "Welches der folgenden Verfahren kann der Kategorie 'Erfahrungsbasierte Testverfahren' zugeordnet werden?",
            answers: [
              { text: "Verfahren, welches Testfälle aus einer Testbasis ableitet, die Code zur Struktur der Software enthalten kann.", correct: false },
              { text: "Verfahren, welches die Erfahrung von Entwicklern, Testern und Benutzern nutzt, um Tests zu entwerfen.", correct: true },
              { text: "Verfahren, welches auf einer Analyse der zugehörigen Testbasis, wie z. B. formalen Anforderungsdokumenten, Spezifikationen, Anwendungsfällen oder User-Stories, basiert.", correct: false },
              { text: "Verfahren, welches auf einer Analyse der Architektur, dem Feinentwurf, der internen Struktur oder dem Code des Testobjekts basiert.", correct: false }
            ]
          },
          {
            question: "Welche der folgenden Aussagen beschreibt am ehesten ein Projektrisiko?",
            answers: [
                { text: "Die Software führt vielleicht nicht die gewünschten Funktionen gemäß ihrer Spezifikation aus.", correct: false },
                { text: "Eine Systemarchitektur könnte einige nicht-funktionale Anforderungen nicht angemessen unterstützen.", correct: false },
                { text: "Fähigkeiten, Schulungen und Mitarbeiter sind möglicherweise nicht ausreichend.", correct: true },
                { text: "Sicherheitsschwachstellen gefährden persönliche Daten und Zahlungskonditionen von Kunden.", correct: false }
            ]
        },
        {
            question: "Für die Größe eines Flachbildschirms gilt folgende Anforderung: Der Bildschirm muss im Konferenzraum eine der folgenden Größen einnehmen, um die Darstellungsgröße von Präsentationen aus der zweiten Reihe zu gewährleisten:\n\n1. 50 Zoll Bildschirmdiagonale.\n2. 55 Zoll Bildschirmdiagonale.\n3. 60 Zoll Bildschirmdiagonale.\n4. 65 Zoll Bildschirmdiagonale.\n\nWelche Testfallmenge ist zum Testen dieser Anforderung beim Verwenden der Äquivalenzklassenbildung notwendig, um das Ziel einer Überdeckung von 100% zu gewährleisten?",
            answers: [
                { text: "Prüfe, ob die Darstellungsgröße von Präsentationen auf einem Monitor mit 65 Zoll Bildschirmdiagonale gewährleistet werden kann (1 Testfall).", correct: false },
                { text: "Prüfe, ob die Darstellungsgröße von Präsentationen auf einem Monitor mit einer beliebigen Bildschirmdiagonale gewährleistet werden kann (1 Testfall).", correct: false },
                { text: "Prüfe, ob die Darstellungsgröße von Präsentationen auf einem Monitor mit jeder der geforderten Bildschirmdiagonalen gewährleistet werden kann (4 Testfälle).", correct: true },
                { text: "Prüfe, ob die Darstellungsgröße von Präsentationen auf einem Monitor mit der kleinsten Bildschirmdiagonale (50 Zoll) und der größten Bildschirmdiagonale (65 Zoll) gewährleistet werden kann (2 Testfälle).", correct: false }
            ]
        },
        {
            question: "Welche der folgenden Aussagen beschreibt am ehesten ein Projektrisiko?",
            answers: [
                { text: "Die Software führt vielleicht nicht die gewünschten Funktionen gemäß ihrer Spezifikation aus.", correct: false },
                { text: "Eine Systemarchitektur könnte einige nicht-funktionale Anforderungen nicht angemessen unterstützen.", correct: false },
                { text: "Fähigkeiten, Schulungen und Mitarbeiter sind möglicherweise nicht ausreichend.", correct: true },
                { text: "Sicherheitsschwachstellen gefährden persönliche Daten und Zahlungskonditionen von Kunden.", correct: false }
            ]
        },
        {
            question: "Welche der folgenden Aussagen zum Vergleich zwischen funktionalen und nicht-funktionalen Tests ist am zutreffendsten?",
            answers: [
                { text: "Funktionale Tests sollten überwiegend in Komponententests durchgeführt werden, während nicht-funktionale Tests in allen Teststufen durchgeführt werden sollten.", correct: false },
                { text: "Funktionale Tests testen das Verhalten, welches das System oder Systemteile erbringen müssen, während nicht-funktionale Tests Attribute des funktionalen Verhaltens testen, also wie gut bzw. mit welcher Qualität das System seine Funktion erbringen soll.", correct: true },
                { text: "Nicht-funktionale Tests sollten überwiegend in Komponententests durchgeführt werden, während funktionale Tests in allen Teststufen durchgeführt werden sollten.", correct: false },
                { text: "Nicht-funktionale Tests testen das Verhalten, welches das System oder Systemteile erbringen müssen, während funktionale Tests Attribute des funktionalen Verhaltens testen, also wie gut bzw. mit welcher Qualität das System seine Funktion erbringen soll.", correct: false }
            ]
        },
        {
            question: "Welcher der folgenden Punkte gehört zu den potenziellen Risiken von Testautomatisierungen mit Hilfe von Testwerkzeugen?",
            answers: [
                { text: "Vermeidung einfacher menschlicher Fehlhandlungen durch größere Konsistenz.", correct: false },
                { text: "Verminderung der objektiven Bewertung (z. B. Überdeckung).", correct: false },
                { text: "Zu starkes Vertrauen in ein Werkzeug.", correct: true },
                { text: "Es könnte die für manuelles Testen zugewiesene Zeit reduzieren.", correct: false }
            ]
        },
        {
            question: "Für die Implementierung einer effektiven Testüberwachung und -steuerung ist es wichtig, die Verfolgbarkeit durch den gesamten Testprozess zwischen allen Elementen der Testbasis und den verschiedenen Testarbeitsergebnissen zu schaffen und zu erhalten. Welcher der folgenden Punkte wird durch gute Verfolgbarkeit ebenfalls unterstützt?",
            answers: [
                { text: "Identifizierung der Infrastruktur", correct: false },
                { text: "Entwurf der Testumgebung", correct: false },
                { text: "Testen nachvollziehbarer zu machen", correct: true },
                { text: "Erkennen notwendiger Testdaten", correct: false }
            ]
        },
        {
            question: "Welcher der folgenden Punkte beschreibt am besten, wie das Konfigurationsmanagement den Test unterstützt?",
            answers: [
                { text: "Testelemente sind eindeutig identifiziert, versionskontrolliert, werden in ihren Änderungen nachverfolgt und stehen in Verbindung zueinander.", correct: true },
                { text: "Fehleranalysen sind erleichtert, weil unbekannt ist, wo und warum der Quellcode einer Komponente gegenüber der Vorversion geändert wurde.", correct: false },
                { text: "Entwickler überschreiben gegenseitig ihre am Quellcode oder anderen Dokumenten vorgenommenen Modifikationen.", correct: false },
                { text: "Testfälle können dem zugehörigen Tester eindeutig zugeordnet werden.", correct: false }
            ]
        },
        {
            question: "Nachfolgend sind vier Testarbeitsergebnisse (A. - D.) und vier Beschreibungen (1. - 4.) dargestellt:\nA. Testfall\nB. Testskript\nC. Test-Charta\nD. Testsuite\n1. Eine Abfolge von Anweisungen für die Durchführung eines Tests\n2. Eine Menge von Testfällen oder Testskripten, welche in einem bestimmten Testzyklus ausgeführt werden sollen\n3. Enthält die erwarteten Ergebnisse und Nachbedingungen\n4. Die Dokumentation von Testaktivitäten im Rahmen des sitzungsbasierten explorativen Testens\nWelches ist die korrekte Paarung von Testarbeitsergebnissen und zugehöriger Beschreibung?\nWählen Sie genau eine korrekte Option.",
            answers: [
                { text: "A3, B2, C4, D1", correct: false },
                { text: "A3, B1, C2, D4", correct: false },
                { text: "A3, B1, C4, D2", correct: true },
                { text: "A1, B3, C4, D2", correct: false }
            ]
        },
        {
            question: "Ein durchgeführtes Review hat folgende Eigenschaften: - Ziel ist es, Anomalien aufzudecken, die Qualität zu bewerten und Vertrauen aufzubauen - Ziel ist es auch, Autoren zur Verbesserung zu motivieren - Durchführung von technisch qualifizierten Gutachtern - Leitung durch einen Moderator Welches der folgenden Reviewarten wird hier am wahrscheinlichsten verwendet?",
            answers: [
                { text: "Technisches Review", correct: true },
                { text: "Walkthrough", correct: false },
                { text: "Inspektion", correct: false },
                { text: "Informelles Review", correct: false }
            ]
        },
        {
            question: "Welche der folgenden Optionen gibt die Rollen und Verantwortlichkeiten in einem formalen Review (z. B. Inspektion) korrekt wieder?",
            answers: [
                { text: "Reviewleiter - Entscheidet, wer in das Review einbezogen wird, und bestimmt, wann und wo es stattfindet.", correct: true },
                { text: "Protokollant - Identifiziert potenzielle Fehlerzustände und dokumentiert diese.", correct: false },
                { text: "Autor - Ist verantwortlich für die Reviewplanung.", correct: false },
                { text: "Gutachter - Entscheidet, was geprüft werden soll, und stellt Ressourcen wie Personal und Zeit für das Review zur Verfügung.", correct: false }
            ]
        }
        
        // ... repeat for remaining questions (11 to 20)
    ];
    


        
    

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null); // Stochează răspunsurile utilizatorului
let score = 0;
let timer;
let timeLeft = 3600; // 60 minute în secunde

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

// Funcția pentru afișarea numărului întrebării curente
function updateQuestionNumber() {
    document.getElementById('question-number').innerText = `Frage ${currentQuestionIndex + 1} von ${questions.length}`;
}

// Afișăm întrebarea curentă
function showQuestion() {
    const questionElement = document.getElementById('question-container');
    const currentQuestion = questions[currentQuestionIndex];

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

    // Actualizăm numărul întrebării
    updateQuestionNumber();
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

// Inițializăm quiz-ul
startTimer(); // Pornim timer-ul
showQuestion(); // Afișăm prima întrebare