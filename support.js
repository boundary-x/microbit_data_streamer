/* Read-only data streamer guide. */
(()=>{'use strict';const $=id=>document.getElementById(id);const support=$('support-card');support.innerHTML="<summary><span><strong>사용 가이드 및 지원</strong><small>사용법 · 예제 코드 · 문제 해결</small></span><span class=\"support-chevron\" aria-hidden=\"true\">⌄</span></summary><div class=\"support-content\"><p>센서 데이터를 기록하고 엑셀로 분석해보세요.</p><div class=\"support-actions\"><button type=\"button\" data-tour=\"all\" class=\"support-primary\">사용법 둘러보기 →</button></div><details class=\"support-section\" id=\"help-examples\"><summary>마이크로비트 예제 코드</summary><div class=\"support-answer\"><p><a href=\"https://makecode.microbit.org/S49771-77509-50114-72682\" target=\"_blank\" rel=\"noopener noreferrer\">블루투스 이름 확인 코드 ↗</a></p><p>연결할 마이크로비트의 장치 이름을 확인합니다. 마이크로비트의 LED 매트릭스에 출력되는 이름(알파벳 소문자 5자리)을 확인한 뒤 아래 프로젝트 코드를 다운로드하세요.</p><p><a id=\"project-example-link\" href=\"https://makecode.microbit.org/_WxPJoHfv2Rc5\" target=\"_blank\" rel=\"noopener noreferrer\">센서 데이터 UART 전송 예제 ↗</a></p><p>MakeCode 프로젝트 설정에서 블루투스 페어링을 필요하지 않음으로 설정하세요.</p></div></details><details class=\"support-section\"><summary>전송 데이터 형식</summary><div class=\"support-answer\"><p>각 센서를 <code>센서명=값</code>으로 작성하고 항목 사이는 세미콜론(<code>;</code>)으로 구분합니다. 마지막 값 뒤에는 줄바꿈(<code>\\n</code>)을 붙입니다. 마지막 세미콜론은 필요하지 않습니다.</p><p><code style=\"overflow-wrap:anywhere\">TEMP=25;LIGHT=120;ACCX=0;ACCY=0;ACCZ=-1024;SOUND=35;HEAD=180\\n</code></p><p>숫자는 설명용 예시입니다. 예제 코드는 온도(TEMP), 밝기(LIGHT), 가속도(ACCX·ACCY·ACCZ), 소리(SOUND), 나침반 방향(HEAD)을 전송합니다.</p><p>예제 코드가 문자열 끝에 실제 줄바꿈 문자 <code>\"\\n\"</code>을 붙인 뒤 <code>bluetooth.uartWriteString(data)</code>으로 보냅니다. 이 함수가 줄바꿈을 자동으로 추가하지는 않습니다. 웹앱은 줄바꿈을 받아야 한 행을 처리합니다.</p><p>센서명은 받은 그대로 등록됩니다. <code>TEMP</code>와 <code>temp</code>는 서로 다른 센서로 취급합니다. 외부 핀 센서도 같은 형식으로 추가할 수 있습니다.</p><p>받은 센서명이 목록에 자동 추가됩니다. Start·Stop은 브라우저의 기록만 제어하며 마이크로비트에 시작·정지 명령을 보내지 않습니다.</p></div></details><details class=\"support-section\" id=\"help-troubleshooting\"><summary>문제 해결</summary><div class=\"support-answer\"><details id=\"help-connection\"><summary>연결이 안 돼요</summary><p>전원·UART 예제·장치 이름을 확인하고 다른 앱의 연결을 해제하세요. PC는 Chrome·Edge, 안드로이드는 Chrome, 아이폰은 Bluefy를 사용하세요.</p></details><details ><summary>연결했는데 그래프가 비어 있어요</summary><p>Start를 눌러야 기록합니다. 센서 목록도 비어 있다면 센서명=숫자 형식과 줄바꿈을 보내는지 확인하세요.</p></details><details ><summary>센서 체크를 해제하면 수집도 멈추나요?</summary><p>체크는 그래프와 이후 표 행의 표시를 바꿉니다. 데이터는 계속 수집되며 엑셀에는 체크하지 않은 센서도 포함됩니다. 기존 표 행은 다시 그려지지 않으므로 표시 변경 후 과거 열이 어긋나면 엑셀에서 확인하세요.</p></details><details ><summary>이전 그래프가 사라져요</summary><p>그래프는 최근 100개 기록을 표시합니다. 엑셀에는 현재 페이지에서 수집한 전체 기록이 포함됩니다.</p></details><details ><summary>화면 켜짐 유지가 안 돼요</summary><p>Start 전에 선택하세요. 브라우저 지원과 전원 상태에 따라 적용되지 않을 수 있습니다. 기록 중 선택했다면 Stop 후 Start를 눌러 다시 요청하세요.</p></details><details ><summary>Stop과 초기화는 어떻게 다른가요?</summary><p>Stop은 기존 기록을 유지하며 수집만 멈춥니다. 다시 Start하면 이어서 기록합니다. 연결이 끊기면 기록도 멈춥니다. 초기화는 확인 없이 기록·표·그래프를 지우지만 센서 목록과 이름은 남깁니다. 기록 중 초기화하면 새 데이터가 다시 쌓입니다. 새로고침 전에도 엑셀로 저장하세요.</p></details></div></details><details class=\"support-section\" id=\"help-updates\"><summary>업데이트 노트</summary><div class=\"support-answer\"><ul><li>실제 센서 전송 예제에 맞춰 데이터 형식 설명과 링크 갱신</li><li>기기 연결부터 기록·시각화·엑셀 저장까지 화면 안내 추가</li><li>장치 이름 확인과 센서 전송 예제 연결</li><li>전송 형식·표시와 수집의 차이·문제 해결 안내</li></ul></div></details><p><a href=\"https://boundaryx.io/ai/?bmode=view&idx=172676340&t=board\" target=\"_blank\" rel=\"noopener noreferrer\">소개 · 탐구 프로젝트 아이디어 ↗</a></p></div>";const allSteps=[["#project-example-link","센서 전송 코드를 준비하세요","장치 이름 확인 코드로 LED의 소문자 5자리를 확인한 뒤 센서 전송 예제를 다운로드하세요."],["#btn-connect","기기를 연결하세요","연결을 누르고 확인한 장치를 선택하세요. 초록색 연결 상태를 확인하세요."],[".sensor-config-box","센서 목록을 확인하세요","예제에서는 TEMP·LIGHT·ACCX·ACCY·ACCZ·SOUND·HEAD가 자동으로 추가됩니다. 센서 이름을 클릭하면 표시 이름을 바꿀 수 있습니다."],[".checkbox-wrapper","화면 켜짐을 설정하세요","긴 실험이라면 Start 전에 선택하세요. 지원하는 브라우저에서 화면 켜짐을 요청합니다."],["#btn-start","Start로 기록을 시작하세요","연결만으로 기록되지는 않습니다. Start 이후 받은 데이터부터 표와 그래프에 쌓입니다."],[".chart-box","변화를 확인하세요","그래프에는 최근 100개 기록이 표시됩니다. 체크를 해제한 센서도 계속 수집되며 엑셀에 포함됩니다."],["#btn-stop","Stop으로 기록을 멈추세요","기존 기록은 유지합니다. 다시 Start하면 이어서 기록합니다."],["#btn-download","엑셀로 저장하세요","수집한 전체 기록을 .xlsx로 저장합니다. 변경한 센서 이름이 열 제목에 반영됩니다."],["#btn-clear","저장한 뒤 초기화하세요","확인 없이 기록·표·그래프를 삭제합니다. 새 실험은 Stop → 엑셀 저장 → 초기화 → Start 순서로 진행하세요."]];const chapters=[{label:'기기 준비',start:0},{label:'설정·기록',start:2},{label:'확인·저장',start:5}];
const dialog = document.createElement('dialog');
  dialog.id = 'guide-dialog';
  dialog.setAttribute('aria-labelledby', 'guide-title');
  dialog.setAttribute('aria-describedby', 'guide-description');
  dialog.innerHTML = `<div id="guide-spotlight" aria-hidden="true"></div><section id="guide-panel"><div class="guide-topline"><span id="guide-progress"></span><button id="guide-close" type="button" aria-label="화면 안내 종료">닫기 ×</button></div><nav class="guide-chapters" aria-label="안내 구간">${chapters.map((chapter, i) => `<button type="button" data-chapter="${i}" aria-pressed="false">${chapter.label}</button>`).join('')}</nav><div aria-live="polite" aria-atomic="true"><h2 id="guide-title"></h2><p id="guide-description"></p></div><p class="guide-caption">화면 안내입니다. 닫은 뒤 직접 눌러보세요.</p><button id="guide-skip-device" type="button" hidden>기기 연결 건너뛰기 →</button><div class="guide-navigation"><button id="guide-prev" type="button">이전</button><button id="guide-next" type="button">다음</button></div></section>`;
  document.body.appendChild(dialog);
  let steps = [], index = 0, target = null, opener = null, originalScroll = 0, pendingFrame = 0;

  let examplesWereOpen = false;

  function openHelp(section) {
    support.open = true;
    if (section) {
      $('help-troubleshooting').open = true;
      $(section).open = true;
    }
    const heading = (section ? $(section) : support).querySelector('summary');
    heading.scrollIntoView({block: 'center', behavior: 'instant'});
    heading.focus({preventScroll: true});
  }
  document.querySelectorAll('[data-help]').forEach(button => button.addEventListener('click', () => openHelp(button.dataset.help || null)));

  function renderStep() {
    const [selector, title, description] = steps[index];
    if (selector === '#project-example-link') $('help-examples').open = true;
    target = document.querySelector(selector);
    const chapterIndex = index < chapters[1].start ? 0 : index < chapters[2].start ? 1 : 2;
    dialog.querySelectorAll('[data-chapter]').forEach((button, i) => button.setAttribute('aria-pressed', String(i === chapterIndex)));
    $('guide-skip-device').hidden = true;
    $('guide-progress').textContent = `${chapters[chapterIndex].label}${''} · ${index + 1} / ${steps.length}`;
    $('guide-title').textContent = title;
    $('guide-description').textContent = description;
    $('guide-prev').disabled = index === 0;
    $('guide-next').textContent = index === steps.length - 1 ? '안내 마치기' : '다음';
    if (target) target.scrollIntoView({block: 'center', behavior: 'instant'});
    positionGuide(true);
  }

  function positionGuide(reveal = false) {
    if (!dialog.open) return;
    const panel = $('guide-panel'), spot = $('guide-spotlight');
    const width = window.innerWidth, height = window.innerHeight, gap = 16;
    panel.style.width = Math.min(360, width - 24) + 'px';
    const ph = panel.getBoundingClientRect().height, pw = panel.getBoundingClientRect().width;
    const headerBottom = document.querySelector('header').getBoundingClientRect().bottom;
    let r = target ? target.getBoundingClientRect() : null;
    // Narrow screens reserve the lower area for the explanation. A temporary bottom
    // spacer allows the last control to scroll above it without altering saved data.
    const narrow = width < 700;
    if (reveal && r && narrow) {
      const top = Math.max(12, headerBottom + 16);
      window.scrollBy({top: r.top - top, behavior: 'instant'});
      r = target.getBoundingClientRect();
    }
    let x = width - pw - 12, y = height - ph - 12;
    if (r && !narrow) {
      const candidates = [
        [r.left - pw - gap, Math.max(12, Math.min(r.top, height - ph - 12))],
        [r.right + gap, Math.max(12, Math.min(r.top, height - ph - 12))],
        [Math.max(12, Math.min(r.left, width - pw - 12)), r.bottom + gap],
        [Math.max(12, Math.min(r.left, width - pw - 12)), r.top - ph - gap]
      ];
      const fit = candidates.find(([cx, cy]) => cx >= 12 && cy >= 12 && cx + pw <= width - 12 && cy + ph <= height - 12);
      if (fit) [x,y] = fit;
      else if (r.left < x - 28) r = {left:r.left,top:r.top,right:Math.min(r.right,x-16),bottom:r.bottom};
    }
    panel.style.left = x + 'px'; panel.style.top = Math.max(12, y) + 'px';
    if (r) {
      const top = Math.max(4, r.top - 5), left = Math.max(4, r.left - 5);
      const bottom = Math.min(height - 4, narrow ? y - 12 : height - 4, r.bottom + 5);
      spot.hidden = bottom <= top || r.right <= 0 || r.left >= width;
      Object.assign(spot.style, {left: left + 'px', top: top + 'px', width: Math.max(0, Math.min(width - 4, r.right + 5) - left) + 'px', height: Math.max(0, bottom - top) + 'px'});
    } else spot.hidden = true;
  }
  function startTour(kind, button) {
    if (kind !== 'all') return;
    opener = button; originalScroll = window.scrollY;
    steps = allSteps; index = 0;
    examplesWereOpen = $('help-examples').open;
    document.body.classList.add('guide-active');
    dialog.showModal();
    renderStep();
    $('guide-next').focus({preventScroll:true});
  }
  support.querySelectorAll('[data-tour]').forEach(button => button.addEventListener('click', () => startTour(button.dataset.tour, button)));
  $('guide-prev').addEventListener('click', () => { if (index > 0) { index--; renderStep(); } });
  $('guide-next').addEventListener('click', () => { if (index === steps.length - 1) dialog.close(); else { index++; renderStep(); } });
  dialog.querySelectorAll('[data-chapter]').forEach(button => button.addEventListener('click', () => { index = chapters[Number(button.dataset.chapter)].start; renderStep(); }));
  $('guide-skip-device').addEventListener('click', () => { index = chapters[2].start; renderStep(); $('guide-next').focus({preventScroll:true}); });
  $('guide-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('guide-active');
    $('help-examples').open = examplesWereOpen;
    window.scrollTo({top:originalScroll, behavior:'instant'});
    if (opener) opener.focus({preventScroll:true});
  });
  const reposition = () => {
    if (!dialog.open || pendingFrame) return;
    pendingFrame = requestAnimationFrame(() => { pendingFrame = 0; positionGuide(); });
  };
  window.addEventListener('resize', () => { if (dialog.open) renderStep(); });
  window.addEventListener('scroll', reposition, {passive:true});
  if (location.hash === '#support-card') requestAnimationFrame(() => openHelp());
})();




