data_action = [
    {
        title: "Angriff",
        icon: "crossed-swords",
        subtitle: "Nah- oder Fernkampfangriff",
        description: "Wenn du die Angriffsaktion ausführst, kannst du einen Angriffswurf mit einer Waffe oder einem waffenlosen Angriff machen.",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Waffen anlegen und ablegen.</em></strong> Du kannst eine Waffe entweder anlegen oder ablegen, wenn du im Rahmen dieser Aktion einen Angriff ausführst. Dies geschieht entweder vor oder nach dem Angriff. Wenn du eine Waffe vor einem Angriff anlegst, musst du sie für diesen Angriff nicht verwenden. Das Anlegen einer Waffe umfasst das Ziehen aus der Scheide oder das Aufheben. Das Ablegen einer Waffe umfasst das Einstecken, Verstauen oder Fallenlassen.",
	    "<em><strong>Zwischen Angriffen bewegen.</em></strong> Wenn du dich in deinem Zug bewegst und über ein Merkmal wie <i>ZUsätzlicher Angriff</i> verfügst, das dir im Rahmen der Angriffsaktion mehr als einen Angriff ermöglicht, kannst du einen Teil oder die gesamte Bewegung nutzen, um dich zwischen diesen Angriffen zu bewegen."
        ]
    },
    {
        title: "Waffenlos",
        icon: "fist",
        subtitle: "Nah- oder Fernkampfangriff",
        description: "Vollführe einen Nah- oder Fernkampfangriff mit deiner Waffe",
        reference: "PHB 2024",
        bullets: [
            "Anstatt eine Waffe für einen Nahkampfangriff zu verwenden, kannst du einen Faustschlag, Tritt, Kopfstoß oder einen ähnlichen kräftigen Schlag einsetzen. Im Spiel ist dies ein Waffenloser Schlag – ein Nahkampfangriff, bei dem du deinen Körper einsetzt, um einem Ziel in einem Umkreis von 1,5 Metern Schaden zuzufügen, es zu packen oder zu Stoßen. <br>Wann immer du deinen Waffenlosen Schlag einsetzt, wähle eine der folgenden Optionen für seine Wirkung.",
	    "<em><strong>Schaden.</em></strong> Du führst einen Angriffswurf gegen das Ziel durch. Dein Bonus auf den Wurf entspricht deinem Stärkemodifikator plus deinem Übungsbonus. Bei einem Treffer erleidet das Ziel einen Wuchtschaden in Höhe von 1 plus deinem Stärkemodifikator.",
            "<em><strong>Packen.</em></strong> Das Ziel muss einen Stärke- oder Geschicklichkeitsrettungswurf (es entscheidet sich für einen) bestehen, sonst erleidet es den Zustand <i>Gepackt</i>. Der SG für den Rettungswurf und alle Entkommen versuche beträgt 8 plus deinen Stärkemodifikator und Übungsbonus. DPacken ist nur möglich, wenn das Ziel nicht mehr als eine Größe größer ist als du und du eine Hand frei hast, um es zu ergreifen.",
            "<em><strong>Stoßen.</em></strong> Das Ziel muss einen Stärke- oder Geschicklichkeitsrettungswurf (es entscheidet sich für einen) bestehen, oder du stößt es entweder 1,5 Meter weit weg oder versetzt es in den <i>Liegend</i> Zustand. Der SG für den Rettungswurf beträgt 8 plus deinen Stärkemodifikator und Übungsbonus. Dieses Stoßen ist nur möglich, wenn das Ziel nicht mehr als eine Größe größer ist als du.",
            "Siehe auch <i>Gepackt</i> Zustand" 
        ]
    },
    {
        title: "Packen",
        icon: "grab",
        subtitle: "Athletik vs. Akrobatik/Athletik",
        description: "Versuche eine Kreatur zu packen oder ringe mit ihr",
        reference: "PHB 2024",
        bullets: [
            "Eine Kreatur kann eine andere Kreatur <i>Packen</i>. Charaktere greifen normalerweise mit einem waffenlosen Schlag an. Wie auch immer ein Griff eingeleitet wird, er folgt diesen Regeln.",
            "<em><strong>Gepackt Zustand.</em></strong> Wenn du eine Kreatur erfolgreich Packst, versetzt du sie in den <i>Gepackt</i> Zustand.",
	    "<em><strong>Ein Packen pro Hand.</em></strong> Eine Kreatur muss eine Hand frei haben, um eine andere Kreatur zu Packen. Einige Werteblöcke und Spieleffekte erlauben es einer Kreatur, mit einem Tentakel, einem Schlund oder einem anderen Körperteil zu greifen. Welchen Teil auch immer der Packende verwendet, er kann mit diesem Teil immer nur eine Kreatur gleichzeitig greifen, und der Packende kann diesen Teil nicht verwenden, um eine andere Kreatur anzuvisieren, es sei denn, er beendet den Griff.",
	    "<em><strong>Entkommen aus einem Haltegriff.</em></strong> Eine gepackte Kreatur kann ihre Aktion nutzen, um einen Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik) gegen den SG des Haltegriffs zu machen, wodurch der Zustand bei einem Erfolg für sich selbst beendet wird. Der Zustand endet auch, wenn der Packende den <i>Kampfunfähig</i> Zustand hat oder wenn die Entfernung zwischen dem gepackten Ziel und dem Packenden die Reichweite des Haltegriffs überschreitet."
        ]
    },
    {
        title: "Stoßen",
        icon: "grab",
        subtitle: "Athletik vs. Akrobatik/Athletik",
        description: "Versuche eine Kreatur von dir weg oder zu Boden zu Stoßen",
        reference: "PHB 2024",
        bullets: [
            "Das Ziel muss einen Stärke- oder Geschicklichkeitsrettungswurf (es entscheidet sich für einen) bestehen, oder du stößt es entweder 1,5 Meter weit weg oder versetzt es in den <i>Liegend</i> Zustand. Der SG für den Rettungswurf beträgt 8 plus deinen Stärkemodifikator und Übungsbonus. Dieses Stoßen ist nur möglich, wenn das Ziel nicht mehr als eine Größe größer ist als du."
        ]
    },
    {
        title: "Magie (WIP)",
        icon: "magic-swirl",
        subtitle: "Zauberzeit: 1 Aktion/länger",
        description: "Wirke einen Zauberspruch mit einer Zauberzeit von 1 Aktion oder länger",
        reference: "PHB 2024",
        bullets: [
            "When you take the Magic action, you cast a spell that has a casting time of an action or use a feature or magic item that requires a Magic action to be activated.",
	    "<em><strong>One Spell with a Spell Slot per Turn.</em></strong> On a turn, you can expend only one spell slot to cast a spell. This rule means you can’t, for example, cast a spell with a spell slot using the Magic action and another one using a Bonus Action on the same turn.",
	    "<em><strong>Longer Casting Times.</em></strong> Certain spells—including a spell cast as a Ritual—require more time to cast: minutes or even hours. While you cast a spell with a casting time of 1 minute or more, you must take the Magic action on each of your turns, and you must maintain Concentration (Siehe Konzentration) while you do so. If your Concentration is broken, the spell fails, but you don’t expend a spell slot. To cast the spell again, you must start over."
       ]
    },
    {
        title: "Spurt",
        icon: "sprint",
        subtitle: "Doppelte Geschwindigkeit",
        description: "Erhalte zusätzliche Bewegung für den aktuellen Zug",
        reference: "PHB 2024",
        bullets: [
            "Wenn du die Spurten Aktion ausführst, erhältst du für den aktuellen Zug zusätzliche Bewegung. Die Erhöhung entspricht deiner Geschwindigkeit nach Anwendung aller Modifikatoren. Mit einer Geschwindigkeit von 9 Metern kannst du dich in deinem Zug beispielsweise bis zu 18 Meter weit bewegen, wenn du Spurt ausführst. Wenn deine Geschwindigkeit von 9 Metern auf 4,5 Meter reduziert wird, kannst du dich in diesem Zug bis zu 9 Meter weit bewegen, wenn du Spurt ausführst.",
            "Wenn du eine besondere Geschwindigkeit hast, wie z. B. eine Fluggeschwindigkeit oder Schwimmgeschwindigkeit, kannst du diese Geschwindigkeit anstelle deiner Geschwindigkeit verwenden, wenn du diese Aktion ausführst. Du wählst jedes Mal, wenn du diese Aktion ausführst, welche Geschwindigkeit du verwenden möchtest."
	]
    },
    {
        title: "Rückzug",
        icon: "journey",
        subtitle: "Verhindere Gelegenheitsangriffe",
        description: "Bewege dich frei über das Feld",
        reference: "PHB 2024",
        bullets: [
	"Wenn du die Rückzug Aktion ausführst, löst deine Bewegung für den Rest des aktuellen Zuges keine Gelegenheitsangriffe aus."	
        ]
    },
    {
        title: "Ausweichen",
        icon: "aura",
        subtitle: "Stärke deine Abwehr",
        description: "Konzentriere dich darauf Angriffen auszuweichen",
        reference: "PHB 2024",
        bullets: [
            "Wenn du die Ausweichen Aktion ausführst, erhältst du die folgenden Vorteile: Bis zum Beginn deines nächsten Zuges hat jeder Angriffswurf gegen dich einen Nachteil, wenn du den Angreifer sehen kannst, und du führst Geschicklichkeitsrettungswürfe mit Vorteil aus.",
	    "Du verlierst diese Vorteile, wenn du den <i>Kampfunfähig</i> Zustand hast oder deine Geschwindigkeit 0 beträgt."
        ]
    },
    {
        title: "Entkommen",
        icon: "manacles",
        subtitle: "Akrobatik/Athletik vs. Athletik",
        description: "Entkomme einem Haltegriff",
        reference: "PHB 2024",
        bullets: [
            "Eine gepackte Kreatur kann ihre Aktion nutzen, um einen Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik) gegen den SG des Haltegriffs zu machen, wodurch der Zustand bei einem Erfolg für sich selbst beendet wird. Der Zustand endet auch, wenn der Packende den <i>Kampfunfähig</i> Zustand hat oder wenn die Entfernung zwischen dem gepackten Ziel und dem Packenden die Reichweite des Haltegriffs überschreitet.",
	    "Anderen Umständen, die dich festhalten (zum Beispiel Handschellen) zu entkommen, kann eine Probe auf Geschicklichkeit oder Stärke erfordern, je nach Anforderung des Umstands."
        ]
    },
    {
        title: "Helfen",
        icon: "telepathy",
        subtitle: "Gewähre Vorteil",
        description: "Wenn du die Helfen Aktion ausführst, führst du eine der folgenden Aktionen aus.",
        reference: "PHB 2024",
        bullets: [
            "Das Ziel erhält Vorteil auf die nächste Fähigkeitenprobe, die es macht um die Aufgabe zu erfüllen, bei der du ihr hilfst.",
			"Alternativ erhält das Ziel Vorteil auf den nächsten Angriff gegen ein bestimmtes Ziel innerhalb von 5 Fuß neben dir.",
            "Der Vorteil ist einmalig bis zum Beginn deines nächsten Zuges nutzbar."
        ]
    },
    {
        title: "Verstecken (WIP)",
        icon: "hood",
        subtitle: "Heimlichkeit vs. Wahrnehmung",
        description: "Versuche dich zu verstecken",
        reference: "PHB, Seite 192.",
        bullets: [
            "Du kannst dich nicht vor einer Kreatur verstecken, die dich sehen kann. Du musst volle Deckung haben, in einem komplett verschleierten Bereich sein, unsichtbar sein oder anderweitig die Sicht des Feindes blockieren.",
            "Wirf eine Probe auf Geschicklichkeit (Heimlichkeit), wenn du versuchst dich zu verstecken und notiere das Ergebnis. Bis du entdeckt wirst, oder aufhörst dich zu verstecken wird dieses Ergebnis von Proben auf Weisheit (Wahrnehmung) von Kreaturen, die aktiv nach dir oder nach Zeichen deiner Anwesenheit suchen, gekontert.",
            "Eine Kreatur bemerkt dich auch ohne zu suchen, wenn das Ergebnis deiner Heimlichkeits-Probe kleiner oder gleich seiner passiven Wahrnehmung ist.",
			"Wenn du Geräusche machst (zum Beispiel eine Warnung rufen, oder eine Vase umstoßen), verrätst du deine Position und wirst entdeckt.",
			"Ob du aus deinem Versteck heraustreten und trotzdem noch für den Rest deines Zuges als versteckt gelten kannst, entscheidet der DM.",
            "Außerhalb des Kampfes kannst du außerdem Proben auf Geschicklichkeit (Heimlichkeit) ablegen um dich vor Feinden zu tarnen, an Wachen vorbei zu schleichen, entkommen ohne bemerkt zu werden oder an jemanden heran zu schleichen ohne gesehen oder gehört zu werden."
        ]
    },
    {
        title: "Suchen",
        icon: "magnifying-glass",
        subtitle: "Wahrnehmung, Nachforschen",
        description: "Widme deine Aufmerksamkeit ganz der Suche nach etwas",
        reference: "PHB, Seite 192.",
        bullets: [
            "Abhängig davon wonach und wie du suchst, kann der DM eine Probe auf Weisheit (Wahrnehmung) oder auf Intelligenz (Nachforschen) verlangen."
        ]
    },
    {
        title: "Vorbereiten (WIP)",
        icon: "stopwatch",
        subtitle: "Wähle Auslöser und Aktion",
        description: "Wähle einen Auslöser und deine darauf folgende Aktion",
        reference: "PHB, Seiten 192-193.",
        bullets: [
            "Zunächst legst du fest, welcher wahrnehmbare Umstand der Auslöser deiner Reaktion ist.",
	    "Dann wählst du eine Aktion, die du daraufhin ausführen wirst, oder ob du dich daraufhin bewegen möchtest.",
            "Wenn der Auslöser eintritt kannst du entweder sofort folgend deine Reaktion ausführen oder den Auslöser ignorieren.",
            "Wenn du einen Zauberspruch vorbereitest wirkst du ihn ganz normal, aber hältst seine Energie, die du mit deiner Reaktion entfesselst, wenn der Auslöser eintritt. Dazu muss ein Zauberspruch eine Zauberzeit von 1 Aktion haben. Die Energie zu halten erfordert Konzentration."
        ]
    },
    {
        title: "Nutze ein Merkmal",
        icon: "embrassed-energy",
        subtitle: "Spezies-/Klassenmerkmal",
        description: "Nutze ein Spezies- oder Klassenmerkmal, das eine Aktion verbraucht",
        reference: "Siehe die Beschreibung des Merkmals",
        bullets: [

        ]
    },
    {
        title: "Erste Hilfe",
        icon: "medical-pack",
        subtitle: "Medizin",
        description: "Stabilisiere eine Kreatur und verhindere, dass sie stirbt",
        reference: "PHB, Seite 197.",
        bullets: [
            "Du kannst versuchen einer Kreatur mit 0 Trefferpunkten Erste Hilfe zu leisten, indem du einen Probe auf Weisheit (Medizin) gegen HG 10 ausführst. Bei einem Erfolg ist die Kreatur stabil, hat weiterhin 0 Trefferpunkte und ist <i>bewusstlos</i>, sie muss aber keine Todesrettungswürfe mehr machen.",
			"Eine stabile Kreatur, die nicht geheilt wird, kommt nach 1d4 Stunden zu Bewusstsein und erhält einen Trefferpunkt zurück"
        ]
    },
    {
        title: "Improvisiere",
        icon: "juggler",
        subtitle: "Jede andere Aktion",
        description: "Vollführe jede Aktion, die du dir vorstellen kannst",
        reference: " ",
        bullets: [
            "Wenn du eine Aktion beschreibst, die nicht in den Regeln beschrieben wird, teilt der DM dir mit ob sie möglich ist und was du gegebenenfalls dafür würfeln musst um heraus zu finden ob du erfolgreich bist."
        ]
    },
    {
        title: "Beeinflussen (WIP)",
        icon: "juggler",
        subtitle: "Jede andere Aktion",
        description: "Vollführe jede Aktion, die du dir vorstellen kannst",
        reference: "PHB, Seite 193.",
        bullets: [
            "With the Influence action, you urge a monster to do something. Describe or roleplay how you’re communicating with the monster. Are you trying to deceive, intimidate, amuse, or gently persuade? The DM then determines whether the monster feels willing, unwilling, or hesitant due to your interaction; this determination establishes whether an ability check is necessary, as explained below.",
	    "Willing. If your urging aligns with the monster’s desires, no ability check is necessary; the monster fulfills your request in a way it prefers.",
	    "Unwilling. If your urging is repugnant to the monster or counter to its alignment, no ability check is necessary; it doesn’t comply.",
	    "Hesitant. If you urge the monster to do something that it is hesitant to do, you must make an ability check, which is affected by the monster’s attitude: Indifferent, Friendly, or Hostile, each of which is defined in this glossary. The Influence Checks table suggests which ability check to make based on how you’re interacting with the monster. The DM chooses the check, which has a default DC equal to 15 or the monster’s Intelligence score, whichever is higher. On a successful check, the monster does as urged. On a failed check, you must wait 24 hours (or a duration set by the DM) before urging it in the same way again.",
	    "<p>With the Influence action, you urge a monster to do something. Describe or roleplay how you’re communicating with the monster. Are you trying to deceive, intimidate, amuse, or gently persuade? The DM then determines whether the monster feels willing, unwilling, or hesitant due to your interaction; this determination establishes whether an ability check is necessary, as explained below.</p><p><em><strong>Willing.</strong></em> If your urging aligns with the monster’s desires, no ability check is necessary; the monster fulfills your request in a way it prefers.</p><p><em><strong>Unwilling.</strong></em> If your urging is repugnant to the monster or counter to its alignment, no ability check is necessary; it doesn’t comply.</p><p><em><strong>Hesitant.</strong></em> If you urge the monster to do something that it is hesitant to do, you must make an ability check, which is affected by the monster’s attitude: Indifferent, Friendly, or Hostile, each of which is defined in this glossary. The Influence Checks table suggests which ability check to make based on how you’re interacting with the monster. The DM chooses the check, which has a default DC equal to 15 or the monster’s Intelligence score, whichever is higher. On a successful check, the monster does as urged. On a failed check, you must wait 24 hours (or a duration set by the DM) before urging it in the same way again.</p><table><caption>Influence Checks</caption><thead><tr><th><p>Ability Check</p></th><th><p>Interaction</p></th></tr></thead><tbody><tr><td><p>Charisma (Täuschen)</p></td><td><p>Deceiving a monster that understands you</p></td></tr><tr><td><p>Charisma (Einschüchtern)</p></td><td><p>Intimidating a monster</p></td></tr><tr><td><p>Charisma (Auftreten)</p></td><td><p>Amusing a monster</p></td></tr><tr><td><p>Charisma (Überzeugen)</p></td><td><p>Persuading a monster that understands you</p></td></tr><tr><td><p>Charisma (Mit Tieren umgehen)</p></td><td><p>Gently coaxing a Beast or Monstrosity</p></td></tr></tbody></table>"
        ]
    },
    {
        title: "Studieren (WIP)",
        icon: "juggler",
        subtitle: "Jede andere Aktion",
        description: "Vollführe jede Aktion, die du dir vorstellen kannst",
        reference: "PHB, Seite 193.",
        bullets: [
            "When you take the Study action, you make an Intelligence check to study your memory, a book, a clue, or another source of knowledge and call to mind an important piece of information about it.",
	    "The Areas of Knowledge table suggests which skills are applicable to various areas of knowledge.",
	    "<table><caption>Areas of Knowledge</caption><thead><tr><th><p>Skill</p></th><th><p>Areas</p></th></tr></thead><tbody><tr><td><p>Arcana</p></td><td><p>Spells, magic items, eldritch symbols, magical traditions, planes of existence, and certain creatures (Aberrations, Constructs, Elementals, Fey, and Monstrosities)</p></td></tr><tr><td><p>History</p></td><td><p>Historic events and people, ancient civilizations, wars, and certain creatures (Giants and Humanoids)</p></td></tr><tr><td><p>Investigation</p></td><td><p>Traps, ciphers, riddles, and gadgetry</p></td></tr><tr><td><p>Nature</p></td><td><p>Terrain, flora, weather, and certain creatures (Beasts, Dragons, Oozes, and Plants)</p></td></tr><tr><td><p>Religion</p></td><td><p>Deities, religious hierarchies and rites, holy symbols, cults, and certain creatures (Celestials, Fiends, and Undead)</p></td></tr></tbody></table>"
        ]
    },
    {
        title: "Nutzen (WIP)",
        icon: "juggler",
        subtitle: "Interagiere mit Objekten",
        description: "Verwende einen nicht magischen Gegenstand.",
        reference: "PHB 2024",
        bullets: [
            "Normalerweise interagierst du mit einem Objekt, während du etwas anderes tust, z. B. wenn du im Rahmen der Angriffsaktion ein Schwert ziehst. Wenn ein Objekt eine Aktion erfordert, um es zu benutzen, führst du die Nutzen Aktion aus.",
        ]
    }	
]
