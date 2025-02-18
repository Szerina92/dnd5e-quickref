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
        description: "Während du Festgesetzt bist, treten folgende Effekte auf",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Geschwindigkeit 0.</em></strong> Deine Geschwindigkeit ist 0 und kann nicht erhöht werden.",
            "<em><strong>Angriffe Betroffen.</strong></em> Angriffswürfe gegen dich haben einen Vorteil, und deine Angriffswürfe haben einen Nachteil.",
            "<em><strong>Rettungswürfe Betroffen.</strong></em> Du hast Nachteil auf Geschicklichkeitsrettungswürfe."
        ]
    },
    {
        title: "Gelähmt",
        icon: "gelaehmt",
        subtitle: "Du bist gelähmt",
        description: "Während du Gelähmt bist, treten folgende Effekte auf",
		reference: "PHB 2024",
        bullets: [
            "<em><strong>Kampfunfähig.</em></strong> Du hat den <i>Kampfunfähig</i> Zustand.",
	    "<em><strong>Geschwindigkeit 0.</em></strong> Deine Geschwindigkeit ist 0 und kann nicht erhöht werden.",
            "<em><strong>Rettungswürfe Betroffen.</strong></em> Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
            "<em><strong>Automatische Kritische Treffer.</strong></em> Jeder Angriffswurf der dich Trifft ist ein <i>Kritischer Treffer</i>, wenn der Angreifer sich innerhalb von 1,5 Metern von dir befindet."
        ]
    },
    {
        title: "Gepackt",
        icon: "gepackt",
        subtitle: "Geschwindigkeit 0",
        description: "Während du Gepackt bist, treten folgende Effekte auf",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Geschwindigkeit 0.</em></strong> Deine Geschwindigkeit ist 0 und kann nicht erhöht werden.",
	    "<em><strong>Angriffe Betroffen.</strong></em> Du hast Nachteil auf Angriffswürfe gegen andere Ziele als den Greifenden",
            "<em><strong>Beweglich.</em></strong> Der Greifende kann dich ziehen oder tragen, wenn er sich bewegt, aber jeder Meter Bewegung kostet ihn einen zusätzlichen Meter, es sei denn, du bist winzig oder zwei oder mehr Größen kleiner als er."
        ]
    },
    {
        title: "Kampfunfähig",
        icon: "kampfunfaehig",
        subtitle: "Weder Aktion noch Reaktion",
        description: "Während du Kampfunfähig bist, treten folgende Effekte auf",
        reference: "PHB 2024",
        bullets: [
		"<em><strong>Inaktiv.</em></strong> Du kannst keine Aktion, Bonusaktion oder Reaktion ausführen.",
		"<em><strong>Keine Konzentration.</em></strong> Deine Konzentration ist gebrochen.",
		"<em><strong>Sprachlos.</em></strong> Du kannst nicht sprechen.",
		"<em><strong>Überrascht.</em></strong> Wenn du beim Würfeln für Initiative Kampfunfähig bist, hast du einen Nachteil auf den Wurf."
        ]
    },
    {
        title: "Liegend",
        icon: "liegend",
        subtitle: "Du liegst",
        description: "Während du Liegst, treten folgende Effekte auf",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Eingeschränkte Bewegung.</em></strong> Du kannst dich nur kriechend fortbewegen oder die Hälfte deiner Geschwindigkeit (abgerundet) ausgeben, um aufzustehen und dadurch den Zustand zu beenden. Wenn deine Geschwindigkeit 0 beträgt, kannst du nicht aufstehen.",
	    "<em><strong>Angriffe betroffen.</em></strong> Du hast einen Nachteil bei Angriffswürfen. Ein Angriffswurf gegen dich hat einen Vorteil, wenn der Angreifer sich innerhalb von 1,5 Metern um dich befindet. Andernfalls hat dieser Angriffswurf einen Nachteil."
        ]
    },
    {
        title: "Taub",
        icon: "taub",
        subtitle: "Du kannst nicht hören",
        description: "Während du Taub bist, treten folgende Effekte auf",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Kann nicht hören.</em></strong> Du kannst nicht hören und Attributswürfe die das Hören erfordern, schlagen automatisch fehl."
        ]
    },
    {
        title: "Unsichtbar",
        icon: "invisible",
        subtitle: "Du wirst nicht gesehen",
        description: "Während du Unsichtbar bist, treten folgende Effekte auf",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Überraschung.</em></strong> Wenn du beim Würfeln der Initiative unsichtbar bist, hast du einen Vorteil beim Wurf.",
	    "<em><strong>Verborgen.</em></strong> Du bist von keinem Effekt betroffen, bei dem das Ziel gesehen werden muss, es sei denn, der Erschaffer des Effekts kann dich irgendwie sehen. Jegliche Ausrüstung, die du trägst oder bei dir hast, ist ebenfalls verborgen.",
            "<em><strong>Angriffe betroffen.</em></strong> Angriffswürfe gegen dich haben einen Nachteil und deine Angriffswürfe haben einen Vorteil. Wenn eine Kreatur dich irgendwie sehen kann, erhältst du diesen Vorteil nicht gegen diese Kreatur."
        ]
    },
    {
        title: "Verängstigt",
        icon: "veraengstigt",
        subtitle: "Du hast Angst",
        description: "Während du Verängstigt bist, treten folgende Effekte auf",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Attributswürfe und Angriffe Betroffen.</em></strong> Du hast einen Nachteil bei Attributs- und Angriffswürfen, solange sich die Quelle der Angst in deiner Sichtlinie befindet.",
	    "<em><strong>Kann nicht näher kommen.</em></strong> Du kannst dich nicht bereitwillig näher an die Quelle der Angst heranwagen.",
        ]
    },
    {
        title: "Vergiftet",
        icon: "vergiftet",
        subtitle: "Du bist vergiftet",
        description: "Während du Vergiftet bist, treten folgende Effekte auf",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Attributswürfe und Angriffe Betroffen.</em></strong> Du hast einen Nachteil bei Attributs- und Angriffswürfen",
        ]
    },
    {
        title: "Versteinert",
        icon: "versteinert",
        subtitle: "Du wirst zu Stein",
        description: "Während du Versteinert bist, treten folgende Effekte auf",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Verwandlung in eine leblose Substanz.</em></strong> Du verwandelst dich, zusammen mit allen nichtmagischen Gegenständen, die du trägst und bei dir hast, in eine feste, leblose Substanz (normalerweise Stein). Dein Gewicht erhöht sich um das Zehnfache und du hörst auf zu altern.",
	    "<em><strong>Kampfunfähig.</em></strong> Du hast den <i>Kampfunfähig</i> Zustand.",
            "<em><strong>Geschwindigkeit 0.</em></strong> Deine Geschwindigkeit ist 0 und kann nicht erhöht werden.",
            "<em><strong>Angriffe Betroffen.</strong></em> Angriffswürfe gegen dich haben einen Vorteil.",
            "<em><strong>Rettungswürfe Betroffen.</strong></em> Rettungswürfe auf Stärke oder Geschicklichkeit schlagen automatisch fehl.",
            "<em><strong>Widersteht Schaden.</em></strong> Du hast Resistenz gegen jeglichen Schaden.",
	    "<em><strong>Immunität gegen Gift.</em></strong> Du bist immun gegen den Vergiftet Zustand."
        ]
    },
    {
        title: "Blutig",
        icon: "blutig",
        subtitle: "Du bist verwundet",
        description: "Wunden zieren deinen Körper und du blutest",
        reference: "PHB 2024",
        bullets: [
            "Eine Kreatur ist blutig, wenn sie noch die Hälfte ihrer Trefferpunkte oder weniger übrig hat.",
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
	    "<em><strong>Kampfunfähig oder Tot.</em></strong> Deine Konzentration endet, wenn du den Zustand <i>Kampfunfähig</i> erhältst oder stirbst."
        ]
    },
    {
        title: "Stabilisiert",
        icon: "stabil",
        subtitle: "Du bist Stabil",
        description: " ",
        reference: "PHB 2024",
        bullets: [
            "Eine stabile Kreatur führt keine Todesrettungswürfe durch, obwohl sie 0 Trefferpunkte hat, aber immer noch Kampfunfähig ist. Wenn die Kreatur Schaden erleidet, ist sie nicht mehr stabil und führt wieder Todesrettungswürfe durch. Eine stabile Kreatur, die nicht geheilt wird, erhält nach 1W4 Stunden 1 Trefferpunkt zurück.",
        ]
    },
    {
        title: "0 Trefferpunkt",
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
