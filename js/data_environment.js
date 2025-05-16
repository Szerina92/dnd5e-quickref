data_environment_obscurance = [
    {
        title: "Verschleierte Bereiche",
        icon: "bleeding-eye",
        subtitle: "Eingeschränkte Sicht",
        description: "Bereiche können leicht oder komplett verschleiert sein",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Leicht Verschleiert.</em></strong> In leicht verschleierten Bereichen, beispielsweise dämmrigem Licht, leichtem Nebel oder in mäßig dichtem Laub, sind Kreaturen bei Weisheitswürfen (Wahrnehmung), die klare Sicht erfordern, im Nachteil.",
		"<em><strong>Stark Verschleiert.</em></strong> Komplett verschleierte Bereiche – bei Dunkelheit, dichtem Nebel oder in dichtem Laub – sind völlig undurchsichtig. Wenn du versuchst, dort etwas zu erkennen, hast du den Zustand Blind."
        ]
    },
    {
        title: "Licht",
        icon: "candlebright",
        subtitle: "Beeinflusst Sicht",
        description: "Durch die An- oder Abwesenheit von Licht wird die Beleuchtungskategorie eines Bereichs bestimmt",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Helles Licht:</em></strong> Bei hellem Licht können die meisten Kreaturen normal sehen. Auch trübe Tage bieten helles Licht, ebenso Fackeln, Laternen, Feuer und ähnliche Lichtquellen (in einer gewissen Reichweite).",
		"<em><strong>Dämmriges Licht:</em></strong> Dämmriges Licht, auch als Schatten bezeichnet, bedeutet einen leicht verschleierten Bereich. Oft stellen Bereiche mit dämmrigem Licht den Übergang zwischen hell erleuchteten und dunklen Bereich dar. Auch das sanfte Licht der Morgen- oder Abenddämmerung zählt als dämmriges Licht. Ein Vollmond kann die Welt ebenfalls in dämmriges Licht tauchen.",
		"<em><strong>Dunkelheit:</em></strong> Dunkelheit bedeutet einen komplett verschleierten Bereich. Sie herrscht nachts unter freiem Himmel - auch in den meisten Mondnächten -, in unbeleuchteten Gewölben und in Bereichen magischer Dunkelheit."
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
            "Blindsicht erlaubt dir, auf eine bestimmte Reichweite zu sehen, ohne physische Sicht zu benötigen. Auf diese Reichweite kannst du auch bei Dunkelheit oder im Zustand Blind alles sehen, was sich nicht in Vollständiger Deckung befindet. Du kannst sogar Kreaturen und Gegenstände mit dem Zustand Unsichtbar sehen."
        ]
    },
    {
        title: "Dunkelsicht",
        icon: "semi-closed-eye",
        subtitle: "Begrenzte Sicht in Dunkelheit",
        description: "Eine Kreatur mit Dunkelsicht kann innerhalb eines bestimmten Radius in der Dunkelheit und bei wenig Licht besser sehen",
        reference: "PHB 2024",
        bullets: [
            "Wenn du Dunkelsicht hast, kannst du auf die angegebene Reichweite bei Dämmrigem Licht sehen wie bei Hellem Licht und bei Dunkelheit wie bei dämmrigem Licht. Farben nimmst du bei Dunkelheit nur als Graustufen wahr. Siehe auch Erkundung."
        ]
    },
    {
        title: "Erschütterungssinn",
        icon: "erschuetterungssinn",
        subtitle: "Spüre Erschütterungen",
        description: "Erschütterungssinn nimmt bewegungen auf einer Oberfläche wahr",
        reference: "PHB 2024",
        bullets: [
            "Eine Kreatur mit Erschütterungssinn kennt den Ort von Kreaturen und bewegten Gegenständen innerhalb einer bestimmten Reichweite, sofern sie und die erkannten Ziele beide in Kontakt mit derselben Oberfläche (dem Boden, einer Wand oder Decke) oder derselben Flüssigkeit sind.",
	    "Erschütterungssinn kann keine Kreaturen oder Gegenstände in der Luft erspüren und zählt nicht als Form der Sicht."
        ]
    },
    {
        title: "Wahrer Blick",
        icon: "eye-shield",
        subtitle: "Alles sehen",
        description: "Wenn du über Wahrer Blick verfügst, ist dein Sehvermögen auf eine bestimmte Reichweite verbessert. Auf diese Reichweite durchdringt deine Sicht Folgendes:",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Dunkelheit:</strong></em> Du kannst in normaler sowie magischer Dunkelheit sehen.",
	    "<em><strong>Unsichtbarkeit:</strong></em> Du kannst Kreaturen und Gegenstände sehen, die den Zustand Unsichtbar haben.",
		"<em><strong>Visuelle Illusionen:</strong></em> Visuelle Illusionen erscheinen dir durchsichtig, und Rettungswürfe gegen sie bestehst du automatisch.",
		"<em><strong>Verwandlungen:</strong></em> Du erkennst die wahre Gestalt aller Kreaturen und Gegenstände, die du siehst und die durch Magie verwandelt wurden.",
		"<em><strong>Ätherebene:</strong></em> Du kannst in die Ätherebene blicken."
        ]
    }
]

data_environment_hazards = [
  {
        title: "Brand",
        icon: "flame",
        subtitle: "In Brand geraten",
        description: "Eine Kreatur oder ein Gegenstand brennt",
        reference: "PHB 2024",
        bullets: [
            "Brennende Kreaturen und Gegenstände erleiden zu Beginn jedes ihrer Züge 1W4 Feuerschaden. Du kannst dich als Aktion selbst löschen, indem du dir den Zustand Liegend gibst und dich auf dem Boden rollst. Das Feuer erlischt auch, wenn es erstickt oder durch Wasser gelöscht wird."
        ]
    },
    {
        title: "Dehydrierung",
        icon: "drop",
        subtitle: "Verdursten",
        description: "Die meisten Kreaturen brauchen Wasser",
        reference: "PHB 2024",
        bullets: [
            "Eine Kreatur benötigt täglich eine gewisse Menge von Wasser je nach ihrer Größe, wie in der Tabelle „Täglicher Wasserbedarf“ dargestellt. Eine Kreatur, die weniger als die Hälfte der täglich erforderlichen Wassermenge trinkt, erhält am Ende des Tages eine Erschöpfungsstufe. Erschöpfung durch Dehydrierung kann nicht entfernt werden, ehe die Kreatur nicht die vollständige Tagesmenge an Wasser trinkt.",
	        "<table><caption>Täglicher Wasserbedarf</caption><thead><tr><th><p>Größe</p></th><th><p>Wassermenge</p></th></tr></thead><tbody><tr><td><p>Winzig</p></td><td><p>1 Liter</p></td></tr><tr><td><p>Klein</p></td><td><p>4 Liter</p></td></tr><tr><td><p>Mittel</p></td><td><p>4 Liter</p></td></tr><tr><td><p>Groß</p></td><td><p>16 Liter</p></td></tr><tr><td><p>Riesig</p></td><td><p>64 Liter</p></td></tr><tr><td><p>Gigantisch</p></td><td><p>256 Liter</p></td></tr></tbody></table>"
        ]
    },
    {
        title: "Sturz",
        icon: "falling",
        subtitle: "Ungebremst fallen",
        description: " ",
        reference: "PHB 2024",
        bullets: [
            "Am Ende eines Sturzes erleidet eine Kreatur 1W6 Wuchtschaden pro drei Meter, die sie gestürzt ist (höchstens 20W6). Nach dem Sturz hat sie den Zustand Liegend, sofern sie den Schaden durch den Sturz nicht vermeiden konnte.",
	    "Wenn eine Kreatur in Wasser oder eine andere Flüssigkeit stürzt, kann sie ihre Reaktion verwenden und einen SG-15-Geschicklichkeitswurf (Akrobatik) oder SG-15-Stärkewurf (Athletik) ausführen, um mit dem Kopf oder den Füßen voran aufzukommen. Bei einem Erfolg wird der Fallschaden halbiert.",
        ]
    },
    {
        title: "Unterernährung",
        icon: "mangelernaehrung",
        subtitle: "Fehlende Nahrung",
        description: "Die meisten Kreaturen brauchen Nahrung",
        reference: "PHB 2024",
        bullets: [
            "Eine Kreatur benötigt täglich eine gewisse Menge von Nahrung je nach ihrer Größe, wie in der Tabelle „Täglicher Nahrungsbedarf“ dargestellt. Eine Kreatur, die weniger als die Hälfte der täglich erforderlichen Nahrungsmenge zu sich nimmt, muss einen SG-10-Konstitutionsrettungswurf bestehen, oder sie erhält am Ende des Tages eine Erschöpfungsstufe. Eine Kreatur, die fünf Tage lang nichts isst, erhält am Ende des fünften Tages automatisch eine Erschöpfungsstufe sowie am Ende jedes weiteren Tages ohne Nahrung eine zusätzliche Erschöpfungsstufe.",
	    "Erschöpfung durch Unterernährung kann nicht entfernt werden, ehe die Kreatur nicht die vollständige Tagesmenge an Nahrung zu sich nimmt.",
            "<table><caption>Täglicher Nahrungsbedarf</caption><thead><tr><th><p>Größe</p></th><th><p>Nahrung</p></th><th></th><th><p>Größe</p></th><th><p>Nahrung</p></th></tr></thead><tbody><tr><td><p>Winzig</p></td><td><p>125 Gramm</p></td><td></td><td><p>Groß</p></td><td><p>2 Kilogramm</p></td></tr><tr><td><p>Klein</p></td><td><p>500 Gramm</p></td><td></td><td><p>Riesig</p></td><td><p>8 Kilogramm</p></td></tr><tr><td><p>Mittel</p></td><td><p>500 Gramm</p></td><td></td><td><p>Gigantisch</p></td><td><p>32 Kilogramm</p></td></tr></tbody></table>"
        ]
    },
    {
        title: "Erstickung",
        icon: "ersticken",
        subtitle: "Nach Luft ringen",
        description: "Die meisten Kreaturen brauchen Luft",
        reference: "PHB 2024",
        bullets: [
            "Eine Kreatur kann für eine Zeitspanne die Luft anhalten, die ihrem Konstitutionsmodifikator + 1 in Minuten entspricht (mindestens 30 Sekunden). Danach setzt die Erstickung ein. Solange eine Kreatur keine Luft bekommt oder erstickt, erhält sie am Ende jedes ihrer Züge eine Erschöpfungsstufe. Sobald sie wieder atmen kann, werden alle Erschöpfungsstufen entfernt, die sie durch die Erstickung erhalten hat."
        ]
    }
]
