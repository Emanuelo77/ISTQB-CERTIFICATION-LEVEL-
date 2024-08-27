const questions = [
    {
        question: `
        <p>Welche der folgenden Aussagen beschreibt ein erreichbares Testziel?</p>
        
        `,
        answers: [
            { text: "Nachweis, dass da zu prüfende System keine Fehlerzustände mehr hat", correct: false },
            { text: "Nachweis, dass es nach der produktiven Inbetriebnahme des Systems keine Fehlerwirkungen geben wird", correct: false },
            { text: "Verringerung der Risikostufe des Testobjekts und Aufbau von Vertrauen in das Qualitätsniveau", correct: true },
            { text: "Überprüfung, dass alle Kombinationen von Eingabewerten getestet wurden", correct: false }
        ]
    },//1
    {
        question: `
        <p>Was ist der Hauptunterschied zwischen Testen und Debuggen?</p>
        
        `,
        answers: [
            { text: "Testen ist der Prozess der Fehlersuche, während Debugging der Prozess der Fehlerbehebung ist.", correct: true },
            { text: "Beim Testen werden Anforderungen überprüft, während beim Debugging der Entwurf überprüft wird.", correct: false },
            { text: "Testen ist der Prozess des Ausführens von Software, während das Debugging der Prozess der Analyse der Software ist.", correct: false },
            { text: "Testen ist der Prozess der Fehlervermeidung, während das Debugging der Prozess der Fehlerbeseitigung ist.", correct: false }
        ]
    },//2
    {
        question: `
        <p>Sie sind Mitglied eines Teams, das ein neues System testet. Ihnen ist aufgefallen, dass seit mehreren Iterationen keine Änderungen an den bestehenden Regressionstestfällen vorgenommen und keine neuen Fehler durch einen Regressionstest aufgedeckt wurden. Ihr Vorgesetzter ist zufrieden, aber Sie sind es nicht.</p>
        <p><strong>Welcher Grundsatz des Testens erklärt Ihre Skepsis in dieser Situation am besten?</strong></p>
        
        `,
        answers: [
            { text: "Alte Tests verlieren an Wirksamkeit", correct: true },
            { text: "Trugschluss: „Keine Fehler” bedeutet ein brauchbares System", correct: false },
            { text: "Häufung von Fehlerzuständen", correct: false },
            { text: "Vollständiges Testen ist nicht möglich", correct: false }
        ]
    },//3
    {
        question: `
        <p>Sie arbeiten in einem Team, das eine mobile Anwendung für Essensbestellungen entwickelt. In der aktuellen Iteration hat das Team beschlossen, die Zahlungsfunktionalität zu implementieren.</p>
        <p><strong>Welche der folgenden Aktivitäten gehören zur Testanalyse?</strong></p>
      
        `,
        answers: [
            { text: "Die Aufwandsschätzung für den Test der Integration der mobilen Anwendung mit dem Zahlungsdienst durchführen.", correct: false },
            { text: "Die Entscheidung ob getestet wird, inwieweit Zahlungen zwischen mehreren Nutzern aufgeteilt werden können.", correct: true },
            { text: "Mittels Grenzwertanalyse werden die Testdaten für die Testfälle abgeleitet, die die korrekte Zahlungsabwicklung für den zulässigen minimalen Betrag überprüfen.", correct: false },
            { text: "Analyse der Abweichung zwischen dem tatsächlichen und dem erwarteten Ergebnis nach der Ausführung eines Testfalls.", correct: false }
        ]
    },//4
    {
        question: `
        <p>Welche der folgenden Aussagen beschreibt AM BESTEN, wie ein Mehrwert durch Etablierung und Aufrechterhaltung der Verfolgbarkeit zwischen Testbasis und den Testmitteln erzielt wird?</p>
       
        `,
        answers: [
            { text: "Wartungstests können basierend auf Änderungen der ursprünglichen Anforderungen vollständig automatisiert werden.", correct: false },
            { text: "Es kann effizienter bestimmt werden, ob die angestrebte Überdeckung auch tatsächlich erreicht wurde.", correct: true },
            { text: "Die Testmanagementrolle kann feststellen, welche Tester die Fehler mit dem höchsten Schweregrad gefunden haben.", correct: false },
            { text: "Codebereiche, die möglicherweise durch Seiteneffekte einer Änderung beeinflusst werden, können durch Regressionstests gezielt überprüft werden.", correct: false }
        ]
    },//5
    {
        question: `
        <p>Welche der folgenden Aussagen vergleicht am BESTEN die verschiedenen Rollen beim Testen?</p>
       
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
       
        `,
        answers: [
            { text: "In der ATDD werden Abnahmekriterien typischerweise basierend auf dem Format \"GIVEN/WHEN/THEN\" erstellt.", correct: false },
            { text: "Bei ATDD werden zunächst die Testfälle entwickelt und dann die Software inkrementell gegen die Testfälle und definierten Abnahmekriterien implementiert.", correct: false },
            { text: "Bei ATDD werden Tests aus Abnahmekriterien als Teil des Systementwurfs abgeleitet.", correct: true },
            { text: "Bei ATDD basieren die Tests auf dem gewünschten Verhalten der Software, was es für die Teammitglieder einfacher macht, die Tests und die definierten Abnahmekriterien zu verstehen.", correct: false }
        ]
    },
    //10
    {
        question: `
        <p>Welche der folgenden Aussagen ist KEIN Beispiel für den Shift-left-Ansatz?</p>
        
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
        
        `,
        answers: [
            { text: "Die Bewertung und Behebung der durch eine statische Analyse aufgedeckten Anomalien kann erheblichen Zeit- und Ressourcenaufwand erfordern.", correct: true },
            { text: "Die Behebung von Fehlerzuständen, die bei statischen Tests gefunden werden, ist in der Regel wesentlich kostengünstiger als die Behebung von Fehlern, die bei dynamischen Tests gefunden werden.", correct: false },
            { text: "Das Finden von Programmierfehlern, die bei dynamischen Tests möglicherweise nicht gefunden werden.", correct: false },
            { text: "Das Aufdecken von Lücken und Unstimmigkeiten in den Anforderungen.", correct: false }
        ]
    },//15
    {
        question: `
        <p>Welcher der folgenden Punkte ist ein Vorteil von frühem und häufigem Feedback durch Stakeholder?</p>
        
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
       
        `,
        answers: [
            { text: "0,0; 20,0; 60,0", correct: true },
            { text: "0,0; 0,1; 50,0", correct: false },
            { text: "0,0; 0,1; 50,0; 70,0", correct: false },
            { text: "-0,1; 0,0; 0,1; 49,9; 50,0; 50,1", correct: false }
        ]
    },//20
    {
        question: `
        <p>Sie testen ein E-Commerce-System, das Lebensmittel wie Gewürze, Mehl und andere Artikel in großen Mengen verkauft. Die Einheiten, in denen die Artikel verkauft werden, sind entweder Gramm oder Kilogramm. Unabhängig von den Einheiten ist die kleinste gültige Bestellmenge 0,5 Einheiten (z. B. ein halbes Gramm Kardamomkapseln) und die größte gültige Bestellmenge 25,0 Einheiten (z. B. 25 Kilogramm Zucker). Die Genauigkeit der Bestellmenge beträgt 0,1 Einheiten.</p>
        <p><strong>Welche der folgenden Eingabewerte decken nur die Grenzwerte mit 2-Wert-Grenzwertanalyse für die Bestellmenge ab?</strong></p>
        
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
        
        `,
        answers: [
            { text: "Risikoakzeptanz", correct: false },
            { text: "Notfallplan", correct: false },
            { text: "Risikominderung", correct: true },
            { text: "Risikotransfer", correct: false }
        ]
    },//35
    {
        question: `
        <p>Welche der folgenden Aussagen zu dem Zweck und Inhalt von Testberichten ist zutreffend?</p>
        
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
       
        `,
        answers: [
            { text: "Es kann zu unbekannten Nebenwirkungen im operativen Betrieb kommen", correct: false },
            { text: "Unrealistische Erwartungen hinsichtlich Funktionalität eines Werkzeugs", correct: true },
            { text: "Testwerkzeuge sind möglicherweise nicht zuverlässig genug", correct: false },
            { text: "Es kann die verfügbare Zeit für manuelle Tests auf Dauer reduzieren", correct: false }
        ]
    },//40
    {
        question: `
        <p>Welcher der folgenden Punkte kennzeichnet einen auf Metriken basierenden Ansatz für die Testaufwandsschätzung?</p>
       
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
        
        `,
        answers: [
            { text: "Eine Art des Testens, bei der die Testsuiten auf realen oder virtuellen Geräten ausgeführt werden.", correct: false },
            { text: "Ein Black-Box-Testverfahren, bei dem die Testfälle so entworfen werden, dass Paare von Parameter-Wertepaaren ausgeführt werden.", correct: false },
            { text: "Testen durch Senden von Kommandos an das zu testende System über die direkte Nutzung der Programmierschnittstelle der Applikation.", correct: false },
            { text: "Ein erfahrungsbasiertes Testverfahren, bei dem der Tester häufig eine Liste von Fragen verwendet, gegen welche eine Anforderung verifiziert werden muss.", correct: true }
        ]
    },//45
    {
        question: `
        <p>Ein Blumengeschäft kategorisiert die Blumen nach der Anzahl der benötigten Sonnenstunden pro Tag (unter 2 Stunden, 2 - 4 Stunden, über 4 Stunden) und der durchschnittlichen Intensität des Sonnenscheins (sehr niedrig, niedrig, mittel, hoch, sehr hoch).</p>
        <p>Die folgenden Testfälle wurden dazu aufgestellt:</p>
        <p>T1: 1,5 Sonnenstunden bei mittlerer Intensität.</p>
        <p>T2: 4,5 Sonnenstunden bei sehr hoher Intensität.</p>
        <p>T3: 1 Sonnenstunde bei sehr niedriger Intensität.</p>
        <p>Wie viele weitere Testfälle müssen mindestens noch erzeugt werden, um eine vollständige Überdeckung aller gültigen Äquivalenzklassen zu gewährleisten?</p>
       
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
         `,
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
       `,
        answers: [
            { text: "Verfügbarkeit einer Testumgebung.", correct: false },
            { text: "Verfügbarkeit von Testelementen, die die Endekriterien für vorangegangene Teststufen erfüllt haben.", correct: false },
            { text: "Verfügbarkeit von Testdaten und anderen notwendigen Ressourcen.", correct: false },
            { text: "Verfügbarkeit von Fehlerwirkungen und Fehlerzuständen.", correct: true }
        ]
    },//56
    {
        number: 17, // Numărul întrebării
        question: `
        <p>Welche der folgenden Optionen sind Rollen in einem formalen Review?</p>
        `,
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
            `,

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
           `,
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
            `,
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
            `,
        answers: [
            { text: "Die intuitive Testfallerermittlung ist ein Testansatz, bei dem das Auftreten von Fehlhandlungen, Fehlerzuständen und Fehlerwirkungen aufgrund des Wissens des Testers vermutet wird.", correct: true },
            { text: "Die intuitive Testfallerermittlung ist ein Testansatz, bei dem die Tests dynamisch entworfen und ausgeführt werden, basierend auf dem Wissen, der Erkundung des Testelements und den Ergebnissen früherer Tests.", correct: false },
            { text: "Die intuitive Testfallerermittlung ist ein Testansatz, bei dem das Auftreten von Fehlhandlungen, Fehlerzuständen und Fehlerwirkungen aufgrund des Wissens des Entwicklers vermutet wird.", correct: false },
            { text: "Die intuitive Testfallerermittlung ist ein Testansatz, bei dem Tester die Tests mit dem Ziel entwerfen, realisieren und ausführen, alle Testbedingungen aus einer Checkliste abzudecken.", correct: false }
        ]
    },//60
    {
        question: `
            <p>"Beim Anweisungstest wird mit einem Testfall 50% Überdeckung erreicht, wenn der Quellcode lediglich aus einer einzigen IF-Anweisung besteht."</p>
            <p>Welche der folgenden Optionen trifft auf die obige Aussage am besten zu?</p>
           `,
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
           `,
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
            `,
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
            `,
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
            
        `,
        "answers": [
            { "text": "15000€, 15001€, 20000€, 20001€, 25000€", "correct": false },
            { "text": "14999€, 15000€, 15001€, 19999€, 20000€", "correct": false },
            { "text": "15000€, 15001€, 20000€, 25000€, 25001€", "correct": false },
            { "text": "14999€, 15000€, 20000€, 24999€, 25000€", "correct": true }
        ]
    },//70
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
            
        `,
       "answers": [
    { "text": "Hoher Schulungsaufwand des unabhängigen Testteams.", "correct": false },
    { "text": "Geringes Finden von Fehlern aufgrund fehlender Informationen über das Testobjekt.", "correct": false },
    { "text": "Mangelnde Zusammenarbeit und Kommunikationsprobleme zwischen Testern und dem Entwicklungsteam.", "correct": true },
    { "text": "Übermäßige Abhängigkeit vom Entwicklungsteam.", "correct": false }
]
    },
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
// 81...
{
    question: `
    <p>Von welcher Rolle in einem formalen Review hängt der Erfolg des Reviews maßgeblich ab?</p>
   
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
   
    `,
    answers: [
        { text: "Das Designteam des Unternehmens sitzt im Ausland und hat das Format der angezeigten Zeit falsch entworfen.", correct: false },
        { text: "Nicht benötigter Code, der standardmäßig um Mitternacht einen Alarm auslöst, wurde in die Software des Weckers mit aufgenommen.", correct: true },
        { text: "Der Projektmanager war mit den Anforderungen der Stakeholder nicht vertraut und hat diese falsch an den Entwickler kommuniziert.", correct: false },
        { text: "Der Tester des Radioweckers war nicht im Softwaretesten geschult und hat daher einen signifikanten Fehler übersehen.", correct: false }
    ]
},
// 91..
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
    
    `,
    answers: [
        { text: "Lasttest", correct: false },
        { text: "Smoke-Test", correct: true },
        { text: "Usability-Test", correct: false },
        { text: "Komponententest", correct: false }
    ]
},//100..

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
      },//110
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
    },//8
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
    },//55
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
    },
    {
        question: `
            <p>Was ist eine wichtige Aufgabe während der Aktivität "Kommunikation und Analyse" im Reviewprozess?</p>
            
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
            
        `,
        answers: [
            { text: "Die Aussage ist falsch. Bei einem einzelnen Testfall ist der Entscheidungs¬ausgang der IF-Anweisung \"wahr\" und damit mindestens 50% abgedeckt.", correct: false },
            { text: "Die Aussage ist wahr. Bei einem einzelnen Testfall ist der Entscheidungs¬ausgang der IF-Anweisung entweder \"wahr\" oder \"falsch\".", correct: true },
            { text: "Die Aussage ist wahr. Bei einem einzelnen Testfall ist der Entscheidungs¬ausgang der IF-Anweisung \"wahr\" und damit mindestens 50% abgedeckt.", correct: false },
            { text: "Die Aussage ist falsch. Bei einem einzelnen Testfall kann nur eine Zweigüber¬deckung von 25% garantiert werden.", correct: false }
        ]
    },//888
    {
        question: `
            <p>Welche Kompetenz ist besonders wichtig, um Fehlerzustände zu erkennen, insbesondere solche, die schwer zu finden sind?</p>
            
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
            
        `,
        answers: [
            { text: "Nicht-funktionale Tests", correct: false },
            { text: "Änderungsbezogenes Testen", correct: false },
            { text: "White-Box-Tests", correct: true },
            { text: "Funktionale Tests", correct: false }
        ]
    },//999
    {
        question: `
            <p>Ein Softwareentwicklungsprojektteam möchte die Testautomatisierung in ihrem Projekt verbessern und die Testpyramide einführen, um den Testaufwand effizienter zu verteilen und die Testqualität zu steigern.</p>
            <p>Was könnten in der Testpyramide-Modellstruktur mögliche Schichten darstellen (geordnet von der untersten zur obersten Schicht)?</p>
            
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
            
        `,
        answers: [
            { text: "12 Personentage", correct: true },
            { text: "16 Personentage", correct: false },
            { text: "14 Personentage", correct: false },
            { text: "10 Personentage", correct: false }
        ]
    },///1111
    {
        question: `
            <p>Warum ist es wichtig, dass die Testanalyse und der Testentwurf für eine bestimmte Teststufe bereits in der entsprechenden Entwicklungsphase des Softwareentwicklungslebenszyklus (SDLC) beginnen?</p>
           
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
            
        `,
        answers: [
            { text: "Um potenzielle Qualitätsprobleme frühzeitig zu kommunizieren und Missverständnisse über Anforderungen zu verhindern.", correct: true },
            { text: "Um die Kommunikation zwischen Testern und Entwicklern zu verbessern.", correct: false },
            { text: "Um sicherzustellen, dass das Entwicklungsteam unabhängig von den Stakeholdern arbeitet.", correct: false },
            { text: "Um das Entwicklungsteam zu kontrollieren und Schuldzuweisungen zu vermeiden.", correct: false }
        ]
    },///333
    {
        question: `
            <p>Gegeben sei folgendes Zustandsdiagramm für die Definition eines Stapels:</p>
            <img src="Diagram5.png" alt="Zustandsdiagramm für die Definition eines Stapels">
            <p>Welche der folgenden Zustandsübergangs-Sequenzen ergibt die höchste Überdeckung der Zustandsübergabe?</p>
           
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
                
            `,
            answers: [
                { text: "Typische Fehlerzustände wie Anforderungsfehler lassen sich am besten durch dynamische Tests erkennen, während Entwurfs- und Programmierfehler leichter durch statische Analysen gefunden werden können.", correct: false },
                { text: "Statische Tests helfen Fehlerzustände in Arbeitsergebnissen direkt zu finden, während dynamische Tests erst die Fehlwirkungen identifizieren, die durch Fehlerzustände beim Ausführen des Testobjekts entstehen.", correct: true },
                { text: "Statische und dynamische Tests schließen sich gegenseitig eher aus, da sie die gleichen Fehlerbilder aufdecken.", correct: false },
                { text: "Statische Tests konzentrieren sich in der Regel auf extern sichtbares Verhalten, während dynamische Tests typischerweise genutzt werden, um die Konsistenz und interne Qualität der Arbeitsergebnisse zu verbessern.", correct: false }
            ]
        },//000
        {
            question: `
                <p>Welche der folgenden Optionen beschreibt die Notwendigkeit des Testens?</p>
               
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
                
            `,
            answers: [
                { text: "Risikominderung durch Testen", correct: false },
                { text: "Notfallplan", correct: true },
                { text: "Risikoakzeptanz", correct: false },
                { text: "Risikotransfer", correct: false }
            ]
        }


];



const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const showAnswerButton = document.getElementById('show-answer-btn');
const resultMessageElement = document.getElementById('result-message');
const explanationElement = document.getElementById('explanation'); // Element pentru afișarea explicației

let currentQuestionIndex = 0;
const totalQuestions = questions.length;

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion(questions[currentQuestionIndex]);
    prevButton.disabled = true; // Dezactivează butonul "Vorherige Frage" la început
}

function showQuestion(question) {
    let questionHTML = 
        `<table>
            <tr>
                <td>Frage ${currentQuestionIndex + 1} von ${totalQuestions}</td>
            </tr>
        </table>
        ${question.question}
        <p><strong>Wählen Sie EINE Option! (1 aus 4)</strong></p>
        <table class="answer-options">
    `;

    question.answers.forEach((answer, index) => {
        questionHTML += 
            `<tr>
                <td>${String.fromCharCode(97 + index)})</td>
                <td>${answer.text}</td>
                <td><input type="radio" name="answer" value="${index}"></td>
            </tr>
        `;
    });

    questionHTML += `</table>`;
    questionContainer.innerHTML = questionHTML;

    // Clear any previous result message and explanation
    resultMessageElement.innerText = '';
    explanationElement.innerText = '';
}

// Add event listener for the show answer button
showAnswerButton.addEventListener('click', () => {
    const correctIndex = questions[currentQuestionIndex].answers.findIndex(answer => answer.correct);
    const correctLetter = String.fromCharCode(65 + correctIndex); // A, B, C, D
    resultMessageElement.innerText = `Richtige Antwort: ${correctLetter}`;
    resultMessageElement.style.color = "blue";

    // Afișează explicația pentru răspunsul corect
    let explanation = "";
    if (currentQuestionIndex === 0) {
        explanation = `Erklärung:\n
        Nachweis, dass das zu prüfende System keine Fehlerzustände mehr hat (Falsch): Es ist unrealistisch, ein System als vollständig fehlerfrei zu beweisen, da immer unbekannte Fehler existieren können.\n\n
        Nachweis, dass es nach der produktiven Inbetriebnahme des Systems keine Fehlerwirkungen geben wird (Falsch): Es ist unmöglich, sicherzustellen, dass nach der Inbetriebnahme keine Fehler auftreten, da unvorhersehbare Probleme entstehen können.\n\n
        Verringerung der Risikostufe des Testobjekts und Aufbau von Vertrauen in das Qualitätsniveau (Richtig): Dieses Ziel ist realistisch und erreichbar, da Tests darauf abzielen, das Risiko von Fehlern zu minimieren und Vertrauen in die Systemqualität zu schaffen.\n\n
        Überprüfung, dass alle Kombinationen von Eingabewerten getestet wurden (Falsch): Es ist in der Praxis nicht möglich, alle möglichen Eingabewerten zu testen, besonders bei komplexen Systemen.`;
    } else if (currentQuestionIndex === 1) {
        explanation = `Erklärung:\n
        Testen ist der Prozess der Fehlersuche, während Debugging der Prozess der Fehlerbehebung ist (Richtig): Testen identifiziert Fehler in der Software, während Debugging diese Fehler behebt.\n\n
        Beim Testen werden Anforderungen überprüft, während beim Debugging der Entwurf überprüft wird (Falsch): Dies beschreibt nicht genau die Unterscheidung zwischen Testen und Debuggen.\n\n
        Testen ist der Prozess des Ausführens von Software, während das Debugging der Prozess der Analyse der Software ist (Falsch): Obwohl Debugging oft eine Analyse der Software erfordert, beschreibt dies nicht den Hauptunterschied.\n\n
        Testen ist der Prozess der Fehlervermeidung, während das Debugging der Prozess der Fehlerbeseitigung ist (Falsch): Testen vermeidet keine Fehler, sondern findet sie.`;
    } else if (currentQuestionIndex === 2) {
        explanation = `Erklärung:\n
        Alte Tests verlieren an Wirksamkeit (Richtig): Wenn keine neuen Fehler gefunden werden, können die Tests veraltet sein und mögliche neue Fehler nicht erkennen.\n\n
        Trugschluss: „Keine Fehler” bedeutet ein brauchbares System (Falsch): Nur weil keine Fehler gefunden werden, heißt das nicht unbedingt, dass das System fehlerfrei ist oder den Anforderungen entspricht.\n\n
        Häufung von Fehlerzuständen (Falsch): Diese Antwort bezieht sich auf die Tendenz von Fehlern, sich in bestimmten Bereichen zu konzentrieren, aber erklärt nicht die Skepsis in dieser Situation.\n\n
        Vollständiges Testen ist nicht möglich (Falsch): Dies ist eine allgemeine Wahrheit, erklärt aber nicht die spezifische Skepsis in dieser Situation.`;
    } else if (currentQuestionIndex === 3) {
        explanation = `Erklärung:\n
        Die Entscheidung ob getestet wird, inwieweit Zahlungen zwischen mehreren Nutzern aufgeteilt werden können (Richtig): Diese Aktivität gehört zur Testanalyse, da sie sich auf die Festlegung der Testbedingungen und das Verständnis dessen, was getestet werden soll, konzentriert.\n\n
        Die Aufwandsschätzung für den Test der Integration der mobilen Anwendung mit dem Zahlungsdienst durchführen (Falsch): Dies gehört zur Testplanung, nicht zur Testanalyse.\n\n
        Mittels Grenzwertanalyse werden die Testdaten für die Testfälle abgeleitet, die die korrekte Zahlungsabwicklung für den zulässigen minimalen Betrag überprüfen (Falsch): Dies ist ein Schritt in der Testentwurfsphase, nicht in der Testanalyse.\n\n
        Analyse der Abweichung zwischen dem tatsächlichen und dem erwarteten Ergebnis nach der Ausführung eines Testfalls (Falsch): Diese Aktivität gehört zur Testdurchführung und nicht zur Testanalyse.`;
    } else if (currentQuestionIndex === 4) {
        explanation = `Erklärung:\n
        Es kann effizienter bestimmt werden, ob die angestrebte Überdeckung auch tatsächlich erreicht wurde (Richtig): Die Verfolgbarkeit zwischen Testbasis und Testmitteln stellt sicher, dass alle Anforderungen durch Tests abgedeckt sind und die Testabdeckung überwacht werden kann.\n\n
        Wartungstests können basierend auf Änderungen der ursprünglichen Anforderungen vollständig automatisiert werden (Falsch): Diese Aussage beschreibt eher die Vorteile von Testautomatisierung, nicht speziell die Verfolgbarkeit.\n\n
        Die Testmanagementrolle kann feststellen, welche Tester die Fehler mit dem höchsten Schweregrad gefunden haben (Falsch): Dies ist eine Testmanagementaktivität, hat aber nichts mit Verfolgbarkeit zu tun.\n\n
        Codebereiche, die möglicherweise durch Seiteneffekte einer Änderung beeinflusst werden, können durch Regressionstests gezielt überprüft werden (Falsch): Dies ist ein Vorteil von Regressionstests, aber nicht spezifisch für die Verfolgbarkeit.`;
    } else if (currentQuestionIndex === 5) {
        explanation = `Erklärung:\n
        Die Rolle des Testens führt die Aktivitäten der Testanalyse und des Testentwurfs aus, erstellt und führt Testfälle aus, die Testmanagementrolle koordiniert die Testressourcen und berichtet an die Stakeholder (Richtig): Diese Aussage beschreibt am besten die Unterschiede und Verantwortlichkeiten der beiden Rollen.\n\n
        Die Rolle des Testens führt Testfälle aus, die Testmanagementrolle plant und überwacht die Testaktivitäten und meldet die Abweichungen an alle Tester (Falsch): Diese Aussage vermischt Rollen und beschreibt nicht die Unterschiede.\n\n
        Die Rolle des Testens entscheidet die zu automatisierenden Tests und priorisiert Testfälle, die Testmanagementrolle analysiert Risiken und setzt Prioritäten für die Tests (Falsch): Die Verantwortlichkeiten der Rollen sind hier falsch zugeordnet.\n\n
        Die Rolle des Testens führt statische und dynamische Komponententests durch, die Testmanagementrolle führt Systemtests und Abnahmetests durch (Falsch): Diese Aussage beschreibt eher unterschiedliche Testarten als die Rollen.`;
    } else if (currentQuestionIndex === 6) {
        explanation = `Erklärung:\n
        Wenn Spezifikationen Mehrdeutigkeiten und Ungereimtheiten enthalten, treffen Entwickler Annahmen über ihre Interpretation, und ein unabhängiges Testteam kann nützlich sein, um diese Annahmen und die Interpretation der Entwickler zu hinterfragen (Richtig): Ein unabhängiges Testteam kann objektiv Probleme erkennen, die den Entwicklern aufgrund ihrer Nähe zum Projekt entgehen.\n\n
        Der Einsatz eines unabhängigen Testteams ermöglicht es der Projektleitung, dem Testteam die Verantwortung für die Qualität des Endprodukts zu übertragen (Falsch): Das Testteam trägt nicht die alleinige Verantwortung für die Qualität.\n\n
        Wenn man sich ein externes Testteam leisten kann, dann hat das den Vorteil, dass dieses externe Team nicht so leicht von den Bedenken des Projektmanagements und der Notwendigkeit, strikte Liefertermine einzuhalten, beeinflusst werden kann (Falsch): Diese Aussage beschreibt nicht wirklich den Hauptvorteil der Unabhängigkeit.\n\n
        Ein unabhängiges Testteam kann getrennt von den Entwicklern arbeiten, muss nicht durch Änderungen der Projektanforderungen abgelenkt werden und kann die Kommunikation mit den Entwicklern auf die Fehlerberichterstattung über das Fehlermanagementsystem beschränken (Falsch): Diese Aussage beschreibt eher eine Isolation, was nicht unbedingt ein Vorteil ist.`;
    } else if (currentQuestionIndex === 7) {
        explanation = `Erklärung:\n
        Tester helfen Fachbereichsvertretern bei der Erstellung geeigneter Abnahmetests (Richtig): Diese Zusammenarbeit ist ein zentrales Merkmal des Whole-Team-Ansatzes, bei dem alle Teammitglieder zur Qualität beitragen.\n\n
        Fachbereichsvertreter entscheiden gemeinsam mit der Projektleitung über die Ansätze zur Testautomatisierung (Falsch): Dies ist keine typische Aufgabe der Fachbereichsvertreter.\n\n
        Tester helfen Fachbereichsvertreter bei der Festlegung der Teststrategie (Falsch): Die Festlegung der Teststrategie ist in der Regel Aufgabe des Testmanagements.\n\n
        Die Beteiligung von Fachbereichsvertretern ist nicht Teil des Whole-Team-Ansatz (Falsch): Fachbereichsvertreter sind wichtige Stakeholder im Whole-Team-Ansatz.`;
    } else if (currentQuestionIndex === 8) {
        explanation = `Erklärung:\n
        Testen sollte frühzeitig im Entwicklungsprozess beginnen (Richtig): Dies ist eine bewährte Praxis, die sicherstellt, dass Fehler frühzeitig erkannt und behoben werden können, was Zeit und Kosten spart.\n\n
        Testen sollte erst nach Abschluss der Entwicklung durchgeführt werden (Falsch): Diese Praxis führt oft zu spät entdeckten Fehlern, die schwerwiegende Auswirkungen haben können.\n\n
        Testen sollte unter Federführung der Entwicklung durchgeführt werden (Falsch): Dies kann zu einem Mangel an Unabhängigkeit und einer möglichen Voreingenommenheit führen.\n\n
        Testen sollte in einer Entwicklungstestumgebung durchgeführt werden (Falsch): Tests sollten in einer Umgebung durchgeführt werden, die der Produktionsumgebung so nahe wie möglich kommt.`;
    } else if (currentQuestionIndex === 9) {
        explanation = `Erklärung:\n
        Bei ATDD werden Tests aus Abnahmekriterien als Teil des Systementwurfs abgeleitet (Richtig): Dies ist ein Kernprinzip der abnahmetestgetriebenen Entwicklung, bei der die Anforderungen durch Tests verifiziert werden.\n\n
        In der ATDD werden Abnahmekriterien typischerweise basierend auf dem Format "GIVEN/WHEN/THEN" erstellt (Falsch): Dies beschreibt eher das Format von Tests im Behavior-Driven Development (BDD).\n\n
        Bei ATDD werden zunächst die Testfälle entwickelt und dann die Software inkrementell gegen die Testfälle und definierten Abnahmekriterien implementiert (Falsch): Dies beschreibt eine Praxis im Test-Driven Development (TDD), nicht spezifisch für ATDD.\n\n
        Bei ATDD basieren die Tests auf dem gewünschten Verhalten der Software, was es für die Teammitglieder einfacher macht, die Tests und die definierten Abnahmekriterien zu verstehen (Falsch): Dies beschreibt das Ziel von BDD, nicht spezifisch ATDD.`;
    }
      else if (currentQuestionIndex === 10) {
    explanation = `Erklärung:\n
    Durchführung von nicht-funktionalen Tests, wenn möglich, beginnend auf der Ebene der Systemtests (Richtig): Der Shift-left-Ansatz konzentriert sich auf frühe Tests, und nicht-funktionale Tests werden in der Regel später im Testprozess durchgeführt.\n\n
    Überprüfung der Benutzeranforderungen, bevor sie von den Stakeholdern formell akzeptiert werden (Falsch): Dies ist ein Beispiel für den Shift-left-Ansatz, da Tests und Überprüfungen früh im Prozess durchgeführt werden.\n\n
    Erstellen von Komponententestfällen, bevor der zugehörige Code programmiert wird (Falsch): Auch dies ist ein Beispiel für den Shift-left-Ansatz, da Testfälle früh im Entwicklungszyklus erstellt werden.\n\n
    Ausführen des Performanztest einer Komponente während des Komponententests (Falsch): Dies ist ein Beispiel für einen frühen Test im Lebenszyklus, was dem Shift-left-Ansatz entspricht.`;
     } else if (currentQuestionIndex === 11) {
    explanation = `Erklärung:\n
    Die bei der Retrospektive festgestellten Prozessschwächen können während der Retrospektive analysiert werden und als Aufgabenliste für das Programm zur kontinuierlichen Prozessverbesserung des Unternehmens dienen (Richtig): Dies ist ein starkes Argument, da es auf die Verbesserung der Prozesse und die Nutzung von Retrospektiven zur kontinuierlichen Verbesserung abzielt.\n\n
    Retrospektiven sind heutzutage sehr beliebt und unsere Kunden würden es zu schätzen wissen, wenn wir sie in unsere Prozesse aufnehmen würden (Falsch): Popularität allein ist kein starkes Argument für den Nutzen einer Retrospektive.\n\n
    Die regelmäßige Durchführung von Retrospektiven spart dem Unternehmen Geld, da die Vertreter der Endnutzer kein unmittelbares Feedback über das Produkt geben (Falsch): Dies ist kein korrektes Argument, da es das eigentliche Ziel von Retrospektiven verfehlt.\n\n
    Retrospektiven ermöglichen es dem Team, sich gegenseitig zu loben und zu motivieren, was die Arbeitsmoral und die Produktivität erhöht (Falsch): Obwohl dies ein positiver Nebeneffekt ist, ist es nicht das Hauptziel von Retrospektiven.`;
  } else if (currentQuestionIndex === 12) {
    explanation = `Erklärung:\n
    1D, 2B, 3A, 4C (Richtig): Diese Kombination stimmt mit den gängigen Teststufen überein, bei denen Systemverhaltensfehler oft in Abnahmetests und Komponentenfehler in frühen Teststufen gefunden werden.\n\n
    1D, 2B, 3C, 4A (Falsch): Diese Kombination ordnet die Fehlerzustände nicht korrekt den Teststufen zu.\n\n
    1B, 2A, 3D, 4C (Falsch): Diese Kombination ist ebenfalls falsch, da sie die Fehlerzustände nicht den Teststufen gemäß der üblichen Praxis zuordnet.\n\n
    1C, 2A, 3B, 4D (Falsch): Diese Kombination verfehlt ebenfalls die korrekte Zuordnung der Fehlerzustände zu den Teststufen.`;
} else if (currentQuestionIndex === 13) {
    explanation = `Erklärung:\n
    Wartungstest (Richtig): Wartungstests beinhalten typischerweise Aktivitäten wie die Überprüfung der Datenmigration, um sicherzustellen, dass ein außer Betrieb genommenes System korrekt durch ein Nachfolgesystem ersetzt wird.\n\n
    Regressionstest (Falsch): Regressionstests konzentrieren sich darauf, sicherzustellen, dass bestehende Funktionalitäten nach Änderungen noch korrekt funktionieren.\n\n
    Komponententest (Falsch): Komponententests prüfen einzelne Module oder Komponenten isoliert und konzentrieren sich nicht auf die Migration von Daten.\n\n
    Komponentenintegrationstest (Falsch): Diese Tests überprüfen die Interaktionen zwischen Komponenten, jedoch nicht spezifisch die Datenmigration.`;
} else if (currentQuestionIndex === 14) {
    explanation = `Erklärung:\n
    Die Bewertung und Behebung der durch eine statische Analyse aufgedeckten Anomalien kann erheblichen Zeit- und Ressourcenaufwand erfordern (Richtig): Dies ist kein Vorteil, sondern ein möglicher Nachteil des statischen Testens.\n\n
    Die Behebung von Fehlerzuständen, die bei statischen Tests gefunden werden, ist in der Regel wesentlich kostengünstiger als die Behebung von Fehlern, die bei dynamischen Tests gefunden werden (Falsch): Dies ist ein Vorteil des statischen Testens, da früh gefundene Fehler oft weniger kostenintensiv zu beheben sind.\n\n
    Das Finden von Programmierfehlern, die bei dynamischen Tests möglicherweise nicht gefunden werden (Falsch): Ein weiterer Vorteil des statischen Testens, da es Fehler aufdecken kann, die durch dynamische Tests möglicherweise übersehen werden.\n\n
    Das Aufdecken von Lücken und Unstimmigkeiten in den Anforderungen (Falsch): Statisches Testen hilft dabei, solche Probleme in einer frühen Phase des Entwicklungsprozesses zu identifizieren.`;
}
 else if (currentQuestionIndex === 15) {
    explanation = `Erklärung:\n
    Es hilft, Missverständnisse bei den Anforderungen zu vermeiden (Richtig): Frühzeitiges und häufiges Feedback von Stakeholdern stellt sicher, dass die Anforderungen klar verstanden werden und reduziert das Risiko von Missverständnissen.\n\n
    Es verbessert den Testprozess für zukünftige Projekte (Falsch): Dies könnte ein Nebeneffekt sein, ist aber nicht der Hauptvorteil von frühem Feedback.\n\n
    Es zwingt die Kunden dazu, ihre Anforderungen basierend auf den abgestimmten Risiken zu priorisieren (Falsch): Obwohl Priorisierung wichtig ist, ist dies nicht der primäre Zweck von frühem Feedback.\n\n
    Nur so lässt sich die Qualität der Änderungen im Prozess messen (Falsch): Qualität kann auf verschiedene Weise gemessen werden, und frühes Feedback ist nicht die einzige Methode dazu.`;
} else if (currentQuestionIndex === 16) {
    explanation = `Erklärung:\n
    Walkthrough (Richtig): Ein Walkthrough ist ein geführtes Review, bei dem der Autor die Kontrolle über die Sitzung hat und es oft um Kommunikation oder Schulung geht.\n\n
    Informelles Review (Falsch): Informelle Reviews haben keine strukturierte Vorbereitung und keinen formalen Ablauf, was nicht zu den beschriebenen Eigenschaften passt.\n\n
    Technisches Review (Falsch): Technische Reviews sind formeller und konzentrieren sich stärker auf die Identifizierung von Fehlern und technischen Problemen.\n\n
    Inspektion (Falsch): Inspektionen sind die formalste Art von Reviews, mit klaren Rollen, detaillierter Vorbereitung und einer streng strukturierten Sitzung.`;
} else if (currentQuestionIndex === 17) {
    explanation = `Erklärung:\n
    Die persönliche Mitwirkung des Managements in der Kommunikation der Befunde (Richtig): Managementinterventionen in der Kommunikation können die Unabhängigkeit und Objektivität der Review-Ergebnisse beeinträchtigen.\n\n
    Die Teilnehmer sollten sich ausreichend Zeit für das Review nehmen (Falsch): Dies ist ein wichtiger Erfolgsfaktor, da gut durchgeführte Reviews Zeit und Sorgfalt erfordern.\n\n
    Eine Aufteilung großer Arbeitsprodukte in kleine Teile wird empfohlen, damit die Reviewer (Gutachter) nicht die Konzentration verlieren (Falsch): Dies ist eine bewährte Praxis, um die Effektivität des Reviews zu steigern.\n\n
    Die Festlegung klarer Ziele und messbarer Endekriterien für das Review (Falsch): Klare Ziele und Kriterien sind entscheidend für den Erfolg eines Reviews.`;
} else if (currentQuestionIndex === 18) {
    explanation = `Erklärung:\n
    Die Verfahren beruhen in hohem Maße auf den Kenntnissen des Testers über die Software und die Geschäftsdomäne (Richtig): Erfahrungsbasierte Testverfahren nutzen das Wissen und die Erfahrung des Testers, um Testfälle zu entwerfen, oft ohne detaillierte Anforderungen oder Spezifikationen.\n\n
    Testfälle werden auf der Grundlage detaillierter Entwurfsinformationen erstellt (Falsch): Dies ist charakteristisch für strukturelle Testmethoden, nicht für erfahrungsbasierte.\n\n
    Zur Messung des Überdeckungsgrads werden die Anzahl der im Test geprüften Schnittstellen verwendet (Falsch): Dies ist eher ein Ansatz aus der strukturellen Testmethodik, insbesondere bei Integrationstests.\n\n
    Die Testfälle werden verwendet, um Abweichungen von den Anforderungen zu identifizieren (Falsch): Dies ist typisch für anforderungsbasierte Testmethoden, nicht für erfahrungsbasierte.`;
} else if (currentQuestionIndex === 19) {
    explanation = `Erklärung:\n
    0,0; 20,0; 60,0 (Richtig): Diese Werte decken alle relevanten Äquivalenzklassen für gültige und ungültige Eingaben ab. 0,0 repräsentiert einen ungültigen Wert unterhalb der gültigen Bereichsgrenze, 20,0 einen gültigen mittleren Wert und 60,0 einen ungültigen Wert oberhalb der oberen Bereichsgrenze.\n\n
    0,0; 0,1; 50,0 (Falsch): Diese Werte decken zwar den gültigen Bereich ab, aber sie decken nicht alle ungültigen Äquivalenzklassen ab.\n\n
    0,0; 0,1; 50,0; 70,0 (Falsch): Dies deckt eine unnötige zusätzliche ungültige Klasse ab, was überflüssig ist und nicht die minimale Menge darstellt.\n\n
    -0,1; 0,0; 0,1; 49,9; 50,0; 50,1 (Falsch): Diese Liste ist umfangreicher als nötig und enthält Werte, die über das Minimum hinausgehen, um alle Klassen abzudecken.`;
    
} else if (currentQuestionIndex === 20) {
        explanation = `Erklärung:\n
        0,4; 0,5; 25,0; 25,1 (Richtig): Diese Werte decken die Grenzwerte und die direkten Nachbarn der Grenzwerte ab, was typisch für die 2-Wert-Grenzwertanalyse ist.\n\n
        0,3; 24,9; 25,2 (Falsch): Diese Werte beinhalten einen ungültigen Wert unterhalb des Mindestwerts, und es fehlt ein Wert direkt über dem Minimum, was für die 2-Wert-Grenzwertanalyse notwendig ist.\n\n
        0,4; 0,5; 0,6; 24,9; 25,0; 25,1 (Falsch): Diese Werte gehen über das hinaus, was für die 2-Wert-Grenzwertanalyse erforderlich ist, da sie auch zusätzliche Werte innerhalb des Bereichs abdecken.\n\n
        0,5; 0,6; 24,9; 25,0 (Falsch): Diese Werte decken nur die Grenzwerte und die nächsten gültigen Werte ab, aber nicht die Werte direkt außerhalb der Grenzwerte, die für eine vollständige 2-Wert-Grenzwertanalyse erforderlich sind.`;
    } else if (currentQuestionIndex === 21) {
        explanation = `Erklärung:\n
        Bedingung1 = „J“, Bedingung2 = „J“, Bedingung3 = „N“, Aktion = „N“ (Richtig): Dieser Testfall ist in der Entscheidungstabelle nicht vorhanden und beschreibt eine gültige, durchführbare Situation, bei der die Beschäftigung länger als ein Jahr ist, aber die anderen Bedingungen nicht erfüllt sind.\n\n
        Bedingung1 = „J“, Bedingung2 = „N“, Bedingung3 = „J“, Aktion = „N“ (Falsch): Dieser Testfall ist bereits in der Tabelle abgedeckt und ist nicht die fehlende Situation.\n\n
        Bedingung1 = „N“, Bedingung2 = „N“, Bedingung3 = „J“, Aktion = „N“ (Falsch): Auch dieser Testfall ist bereits in der Tabelle vorhanden.\n\n
        Bedingung1 = „J“, Bedingung2 = „J“, Bedingung3 = „N“, Aktion = „J“ (Falsch): Dieser Testfall existiert in der Tabelle und ist keine gültige Antwort auf die Frage.`;
    } else if (currentQuestionIndex === 22) {
        explanation = `Erklärung:\n
        Die Testfälle führen alle gültigen Übergänge im Zustandsübergangsdiagramm aus. Damit wird 100% 0-Switch-Überdeckung erreicht (Richtig): Dieser Testansatz stellt sicher, dass jeder gültige Übergang abgedeckt wird, was zu einer vollständigen 0-Switch-Überdeckung führt.\n\n
        Die Testfälle führen alle Übergänge im Zustandsübergangsdiagramm aus, damit wird 100% Überdeckung aller Übergänge erreicht (Falsch): Dies wäre nur korrekt, wenn alle möglichen Übergänge, einschließlich ungültiger, getestet würden, was nicht der Fall ist.\n\n
        Die Testfälle führen nur einige der gültigen Übergänge im Zustandsübergangsdiagramm aus. Damit liegt die 0-Switch-Überdeckung unter 100% (Falsch): Diese Aussage ist falsch, da die Testfälle tatsächlich alle gültigen Übergänge abdecken.\n\n
        Testfall 2 ist für 100% 0-Switch-Überdeckung nicht erforderlich, da Zustand S1 bereits durch Testfall 5 abgedeckt wurde (Falsch): Testfall 2 ist notwendig, um sicherzustellen, dass alle gültigen Übergänge abgedeckt sind.`;
    } else if (currentQuestionIndex === 23) {
        explanation = `Erklärung:\n
        Es handelt sich um eine Metrik, die den prozentualen Anteil der bereits durch Testfälle ausgeführten Anweisungen im Code angibt (Richtig): Anweisungsüberdeckung misst, welcher Anteil des Codes durch Testfälle abgedeckt wurde.\n\n
        Es handelt sich um eine Metrik zur Berechnung und Messung des prozentualen Anteils der ausgeführten Testfälle (Falsch): Dies beschreibt eine allgemeine Testmetrik, aber nicht spezifisch die Anweisungsüberdeckung.\n\n
        Es handelt sich um eine Metrik zur Messung der Anzahl der durch Testfälle ausgeführten Anweisungen im Code, die keine Fehlerwirkung aufgedeckt haben (Falsch): Diese Aussage vermischt zwei verschiedene Konzepte – Überdeckung und Fehlerwirkung.\n\n
        Es handelt sich um eine Metrik, die eine wahr/falsch-Bestätigung gibt, ob alle Anweisungen durch ausgeführte Testfälle abgedeckt sind (Falsch): Dies beschreibt nicht die quantitative Natur der Anweisungsüberdeckung, die in Prozenten gemessen wird.`;
    } else if (currentQuestionIndex === 24) {
        explanation = `Erklärung:\n
        White-Box-Tests können helfen, nicht implementierte Anforderungen zu identifizieren (Richtig): White-Box-Tests konzentrieren sich auf die interne Struktur des Codes und nicht auf die Anforderungen selbst, daher ist dies eine falsche Aussage.\n\n
        White-Box-Test ist ein Test, der auf der Analyse der internen Struktur einer Komponente oder eines Systems basiert (Falsch): Dies ist eine richtige Beschreibung von White-Box-Tests.\n\n
        White-Box-Überdeckungsmetriken können helfen, zusätzliche Tests zu identifizieren, um die Codeüberdeckung zu erhöhen (Falsch): Dies ist ein Vorteil von White-Box-Tests, da Überdeckungsmetriken oft verwendet werden, um Lücken in der Testabdeckung zu erkennen.\n\n
        White-Box-Testverfahren können ergänzend zu den Black-Box-Testverfahren eingesetzt werden, um das Vertrauen in den Code zu stärken (Falsch): Diese Aussage ist korrekt, da beide Testansätze zusammen verwendet werden können, um eine umfassende Teststrategie zu erstellen.`;
    } else if (currentQuestionIndex === 25) {
        explanation = `Erklärung:\n
        Bei der intuitiven Testfallermittlung nutzen Sie Ihr Wissen über und Ihre Erfahrung mit in der Vergangenheit gefundenen Fehlerzuständen und -wirkungen und typischen Fehlhandlungen von Entwicklern (Richtig): Diese Definition beschreibt die intuitive Testfallermittlung am besten, da sie auf Erfahrung und Wissen basiert.\n\n
        Bei der intuitiven Testfallermittlung werden Ihre persönlichen Erfahrungen mit der Entwicklung und den Fehlhandlungen, die Sie als Entwickler gemacht haben, genutzt (Falsch): Diese Aussage vermischt die intuitive Testfallermittlung mit einer retrospektiven Analyse der eigenen Fehler als Entwickler.\n\n
        Bei der intuitiven Testfallermittlung müssen Sie sich vorstellen, dass Sie der Benutzer des Testobjekts sind und Fehlerwirkungen ertragen, die der Benutzer bei der Interaktion mit dem Testobjekt machen könnte (Falsch): Dies bezieht sich eher auf benutzerzentrierte Testverfahren, nicht spezifisch auf intuitive Testfallermittlung.\n\n
        Bei der intuitiven Testfallermittlung müssen Sie die Entwicklungsaufgabe schnell selbst durchführen, um die Fehlerzustände und -wirkungen zu erkennen, die ein Entwickler machen könnte (Falsch): Dies beschreibt eher einen technischen Ansatz zur Fehlerfindung, nicht den intuitiven Ansatz.`;
    } else if (currentQuestionIndex === 26) {
        explanation = `Erklärung:\n
        Exploratives Testen (Richtig): In dieser Situation, in der detaillierte Anforderungen fehlen und Sie über gute Fachkenntnisse und analytische Fähigkeiten verfügen, ist das explorative Testen am besten geeignet, um schnell verwertbare Testergebnisse zu liefern.\n\n
        Checklistenbasiertes Testen (Falsch): Checklistenbasiertes Testen erfordert in der Regel klare Anforderungen oder Kriterien, was in dieser Situation nicht gegeben ist.\n\n
        Intuitive Testfallermittlung (Falsch): Obwohl die intuitive Testfallermittlung hilfreich sein kann, ist sie in dieser Situation nicht so umfassend oder systematisch wie das explorative Testen.\n\n
        Anweisungstest (Falsch): Anweisungstests konzentrieren sich auf die Codeabdeckung und sind in dieser Situation, in der schnelle Ergebnisse benötigt werden, nicht die beste Wahl.`;
    } else if (currentQuestionIndex === 27) {
        explanation = `Erklärung:\n
        Verwendung des Formats 'gegeben/wenn/dann' zur Beschreibung einer beispielhaften Testbedingung im Zusammenhang mit einer bestimmten User-Story (Richtig): Dieses Format ist eine weit verbreitete Methode zur präzisen und klaren Formulierung von Abnahmekriterien für User-Stories.\n\n
        Durchführung von Retrospektiven zur Ermittlung der tatsächlichen Bedürfnisse der Stakeholder in Bezug auf eine bestimmte User-Story (Falsch): Retrospektiven sind wichtig, aber sie dienen nicht der direkten Formulierung von Abnahmekriterien.\n\n
        Mündliche Kommunikation, um das Risiko zu verringern, dass die Abnahmekriterien von anderen missverstanden werden (Falsch): Mündliche Kommunikation kann hilfreich sein, aber die schriftliche und formale Dokumentation der Abnahmekriterien ist entscheidend.\n\n
        Dokumentieren von Risiken im Zusammenhang mit einer bestimmten User-Story in einem Testkonzept, um das risikobasierte Testen dieser User-Story zu erleichtern (Falsch): Dies ist ein Schritt im Testprozess, aber es betrifft nicht direkt die Formulierung von Abnahmekriterien.`;
    } else if (currentQuestionIndex === 28) {
        explanation = `Erklärung:\n
        Ein neu registrierter Kunde loggt sich ein und gibt eine erste Bestellung ein (Richtig): Dieser Testfall ist für die User-Story nicht relevant, da er sich nicht direkt auf die Anzeige der Bestellhistorie bezieht, sondern auf das Erfassen einer neuen Bestellung.\n\n
        Der Kunde loggt sich in sein Konto auf der Website ein und klickt auf die Schaltfläche "Bestellhistorie anzeigen" (Falsch): Dies ist ein relevanter Testfall, der direkt mit der User-Story verknüpft ist.\n\n
        Der eingeloggte Kunde klickt in der Liste seiner Bestellungen auf eine Bestellung (Falsch): Auch dies ist ein relevanter Testfall, da er sich auf die Anzeige detaillierter Bestellinformationen bezieht.\n\n
        Der eingeloggte Kunde klickt auf die Schaltfläche "Aufsteigend sortieren" auf dem Bildschirm mit der Bestellhistorie (Falsch): Dieser Testfall ist ebenfalls relevant, da er eine Funktionalität innerhalb der User-Story testet.`;
    }
    else if (currentQuestionIndex === 29) {
        explanation = `Erklärung:\n
        Die Tester beteiligen sich an der Risikoanalyse und bestimmen die Testbarkeit von User-Storys (Richtig): Dies ist ein entscheidender Mehrwert, den Tester zur Iterationsplanung beitragen können, da sie durch ihre Expertise Risiken identifizieren und die Testbarkeit der User-Storys beurteilen können.\n\n
        Die Tester bestimmen die Priorität der zu entwickelnden User-Storys (Falsch): Die Priorisierung von User-Storys ist in der Regel die Aufgabe des Produktmanagements oder der Stakeholder.\n\n
        Die Tester konzentrieren sich nur auf die Verfeinerung der funktionalen Aspekte des zu prüfenden Systems (Falsch): Tester sollten sich nicht nur auf funktionale Aspekte konzentrieren, sondern auch auf nicht-funktionale Anforderungen.\n\n
        Die Tester ermöglichen die Freigabe qualitativ hochwertiger Software durch frühzeitigen Testentwurf während der Releaseplanung (Falsch): Während frühe Tests wichtig sind, geht es bei der Iterationsplanung um die Risikoanalyse und die Testbarkeit.`;
    } else if (currentQuestionIndex === 30) {
        explanation = `Erklärung:\n
        Erwartete Fehlerdichte ist erreicht und Fehlerzustände sind berichtet worden (Richtig): Dies ist ein typisches Endekriterium, das anzeigt, dass das Testen abgeschlossen werden kann, sobald die Fehlerdichte akzeptabel ist und alle identifizierten Fehler berichtet wurden.\n\n
        Testumgebung ist einsatzbereit (Falsch): Dies ist ein Kriterium für den Start der Tests, nicht für deren Ende.\n\n
        Anmeldung am Testobjekt durch den Tester ist möglich (Falsch): Dies ist eine Voraussetzung für den Beginn des Tests, aber kein Endekriterium.\n\n
        Anforderungen sind in das Format GIVEN/WHEN/THEN übersetzt worden (Falsch): Dies ist ein Schritt im Testdesign, kein Endekriterium für das Testen.`;
    } else if (currentQuestionIndex === 31) {
        explanation = `Erklärung:\n
        10 Personenstunden (Richtig): Das Drei-Punkt-Schätzverfahren ergibt die Schätzung: (2 + 4*11 + 14)/6 = 10 Personenstunden.\n\n
        9 Personenstunden (Falsch): Dies wäre nicht die korrekte Berechnung nach dem Drei-Punkt-Schätzverfahren.\n\n
        11 Personenstunden (Falsch): Dies ist die wahrscheinlichste Schätzung, aber die endgültige Schätzung nach dem Drei-Punkt-Verfahren ist anders.\n\n
        14 Personenstunden (Falsch): Dies ist die pessimistische Schätzung, nicht die endgültige.`;
    } else if (currentQuestionIndex === 32) {
        explanation = `Erklärung:\n
        TF 003 (Richtig): Da die Priorität am höchsten ist (1) und alle Abhängigkeiten (TF 001 und TF 002) erfüllt sind, wird TF 003 als dritter Testfall ausgeführt.\n\n
        TF 005 (Falsch): Obwohl er eine Abhängigkeit hat, ist seine Priorität niedriger als die von TF 003.\n\n
        TF 002 (Falsch): TF 002 sollte vor TF 003 ausgeführt werden, daher ist er nicht der dritte Testfall.\n\n
        TF 001 (Falsch): TF 001 ist der erste Testfall, nicht der dritte.`;
    } else if (currentQuestionIndex === 33) {
        explanation = `Erklärung:\n
        1C, 2A, 3B, 4D (Richtig): Diese Zuordnung stimmt mit den typischen Kategorien der Testquadranten überein.\n\n
        1D, 2A, 3C, 4B (Falsch): Diese Zuordnung ist nicht korrekt, da sie die Testarten den falschen Quadranten zuordnet.\n\n
        1C, 2B, 3D, 4A (Falsch): Diese Zuordnung stimmt ebenfalls nicht mit den Testquadranten überein.\n\n
        1D, 2B, 3C, 4A (Falsch): Diese Zuordnung ist ebenfalls nicht korrekt.`;
    } else if (currentQuestionIndex === 34) {
        explanation = `Erklärung:\n
        Risikominderung (Richtig): Die vorgeschlagenen Maßnahmen zielen darauf ab, das Risiko zu verringern, indem Tests durchgeführt werden, um sicherzustellen, dass die Antwortzeiten akzeptabel sind.\n\n
        Risikoakzeptanz (Falsch): Risikoakzeptanz bedeutet, dass das Risiko bewusst in Kauf genommen wird, ohne Maßnahmen zu ergreifen, was hier nicht der Fall ist.\n\n
        Notfallplan (Falsch): Ein Notfallplan bezieht sich auf Maßnahmen, die ergriffen werden, wenn das Risiko bereits eingetreten ist, was hier nicht zutrifft.\n\n
        Risikotransfer (Falsch): Risikotransfer bedeutet, dass das Risiko auf eine andere Partei übertragen wird, was hier nicht der Fall ist.`;
    }
    else if (currentQuestionIndex === 35) {
        explanation = `Erklärung:\n
        Ein Testabschlussbericht wird erstellt, wenn eine Teststufe abgeschlossen wurde und baut auf Testfortschrittsberichten und zusätzlichen Daten auf (Richtig): Der Testabschlussbericht fasst die während der Teststufe gewonnenen Erkenntnisse zusammen und basiert auf den während der Testphase gesammelten Fortschrittsberichten.\n\n
        Testabschlussberichte werden in regelmäßigen Abständen erstellt und verteilt, um die Stakeholder hinsichtlich des Fortschrittes zu informieren (Falsch): Dies beschreibt eher Testfortschrittsberichte, die regelmäßig erstellt werden, um den Fortschritt zu überwachen.\n\n
        Ein Testfortschrittsbericht beinhaltet u. a. die Bewertung der Qualität des Produkts sowie etwaige Abweichungen vom Zeitplan (Falsch): Obwohl der Testfortschrittsbericht solche Informationen enthalten kann, ist dies nicht die umfassendste Beschreibung seines Zwecks.\n\n
        Testfortschrittsberichte werden während des Testabschlusses erstellt, um die Erfüllung der Endekriterien belegen zu können (Falsch): Testfortschrittsberichte werden während des gesamten Testprozesses erstellt, nicht nur am Ende.`;
    } else if (currentQuestionIndex === 36) {
        explanation = `Erklärung:\n
        Konfigurationsmanagement (Richtig): Dieser Prozess stellt sicher, dass Änderungen an Testskripten verfolgt und versioniert werden, sodass immer eine nachvollziehbare Historie der Änderungen vorhanden ist.\n\n
        Management der Verfolgbarkeit (Falsch): Dies bezieht sich auf die Verknüpfung von Anforderungen, Tests und Defekten, nicht auf die Versionierung von Testskripten.\n\n
        Wartungstest (Falsch): Wartungstests befassen sich mit der Überprüfung von Änderungen an der Software, nicht mit der Verwaltung von Testskripten.\n\n
        Anforderungsmanagement (Falsch): Dies bezieht sich auf die Verwaltung von Anforderungen, nicht auf die Versionierung von Testskripten.`;
    } else if (currentQuestionIndex === 37) {
        explanation = `Erklärung:\n
        Testumgebung und Testobjekt (inkl. Version) (Richtig): Diese Informationen sind entscheidend, damit die Entwickler die Anomalie in einer ähnlichen Umgebung reproduzieren können. Ohne diese Details ist es oft schwierig, den Fehler nachzuvollziehen.\n\n
        Erwartetes Ergebnis und tatsächliches Ergebnis (Falsch): Diese Informationen sind zwar wichtig, aber sie sind in diesem Bericht bereits enthalten.\n\n
        Referenzen und Fehlerstatus (Falsch): Diese sind hilfreich, aber der Hauptmangel liegt in den fehlenden Informationen zur Testumgebung und Version des Testobjekts.\n\n
        Priorität und Schweregrad (Falsch): Diese sind angegeben, aber die fehlenden technischen Details sind entscheidend für die Nachvollziehbarkeit des Fehlers.`;
    } else if (currentQuestionIndex === 38) {
        explanation = `Erklärung:\n
        Testentwurf und -realisierung (Richtig): Ein Werkzeug zur Erstellung von Testdaten unterstützt hauptsächlich den Testentwurf, indem es Daten generiert, die für die Ausführung der Testfälle erforderlich sind.\n\n
        Testüberwachung und -steuerung (Falsch): Dies betrifft die Planung und Verfolgung des Testprozesses, nicht die Erstellung von Testdaten.\n\n
        Testanalyse und Testentwurf (Falsch): Die Testanalyse betrifft die Identifikation dessen, was getestet werden muss, während die Erstellung von Testdaten direkt den Entwurf und die Realisierung unterstützt.\n\n
        Testabschluss (Falsch): Dies betrifft das formale Beenden einer Testphase, nicht die Erstellung von Testdaten.`;
    } else if (currentQuestionIndex === 39) {
        explanation = `Erklärung:\n
        Unrealistische Erwartungen hinsichtlich Funktionalität eines Werkzeugs (Richtig): Ein häufiges Risiko bei der Testautomatisierung ist, dass die Teams zu hohe Erwartungen an die Fähigkeiten und den Nutzen der Automatisierungswerkzeuge haben.\n\n
        Es kann zu unbekannten Nebenwirkungen im operativen Betrieb kommen (Falsch): Dies ist eher ein Risiko für Änderungen in der Produktionsumgebung, nicht spezifisch für die Testautomatisierung.\n\n
        Testwerkzeuge sind möglicherweise nicht zuverlässig genug (Falsch): Während dies ein mögliches Risiko ist, ist es weniger häufig als das Risiko überzogener Erwartungen.\n\n
        Es kann die verfügbare Zeit für manuelle Tests auf Dauer reduzieren (Falsch): Dies wäre eher ein Vorteil als ein Risiko, da es Zeit für manuelle Tests spart.`;
    }else if (currentQuestionIndex === 40) {
        explanation = `Erklärung:\n
        Budget, das von einem früheren, ähnlichen Testprojekt verwendet wurde (Richtig): Ein auf Metriken basierter Ansatz verwendet Daten aus früheren Projekten, um Schätzungen zu erstellen, z.B. das Budget eines ähnlichen Projekts.\n\n
        Von Fachexperten gesammelte durchschnittliche Kalkulationen (Falsch): Dies bezieht sich eher auf eine Experteneinschätzung als auf einen metrikenbasierten Ansatz.\n\n
        Übergreifende Erfahrung aus gesammelten Interviews mit Testmanagern (Falsch): Dies ist eine qualitative Einschätzung und keine metrikenbasierte Schätzung.\n\n
        Im Testteam abgestimmte Aufwandsschätzung für die Testdurchführung (Falsch): Dies ist eine interne Teamabsprache, aber nicht spezifisch auf Metriken basierend.`;
    } else if (currentQuestionIndex === 41) {
        explanation = `Erklärung:\n
        Fehlerwirkung (Richtig): Die Fehlerwirkung ist das sichtbare Verhalten oder Ergebnis eines Fehlers, in diesem Fall der Absturz des Programms nach dem Update.\n\n
        Fehlerzustand (Falsch): Dies beschreibt den Zustand des Systems, der durch einen Fehler verursacht wird, aber es ist nicht so spezifisch wie "Fehlerwirkung".\n\n
        Fehler (Falsch): Ein Fehler ist die Ursache, nicht das sichtbare Ergebnis des Problems.\n\n
        Fehlhandlung (Falsch): Eine Fehlhandlung ist eine menschliche Aktion, die zu einem Fehler führen kann, aber es beschreibt nicht die beobachtete Wirkung.`;
    } else if (currentQuestionIndex === 42) {
        explanation = `Erklärung:\n
        Abnahmekriterien können in verschiedenen Formaten formuliert werden, einschließlich szenario-orientiert und regelorientiert (Richtig): Abnahmekriterien können in mehreren Formaten vorliegen, um verschiedene Aspekte der User Story zu validieren.\n\n
        Abnahmekriterien dienen ausschließlich dazu, eine genaue Schätzung des Entwicklungsaufwands zu ermöglichen (Falsch): Abnahmekriterien dienen primär der Validierung der korrekten Implementierung einer User Story.\n\n
        Abnahmekriterien werden vom Projektmanagement definiert und vorgegeben (Falsch): Normalerweise werden Abnahmekriterien in Zusammenarbeit zwischen dem Entwicklungsteam und den Stakeholdern festgelegt.\n\n
        Abnahmekriterien werden in der Regel erst nach der Implementierung der User Story festgelegt (Falsch): Sie sollten vor der Implementierung festgelegt werden, um die Entwicklung in die richtige Richtung zu lenken.`;
    } else if (currentQuestionIndex === 43) {
        explanation = `Erklärung:\n
        Entscheidungstabellen sind sinnvoll, um komplexe Regeln in Geschäftsprozessen zu erfassen, die ein System umzusetzen hat. Testbedingungen sollten dabei systematisch in einer Tabelle dargestellt werden (Richtig): Entscheidungstabellen sind besonders nützlich, um komplexe Geschäftsregeln in einem strukturierten und systematischen Format zu dokumentieren.\n\n
        Entscheidungstabellen zeigen einerseits alle möglichen Softwarezustände selbst und andererseits auch, wie die Software in diesen Zustand eintritt, austritt und zwischen den Zuständen wechselt (Falsch): Diese Beschreibung passt besser zu Zustandsdiagrammen als zu Entscheidungstabellen.\n\n
        Entscheidungstabellen teilen Daten so in Klassen auf, dass alle Elemente einer vorgegebenen Klasse erwartungsgemäß in derselben Art und Weise verarbeitet werden (Falsch): Dies ist eine Beschreibung von Äquivalenzklassen und nicht von Entscheidungstabellen.\n\n
        Entscheidungstabellen können nur genutzt werden, wenn die Klasse geordnet ist und aus numerischen oder sequenziellen Daten besteht. Die Minimum- und Maximum-Werte einer Klasse sind dann ihre Grenzwerte (Falsch): Entscheidungstabellen sind nicht auf geordnete oder numerische Daten beschränkt.`;
    } else if (currentQuestionIndex === 44) {
        explanation = `Erklärung:\n
        Ein erfahrungsbasiertes Testverfahren, bei dem der Tester häufig eine Liste von Fragen verwendet, gegen welche eine Anforderung verifiziert werden muss (Richtig): Checklistenbasiertes Testen verwendet häufig Fragen oder Punkte, die gegen Anforderungen oder Erwartungen geprüft werden.\n\n
        Eine Art des Testens, bei der die Testsuiten auf realen oder virtuellen Geräten ausgeführt werden (Falsch): Dies beschreibt Testausführungsstrategien, aber nicht spezifisch checklistenbasiertes Testen.\n\n
        Ein Black-Box-Testverfahren, bei dem die Testfälle so entworfen werden, dass Paare von Parameter-Wertepaaren ausgeführt werden (Falsch): Dies beschreibt das Paarweises Testen, nicht das checklistenbasierte Testen.\n\n
        Testen durch Senden von Kommandos an das zu testende System über die direkte Nutzung der Programmierschnittstelle der Applikation (Falsch): Dies ist eine Beschreibung von API-Tests oder Schnittstellentests, nicht von checklistenbasiertem Testen.`;
    }  else if (currentQuestionIndex === 45) {
        explanation = `Erklärung:\n
        2 (Richtig): Es fehlen noch Testfälle für die mittlere Sonnenstundenkategorie (2-4 Stunden) und die niedrige Sonnenintensität. Um alle gültigen Äquivalenzklassen abzudecken, sind also mindestens zwei weitere Testfälle erforderlich.\n\n
        4 (Falsch): Vier zusätzliche Testfälle sind nicht notwendig, da es nur noch zwei Äquivalenzklassen gibt, die abgedeckt werden müssen.\n\n
        3 (Falsch): Drei zusätzliche Testfälle wären überflüssig, da nur zwei weitere erforderlich sind, um die vollständige Abdeckung zu erreichen.\n\n
        1 (Falsch): Ein zusätzlicher Testfall würde nicht ausreichen, um die Abdeckung aller Äquivalenzklassen zu gewährleisten.`;
    } else if (currentQuestionIndex === 46) {
        explanation = `Erklärung:\n
        Vollständiges Testen ist unmöglich (Richtig): Es ist nicht praktikabel, alle möglichen Eingabekombinationen und Vorbedingungen zu testen, insbesondere bei komplexen Systemen. Das Unternehmen hat diesen Grundsatz des Softwaretestens nicht beachtet.\n\n
        Trugschluss: 'Keine Fehler' bedeutet ein brauchbares System (Falsch): Dieser Grundsatz bezieht sich auf die falsche Annahme, dass ein System fehlerfrei ist, wenn keine Fehler gefunden werden.\n\n
        Tests nutzen sich ab (Falsch): Dieser Grundsatz bezieht sich auf die abnehmende Wirksamkeit von Tests im Laufe der Zeit, wenn sie wiederholt werden.\n\n
        Testen zeigt das Vorhandensein, nicht die Abwesenheit von Fehlerzuständen (Falsch): Dies ist ein grundlegender Grundsatz des Testens, bezieht sich aber nicht auf das Unmögliche eines vollständigen Testens.`;
    } else if (currentQuestionIndex === 47) {
        explanation = `Erklärung:\n
        Exploratives Testen (Richtig): In einer Situation, in der die Anforderungen nicht vollständig vorliegen und schnelle Ergebnisse benötigt werden, eignet sich das explorative Testen am besten. Es nutzt das Wissen und die Erfahrung der Tester, um Bereiche mit hohem Risiko oder Unsicherheit schnell zu überprüfen.\n\n
        Checklistenbasiertes Testen (Falsch): Dies wäre weniger geeignet, da es in der Regel eine klar definierte Liste von Anforderungen voraussetzt.\n\n
        Äquivalenzklassenbildung (Falsch): Dies ist eine strukturierte Testmethode, die spezifische Anforderungen und Regeln erfordert, was in dieser Situation nicht der Fall ist.\n\n
        Intuitive Testfallermittlung (Falsch): Obwohl nützlich, ist sie weniger umfassend als das explorative Testen in einer solchen Situation.`;
    } else if (currentQuestionIndex === 48) {
        explanation = `Erklärung:\n
        Tests, die für die nächste Berichtsperiode geplant sind (Richtig): Ein Testfortschrittsbericht sollte den Plan für die zukünftigen Tests enthalten, um den Fortschritt und die nächsten Schritte klar darzustellen.\n\n
        Erzeugte wiederverwendbare Testarbeitsergebnisse (Falsch): Dies könnte in einem anderen Kontext wichtig sein, gehört aber nicht direkt in den Testfortschrittsbericht.\n\n
        Restrisiken (Falsch): Restrisiken sind wichtig, sollten aber separat und nicht als Teil des Testfortschrittsberichts aufgeführt werden.\n\n
        Stand der Tests und Produktqualität in Bezug auf die Endekriterien oder die Definition-of-Done (Falsch): Dies ist relevant, aber der Bericht über die geplanten Tests für die nächste Periode ist spezifischer für den Fortschrittsbericht.`;
    } else if (currentQuestionIndex === 49) {
        explanation = `Erklärung:\n
        Beim Whole-Team-Ansatz können alle Teammitglieder, die über die erforderlichen Kompetenzen verfügen, Aufgaben in verschiedenen Bereichen ausführen, um die Qualität zu verbessern (Richtig): Dies beschreibt am besten den Whole-Team-Ansatz, bei dem alle Teammitglieder zusammenarbeiten und ihre Fähigkeiten einbringen, um die Qualität des Endprodukts zu gewährleisten.\n\n
        Im Whole-Team-Ansatz arbeitet jedes Teammitglied allein an seinen Aufgaben, um die Effizienz zu steigern (Falsch): Dies steht im Gegensatz zum Whole-Team-Ansatz, der Zusammenarbeit und gegenseitige Unterstützung betont.\n\n
        Der Whole-Team-Ansatz fördert die Isolation von Testern und schränkt die Zusammenarbeit mit anderen Teammitgliedern ein (Falsch): Der Whole-Team-Ansatz fördert die Zusammenarbeit, nicht die Isolation.\n\n
        Der Whole-Team-Ansatz legt fest, dass Tester die einzigen Mitglieder des Teams sind, die für die Qualität verantwortlich sind (Falsch): Der Whole-Team-Ansatz betont, dass alle Teammitglieder gemeinsam für die Qualität verantwortlich sind.`;
    }else if (currentQuestionIndex === 50) {
        explanation = `Erklärung:\n
        Die Testautomatisierung kann schwierig einzurichten und zu warten sein (Richtig): Eine der Herausforderungen bei DevOps ist die Komplexität der Testautomatisierung, sowohl beim Setup als auch bei der Wartung.\n\n
        Automatisierung durch eine Auslieferungskette erhöht den Bedarf an sich wiederholenden manuellen Tests (Falsch): Automatisierung reduziert in der Regel den Bedarf an manuellen Tests, anstatt ihn zu erhöhen.\n\n
        Steigert den Blick auf nicht-funktionale Qualitätsmerkmale (Falsch): Dies ist eher ein Vorteil als eine Herausforderung.\n\n
        Langsame Rückmeldung über die Codequalität und ob sich Änderungen nachteilig auf den bestehenden Code auswirken (Falsch): DevOps zielt darauf ab, schnelle Rückmeldungen zu ermöglichen, sodass dies keine typische Herausforderung ist.`;
    } else if (currentQuestionIndex === 51) {
        explanation = `Erklärung:\n
        Der Softwareentwickler des Radioweckers hat vergessen, Anforderungen für das Erhöhen der Lautstärke umzusetzen (Richtig): Dies ist eine Fehlhandlung, da sie auf eine menschliche Aktion hinweist, bei der eine Anforderung nicht umgesetzt wurde.\n\n
        Die System-Entwurfsspezifikation gibt die Uhrzeit im falschen Format an (Falsch): Dies ist ein Fehler in der Spezifikation, aber keine Fehlhandlung.\n\n
        Der Radiowecker wird leiser, wenn der Lautstärkeregler gedrückt wird (Falsch): Dies beschreibt eine Fehlerwirkung, die durch eine Fehlhandlung verursacht wird.\n\n
        Nicht benötigter Code, der um Mitternacht einen Alarm auslöst, wurde in die Software des Weckers mit aufgenommen (Falsch): Dies ist ein Fehler im Code, aber keine direkte Fehlhandlung.`;
    } else if (currentQuestionIndex === 52) {
        explanation = `Erklärung:\n
        Das Review wird in einer vertrauensvollen Atmosphäre abgehalten, und das Ergebnis sollte zur Bewertung der Teilnehmer herangezogen werden (Richtig): Ein Review sollte nicht dazu verwendet werden, die Leistung der Teilnehmer zu bewerten, sondern sollte sich auf die Verbesserung des Produkts konzentrieren.\n\n
        Unterstützung des Reviewprozesses durch das Management (Falsch): Dies ist ein wichtiger Erfolgsfaktor für ein erfolgreiches Review.\n\n
        Jedes Review hat klare Ziele, die während der Reviewplanung definiert und als messbare Endekriterien genutzt werden (Falsch): Klare Ziele und Endekriterien sind entscheidend für den Erfolg eines Reviews.\n\n
        Es werden die Reviewarten genutzt, die passend sind, um die Ziele zu erreichen, und geeignet sind für Art und Stufe des Arbeitsergebnisses sowie der Teilnehmer (Falsch): Die Wahl der richtigen Reviewart ist wichtig, um die gewünschten Ziele zu erreichen.`;
    } else if (currentQuestionIndex === 53) {
        explanation = `Erklärung:\n
        Zeitsersparnis - Vergleich der erwarteten Ergebnisse mit den tatsächlichen Ergebnissen (Richtig): Testautomatisierung spart Zeit, da sie den Vergleich der erwarteten und tatsächlichen Ergebnisse effizient automatisieren kann.\n\n
        Leichterer Zugang - Versionskontrolle von Testobjekten (Falsch): Dies ist eher ein Vorteil des Konfigurationsmanagements, nicht speziell der Testautomatisierung.\n\n
        Zeitsersparnis - Mitarbeiter müssen nicht mehr geschult werden (Falsch): Mitarbeiter benötigen immer noch Schulungen, auch bei automatisierten Prozessen.\n\n
        Leichterer Zugang - Neue Plattformen oder Technologien können einfacher eingeführt werden (Falsch): Dies ist kein spezifischer Vorteil der Testautomatisierung.`;
    } else if (currentQuestionIndex === 54) {
        explanation = `Erklärung:\n
        Die Testfälle decken nur einige der gültigen und keine ungültigen Zustandsübergänge ab (Richtig): Die Tabelle zeigt, dass die Testfälle einige, aber nicht alle gültigen Übergänge abdecken, und keine ungültigen Übergänge berücksichtigt werden.\n\n
        Die Testfälle decken nur einige der gültigen, jedoch alle ungültigen Zustandsübergänge ab (Falsch): Dies ist nicht korrekt, da keine ungültigen Übergänge abgedeckt werden.\n\n
        Die Testfälle decken alle sequentiellen Paare von Zustandsübergängen ab (Falsch): Es werden nicht alle sequentiellen Paare abgedeckt.\n\n
        Die Testfälle decken alle gültigen und alle ungültigen Zustandsübergänge ab (Falsch): Dies ist nicht der Fall, wie die Tabelle zeigt.`;
    } else if (currentQuestionIndex === 55) {
        explanation = `Erklärung:\n
        Verfügbarkeit von Fehlerwirkungen und Fehlerzuständen (Richtig): Dies ist kein typisches Eingangskriterium, sondern eher ein Ergebnis der Tests.\n\n
        Verfügbarkeit einer Testumgebung (Falsch): Dies ist ein typisches Eingangskriterium, das sicherstellt, dass die Tests durchgeführt werden können.\n\n
        Verfügbarkeit von Testelementen, die die Endekriterien für vorangegangene Teststufen erfüllt haben (Falsch): Auch dies ist ein wichtiges Eingangskriterium, das sicherstellt, dass das Testobjekt bereit für weitere Tests ist.\n\n
        Verfügbarkeit von Testdaten und anderen notwendigen Ressourcen (Falsch): Testdaten und Ressourcen müssen verfügbar sein, um mit den Tests beginnen zu können.`;
    }
    else if (currentQuestionIndex === 56) {
        explanation = `Erklärung:\n
        Autor, Manager, Moderator, Gutachter, Protokollant, Reviewleiter (Richtig): Dies sind die typischen Rollen in einem formalen Review. Jede Rolle hat spezifische Aufgaben, um den Review-Prozess effektiv zu gestalten.\n\n
        Entwickler, Manager, Moderator, Reviewleiter, Autor, Gutachter (Falsch): Entwickler sind nicht unbedingt eine formale Rolle in Reviews, und die Rolle des Protokollanten fehlt hier.\n\n
        Tester, Entwickler, Moderator, Gutachter, Protokollant, Manager (Falsch): Die Rolle des Testers ist nicht spezifisch für formale Reviews, und es fehlt der Reviewleiter.\n\n
        Autor, Manager, Reviewleiter, Tester, Protokollant, Gutachter (Falsch): Auch hier ist die Rolle des Testers nicht typisch für formale Reviews, während der Moderator fehlt.`;
    } else if (currentQuestionIndex === 57) {
        explanation = `Erklärung:\n
        A1 -> A3 -> A6 -> A4 -> A7 -> A2 -> A5 (Richtig): Diese Reihenfolge berücksichtigt alle Abhängigkeiten zwischen den Anforderungen, wie sie im Diagramm dargestellt sind.\n\n
        A1 -> A3 -> A6 -> A7 -> A4 -> A2 -> A5 (Falsch): Diese Reihenfolge verletzt die Abhängigkeit, die besagt, dass A4 vor A7 getestet werden sollte.\n\n
        A1 -> A2 -> A3 -> A6 -> A4 -> A7 -> A5 (Falsch): Diese Reihenfolge ignoriert die Abhängigkeit, dass A3 vor A2 getestet werden sollte.\n\n
        A1 -> A3 -> A2 -> A6 -> A5 -> A4 -> A7 (Falsch): Diese Reihenfolge verletzt mehrere Abhängigkeiten, einschließlich der Reihenfolge von A2 und A4.`;
    } else if (currentQuestionIndex === 58) {
        explanation = `Erklärung:\n
        Richtlinien für gute Kommunikation zwischen Entwicklern und Testern (Richtig): Während dies wichtig ist, gehört es nicht typischerweise zu den Inhalten eines Testkonzepts, das sich eher auf Teststrategien, Ziele und Risiken konzentriert.\n\n
        Rollen und Verantwortlichkeiten aller Stakeholder im Testprozess (Falsch): Dies ist ein typischer Bestandteil eines Testkonzepts, um Klarheit über die Verantwortlichkeiten zu schaffen.\n\n
        Bestimmung des Umfangs, der Ziele und der Risiken der Tests (Falsch): Diese Elemente sind grundlegend für ein Testkonzept, um den Testprozess zu definieren.\n\n
        Festlegen der allgemeinen Testvorgehensweise (Falsch): Dies gehört ebenfalls zu den wesentlichen Bestandteilen eines Testkonzepts, um den methodischen Ansatz festzulegen.`;
    } else if (currentQuestionIndex === 59) {
        explanation = `Erklärung:\n
        Testausführungsplan (Richtig): Dies ist ein zentrales Arbeitsergebnis der Testrealisierung, das festlegt, wann und wie die Tests durchgeführt werden.\n\n
        Testbericht (Falsch): Dies ist ein Dokument, das nach der Testdurchführung erstellt wird und die Ergebnisse zusammenfasst.\n\n
        Testkonzept (Falsch): Das Testkonzept wird in einer früheren Phase des Testprozesses erstellt, um die gesamte Teststrategie zu definieren.\n\n
        Testfälle (Falsch): Testfälle werden während der Testentwurfsphase erstellt, nicht als Teil der Testrealisierung.`;
    } else if (currentQuestionIndex === 60) {
        explanation = `Erklärung:\n
        Die intuitive Testfallerermittlung ist ein Testansatz, bei dem das Auftreten von Fehlhandlungen, Fehlerzuständen und Fehlerwirkungen aufgrund des Wissens des Testers vermutet wird (Richtig): Dies beschreibt die intuitive Testfallerermittlung korrekt, da sie auf der Erfahrung und dem Wissen des Testers basiert.\n\n
        Die intuitive Testfallerermittlung ist ein Testansatz, bei dem die Tests dynamisch entworfen und ausgeführt werden, basierend auf dem Wissen, der Erkundung des Testelements und den Ergebnissen früherer Tests (Falsch): Dies beschreibt eher das explorative Testen als die intuitive Testfallerermittlung.\n\n
        Die intuitive Testfallerermittlung ist ein Testansatz, bei dem das Auftreten von Fehlhandlungen, Fehlerzuständen und Fehlerwirkungen aufgrund des Wissens des Entwicklers vermutet wird (Falsch): Die Testfallerermittlung basiert auf dem Wissen des Testers, nicht des Entwicklers.\n\n
        Die intuitive Testfallerermittlung ist ein Testansatz, bei dem Tester die Tests mit dem Ziel entwerfen, realisieren und ausführen, alle Testbedingungen aus einer Checkliste abzudecken (Falsch): Dies beschreibt eher das checklistenbasierte Testen als die intuitive Testfallerermittlung.`;
    }else if (currentQuestionIndex === 61) {
        explanation = `Erklärung:\n
        Die Aussage ist falsch. Bei einem einzelnen Testfall wird die IF-Anweisung auf jeden Fall durchlaufen und damit 100% aller Anweisungen abgedeckt (Richtig): Ein einzelner Testfall, der eine IF-Anweisung durchläuft, deckt alle Anweisungen in dieser Anweisung ab.\n\n
        Die Aussage ist richtig. Ein einzelner Testfall erzielt eine 50% Anweisungsüberdeckung und eine 100% Entscheidungsüberdeckung (Falsch): Diese Aussage ist irreführend, da ein einzelner Testfall nicht notwendigerweise 100% Entscheidungsüberdeckung erzielt.\n\n
        Die Aussage ist richtig. Bei einem einzelnen Testfall ist der Entscheidungsausgang der IF-Anweisung entweder 'wahr' oder 'falsch' (Falsch): Diese Aussage berücksichtigt nicht, dass die IF-Anweisung in beiden Fällen durchlaufen wird.\n\n
        Die Aussage ist falsch. Bei einem einzelnen Testfall werden mindestens 50% aller Anweisungen abgedeckt, im besten Fall sogar 100% (Falsch): Ein Testfall deckt in der Regel 100% der Anweisungen in einer IF-Anweisung ab, wenn er sie durchläuft.`;
    } else if (currentQuestionIndex === 62) {
        explanation = `Erklärung:\n
        Der Zustandsübergangstest hilft neben den Eingabedaten auch den bisherigen Ablauf des Systems in die Berechnung der Ausgaben bzw. auf das Systemverhalten miteinzubeziehen (Richtig): Zustandsübergangstests berücksichtigen, wie das System auf bestimmte Eingaben reagiert, basierend auf seinem aktuellen Zustand, und nicht nur die Eingaben selbst.\n\n
        Der Zustandsübergangstest hilft mit Hilfe von Checklisten ein gewisses Maß an Konsistenz bei der Testfallermittlung zu gewährleisten (Falsch): Dies beschreibt eher das checklistenbasierte Testen.\n\n
        Der Zustandsübergangstest hilft Testfälle anhand der Stakeholder Anforderungen zu kategorisieren (Falsch): Dies bezieht sich auf das Kategorisieren von Anforderungen, nicht auf Zustandsübergangstests.\n\n
        Der Zustandsübergangstest hilft die Übergänge vom Minimum auf das Maximum bei der Grenzwertanalyse zu bewerten (Falsch): Dies beschreibt die Grenzwertanalyse, nicht den Zustandsübergangstest.`;
    } else if (currentQuestionIndex === 63) {
        explanation = `Erklärung:\n
        Verifizieren, ob alle spezifischen Anforderungen erfüllt sind (Richtig): Ein zentrales Ziel des Testens ist es, sicherzustellen, dass das System die festgelegten Anforderungen erfüllt.\n\n
        Identifizierung von notwendigen Testdaten zur Unterstützung der Testbedingungen und Testfälle (Falsch): Dies ist eine Aktivität im Testprozess, aber kein zentrales Ziel des Testens selbst.\n\n
        Neue, unbekannte Technologien erlernen (Falsch): Dies könnte ein persönliches Ziel sein, aber es ist kein Ziel des Testens.\n\n
        Analyse der Testbasis, die für die in Betracht gezogene Teststufe geeignet ist (Falsch): Dies ist Teil des Testdesigns, aber nicht das Hauptziel des Testens.`;
    } else if (currentQuestionIndex === 64) {
        explanation = `Erklärung:\n
        Die Identifizierung von Erfolgen und Misserfolgen in vergangenen Aktivitäten (Richtig): Retrospektiven zielen darauf ab, aus vergangenen Projekten zu lernen, um zukünftige Arbeiten zu verbessern.\n\n
        Die Planung zukünftiger Entwicklungsphasen (Falsch): Dies ist Teil des Projektmanagements, nicht das Hauptziel von Retrospektiven.\n\n
        Die Erstellung von neuen Softwareanforderungen (Falsch): Dies ist Aufgabe des Anforderungsmanagements, nicht der Retrospektiven.\n\n
        Die Validierung der Testergebnisse (Falsch): Dies gehört zur Testdurchführung, nicht zu Retrospektiven.`;
    } else if (currentQuestionIndex === 65) {
        explanation = `Erklärung:\n
        Die Aufdeckung von Anomalien (Richtig): Ein informelles Review zielt hauptsächlich darauf ab, Fehler und Unstimmigkeiten im Arbeitsergebnis zu erkennen.\n\n
        Die Erfassung von Metriken zur Prozessverbesserung (Falsch): Dies ist eher das Ziel formaler Reviews, die umfassend dokumentiert werden.\n\n
        Die Erstellung formaler, dokumentierter Ergebnisse für das Management (Falsch): Dies ist ein Ziel formaler Reviews, nicht von informellen Reviews.\n\n
        Die Bewertung der Qualität und dem Aufbau von Vertrauen in das Arbeitsergebnis (Falsch): Dies ist ein allgemeines Ziel des Testens, aber nicht spezifisch für informelle Reviews.`;
    } else if (currentQuestionIndex === 66) {
        explanation = `Erklärung:\n
        Aufgrund eines Fehlerzustands im Quellcode wird eine Berechnung nicht korrekt durchgeführt (Richtig): Dies beschreibt ein typisches Produktrisiko, bei dem ein Fehler im Code zu falschen Ergebnissen führt.\n\n
        Die Entwickler haben möglicherweise nicht die Zeit, alle vom Testteam gefundenen Fehler zu beheben (Falsch): Dies ist ein Projektrisiko, kein Produktrisiko.\n\n
        Die für den Test benötigte Umgebung und die Testdaten stehen nicht rechtzeitig zur Verfügung (Falsch): Auch dies ist ein Projektrisiko, da es den Testprozess betrifft.\n\n
        Es bestehen vertragliche Probleme mit Lieferanten (Falsch): Dies ist ein allgemeines Geschäftsrisiko, kein Produktrisiko.`;
    } else if (currentQuestionIndex === 67) {
        explanation = `Erklärung:\n
        Fehlerzustände treten gehäuft auf (Richtig): Dieser Grundsatz besagt, dass Fehler in einem bestimmten Bereich oft darauf hindeuten, dass weitere Fehler in demselben Bereich existieren. Dies erklärt, warum der Tester mehr Tests in diesem Bereich durchgeführt hat.\n\n
        Vollständiges Testen ist unmöglich (Falsch): Obwohl dies wahr ist, erklärt es nicht die gezielte Testung eines bestimmten Bereichs.\n\n
        Tests nutzen sich ab (Falsch): Dies bezieht sich auf die abnehmende Effektivität wiederholter Tests, aber es erklärt nicht das spezifische Testverhalten des Testers.\n\n
        Testen ist kontextabhängig (Falsch): Auch wenn dies zutrifft, erklärt es nicht den Fokus des Testers auf einen bestimmten Bereich.`;
    } else if (currentQuestionIndex === 68) {
        explanation = `Erklärung:\n
        Der erste Schritt ist ein Spezifikationsworkshop, in dem die User Story und deren Abnahmekriterien analysiert, diskutiert und geschrieben werden, gefolgt von der Erstellung der Testfälle (Richtig): Dies ist ein typischer Ablauf im ATDD-Prozess, der sicherstellt, dass die Anforderungen klar verstanden und direkt in Testfälle umgesetzt werden.\n\n
        Zuerst erstellt das Entwicklungsteam die User Story, dann analysiert das Testteam die Abnahmekriterien, gefolgt von der Erstellung der Testfälle (Falsch): Dieser Ansatz beschreibt nicht die enge Zusammenarbeit zwischen Entwicklern und Testern, die für ATDD charakteristisch ist.\n\n
        Es gibt keinen festgelegten Prozess. ATDD kann je nach den Anforderungen des Projekts variieren (Falsch): Während es Flexibilität gibt, folgt ATDD in der Regel einem strukturierten Prozess.\n\n
        Der Prozess beginnt mit dem Schreiben der User Story, gefolgt von der automatisierten Ausführung der Testfälle, um die Implementierung zu überprüfen (Falsch): Dies beschreibt eher den TDD-Prozess, nicht ATDD.`;
    } else if (currentQuestionIndex === 69) {
        explanation = `Erklärung:\n
        Zuerst werden Tests geschrieben, dann wird der Code geschrieben (Richtig): Dies ist das Hauptprinzip der testgetriebenen Entwicklung (TDD), bei dem die Tests zuerst erstellt werden, um die Anforderungen an den Code zu definieren.\n\n
        Leitet Tests aus Abnahmekriterien als Teil des Systementwurfs ab (Falsch): Dies beschreibt eher ATDD, nicht TDD.\n\n
        Förderung von automatisierten Prozessen wie CI/CD (Falsch): Obwohl TDD oft mit CI/CD verwendet wird, ist dies nicht das Hauptprinzip von TDD.\n\n
        Drückt das gewünschte Verhalten einer Anwendung mit Testfällen aus (Falsch): Dies beschreibt BDD (Behavior-Driven Development), nicht TDD.`;
    } else if (currentQuestionIndex === 70) {
        explanation = `Erklärung:\n
        14999€, 15000€, 20000€, 24999€, 25000€ (Richtig): Diese Grenzwerte decken die relevanten Schwellenwerte für die Rabattkategorien vollständig ab.\n\n
        15000€, 15001€, 20000€, 20001€, 25000€ (Falsch): Diese Testsätze lassen einige wichtige Grenzwerte aus, wie z.B. die Werte knapp unter 15000€ und 25000€.\n\n
        14999€, 15000€, 15001€, 19999€, 20000€ (Falsch): Diese Testsätze vernachlässigen den Grenzwert knapp unter 25000€, der für eine vollständige Abdeckung erforderlich ist.\n\n
        15000€, 15001€, 20000€, 25000€, 25001€ (Falsch): Dies lässt wichtige Grenzwerte unter 15000€ und knapp unter 25000€ aus.`;
    }  else if (currentQuestionIndex === 71) {
        explanation = `Erklärung:\n
        Identifikation des Testelements (Richtig): Diese Information ist entscheidend, da sie angibt, welches spezifische Element oder welche spezifische Komponente getestet wurde. Ohne diese Information können Entwickler den Fehler nur schwer nachvollziehen.\n\n
        Korrekturmaßnahmen des Entwicklers (Falsch): Dies wird normalerweise nicht im Fehlerbericht vom Tester verlangt, sondern vom Entwickler selbst notiert.\n\n
        Tatsächliches Istergebnis (Falsch): Dies wurde bereits im Bericht als "keine Musik abgespielt" angegeben, also ist es nicht fehlend.\n\n
        Status des Fehlerzustands (Falsch): Der Status ist nicht so kritisch wie die Identifikation des Testelements.`;
    } else if (currentQuestionIndex === 72) {
        explanation = `Erklärung:\n
        Anweisungsüberdeckung = (Anzahl durchlaufene Anweisungen / Gesamtanzahl Anweisungen) * 100% (Richtig): Dies ist die korrekte Formel für die Berechnung der Anweisungsüberdeckung, welche angibt, welcher Prozentsatz der Anweisungen im Code durch die Tests abgedeckt wurde.\n\n
        Anweisungsüberdeckung = (Gesamtanzahl Quellcodezeilen / Anzahl durchlaufener Quellcodezeilen) * 100% (Falsch): Diese Formel ist falsch und verwechselt Quellcodezeilen mit Anweisungen.\n\n
        Anweisungsüberdeckung = (Anzahl durchlaufener Quellcodezeilen / Gesamtanzahl Quellcodezeilen) * 100% (Falsch): Dies ist eine Formel zur Berechnung der Codezeilenabdeckung, nicht der Anweisungsüberdeckung.\n\n
        Anweisungsüberdeckung = (Gesamtanzahl Anweisungen / Anzahl durchlaufene Anweisungen) * 100% (Falsch): Dies kehrt die logische Reihenfolge der Berechnung um und ist daher falsch.`;
    } else if (currentQuestionIndex === 73) {
        explanation = `Erklärung:\n
        Ein tägliches Stand-Up-Meeting, bei dem das Team den aktuellen Stand und Hindernisse bespricht (Richtig): Diese Methode ist am effektivsten in agilen Teams, da sie eine schnelle und regelmäßige Kommunikation ermöglicht, die für die Koordination entscheidend ist.\n\n
        Ein wöchentliches Status-Meeting, bei dem alle Teammitglieder persönlich teilnehmen (Falsch): Obwohl wöchentliche Meetings nützlich sind, sind sie weniger agil und können nicht so schnell auf Probleme reagieren.\n\n
        Das Versenden von wöchentlichen E-Mail-Updates an alle Stakeholder (Falsch): Dies ist zu langsam und ermöglicht keine direkte Interaktion und Problembehebung.\n\n
        Das Erstellen eines detaillierten Testberichts am Ende jeder Iteration (Falsch): Ein Testbericht am Ende einer Iteration ist wichtig, aber er fördert keine laufende Kommunikation während der Iteration.`;
    } else if (currentQuestionIndex === 74) {
        explanation = `Erklärung:\n
        Arbeitsergebnisse, die gelesen und verstanden werden können und eine Struktur haben, können Gegenstand eines Reviews sein (Richtig): Für statische Tests ist es entscheidend, dass das Arbeitsergebnis verständlich und strukturiert ist, um effektiv überprüft werden zu können.\n\n
        Jedes Arbeitsergebnis kann mit statischen Tests untersucht werden, unabhängig von seiner Struktur oder seinem Inhalt (Falsch): Dies ist nicht wahr, da die Struktur und Lesbarkeit entscheidend für die Überprüfbarkeit sind.\n\n
        Arbeitsergebnisse, die für statische Tests geeignet sind, müssen keine klare Struktur oder formale Syntax haben (Falsch): Dies widerspricht der Notwendigkeit von Struktur für effektive statische Tests.\n\n
        Arbeitsergebnisse, die schwer zu interpretieren sind und nicht mit Hilfe von Werkzeugen analysiert werden sollten, sind ideal für statische Tests geeignet (Falsch): Solche Arbeitsergebnisse sind tatsächlich ungeeignet für statische Tests, da sie schwer zu überprüfen sind.`;
    } else if (currentQuestionIndex === 75) {
        explanation = `Erklärung:\n
        Statischer Test kann leichter Fehlerzustände aufdecken, die auf Pfaden durch den Code liegen, die selten ausgeführt werden oder schwer durch dynamische Tests zu erreichen sind (Richtig): Statische Tests untersuchen den Code direkt und können Probleme aufdecken, die bei der Ausführung selten auftreten.\n\n
        Statischer Test kann nur auf ausführbare Arbeitsergebnisse angewandt werden, während dynamischer Test auf nicht ausführbare Arbeitsergebnisse angewandt werden kann (Falsch): Dies ist umgekehrt. Statische Tests sind besonders für nicht-ausführbare Arbeitsergebnisse wie Dokumente geeignet.\n\n
        Beim dynamischen Test werden Fehlerzustände direkt gefunden, während beim statischen Test Fehlerwirkungen auftreten, aus denen durch eine anschließende Analyse die zugehörigen Fehlerzustände ermittelt werden (Falsch): Statische Tests finden Fehlerzustände direkt, ohne dass das Programm ausgeführt werden muss.\n\n
        Statischer Test kann zur Messung von Qualitätsmerkmalen verwendet werden, die von der Ausführung des Codes abhängen, während dynamischer Test zur Messung von Qualitätsmerkmalen verwendet werden kann, die nicht von der Ausführung des Codes abhängen (Falsch): Dies ist umgekehrt. Dynamische Tests messen Qualitätsmerkmale, die von der Codeausführung abhängen.`;
    } else if (currentQuestionIndex === 76) {
        explanation = `Erklärung:\n
        Gezielte Penetrationstests durchführen, um Sicherheitslücken in der Login-Funktionalität zu identifizieren (Richtig): Penetrationstests sind der beste Weg, um Sicherheitsrisiken in einer Anwendung aufzudecken und zu mindern.\n\n
        Das Testteam aus Fachleuten für Benutzeroberflächentests zusammenstellen (Falsch): Dies hilft nicht direkt bei der Identifizierung von Sicherheitslücken.\n\n
        Durchführung automatisierter Regressionstests in allen Teststufen (Falsch): Regressionstests sind wichtig, aber sie decken in der Regel keine neuen Sicherheitslücken auf.\n\n
        Durchführung von Reviews und statischen Analysen des Entwicklercodes (Falsch): Während Code-Reviews nützlich sind, sind sie allein nicht ausreichend, um alle Arten von Sicherheitslücken zu identifizieren.`;
    } else if (currentQuestionIndex === 77) {
        explanation = `Erklärung:\n
        Um sicherzustellen, dass die Gutachter während eines individuellen Reviews oder einer Reviewsitzung die Konzentration nicht verlieren (Richtig): Kleine Einheiten sind wichtig, um sicherzustellen, dass Reviewer fokussiert und effektiv bleiben.\n\n
        Um die Anzahl der Teilnehmer zu begrenzen (Falsch): Die Anzahl der Teilnehmer ist nicht der Hauptgrund für kleinere Review-Einheiten.\n\n
        Um die vorgegebenen Ziele zu erreichen, ohne dass der zeitliche Rahmen überschritten wird (Falsch): Obwohl dies wichtig ist, ist der Hauptgrund die Konzentration der Gutachter.\n\n
        Um Zeit zu sparen, sodass das Management seiner eigentlichen Aufgabe nachgehen kann (Falsch): Zeitersparnis für das Management ist nicht der Hauptfokus bei der Strukturierung von Reviews.`;
    } else if (currentQuestionIndex === 78) {
        explanation = `Erklärung:\n
        Geplante Erweiterungen und korrigierende Änderungen (Richtig): Diese sind typische Auslöser für Wartungstests, da Änderungen am System erneute Tests erfordern, um sicherzustellen, dass alles korrekt funktioniert.\n\n
        Die Implementierung von neuen Geschäftsanforderungen (Falsch): Dies könnte eine Ursache für neue Entwicklungsprojekte sein, aber es ist kein typischer Auslöser für Wartungstests.\n\n
        Das erste Release eines neuen Softwareprodukts (Falsch): Wartungstests sind nach dem ersten Release relevant, nicht davor.\n\n
        Die Einführung eines neuen Projektmanagementsystems (Falsch): Dies betrifft das Management, nicht die Wartung und Wartungstests einer Software.`;
    } else if (currentQuestionIndex === 79) {
        explanation = `Erklärung:\n
        Mangelnde Zusammenarbeit und Kommunikationsprobleme zwischen Testern und dem Entwicklungsteam (Richtig): Dies ist ein häufiges Problem bei unabhängigen Testteams, da sie möglicherweise nicht eng genug mit den Entwicklern zusammenarbeiten.\n\n
        Hoher Schulungsaufwand des unabhängigen Testteams (Falsch): Schulungsaufwand kann anfallen, aber es ist kein entscheidender Nachteil.\n\n
        Geringes Finden von Fehlern aufgrund fehlender Informationen über das Testobjekt (Falsch): Dies könnte ein Risiko sein, ist aber nicht typisch für alle unabhängigen Testteams.\n\n
        Mangelnde Zusammenarbeit und Kommunikationsprobleme zwischen Testern und dem Entwicklungsteam (Richtig): Dies ist ein häufiger Kritikpunkt an unabhängigen Testteams.`;
    } else if (currentQuestionIndex === 80) {
        explanation = `Erklärung:\n
        Statische Tests reduzieren die Gesamtkosten über die Lebenszeit der Software hinweg, da weniger Fehlerwirkungen zu einem späteren Zeitpunkt im Lebenszyklus oder nach Auslieferung in die Produktion auftreten (Richtig): Statische Tests können helfen, Probleme frühzeitig zu erkennen, wodurch teure Fehler in späteren Phasen vermieden werden.\n\n
        Statische Tests können aufgrund ihrer Vielfältigkeit ohne Probleme Wartungstests in der produktiven Umgebung ersetzen (Falsch): Statische Tests sind wertvoll, aber sie ersetzen nicht die Notwendigkeit für Wartungstests.\n\n
        Statische Tests, wie z. B. Reviews, lassen sich lediglich auf Anforderungsdokumente oder Testkonzepte anwenden, nicht jedoch auf Entwicklerscode (Falsch): Statische Tests können sehr wohl auch auf Entwicklerscode angewendet werden.\n\n
        Statische Tests machen dynamische Tests überflüssig, da Fehlerzustände bereits beim statischen Test aufgedeckt werden (Falsch): Beide Arten von Tests ergänzen sich und sind beide notwendig.`;
    } else if (currentQuestionIndex === 81) {
        explanation = `Erklärung:\n
        Reviewmoderator (Richtig): Der Moderator ist verantwortlich für die Organisation und Durchführung des Reviews. Sein Management und seine Moderationsfähigkeiten sind entscheidend für den Erfolg des Reviews.\n\n
        Gutachter (Falsch): Obwohl Gutachter wichtig sind, hängt der Erfolg eines Reviews hauptsächlich von der Moderation ab.\n\n
        Reviewleiter (Falsch): Der Leiter koordiniert, aber der Moderator hat die entscheidende Rolle im Review-Prozess.\n\n
        Autor (Falsch): Der Autor stellt das zu überprüfende Dokument bereit, beeinflusst jedoch nicht direkt den Erfolg des Reviews.`;
    } else if (currentQuestionIndex === 82) {
        explanation = `Erklärung:\n
        3, 5, 6 (Richtig): Diese Optionen umfassen Informationen, die für die Reproduktion und Lösung des Fehlers entscheidend sind, wie Testumgebung und Version des Testobjekts.\n\n
        1, 3, 5 (Falsch): Diese Kombination fehlt wesentliche Informationen wie die Testumgebung und die Version des Testobjekts.\n\n
        2, 4, 5 (Falsch): Diese Kombination ist unvollständig und enthält nicht alle relevanten Informationen.\n\n
        1, 2, 6 (Falsch): Diese Kombination enthält Informationen, die nicht so relevant sind wie die Testumgebung und die Version des Testobjekts.`;
    } else if (currentQuestionIndex === 83) {
        explanation = `Erklärung:\n
        3 (Richtig): Diese Zuordnung der Testarten zu den Testquadranten von Brian Marick ist korrekt und spiegelt die Struktur wider, die Marick ursprünglich vorgeschlagen hat.\n\n
        1, 2, 4 (Falsch): Diese Zuordnungen entsprechen nicht den Testquadranten von Brian Marick.`;
    } else if (currentQuestionIndex === 84) {
        explanation = `Erklärung:\n
        Eingangskriterien: 1, 3, 4, 6. Endekriterien: 2, 5 (Richtig): Diese Kombination ist korrekt, da sie die richtigen Kriterien für den Beginn und das Ende eines Tests widerspiegelt.\n\n
        Andere Kombinationen (Falsch): Diese Kombinationen sind entweder unvollständig oder falsch zugeordnet.`;
    } else if (currentQuestionIndex === 85) {
        explanation = `Erklärung:\n
        Komponentenstufe (Richtig): White-Box-Tests werden am häufigsten auf der Komponentenstufe durchgeführt, da sie direkt den Quellcode testen.\n\n
        Andere Stufen (Falsch): Diese Teststufen nutzen White-Box-Tests weniger häufig.`;
    } else if (currentQuestionIndex === 86) {
        explanation = `Erklärung:\n
        100% Anweisungsüberdeckung (Richtig): Eine Zweigüberdeckung von 100% impliziert, dass alle möglichen Zweige abgedeckt wurden, was automatisch auch alle Anweisungen abdeckt.\n\n
        Andere Optionen (Falsch): Diese Optionen missverstehen die Beziehung zwischen Zweig- und Anweisungsüberdeckung.`;
    } else if (currentQuestionIndex === 87) {
        explanation = `Erklärung:\n
        Um potenzielle Fehlerzustände frühzeitig zu identifizieren und zu beheben (Richtig): Dies ist das Hauptziel des Shift-Left-Ansatzes, bei dem Tests so früh wie möglich im Entwicklungsprozess durchgeführt werden.\n\n
        Andere Optionen (Falsch): Diese Optionen missverstehen das Konzept des Shift-Left-Ansatzes.`;
    } else if (currentQuestionIndex === 88) {
        explanation = `Erklärung:\n
        Schreiben eines Testskripts, bevor der Konfigurationsmanagementprozess eingerichtet wird (Richtig): Dies entspricht nicht dem Shift-Left-Ansatz, der auf das frühzeitige Testen im Entwicklungsprozess abzielt.\n\n
        Andere Optionen (Falsch): Diese Optionen entsprechen dem Shift-Left-Ansatz, da sie frühes Testen und Überprüfungen im Entwicklungsprozess betonen.`;
    } else if (currentQuestionIndex === 89) {
        explanation = `Erklärung:\n
        Mitglieder eines Entwicklerteams sind ausschließlich für Testarbeiten zuständig. Diese Tester erledigen alle Testarbeiten ihres Teams (Richtig): Dies beschreibt ein Szenario, in dem Entwickler auch als unabhängige Tester fungieren.\n\n
        Andere Optionen (Falsch): Diese Optionen beschreiben entweder eine zu enge oder zu weite Trennung zwischen Test- und Entwicklungsaufgaben.`;
    } else if (currentQuestionIndex === 90) {
        explanation = `Erklärung:\n
        Nicht benötigter Code, der standardmäßig um Mitternacht einen Alarm auslöst, wurde in die Software des Weckers mit aufgenommen (Richtig): Dies ist ein typischer Fehlerzustand, da der unnötige Code zu einem unerwarteten Verhalten führt.\n\n
        Andere Optionen (Falsch): Diese beschreiben entweder Ursachen für Fehlerzustände oder externe Faktoren, die nicht direkt als Fehlerzustand im Softwareprodukt angesehen werden können.`;
    }else if (currentQuestionIndex === 91) {
        explanation = `Erklärung:\n
        A3, B1, C2, D4 (Richtig): Diese Paarungen sind korrekt, da sie die Testaktivitäten und Testaufgaben richtig zuordnen.\n\n
        Andere Paarungen (Falsch): Diese Paarungen ordnen die Aufgaben den falschen Testaktivitäten zu.`;
    } else if (currentQuestionIndex === 92) {
        explanation = `Erklärung:\n
        Die Sicherstellung, dass alle Teilnehmer vorbereitet sind, um mit dem Review zu beginnen (Richtig): Dies ist das Hauptziel des Reviewbeginns, um sicherzustellen, dass das Review effizient durchgeführt werden kann.\n\n
        Andere Optionen (Falsch): Diese Aktivitäten gehören zu späteren Phasen des Reviewprozesses.`;
    } else if (currentQuestionIndex === 93) {
        explanation = `Erklärung:\n
        Alle definierten Testfälle für die Zahlungsabwicklung wurden erfolgreich ausgeführt (Richtig): Dies ist ein klares Endekriterium, das den Erfolg der Testphase definiert.\n\n
        Andere Optionen (Falsch): Diese Optionen beschreiben keine spezifischen Endekriterien für die Testphase.`;
    } else if (currentQuestionIndex === 94) {
        explanation = `Erklärung:\n
        Die Äquivalenzklassenbildung teilt Daten so in Klassen auf, dass alle Elemente einer vorgegebenen Klasse erwartungsgemäß in derselben Art und Weise verarbeitet werden (Richtig): Dies ist die korrekte Beschreibung der Äquivalenzklassenbildung.\n\n
        Andere Optionen (Falsch): Diese beschreiben andere Konzepte, die nicht direkt mit der Äquivalenzklassenbildung zusammenhängen.`;
    } else if (currentQuestionIndex === 95) {
        explanation = `Erklärung:\n
        Bei metriksbasierten Testschätzverfahren beruht die Schätzung des Testaufwands auf der Analyse von Metriken aus früheren Projekten (Richtig): Dies beschreibt korrekt, wie metriksbasierte Schätzungen durchgeführt werden.\n\n
        Andere Optionen (Falsch): Diese verwechseln die Methoden für expertenbasierte und metriksbasierte Schätzverfahren.`;
    } else if (currentQuestionIndex === 96) {
        explanation = `Erklärung:\n
        Ein Testkonzept kann die Testaktivitäten festlegen, die von den festgelegten Kriterien abweichen (Richtig): Diese Aussage ist falsch, da ein Testkonzept normalerweise keine Abweichungen von den festgelegten Kriterien erlaubt.\n\n
        Andere Optionen (Falsch): Diese Aussagen beschreiben korrekt die Funktionen eines Testkonzepts.`;
    } else if (currentQuestionIndex === 97) {
        explanation = `Erklärung:\n
        Testen zeigt das Vorhandensein, nicht die Abwesenheit von Fehlerzuständen (Richtig): Der Projektmanager hat diesen Grundsatz nicht beachtet, da er die Abwesenheit von Fehlerzuständen als Beweis für ein fehlerfreies System interpretiert.\n\n
        Andere Optionen (Falsch): Diese Optionen sind nicht so relevant wie der Grundsatz, der den Unterschied zwischen dem Vorhandensein und der Abwesenheit von Fehlerzuständen beschreibt.`;
    } else if (currentQuestionIndex === 98) {
        explanation = `Erklärung:\n
        Abnahmetest (Richtig): Dieser Test wird normalerweise in der Abnahmestufe durchgeführt, um die Einsatzbereitschaft eines Systems zu bewerten.\n\n
        Andere Optionen (Falsch): Diese Tests konzentrieren sich auf spezifischere Aspekte des Systems und nicht auf die Gesamteinsatzbereitschaft.`;
    } else if (currentQuestionIndex === 99) {
        explanation = `Erklärung:\n
        Smoke-Test (Richtig): Smoke-Tests sind kurze Testläufe, die sicherstellen, dass die grundlegendsten Funktionen eines Systems funktionieren, bevor es in die Produktion geht.\n\n
        Andere Optionen (Falsch): Diese Tests sind weniger geeignet, um in einem CI/CD-Prozess automatisiert durchgeführt zu werden.`;
    }
    else if (currentQuestionIndex === 100) {
        explanation = `Erklärung:\n
        Wenn der Programmcode nicht erreichbare Anweisungen enthält (Richtig): In Fällen, in denen der Code Anweisungen enthält, die unter keinen Umständen ausgeführt werden können, ist es unmöglich, eine vollständige Anweisungsüberdeckung zu erreichen. Solche Anweisungen werden nicht von Tests abgedeckt.\n\n
        Wenn der Programmcode lediglich eine IF-Anweisung enthält mit leerem ELSE-Teil (Falsch): Diese Situation beeinflusst die Zweigüberdeckung, aber nicht notwendigerweise die Anweisungsüberdeckung.\n\n
        Bei lediglich 25% Zweigüberdeckung (Falsch): Dies deutet auf eine geringe Abdeckung hin, schließt jedoch eine vollständige Anweisungsüberdeckung nicht aus.\n\n
        Wenn der Programmcode Kommentare enthält, die in einer IF-Bedingung vorkommen (Falsch): Kommentare werden nicht als Anweisungen betrachtet und beeinflussen die Anweisungsüberdeckung nicht.`;
    } else if (currentQuestionIndex === 101) {
        explanation = `Erklärung:\n
        2, 3, 5, 6, 7, 8 (Richtig): Diese Werte repräsentieren die genauen Grenzwerte der Äquivalenzklassen für die jeweilige Dauer des Angestelltenverhältnisses, die für eine vollständige Überdeckung notwendig sind.\n\n
        1, 2, 3, 4, 5, 6 (Falsch): Diese Reihe enthält unnötige Werte und fehlt einige wichtige Grenzwerte.\n\n
        3, 4, 5, 6, 7, 8 (Falsch): Hier fehlt der Grenzwert von 2 Jahren, der für eine vollständige Überdeckung erforderlich ist.\n\n
        1, 2, 3, 4, 6, 8 (Falsch): Diese Kombination enthält unnötige Werte und lässt wichtige Grenzwerte aus.`;
    } else if (currentQuestionIndex === 102) {
        explanation = `Erklärung:\n
        Es werden arbeitsteilige Teststufen unterschieden, wobei jede Stufe gegen ihre jeweilige Testbasis verifiziert wird (Richtig): Dies ist eine präzise Definition des V-Modells, bei dem die Entwicklung und das Testen auf verschiedenen Ebenen stattfinden, wobei jede Ebene gegen ihre spezifischen Anforderungen getestet wird.\n\n
        Die Festlegung der Anforderungen, der Entwurf, die Implementierung und das Testen des Systems erfolgt in Teilen (Falsch): Diese Beschreibung passt eher auf ein iteratives Modell als auf das V-Modell.\n\n
        Entwicklung und Test erfolgen in einer von vornherein geplanten Abfolge von Versionsständen und Zwischenlieferungen (Falsch): Diese Aussage beschreibt das inkrementelle Modell, nicht das V-Modell.\n\n
        Das Testen wird als separate Phase betrachtet und findet erst statt, nachdem alle Entwicklungsaktivitäten abgeschlossen sind (Falsch): Diese Beschreibung passt auf das Wasserfallmodell, nicht auf das V-Modell.`;
    } else if (currentQuestionIndex === 103) {
        explanation = `Erklärung:\n
        Stakeholdern ausreichende Informationen zur Verfügung stellen (Richtig): Dies ist das Hauptziel des Testens - sicherzustellen, dass Stakeholder fundierte Entscheidungen treffen können.\n\n
        Vorbereitung von Testdaten und Sicherstellung, dass sie ordnungsgemäß in die Testumgebung geladen sind (Falsch): Diese Aktivität ist ein Teilprozess, aber nicht das Hauptziel des Testens.\n\n
        Erstellen eines Testabschlussberichts (Falsch): Der Testabschlussbericht ist ein Ergebnis des Testprozesses, aber nicht das übergeordnete Ziel.\n\n
        Durchführung von Testaktivitäten nach den vorgegebenen Zeitplänen (Falsch): Obwohl wichtig, ist dies nicht das primäre Ziel des Testens.`;
    } else if (currentQuestionIndex === 104) {
        explanation = `Erklärung:\n
        Wenn jegliche Dokumente, die als Grundlage für die Erstellung der Testfälle heranzuziehen sind, von sehr schlechter Qualität, veraltet oder sogar gar nicht vorhanden sind (Richtig): Exploratives Testen ist ideal, wenn es keine oder nur unzureichende Dokumentation gibt. Tester können ihre Erfahrung und Intuition nutzen, um Testfälle spontan zu erstellen und durchzuführen.\n\n
        Wenn unter Zeitdruck die Durchführung bereits spezifizierter Tests beschleunigt werden muss (Falsch): Hier wäre es effektiver, spezifizierte Tests priorisiert und gezielt durchzuführen, anstatt explorativ zu testen.\n\n
        Wenn bereits ein sehr detailliertes Wissen über das Testsystem und die Anforderungen vorhanden ist (Falsch): In diesem Fall können gezielte Tests anhand der vorhandenen Dokumentation durchgeführt werden.\n\n
        Wenn das System inkrementell entwickelt wird und der Testprozess durch Werkzeuge unterstützt werden soll (Falsch): Exploratives Testen ist in dieser Situation weniger geeignet als strukturierte und automatisierte Tests.`;
    } else if (currentQuestionIndex === 105) {
        explanation = `Erklärung:\n
        Werden zwei Testfälle ausgeführt, so ist eine Anweisungsüberdeckung von 100% und eine Zweigüberdeckung von ungefähr 66% möglich (Richtig): In diesem Fall decken zwei Testfälle alle Anweisungen ab, aber nicht unbedingt alle möglichen Zweige der Bedingung.\n\n
        Werden zwei Testfälle ausgeführt, so ist eine Zweigüberdeckung von 100% und eine Anweisungsüberdeckung von ungefähr 66% gegeben (Falsch): Dies ist nicht korrekt, da eine vollständige Zweigüberdeckung nicht notwendigerweise alle Anweisungen abdeckt.\n\n
        Wird ein einziger Testfall ausgeführt, so ist eine Anweisungsüberdeckung von 100% und eine Zweigüberdeckung von ungefähr 50% gegeben (Falsch): Ein Testfall könnte nicht alle Zweige abdecken, daher wäre die Anweisungsüberdeckung möglicherweise nicht 100%.\n\n
        Wird ein einziger Testfall ausgeführt, so ist eine Anweisungsüberdeckung von 50% und eine Zweigüberdeckung von ungefähr 33% gegeben (Falsch): Diese Kombination ist nicht korrekt, da ein einziger Testfall normalerweise nicht so viele Zweige abdecken kann.`;
    } else if (currentQuestionIndex === 106) {
        explanation = `Erklärung:\n
        Testen bietet ein Mittel zur direkten Bewertung der Qualität eines Testobjekts in verschiedenen Phasen des Softwarelebenszyklus (Richtig): Testen ermöglicht es, die Qualität des Testobjekts zu bewerten, indem es in verschiedenen Phasen des Lebenszyklus durchgeführt wird, um sicherzustellen, dass das System die gewünschten Standards erfüllt.\n\n
        Durch Testen kann die Brauchbarkeit eines Systems nach den Vorstellungen und Erwartungen der Nutzer gezeigt werden (Falsch): Testen allein stellt die Brauchbarkeit nicht sicher, es zeigt eher, ob das System die Anforderungen erfüllt.\n\n
        Das Testen identifiziert alle möglichen Fehlerzustände und stellt so die bestmögliche Softwarequalität sicher (Falsch): Testen kann nicht alle möglichen Fehlerzustände identifizieren und somit nicht die bestmögliche Softwarequalität garantieren.\n\n
        Testen zeigt die Fehlerfreiheit eines Systems (Falsch): Testen kann zeigen, dass ein System Fehler hat, aber es kann nicht beweisen, dass es fehlerfrei ist.`;
    } else if (currentQuestionIndex === 107) {
        explanation = `Erklärung:\n
        Die Anweisungsüberdeckung ist ein Maß für den prozentualen Anteil aller ausführbaren Anweisungen im Quellcode, die durch den Test ausgeführt wurden (Richtig): Diese Definition beschreibt genau, was die Anweisungsüberdeckung misst - wie viel Prozent der Anweisungen im Code während des Tests tatsächlich ausgeführt wurden.\n\n
        Die Anweisungsüberdeckung ist ein Maß für die Anzahl aller Kommentare im Quellcode, die durch den Test ausgeführt wurden (Falsch): Kommentare werden nicht ausgeführt und zählen daher nicht zur Anweisungsüberdeckung.\n\n
        Die Anweisungsüberdeckung ist ein Maß für die Anzahl aller Anweisungen im Quellcode, die durch den Test ausgeführt wurden (Falsch): Diese Aussage ist teilweise korrekt, aber sie beschreibt nicht den prozentualen Anteil, der für die Anweisungsüberdeckung wichtig ist.\n\n
        Die Anweisungsüberdeckung ist ein Maß für den prozentualen Anteil aller Kommentare im Quellcode, die durch den Test ausgeführt wurden (Falsch): Kommentare sind nicht ausführbar und werden daher bei der Anweisungsüberdeckung nicht berücksichtigt.`;
    } else if (currentQuestionIndex === 108) {
        explanation = `Erklärung:\n
        Verfahren, welches die Erfahrung von Entwicklern, Testern und Benutzern nutzt, um Tests zu entwerfen (Richtig): Dieses Verfahren fällt unter die Kategorie der erfahrungsbasierten Testverfahren, bei denen das Wissen und die Intuition der Tester eine wichtige Rolle spielen.\n\n
        Verfahren, welches Testfälle aus einer Testbasis ableitet, die Code zur Struktur der Software enthalten kann (Falsch): Dies beschreibt eher strukturierte oder systematische Testverfahren, nicht erfahrungsbasierte.\n\n
        Verfahren, welches auf einer Analyse der zugehörigen Testbasis, wie z. B. formalen Anforderungsdokumenten, Spezifikationen, Anwendungsfällen oder User-Stories, basiert (Falsch): Diese Testmethoden basieren auf der Dokumentenanalyse und nicht auf der Erfahrung.\n\n
        Verfahren, welches auf einer Analyse der Architektur, dem Feinentwurf, der internen Struktur oder dem Code des Testobjekts basiert (Falsch): Dies ist ein Beispiel für white-box Testing und nicht für erfahrungsbasierte Verfahren.`;
    } else if (currentQuestionIndex === 109) {
        explanation = `Erklärung:\n
        Fähigkeiten, Schulungen und Mitarbeiter sind möglicherweise nicht ausreichend (Richtig): Dies beschreibt ein typisches Projektrisiko, bei dem Ressourcen wie Personal oder Schulungen möglicherweise nicht ausreichen, um die Projektziele zu erreichen.\n\n
        Die Software führt vielleicht nicht die gewünschten Funktionen gemäß ihrer Spezifikation aus (Falsch): Dies ist eher ein Produktrisiko, das auf eine potenzielle Fehlerhaftigkeit des Endprodukts hinweist.\n\n
        Eine Systemarchitektur könnte einige nicht-funktionale Anforderungen nicht angemessen unterstützen (Falsch): Dies ist auch ein Produktrisiko, das sich auf mögliche Probleme bei der Erfüllung der nicht-funktionalen Anforderungen bezieht.\n\n
        Sicherheitsschwachstellen gefährden persönliche Daten und Zahlungskonditionen von Kunden (Falsch): Dies beschreibt ebenfalls ein Produktrisiko, da es um die Sicherheit des Endprodukts geht.`;
    } else if (currentQuestionIndex === 110) {
        explanation = `Erklärung:\n
        Prüfe, ob die Darstellungsgröße von Präsentationen auf einem Monitor mit jeder der geforderten Bildschirmdiagonalen gewährleistet werden kann (4 Testfälle) (Richtig): Um eine vollständige Überdeckung der Äquivalenzklassen zu gewährleisten, müssen alle angegebenen Bildschirmdiagonalen getestet werden.\n\n
        Prüfe, ob die Darstellungsgröße von Präsentationen auf einem Monitor mit 65 Zoll Bildschirmdiagonale gewährleistet werden kann (1 Testfall) (Falsch): Ein einziger Testfall deckt nicht alle Äquivalenzklassen ab.\n\n
        Prüfe, ob die Darstellungsgröße von Präsentationen auf einem Monitor mit einer beliebigen Bildschirmdiagonale gewährleistet werden kann (1 Testfall) (Falsch): Ein einziger Testfall reicht nicht aus, um alle spezifischen Anforderungen abzudecken.\n\n
        Prüfe, ob die Darstellungsgröße von Präsentationen auf einem Monitor mit der kleinsten Bildschirmdiagonale (50 Zoll) und der größten Bildschirmdiagonale (65 Zoll) gewährleistet werden kann (2 Testfälle) (Falsch): Auch hier fehlen Testfälle für die anderen Bildschirmgrößen, um eine vollständige Abdeckung sicherzustellen.`;
    }else if (currentQuestionIndex === 111) {
        explanation = `Erklärung:\n
        Fähigkeiten, Schulungen und Mitarbeiter sind möglicherweise nicht ausreichend (Richtig): Dies beschreibt ein typisches Projektrisiko, das mit unzureichenden Ressourcen zu tun hat und das den Fortschritt oder den Erfolg des Projekts gefährden könnte.\n\n
        Die Software führt vielleicht nicht die gewünschten Funktionen gemäß ihrer Spezifikation aus (Falsch): Dies ist eher ein Produktrisiko, da es sich auf die Erfüllung der Spezifikationen durch das Endprodukt bezieht.\n\n
        Eine Systemarchitektur könnte einige nicht-funktionale Anforderungen nicht angemessen unterstützen (Falsch): Dies ist auch ein Produktrisiko, das auf mögliche Schwächen in der Architektur hinweist.\n\n
        Sicherheitsschwachstellen gefährden persönliche Daten und Zahlungskonditionen von Kunden (Falsch): Dies beschreibt ein Produktrisiko im Bereich der Sicherheit.`;
    } else if (currentQuestionIndex === 112) {
        explanation = `Erklärung:\n
        Funktionale Tests testen das Verhalten, welches das System oder Systemteile erbringen müssen, während nicht-funktionale Tests Attribute des funktionalen Verhaltens testen, also wie gut bzw. mit welcher Qualität das System seine Funktion erbringen soll (Richtig): Diese Definition gibt korrekt den Unterschied zwischen funktionalen und nicht-funktionalen Tests wieder.\n\n
        Funktionale Tests sollten überwiegend in Komponententests durchgeführt werden, während nicht-funktionale Tests in allen Teststufen durchgeführt werden sollten (Falsch): Diese Aussage ist irreführend, da beide Testarten in verschiedenen Stufen eingesetzt werden können.\n\n
        Nicht-funktionale Tests sollten überwiegend in Komponententests durchgeführt werden, während funktionale Tests in allen Teststufen durchgeführt werden sollten (Falsch): Diese Aussage verdreht die Tatsachen, da nicht-funktionale Tests häufig auch in späteren Testphasen wichtig sind.\n\n
        Nicht-funktionale Tests testen das Verhalten, welches das System oder Systemteile erbringen müssen, während funktionale Tests Attribute des funktionalen Verhaltens testen, also wie gut bzw. mit welcher Qualität das System seine Funktion erbringen soll (Falsch): Diese Aussage ist ebenfalls falsch, da sie die Definitionen von funktionalen und nicht-funktionalen Tests vertauscht.`;
    } else if (currentQuestionIndex === 113) {
        explanation = `Erklärung:\n
        Zu starkes Vertrauen in ein Werkzeug (Richtig): Dies ist ein potenzielles Risiko der Testautomatisierung, da das blinde Vertrauen in ein Werkzeug zu einer unzureichenden Testabdeckung oder anderen Problemen führen kann.\n\n
        Vermeidung einfacher menschlicher Fehlhandlungen durch größere Konsistenz (Falsch): Dies ist eher ein Vorteil der Testautomatisierung.\n\n
        Verminderung der objektiven Bewertung (z. B. Überdeckung) (Falsch): Dies beschreibt kein direktes Risiko, sondern könnte in bestimmten Kontexten als eine mögliche Nebenwirkung diskutiert werden, ist aber hier nicht korrekt.\n\n
        Es könnte die für manuelles Testen zugewiesene Zeit reduzieren (Falsch): Auch dies beschreibt keinen direkten Nachteil der Automatisierung, sondern könnte als Vorteil oder Kontextabhängigkeit angesehen werden.`;
    } else if (currentQuestionIndex === 114) {
        explanation = `Erklärung:\n
        Testen nachvollziehbarer zu machen (Richtig): Gute Verfolgbarkeit ermöglicht es, den Testprozess besser zu verstehen und die Testergebnisse zu interpretieren.\n\n
        Identifizierung der Infrastruktur (Falsch): Dies ist eher eine Aufgabe des Konfigurationsmanagements oder der Testumgebungsplanung.\n\n
        Entwurf der Testumgebung (Falsch): Der Entwurf der Testumgebung ist ebenfalls keine direkte Folge einer guten Verfolgbarkeit.\n\n
        Erkennen notwendiger Testdaten (Falsch): Dies ist eine spezifische Aufgabe des Testdatenmanagements und nicht der Verfolgbarkeit.`;
    } else if (currentQuestionIndex === 115) {
        explanation = `Erklärung:\n
        Testelemente sind eindeutig identifiziert, versionskontrolliert, werden in ihren Änderungen nachverfolgt und stehen in Verbindung zueinander (Richtig): Dies ist eine zentrale Aufgabe des Konfigurationsmanagements und unterstützt den Testprozess erheblich.\n\n
        Fehleranalysen sind erleichtert, weil unbekannt ist, wo und warum der Quellcode einer Komponente gegenüber der Vorversion geändert wurde (Falsch): Diese Aussage ist falsch, da das Gegenteil der Fall ist. Das Konfigurationsmanagement soll genau diese Nachverfolgbarkeit sicherstellen.\n\n
        Entwickler überschreiben gegenseitig ihre am Quellcode oder anderen Dokumenten vorgenommenen Modifikationen (Falsch): Dies ist ein Problem, das durch schlechtes Konfigurationsmanagement entstehen kann, aber nicht durch gutes Konfigurationsmanagement unterstützt wird.\n\n
        Testfälle können dem zugehörigen Tester eindeutig zugeordnet werden (Falsch): Dies ist keine Hauptaufgabe des Konfigurationsmanagements, sondern könnte eher dem Testmanagement zugeordnet werden.`;
    }else if(currentQuestionIndex === 116) {
        explanation = `Erklärung:\n
        A3, B1, C4, D2 (Richtig): Diese Zuordnung ist korrekt. Ein Testfall (A) enthält die erwarteten Ergebnisse und Nachbedingungen (3). Ein Testskript (B) ist eine Abfolge von Anweisungen für die Durchführung eines Tests (1). Eine Test-Charta (C) dokumentiert die Testaktivitäten im sitzungsbasierten explorativen Testen (4). Eine Testsuite (D) ist eine Menge von Testfällen oder Testskripten, die in einem bestimmten Testzyklus ausgeführt werden sollen (2).\n\n
        A3, B2, C4, D1 (Falsch): Diese Zuordnung vertauscht die Beschreibungen für Testsuite und Testskript.\n\n
        A3, B1, C2, D4 (Falsch): Diese Zuordnung vertauscht die Beschreibungen für Test-Charta und Testsuite.\n\n
        A1, B3, C4, D2 (Falsch): Diese Zuordnung vertauscht die Beschreibungen für Testfall und Testsuite.`;
    } else if (currentQuestionIndex === 117) {
        explanation = `Erklärung:\n
        Technisches Review (Richtig): Ein technisches Review wird durchgeführt, um Anomalien aufzudecken, die Qualität zu bewerten und Vertrauen aufzubauen. Es wird von technisch qualifizierten Gutachtern durchgeführt und von einem Moderator geleitet.\n\n
        Walkthrough (Falsch): Ein Walkthrough ist in der Regel weniger formal und dient mehr der Kommunikation und Schulung als der Aufdeckung von Anomalien.\n\n
        Inspektion (Falsch): Eine Inspektion ist eine formale Überprüfung, die sehr strukturiert ist und spezifische Rollen und Regeln hat, jedoch nicht primär darauf abzielt, Autoren zu motivieren.\n\n
        Informelles Review (Falsch): Ein informelles Review ist in der Regel nicht formal organisiert und hat nicht die Ziele, die hier beschrieben werden.`;
    } else if (currentQuestionIndex === 118) {
        explanation = `Erklärung:\n
        Reviewleiter (Richtig): Der Reviewleiter ist verantwortlich für die Organisation und Durchführung des Reviews. Er entscheidet, wer am Review beteiligt wird und legt fest, wann und wo es stattfindet.\n\n
        Protokollant (Falsch): Der Protokollant dokumentiert die während des Reviews identifizierten Anomalien, aber er identifiziert keine potenziellen Fehlerzustände.\n\n
        Autor (Falsch): Der Autor ist in der Regel die Person, die das zu überprüfende Arbeitsergebnis erstellt hat, und ist nicht für die Planung des Reviews verantwortlich.\n\n
        Gutachter (Falsch): Der Gutachter überprüft das Arbeitsergebnis und gibt Feedback, stellt aber keine Ressourcen für das Review zur Verfügung.`;
    } else if (currentQuestionIndex === 119) {
        explanation = `Erklärung:\n
        Treffen einer Entscheidung über ihren Status, ihre Verantwortlichkeit und die erforderlichen Maßnahmen für jede Anomalie (Richtig): Dies ist eine wichtige Aufgabe in der Phase "Kommunikation und Analyse" im Reviewprozess. Hier werden Anomalien besprochen und Entscheidungen über das weitere Vorgehen getroffen.\n\n
        Die Festlegung der Endekriterien für das Review (Falsch): Dies ist eine Aufgabe, die zu einem früheren Zeitpunkt im Reviewprozess erledigt wird.\n\n
        Die Erstellung von Fehlerberichten für jeden identifizierten Fehlerzustand (Falsch): Dies könnte Teil der Dokumentation des Reviews sein, fällt aber nicht direkt unter die Kommunikation und Analyse.\n\n
        Die Festlegung des Umfangs des Reviews (Falsch): Diese Aufgabe gehört zur Planungsphase des Reviews.`;
    } else if (currentQuestionIndex === 120) {
        explanation = `Erklärung:\n
        Die Aussage ist wahr. Bei einem einzelnen Testfall ist der Entscheidungs¬ausgang der IF-Anweisung entweder "wahr" oder "falsch" (Richtig): Diese Aussage ist korrekt, weil der Zweigtest sicherstellt, dass beide möglichen Ausgänge der IF-Anweisung (wahr und falsch) getestet werden.\n\n
        Die Aussage ist falsch. Bei einem einzelnen Testfall ist der Entscheidungs¬ausgang der IF-Anweisung "wahr" und damit mindestens 50% abgedeckt (Falsch): Diese Aussage ist irreführend, da nicht klar ist, dass auch der andere Zweig (falsch) getestet werden muss, um 100% Zweigüberdeckung zu erreichen.\n\n
        Die Aussage ist wahr. Bei einem einzelnen Testfall ist der Entscheidungs¬ausgang der IF-Anweisung "wahr" und damit mindestens 50% abgedeckt (Falsch): Auch diese Aussage ist nicht korrekt, da der "falsch"-Zweig nicht abgedeckt ist.\n\n
        Die Aussage ist falsch. Bei einem einzelnen Testfall kann nur eine Zweigüber¬deckung von 25% garantiert werden (Falsch): Diese Aussage ist falsch, weil eine IF-Anweisung zwei Zweige hat, die entweder "wahr" oder "falsch" sind, und jeder Zweig entspricht 50% Zweigüberdeckung.`;
    } else if (currentQuestionIndex === 121) {
        explanation = `Erklärung:\n
        Gründlichkeit und Detailgenauigkeit (Richtig): Diese Kompetenz ist entscheidend, um auch schwer auffindbare Fehlerzustände zu entdecken, da sie eine sorgfältige und genaue Untersuchung des Testobjekts ermöglicht.\n\n
        Technische Kenntnisse (Falsch): Technische Kenntnisse sind wichtig, aber sie allein garantieren nicht das Auffinden schwer erkennbarer Fehlerzustände.\n\n
        Testwissen (Falsch): Allgemeines Testwissen ist nützlich, aber ohne die nötige Gründlichkeit können Fehlerzustände übersehen werden.\n\n
        Gute Kommunikationsfähigkeit (Falsch): Kommunikation ist wichtig für das Teilen von Informationen, hilft jedoch nicht direkt beim Erkennen von Fehlerzuständen.`;
    } else if (currentQuestionIndex === 122) {
        explanation = `Erklärung:\n
        Die Produktrisikoanalyse stellt sicher, dass risikoreiche Produktteile intensiver und früher getestet werden als risikoärmere (Richtig): Diese Aussage beschreibt genau, wie die Produktrisikoanalyse den Fokus und die Prioritätensetzung im Testprozess beeinflusst.\n\n
        Die Produktrisikoanalyse stellt sicher, dass Fehlerzustände im Entwicklertest identifiziert und behoben werden (Falsch): Dies ist eher eine allgemeine Testaufgabe und keine spezifische Rolle der Produktrisikoanalyse.\n\n
        Die Produktrisikoanalyse stellt sicher, dass alle verfügbaren Testverfahren genutzt werden, um alle Fehlerzustände aufzudecken (Falsch): Die Auswahl der Testverfahren basiert nicht nur auf der Risikoanalyse, sondern auch auf anderen Faktoren.\n\n
        Die Produktrisikoanalyse stellt sicher, dass risikoarme Produktteile aufgrund von Zeitdruck nicht getestet werden (Falsch): Dies ist keine Zielsetzung der Produktrisikoanalyse.`;
    } else if (currentQuestionIndex === 123) {
        explanation = `Erklärung:\n
        Prüfen, ob das Testobjekt vollständig ist und validieren, dass alle möglichen Fehlerzustände identifiziert wurden (Falsch): Dies ist kein realistisches Ziel, da es unmöglich ist, alle Fehlerzustände in einem System zu identifizieren.\n\n
        Verifizieren, ob alle spezifischen Anforderungen erfüllt sind (Richtig): Dies ist ein legitimes Ziel des Testens und hilft, die Erfüllung der Anforderungen sicherzustellen.\n\n
        Fehlerwirkungen und Fehlerzustände aufdecken, wodurch man Risiken aufgrund einer unzureichenden Softwarequalität reduziert (Richtig): Ein Hauptziel des Testens ist es, Fehler aufzudecken, um die Qualität des Produkts zu gewährleisten.\n\n
        Stakeholdern ausreichende Informationen zur Verfügung stellen, damit diese fundierte Entscheidungen treffen können, insbesondere bezüglich des Qualitätsniveaus des Testobjekts (Richtig): Dies ist ein weiteres wichtiges Ziel des Testens.`;
    } else if (currentQuestionIndex === 124) {
        explanation = `Erklärung:\n
        Um die schnelle Rückmeldung und umfangreiche Regressionstests zu ermöglichen (Richtig): In iterativen und inkrementellen Entwicklungsmodellen ist es wichtig, schnell Feedback zu erhalten und Regressionstests durchzuführen, um sicherzustellen, dass neue Änderungen keine bestehenden Funktionen beeinträchtigen.\n\n
        Um die Testabdeckung zu maximieren (Falsch): Während dies ein Vorteil sein kann, ist es nicht der Hauptgrund, den Testprozess an den SDLC anzupassen.\n\n
        Testaktivitäten sollten im Softwareentwicklungslebenszyklus nach den Entwicklungstätigkeiten beginnen (Falsch): Dies ist im iterativen Modell nicht korrekt, da Testen oft parallel zur Entwicklung erfolgt.\n\n
        Um die dynamischen Tests auf frühere Teststufen zu verschieben (Falsch): Dies ist nicht das Hauptziel, wenn es darum geht, Tests an den SDLC anzupassen.`;
    } else if (currentQuestionIndex === 125) {
        explanation = `Erklärung:\n
        White-Box-Tests (Richtig): White-Box-Tests leiten ihre Testfälle direkt aus der internen Struktur oder der Implementierung des Systems ab und sind somit die korrekte Antwort.\n\n
        Nicht-funktionale Tests (Falsch): Diese Tests konzentrieren sich auf die Eigenschaften des Systems, wie Leistung und Sicherheit, nicht jedoch auf die interne Struktur.\n\n
        Änderungsbezogenes Testen (Falsch): Diese Tests konzentrieren sich auf die Überprüfung von Änderungen im System und können sowohl funktionale als auch nicht-funktionale Tests umfassen.\n\n
        Funktionale Tests (Falsch): Diese Tests konzentrieren sich auf das erwartete Verhalten des Systems aus der Sicht des Benutzers und berücksichtigen nicht die interne Struktur oder Implementierung.`;
    } else if (currentQuestionIndex === 126) {
        explanation = `Erklärung:\n
        Unit-Tests, Service-Tests, UI-Tests (Richtig): Diese Antwort beschreibt die Testpyramide korrekt. In dieser Struktur gibt es eine breite Basis an Unit-Tests, eine mittlere Schicht von Service-Tests (oder Integrationstests), und eine schmale Spitze mit UI-Tests (End-to-End-Tests).\n\n
        Unit-Tests, End-To-End-Tests, Integrationstests (Falsch): Diese Reihenfolge ist nicht korrekt, da Integrationstests üblicherweise in der Mitte der Pyramide liegen sollten.\n\n
        Systemtests, Integrationstests, Unit-Tests (Falsch): Diese Antwort beschreibt die Pyramide von oben nach unten, was der konventionellen Reihenfolge widerspricht.\n\n
        Integrationstests, Unit-Tests, End-To-End-Tests (Falsch): Diese Reihenfolge spiegelt nicht die Testpyramide wider, da Unit-Tests die Basis bilden sollten.`;
    } else if (currentQuestionIndex === 127) {
        explanation = `Erklärung:\n
        Finden von Fehlerwirkungen durch Ausführen des Testobjekts (Richtig): Diese Aussage ist korrekt, da statische Tests, wie Reviews oder Analysen, keine Ausführung des Testobjekts beinhalten und somit auch keine Fehlerwirkungen finden können.\n\n
        Verbesserte Kommunikation zwischen Teammitgliedern durch die Teilnahme an Reviews (Falsch): Reviews fördern tatsächlich die Kommunikation zwischen den Teammitgliedern.\n\n
        Reduzieren von Entwicklungs- und Testkosten (Falsch): Statische Tests tragen dazu bei, die Gesamtkosten zu senken, indem sie Fehler frühzeitig finden.\n\n
        Aufdeckung von Fehlerzuständen in den frühesten Phasen des SDLC (Falsch): Einer der größten Vorteile von statischen Tests ist die Möglichkeit, Fehlerzustände frühzeitig zu finden.`;
    } else if (currentQuestionIndex === 128) {
        explanation = `Erklärung:\n
        TF3 - TF4 - TF2 - TF1 - TF6 - TF5 (Richtig): Diese Testreihenfolge berücksichtigt sowohl die Prioritäten als auch die technischen und logischen Abhängigkeiten zwischen den Testfällen optimal.\n\n
        TF4 - TF3 - TF2 - TF1 - TF5 - TF6 (Falsch): Diese Reihenfolge ignoriert einige logische Abhängigkeiten und ist daher nicht optimal.\n\n
        TF4 - TF3 - TF1 - TF6 - TF2 - TF5 (Falsch): Diese Reihenfolge ignoriert sowohl Prioritäten als auch Abhängigkeiten in einigen Fällen.\n\n
        TF3 - TF4 - TF1 - TF6 - TF2 - TF5 (Falsch): Diese Reihenfolge ist der optimalen nahe, vernachlässigt jedoch einige logische Abhängigkeiten.`;
    } else if (currentQuestionIndex === 129) {
        explanation = `Erklärung:\n
        Farben von Autos aus den Kategorien Grün, Blau, Rot und Schwarz (Richtig): Diese Antwort beschreibt keine geeigneten Daten für eine Grenzwertanalyse, da Farben keine Grenzwerte haben.\n\n
        Ganze Zahlen im Bereich von 1 bis 100 (Falsch): Zahlen haben klare Grenzwerte, die für eine Grenzwertanalyse geeignet sind.\n\n
        Letzte Ziffer von Telefonnummern (Falsch): Auch hier können Grenzwerte sinnvoll definiert werden.\n\n
        Alphabetisch geordnete Anfangsbuchstaben von Vornamen (Falsch): Obwohl Grenzwerte schwerer zu definieren sind, sind sie dennoch in gewissem Maße möglich.`;
    } else if (currentQuestionIndex === 130) {
        explanation = `Erklärung:\n
        12 Personentage (Richtig): Diese Schätzung wurde unter Anwendung der Dreipunktschätztechnik korrekt berechnet: (3 + 4*11 + 25) / 6 = 12.\n\n
        16 Personentage (Falsch): Diese Schätzung ist zu hoch und berücksichtigt nicht die richtige Gewichtung der Schätzungen.\n\n
        14 Personentage (Falsch): Auch diese Schätzung ist zu hoch und basiert möglicherweise auf einer falschen Annahme.\n\n
        10 Personentage (Falsch): Diese Schätzung ist zu niedrig und ignoriert die pessimistische Schätzung.`;
    } else if (currentQuestionIndex === 131) {
        explanation = `Erklärung:\n
        Um den Grundsatz des frühen Testens zu erfüllen (Richtig): Diese Antwort betont die Wichtigkeit des frühen Testens, das dazu beiträgt, Fehler frühzeitig zu identifizieren und zu beheben, was zu einer Kostenreduktion und einer höheren Qualität führt.\n\n
        Um Tester in das Review von Arbeitsergebnissen einzubeziehen (Falsch): Obwohl das Einbeziehen von Testern in Reviews wichtig ist, ist dies nicht der Hauptgrund für das frühzeitige Beginnen mit Testanalyse und Testentwurf.\n\n
        Um Redundanzen in den Testzielen zu vermeiden (Falsch): Redundanzen zu vermeiden ist wichtig, aber nicht der primäre Grund für das frühe Testen.\n\n
        Um sicherzustellen, dass alle Entwicklungsaktivitäten der Qualitätssteuerung unterliegen (Falsch): Dies ist eher ein allgemeines Ziel, hat aber keinen direkten Bezug zum frühen Testen.`;
    } else if (currentQuestionIndex === 132) {
        explanation = `Erklärung:\n
        D1, C2, B3, A4 (Richtig): Diese Kombination ordnet die Aktivitäten den passenden Werkzeugen korrekt zu. DevOps-Werkzeuge unterstützen die Automatisierung des Build-Prozesses (D1), Testdateneditoren und -generatoren unterstützen den Testentwurf und die Realisierung (C2), statische Analysewerkzeuge unterstützen statische Tests (B3), und Konfigurationsmanagementwerkzeuge unterstützen das Management des Testens und der Testmittel (A4).\n\n
        A1, C2, D3, B4 (Falsch): Diese Kombination ordnet die Werkzeuge den falschen Aktivitäten zu.\n\n
        D1, C2, A3, B4 (Falsch): Diese Kombination ist ebenfalls nicht korrekt.\n\n
        A1, C2, B3, D4 (Falsch): Diese Kombination ordnet die Aktivitäten den Werkzeugen nicht korrekt zu.`;
    } else if (currentQuestionIndex === 133) {
        explanation = `Erklärung:\n
        Schätzung des Testaufwands und der Kosten (Richtig): Dies ist eine grundlegende Aktivität in der initialen Testplanung, um sicherzustellen, dass der Testprozess effizient und innerhalb des Budgets durchgeführt werden kann.\n\n
        Testprotokolle (Falsch): Testprotokolle sind wichtig, aber sie werden typischerweise später im Testprozess verwendet und sind nicht Teil der initialen Testplanung.\n\n
        Anzahl der Testfälle (Falsch): Die Anzahl der Testfälle kann während der Planung geschätzt werden, ist aber nicht so entscheidend wie die Aufwandsschätzung.\n\n
        Schulung des Entwicklerteams (Falsch): Dies ist eine wichtige Aktivität, aber keine direkte Komponente der Testplanung.`;
    } else if (currentQuestionIndex === 134) {
        explanation = `Erklärung:\n
        Ein Testansatz, bei dem die Tests dynamisch entworfen und ausgeführt werden, basierend auf dem Wissen, der Erkundung des Testelements und den Ergebnissen früherer Tests (Richtig): Dies beschreibt am besten exploratives Testen, das auf einer adaptiven, dynamischen und erfahrungsbasierten Testmethode basiert.\n\n
        Testen, das auf der Erfahrung, dem Wissen und der Intuition des Testers basiert (Falsch): Dies ist zwar teilweise korrekt, beschreibt aber nicht das dynamische und adaptive Element des explorativen Testens.\n\n
        Ein skriptbasiertes Verfahren, das Dateien mit Testdaten und erwarteten Ergebnissen beinhaltet (Falsch): Dies beschreibt eher ein traditionelles, vordefiniertes Testverfahren, nicht exploratives Testen.\n\n
        Testvorgehensweise in einem Projekt mit agiler Softwareentwicklung (Falsch): Dies beschreibt allgemeine Praktiken in agilen Projekten, nicht explizit exploratives Testen.`;
    } else if (currentQuestionIndex === 135) {
        explanation = `Erklärung:\n
        Um potenzielle Qualitätsprobleme frühzeitig zu kommunizieren und Missverständnisse über Anforderungen zu verhindern (Richtig): Diese Aussage beschreibt, warum häufiges Feedback wichtig ist, um sicherzustellen, dass das Produkt den Anforderungen entspricht und Qualitätsprobleme frühzeitig erkannt und behoben werden können.\n\n
        Um die Kommunikation zwischen Testern und Entwicklern zu verbessern (Falsch): Dies ist zwar ein positiver Nebeneffekt, aber nicht das primäre Ziel des häufigen Feedbacks.\n\n
        Um sicherzustellen, dass das Entwicklungsteam unabhängig von den Stakeholdern arbeitet (Falsch): Dies ist nicht korrekt, da enge Zusammenarbeit und regelmäßiges Feedback im SDLC angestrebt werden sollten.\n\n
        Um das Entwicklungsteam zu kontrollieren und Schuldzuweisungen zu vermeiden (Falsch): Diese Aussage reflektiert nicht das Ziel von Feedback, das darauf abzielt, die Zusammenarbeit zu verbessern und Qualitätsziele zu erreichen.`;
    } else if (currentQuestionIndex === 136) {
        explanation = `Erklärung:\n
        Erstellen -> Leer -> Gefüllt -> Gefüllt -> Leer -> Leer -> Gefüllt -> Voll -> Voll -> Gefüllt -> Leer -> Gefüllt -> Leer -> Löschen (Richtig): Diese Sequenz deckt alle möglichen Zustandsübergänge im Zustandsdiagramm ab und erreicht somit die höchste Überdeckung.\n\n
        Erstellen -> Leer -> Gefüllt -> Gefüllt -> Leer -> Leer -> Gefüllt -> Voll -> Voll -> Gefüllt -> Leer -> Löschen (Falsch): Diese Sequenz erreicht nicht die gleiche Abdeckung, da einige Zustandsübergänge fehlen.\n\n
        Erstellen -> Leer -> Gefüllt -> Gefüllt -> Voll -> Gefüllt -> Leer -> Gefüllt -> Voll -> Voll -> Gefüllt -> Leer -> Löschen (Falsch): Auch hier fehlen einige Zustandsübergänge, die für eine vollständige Abdeckung notwendig wären.\n\n
        Erstellen -> Leer -> Gefüllt -> Gefüllt -> Voll -> Gefüllt -> Leer -> Gefüllt -> Voll -> Voll -> Gefüllt -> Voll -> Voll (Falsch): Diese Sequenz endet in einem Zustand ohne vollständige Abdeckung der Zustandsübergänge.`;
    } else if (currentQuestionIndex === 137) {
        explanation = `Erklärung:\n
        TF4, TF5 (Richtig): Diese Testfälle ergänzen TF1 und TF2 so, dass alle Regeln der Entscheidungstabelle abgedeckt werden, was zu einer 100%igen Überdeckung führt.\n\n
        TF3, TF6 (Falsch): Diese Kombination deckt nicht alle Regeln der Entscheidungstabelle ab.\n\n
        TF5, TF6 (Falsch): Auch diese Kombination erreicht keine vollständige Abdeckung.\n\n
        TF3, TF4 (Falsch): Diese Kombination führt ebenfalls nicht zu einer 100%igen Überdeckung.`;
    } else if (currentQuestionIndex === 138) {
        explanation = `Erklärung:\n
        Tests nutzen sich ab (Richtig): Dieser Grundsatz besagt, dass die Wiederverwendung der gleichen Tests über längere Zeiträume zu einer geringeren Anzahl gefundener Fehler führen kann, da das Testobjekt stabiler wird und sich die Testfälle nicht mehr auf neue, bisher unbekannte Fehler konzentrieren.\n\n
        Testen ist kontextabhängig (Falsch): Dies bezieht sich auf die Anpassung des Testprozesses an den spezifischen Kontext des Projekts, ist aber hier nicht relevant.\n\n
        Fehlerzustände treten gehäuft auf (Falsch): Dieser Grundsatz besagt, dass Fehler in Clustern auftreten, ist jedoch nicht der Grundsatz, der hier nicht beachtet wurde.\n\n
        Vollständiges Testen ist unmöglich (Falsch): Obwohl dies ein wichtiger Grundsatz ist, beschreibt er nicht das Problem, das der Tester in diesem Szenario hatte.`;
    } else if (currentQuestionIndex === 139) {
        explanation = `Erklärung:\n
        Die Risikostufe wird bestimmt durch eine Kombination der Wahrscheinlichkeit eines unerwünschten Ereignisses und der erwarteten Auswirkung dieses Ereignisses (Richtig): Diese Definition beschreibt die Risikostufe korrekt, indem sie sowohl die Wahrscheinlichkeit des Eintretens als auch die Auswirkungen des Ereignisses berücksichtigt.\n\n
        Die Risikostufe wird berechnet, indem die Wahrscheinlichkeiten aller Problemsituationen und der daraus resultierende finanzielle Schaden addiert werden (Falsch): Dies beschreibt die Risikobewertung nicht korrekt.\n\n
        Die Risikostufe wird geschätzt, indem die Wahrscheinlichkeit einer Bedrohung des Systems multipliziert wird mit der Wahrscheinlichkeit, dass die Bedrohung auftritt und finanzielle Schäden verursacht (Falsch): Dies ist ebenfalls keine korrekte Beschreibung der Risikostufe.\n\n
        Die Risikostufe ist die Summe aller potenziellen Gefahren für ein System multipliziert mit der Summe aller potenziellen Verluste aus diesem System (Falsch): Auch diese Aussage beschreibt nicht korrekt, wie die Risikostufe bestimmt wird.`;
    } else if (currentQuestionIndex === 140) {
        explanation = `Erklärung:\n
        Wasserfallmodell (Richtig): Dieses Modell beschreibt den Softwareentwicklungsprozess als einen linearen, sequentiellen Ablauf von Aktivitäten.\n\n
        Rational Unified Process (Falsch): Dies ist ein iteratives Entwicklungsmodell und kein linearer, sequentieller Ablauf.\n\n
        Kanban (Falsch): Kanban ist ein flexibles, inkrementelles Entwicklungsmodell und kein linearer, sequentieller Ablauf.\n\n
        Scrum (Falsch): Scrum ist ebenfalls ein iteratives, inkrementelles Modell und kein linearer, sequentieller Ablauf.`;
    }else if (currentQuestionIndex === 141) {
        explanation = `Erklärung:\n
        Die Verwendung eines unabhängigen Testteams kann zusätzliche und andere Fehler als die Entwickler finden, da sie objektiver arbeiten. Zusätzlich können sie implizite Annahmen, die in der Spezifikation oder bei der Programmierung getroffen wurden, kritisch hinterfragen. (Richtig): Unabhängige Tester haben oft eine andere Perspektive und können Fehler finden, die dem Entwicklungsteam möglicherweise entgangen sind.\n\n
        Die Verwendung eines unabhängigen Testteams erlaubt dem Projektmanagement die Verantwortung für die Qualität des finalen Arbeitsergebnisses auf das Testteam zu übertragen. Somit ist jedem bewusst, dass die Qualität in der Gesamtverantwortung des Testteams liegt. (Falsch): Die Verantwortung für die Qualität liegt immer noch beim gesamten Team, nicht nur beim Testteam.\n\n
        Die Verwendung eines unabhängigen Testteams erlaubt dem Projektmanagement das Einsparen von Entwicklerressourcen, da jegliche Entwicklertests durch das unabhängige Testteam durchgeführt werden können. (Falsch): Entwicklertests sollten weiterhin durchgeführt werden, um die Qualität zu gewährleisten.\n\n
        Die Verwendung eines unabhängigen Testteams erlaubt dem Projektmanagement den kompletten Testprozess auf das Testteam zu übertragen. Somit kann das Testteam völlig unabhängig von den Entwicklern arbeiten und die Entwickler werden nicht durch Tests abgelenkt. (Falsch): Zusammenarbeit zwischen Testern und Entwicklern ist weiterhin wichtig, um ein qualitativ hochwertiges Produkt zu liefern.`;
    } else if (currentQuestionIndex === 142) {
        explanation = `Erklärung:\n
        Inspektionen werden von einem geschulten Moderator geleitet, während Walkthroughs üblicherweise vom Autor des Arbeitsergebnisses geleitet werden. (Richtig): Diese Aussage trifft zu, da bei Inspektionen ein Moderator die Kontrolle hat, während bei Walkthroughs der Autor des Dokuments die Führung übernimmt.\n\n
        Walkthroughs folgen einem definierten Prozess mit formalen dokumentierten Ergebnissen, während Inspektionen von recht informell bis hin zu sehr formal variieren können. (Falsch): Diese Aussage ist nicht korrekt, da es genau umgekehrt ist: Inspektionen sind formeller und haben definierte Prozesse, während Walkthroughs informeller sein können.\n\n
        Walkthroughs sind klar durch festgelegte Eingangs- und Endekriterien definiert, während Inspektionen ohne Eingangs- und Endekriterien durchgeführt werden können. (Falsch): Inspektionen haben definierte Eingangs- und Endekriterien, was sie von Walkthroughs unterscheidet.\n\n
        Sowohl bei Inspektionen als auch bei Walkthroughs ist ein Protokollant, welcher nicht der Autor des Arbeitsergebnisses ist, unerlässlich, um die Ergebnisse des Reviews zu dokumentieren. (Falsch): Dies ist eher bei Inspektionen der Fall, während es bei Walkthroughs weniger formal sein kann.`;
    } else if (currentQuestionIndex === 143) {
        explanation = `Erklärung:\n
        Werkzeugunterstütztes Testen (Richtig): Dies beschreibt den Einsatz von Tools, um den Testprozess zu unterstützen, und ist keine Methode, die auf Intuition oder Erfahrung des Testers basiert.\n\n
        Intuitive Testfallermittlung (Falsch): Diese Methode nutzt die Intuition und Erfahrung des Testers zur Identifizierung relevanter Testfälle.\n\n
        Exploratives Testen (Falsch): Bei dieser Methode entwirft der Tester Tests dynamisch auf Basis von Wissen, Erfahrung und den Ergebnissen früherer Tests.\n\n
        Checklistenbasiertes Testen (Falsch): Diese Methode nutzt Checklisten, die auf Erfahrungen und Wissen basieren, um sicherzustellen, dass alle relevanten Bereiche getestet werden.`;
    } else if (currentQuestionIndex === 144) {
        explanation = `Erklärung:\n
        0€, 14999€, 15001€, 21000€, 29000€ (Richtig): Diese Eingabewerte decken die relevanten Äquivalenzklassen vollständig ab und sorgen somit für eine optimale Testabdeckung.\n\n
        15000€, 15001€, 20001€, 24999€, 99999€ (Falsch): Diese Werte decken nicht alle relevanten Äquivalenzklassen ab.\n\n
        0€, 500€, 20000€, 30000€, 40000€ (Falsch): Diese Gruppe deckt die entscheidenden Grenzwerte nicht optimal ab.\n\n
        0€, 15000€, 15001€, 19999€, 24001€ (Falsch): Auch hier wird nicht die beste Abdeckung der Äquivalenzklassen erreicht.`;
    } else if (currentQuestionIndex === 145) {
        explanation = `Erklärung:\n
        Verfahren, welches auf einer Analyse der zugehörigen Testbasis, wie z. B. formalen Anforderungsdokumenten, Spezifikationen, Anwendungsfällen oder User-Stories, basiert. (Richtig): Dieses Verfahren gehört zu den Black-Box-Testverfahren, da es auf der Analyse der Testbasis ohne Rücksicht auf die interne Struktur der Software basiert.\n\n
        Verfahren, welches auf einer Analyse der Architektur, dem Feinentwurf, der internen Struktur oder dem Code des Testobjekts basiert. (Falsch): Dies ist ein White-Box-Testverfahren, da es die interne Struktur der Software berücksichtigt.\n\n
        Verfahren, welches die Erfahrung von Entwicklern, Testern und Benutzern nutzt, um Tests zu entwerfen. (Falsch): Dies ist ein erfahrungsbasiertes Verfahren, das nicht spezifisch für Black-Box-Tests ist.\n\n
        Verfahren, welches Testfälle aus einer Testbasis ableitet, die Code zur Struktur der Software enthalten kann. (Falsch): Auch dies bezieht sich auf White-Box-Testverfahren.`;
    }else if (currentQuestionIndex === 146) {
        explanation = `Erklärung:\n
        Nicht gründliches Testen (Richtig): Dies ist keine typische Ursache für die Entstehung einer Fehlhandlung, sondern eher eine Folge oder ein Fehler im Testprozess selbst.\n\n
        Zeitdruck (Falsch): Zeitdruck ist eine häufige Ursache für Fehlhandlungen, da er oft zu überhasteten Entscheidungen und mangelnder Sorgfalt führt.\n\n
        Falsche Verwendung von Programmanforderungen (Falsch): Wenn Anforderungen missverstanden oder falsch angewendet werden, führt dies oft zu Fehlhandlungen.\n\n
        Missverständnisse über systeminterne und systemübergreifende Schnittstellen (Falsch): Solche Missverständnisse sind typische Ursachen für Fehler in der Softwareentwicklung.`;
    } else if (currentQuestionIndex === 147) {
        explanation = `Erklärung:\n
        Die Grenzwertanalyse kann nur genutzt werden, wenn die Klasse geordnet ist und aus numerischen oder sequentiellen Daten besteht. Die Minimum- und Maximum-Werte einer Klasse sind dann ihre Grenzwerte. (Richtig): Diese Aussage beschreibt korrekt die Anwendbarkeit der Grenzwertanalyse auf geordnete Klassen.\n\n
        Die Grenzwertanalyse ist sinnvoll, um komplexe Regeln in Geschäftsprozessen zu erfassen, die ein System umzusetzen hat. Testbedingungen sollten dabei systematisch in einer Tabelle dargestellt werden. (Falsch): Diese Beschreibung trifft eher auf Entscheidungstabellentests zu, nicht auf die Grenzwertanalyse.\n\n
        Die Grenzwertanalyse zeigt einerseits alle möglichen Softwarezustände selbst und andererseits auch, wie die Software in diesen Zustand eintritt, austritt und zwischen den Zuständen wechselt. (Falsch): Diese Aussage passt besser zu Zustandsübergangstests.\n\n
        Die Grenzwertanalyse teilt Daten so in Klassen auf, dass alle Elemente einer vorgegebenen Klasse erwartungsgemäß in derselben Art und Weise verarbeitet werden. (Falsch): Dies ist eine Beschreibung der Äquivalenzklassenbildung.`;
    } else if (currentQuestionIndex === 148) {
        explanation = `Erklärung:\n
        Risikoanalyse, Testbarkeitsbewertung, Aufteilung von User Storys in Aufgaben, Schätzung des Testaufwands, Identifizierung und Verfeinerung von funktionalen und nicht-funktionalen Testaspekten (Richtig): Diese Aktivitäten sind die wichtigsten Beiträge, die Tester zur Iterationsplanung in einem iterativen Softwareentwicklungslebenszyklus leisten.\n\n
        Erstellung Testkonzept über alle Iterationen, Risikoanalyse, Aufteilung User Storys in Aufgaben, Identifizierung und Verfeinerung von funktionalen und nicht-funktionalen Testaspekten, Testbarkeitsbewertung (Falsch): Diese Beschreibung umfasst einige der richtigen Aktivitäten, beinhaltet jedoch nicht alle notwendigen Punkte.\n\n
        Definition des Produkt-Backlogs, Verfeinerung größerer User Storys in eine Reihe kleinerer User Storys, Erstellung Testkonzept über alle Iterationen, Erstellung testbarer User Storys und Abnahmekriterien, Beteiligung an Projekt- und Qualitätsrisikoanalysen (Falsch): Diese Beschreibung enthält Aktivitäten, die eher in den Bereich des Produktmanagements fallen.\n\n
        Schätzung des Testaufwands, Aufteilung User Storys in Aufgaben, Definition des Produkt-Backlogs, Beteiligung an Projekt- und Qualitätsrisikoanalysen, Testbarkeitsbewertung (Falsch): Diese Aktivitäten decken nicht vollständig die typischen Beiträge von Testern zur Iterationsplanung ab.`;
    } else if (currentQuestionIndex === 149) {
        explanation = `Erklärung:\n
        Zweigtest (Richtig): Der Zweigtest gehört zu den White-Box-Testverfahren, da er auf der internen Struktur des Codes basiert.\n\n
        Zustandsübergangstest (Falsch): Dieser Testtyp gehört zu den Black-Box-Verfahren, da er das externe Verhalten des Systems anhand von Zustandsübergängen prüft.\n\n
        Äquivalenzklassenbildung (Falsch): Diese Methode gehört zu den Black-Box-Testverfahren, da sie Testfälle ohne Rücksicht auf die interne Struktur des Codes definiert.\n\n
        Entscheidungstabellentest (Falsch): Auch dieser Testtyp ist ein Black-Box-Testverfahren, da er sich auf die Geschäftslogik und nicht auf die interne Code-Struktur konzentriert.`;
    } else if (currentQuestionIndex === 150) {
        explanation = `Erklärung:\n
        Statische Tests helfen Fehlerzustände in Arbeitsergebnissen direkt zu finden, während dynamische Tests erst die Fehlwirkungen identifizieren, die durch Fehlerzustände beim Ausführen des Testobjekts entstehen. (Richtig): Diese Beschreibung zeigt den grundlegenden Unterschied zwischen den beiden Testarten.\n\n
        Typische Fehlerzustände wie Anforderungsfehler lassen sich am besten durch dynamische Tests erkennen, während Entwurfs- und Programmierfehler leichter durch statische Analysen gefunden werden können. (Falsch): Diese Aussage stimmt nicht, da dynamische Tests in der Regel die Fehlwirkungen identifizieren, nicht die Fehlerzustände selbst.\n\n
        Statische und dynamische Tests schließen sich gegenseitig eher aus, da sie die gleichen Fehlerbilder aufdecken. (Falsch): Beide Testarten ergänzen sich und decken unterschiedliche Fehlerbilder auf.\n\n
        Statische Tests konzentrieren sich in der Regel auf extern sichtbares Verhalten, während dynamische Tests typischerweise genutzt werden, um die Konsistenz und interne Qualität der Arbeitsergebnisse zu verbessern. (Falsch): Das externe Verhalten wird eher durch dynamische Tests überprüft, während statische Tests sich auf das Überprüfen der Dokumentation und des Codes konzentrieren.`;
    } else if (currentQuestionIndex === 151) {
        explanation = `Erklärung:\n
        Gründliches Testen von Komponenten oder Systemen und ihrer zugehörigen Dokumentation kann dabei helfen, das Risiko von Fehlerwirkungen zu reduzieren, die während des Betriebs auftreten können. (Richtig): Diese Aussage beschreibt die Notwendigkeit des Testens, um potenzielle Fehlerwirkungen zu minimieren.\n\n
        Durch Schulung des Entwicklerteams kann die Softwarequalität auch ohne Testen jederzeit sichergestellt werden. (Falsch): Schulungen allein reichen nicht aus, um Fehler zu vermeiden. Testen ist unerlässlich.\n\n
        Das Testen identifiziert alle möglichen Fehlerzustände und stellt so die bestmögliche Softwarequalität sicher. (Falsch): Testen kann viele Fehler finden, aber niemals alle. Es reduziert das Risiko, aber garantiert keine absolute Fehlerfreiheit.\n\n
        Das Testen von Software dient durch die Behebung von Fehlerzuständen zur Steigerung der Softwarequalität, sodass vertragliche oder rechtliche Anforderungen oder branchenspezifische Standards erfüllt werden. (Falsch): Diese Aussage verallgemeinert den Zweck des Testens und beschreibt es eher als Mittel zur Einhaltung von Standards.`;
    } else if (currentQuestionIndex === 152) {
        explanation = `Erklärung:\n
        Ausarbeitung der Testbedingungen zu Testfällen und anderen Testmitteln (z. B. Test-Charts). (Richtig): Dies ist eine zentrale Aktivität im Testentwurf.\n\n
        Erstellung oder Beschaffung der für die Testdurchführung erforderlichen Testmittel (z. B. Testdaten). (Falsch): Dies gehört zur Testrealisierung, nicht zum Testentwurf.\n\n
        Vergleich der Istergebnisse mit den erwarteten Ergebnissen. (Falsch): Dies ist Teil der Testdurchführung und nicht des Testentwurfs.\n\n
        Analyse der Testbasis, um testbare Merkmale zu identifizieren und die zugehörigen Testbedingungen zu bestimmen und zu priorisieren, zusammen mit den damit verbundenen Risiken und Risikostufen. (Falsch): Dies gehört zur Testanalyse und nicht direkt zum Testentwurf.`;
    } else if (currentQuestionIndex === 153) {
        explanation = `Erklärung:\n
        100% Zweigüberdeckung schließt 100% Anweisungsüberdeckung ein. (Richtig): Wenn alle Zweige eines Programms getestet wurden, wurden automatisch auch alle Anweisungen ausgeführt, was zu 100% Anweisungsüberdeckung führt.\n\n
        100% Anweisungsüberdeckung schließt 100% Zweigüberdeckung ein. (Falsch): Anweisungsüberdeckung kann erreicht werden, ohne dass alle Zweige getestet werden, daher ist diese Aussage falsch.\n\n
        Anweisungsüberdeckung kann nie 100% erreichen. (Falsch): Es ist durchaus möglich, 100% Anweisungsüberdeckung zu erreichen, daher ist diese Aussage falsch.\n\n
        Zweigüberdeckung kann nie 100% erreichen. (Falsch): Auch Zweigüberdeckung kann 100% erreichen, daher ist diese Aussage ebenfalls falsch.`;
    } else if (currentQuestionIndex === 154) {
        explanation = `Erklärung:\n
        Eine gute User Story sollte unabhängig, verhandelbar, nützlich, schätzbar, klein und testbar sein. Wenn ein Stakeholder nicht weiß, wie er eine User Story testen soll, könnte dies darauf hindeuten, dass die User Story nicht klar genug ist oder für ihn keinen erkennbaren Mehrwert darstellt. (Richtig): Diese Antwort beschreibt die Merkmale einer guten User Story nach dem INVEST-Prinzip korrekt und interpretiert, was es bedeutet, wenn eine User Story nicht testbar ist.\n\n
        Eine gute User Story sollte unabhängig, umfassend, technisch anspruchsvoll und detailliert sein. Wenn ein Stakeholder nicht weiß, wie er eine User Story testen soll, bedeutet dies, dass die Testabdeckung nicht ausreichend ist. (Falsch): Diese Aussage beschreibt nicht das INVEST-Prinzip und zieht falsche Schlussfolgerungen zur Testbarkeit.\n\n
        Eine gute User Story sollte vom Product Owner ohne Rücksicht auf technische Machbarkeit erstellt werden. Wenn ein Stakeholder nicht weiß, wie er eine User Story testen soll, bedeutet dies, dass er zu wenig technisches Wissen hat. (Falsch): Diese Antwort ignoriert die Bedeutung der Testbarkeit und technischen Machbarkeit.\n\n
        Eine gute User Story sollte von Entwicklern und Testern erstellt werden, ohne Beteiligung von Stakeholdern. Wenn ein Stakeholder nicht weiß, wie er eine User Story testen soll, liegt dies an mangelnder Schulung. (Falsch): Diese Antwort widerspricht dem agilen Prinzip der Zusammenarbeit mit Stakeholdern und verkennt die Bedeutung der Testbarkeit.`;
    } else if (currentQuestionIndex === 155) {
        explanation = `Erklärung:\n
        Wenn beim Fehlen detaillierter Testfälle ein bestimmtes Maß an Konsistenz geliefert werden soll. (Richtig): Checklistenbasiertes Testen ist besonders geeignet, wenn detaillierte Testfälle fehlen und dennoch eine gewisse Konsistenz erreicht werden soll.\n\n
        Wenn bereits spezifizierte Testfälle durch zusätzliche Anforderungen erweitert werden sollen. (Falsch): Hier ist das checklistenbasierte Testen nicht die beste Methode; besser wäre es, bestehende Testfälle zu ergänzen.\n\n
        Wenn unter Zeitdruck die Durchführung bereits spezifizierter Tests beschleunigt werden muss. (Falsch): In solchen Fällen sollten eher bestehende Testfälle verwendet werden.\n\n
        Wenn inkrementelle Software entwickelt und genauer spezifiziert werden soll. (Falsch): Für solche Situationen wäre eher ein anderer, wie z. B. exploratives Testen, Ansatz geeignet.`;
    } else if (currentQuestionIndex === 156) {
        explanation = `Erklärung:\n
        Während Debugging das Ziel hat, Fehlerzustände zu lokalisieren und zu beheben, ist es Aufgabe des Tests, Fehlerwirkungen gezielt und systematisch aufzudecken. (Richtig): Diese Antwort beschreibt korrekt die Unterschiede zwischen Testen und Debugging.\n\n
        Während Testen das Ziel hat, Fehlerzustände zu lokalisieren und zu beheben, ist es Aufgabe des Debuggings, Fehlerwirkungen gezielt und systematisch aufzudecken. (Falsch): Diese Antwort vertauscht die Definitionen von Testen und Debugging.\n\n
        Debugging kann Fehlerwirkungen aufzeigen und verhindern, die durch Fehlerzustände in der Software hervorgerufen werden. Durch vorheriges Testen des Entwicklerteams können Fehlerzustände in der Software frühzeitig vermieden werden. (Falsch): Diese Aussage vermischt die Rollen von Testen und Debugging.\n\n
        Testen kann Fehlerwirkungen aufzeigen und verhindern, die durch Fehlerzustände in der Software hervorgerufen werden. Durch vorheriges Debugging des Entwicklerteams können Fehlerzustände in der Software frühzeitig vermieden werden. (Falsch): Diese Aussage vertauscht die Reihenfolge und Rollen von Testen und Debugging.`;
    } else if (currentQuestionIndex === 157) {
        explanation = `Erklärung:\n
        Anzahl der ausgeführten/nicht ausgeführten Testfälle (Richtig): Diese Metrik gibt direkten Aufschluss darüber, wie weit der Testprozess fortgeschritten ist und hilft, die gegenwärtige Qualität des Testobjekts zu beurteilen.\n\n
        Prozentsatz des Budgets für externes Fachpersonal (Falsch): Diese Metrik ist nicht direkt mit der Qualität des Testobjekts verbunden.\n\n
        Anzahl der Anforderungen, die in das Design und den Entwurf des Testobjekts einfließen (Falsch): Diese Metrik hilft nicht bei der direkten Bewertung der Testqualität.\n\n
        Anzahl und Prioritäten der gefundenen/behobenen Fehlerzustände im letzten Projekt (Falsch): Diese Metrik gibt Aufschluss über vergangene Projekte, nicht über die aktuelle Testqualität.`;
    } else if (currentQuestionIndex === 158) {
        explanation = `Erklärung:\n
        Notfallplan (Richtig): Ein Notfallplan ist eine typische Reaktion auf Risiken, bei denen der Schadenseintritt wahrscheinlich ist, wie in der Frage beschrieben.\n\n
        Risikominderung durch Testen (Falsch): Während Testen zur Risikominderung beiträgt, wird in diesem Fall ein Plan entwickelt, um die Auswirkungen von Abstürzen zu minimieren.\n\n
        Risikoakzeptanz (Falsch): Risikoakzeptanz bedeutet, das Risiko ohne Gegenmaßnahmen in Kauf zu nehmen, was hier nicht der Fall ist.\n\n
        Risikotransfer (Falsch): Risikotransfer bedeutet, das Risiko an eine andere Partei abzugeben, was hier nicht beschrieben wird.`;
    }
    
    
    
    
    

    explanationElement.innerText = explanation;
});

// Add event listeners for next and previous buttons
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        prevButton.disabled = false; // Enable the "Vorherige Frage" button
    } else {
        alert('Du hast alle Fragen beantwortet!');
        startQuiz();
    }

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.disabled = true; // Disable the "Nächste Frage" button if it's the last question
    }
});

prevButton.addEventListener('click', () => {
    currentQuestionIndex--;
    if (currentQuestionIndex >= 0) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.disabled = false; // Enable the "Nächste Frage" button
    }

    if (currentQuestionIndex === 0) {
        prevButton.disabled = true; // Disable the "Vorherige Frage" button if it's the first question
    }
});

startQuiz();