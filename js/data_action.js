data_action = [
    {
        title: "Angriff",
        icon: "crossed-swords",
        subtitle: "Nah- oder Fernkampfangriff",
        description: "Wenn du die Angriffsaktion ausführst, kannst du einen Angriffswurf mit einer Waffe oder einem waffenlosen Angriff machen.",
        reference: "PHB 2024",
        bullets: [
            "<em><strong>Waffen anlegen und ablegen.</em></strong> Du kannst eine Waffe entweder anlegen oder ablegen, wenn du im Rahmen dieser Aktion einen Angriff ausführst. Dies geschieht entweder vor oder nach dem Angriff. Wenn du eine Waffe vor einem Angriff anlegst, musst du sie für diesen Angriff nicht verwenden. Das Anlegen einer Waffe umfasst das Ziehen aus der Scheide oder das Aufheben. Das Ablegen einer Waffe umfasst das Einstecken, Verstauen oder Fallenlassen.",
	    "<em><strong>Zwischen Angriffen bewegen.</em></strong> Wenn du dich in deinem Zug bewegst und über ein Merkmal wie <i>ZUsätzlicher Angriff</i> verfügst, das dir im Rahmen der Angriffsaktion mehr als einen Angriff ermöglicht, kannst du einen Teil oder die gesamte Bewegung nutzen, um dich zwischen diesen Angriffen zu bewegen.",	
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
	    "<em><strong>Entkommen aus einem Griff.</em></strong> Eine gepackte Kreatur kann ihre Aktion nutzen, um einen Wurf auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik) gegen den SG des Griffs zu machen, wodurch der Zustand bei einem Erfolg für sich selbst beendet wird. Der Zustand endet auch, wenn der Packende den <i>Kampfunfähig</i> Zustand hat oder wenn die Entfernung zwischen dem gepackten Ziel und dem Packenden die Reichweite des Griffs überschreitet."
        ]
    },
    {
        title: "Magie (WIP)",
        icon: "magic-swirl",
        subtitle: "Zauberzeit: 1 Aktion/länger",
        description: "Wirke einen Zauberspruch mit einer Zauberzeit von 1 Aktion oder länger",
        reference: "PHB, Seiten 193,202.",
        bullets: [
            "Du kannst mit deiner Aktion keinen Zauberspruch wirken, während du gleichzeitig einen anderen Zauberspruch mit deiner Bonusaktion wirkst, es sei denn, die Aktion wird für einen Zaubertrick verwendet.",
			"Das Ziel eines Zauberspruchs muss innerhalb der Reichweite des Zauberspruchs sein. Um zu zielen muss der Pfad zwischen dir und dem Ziel frei sein, d.h. das Ziel darf nicht hinter voller Deckung sein.",
			"Zaubersprüche mit Material-Komponenten verbrauchen das Material nicht, sofern dies nicht explizit angegeben ist. Wenn keine Kosten für das Material angegeben sind, kannst du annehmen, dass die Kosten vernachlässigbar sind und dass das Material in deiner Komponententasche verfügbar ist.",
            "Manche Zaubersprüche erfordern, dass du Konzentration aufrecht erhältst um ihre Magie aktiv zu halten. Wenn du die Konzentration verlierst, endet ein solcher Zauberspruch. Du verlierst die Konzentration, wenn du einen anderen Spruch wirkst, der ebenfalls Konzentration erfordert, oder wenn du kampfunfähig bist. Jedes Mal, wenn du Schaden nimmst, musst du eine Probe auf Konstitution werfen. Der Herausforderungsgrad entspricht 10 oder der Hälfte des Schadens, den du nimmst, je nachdem was höher ist.",
			"Zaubersprüche mit einer Zauberzeit von mehr als 1 Aktion müssen über mehrere Runden gezaubert werden, bis die Zauberzeit erreicht ist. Dazu wendest du in jeder Runde deine Aktion auf. Während dieser Zeit musst du Konzentration aufrecht erhalten. Schaffst du es nicht die Konzentration zu halten, bricht der Zauber ab, aber es wird kein Zauberplatz verbraucht."
        ]
    },
    {
        title: "Spurt",
        icon: "sprint",
        subtitle: "Doppelte Geschwindigkeit",
        description: "Erhalte zusätzliche Bewegung für den aktuellen Zug",
        reference: "PHB, Seite 192.",
        bullets: [
            "Die Erhöhung entspricht deiner Geschwindigkeit, nachdem alle Bonus angerechnet wurden."
        ]
    },
    {
        title: "Rückzug",
        icon: "journey",
        subtitle: "Verhindere Gelegenheitsangriffe",
        description: "Deine Bewegung löst für den Rest deines Zuges keine Gelegenheitsangriffe aus",
        reference: "PHB, Seite 192.",
        bullets: [
        ]
    },
    {
        title: "Ausweichen",
        icon: "aura",
        subtitle: "Stärke deine Abwehr",
        description: "Konzentriere dich darauf Angriffen auszuweichen",
        reference: "PHB, Seite 192.",
        bullets: [
            "Bis zum Start deines nächsten Zuges ist jeder Angriff gegen dich im Nachteil, wenn du den Angreifer sehen kannst. Außerdem machst du Geschicklichkeits-Rettungswürfe mit Vorteil.",
			"Du verlierst diese Vorteile, wenn du <i>kampfunfähig</i> wirst oder wenn deine Geschwindigkeit auf 0 fällt."
        ]
    },
    {
        title: "Entkommen",
        icon: "manacles",
        subtitle: "Akrobatik/Athletik vs. Athletik",
        description: "Entkomme einem Haltegriff",
        reference: "PHB, Seite 195.",
        bullets: [
            "Um einem Haltegriff zu entkommen, musst du eine Probe auf Stärke (Athletik) oder Geschicklichkeit (Akrobatik) gegen eine Probe auf Stärke (Athletik) der Kreatur, die dich gepackt hält, gewinnen.",
			"Anderen Umständen, die dich festhalten (zum Beispiel Handschellen) zu entkommen, kann eine Probe auf Geschicklichkeit oder Stärke erfordern, je nach Anforderung des Umstands."
        ]
    },
    {
        title: "Helfen",
        icon: "telepathy",
        subtitle: "Gewähre Vorteil",
        description: "Gewähre einem Verbündeten Vorteil auf eine Fähigkeitenprobe oder einen Angriff",
        reference: "PHB, Seite 192.",
        bullets: [
            "Das Ziel erhält Vorteil auf die nächste Fähigkeitenprobe, die es macht um die Aufgabe zu erfüllen, bei der du ihr hilfst.",
			"Alternativ erhält das Ziel Vorteil auf den nächsten Angriff gegen ein bestimmtes Ziel innerhalb von 5 Fuß neben dir.",
            "Der Vorteil ist einmalig bis zum Beginn deines nächsten Zuges nutzbar."
        ]
    },
    {
        title: "Verstecken",
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
            "Außerhalb des Kampfes kannst du außerdem Proben auf Geschicklichkeit (Heimlichkeit) ablegen um dich vor Feinden zu tarnen, an Wachen vorbei zu schleichen, entkommen ohne bemerkt zu werden oder an jemanden heran zu schleichen ohne gesehen oder gehört zu werden.",
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
        title: "Vorbereiten",
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
        subtitle: "Volks-/Klassenmerkmal",
        description: "Nutze ein Volks- oder Klassenmerkmal, das eine Aktion verbraucht",
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
        reference: "PHB, Seite 193.",
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
            "Wenn du eine Aktion beschreibst, die nicht in den Regeln beschrieben wird, teilt der DM dir mit ob sie möglich ist und was du gegebenenfalls dafür würfeln musst um heraus zu finden ob du erfolgreich bist."
        ]
    },
    {
        title: "Studieren (WIP)",
        icon: "juggler",
        subtitle: "Jede andere Aktion",
        description: "Vollführe jede Aktion, die du dir vorstellen kannst",
        reference: "PHB, Seite 193.",
        bullets: [
            "Wenn du eine Aktion beschreibst, die nicht in den Regeln beschrieben wird, teilt der DM dir mit ob sie möglich ist und was du gegebenenfalls dafür würfeln musst um heraus zu finden ob du erfolgreich bist."
        ]
    },
    {
        title: "Nutzen (WIP)",
        icon: "juggler",
        subtitle: "Text",
        description: "Text",
        reference: "PHB 2024",
        bullets: [
            "Text"
        ]
    }	
]
