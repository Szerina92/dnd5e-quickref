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
        icon: "hand",
        subtitle: "Athletik vs. Akrobatik/Athletik",
        description: "Versuche eine Kreatur von dir weg oder zu Boden zu Stoßen",
        reference: "PHB 2024",
        bullets: [
            "Das Ziel muss einen Stärke- oder Geschicklichkeitsrettungswurf (es entscheidet sich für einen) bestehen, oder du stößt es entweder 1,5 Meter weit weg oder versetzt es in den <i>Liegend</i> Zustand. Der SG für den Rettungswurf beträgt 8 plus deinen Stärkemodifikator und Übungsbonus. Dieses Stoßen ist nur möglich, wenn das Ziel nicht mehr als eine Größe größer ist als du."
        ]
    },
    {
        title: "Magie",
        icon: "magic-swirl",
        subtitle: "Zauberzeit: 1 Aktion/länger",
        description: "Wirke einen Zauber mit einer Zauberzeit von 1 Aktion oder länger",
        reference: "PHB 2024",
        bullets: [
            "Wenn du die Magie Aktion ausführst, wirkst du einen Zauber mit einer Zauberzeit von einer Aktion, verwendest ein Merkmal oder ein Magisches Item, das eine Magie Aktion zur Aktivierung erfordert.",
	    "<em><strong>Ein Zauber mit einem Zauberplatz pro Zug.</em></strong> In einem Zug kannst du nur einen Zauberplatz aufwenden, um einen Zauber zu wirken. Diese Regel bedeutet, dass du beispielsweise nicht einen Zauber mit einem Zauberplatz mit der Magie Aktion und einen anderen mit einer Bonusaktion im selben Zug wirken kannst.",
	    "<em><strong>Longer Casting Times.</em></strong> Bestimmte Zauber – einschließlich eines Zaubers, der als Ritual gewirkt wird – benötigen mehr Zeit zum Wirken: Minuten oder sogar Stunden. Während du einen Zauber mit einer Zauberzeit von 1 Minute oder mehr wirkst, musst du in jedem deiner Züge die Magie Aktion ausführen und dabei die Konzentration (Siehe <i>Konzentration</i>) aufrechterhalten. Wenn deine Konzentration unterbrochen wird, schlägt der Zauber fehl, aber du verbrauchst keinen Zauberplatz. Um den Zauber erneut zu wirken, musst du von vorne beginnen."
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
            "<em><strong>Hilf bei einer Attributsprüfung.</em></strong> Wähle eine deiner Übungen in Fertigkeiten oder Werkzeuge und einen Verbündeten, der nahe genug ist, um bei einer Attributsprüfung verbal oder physisch zu helfen. Dieser Verbündete hat einen Vorteil bei der nächsten Attributsprüfung, die er mit der gewählten Fertigkeit oder dem gewählten Werkzeug durchführt. Dieser Vorteil verfällt, wenn der Verbündete ihn nicht vor Beginn deines nächsten Zuges nutzt. Der SL hat das letzte Wort, ob deine Hilfe möglich ist.",
	    "<em><strong>Unterstütze bei einem Angriff.</em></strong> Du lenkst einen Feind in einem Umkreis von 1,5 Meter um dich herum kurz ab und verschaffst einem deiner Verbündeten einen Vorteil für den nächsten Angriffswurf gegen diesen Feind. Dieser Vorteil verfällt zu Beginn deines nächsten Zuges."
        ]
    },
    {
        title: "Verstecken",
        icon: "hood",
        subtitle: "Heimlichkeit vs. Wahrnehmung",
        description: "Versuche dich zu verstecken",
        reference: "PHB 2024",
        bullets: [
            "Mit der Verstecken Aktion versuchst du, dich zu verbergen. Dazu musst du einen SG-15-Geschicklichkeitswurf (Heimlichkeit) bestehen, während du komplett verschleiert oder hinter Dreiviertel- oder vollständiger Deckung bist, und du darfst nicht in der Sichtlinie eines Feindes sein; wenn du eine Kreatur sehen kannst, kannst du erkennen, ob sie dich sehen kann.",
            "Bei einem erfolgreichen Wurf hast du den <i>Unsichtbar</i> Zustand. Notiere dir die Summe deines Wurfes, welcher der SG für eine Kreatur ist, die dich mit einem Weisheitswurf (Wahrnehmung) finden kann.",
	    "Der Zustand endet sofort, nachdem eines der folgenden Ereignisse eintritt: Du machst ein Geräusch, das lauter als ein Flüstern ist, ein Feind findet dich, du machst einen Angriffswurf oder du sprichst einen Zauber mit einer verbalen Komponente."	
        ]
    },
    {
        title: "Suchen",
        icon: "magnifying-glass",
        subtitle: "Wahrnehmung, Nachforschen",
        description: "Widme deine Aufmerksamkeit ganz der Suche nach etwas",
        reference: "PHB 2024",
        bullets: [
            "Wenn du die Suchen Aktion ausführst, führst du einen Weisheitswurf durch, um etwas zu erkennen, das nicht offensichtlich ist. Die Suchtabelle gibt an, welche Fertigkeiten bei dieser Aktion anwendbar sind, je nachdem, was du zu entdecken versuchst.",
	    "<table><caption>Suchen</caption><thead><tr><th><p>Fertigkeit</p></th><th><p>Zu Entdeckendes</p></th></tr></thead><tbody><tr><td><p>Motiv Erkennen</p></td><td><p>Gemütszustand einer Kreatur</p></td></tr><tr><td><p>Medizin</p></td><td><p>Krankheit oder Todesursache einer Kreatur</p></td></tr><tr><td><p>Wahrnehmung</p></td><td><p>Versteckte Kreatur oder Gegenstand</p></td></tr><tr><td><p>Überleben</p></td><td><p>Spuren oder Nahrung</p></td></tr></tbody></table>"
        ]
    },
    {
        title: "Vorbereiten",
        icon: "stopwatch",
        subtitle: "Wähle Auslöser und Aktion",
        description: "Wähle einen Auslöser und deine darauf folgende Aktion",
        reference: "PHB 2024",
        bullets: [
            "Du nutzt die Vorbereiten Aktion, um auf einen bestimmten Umstand zu warten, bevor du handelst. Dazu führst du diese Aktion in deinem Zug aus, wodurch du eine Reaktion vor Beginn deines nächsten Zuges ausführen kannst.",
	    "Zuerst entscheidest du, welcher wahrnehmbare Umstand deine Reaktion auslösen wird. Dann wählst du die Aktion, die du als Reaktion auf diesen Auslöser ausführen wirst, oder du entscheidest dich dafür, als Reaktion darauf deine Geschwindigkeit zu erhöhen.",
            "Wenn der Auslöser eintritt, kannst du entweder deine Reaktion direkt nach Beendigung des Auslösers ausführen oder den Auslöser ignorieren.",
            "Wenn du einen Zauber Vorbereitest, wirkst du ihn wie gewohnt (wobei du alle Ressourcen verbrauchst, die für den Zauber benötigt werden), aber du hältst seine Energie zurück, die du mit deiner Reaktion freisetzt, wenn der Auslöser eintritt. Um Vorbereitet werden zu können, muss ein Zauber eine Wirkzeit von einer Aktion haben, und das Zurückhalten der Magie des Zaubers erfordert <i>Konzentration</i>, die du bis zum Beginn deines nächsten Zuges aufrechterhalten musst. Wenn deine Konzentration unterbrochen wird, löst sich der Zauber auf, ohne Wirkung zu zeigen."
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
        title: "Beeinflussen",
        icon: "talk",
        subtitle: "Fordere jemanden auf",
        description: "Fordere ein Monster auf, etwas zu tun.",
        reference: "PHB 2024",
        bullets: [
            "Bei der Beinflussen Aktion forderst du ein Monster auf, etwas zu tun. Beschreibe oder spiele im Rollenspiel, wie du mit dem Monster kommunizierst. Versuchst du, es zu täuschen, einzuschüchtern, zu amüsieren oder sanft zu überreden? Der Spielleiter bestimmt dann, ob sich das Monster aufgrund deiner Interaktion <i>Bereitwillig</i>, <i>Unwillig</i> oder <i>Zögerlich</i> verhält; diese Entscheidung legt fest, ob ein Attributswurf erforderlich ist.",
	    "<em><strong>Bereitwillig.</em></strong> Wenn dein Drängen mit den Wünschen des Monsters übereinstimmt, ist kein Attributswurf erforderlich; das Monster erfüllt deine Bitte auf eine Weise, die ihm zusagt.",
	    "<em><strong>Unwillig.</em></strong> Wenn dein Drängen dem Monster zuwiderläuft oder seiner Ausrichtung widerspricht, ist kein Attributswurf erforderlich; es gehorcht nicht.",
	    "<em><strong>Zögerlich.</em></strong> Wenn du das Monster zu etwas drängst, das es nur zögerlich tut, musst du einen Attributswurf machen, welcher von der Einstellung des Monsters beeinflusst wird: <i>Gleichgültig</i>, <i>Freundlich</i> oder <i>Feindselig</i>. Die Einflussprüfungen Tabelle gibt an, welchen Attributswurf du durchführen musst, je nachdem, wie du mit dem Monster interagierst. Der Spielleiter wählt die Prüfung aus, die einen Standard-SG von 15 oder den Attributswert des Monsters für Intelligenz hat, je nachdem, welcher Wert höher ist. Bei einem Erfolg tut das Monster, was du ihm aufträgst. Bei einer fehlschlag musst du 24 Stunden (oder eine vom Spielleiter festgelegte Dauer) warten, bevor du es erneut auf die gleiche Weise aufforderst.",
	    "</p><table><caption>Einflussprüfungen</caption><thead><tr><th><p>Attributswurf</p></th><th><p>Interaktion</p></th></tr></thead><tbody><tr><td><p>Charisma (Täuschen)</p></td><td><p>Ein Monster täuschen, das dich versteht</p></td></tr><tr><td><p>Charisma (Einschüchtern)</p></td><td><p>Ein Monster einschüchtern</p></td></tr><tr><td><p>Charisma (Auftreten)</p></td><td><p>Ein Monster unterhalten</p></td></tr><tr><td><p>Charisma (Überzeugen)</p></td><td><p>Ein Monster überzeugen, das dich versteht</p></td></tr><tr><td><p>Charisma (Mit Tieren umgehen)</p></td><td><p>Ein Tier oder eine Monstrosität sanft überreden</p></td></tr></tbody></table>"
        ]
    },
    {
        title: "Studieren",
        icon: "book",
        subtitle: "Führe Intelligenzwürfe durch",
        description: "Greife auf Informationen zurück",
        reference: "PHB 2024",
        bullets: [
            "Wenn du die Studieren Aktion nutzt, führst du einen Intelligenzwurf durch, um dein Gedächtnis, ein Buch, einen Hinweis oder eine andere Wissensquelle zu studieren und dir eine wichtige Information darüber ins Gedächtnis zu rufen.",
	    "Die Wissensgebiete Tabelle gibt an, welche Fertigkeiten auf verschiedene Wissensgebiete anwendbar sind.",
	    "<table><caption>Wissensgebiete</caption><thead><tr><th><p>Fertigkeit</p></th><th><p>Bereich</p></th></tr></thead><tbody><tr><td><p>Arkane Kunde</p></td><td><p>Zauber, Magische Gegenstände, unheimliche Symbole, magische Traditionen, Existenzebenen und bestimmte Kreaturen (Aberationen, Konstrukte, Elementare, Feen und Monstrositäten)</p></td></tr><tr><td><p>Geschichte</p></td><td><p>Historische Ereignisse und Personen, alte Zivilisationen, Kriege und bestimmte Kreaturen (Riesen und Humanoide)</p></td></tr><tr><td><p>Nachforschungen</p></td><td><p>Fallen, Chiffren, Rätsel und Spielereien</p></td></tr><tr><td><p>Naturkunde</p></td><td><p>Gelände, Flora, Wetter und bestimmte Kreaturen (Tiere, Drachen, Schleim und Pflanzen)</p></td></tr><tr><td><p>Religion</p></td><td><p>Gottheiten, religiöse Hierarchien und Riten, heilige Symbole, Kulte und bestimmte Kreaturen (Celestische, Unholde und Untote)</p></td></tr></tbody></table>"
        ]
    },
    {
        title: "Nutzen",
        icon: "object",
        subtitle: "Interagiere mit Objekten",
        description: "Verwende einen nicht magischen Gegenstand.",
        reference: "PHB 2024",
        bullets: [
            "Normalerweise interagierst du mit einem Objekt, während du etwas anderes tust, z. B. wenn du im Rahmen der Angriffsaktion ein Schwert ziehst. Wenn ein Objekt eine Aktion erfordert, um es zu benutzen, führst du die Nutzen Aktion aus.",
        ]
    }	
]
