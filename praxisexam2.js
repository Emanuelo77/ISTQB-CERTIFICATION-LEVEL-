const questions = [
    {
        question: `
        <p>Welcher der folgenden Punkte kennzeichnet einen auf Metriken basierenden Ansatz für die Testaufwandsschätzung?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Von Fachexperten gesammelte durchschnittliche Kalkulationen.", correct: false },
            { text: "Übergreifende Erfahrung aus gesammelten Interviews mit Testmanagern.", correct: false },
            { text: "Im Testteam abgestimmte Aufwandsschätzung für die Testdurchführung.", correct: false },
            { text: "Budget, das von einem früheren, ähnlichen Testprojekt verwendet wurde.", correct: true }
        ]
    },
    {
        question: `
        <p>Nach der Installation eines Updates für ein Computerspiel stürzt das Programm beim Starten ab. Welcher Begriff beschreibt diesen Zustand am besten?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Fehlerzustand", correct: false },
            { text: "Fehlerwirkung", correct: true },
            { text: "Fehler", correct: false },
            { text: "Fehlhandlung", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen über Abnahmekriterien für User Stories ist korrekt?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Abnahmekriterien können in verschiedenen Formaten formuliert werden, einschließlich szenario-orientiert und regelorientiert.", correct: true },
            { text: "Abnahmekriterien dienen ausschließlich dazu, eine genaue Schätzung des Entwicklungsaufwands zu ermöglichen.", correct: false },
            { text: "Abnahmekriterien werden vom Projektmanagement definiert und vorgegeben.", correct: false },
            { text: "Abnahmekriterien werden in der Regel erst nach der Implementierung der User Story festgelegt.", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen beschreibt Entscheidungstabellentests am besten?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Entscheidungstabellen zeigen einerseits alle möglichen Softwarezustände selbst und andererseits auch, wie die Software in diesen Zustand eintritt, austritt und zwischen den Zuständen wechselt.", correct: false },
            { text: "Entscheidungstabellen sind sinnvoll, um komplexe Regeln in Geschäftsprozessen zu erfassen, die ein System umzusetzen hat. Testbedingungen sollten dabei systematisch in einer Tabelle dargestellt werden.", correct: true },
            { text: "Entscheidungstabellen teilen Daten so in Klassen auf, dass alle Elemente einer vorgegebenen Klasse erwartungsgemäß in derselben Art und Weise verarbeitet werden.", correct: false },
            { text: "Entscheidungstabellen können nur genutzt werden, wenn die Klasse geordnet ist und aus numerischen oder sequenziellen Daten besteht. Die Minimum- und Maximum-Werte einer Klasse sind dann ihre Grenzwerte.", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Optionen beschreibt checklistenbasiertes Testen am besten?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Eine Art des Testens, bei der die Testsuiten auf realen oder virtuellen Geräten ausgeführt werden.", correct: false },
            { text: "Ein Black-Box-Testverfahren, bei dem die Testfälle so entworfen werden, dass Paare von Parameter-Wertepaaren ausgeführt werden.", correct: false },
            { text: "Testen durch Senden von Kommandos an das zu testende System über die direkte Nutzung der Programmierschnittstelle der Applikation.", correct: false },
            { text: "Ein erfahrungsbasiertes Testverfahren, bei dem der Tester häufig eine Liste von Fragen verwendet, gegen welche eine Anforderung verifiziert werden muss.", correct: true }
        ]
    },
    {
        question: `
        <p>Ein Blumengeschäft kategorisiert die Blumen nach der Anzahl der benötigten Sonnenstunden pro Tag (unter 2 Stunden, 2 - 4 Stunden, über 4 Stunden) und der durchschnittlichen Intensität des Sonnenscheins (sehr niedrig, niedrig, mittel, hoch, sehr hoch).</p>
        <p>Die folgenden Testfälle wurden dazu aufgestellt:</p>
        <p>T1: 1,5 Sonnenstunden bei mittlerer Intensität.</p>
        <p>T2: 4,5 Sonnenstunden bei sehr hoher Intensität.</p>
        <p>T3: 1 Sonnenstunde bei sehr niedriger Intensität.</p>
        <p>Wie viele weitere Testfälle müssen mindestens noch erzeugt werden, um eine vollständige Überdeckung aller gültigen Äquivalenzklassen zu gewährleisten?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "4", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: `
        <p>Bei der Einführung eines neuen Smartphone Modells setzt das Unternehmen ein externes Testteam darauf an, alle möglichen Eingabewerte und deren Kombinationen unter Berücksichtigung aller unterschiedlichen Vorbedingungen zu prüfen, um in einigen Testiterationen alle Softwarefehler des neuen Modells finden zu können.</p>
        <p>Welchen Grundsatz des Softwaretestens hat das Unternehmen hierbei nicht beachtet?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Trugschluss: 'Keine Fehler' bedeutet ein brauchbares System", correct: false },
            { text: "Tests nutzen sich ab", correct: false },
            { text: "Testen zeigt das Vorhandensein, nicht die Abwesenheit von Fehlerzuständen", correct: false },
            { text: "Vollständiges Testen ist unmöglich", correct: true }
        ]
    },
    {
        question: `
        <p>In Ihrem Projekt gab es Verzögerungen bei der Veröffentlichung einer brandneuen Anwendung, und die Testausführung begann spät. Sie verfügen jedoch über sehr detaillierte Domänenkenntnisse und gute analytische Fähigkeiten. Die vollständige Liste der Anforderungen wurde dem Team noch nicht mitgeteilt, aber das Management bittet um die Präsentation einiger Testergebnisse.</p>
        <p>Welches Testverfahren passt in dieser Situation am besten?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Checklistenbasiertes Testen", correct:false },
            { text: "Äquivalenzklassenbildung", correct: false },
            { text: "Exploratives Testen", correct: true },
            { text: "Intuitive Testfallermittlung", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Optionen beschreibt einen inhaltlichen Punkt im Testfortschrittsbericht am besten?</p>
         <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Erzeugte wiederverwendbare Testarbeitsergebnisse.", correct: false },
            { text: "Restrisiken.", correct: false },
            { text: "Stand der Tests und Produktqualität in Bezug auf die Endekriterien oder die Definition-of-Done.", correct: false },
            { text: "Tests, die für die nächste Berichtsperiode geplant sind.", correct: true }
        ]
    },
    {
        question: `
        <p>Welche Aussage beschreibt den Whole-Team-Ansatz in der Softwareentwicklung am besten?</p>
         <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Im Whole-Team-Ansatz arbeitet jedes Teammitglied allein an seinen Aufgaben, um die Effizienz zu steigern.", correct: false },
            { text: "Der Whole-Team-Ansatz fördert die Isolation von Testern und schränkt die Zusammenarbeit mit anderen Teammitgliedern ein.", correct: false },
            { text: "Der Whole-Team-Ansatz legt fest, dass Tester die einzigen Mitglieder des Teams sind, die für die Qualität verantwortlich sind.", correct: false },
            { text: "Beim Whole-Team-Ansatz können alle Teammitglieder, die über die erforderlichen Kompetenzen verfügen, Aufgaben in verschiedenen Bereichen ausführen, um die Qualität zu verbessern.", correct: true }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen beschreibt eine Herausforderung im Zusammenhang mit DevOps?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Automatisierung durch eine Auslieferungskette erhöht den Bedarf an sich wiederholenden manuellen Tests.", correct: false },
            { text: "Steigert den Blick auf nicht-funktionale Qualitätsmerkmale.", correct: false },
            { text: "Langsame Rückmeldung über die Codequalität und ob sich Änderungen nachteilig auf den bestehenden Code auswirken.", correct: false },
            { text: "Die Testautomatisierung kann schwierig einzurichten und zu warten sein.", correct: true }
        ]
    },
    {
        question: `
        <p>Welches der folgenden Beispiele ist eine Fehlhandlung bei einem Radiowecker?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Die System-Entwurfsspezifikation gibt die Uhrzeit im falschen Format an.", correct: false },
            { text: "Der Radiowecker wird leiser, wenn der Lautstärkeregler gedrückt wird.", correct: false },
            { text: "Nicht benötigter Code, der um Mitternacht einen Alarm auslöst, wurde in die Software des Weckers mit aufgenommen.", correct: false },
            { text: "Der Softwareentwickler des Radioweckers hat vergessen, Anforderungen für das Erhöhen der Lautstärke umzusetzen.", correct: true }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen beschreibt keinen Erfolgsfaktor für Reviews?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Unterstützung des Reviewprozesses durch das Management.", correct: false },
            { text: "Jedes Review hat klare Ziele, die während der Reviewplanung definiert und als messbare Endekriterien genutzt werden.", correct: false },
            { text: "Es werden die Reviewarten genutzt, die passend sind, um die Ziele zu erreichen, und geeignet sind für Art und Stufe des Arbeitsergebnisses sowie der Teilnehmer.", correct: false },
            { text: "Das Review wird in einer vertrauensvollen Atmosphäre abgehalten, und das Ergebnis sollte zur Bewertung der Teilnehmer herangezogen werden.", correct: true }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen beschreibt am ehesten einen Vorteil für die Nutzung von Testautomatisierungen?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Leichterer Zugang - Versionskontrolle von Testobjekten.", correct: false },
            { text: "Zeitsersparnis - Mitarbeiter müssen nicht mehr geschult werden.", correct: false },
            { text: "Zeitsersparnis - Vergleich der erwarteten Ergebnisse mit den tatsächlichen Ergebnissen.", correct: true },
            { text: "Leichterer Zugang - Neue Plattformen oder Technologien können einfacher eingeführt werden.", correct: false }
        ]
    },
    {
        number: 15, // Numărul întrebării, asigură-te că este secvențial
        question: `
        <p>Welche der folgenden Aussagen zum nachfolgenden Zustandsübergangsdiagramm und der dargestellten Tabelle von Testfällen ist gültig?</p>
        <img src="Diagram2.png" alt="Zustandsübergangsdiagramm" />
        <table border="1" cellpadding="5">
            <tr>
                <th>Testfall-ID</th>
                <th>TF1</th>
                <th>TF2</th>
                <th>TF3</th>
                <th>TF4</th>
                <th>TF5</th>
            </tr>
            <tr>
                <td>Startzustand</td>
                <td>Erstellen</td>
                <td>Leer</td>
                <td>Leer</td>
                <td>Gefüllt</td>
                <td>Gefüllt</td>
            </tr>
            <tr>
                <td>Eingabe</td>
                <td>init</td>
                <td>push</td>
                <td>delete</td>
                <td>push</td>
                <td>push top</td>
            </tr>
            <tr>
                <td>Endzustand</td>
                <td>Leer</td>
                <td>Gefüllt</td>
                <td>Löschen</td>
                <td>Gefüllt</td>
                <td>Voll</td>
            </tr>
        </table>
         <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>`,
        answers: [
            { text: "Die Testfälle decken nur einige der gültigen, jedoch alle ungültigen Zustandsübergänge ab.", correct: false },
            { text: "Die Testfälle decken alle sequentiellen Paare von Zustandsübergängen ab.", correct: false },
            { text: "Die Testfälle decken alle gültigen und alle ungültigen Zustandsübergänge ab.", correct: false },
            { text: "Die Testfälle decken nur einige der gültigen und keine ungültigen Zustandsübergänge ab.", correct: true }
        ]
    },
    {
        number: 16, // Numărul întrebării, asigură-te că este secvențial
        question: `
        <p>Welche der folgenden Optionen definiert <strong>kein</strong> typisches Eingangskriterium?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>`,
        answers: [
            { text: "Verfügbarkeit einer Testumgebung.", correct: false },
            { text: "Verfügbarkeit von Testelementen, die die Endekriterien für vorangegangene Teststufen erfüllt haben.", correct: false },
            { text: "Verfügbarkeit von Testdaten und anderen notwendigen Ressourcen.", correct: false },
            { text: "Verfügbarkeit von Fehlerwirkungen und Fehlerzuständen.", correct: true }
        ]
    },
    {
        number: 17, // Numărul întrebării
        question: `
        <p>Welche der folgenden Optionen sind Rollen in einem formalen Review?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>`,
        answers: [
            { text: "Autor, Manager, Moderator, Gutachter, Protokollant, Reviewleiter", correct: true },
            { text: "Entwickler, Manager, Moderator, Reviewleiter, Autor, Gutachter", correct: false },
            { text: "Tester, Entwickler, Moderator, Gutachter, Protokollant, Manager", correct: false },
            { text: "Autor, Manager, Reviewleiter, Tester, Protokollant, Gutachter", correct: false }
        ]
    }, 
    {
        question: `
            <p>Als Testmanager verantworten Sie den Test der in der folgenden Abbildung dargestellten Anforderungen A1 bis A7:</p>
            <img src="Diagram3.png" alt="Anforderungsdiagramm" style="width: 300px; height: auto;">
            <p>Eine Abhängigkeit zwischen zwei Anforderungen ist jeweils mit einem Pfeil markiert: z. B. bedeutet "A1 -> A3", dass die Anforderung A3 von A1 abhängig ist, und der Pfeil aus dem Kasten (mit A4 und A7) nach A2 bedeutet, dass A2 von A4 und A7 abhängig ist.</p>
            <p>Welche der folgenden Reihenfolgen der Testausführung berücksichtigt die in der Abbildung dargestellten Abhängigkeiten?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>`,

        answers: [
            { text: "A1 -> A3 -> A6 -> A7 -> A4 -> A2 -> A5", correct: false },
            { text: "A1 -> A2 -> A3 -> A6 -> A4 -> A7 -> A5", correct: false },
            { text: "A1 -> A3 -> A2 -> A6 -> A5 -> A4 -> A7", correct: false },
            { text: "A1 -> A3 -> A6 -> A4 -> A7 -> A2 -> A5", correct: true }
        ]
    },
    {
        question: `
            <p>Welche der folgenden Optionen ist am ehesten <strong>nicht</strong> im Testkonzept enthalten?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>`,
        answers: [
            { text: "Rollen und Verantwortlichkeiten aller Stakeholder im Testprozess.", correct: false },
            { text: "Bestimmung des Umfangs, der Ziele und der Risiken der Tests.", correct: false },
            { text: "Festlegen der allgemeinen Testvorgehensweise.", correct: false },
            { text: "Richtlinien für gute Kommunikation zwischen Entwicklern und Testern.", correct: true }
        ]
    },
    {
        question: `
            <p>Welches der folgenden Arbeitsergebnisse ist Teil der Hauptaktivität "Testrealisierung"?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>`,
        answers: [
            { text: "Testausführungsplan", correct: true },
            { text: "Testbericht", correct: false },
            { text: "Testkonzept", correct: false },
            { text: "Testfälle", correct: false }
        ]
    },
    {
        question: `
            <p>Welche der folgenden Optionen beschreibt die intuitive Testfallerermittlung am besten?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>`,
        answers: [
            { text: "Die intuitive Testfallerermittlung ist ein Testansatz, bei dem das Auftreten von Fehlhandlungen, Fehlerzuständen und Fehlerwirkungen aufgrund des Wissens des Testers vermutet wird.", correct: true },
            { text: "Die intuitive Testfallerermittlung ist ein Testansatz, bei dem die Tests dynamisch entworfen und ausgeführt werden, basierend auf dem Wissen, der Erkundung des Testelements und den Ergebnissen früherer Tests.", correct: false },
            { text: "Die intuitive Testfallerermittlung ist ein Testansatz, bei dem das Auftreten von Fehlhandlungen, Fehlerzuständen und Fehlerwirkungen aufgrund des Wissens des Entwicklers vermutet wird.", correct: false },
            { text: "Die intuitive Testfallerermittlung ist ein Testansatz, bei dem Tester die Tests mit dem Ziel entwerfen, realisieren und ausführen, alle Testbedingungen aus einer Checkliste abzudecken.", correct: false }
        ]
    },
    {
        question: `
            <p>"Beim Anweisungstest wird mit einem Testfall 50% Überdeckung erreicht, wenn der Quellcode lediglich aus einer einzigen IF-Anweisung besteht."</p>
            <p>Welche der folgenden Optionen trifft auf die obige Aussage am besten zu?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>`,
        answers: [
            { text: "Die Aussage ist richtig. Ein einzelner Testfall erzielt eine 50% Anweisungsüberdeckung und eine 100% Entscheidungsüberdeckung.", correct: false },
            { text: "Die Aussage ist richtig. Bei einem einzelnen Testfall ist der Entscheidungs-ausgang der IF-Anweisung entweder 'wahr' oder 'falsch'.", correct: false },
            { text: "Die Aussage ist falsch. Bei einem einzelnen Testfall werden mindestens 50% aller Anweisungen abgedeckt, im besten Fall sogar 100%.", correct: false },
            { text: "Die Aussage ist falsch. Bei einem einzelnen Testfall wird die IF-Anweisung auf jeden Fall durchlaufen und damit 100% aller Anweisungen abgedeckt.", correct: true }
        ]
    },
    {
        question: `
            <p>Welche der folgenden Aussagen beschreibt den Zustandsübergangstest am besten?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>`,
        answers: [
            { text: "Der Zustandsübergangstest hilft mit Hilfe von Checklisten ein gewisses Maß an Konsistenz bei der Testfallermittlung zu gewährleisten.", correct: false },
            { text: "Der Zustandsübergangstest hilft Testfälle anhand der Stakeholder Anforderungen zu kategorisieren.", correct: false },
            { text: "Der Zustandsübergangstest hilft die Übergänge vom Minimum auf das Maximum bei der Grenzwertanalyse zu bewerten.", correct: false },
            { text: "Der Zustandsübergangstest hilft neben den Eingabedaten auch den bisherigen Ablauf des Systems in die Berechnung der Ausgaben bzw. auf das Systemverhalten miteinzubeziehen.", correct: true }
        ]
    },
    {
        question: `
            <p>Welche der folgenden Aussagen beschreibt ein gültiges Ziel des Testens?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>`,
        answers: [
            { text: "Identifizierung von notwendigen Testdaten zur Unterstützung der Testbedingungen und Testfälle.", correct: false },
            { text: "Neue, unbekannte Technologien erlernen.", correct: false },
            { text: "Analyse der Testbasis, die für die in Betracht gezogene Teststufe geeignet ist.", correct: false },
            { text: "Verifizieren, ob alle spezifischen Anforderungen erfüllt sind.", correct: true }
        ]
    },
    {
        question: `
            <p>Was ist das Hauptziel von Retrospektiven in der Softwareentwicklung?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>`,
        answers: [
            { text: "Die Planung zukünftiger Entwicklungsphasen.", correct: false },
            { text: "Die Erstellung von neuen Softwareanforderungen.", correct: false },
            { text: "Die Validierung der Testergebnisse.", correct: false },
            { text: "Die Identifizierung von Erfolgen und Misserfolgen in vergangenen Aktivitäten.", correct: true }
        ]
    },
    {
        question: `
            <p>Was ist das Hauptziel eines informellen Reviews?</p>
             <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Die Erfassung von Metriken zur Prozessverbesserung.", correct: false },
            { text: "Die Aufdeckung von Anomalien.", correct: true },
            { text: "Die Erstellung formaler, dokumentierter Ergebnisse für das Management.", correct: false },
            { text: "Die Bewertung der Qualität und dem Aufbau von Vertrauen in das Arbeitsergebnis.", correct: false }
        ]
    },
    {
        "question": `
            <p>Welche der folgenden Aussagen beschreibt am ehesten ein Produktrisiko?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>       
            `,  
        "answers": [
            { "text": "Die Entwickler haben möglicherweise nicht die Zeit, alle vom Testteam gefundenen Fehler zu beheben.", "correct": false },
            { "text": "Aufgrund eines Fehlerzustands im Quellcode wird eine Berechnung nicht korrekt durchgeführt.", "correct": true },
            { "text": "Die für den Test benötigte Umgebung und die Testdaten stehen nicht rechtzeitig zur Verfügung.", "correct": false },
            { "text": "Es bestehen vertragliche Probleme mit Lieferanten.", "correct": false }
        ]
    },
    {
        "question": `
            <p>Bei der Inbetriebnahme einer neuen Softwarekomponente eines Systems hat ein Tester in einem bestimmten Bereich der Software einige erste Fehler aufgedeckt. In weiteren Testrunden hat der Tester im gleichen Bereich mehr Tests ausgeführt als in anderen Bereichen der Software.</p>
            <p>Welchen Grundsatz des Softwaretestens hat der Tester hierbei angewendet?</p>
             <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>     
            `,
        "answers": [
            { "text": "Vollständiges Testen ist unmöglich", "correct": false },
            { "text": "Fehlerzustände treten gehäuft auf", "correct": true },
            { "text": "Tests nutzen sich ab", "correct": false },
            { "text": "Testen ist kontextabhängig", "correct": false }
        ]
    },
    {
        "question": `
            <p>Welche Schritte sind im ATDD-Prozess normalerweise enthalten, um sicherzustellen, dass eine User Story richtig verstanden und umgesetzt wird?</p>
             <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>        
            `,
        "answers": [
            { "text": "Zuerst erstellt das Entwicklungsteam die User Story, dann analysiert das Testteam die Abnahmekriterien, gefolgt von der Erstellung der Testfälle.", "correct": false },
            { "text": "Der erste Schritt ist ein Spezifikationsworkshop, in dem die User Story und deren Abnahmekriterien analysiert, diskutiert und geschrieben werden, gefolgt von der Erstellung der Testfälle.", "correct": true },
            { "text": "Es gibt keinen festgelegten Prozess. ATDD kann je nach den Anforderungen des Projekts variieren.", "correct": false },
            { "text": "Der Prozess beginnt mit dem Schreiben der User Story, gefolgt von der automatisierten Ausführung der Testfälle, um die Implementierung zu überprüfen.", "correct": false }
        ]
    },
    {
        "question": `
            <p>Welches Hauptprinzip kennzeichnet die Testgetriebene Entwicklung (TDD)?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        "answers": [
            { "text": "Leitet Tests aus Abnahmekriterien als Teil des Systementwurfs ab.", "correct": false },
            { "text": "Förderung von automatisierten Prozessen wie CI/CD.", "correct": false },
            { "text": "Zuerst werden Tests geschrieben, dann wird der Code geschrieben.", "correct": true },
            { "text": "Drückt das gewünschte Verhalten einer Anwendung mit Testfällen aus.", "correct": false }
        ]
    },
    {
        "question": `
            <p>Ein Autoverkäufer hat eine Rabattaktion gestartet, um einige seiner älteren Modelle besser verkaufen zu können. In der Beschreibung seiner Rabattaktion findet sich die folgende Textpassage:</p>
            <blockquote>"Bei einem Kaufpreis von weniger als 15.000€ soll kein Rabatt gewährt werden. Bei einem Preis bis zu 20.000€ sind 5% Rabatt angemessen. Liegt der Kaufpreis unter 25.000€, sind 7% Rabatt möglich, darüber sind 8,5% Rabatt einzuräumen."</blockquote>
            <p>Welche der folgenden Testsätze liefert die höchste Überdeckung von Grenzwerten, wenn die Grenzwertanalyse ausschließlich unter Verwendung der Minimal- und Maximalwerte verwendet wird?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        "answers": [
            { "text": "15000€, 15001€, 20000€, 20001€, 25000€", "correct": false },
            { "text": "14999€, 15000€, 15001€, 19999€, 20000€", "correct": false },
            { "text": "15000€, 15001€, 20000€, 25000€, 25001€", "correct": false },
            { "text": "14999€, 15000€, 20000€, 24999€, 25000€", "correct": true }
        ]
    },
    {
        "question": `
            <p>Sie testen die neueste Version eines Radioweckers. Der Radiowecker kann per Schalter automatisch zwischen den Alarmmöglichkeiten "Radio Musik", "Smartphone Musik" und "durchgängiger Ton" umgeschaltet werden.</p>
            <p>Die Funktion "Smartphone Musik" baut dabei eine Bluetooth-Verbindung zum Smartphone auf und streamt darüber Audio direkt auf dem Radiowecker.</p>
            <p>Beim Testen ist Ihnen eine Fehlerwirkung aufgefallen und Sie schreiben einen Fehlerbericht mit den folgenden Informationen:</p>
            <ul>
                <li>Titel: Smartphone Musik Funktion fehlerhaft.</li>
                <li>Beschreibung: Beim Auswählen der Smartphone Musik Funktion lässt sich zwar eine Bluetooth Verbindung zum Smartphone herstellen, jedoch wird keine Musik abgespielt.</li>
                <li>Erwartetes Ergebnis: Smartphone Musik wird abgespielt.</li>
                <li>Phase des Entwicklungslebenszyklus: Systemtest</li>
                <li>Grad des Risikos: Mittel</li>
                <li>Priorität: Hoch</li>
            </ul>
            <p>Welche wertvolle Information haben Sie im obigen Fehlerbericht vergessen?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        "answers": [
            { "text": "Identifikation des Testelements", "correct": true },
            { "text": "Korrekturmaßnahmen des Entwicklers", "correct": false },
            { "text": "Tatsächliches Istergebnis", "correct": false },
            { "text": "Status des Fehlerzustands", "correct": false }
        ]
    },
    {
        "question": `
            <p>Welche der folgenden Definitionen zur Anweisungsüberdeckung ist korrekt?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        "answers": [
            { "text": "Anweisungsüberdeckung = (Gesamtanzahl Quellcodezeilen / Anzahl durchlaufener Quellcodezeilen) * 100%", "correct": false },
            { "text": "Anweisungsüberdeckung = (Anzahl durchlaufene Anweisungen / Gesamtanzahl Anweisungen) * 100%", "correct": true },
            { "text": "Anweisungsüberdeckung = (Anzahl durchlaufener Quellcodezeilen / Gesamtanzahl Quellcodezeilen) * 100%", "correct": false },
            { "text": "Anweisungsüberdeckung = (Gesamtanzahl Anweisungen / Anzahl durchlaufene Anweisungen) * 100%", "correct": false }
        ]
    },
    {
        "question": `
            <p>Ein agiles Projektteam arbeitet an einem Softwareentwicklungsprojekt. Sie verwenden ein Burn-Down-Chart, um den Fortschritt bei der Umsetzung von User Stories während einer Iteration zu verfolgen. Das Team besteht aus Entwicklern, Testern und einem Product Owner. Die Kommunikation des Teststatus ist entscheidend, um sicherzustellen, dass alle Teammitglieder auf dem gleichen Stand sind und Hindernisse rechtzeitig behoben werden.</p>
            <p>Welche Kommunikationsmethode wäre in diesem agilen Projektteam wahrscheinlich am effektivsten, um den Teststatus und den Fortschritt bei der Umsetzung von User Stories zu vermitteln?</p>
           <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        "answers": [
            { "text": "Ein tägliches Stand-Up-Meeting, bei dem das Team den aktuellen Stand und Hindernisse bespricht.", "correct": true },
            { "text": "Ein wöchentliches Status-Meeting, bei dem alle Teammitglieder persönlich teilnehmen.", "correct": false },
            { "text": "Das Versenden von wöchentlichen E-Mail-Updates an alle Stakeholder.", "correct": false },
            { "text": "Das Erstellen eines detaillierten Testberichts am Ende jeder Iteration.", "correct": false }
        ]
    },
    {
        "question": `
            <p>Welche der folgenden Aussagen trifft am besten auf die Eignung von Arbeitsergebnissen für statische Tests zu?</p>
           <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        "answers": [
            { "text": "Jedes Arbeitsergebnis kann mit statischen Tests untersucht werden, unabhängig von seiner Struktur oder seinem Inhalt.", "correct": false },
            { "text": "Arbeitsergebnisse, die für statische Tests geeignet sind, müssen keine klare Struktur oder formale Syntax haben.", "correct": false },
            { "text": "Arbeitsergebnisse, die gelesen und verstanden werden können und eine Struktur haben, können Gegenstand eines Reviews sein.", "correct": true },
            { "text": "Arbeitsergebnisse, die schwer zu interpretieren sind und nicht mit Hilfe von Werkzeugen analysiert werden sollten, sind ideal für statische Tests geeignet.", "correct": false }
        ]
    },
    {
        "question": `
            <p>Welche der folgenden Aussagen trifft auf den Unterschied zwischen statischem und dynamischem Testen zu?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        "answers": [
            { "text": "Statischer Test kann leichter Fehlerzustände aufdecken, die auf Pfaden durch den Code liegen, die selten ausgeführt werden oder schwer durch dynamische Tests zu erreichen sind.", "correct": true },
            { "text": "Statischer Test kann nur auf ausführbare Arbeitsergebnisse angewandt werden, während dynamischer Test auf nicht ausführbare Arbeitsergebnisse angewandt werden kann.", "correct": false },
            { "text": "Beim dynamischen Test werden Fehlerzustände direkt gefunden, während beim statischen Test Fehlerwirkungen auftreten, aus denen durch eine anschließende Analyse die zugehörigen Fehlerzustände ermittelt werden.", "correct": false },
            { "text": "Statischer Test kann zur Messung von Qualitätsmerkmalen verwendet werden, die von der Ausführung des Codes abhängen, während dynamischer Test zur Messung von Qualitätsmerkmalen verwendet werden kann, die nicht von der Ausführung des Codes abhängen.", "correct": false }
        ]
    },
    {
        "question": `
            <p>In einem Softwareprojekt zur Entwicklung einer E-Commerce-Plattform wurden mehrere Produktrisiken identifiziert und bewertet. Ein solches Risiko betrifft die Sicherheit der Kundendaten. Es wurde festgestellt, dass die Sicherheitsanfälligkeit in der Login-Funktionalität des Systems besteht.</p>
            <p>Welche Maßnahmen können ergriffen werden, um das Risiko der Sicherheitsanfälligkeit in der Login-Funktionalität durch Testen zu mindern?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p> 
            `,
        "answers": [
            { "text": "Das Testteam aus Fachleuten für Benutzeroberflächentests zusammenstellen.", "correct": false },
            { "text": "Durchführung automatisierter Regressionstests in allen Teststufen.", "correct": false },
            { "text": "Durchführung von Reviews und statischen Analysen des Entwicklercodes.", "correct": false },
            { "text": "Gezielt Penetrationstests durchführen, um Sicherheitslücken in der Login-Funktionalität zu identifizieren.", "correct": true }
        ]
    },
    {
        "question": `
            <p>Warum ist es wichtig, Reviews in kleinen Einheiten durchzuführen, um den Erfolg des Reviewprozesses sicherzustellen?</p>
           <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p> 
        `,
        "answers": [
            { "text": "Um sicherzustellen, dass die Gutachter während eines individuellen Reviews oder einer Reviewsitzung die Konzentration nicht verlieren.", "correct": true },
            { "text": "Um die Anzahl der Teilnehmer zu begrenzen.", "correct": false },
            { "text": "Um die vorgegebenen Ziele zu erreichen, ohne dass der zeitliche Rahmen überschritten wird.", "correct": false },
            { "text": "Um Zeit zu sparen, sodass das Management seiner eigentlichen Aufgabe nachgehen kann.", "correct": false }
        ]
    },
    {
        "question": `
            <p>Welche der folgenden Situationen kann ein Auslöser für Wartung und Wartungstests sein?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p> 
        `,
        "answers": [
            { "text": "Geplante Erweiterungen und korrigierende Änderungen.", "correct": true },
            { "text": "Die Implementierung von neuen Geschäftsanforderungen.", "correct": false },
            { "text": "Das erste Release eines neuen Softwareprodukts.", "correct": false },
            { "text": "Die Einführung eines neuen Projektmanagementsystems.", "correct": false }
        ]
    },
    {
        "question": `
            <p>Welche der folgenden Aussagen beschreibt einen Nachteil von unabhängigem Testen?</p>
            <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p> 
        `,
        "answers": [
            { "text": "Hoher Schulungsaufwand des unabhängigen Testteams.", "correct": false },
            { "text": "Geringes Finden von Fehlern aufgrund fehlender Informationen über das Testobjekt.", "correct": false },
            { "text": "Mangelnde Zusammenarbeit und Kommunikationsprobleme zwischen Testern und dem Entwicklungsteam.", "correct": true }
        ]
    },    
];

function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

// Apelăm funcția de amestecare a întrebărilor înainte de a începe quiz-ul
shuffleQuestions();

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