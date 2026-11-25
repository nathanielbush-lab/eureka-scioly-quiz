import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const context={window:{}};vm.createContext(context);
for(const file of ['content.js','diagrams.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context);
const {PUMP_DATA:d,PUMP_DIAGRAMS:art}=context.window;
let structures=0,steps=0;
for(const [id,v] of Object.entries(d.views)){
  const svg=fs.readFileSync(path.join(root,'assets',id+'.svg'),'utf8');
  assert.equal(svg.replace(/\r\n/g,'\n'),art[id].replace(/\r\n/g,'\n'),id+' bundled SVG must match editable source');
  const ids=[...svg.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(ids.length,new Set(ids).size,id+' duplicate XML IDs');
  const parts=[...svg.matchAll(/data-part="([^"]+)"/g)].map(m=>m[1]);
  assert.deepEqual([...parts].sort(),[...v.parts].sort(),id+' interactive structures');
  for(const part of v.parts){assert.ok(d.parts[part]?.text);structures++;}
  assert.ok(!/<image\b/.test(svg),'No embedded raster image');
  const png=fs.readFileSync(path.join(root,'assets',id+'.png'));
  assert.equal(png.readUInt32BE(16),800);assert.equal(png.readUInt32BE(20),640);
  assert.ok(Buffer.byteLength(svg)<=png.length,id+' SVG budget');
}
for(const j of Object.values(d.journeys))for(const s of j.steps){
  assert.ok(d.views[s.view].parts.includes(s.id),'Journey target must exist in active diagram');steps++;
  if(s.check){assert.ok(s.check.options.includes(s.check.answer));for(const id of s.check.options)assert.ok(d.parts[id]);}
}
for(const q of d.questions){assert.ok(d.views[q.view].parts.includes(q.answer),'Question answer must be selectable');assert.ok(q.why&&q.hint);}
assert.equal(d.questions.length,16);
assert.deepEqual(Array.from(d.journeys.blood.steps.filter(s=>s.id.endsWith('-valve')).map(s=>s.id)),['tricuspid-valve','pulmonary-valve','mitral-valve','aortic-valve']);
for(const view of Object.keys(d.views))assert.ok(d.questions.filter(q=>q.view===view).length>=2,'Each view must support the balanced 8-question session');
console.log(JSON.stringify({passed:true,views:4,interactiveStructures:structures,journeySteps:steps,questions:16,checks:['source/bundle match','unique SVG IDs','selectable questions and journey targets','four-valve blood route','800x640 previews','SVG byte budgets']},null,2));

