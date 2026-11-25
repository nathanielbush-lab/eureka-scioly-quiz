from pathlib import Path
import json
root = Path(__file__).resolve().parents[1]
names = ['overview', 'heart', 'lungs', 'exchange']
diagrams = {name: (root / 'assets' / f'{name}.svg').read_text(encoding='utf-8') for name in names}
(root / 'diagrams.js').write_text('window.PUMP_DIAGRAMS = ' + json.dumps(diagrams, ensure_ascii=False) + ';\n', encoding='utf-8')
print('Bundled four SVGs for network-free use.')
