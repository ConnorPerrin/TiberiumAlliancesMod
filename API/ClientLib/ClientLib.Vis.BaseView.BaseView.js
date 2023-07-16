[object prototypeObject]
function GetBackgroundGraphic(n) {
    switch (n) {
        case $I.KGPDNC.GDIFaction:
            return "battleground/gdi/background_base_GDI.jpg";
        case $I.KGPDNC.NODFaction:
            return "battleground/nod/background_base_NOD.jpg";
        case $I.KGPDNC.FORFaction:
        case $I.KGPDNC.NPCBase:
            return "battleground/forgotten/background_base_FOR.jpg";
        case $I.KGPDNC.NPCCamp:
        case $I.KGPDNC.NPCOutpost:
            return "battleground/forgotten/background_camp_FOR.jpg";
        case $I.KGPDNC.NPCFortress:
            return "battleground/forgotten/background_fortress_FOR.jpg";
        case $I.KGPDNC.NPCEvent:
            return "battleground/forgotten/background_event_camp_FOR.jpg"
    }
    return "battleground/gdi/background_base_GDI.jpg"
}

function GetBackgroundGraphicSeemless(n) {
    switch (n) {
        case $I.KGPDNC.GDIFaction:
            return "battleground/gdi/background_base_top_GDI.png";
        case $I.KGPDNC.NODFaction:
            return "battleground/nod/background_base_top_NOD.png";
        case $I.KGPDNC.FORFaction:
        case $I.KGPDNC.NPCBase:
            return "battleground/forgotten/background_base_top_FOR.png";
        case $I.KGPDNC.NPCCamp:
        case $I.KGPDNC.NPCOutpost:
            return "battleground/forgotten/background_camp_top_FOR.png";
        case $I.KGPDNC.NPCFortress:
            return "battleground/forgotten/background_fortress_top_FOR.png";
        case $I.KGPDNC.NPCEvent:
            return "battleground/forgotten/background_event_camp_top_FOR.png"
    }
    return "battleground/gdi/background_base_top_GDI.png"
}