data_condition = [
   {
        title: "Betäubt",
        icon: "betaeubt",
        subtitle: "Du bist betäubt",
        description: "Während du Betäubt bist, treten die folgenden Effekte auf",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Kampfunfähig.</strong></em> Du hast den <i>Kampfunfähig</i> Zustand.",
	    "<em><strong>Rettungswürfe Betroffen.</strong></em> Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
	    "<em><strong>Angriffe Betroffen</strong></em> Angriffswürfe gegen dich sind im Vorteil.",     
        ]
    },
    {
        title: "Bewusstlos",
        icon: "bewusstlos",
        subtitle: "Du bist bewusstlos",
        description: "Während du Bewusstlos bist, treten die folgenden Effekte auf",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Untätig.</strong></em> Du hast die <i>Kampfunfähig</i> und <i>Liegend</i> Zustände und du lässt fallen was du in den Händen hältst. Wenn der Zustand endet, bleibst du <i>Liegend</i>.",
            "<em><strong>Geschwindigkeit 0.</strong></em> Deine Geschwindigkeit ist 0 und kann nicht erhöht werden.",
            "<em><strong>Angriffe Betroffen.</strong></em> Angriffswürfe gegen dich sind im Vortei.",
	    "<em><strong>Rettungswürfe Betroffen.</strong></em> Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
            "<em><strong>Automatische Kritische Treffer.</strong></em> Jeder Angriffswurf der dich Trifft ist ein <i>Kritischer Treffer</i>, wenn der Angreifer sich innerhalb von 1,5 Metern von dir befindet.",
	    "<em><strong>Unbewusst.</strong></em> Du bist dir deiner Umgebung nicht bewusst",
        ]
    },
    {
        title: "Bezaubert",
        icon: "bezaubert",
        subtitle: "Du bist bezaubert",
        description: "Während du Bezaubert bist, treten folgende Effekte auf",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Kann dem Bezaubernden nichts anhaben.</strong></em> Du kannst den Bezaubernden nicht angreifen oder als Ziel für verletztende Fähigkeiten oder magische Effekte wählen.",
	    "<em><strong>Sozialer Vorteil.</strong></em> Der Bezaubernde hat Vorteil auf Attributswürfe bei sozialen Interaktion mit dir."
        ]
    },
    {
        title: "Blind",
        icon: "blind",
        subtitle: "Du kannst nicht sehen",
        description: "Während du Blind bist, treten folgende Effekte auf",
        reference: "PHB 2014",
        bullets: [
            "<em><strong>Kann nicht Sehen.</strong></em> Du kannst nicht sehen und verlierst Attributswürfe die Sicht benötigen automatisch.",
	    "<em><strong>Angriffe Betroffen.</strong></em> Angriffswürfe gegen dich haben einen Vorteil, und deine Angriffswürfe haben einen Nachteil.",
        ]
    },
    {
        title: "Erschöpfung",
        icon: "erschoepfung",
        subtitle: "Du bist erschöpft",
        description: "Erschöpfung wird in sechs Stufen unterschieden",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Erschöpfungsstufen.</strong></em> Dieser Zustand ist kumulativ. Jedes Mal, wenn du ihn erhältst, erhältst du 1 Erschöpfungsstufe. Du stirbst, wenn deine Erschöpfungsstufe 6 beträgt.",
	    "<em><strong>W20 Würfe Betroffen.</strong></em> Wenn du einen W20 Test würfelst, wird der Wurf um 2 reduziert pro Erschöpfungsstufe",
	    "<em><strong>Geschwindigkeit Reduziert.</strong></em> Deine Geschwindigkeit ist um eine Anzahl an Metern reduziert gleich 1,5 mal deiner Erschöpfungsstufe",
	    "<em><strong>Erschöpfungsstufen Entfernen.</strong></em> Wenn du eine Lange Rast beendest, wird 1 Erschöpfungsstufe entfernt. Wenn deine Erschöpfungsstufe 0 erreicht, endet der Zustand.",
        ]
    },
    {
        title: "Festgesetzt",
        icon: "festgesetzt",
        subtitle: "Du bist festgesetzt",
        description: "Du bist festgesetzt",
        reference: "PHB, Seite 290.",
        bullets: [
            "Deine Geschwindigkeit ist 0 und du kannst nicht von Bonus auf deine Geschwindigkeit profitieren.",
            "Du bist bei Angriffen im Nachteil.",
            "Angriffe gegen dich sind im Vorteil.",
            "Du bist bei Rettungswürfen auf Geschicklichkeit im Nachteil."
        ]
    },
    {
        title: "Gelähmt",
        icon: "gelaehmt",
        subtitle: "Du bist gelähmt",
        description: "Du kannst nichts tun",
		reference: "PHB, Seite 291.",
        bullets: [
            "Du bist <i>kampfunfähig</i> und kannst dich weder bewegen noch sprechen.",
			"Angriffswürfe gegen dich sind im Vorteil.",
            "Jeder Angriff, der dich trifft, ist ein kritischer Treffer, wenn der Angreifer innerhalb von 5 Fuß von dir ist.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
        ]
    },
    {
        title: "Gepackt",
        icon: "gepackt",
        subtitle: "Geschwindigkeit: 0",
        description: "Du bist im Haltegriff",
        reference: "PHB, Seite 291.",
        bullets: [
            "Deine Geschwindigkeit ist 0 und du kannst nicht von Bonus auf deine Geschwindigkeit profitieren.",
			"Der Zustand endet, wenn der Haltende kampfunfähig wird.",
            "Der Zustand endet außerdem, wenn du aus der Reichweite des Haltenden entfernt wirst."
        ]
    },
    {
        title: "Kampfunfähig",
        icon: "kampfunfaehig",
        subtitle: "Weder Aktion noch Reaktion",
        description: "Du kannst weder Aktionen noch Reaktionen ausführen",
        reference: "PHB, Seite 291.",
        bullets: [
        ]
    },
    {
        title: "Liegend",
        icon: "liegend",
        subtitle: "Du liegst",
        description: "Du liegst",
        reference: "PHB, Seite 291.",
        bullets: [
            "Deine einzige Bewegungsoption ist <i>Kriechen</i>, wenn du nicht aufstehst.",
			"Du bist bei Angriffen im Nachteil.",
			"Angriffe gegen dich sind im Vorteil, wenn der Angreifer innerhalb von 5 Fuß von dir ist, anderenfalls sind sie im Nachteil."
        ]
    },
    {
        title: "Taub",
        icon: "taub",
        subtitle: "Du kannst nicht hören",
        description: "Du kannst nicht hören",
        reference: "PHB, Seite 292.",
        bullets: [
            "Du verlierst Fähigkeitenproben die Hören benötigen automatisch.",
        ]
    },
    {
        title: "Unsichtbar",
        icon: "invisible",
        subtitle: "Du wirst nicht gesehen",
        description: "Ohne die Hilfe von Magie oder speziellen Sinnen kannst du nicht gesehen werden",
        reference: "PHB, Seite 292.",
        bullets: [
            "Du giltst als komplett verschleiert, wenn du versuchst dich zu verstecken.",
			"Du kannst immer noch durch Geräusche oder von dir hinterlassene Spuren entdeckt werden.",
            "Du hast Vorteil auf Angriffswürfe.",
            "Angriffswürfe gegen dich sind im Nachteil.",
        ]
    },
    {
        title: "Verängstigt",
        icon: "veraengstigt",
        subtitle: "Du hast Angst",
        description: "Du hast Angst",
        reference: "PHB, Seite 292.",
        bullets: [
            "Du bist bei Fähigkeitenproben und Angriffen im Nachteil, solange die Quelle deiner Angst für dich sichtbar ist.",
			"Du kannst dich nicht willentlich der Quelle deiner Angst nähern.",
        ]
    },
    {
        title: "Vergiftet",
        icon: "vergiftet",
        subtitle: "Du bist vergiftet",
        description: "Du bist vergiftet",
        reference: "PHB, Seite 292.",
        bullets: [
            "Du bist bei Fähigkeitenproben und Angriffen im Nachteil.",
        ]
    },
    {
        title: "Versteinert",
        icon: "versteinert",
        subtitle: "Du wirst zu Stein",
        description: "Du bist, zusammen mit allen nicht-magischen Objekten die du trägst oder mitführst, in eine feste, unbewegliche Substanz (meistens Stein) verwandelt worden",
        reference: "PHB, Seite 292.",
        bullets: [
            "Dein Gewicht verzehnfacht sich und du hörst auf zu altern.",
			"Du bist <i>kampfunfähig</i>, kannst dich weder bewegen noch sprechen und nimmst deine Umgebung nicht mehr wahr.",
            "Angriffswürfe gegen dich sind im Vorteil.",
            "Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
            "Du bist gegen jeden Schaden resistent",
            "Du bist immun gegen Gifte und Krankheit, allerdings ist ein Gift, von dem du bereits betroffen bist, nur ruhend und nicht neutralisiert."
        ]
    },
    {
        title: "Konzentration",
        icon: "konzentration",
        subtitle: "Du konzentrierst dich",
        description: " ",
        reference: "PHB 2024",
        bullets: [
            "Einige Zauber und andere Effekte erfordern Konzentration, um aktiv zu bleiben, wie in ihren Beschreibungen angegeben. Wenn der Zaubernde des Effekts die Konzentration verliert, endet der Effekt. Wenn der Effekt eine maximale Dauer hat, gibt die Beschreibung des Effekts an, wie lange sich der Zaubernde darauf konzentrieren kann: bis zu 1 Minute, 1 Stunde oder eine andere Dauer. Der Zaubernde kann die Konzentration jederzeit beenden (keine Aktion erforderlich). Die Konzentration wird durch die folgenden Faktoren unterbrochen.",
            "<em><strong>Ein anderer Konzentrationseffekt.</em></strong> Du verlierst die Konzentration auf einen Effekt in dem Moment, in dem du einen Zauber wirkst, der Konzentration erfordert, oder einen anderen Effekt aktivierst, der Konzentration erfordert.",
            "<em><strong>Schaden.</em></strong> Wenn du Schaden nimmst, musst du einen Konstitutionsrettungswurf bestehen, um die Konzentration aufrechtzuerhalten. Der SG entspricht 10 oder der Hälfte des erlittenen Schadens (abgerundet), je nachdem, welche Zahl höher ist, bis zu einem maximalen SG von 30.",
	    "<em><strong>Kampfunfähig oder Tot.</em></strong> Deine Konzentration endet, wenn du den Zustand <i>Kampfunfähig</i> erhältst oder stirbst.",
        ]
    },
    {
        title: "Stabilisiert",
        icon: "stabil",
        subtitle: "Du bist Stabil",
        description: " ",
        reference: "PHB 2024",
        bullets: [
            "Eine Kreatur ist stabil wenn sie 0 Trefferpunkte hat, aber keine Todesrettungswürfe werfen muss.",
        ]
    },
    {
        title: "0 Trefferpunkte",
        icon: "tod",
        subtitle: "Du stirbst",
        description: "Du stirbst",
        reference: "PHB, Seite 197.",
        bullets: [
            "Du bist <i>bewusstlos</i>, es sei denn, du hast auf einmal soviel Schaden erhalten, dass du auf 0 Trefferpunkte fällst und der überschüssige Schaden noch einmal mindestens so hoch wie dein Trefferpunkte-Maximum ist. In diesem Fall stirbst du sofort.",
            "Diese Bewusstlosigkeit endet, wenn du mindestens einen Trefferpunkt erhältst.",
            "Wenn du deinen Zug mit 0 Trefferpunkten beginnst, musst du einen Todesrettungswurf machen. Würfle einen W20. Ein Ergebnis von mindestens 10 ist ein Erfolg, darunter ein Misserfolg. Bei deinem dritten Erfolg bist du stabil. Bei deinem dritten Misserfolg stirbst du.",
			"Eine gewürfelte 1 wird als zwei Misserfolge gewertet. Bei einer gewürfelten 20 erhältst du sofort einen Trefferpunkt.",
			"Wenn du Schaden erleidest während du 0 Trefferpunkte hast, erleidest du einen Misserfolg. Bei einem kritischen Treffer, erleidest zu zwei Misserfolge.",
			"Angriffe gegen dich sind im Vorteil (siehe <i>bewusstlos</i>).",
			"Jeder Angriff, der dich trifft, ist ein kritischer Treffer, wenn der Angreifer innerhalb von 5 Fuß von dir ist (siehe <i>bewusstlos</i>).",
        ]
    }
]
