data_condition = [
   {
        title: "Betäubt",
        icon: "betaeubt",
        subtitle: "Du bist betäubt",
        description: "Wenn du den Zustand Betäubt hast, wirken folgende Effekte auf dich:",
        reference: "PHB 2024",
        bullets: [
        "<em><strong>Kampfunfähig:</strong></em> Du hast den Zustand <i>Kampfunfähig</i>.",
	    "<em><strong>Beeinträchtigte Rettungswürfe:</strong></em> Du scheiterst bei Stärke- und Geschicklichkeitsrettungswürfen automatisch.",
	    "<em><strong>Beeinträchtigte Angriffe:</strong></em> Angriffswürfe gegen dich sind im Vorteil.",     
        ]
    },
    {
        title: "Bewusstlos",
        icon: "bewusstlos",
        subtitle: "Du bist bewusstlos",
        description: "Wenn du den Zustand Bewusstlos hast, wirken folgende Effekte auf dich:",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Inert:</strong></em> Du hast die Zustände Kampfunfähig und Liegend, und du lässt fallen, was immer du gehalten hast. Wenn dieser Zustand endet, bist du weiterhin liegend.",
            "<em><strong>Keine Bewegungsrate:</strong></em> Deine Bewegungsrate beträgt 0 und kann nicht erhöht werden.",
            "<em><strong>Beeinträchtigte Angriffe:</strong></em> Angriffswürfe gegen dich sind im Vorteil.",
	        "<em><strong>Beeinträchtigte Rettungswürfe:</strong></em> Du scheiterst bei Stärke- und Geschicklichkeitsrettungswürfen automatisch.",
            "<em><strong>Automatische kritische Treffer:</strong></em> Jeder Angriffswurf, der dich trifft, ist ein kritischer Treffer, sofern der Angreifer sich im Abstand von bis zu 1,5 Metern von dir befindet.",
	        "<em><strong>Ohne Bewusstsein:</strong></em> Du nimmst deine Umgebung nicht wahr.",
        ]
    },
    {
        title: "Bezaubert",
        icon: "bezaubert",
        subtitle: "Du bist bezaubert",
        description: "Wenn du den Zustand Bezaubert hast, wirken folgende Effekte auf dich:",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Kein Schaden am Zauberwirker:</strong></em> Du kannst den Zauberwirker weder angreifen noch als Ziel schädigender Fähigkeiten und magischer Effekte auswählen.",
	        "<em><strong>Sozialer Vorteil:</strong></em> Der Zauberwirker ist bei Attributswürfen, die soziale Interaktionen mit dir betreffen, im Vorteil."
        ]
    },
    {
        title: "Blind",
        icon: "blind",
        subtitle: "Du kannst nicht sehen",
        description: "Wenn du den Zustand Blind hast, wirken folgende Effekte auf dich:",
        reference: "PHB 2014",
        bullets: [
            "<em><strong>Nicht sehfähig:</strong></em> Eine blinde Kreatur kann nicht sehen, und jeder Attributswurf, der Sicht erfordert, scheitert automatisch.",
	        "<em><strong>Beeinträchtigte Angriffe:</strong></em> Angriffswürfe gegen dich sind im Vorteil, und deine Angriffswürfe sind im Nachteil.",
        ]
    },
    {
        title: "Erschöpft",
        icon: "erschoepfung",
        subtitle: "Du bist erschöpft",
        description: "Wenn du den Zustand Erschöpft hast, wirken folgende Effekte auf dich:",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Erschöpfungsstufen:</strong></em> Dieses Zustand ist kumulativ. Wann immer du ihn erleidest, erhältst du eine Erschöpfungsstufe. Wenn du sechs Erschöpfungsstufen hast, stirbst du.",
	    "<em><strong>Beeinträchtigte W20-Prüfungen:</strong></em> Wenn du eine W20-Prüfung ausführst, ist das Ergebnis um einen Betrag in doppelter Höhe deiner Erschöpfungsstufen verringert.",
	    "<em><strong>Verringerte Bewegungsrate:</strong></em> Deine Bewegungsrate ist um eine Anzahl von Metern in Höhe des 1,5-Fachen deiner Erschöpfungsstufe verringert.",
	    "<em><strong>Erschöpfungsstufen entfernen:</strong></em> Wenn du eine Long Rest abschließt, wird eine deiner Erschöpfungsstufen entfernt. Sobald du keine Erschöpfungsstufen mehr hast, endet der Zustand.",
        ]
    },
    {
        title: "Festgesetzt",
        icon: "festgesetzt",
        subtitle: "Du bist festgesetzt",
        description: "Wenn du den Zustand Festgesetzt hast, wirken folgende Effekte auf dich:",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Keine Bewegungsrate:</strong></em> Deine Bewegungsrate beträgt 0 und kann nicht erhöht werden.",
            "<em><strong>Beeinträchtigte Angriffe:</strong></em> Angriffswürfe gegen dich sind im Vorteil, und deine Angriffswürfe sind im Nachteil.",
            "<em><strong>Beeinträchtigte Rettungswürfe:</strong></em> Du bist bei Geschicklichkeitsrettungswürfen im Nachteil."
        ]
    },
    {
        title: "Gelähmt",
        icon: "gelaehmt",
        subtitle: "Du bist gelähmt",
        description: "Wenn du den Zustand Gelähmt hast, wirken folgende Effekte auf dich:",
		reference: "PHB 2024",
        bullets: [
            "<em><strong>Kampfunfähig:</strong></em> Du hast den Zustand Kampfunfähig.",
	    "<em><strong>Keine Bewegungsrate:</strong></em> Deine Bewegungsrate beträgt 0 und kann nicht erhöht werden.",
            "<em><strong>Beeinträchtigte Rettungswürfe:</strong></em> Du scheiterst bei Stärke-und Geschicklichkeitsrettungswürfen automatisch.",
            "<em><strong>Beeinträchtigte Angriffe:</strong></em> Angriffswürfe gegen dich sind im Vorteil.",
			"<em><strong>Automatische kritische Treffer:</strong></em> Jeder Angriffswurf, der dich trifft, ist ein kritischer Treffer, sofern der Angreifer sich im Abstand von bis zu 1,5 Metern von dir befindet."
        ]
    },
    {
        title: "Gepackt",
        icon: "gepackt",
        subtitle: "Geschwindigkeit 0",
        description: "Wenn du den Zustand Gepackt hast, wirken folgende Effekte auf dich:",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Keine Bewegungsrate:</strong></em> Deine Bewegungsrate beträgt 0 und kann nicht erhöht werden.",
	        "<em><strong>Beeinträchtigte Angriffe:</strong></em> Du bist bei Angriffswürfen gegen alle Ziele außer der Kreatur, die dich gepackt hält, im Nachteil.",
            "<em><strong>Beweglich:</strong></em> Die Kreatur, die dich gepackt hält, kann dich ziehen oder tragen, wenn sie sich bewegt. Allerdings kostet sie dies doppelt so viel Bewegung, sofern du nicht winzig oder um mindestens zwei Kategorien kleiner als sie bist."
        ]
    },
    {
        title: "Kampfunfähig",
        icon: "kampfunfaehig",
        subtitle: "Weder Aktion, Bonusaktion noch Reaktion",
        description: "Wenn du den Zustand Kampfunfähig hast, wirken folgende Effekte auf dich:",
        reference: "PHB 2024",
        bullets: [
		"<em><strong>Inaktiv:</strong></em> Du kannst keine Aktionen, Bonusaktionen oder Reaktionen ausführen.",
		"<em><strong>Keine Konzentration:</strong></em> Deine Konzentration ist unterbrochen.",
		"<em><strong>Stumm:</strong></em> Du kannst nicht sprechen.",
		"<em><strong>Überrascht:</strong></em> Wenn du beim Auswürfeln der Initiative kampfunfähig bist, so bist du bei diesem Wurf im Nachteil."
        ]
    },
    {
        title: "Liegend",
        icon: "liegend",
        subtitle: "Du liegst",
        description: "Wenn du den Zustand Liegend hast, wirken folgende Effekte auf dich:",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Eingeschränkte Bewegung:</strong></em> Deine einzigen Bewegungsmöglichkeiten bestehen darin, dich entweder liegend zu bewegen (zu kriechen) oder Bewegung in Höhe der Hälfte deiner Bewegungsrate (abgerundet) zu verbrauchen, um aufzustehen und den Zustand damit zu beenden. Wenn deine Bewegungsrate 0 beträgt, kannst du nicht aufstehen.",
	    "<em><strong>Beeinträchtigte Angriffe:</strong></em> Du bist bei Angriffswürfen im Nachteil. Angriffswürfe gegen dich sind im Vorteil, wenn der Angreifer sich im Abstand von bis zu 1,5 Metern von dir befindet. Anderenfalls sind Angriffswürfe gegen dich im Nachteil."
        ]
    },
    {
        title: "Taub",
        icon: "taub",
        subtitle: "Du kannst nicht hören",
        description: "Wenn du den Zustand Taub hast, wirkt folgender Effekt auf dich:",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Nicht hörfähig:</strong></em> Du kannst nicht hören, und jeder Attributswurf, der Hörvermögen erfordert, scheitert automatisch."
        ]
    },
    {
        title: "Unsichtbar",
        icon: "invisible",
        subtitle: "Du wirst nicht gesehen",
        description: "Wenn du den Zustand Unsichtbar hast, wirken folgende Effekte auf dich:",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Überraschung:</strong></em> Wenn du beim Auswürfeln der Initiative unsichtbar bist, so bist du bei diesem Wurf im Vorteil.",
	        "<em><strong>Verborgen:</strong></em> Du bist nicht von Effekten betroffen, die erfordern, dass du gesehen wirst, sofern der Effektwirker keine Möglichkeiten hat, dich trotz deiner Unsichtbarkeit zu sehen. Ausrüstung, die du trägst oder hältst, ist ebenfalls verborgen.",
            "<em><strong>Beeinträchtigte Angriffe:</strong></em> Angriffswürfe gegen dich sind im Nachteil, und deine Angriffswürfe sind im Vorteil. Wenn eine Kreatur Möglichkeiten hat, dich trotz deiner Unsichtbarkeit zu sehen, erhältst du diesen Vorzug gegen diese Kreatur nicht."
        ]
    },
    {
        title: "Verängstigt",
        icon: "veraengstigt",
        subtitle: "Du hast Angst",
        description: "Wenn du den Zustand Verängstigt hast, wirken folgende Effekte auf dich:",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Beeinträchtigte Attributs- und Angriffswürfe:</strong></em> Du bist bei Attributs- und Angriffswürfen im Nachteil, solange du dich in der Sichtlinie der Quelle deiner Furcht befindest.",
	        "<em><strong>Keine Annäherung möglich:</strong></em> Du kannst dich nicht willentlich auf die Quelle deiner Furcht zubewegen.",
        ]
    },
    {
        title: "Vergiftet",
        icon: "vergiftet",
        subtitle: "Du bist vergiftet",
        description: "Wenn du den Zustand Vergiftet hast, wirkt folgender Effekt auf dich:",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Beeinträchtigte Attributs- und Angriffswürfe:</strong></em> Du bist bei Angriffs- und Attributswürfen im Nachteil.",
        ]
    },
    {
        title: "Versteinert",
        icon: "versteinert",
        subtitle: "Du wirst zu Stein",
        description: "Wenn du den Zustand Versteinert hast, wirken folgende Effekte auf dich:",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>In unbelebte Substanz verwandelt:</strong></em> Du wirst mit allen nichtmagischen Gegenständen, die du trägst oder hältst, in eine massive unbelebte Substanz (normalerweise Stein) verwandelt. Dein Gewicht erhöht sich auf das Zehnfache, und du hörst auf zu altern.",
	        "<em><strong>Kampfunfähig:</strong></em> Du hast den Zustand Kampfunfähig.",
            "<em><strong>Keine Bewegungsrate:</strong></em> Deine Bewegungsrate beträgt 0 und kann nicht erhöht werden.",
            "<em><strong>Beeinträchtigte Angriffe:</strong></em> Angriffswürfe gegen dich sind im Vorteil.",
            "<em><strong>Beeinträchtigte Rettungswürfe:</strong></em> Du scheiterst bei Stärke-und Geschicklichkeitsrettungswürfen automatisch.",
            "<em><strong>Resistenz gegen Schaden:</strong></em> Du bist gegen alle Schadensarten resistent.",
	        "<em><strong>Immunität gegen Gift:</strong></em> Du bist gegen den Zustand Vergiftet immun."
        ]
    },
    {
        title: "Blutig",
        icon: "blutig",
        subtitle: "Du bist verwundet",
        description: "Wunden zieren deinen Körper und du blutest",
        reference: "PHB 2024",
        bullets: [
            "Eine Kreatur ist blutig, solange sie höchstens die Hälfte ihrer Trefferpunkte hat.",
        ]
    },
    {
        title: "Konzentration",
        icon: "konzentration",
        subtitle: "Du konzentrierst dich",
        description: " ",
        reference: "PHB 2024",
        bullets: [
            "Manche Zauber und andere Effekte erfordern Konzentration, um aktiv zu bleiben. Dies ist in ihrer Beschreibung angegeben. Wenn der Wirker des Effekts seine Konzentration verliert, endet der Effekt. Hat der Effekt eine maximale Wirkungsdauer, so ist in der Beschreibung des Effekts angegeben, wie lange der Wirker sich auf ihn konzentrieren kann: „bis zu 1 Minute“, „1 Stunde“ oder eine andere Dauer. Der Wirker kann seine Konzentration jederzeit beenden - dazu ist keine Aktion erforderlich.<br>Folgende Faktoren stören oder beenden die Konzentration:",
            "<em><strong>Weiterer Effekt, der Konzentration erfordert:</strong></em> Du verlierst die Konzentration auf einen Effekt, sobald du einen Zauber oder sonstigen Effekt wirkst, der ebenfalls Konzentration erfordert..",
            "<em><strong>Schaden:</strong></em> Wenn du Schaden erleidest, musst du einen Konstitutionsrettungswurf bestehen, um die Konzentration aufrechtzuerhalten. Der SG beträgt 10 oder die Hälfte des erlittenen Schadens (abgerundet), je nachdem, welcher Wert höher ist. Er kann höchstens 30 betragen.",
	        "<em><strong>Kampfunfähig oder tot:</strong></em> Deine Konzentration endet, wenn du Kampfunfähig wirst oder stirbst."
        ]
    },
    {
        title: "Stabilisiert",
        icon: "stabil",
        subtitle: "Du bist Stabil",
        description: " ",
        reference: "PHB 2024",
        bullets: [
            "Eine Stabile Kreatur muss keine Todesrettungswürfe ausführen, obwohl sie keine Trefferpunkte hat. Sie bleibt allerdings <i>bewusstlos</i>. Wenn die Kreatur schaden erleidet, ist sie nicht mehr stabil und muss wieder Todesrettungswürfe ausführen. Eine stabile Kreatur, die nicht geheilt wird, erhält nach 1W4 Stunden 1 Trefferpunkit zurück.",
        ]
    },
    {
        title: "Auf 0 Trefferpunkte sinken",
        icon: "tod",
        subtitle: "Du stirbst",
        description: "Wenn die Trefferpunkte einer Kreatur auf 0 sinken, stirbt sie wie nachfolgend erläutert entweder sofort, oder sie wird bewusstlos:",
        reference: "SHB 2024, Seite 28",
        bullets: [
            "<h3>Sofortiger Tod</h3><p>Dies sind die häufigsten Gründe, dass eine Kreatur augenblicklich stirbt:</p><p><em><strong>Trefferpunktemaximum von 0:</strong></em> Eine Kreatur stirbt, wenn ihr Trefferpunktemaximum auf 0 sinkt. Bestimmte Effekte entziehen einer Kreatur Lebensenergie und verringern so ihr Trefferpunktemaximum.</p><p><em><strong>Massiver Schaden:</strong></em> Sinken die Trefferpunkte eines Charakters durch Schaden auf 0, und es ist noch Schaden übrig, so stirbt der Charakter sofort, falls der verbleibende Schaden seinem Trefferpunktemaximum entspricht oder es übersteigt.</p>",
            "<h3>Das Bewusstsein verlieren</h3><p>Wenn deine Trefferpunkte auf 0 sinken, du aber nicht sofort stirbst, hast du den Zustand Bewusstlos , bis du Trefferpunkte zurückerhältst, und musst nun Todesrettungswürfe ausführen.</p>",
            "<h3>Todesrettungswürfe</h3><p>Wann immer du deinen Zug mit 0 Trefferpunkten beginnst, musst du einen Todesrettungswurf ausführen, um zu ermitteln, ob du dich dem Tod näherst oder am Leben bleibst. Im Gegensatz zu anderen Rettungswürfen steht dieser mit keinem Attributswert in Verbindung. Du bist nun in den Händen des Schicksals.</p><p><em><strong>Drei Erfolge/Misserfolge:</strong></em> Würfle mit 1W20. Wenn das Ergebnis mindestens 10 beträgt, ist der Wurf erfolgreich. Anderenfalls scheitert der Wurf. Ein Erfolg oder Misserfolg hat einzeln keinen Effekt. Bei deinem dritten Erfolg wirst du stabilisiert. Bei deinem dritten Misserfolg stirbst du.</p><p>Die Erfolge und Misserfolge müssen nicht aufeinanderfolgen. Notiere einfach beide, bis du von einem drei hast. Beide Zahlen werden auf 0 zurückgesetzt, wenn du Trefferpunkte zurückerhältst oder stabilisiert wirst.</p><p><em><strong>Eine 1 oder eine 20 würfeln:</strong></em> Wenn du bei einemTodesrettungswurf mit dem W20 eine 1 würfelst, erleidest du zwei Misserfolge. Würfelst du dagegen eine 20, so erhältst du 1 Trefferpunkt zurück.</p><p><em><strong>Schaden bei 0 Trefferpunkten:</strong></em> Wenn du mit 0 Trefferpunkten Schaden erleidest, zählt dies als gescheiterter Todesrettungswurf. Falls der Schaden von einem kritischen Treffer stammt, zählt er als zwei gescheiterte Rettungswürfe. Wenn der Schaden mindestens deinem Trefferpunktemaximum entspricht, stirbst du.</p>"
        ]
    }
]
