const questions = [
    {
        question: `
        <p>Welche der folgenden Aussagen beschreibt ein erreichbares Testziel?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Nachweis, dass das zu prüfende System keine Fehlerzustände mehr hat", correct: false },
            { text: "Nachweis, dass es nach der produktiven Inbetriebnahme des Systems keine Fehlerwirkungen geben wird", correct: false },
            { text: "Verringerung der Risikostufe des Testobjekts und Aufbau von Vertrauen in das Qualitätsniveau", correct: true },
            { text: "Überprüfung, dass alle Kombinationen von Eingabewerten getestet wurden", correct: false }
        ]
    },
    {
        question: `
        <p>Was ist der Hauptunterschied zwischen Testen und Debuggen?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Testen ist der Prozess der Fehlersuche, während Debugging der Prozess der Fehlerbehebung ist.", correct: true },
            { text: "Beim Testen werden Anforderungen überprüft, während beim Debugging der Entwurf überprüft wird.", correct: false },
            { text: "Testen ist der Prozess des Ausführens von Software, während das Debugging der Prozess der Analyse der Software ist.", correct: false },
            { text: "Testen ist der Prozess der Fehlervermeidung, während das Debugging der Prozess der Fehlerbeseitigung ist.", correct: false }
        ]
    },
    {
        question: `
        <p>Sie sind Mitglied eines Teams, das ein neues System testet. Ihnen ist aufgefallen, dass seit mehreren Iterationen keine Änderungen an den bestehenden Regressionstestfällen vorgenommen und keine neuen Fehler durch einen Regressionstest aufgedeckt wurden. Ihr Vorgesetzter ist zufrieden, aber Sie sind es nicht.</p>
        <p><strong>Welcher Grundsatz des Testens erklärt Ihre Skepsis in dieser Situation am besten?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Alte Tests verlieren an Wirksamkeit", correct: true },
            { text: "Trugschluss: „Keine Fehler” bedeutet ein brauchbares System", correct: false },
            { text: "Häufung von Fehlerzuständen", correct: false },
            { text: "Vollständiges Testen ist nicht möglich", correct: false }
        ]
    },
    {
        question: `
        <p>Sie arbeiten in einem Team, das eine mobile Anwendung für Essensbestellungen entwickelt. In der aktuellen Iteration hat das Team beschlossen, die Zahlungsfunktionalität zu implementieren.</p>
        <p><strong>Welche der folgenden Aktivitäten gehören zur Testanalyse?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Die Aufwandsschätzung für den Test der Integration der mobilen Anwendung mit dem Zahlungsdienst durchführen.", correct: false },
            { text: "Die Entscheidung ob getestet wird, inwieweit Zahlungen zwischen mehreren Nutzern aufgeteilt werden können.", correct: true },
            { text: "Mittels Grenzwertanalyse werden die Testdaten für die Testfälle abgeleitet, die die korrekte Zahlungsabwicklung für den zulässigen minimalen Betrag überprüfen.", correct: false },
            { text: "Analyse der Abweichung zwischen dem tatsächlichen und dem erwarteten Ergebnis nach der Ausführung eines Testfalls.", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen beschreibt AM BESTEN, wie ein Mehrwert durch Etablierung und Aufrechterhaltung der Verfolgbarkeit zwischen Testbasis und den Testmitteln erzielt wird?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Wartungstests können basierend auf Änderungen der ursprünglichen Anforderungen vollständig automatisiert werden.", correct: false },
            { text: "Es kann effizienter bestimmt werden, ob die angestrebte Überdeckung auch tatsächlich erreicht wurde.", correct: true },
            { text: "Die Testmanagementrolle kann feststellen, welche Tester die Fehler mit dem höchsten Schweregrad gefunden haben.", correct: false },
            { text: "Codebereiche, die möglicherweise durch Seiteneffekte einer Änderung beeinflusst werden, können durch Regressionstests gezielt überprüft werden.", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen vergleicht am BESTEN die verschiedenen Rollen beim Testen?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Die Rolle des Testens führt Testfälle aus, die Testmanagementrolle plant und überwacht die Testaktivitäten und meldet die Abweichungen an alle Tester.", correct: false },
            { text: "Die Rolle des Testens führt die Aktivitäten der Testanalyse und des Testentwurfs aus, erstellt und führt Testfälle aus, die Testmanagementrolle koordiniert die Testressourcen und berichtet an die Stakeholder.", correct: true },
            { text: "Die Rolle des Testens entscheidet die zu automatisierenden Tests und priorisiert Testfälle, die Testmanagementrolle analysiert Risiken und setzt Prioritäten für die Tests.", correct: false },
            { text: "Die Rolle des Testens führt statische und dynamische Komponententests durch, die Testmanagementrolle führt Systemtests und Abnahmetests durch.", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen erklärt am BESTEN einen Vorteil der Unabhängigkeit des Testens?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Der Einsatz eines unabhängigen Testteams ermöglicht es der Projektleitung, dem Testteam die Verantwortung für die Qualität des Endprodukts zu übertragen.", correct: false },
            { text: "Wenn man sich ein externes Testteam leisten kann, dann hat das den Vorteil, dass dieses externe Team nicht so leicht von den Bedenken des Projektmanagements und der Notwendigkeit, strikte Liefertermine einzuhalten, beeinflusst werden kann.", correct: false },
            { text: "Ein unabhängiges Testteam kann getrennt von den Entwicklern arbeiten, muss nicht durch Änderungen der Projektanforderungen abgelenkt werden und kann die Kommunikation mit den Entwicklern auf die Fehlerberichterstattung über das Fehlermanagementsystem beschränken.", correct: false },
            { text: "Wenn Spezifikationen Mehrdeutigkeiten und Ungereimtheiten enthalten, treffen Entwickler Annahmen über ihre Interpretation, und ein unabhängiges Testteam kann nützlich sein, um diese Annahmen und die Interpretation der Entwickler zu hinterfragen.", correct: true }
        ]
    },
    {
        question: `
        <p>Wie zeigt sich der Whole-Team-Ansatz in der Interaktion zwischen Testern und Fachbereichsvertretern?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Fachbereichsvertreter entscheiden gemeinsam mit der Projektleitung über die Ansätze zur Testautomatisierung", correct: false },
            { text: "Tester helfen Fachbereichsvertreter bei der Festlegung der Teststrategie", correct: false },
            { text: "Die Beteiligung von Fachbereichsvertreter ist nicht Teil des Whole-Team-Ansatz", correct: false },
            { text: "Tester helfen Fachbereichsvertretern bei der Erstellung geeigneter Abnahmetests", correct: true }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen beschreibt am BESTEN eine gute Praktik für das Testen, die für alle Softwareentwicklungslebenszyklen gilt?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Testen sollte erst nach Abschluss der Entwicklung durchgeführt werden.", correct: false },
            { text: "Testen sollte unter Federführung der Entwicklung durchgeführt werden.", correct: false },
            { text: "Testen sollte frühzeitig im Entwicklungsprozess beginnen.", correct: true },
            { text: "Testen sollte in einer Entwicklungstestumgebung durchgeführt werden.", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen beschreibt AM BESTEN den Ansatz der abnahmetestgetriebenen Entwicklung (ATDD)?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "In der ATDD werden Abnahmekriterien typischerweise basierend auf dem Format \"GIVEN/WHEN/THEN\" erstellt.", correct: false },
            { text: "Bei ATDD werden zunächst die Testfälle entwickelt und dann die Software inkrementell gegen die Testfälle und definierten Abnahmekriterien implementiert.", correct: false },
            { text: "Bei ATDD werden Tests aus Abnahmekriterien als Teil des Systementwurfs abgeleitet.", correct: true },
            { text: "Bei ATDD basieren die Tests auf dem gewünschten Verhalten der Software, was es für die Teammitglieder einfacher macht, die Tests und die definierten Abnahmekriterien zu verstehen.", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen ist KEIN Beispiel für den Shift-left-Ansatz?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Überprüfung der Benutzeranforderungen, bevor sie von den Stakeholdern formell akzeptiert werden", correct: false },
            { text: "Erstellen von Komponententestfällen, bevor der zugehörige Code programmiert wird", correct: false },
            { text: "Ausführen des Performanztest einer Komponente während des Komponententests", correct: false },
            { text: "Durchführung von nicht-funktionalen Tests, wenn möglich, beginnend auf der Ebene der Systemtests", correct: true }
        ]
    },
    {
        question: `
        <p>Welches der folgenden Argumente ist AM BESTEN geeignet, um Ihren Vorgesetzten davon zu überzeugen, am Ende eines jeden Release-Zyklus eine Retrospektive durchzuführen?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Retrospektiven sind heutzutage sehr beliebt und unsere Kunden würden es zu schätzen wissen, wenn wir sie in unsere Prozesse aufnehmen würden.", correct: false },
            { text: "Die regelmäßige Durchführung von Retrospektiven spart dem Unternehmen Geld, da die Vertreter der Endnutzer kein unmittelbares Feedback über das Produkt geben.", correct: false },
            { text: "Die bei der Retrospektive festgestellten Prozessschwächen können während der Retrospektive analysiert werden und als Aufgabenliste für das Programm zur kontinuierlichen Prozessverbesserung des Unternehmens dienen.", correct: true },
            { text: "Retrospektiven ermöglichen es dem Team, sich gegenseitig zu loben und zu motivieren, was die Arbeitsmoral und die Produktivität erhöht.", correct: false }
        ]
    },
    {
        question: `
        <p>Welche Arten von Fehlerzuständen (1-4) werden in welchen Teststufen (A-D) am ehesten gefunden?</p>
        <ol>
            <li>Fehlerzustände, wenn das Systemverhalten von den geschäftlichen Anforderungen abweicht</li>
            <li>Fehlerzustände in der Kommunikation zwischen Komponenten</li>
            <li>Fehlerzustände in einer isolierten Komponente</li>
            <li>Fehlerzustände in einer nicht korrekt implementierten User-Story</li>
        </ol>
        <p><strong>A. Komponententest<br>
        B. Komponentenintegrationstest<br>
        C. Systemtest<br>
        D. Abnahmetests</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "1D, 2B, 3A, 4C", correct: true },
            { text: "1D, 2B, 3C, 4A", correct: false },
            { text: "1B, 2A, 3D, 4C", correct: false },
            { text: "1C, 2A, 3B, 4D", correct: false }
        ]
    },
    {
        question: `
        <p>Die Teststrategie Ihres Unternehmens sieht vor, dass die Datenmigration zum Nachfolgesystem getestet werden muss, sobald ein System außer Betrieb genommen wird.</p>
        <p><strong>Mit welcher Testaktivität wird diese Anforderung AM EHENSTEN erfüllt?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Wartungstest", correct: true },
            { text: "Regressionstest", correct: false },
            { text: "Komponententest", correct: false },
            { text: "Komponentenintegrationstest", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Optionen ist KEIN Vorteil des statischen Testens?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Die Bewertung und Behebung der durch eine statische Analyse aufgedeckten Anomalien kann erheblichen Zeit- und Ressourcenaufwand erfordern.", correct: true },
            { text: "Die Behebung von Fehlerzuständen, die bei statischen Tests gefunden werden, ist in der Regel wesentlich kostengünstiger als die Behebung von Fehlern, die bei dynamischen Tests gefunden werden.", correct: false },
            { text: "Das Finden von Programmierfehlern, die bei dynamischen Tests möglicherweise nicht gefunden werden.", correct: false },
            { text: "Das Aufdecken von Lücken und Unstimmigkeiten in den Anforderungen.", correct: false }
        ]
    },
    {
        question: `
        <p>Welcher der folgenden Punkte ist ein Vorteil von frühem und häufigem Feedback durch Stakeholder?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Es verbessert den Testprozess für zukünftige Projekte", correct: false },
            { text: "Es zwingt die Kunden dazu, ihre Anforderungen basierend auf den abgestimmten Risiken zu priorisieren", correct: false },
            { text: "Nur so lässt sich die Qualität der Änderungen im Prozess messen", correct: false },
            { text: "Es hilft, Missverständnisse bei den Anforderungen zu vermeiden", correct: true }
        ]
    },
    {
        question: `
        <p>Die in Ihrem Unternehmen durchgeführten Reviews weisen die folgenden Eigenschaften auf:</p>
        <ul>
            <li>Der Hauptzweck ist die Kommunikation oder die Schulung der Gutachter.</li>
            <li>Die Sitzung wird vom Autor des Arbeitsergebnisses geleitet.</li>
            <li>Es gibt eine individuelle Vorbereitung der Reviewer (Gutachter).</li>
            <li>Ein Reviewbericht kann erstellt werden.</li>
        </ul>
        <p><strong>Welche der folgenden Arten eines Reviews wird am ehesten verwendet?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Informelles Review", correct: false },
            { text: "Walkthrough", correct: true },
            { text: "Technisches Review", correct: false },
            { text: "Inspektion", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen ist KEIN Faktor, der zu einem erfolgreichen Review beiträgt?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Die Teilnehmer sollten sich ausreichend Zeit für das Review nehmen.", correct: false },
            { text: "Eine Aufteilung großer Arbeitsprodukte in kleine Teile wird empfohlen, damit die Reviewer (Gutachter) nicht die Konzentration verlieren.", correct: false },
            { text: "Die Festlegung klarer Ziele und messbarer Endekriterien für das Review.", correct: false },
            { text: "Die persönliche Mitwirkung des Managements in der Kommunikation der Befunde.", correct: true }
        ]
    },
    {
        question: `
        <p>Welches der folgenden Punkte ist ein Merkmal erfahrungsbasierter Testverfahren?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Testfälle werden auf der Grundlage detaillierter Entwurfsinformationen erstellt.", correct: false },
            { text: "Zur Messung des Überdeckungsgrads werden die Anzahl der im Test geprüften Schnittstellen verwendet.", correct: false },
            { text: "Die Verfahren beruhen in hohem Maße auf den Kenntnissen des Testers über die Software und die Geschäftsdomäne.", correct: true },
            { text: "Die Testfälle werden verwendet, um Abweichungen von den Anforderungen zu identifizieren.", correct: false }
        ]
    },
    {
        question: `
        <p>Sie testen die Software für eine unbeaufsichtigte amerikanische Zapfsäule. Nachdem die Zapfpistole abgehoben und die gewünschte Kraftstoffsorte ausgewählt wurde, gibt der Kunde die gewünschte Kraftstoffmenge in Gallonen über ein Tastenfeld ein. Das Tastenfeld erlaubt nur die Eingabe von Ziffern. Pro Zapfvorgang kann zwischen 0,1 und 50,0 Gallonen getankt werden.</p>
        <p><strong>Welche der folgenden Antworten repräsentiert eine minimale Menge von Eingabewerten, die alle gültigen und ungültigen Äquivalenzklassen für die Kraftstoffmenge überdeckt?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "0,0; 20,0; 60,0", correct: true },
            { text: "0,0; 0,1; 50,0", correct: false },
            { text: "0,0; 0,1; 50,0; 70,0", correct: false },
            { text: "-0,1; 0,0; 0,1; 49,9; 50,0; 50,1", correct: false }
        ]
    },
    {
        question: `
        <p>Sie testen ein E-Commerce-System, das Lebensmittel wie Gewürze, Mehl und andere Artikel in großen Mengen verkauft. Die Einheiten, in denen die Artikel verkauft werden, sind entweder Gramm oder Kilogramm. Unabhängig von den Einheiten ist die kleinste gültige Bestellmenge 0,5 Einheiten (z. B. ein halbes Gramm Kardamomkapseln) und die größte gültige Bestellmenge 25,0 Einheiten (z. B. 25 Kilogramm Zucker). Die Genauigkeit der Bestellmenge beträgt 0,1 Einheiten.</p>
        <p><strong>Welche der folgenden Eingabewerte decken nur die Grenzwerte mit 2-Wert-Grenzwertanalyse für die Bestellmenge ab?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "0,3; 24,9; 25,2", correct: false },
            { text: "0,4; 0,5; 0,6; 24,9;25,0; 25,1", correct: false },
            { text: "0,4; 0,5; 25,0; 25,1", correct: true },
            { text: "0,5; 0,6; 24,9; 25,0", correct: false }
        ]
    },
    {
        question: `
        <p>Neu eingestellte Mitarbeitende einer Firma können individuelle Ziele mit ihren Vorgesetzten vereinbaren, an deren Erreichung die Auszahlung eine Prämie gekoppelt ist. Diese Prämie wird ihnen aber erst ausgezahlt, wenn sie länger als ein Jahr im Unternehmen beschäftigt sind.</p>
        <p>Dieser Sachverhalt lässt sich in einer Entscheidungstabelle darstellen:</p>
        <table border="1" cellpadding="5" cellspacing="0">
            <tr>
                <th>Testfall-ID</th>
                <th>T1</th>
                <th>T2</th>
                <th>T3</th>
                <th>T4</th>
                <th>T5</th>
            </tr>
            <tr>
                <td>Bedingung1</td>
                <td colspan="5">Beschäftigung länger als ein Jahr?</td>
            </tr>
            <tr>
                <td></td>
                <td>„J“</td>
                <td>„N“</td>
                <td>„N“</td>
                <td>„J“</td>
                <td>„N“</td>
            </tr>
            <tr>
                <td>Bedingung2</td>
                <td>„N“</td>
                <td>„N“</td>
                <td>„J“</td>
                <td>„J“</td>
                <td>„J“</td>
            </tr>
            <tr>
                <td>Bedingung3</td>
                <td>„N“</td>
                <td>„N“</td>
                <td>„J“</td>
                <td>„J“</td>
                <td>„N“</td>
            </tr>
            <tr>
                <td>Aktion</td>
                <td colspan="5">Auszahlung der Prämie?</td>
            </tr>
            <tr>
                <td></td>
                <td>„N“</td>
                <td>„N“</td>
                <td>„N“</td>
                <td>„J“</td>
                <td>„N“</td>
            </tr>
        </table>
        <p><strong>Welcher der folgenden Testfälle beschreibt eine in der Praxis gültige, durchführbare Situation und fehlt in der oben aufgeführten Entscheidungstabelle?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Bedingung1 = „J“, Bedingung2 = „N“, Bedingung3 = „J“, Aktion = „N“", correct: false },
            { text: "Bedingung1 = „J“, Bedingung2 = „J“, Bedingung3 = „N“, Aktion = „J“", correct: false },
            { text: "Bedingung1 = „N“, Bedingung2 = „N“, Bedingung3 = „J“, Aktion = „N“", correct: false },
            { text: "Bedingung1 = „J“, Bedingung2 = „J“, Bedingung3 = „N“, Aktion = „N“", correct: true }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen zum Zustandsübergangsdiagramm und der dargestellten Tabelle von Testfällen ist WAHR?</p>
        <img src="diagram.png" alt="Zustandsübergangsdiagramm" />
        <table border="1" cellpadding="5">
            <tr>
                <th>Testfall</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
            </tr>
            <tr>
                <td>Startzustand</td>
                <td>S1</td>
                <td>S2</td>
                <td>S2</td>
                <td>S3</td>
                <td>S3</td>
            </tr>
            <tr>
                <td>Eingabe</td>
                <td>Power On</td>
                <td>Power Off</td>
                <td>RC On</td>
                <td>RC Off</td>
                <td>Power Off</td>
            </tr>
            <tr>
                <td>Endzustand</td>
                <td>S2</td>
                <td>S1</td>
                <td>S3</td>
                <td>S2</td>
                <td>S1</td>
            </tr>
        </table>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Die Testfälle führen alle Übergänge im Zustandsübergangsdiagramm aus, damit wird 100% Überdeckung aller Übergänge erreicht.", correct: false },
            { text: "Die Testfälle führen alle gültigen Übergänge im Zustandsübergangsdiagramm aus. Damit wird 100% 0-Switch-Überdeckung erreicht.", correct: true },
            { text: "Die Testfälle führen nur einige der gültigen Übergänge im Zustandsübergangsdiagramm aus. Damit liegt die 0-Switch-Überdeckung unter 100%.", correct: false },
            { text: "Testfall 2 ist für 100% 0-Switch-Überdeckung nicht erforderlich, da Zustand S1 bereits durch Testfall 5 abgedeckt wurde.", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen ist eine Beschreibung für Anweisungsüberdeckung?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Es handelt sich um eine Metrik zur Berechnung und Messung des prozentualen Anteils der ausgeführten Testfälle.", correct: false },
            { text: "Es handelt sich um eine Metrik, die den prozentualen Anteil der bereits durch Testfälle ausgeführten Anweisungen im Code angibt.", correct: true },
            { text: "Es handelt sich um eine Metrik zur Messung der Anzahl der durch Testfälle ausgeführten Anweisungen im Code, die keine Fehlerwirkung aufgedeckt haben.", correct: false },
            { text: "Es handelt sich um eine Metrik, die eine wahr/falsch-Bestätigung gibt, ob alle Anweisungen durch ausgeführte Testfälle abgedeckt sind.", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen trifft NICHT auf White-Box-Test zu?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "White-Box-Test ist ein Test, der auf der Analyse der internen Struktur einer Komponente oder eines Systems basiert.", correct: false },
            { text: "White-Box-Überdeckungsmetriken können helfen, zusätzliche Tests zu identifizieren, um die Codeüberdeckung zu erhöhen.", correct: false },
            { text: "White-Box-Testverfahren können ergänzend zu den Black-Box-Testverfahren eingesetzt werden, um das Vertrauen in den Code zu stärken.", correct: false },
            { text: "White-Box-Tests können helfen, nicht implementierte Anforderungen zu identifizieren.", correct: true }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen beschreibt AM BESTEN das Konzept der intuitiven Testfallermittlung?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Bei der intuitiven Testfallermittlung nutzen Sie Ihr Wissen über und Ihre Erfahrung mit in der Vergangenheit gefundenen Fehlerzuständen und -wirkungen und typischen Fehlhandlungen von Entwicklern.", correct: true },
            { text: "Bei der intuitiven Testfallermittlung werden Ihre persönlichen Erfahrungen mit der Entwicklung und den Fehlhandlungen, die Sie als Entwickler gemacht haben, genutzt.", correct: false },
            { text: "Bei der intuitiven Testfallermittlung müssen Sie sich vorstellen, dass Sie der Benutzer des Testobjekts sind und Fehlerwirkungen ertragen, die der Benutzer bei der Interaktion mit dem Testobjekt machen könnte.", correct: false },
            { text: "Bei der intuitiven Testfallermittlung müssen Sie die Entwicklungsaufgabe schnell selbst durchführen, um die Fehlerzustände und -wirkungen zu erkennen, die ein Entwickler machen könnte.", correct: false }
        ]
    },
    {
        question: `
        <p>In Ihrem Projekt hat sich die Freigabe einer brandneuen Anwendung verzögert und die Testdurchführung hat spät begonnen, aber Sie verfügen über sehr detailliertes Fachwissen und gute analytische Fähigkeiten. Die vollständige Anforderungsspezifikation wurde noch nicht an Sie weitergegeben und die Geschäftsleitung bittet um die Vorlage erster Testergebnisse.</p>
        <p><strong>Welches Testverfahren ist in dieser Situation AM BESTEN geeignet?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Checklistenbasiertes Testen", correct: false },
            { text: "Intuitive Testfallermittlung", correct: false },
            { text: "Exploratives Testen", correct: true },
            { text: "Anweisungstest", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aktivitäten beschreibt AM BESTEN die Art und Weise, wie Abnahmekriterien für eine User-Story formuliert werden können?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Durchführung von Retrospektiven zur Ermittlung der tatsächlichen Bedürfnisse der Stakeholder in Bezug auf eine bestimmte User-Story.", correct: false },
            { text: "Verwendung des Formats 'gegeben/wenn/dann' zur Beschreibung einer beispielhaften Testbedingung im Zusammenhang mit einer bestimmten User-Story.", correct: true },
            { text: "Mündliche Kommunikation, um das Risiko zu verringern, dass die Abnahmekriterien von anderen missverstanden werden.", correct: false },
            { text: "Dokumentieren von Risiken im Zusammenhang mit einer bestimmten User-Story in einem Testkonzept, um das risikobasierte Testen dieser User-Story zu erleichtern.", correct: false }
        ]
    },
    {
        question: `
        <p>Ihr Team verfolgt den Ansatz der abnahmetestgetriebenen Entwicklung (ATDD) und analysiert die folgende User-Story, um Testfälle zu erstellen.</p>
        <p>Als registrierter Kunde möchte ich meine bisherigen Bestellungen auf der Website des Unternehmens einsehen können, um einen Überblick über meine Einkäufe zu behalten.</p>
        <p>Ihr Team ermittelt die folgende Liste von Testfällen. Welcher der Testfälle ist für diese User-Story NICHT relevant?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { 
                text: `
                <p><strong>Eingabe:</strong> Der Kunde loggt sich in sein Konto auf der Website ein und klickt auf die Schaltfläche "Bestellhistorie anzeigen".</p>
                <p><strong>Erwartete Ausgabe:</strong> Das System zeigt eine Liste aller früheren Bestellungen des Kunden an, einschließlich Datum, Bestellnummer und Gesamtkosten.</p>`, 
                correct: false 
            },
            { 
                text: `
                <p><strong>Eingabe:</strong> Der eingeloggte Kunde klickt in der Liste seiner Bestellungen auf eine Bestellung.</p>
                <p><strong>Erwartete Ausgabe:</strong> Das System zeigt die einzelnen gekauften Artikel mit Preis und Menge an.</p>`, 
                correct: false 
            },
            { 
                text: `
                <p><strong>Eingabe:</strong> Der eingeloggte Kunde klickt auf die Schaltfläche "Aufsteigend sortieren" auf dem Bildschirm mit der Bestellhistorie.</p>
                <p><strong>Erwartete Ausgabe:</strong> Das System zeigt die Bestellhistorie aufsteigend sortiert nach Bestellnummer an.</p>`, 
                correct: false 
            },
            { 
                text: `
                <p><strong>Eingabe:</strong> Ein neu registrierter Kunde loggt sich ein und gibt eine erste Bestellung ein.</p>
                <p><strong>Erwartete Ausgabe:</strong> Das System akzeptiert die Bestellung und legt die zugehörigen Daten ab.</p>`, 
                correct: true 
            }
        ]
    },
    {
        question: `
        <p>Wie schaffen Tester einen Mehrwert für die Iterations-Planung?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Die Tester bestimmen die Priorität der zu entwickelnden User-Storys.", correct: false },
            { text: "Die Tester konzentrieren sich nur auf die Verfeinerung der funktionalen Aspekte des zu prüfenden Systems.", correct: false },
            { text: "Die Tester beteiligen sich an der Risikoanalyse und bestimmen die Testbarkeit von User-Storys.", correct: true },
            { text: "Die Tester ermöglichen die Freigabe qualitativ hochwertiger Software durch frühzeitigen Testentwurf während der Releaseplanung.", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Optionen sind Endekriterien für den Test eines Systems?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Testumgebung ist einsatzbereit", correct: false },
            { text: "Anmeldung am Testobjekt durch den Tester ist möglich", correct: false },
            { text: "Erwartete Fehlerdichte ist erreicht und Fehlerzustände sind berichtet worden", correct: true },
            { text: "Anforderungen sind in das Format GIVEN/WHEN/THEN übersetzt worden", correct: false }
        ]
    },
    {
        question: `
        <p>Ihr Team verwendet das Drei-Punkt-Schätzungsverfahren, um den Testaufwand für eine neue, risikoreiche Funktion zu schätzen. Es wurden die folgenden Schätzungen vorgenommen:</p>
        <ul>
            <li>optimistischste Schätzung: 2 Personenstunden</li>
            <li>wahrscheinlichste Schätzung: 11 Personenstunden</li>
            <li>pessimistischste Schätzung: 14 Personenstunden</li>
        </ul>
        <p><strong>Wie lautet die endgültige Schätzung?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "9 Personenstunden", correct: false },
            { text: "10 Personenstunden", correct: true },
            { text: "11 Personenstunden", correct: false },
            { text: "14 Personenstunden", correct: false }
        ]
    },
    {
        question: `
        <p>Sie testen eine mobile Applikation, die es Benutzern ermöglicht, ein nahegelegenes Restaurant zu finden, das die gewünschte Art des Essens anbietet. Gegeben ist die folgende Liste von Testfällen, Prioritäten (eine kleinere Zahl bedeutet eine höhere Priorität) und Abhängigkeiten:</p>
        <table border="1" cellpadding="5">
            <tr>
                <th>Testfall-ID</th>
                <th>Abgedeckte Testbedingung</th>
                <th>Priorität</th>
                <th>logisch abhängig von</th>
            </tr>
            <tr>
                <td>TF 001</td>
                <td>Art des Essens auswählen</td>
                <td>3</td>
                <td>keinem</td>
            </tr>
            <tr>
                <td>TF 002</td>
                <td>Restaurant auswählen</td>
                <td>2</td>
                <td>TF 001</td>
            </tr>
            <tr>
                <td>TF 003</td>
                <td>Wegbeschreibung bekommen</td>
                <td>1</td>
                <td>TF 002</td>
            </tr>
            <tr>
                <td>TF 004</td>
                <td>Restaurant anrufen</td>
                <td>2</td>
                <td>TF 002</td>
            </tr>
            <tr>
                <td>TF 005</td>
                <td>Reservierung vornehmen</td>
                <td>3</td>
                <td>TF 002</td>
            </tr>
        </table>
        <p><strong>Welcher der folgenden Testfälle soll als dritter ausgeführt werden?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "TF 003", correct: true },
            { text: "TF 005", correct: false },
            { text: "TF 002", correct: false },
            { text: "TF 001", correct: false }
        ]
    },
    {
        question: `
        <p>Betrachten Sie die folgenden Tests (1-4) und Testquadranten (A-D):</p>
        <ol>
            <li>Gebrauchstauglichkeitstest</li>
            <li>Komponententest</li>
            <li>Funktionaler Test</li>
            <li>Zuverlässigkeitstest</li>
        </ol>
        <p>
            A. Testquadrat Q1: Technologieorientierung, Unterstützung des Teams<br>
            B. Testquadrat Q2: Geschäftlich orientiert, Unterstützung des Teams<br>
            C. Testquadrat Q3: Geschäftlich orientiert, kritische Betrachtung des Produkts<br>
            D. Testquadrat Q4: Technologieorientierung, kritische Betrachtung des Produkts
        </p>
        <p><strong>Wie lassen sich die obigen Testkategorien den Testquadranten zuordnen?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "1C, 2A, 3B, 4D", correct: true },
            { text: "1D, 2A, 3C, 4B", correct: false },
            { text: "1C, 2B, 3D, 4A", correct: false },
            { text: "1D, 2B, 3C, 4A", correct: false }
        ]
    },
    {
        question: `
        <p>Im Rahmen einer Risikoanalyse wurde das folgende Risiko ermittelt und bewertet:</p>
        <ul>
            <li>Risiko: Zu lange Antwortzeit bei der Bereitstellung eines Suchergebnisses</li>
            <li>Eintrittswahrscheinlichkeit: mittel; Schadensausmaß: hoch</li>
            <li>Reaktion auf das Risiko:
                <ul>
                    <li>ein unabhängiges Testteam führt während der Systemtests einen Performanztest durch</li>
                    <li>eine ausgewählte Stichprobe von Endnutzern führt vor der Freigabe Alpha- und Beta-Tests durch</li>
                </ul>
            </li>
        </ul>
        <p><strong>Welche Art von Maßnahmen wurde oben vorgeschlagen, um auf das ermittelte Risiko zu reagieren?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Risikoakzeptanz", correct: false },
            { text: "Notfallplan", correct: false },
            { text: "Risikominderung", correct: true },
            { text: "Risikotransfer", correct: false }
        ]
    },
    {
        question: `
        <p>Welche der folgenden Aussagen zu dem Zweck und Inhalt von Testberichten ist zutreffend?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Testabschlussberichte werden in regelmäßigen Abständen erstellt und verteilt, um die Stakeholder hinsichtlich des Fortschrittes zu informieren.", correct: false },
            { text: "Ein Testfortschrittsbericht beinhaltet u. a. die Bewertung der Qualität des Produkts sowie etwaige Abweichungen vom Zeitplan.", correct: false },
            { text: "Ein Testabschlussbericht wird erstellt, wenn eine Teststufe abgeschlossen wurde und baut auf Testfortschrittsberichten und zusätzlichen Daten auf.", correct: true },
            { text: "Testfortschrittsberichte werden während des Testabschlusses erstellt, um die Erfüllung der Endekriterien belegen zu können.", correct: false }
        ]
    },
    {
        question: `
        <p>Sie müssen eines der automatisierten Testskripte aktualisieren, um es an eine neue Anforderung anzupassen.</p>
        <p><strong>Welcher Prozess sorgt dafür, dass Sie eine neue Version des Testskripts in der Versionsverwaltung erstellen?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Management der Verfolgbarkeit", correct: false },
            { text: "Wartungstest", correct: false },
            { text: "Konfigurationsmanagement", correct: true },
            { text: "Anforderungsmanagement", correct: false }
        ]
    },
    {
        question: `
        <p>Sie haben in Ihrer Rolle als Projektleiter den folgenden Fehlerbericht von den Entwicklern weitergeleitet bekommen, weil sie die beschriebene Anomalie nicht reproduzieren können.</p>
        <p><strong>Anwendung hängt sich auf</strong></p>
        <p><strong>ID 713-20230401 2022-Mai-03 – John Doe – Abgelehnt</strong></p>
        <p>Die Anwendung hängt sich nach der Eingabe von "Testeingabe: $ä" im Feld Name auf dem Bildschirm zur Erstellung eines neuen Benutzers auf. Ich habe versucht, mich abzumelden und mit dem Konto test_admin01 anzumelden, das gleiche Problem. Mit anderen Testadministratorkonten versucht, dasselbe Problem. Keine Fehlermeldung erhalten; das Protokoll (siehe Anhang) enthält eine fatale Fehlermeldung. Basierend auf dem Testfall TC-1305 sollte die Anwendung die bereitgestellten Eingaben akzeptieren und den Benutzer erstellen. Bitte beheben Sie dieses Problem mit hoher Priorität, da diese Funktion mit REQ-0012 zusammenhängt, die eine wichtige neue fachliche Anforderung ist.</p>
        <p><strong>Welche wichtigen Informationen, die für die Entwickler nützlich gewesen wären, fehlen in diesem Fehlerbericht?</strong></p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Erwartetes Ergebnis und tatsächliches Ergebnis", correct: false },
            { text: "Referenzen und Fehlerstatus", correct: false },
            { text: "Testumgebung und Testobjekt (inkl. Version)", correct: true },
            { text: "Priorität und Schweregrad", correct: false }
        ]
    },
    {
        question: `
        <p>Welche Testaktivitäten unterstützt ein Werkzeug zur Erstellung von Testdaten?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Testüberwachung und -steuerung", correct: false },
            { text: "Testanalyse und Testentwurf", correct: false },
            { text: "Testentwurf und -realisierung", correct: true },
            { text: "Testabschluss", correct: false }
        ]
    },
    {
        question: `
        <p>Welcher Punkt ist ein mögliches Risiko bei der Testautomatisierung?</p>
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        `,
        answers: [
            { text: "Es kann zu unbekannten Nebenwirkungen im operativen Betrieb kommen", correct: false },
            { text: "Unrealistische Erwartungen hinsichtlich Funktionalität eines Werkzeugs", correct: true },
            { text: "Testwerkzeuge sind möglicherweise nicht zuverlässig genug", correct: false },
            { text: "Es kann die verfügbare Zeit für manuelle Tests auf Dauer reduzieren", correct: false }
        ]
    }
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
    document.getElementById('end-btn').style.display = 'none';
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

document.getElementById('end-btn').addEventListener('click', function() {
    saveUserAnswer(); // Salvăm răspunsul curent
    finishQuiz(); // Finalizăm quiz-ul
});

// Inițializăm quiz-ul
startTimer(); // Pornim timer-ul
showQuestion(); // Afișăm prima întrebare