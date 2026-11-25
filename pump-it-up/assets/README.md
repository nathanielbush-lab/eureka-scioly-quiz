# Pump It Up diagrams

Four original editable SVG diagrams, with matching 800 × 640 PNG exports. Every selectable structure is a named `g` element with matching `id` and `data-part`. SVG text is editable. No images, external fonts, or scripts are embedded.

- `overview.svg`: pulmonary and systemic circuits.
- `heart.svg`: four chambers and four valves in a flow schematic. Positions are simplified deliberately; this is not a literal anatomical cutaway. The person's right is on the viewer's left.
- `lungs.svg`: side-view head and front-view lungs, combined to make the air pathway visible. The right lung has three lobes and the left has two. Airway branches and alveoli are enlarged.
- `exchange.svg`: gas exchange across alveolar and capillary walls. The separate blood inset enlarges blood components and does not show their actual proportions. Red cells remain red even when the vessel uses blue to represent lower oxygen.

Blue represents lower oxygen, and coral represents higher oxygen. These colors describe oxygen level, not whether a vessel is an artery or vein. Arteries carry blood away from the heart; veins carry blood toward it. Blood is always red.

## Integration

Insert SVG markup inline to connect `data-part` groups to app controls. Use the app's equivalent structure list for small screens and keyboard access. Change the root's static `role="img"` to `role="group"` when enabling interactive descendants. Each selectable group already has a title, button role, tabindex, and accessible name. The app must handle Enter/Space and update selected state.

All ordinary labels use `.diagram-label`; the title and explanatory notes use `.diagram-heading` and `.diagram-note`. `.selected` has a basic highlight, which the app can strengthen. Leave the explanatory notes visible when hiding labels, especially the orientation and color keys.

## Content references

Reviewed November 24, 2026:

- [NIH: How blood flows through the heart](https://www.nhlbi.nih.gov/health/heart/blood-flow): chamber order, valve connections, and pulmonary/systemic circulation.
- [NIH: The respiratory system](https://www.nhlbi.nih.gov/health/lungs/respiratory-system): airways, lung lobes, and alveolar gas exchange.
- Coach-supplied *2027 Division A Event Manual*, Pump It Up §9: event scope.

The drawings are original geometry, not copies of the illustrations in those references. They are teaching schematics and are not intended for clinical use.

## Checks

All files parse as XML, have unique IDs within each SVG, and contain all required selectable IDs. Matching PNGs were rendered directly from the saved sources and visually reviewed. `verification.json` records actual file sizes and dimensions. Each SVG is smaller than its matching PNG. A representative chamber recolor was tested separately without changing the delivered artwork.
