data_environment_obscurance = [
    {
        title: "Leicht verschleiert",
        icon: "bleeding-eye",
        subtitle: "Nachteil auf Wahrnehmung",
        description: "Dämmriges Licht, ungleichmäßiger Nebel, mäßiges Blattwerk",
        reference: "PHB, Seite 183.",
        bullets: [
            "Kreaturen haben <b>Nachteil auf Weisheit (Wahrnehmung)</b>-Proben, die Sicht benötigen"
        ]
    },
    {
        title: "Komplett verschleiert",
        icon: "lightning-tear",
        subtitle: "Effektiv Blind",
        description: "Dunkelheit, dichter Nebel, dichtes Blattwerk",
        reference: "PHB, Seite 183.",
        bullets: [
            "Eine Kreatur in einem komplett verschleierten Bereich ist effektiv vom Zustand <b>Blind</b> betroffen."
        ]
    }
]

data_environment_light = [
    {
        title: "Helles Licht",
        icon: "star-pupil",
        subtitle: "Normales Sehen",
        description: "Helles Licht lässt die meisten Kreaturen normal sehen",
        reference: "PHB, Seite 183.",
        bullets: [
			"Auch bewölkte Tage bieten helles Licht, genau wie Fackeln, Laternen, Feuer und andere Lichtquellen in einem bestimmten Radius."
        ]
    },
    {
        title: "Dämmriges Licht",
        icon: "semi-closed-eye",
        subtitle: "Leicht verschleiert",
        description: "Dämmriges Licht, bzw. Schatten",
        reference: "PHB, Seite 183.",
        bullets: [
            "Erzeugt einen <b>leicht verschleierten</b> Bereich.",
            "Ein Bereich mit dämmrigem Licht ist für gewöhnlich der Grenzbereich einer Quelle hellen Lichts, wie einer Fackel, die von Dunkelheit umgeben ist.",
            "Das schwache Licht von Dämmerung und Sonnenaufgang ist dämmriges Licht. Ein besonders heller Vollmond kann das Land ebenfalls in dämmrigem Licht baden."
        ]
    },
    {
        title: "Dunkelheit",
        icon: "worried-eyes",
        subtitle: "Komplett verschleiert",
        description: "Dunkelheit erzeigt einen komplett verschleierten Bereich",
        reference: "PHB, Seite 183.",
        bullets: [
            "Erzeugt einen <b>komplett verschleierten</b> Bereich.",
            "Charaktere treffen nachts draußen auf Dunkelheit (auch in den meisten mondhellen Nächten), in einem unbeleuchteten Verlies, einem unterirdischen Gewölbe oder einem Bereich magischer Dunkelheit."
        ]
    }
]

data_environment_vision = [
    {
        title: "Blindsicht",
        icon: "one-eyed",
        subtitle: "Wahrnehmen ohne zu sehen",
        description: "Nimm deine Umgebung in einem bestimmten Radius war, ohne dich auf dein Augenlicht zu verlassen",
        reference: "PHB, Seite 183.",
        bullets: [
            "Kreaturen ohne Augen, wie zum Beispiel Schlicke, und Kreaturen mit Echolot oder verstärkten Sinnen, so wie Fledermäuse und echte Drachen, haben oft diesen Sinn."
        ]
    },
    {
        title: "Dunkelsicht",
        icon: "semi-closed-eye",
        subtitle: "Begrenzte Sicht in Dunkelheit",
        description: "Eine Kreatur mit Dunkelsicht kann innerhalb eines bestimmten Radius in der Dunkelheit und bei wenig Licht besser sehen",
        reference: "PHB, Seite 183.",
        bullets: [
            "Innerhalb eines bestimmten Bereichs kann eine Kreatur mit Dunkelsicht <b>in Dunkelheit sehen, als sei es dämmriges Licht</b>, was bedeutet, dass Bereiche in Dunkelheit für die Kreatur wie dämmriges Licht behandelt werden.",
			"Allerdings kann die Kreatur in der Dunkelheit keine Farben differenzieren und sieht statt dessen Schattierungen von Grau.",
            "Viele Kreaturen in den Welten von D&D haben Dunkelsicht, insbesondere die, die im Unterreich leben."
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
        description: "Eine Kreatur mit Wahrem Blick kann unabhängig von der Umgebung alles in seiner wahren Form sehen",
        reference: "PHB, Seite 185.",
        bullets: [
            "Eine Kreatur mit dem Wahren Blick kann bis zu einer bestimmten Reichweite, auch in normaler sowie magischer Dunkelheit sehen, unsichtbare Kreaturen und Objekte wahrnehmen, automatisch visuelle Illusionen entdecken und Proben gegen diese gewinnen, und nimmt die wahre Form eines Gestaltwandlers oder einer Kreatur, die durch Magie verwandelt wurde, wahr.",
			"Darüber hinaus kann die Kreatur in die Ätherebene sehen."
        ]
    }
]

data_environment_cover = [
    {
        title: "Teildeckung",
        icon: "broken-shield",
        subtitle: "Niedr. Mauer, Möbel, Kreatur",
        description: "Ein Ziel hat Teildeckung wenn ein Hindernis mindestens die Hälfte seines Körpers verdeckt",
        reference: "PHB, Seiten 195-196.",
        bullets: [
            "Das Hindernis kann zB eine niedrige Mauer, ein großes Möbelstück, ein schmaler Baumstamm oder eine Kreatur (unabhängig ob sie freundlich oder feindlich ist) sein.",
			"Ein Ziel mit Teildeckung erhält einen <b>+2 Bonus auf die Rüstungsklasse und Proben auf Geschicklichkeit</b>.",
            "Wenn ein Ziel sich hinter mehreren Quellen von Deckung befindet, wird nur die größte Deckung angewandt"
        ]
    },
    {
        title: "Dreivierteldeckung",
        icon: "cracked-shield",
        subtitle: "Fallgatter, Pfeilschlitze",
        description: "Ein Ziel hat Dreivierteldeckung wenn ein Hindernis ungefähr drei Viertel seines Körpers verdeckt",
        reference: "PHB, Seiten 195-196.",
        bullets: [
            "Das Hindernis kann zB ein Fallgatter, ein Pfeilschlitz oder ein dicker Baumstamm sein.",
			"Ein Ziel mit Dreivierteldeckung erhält einen <b>+5 Bonus auf die Rüstungsklasse und Proben auf Geschicklichkeit</b>.",
            "Wenn ein Ziel sich hinter mehreren Quellen von Deckung befindet, wird nur die größte Deckung angewandt"
        ]
    },
    {
        title: "Volle Deckung",
        icon: "shield",
        subtitle: "Komplett verdeckt",
        description: "Ein Ziel hat Volle Deckung wenn es durch ein Hindernis vollständig verdeckt wird",
        reference: "PHB, Seiten 195-196.",
        bullets: [
            "Ein Ziel hinter voller Deckung <b>kann nicht direkt als Ziel für einen Angriff oder Zauberspruch gewählt werden</b>, wobei manche Zauber ein solches Ziel innerhalb eines Effektbereichs treffen können.",
            "Wenn ein Ziel sich hinter mehreren Quellen von Deckung befindet, wird nur die größte Deckung angewandt"
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
            "A burning creature or object takes 1d4 Fire damage at the start of each of its turns. As an action, you can extinguish fire on yourself by giving yourself the Prone condition and rolling on the ground. The fire also goes out if it is doused, submerged, or suffocated."
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
