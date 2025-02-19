data_environment_obscurance = [
    {
        title: "Verdeckte Bereiche",
        icon: "bleeding-eye",
        subtitle: "Sicht Eingeschränkt",
        description: "Ein Bereich kann leicht oder stark verschleiert sein",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Leicht Verschleiert.</em></strong> In einem leicht verschleierten Gebiet – wie einem Gebiet mit dämmrigem Licht, Nebel oder mäßigem Blattwerk – hast du einen Nachteil bei Weisheitswürfen (Wahrnehmung), die auf Sicht angewiesen sind.",
		"<em><strong>Stark Verschleiert.</em></strong> Ein stark verschleiertes Gebiet – wie ein Gebiet mit Dunkelheit, dichtem Nebel oder dichtem Blattwerk – ist undurchsichtig. Wenn du versuchst, dort etwas zu sehen, hast du den <i>Blind</i> Zustand."
        ]
    },
    {
        title: "Licht",
        icon: "candlebright",
        subtitle: "Beeinflusst Sicht",
        description: "Das Vorhandensein oder Fehlen von Licht bestimmt die Beleuchtungskategorie in einem Bereich, wie unten definiert.",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Helles Licht.</em></strong> Helles Licht ermöglicht den meisten Kreaturen ein normales Sehen. Selbst an trüben Tagen gibt es helles Licht, ebenso wie Fackeln, Laternen, Feuer und andere Lichtquellen in einem bestimmten Radius.",
		"<em><strong>Dämmriges Licht.</em></strong> Dämmriges Licht, auch Schatten genannt, erzeugt einen <i>Leicht Verschleierten</i> Bereich. Ein Bereich mit dämmrigem Licht ist normalerweise eine Grenze zwischen hellem Licht und umgebender Dunkelheit. Das sanfte Licht der Dämmerung zählt ebenfalls als dämmriges Licht. Ein Vollmond kann das Land in dämmriges Licht tauchen.",
		"<em><strong>Dunkelheit.</em></strong> Dunkelheit erzeugt einen <i>Stark Verschleierten</i> Bereich. Charaktere sind der Dunkelheit nachts im Freien (selbst in den meisten mondhellen Nächten), innerhalb der Grenzen eines unbeleuchteten Verlieses oder in einem Bereich magischer Dunkelheit ausgesetzt."
        ]
    }
]

data_environment_vision = [
    {
        title: "Blindsicht",
        icon: "one-eyed",
        subtitle: "Wahrnehmen ohne zu sehen",
        description: "Nimm deine Umgebung in einem bestimmten Radius war, ohne dich auf dein Augenlicht zu verlassen",
        reference: "PHB 2024",
        bullets: [
            "Wenn du über Blindsicht verfügst, kannst du innerhalb einer bestimmten Reichweite sehen, ohne auf das physische Sehvermögen angewiesen zu sein. Innerhalb dieser Reichweite kannst du alles sehen, was sich nicht hinter Vollständiger Deckung befindet, selbst wenn du den <i>Blind</i> hast oder dich in Dunkelheit befindest. Darüber hinaus kannst du in dieser Reichweite etwas sehen, das sich im <i>Unsichtbar</i> Zustand befindet."
        ]
    },
    {
        title: "Dunkelsicht",
        icon: "semi-closed-eye",
        subtitle: "Begrenzte Sicht in Dunkelheit",
        description: "Eine Kreatur mit Dunkelsicht kann innerhalb eines bestimmten Radius in der Dunkelheit und bei wenig Licht besser sehen",
        reference: "PHB 2024",
        bullets: [
            "Wenn du über Dunkelsicht verfügst, kannst du in einem bestimmten Bereich bei Dämmrigem Licht so sehen, als wäre es Helles Licht, und in diesem Bereich bei Dunkelheit so, als wäre es Dämmriges Licht. In Dunkelheit kannst du Farben nur als Grautöne wahrnehmen."
        ]
    },
    {
        title: "Erschütterungssinn",
        icon: "erschuetterungssinn",
        subtitle: "Spüre Erschütterungen",
        description: "Erschütterungssinn nimmt bewegungen auf einer Oberfläche wahr",
        reference: "PHB 2024",
        bullets: [
            "Eine Kreatur mit Erschütterungssinn kann die Position von Kreaturen und sich bewegenden Objekten innerhalb einer bestimmten Reichweite bestimmen, vorausgesetzt, dass die Kreatur mit Erschütterungssinn und alles, was sie erfasst, mit derselben Oberfläche (z. B. dem Boden, einer Wand oder einer Decke) oder derselben Flüssigkeit in Kontakt sind.",
	    "Erschütterungssinn kann keine Kreaturen oder Objekte in der Luft erkennen und zählt nicht als eine Form des Sehens."
        ]
    },
    {
        title: "Wahrer Blick",
        icon: "eye-shield",
        subtitle: "Alles sehen",
        description: "Wenn du Wahrsicht hast, wird deine Sicht innerhalb eines bestimmten Bereichs verbessert",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Dunkelheit.</em></strong> Du kannst in normaler und magischer Dunkelheit sehen.",
	 "<em><strong>Unsichtbarkeit.</em></strong> Du siehst Kreaturen und Objekte, die den <i>Unsichtbar</i> Zustand haben.",
		"<em><strong>Visuelle Täuschungen.</em></strong> Visuelle Täuschungen erscheinen dir transparent und du hast automatisch Erfolg bei Rettungswürfen gegen sie.",
		"<em><strong>Verwandlungen.</em></strong> Du erkennst die wahre Form jeder Kreatur oder jedes Objekts, das du siehst und das durch Magie verwandelt wurde.",
		"<em><strong>Ätherische Ebene.</em></strong> Du siehst in die Ätherische Ebene."
        ]
    }
]

data_environment_hazards = [
  {
        title: "Brennen",
        icon: "flame",
        subtitle: "In Brand geraten",
        description: "Eine Kreatur oder ein Objekt brennt",
        reference: "PHB 2024",
        bullets: [
            "Eine brennende Kreatur oder ein brennendes Objekt erleidet zu Beginn jedes seiner Züge 1W4 Feuerschaden. Als Aktion kannst du das Feuer an dir selbst löschen, indem du dich in den Liegend Zustand versetzt und dich auf dem Boden wälzt. Das Feuer erlischt auch, wenn es gelöscht, untergetaucht oder erstickt wird."
        ]
    },
    {
        title: "Dehydrierung",
        icon: "drop",
        subtitle: "Verdursten",
        description: "Die meisten Kreaturen brauchen Wasser",
        reference: "PHB 2024",
        bullets: [
            "<p>A creature requires an amount of water per day based on its size, as shown in the Water Needs per Day table. A creature that drinks less than half the required water for a day gains 1 Exhaustion level at the day’s end. Exhaustion caused by dehydration can’t be removed until the creature drinks the full amount of water required for a day.",
	    "</p><table><caption>Water Needs per Day</caption><thead><tr><th><p>Size</p></th><th><p>Water</p></th></tr></thead><tbody><tr><td><p>Tiny</p></td><td><p>1/4 gallon</p></td></tr><tr><td><p>Small</p></td><td><p>1 gallon</p></td></tr><tr><td><p>Medium</p></td><td><p>1 gallon</p></td></tr><tr><td><p>Large</p></td><td><p>4 gallons</p></td></tr><tr><td><p>Huge</p></td><td><p>16 gallons</p></td></tr><tr><td><p>Gargantuan</p></td><td><p>64 gallons</p></td></tr></tbody></table>"
        ]
    },
    {
        title: "Fallen",
        icon: "falling",
        subtitle: "Ungebremst fallen",
        description: " ",
        reference: "PHB 2024",
        bullets: [
            "A creature that falls takes 1d6 Bludgeoning damage at the end of the fall for every 10 feet it fell, to a maximum of 20d6. When the creature lands, it has the Prone condition unless it avoids taking any damage from the fall.",
	    "A creature that falls into water or another liquid can use its Reaction to make a DC 15 Strength (Athletics) or Dexterity (Acrobatics) check to hit the surface head or feet first. On a successful check, any damage resulting from the fall is halved.",
        ]
    },
    {
        title: "Mangelernährung",
        icon: "mangelernaehrung",
        subtitle: "Fehlende Nahrung",
        description: "Die meisten Kreaturen brauchen Nahrung",
        reference: "PHB 2024",
        bullets: [
            "A creature needs an amount of food per day based on its size, as shown in the Food Needs per Day table. A creature that eats but consumes less than half the required food for a day must succeed on a DC 10 Constitution saving throw or gain 1 Exhaustion level at the day’s end. A creature that eats nothing for 5 days automatically gains 1 Exhaustion level at the end of the fifth day as well as an additional level at the end of each subsequent day without food.",
	    "Exhaustion caused by malnutrition can’t be removed until the creature eats the full amount of food required for a day. See also “Exhaustion.”",
            "<table><caption>Food Needs per Day</caption><thead><tr><th><p>Size</p></th><th><p>Food</p></th><th></th><th><p>Size</p></th><th><p>Food</p></th></tr></thead><tbody><tr><td><p>Tiny</p></td><td><p>1/4 pound</p></td><td></td><td><p>Large</p></td><td><p>4 pounds</p></td></tr><tr><td><p>Small</p></td><td><p>1 pound</p></td><td></td><td><p>Huge</p></td><td><p>16 pounds</p></td></tr><tr><td><p>Medium</p></td><td><p>1 pound</p></td><td></td><td><p>Gargantuan</p></td><td><p>64 pounds</p></td></tr></tbody></table>"
        ]
    },
    {
        title: "Ersticken",
        icon: "ersticken",
        subtitle: "Nach Luft ringen",
        description: "Die meisten Kreaturen brauchen Luft",
        reference: "PHB 2024",
        bullets: [
            "A creature can hold its breath for a number of minutes equal to 1 plus its Constitution modifier (minimum of 30 seconds) before suffocation begins. When a creature runs out of breath or is choking, it gains 1 Exhaustion level at the end of each of its turns. When a creature can breathe again, it removes all levels of Exhaustion it gained from suffocating."
        ]
    }
]
