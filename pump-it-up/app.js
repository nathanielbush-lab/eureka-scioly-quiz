'use strict';
(() => {
  const D = window.PUMP_DATA, art = window.PUMP_DIAGRAMS;
  const $ = id => document.getElementById(id);
  const state = {mode:'explore',view:'overview',part:'',labels:true,journey:'blood',step:0,playing:false,checks:{},practice:null,station:false};
  let timer = null;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const announce = text => { $('announcement').textContent = text; };
  const button = (label,action,extra='') => `<button data-action="${action}" ${extra}>${label}</button>`;
  const question = () => state.practice?.items[state.practice.index];
  const currentStep = () => D.journeys[state.journey].steps[state.step];
  const checkKey = () => `${state.journey}:${state.step}`;
  function stop() { clearTimeout(timer); timer=null; state.playing=false; }
  function renderViews() {
    $('views').innerHTML=Object.entries(D.views).map(([id,v])=>`<button data-view="${id}" aria-pressed="${id===state.view}" ${state.mode==='practice'?'disabled':''}>${v.name}</button>`).join('');
  }
  function renderDiagram() {
    const v=D.views[state.view];
    $('diagram-title').textContent=v.title;
    $('view-kicker').textContent=v.kicker;
    $('diagram').innerHTML=art[state.view];
    const svg=$('diagram').querySelector('svg');
    svg.setAttribute('role','group');
    svg.setAttribute('aria-label',v.title);
    const testing=state.mode==='practice' && !state.practice?.done;
    $('diagram').classList.toggle('hide-labels',!state.labels || testing);
    $('diagram').classList.toggle('breathe-in',state.mode==='journey' && state.journey==='breathing' && state.step<2);
    $('diagram').classList.toggle('breathe-out',state.mode==='journey' && state.journey==='breathing' && state.step===2);
    if(state.mode==='journey' && state.journey==='breathing' && state.step<2){
      $('diagram').querySelector('[data-part="diaphragm"] path').setAttribute('d','M222 569Q400 540 578 569L578 588Q400 559 222 588Z');
    }
    document.querySelector('.flow-key').hidden=state.view==='lungs';
    $('labels').checked=state.labels && !testing;
    $('labels').disabled=testing;
    $('diagram').querySelectorAll('[data-part]').forEach(el=>{
      const id=el.dataset.part;
      el.setAttribute('role','button');el.setAttribute('tabindex','0');el.setAttribute('aria-label',`Select ${D.parts[id].name}`);
      el.setAttribute('aria-pressed',String(id===state.part));el.classList.toggle('selected',id===state.part);
      if(state.mode==='practice') el.querySelectorAll('title').forEach(t=>t.remove());
    });
    $('structure-list').innerHTML=v.parts.map(id=>`<button data-part="${id}" aria-pressed="${id===state.part}">${D.parts[id].name}</button>`).join('');
    $('partner-prompt').textContent=v.prompt;
    $('diagram-note').textContent=state.view==='heart'?'Flow schematic: chambers and valves are enlarged. Vessel positions are simplified.':'Simplified teaching diagram. Shapes and distances are not to scale.';
    renderViews();
  }
  function selectHighlight(id) {
    state.part=id;
    document.querySelectorAll('[data-part]').forEach(el=>{const on=el.dataset.part===id;el.classList.toggle('selected',on);el.setAttribute('aria-pressed',String(on));});
  }
  function explorePanel() {
    if(!state.part) return `<p class="small-label">Explore the connections</p><h2>Every part has a job.</h2><p class="body-copy">Select a structure to discover what it does and where it fits in the system.</p><div class="fact">Start with the heart, then follow its connections to the lungs and body.</div><div class="connections">${button('Trace a complete circuit','start-journey')}</div>`;
    const p=D.parts[state.part];
    const links=state.part==='heart'?['heart']:state.part==='lungs'?['lungs','exchange']:['alveoli','alveolus','capillaries','red-cells'].includes(state.part)?['exchange']:[];
    return `<p class="small-label">Structure & function</p><h2>${p.name}</h2><p class="body-copy">${p.text}</p><div class="fact">${p.remember}</div><details><summary>Learn more</summary><p>${p.more}</p></details><div class="connections">${links.filter(v=>v!==state.view).map(v=>`<button data-view="${v}">Explore ${D.views[v].name.toLowerCase()}</button>`).join('')}</div>`;
  }
  function journeyPanel() {
    const j=D.journeys[state.journey],s=currentStep(),check=s.check,answer=state.checks[checkKey()];
    const solved=answer===check?.answer;
    return `<label class="small-label" for="journey-select">Choose a journey</label><select id="journey-select" class="journey-select">${Object.entries(D.journeys).map(([id,j])=>`<option value="${id}" ${id===state.journey?'selected':''}>${j.name}</option>`).join('')}</select><span class="step-count">Step ${state.step+1} of ${j.steps.length}</span><div class="step-progress"><span style="width:${100*(state.step+1)/j.steps.length}%"></span></div><h2>${D.parts[s.id].name}</h2><p class="body-copy">${s.text}</p>${check?`<div class="fact"><strong>Pause & predict</strong><p>${check.prompt}</p><div class="choice-row">${check.options.map(id=>`<button data-check="${id}" ${solved?'disabled':''}>${D.parts[id].name}</button>`).join('')}</div>${answer?`<p class="check-result">${solved?'Correct. Continue when you are ready.':'Try again. '+D.parts[answer].text}</p>`:''}</div>`:''}<div class="transport">${button('Back','back',state.step===0?'disabled':'')}${button(state.playing?'Pause':'Play','play',state.step===j.steps.length-1?'disabled':'')}${button(state.step===j.steps.length-1?'Replay':'Next','next','class="primary"')}${button('Restart','restart')}</div><p class="step-count" style="margin-top:14px">Play pauses at prediction questions. You can also move one step at a time.</p>`;
  }
  function practicePanel() {
    const p=state.practice;
    if(!p) return `<p class="small-label">Look. Think. Select.</p><h2>Put the diagram to work.</h2><p class="body-copy">Identify structures, follow a route, and explain a function. Select your answer on the diagram or use the structure buttons.</p><label class="check-label"><input id="station" type="checkbox" ${state.station?'checked':''}> Station mode</label><p class="step-count">Station mode hides hints and saves feedback until the end. Practice mode lets you retry.</p><div class="connections">${button('Start 8 questions','begin-practice','class="primary"')}${button('All 16 questions','begin-all')}</div><div class="fact" style="margin-top:20px">Labels are hidden during practice. The score counts correct first attempts; a retry still helps you learn.</div>`;
    if(p.done) {
      const correct=p.records.filter(r=>r.correct).length;
      const missed=p.records.filter(r=>!r.correct);
      return `<div class="practice-summary"><p class="small-label">Session complete</p><h2>You followed the connections.</h2><div class="score">${correct} / ${p.items.length}</div><p>Correct on the first attempt${p.hints?' · '+p.hints+' hint'+(p.hints===1?'':'s')+' used':''}.</p>${missed.length?`<p>Review ${missed.length} connection${missed.length===1?'':'s'}, then try them again.</p>${button('Retry missed questions','retry-missed','class="primary"')}`:'<p>Try explaining each route aloud without the labels.</p>'}<div class="connections">${button('New practice','new-practice')}${button('Explore again','explore')}</div>${p.records.map((r,i)=>`<div class="review-item"><strong>${r.correct?'Correct':'Review'} · ${i+1}</strong><p>${r.q.prompt}</p><p>Your first answer: ${D.parts[r.first].name}.</p><p><strong>${D.parts[r.q.answer].name}</strong>. ${r.q.why}</p></div>`).join('')}</div>`;
    }
    const q=question(),record=p.records[p.index],chosen=p.choice;
    let feedback='';
    if(state.station && chosen) feedback='<div class="feedback neutral">Answer recorded. You may change it before continuing.</div>';
    else if(p.correct) feedback=`<div class="feedback"><strong>${p.revealed?'Answer revealed: '+D.parts[q.answer].name:'That’s right.'}</strong><p>${q.why}</p></div>`;
    else if(chosen) feedback=`<div class="feedback retry"><strong>Try another structure.</strong><p>${D.parts[chosen].name}: ${D.parts[chosen].text}</p></div>`;
    return `<p class="small-label">${state.station?'Station':'Practice'} · ${p.index+1} of ${p.items.length}</p><div class="step-progress"><span style="width:${100*p.index/p.items.length}%"></span></div><h2 class="question" tabindex="-1" id="question-title">${q.prompt}</h2><p class="step-count">Select a structure on the diagram or below it.</p>${feedback}${p.hint?`<div class="hint">${q.hint}</div>`:''}<div class="transport">${!state.station?button('Show a hint','hint',p.hint?'disabled':''):''}${button(p.index===p.items.length-1?'Finish':'Next question','next-question',`class="primary" ${state.station?(!chosen?'disabled':''):(!p.correct?'disabled':'')}`)}</div>${!state.station && record && !p.correct?button('Show answer','reveal','class="text-button"'):''}<div class="connections">${button('End this session','end-session','class="text-button"')}</div>`;
  }
  function renderPanel() {
    $('panel').innerHTML=state.mode==='explore'?explorePanel():state.mode==='journey'?journeyPanel():practicePanel();
  }
  function render() {
    document.body.dataset.mode=state.mode;
    document.querySelectorAll('button[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===state.mode)));
    $('mode-intro').innerHTML=state.mode==='explore'?'<p>Explore at your own pace. Select a structure to see its job.</p>':state.mode==='journey'?'<p>Follow one route at a time. The diagram changes as the journey moves.</p>':'<p>Use the picture to reason through each question. Labels stay hidden until you finish.</p>';
    renderDiagram(); renderPanel();
  }
  function setMode(mode) {
    stop();state.mode=mode;state.part='';
    if(mode==='journey') {state.view=currentStep().view;state.part=currentStep().id;}
    if(mode==='practice') {state.practice=null;}
    render();
  }
  function setView(view) {
    if(state.mode==='practice') return;
    if(state.mode==='journey') {stop();state.mode='explore';}
    state.view=view;state.part='';render();
  }
  function selectPart(id) {
    if(!D.parts[id]) return;
    if(state.mode==='practice' && state.practice && !state.practice.done) {
      const p=state.practice,q=question();
      if(p.correct && !state.station) return;
      p.choice=id;
      if(state.station) p.records[p.index]={q,first:id,correct:id===q.answer};
      else if(!p.records[p.index]) p.records[p.index]={q,first:id,correct:id===q.answer};
      p.correct=id===q.answer;
      selectHighlight(id);renderPanel();
      announce(state.station?'Answer recorded.':p.correct?'Correct. '+q.why:'Try again. '+D.parts[id].text);
      return;
    }
    if(state.mode==='journey') {stop();state.mode='explore';render();}
    if(state.mode==='practice') return;
    selectHighlight(id);renderPanel();
    document.querySelectorAll('button[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===state.mode)));
    announce(D.parts[id].name+'. '+D.parts[id].text);
  }
  function moveStep(delta) {
    const length=D.journeys[state.journey].steps.length;
    state.step=Math.max(0,Math.min(length-1,state.step+delta));
    const s=currentStep();state.view=s.view;state.part=s.id;
    if(state.step===length-1 || s.check && state.checks[checkKey()]!==s.check.answer) stop();
    render();announce(`Step ${state.step+1}. ${s.text}`);
  }
  function schedule() {
    if(!state.playing) return;
    timer=setTimeout(()=>{moveStep(1);if(state.playing)schedule();},7000);
  }
  function shuffle(items) {const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  function beginPractice(items) {
    state.practice={items,index:0,records:[],choice:null,correct:false,revealed:false,hint:false,hints:0,done:false};
    state.part='';state.view=items[0].view;render();$('question-title')?.focus({preventScroll:true});
  }
  function begin(count) {
    // Every short session includes all four views instead of sampling one topic by chance.
    const items=count===16?shuffle(D.questions):shuffle(Object.keys(D.views).flatMap(v=>shuffle(D.questions.filter(q=>q.view===v)).slice(0,2)));
    beginPractice(items);
  }
  document.addEventListener('click',event=>{
    const mode=event.target.closest('button[data-mode]');if(mode){setMode(mode.dataset.mode);return;}
    const view=event.target.closest('[data-view]');if(view){setView(view.dataset.view);return;}
    const part=event.target.closest('[data-part]');if(part){selectPart(part.dataset.part);return;}
    const check=event.target.closest('[data-check]');if(check){state.checks[checkKey()]=check.dataset.check;renderPanel();announce(check.dataset.check===currentStep().check.answer?'Correct.':'Try again.');return;}
    const el=event.target.closest('[data-action]');if(!el)return;
    switch(el.dataset.action){
      case 'explore':setMode('explore');break;
      case 'start-journey':state.journey='blood';state.step=0;setMode('journey');break;
      case 'back':stop();moveStep(-1);break;
      case 'next':stop();if(state.step===D.journeys[state.journey].steps.length-1){state.step=-1;state.checks={};}moveStep(1);break;
      case 'restart':stop();state.step=0;state.checks={};moveStep(0);break;
      case 'play':if(state.playing){stop();renderPanel();}else if(currentStep().check && state.checks[checkKey()]!==currentStep().check.answer){announce('Answer the prediction before playing.');}else{state.playing=true;renderPanel();schedule();}break;
      case 'begin-practice':begin(8);break;
      case 'begin-all':begin(16);break;
      case 'hint':state.practice.hint=true;state.practice.hints++;renderPanel();announce(question().hint);break;
      case 'reveal':state.practice.correct=true;state.practice.revealed=true;selectHighlight(question().answer);renderPanel();announce('Answer: '+D.parts[question().answer].name+'. '+question().why);break;
      case 'next-question':{
        const p=state.practice;if(!p || (!state.station&&!p.correct) || (state.station&&!p.choice))break;
        p.index++;state.part='';
        if(p.index===p.items.length){p.done=true;render();announce('Session complete. Review your answers.');}
        else{p.choice=null;p.correct=false;p.revealed=false;p.hint=false;state.view=question().view;render();$('question-title')?.focus({preventScroll:true});}
        break;
      }
      case 'retry-missed':beginPractice(state.practice.records.filter(r=>!r.correct).map(r=>r.q));break;
      case 'new-practice':case 'end-session':state.practice=null;state.part='';render();break;
    }
  });
  $('diagram').addEventListener('keydown',e=>{const part=e.target.closest('[data-part]');if(part && ['Enter',' '].includes(e.key)){e.preventDefault();selectPart(part.dataset.part);}});
  document.addEventListener('change',e=>{
    if(e.target.id==='labels'){state.labels=e.target.checked;renderDiagram();}
    if(e.target.id==='journey-select'){stop();state.journey=e.target.value;state.step=0;moveStep(0);}
    if(e.target.id==='station')state.station=e.target.checked;
    if(e.target.id==='motion'){document.body.classList.toggle('reduce-motion',e.target.checked);stop();renderPanel();}
  });
  $('motion').checked=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.body.classList.toggle('reduce-motion',$('motion').checked);
  document.addEventListener('visibilitychange',()=>{if(document.hidden){stop();renderPanel();}});
  window.addEventListener('pagehide',stop);
  $('zoom').addEventListener('click',()=>{const on=$('diagram').classList.toggle('enlarged');$('zoom').setAttribute('aria-pressed',String(on));$('zoom').textContent=on?'Fit diagram':'Enlarge';announce(on?'Diagram enlarged. Scroll inside it to see the edges.':'Diagram fitted to the screen.');});
  $('open-app').href=location.href;
  render();
})();

