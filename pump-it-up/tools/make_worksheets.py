from pathlib import Path
import xml.etree.ElementTree as ET
import subprocess
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader

root=Path(__file__).resolve().parents[1]
app=root; scratch=root/'work/worksheets';scratch.mkdir(parents=True,exist_ok=True)
out=app/'worksheets';out.mkdir(exist_ok=True)
items=[('overview','Heart, lungs, and body','Trace a complete blood circuit. Explain what changes at the lungs and body.'),('heart','Inside the heart','Name the four valves in blood-flow order. Explain what valves prevent.'),('lungs','Airways and lungs','Trace inhaled air to the alveoli. What does the diaphragm do when you inhale?'),('exchange','Gas exchange and blood','Explain where each gas moves. Name a job for each of the four blood components.')]
ET.register_namespace('','http://www.w3.org/2000/svg')
for blank in [False,True]:
 dest=out/('pump-it-up-blank.pdf' if blank else 'pump-it-up-labeled.pdf')
 c=canvas.Canvas(str(dest),pagesize=(612,792));c.setTitle('Pump It Up - '+('blank worksheets' if blank else 'labeled reference sheets'))
 for i,(name,title,prompt) in enumerate(items):
  tree=ET.parse(app/'assets'/f'{name}.svg')
  if blank:
   for parent in tree.iter():
    for child in list(parent):
     if 'diagram-label' in child.get('class','').split():parent.remove(child)
  svg=scratch/f'{name}-{blank}.svg';tree.write(svg,encoding='unicode')
  png=scratch/f'{name}-{blank}.png'
  subprocess.run(['magick','-background','white','-density','192',str(svg),'-resize','1600x1280','-depth','8',str(png)],check=True)
  c.setFillColor(HexColor('#16344a'));c.setFont('Helvetica-Bold',22);c.drawString(36,747,'Pump It Up')
  c.setFont('Helvetica',11);c.drawRightString(576,750,('BLANK WORKSHEET' if blank else 'LABELED REFERENCE')+f'  |  {i+1} / 4')
  c.setFont('Helvetica',10);c.drawString(36,721,'Name: ___________________________   Partner: ___________________________')
  c.drawImage(ImageReader(str(png)),36,262,width=540,height=432)
  c.setFont('Helvetica-Bold',10);c.drawString(36,242,'Color key: coral = oxygen-rich blood; blue = oxygen-poor blood; gold = air / gases.')
  c.setFont('Helvetica',10);c.drawString(36,226,'Arteries carry blood away from the heart. Veins carry blood toward the heart.')
  c.setFont('Helvetica-Bold',11);c.drawString(36,197,'Explain the connection')
  c.setFont('Helvetica',10);c.drawString(36,178,prompt)
  c.setStrokeColor(HexColor('#b9cbd3'))
  for y in [150,124,98]:c.line(36,y,576,y)
  c.setFont('Helvetica',8);c.setFillColor(HexColor('#526a7a'))
  c.drawString(36,61,'Original schematic artwork. Not to scale. Supports 2027 NC Division A anatomy and pathways.')
  c.drawString(36,48,'Sources: NIH NHLBI heart/lung guides; NCSO 2027 Division A manual, section 9. Diseases are not covered.')
  c.showPage()
 c.save();print(dest)
