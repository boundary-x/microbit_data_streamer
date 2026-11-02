/* Read-only data streamer guide. */
(()=>{'use strict';const $=id=>document.getElementById(id);const support=$('support-card');support.innerHTML="<summary><span><strong>사용 가이드 및 지원</strong><small>사용법 · 예제 코드 · 문제 해결</small></span><span class=\"support-chevron\" aria-hidden=\"true\">⌄</span></summary><div class=\"support-content\"><p>센서 데이터를 기록하고 엑셀로 분석해보세요.</p><div class=\"support-actions\"><button type=\"button\" data-tour=\"all\" class=\"support-primary\">사용법 둘러보기 →</button></div><details class=\"support-section\" id=\"help-examples\"><summary>마이크로비트 예제 코드</summary><div class=\"support-answer device-examples\"><div class=\"device-prepare\"><span class=\"device-tag\">공통 준비</span><p><a href=\"https://makecode.microbit.org/S49771-77509-50114-72682\" target=\"_blank\" rel=\"noopener noreferrer\">블루투스 이름 확인 코드 ↗</a></p><p>마이크로비트 LED에 표시되는 이름(알파벳 소문자 5자리)을 확인한 뒤 아래 예제를 다운로드하세요.</p></div><article class=\"device-example-card\"><div class=\"device-example-heading\"><h4>마이크로비트 기본</h4><span class=\"device-tag\">마이크로비트만 사용</span></div><p>내장 센서 데이터를 실시간으로 수집하고 그래프와 엑셀로 확인해보세요.</p><div class=\"device-example-links\"><a id=\"project-example-link\" href=\"https://makecode.microbit.org/#pub:70168-45359-91678-58349\" target=\"_blank\" rel=\"noopener noreferrer\">센서 데이터 전송 예제 ↗</a></div></article><div id=\"compass-calibration-guide\" class=\"calibration-notice\"><strong>처음 실행할 때, LED 보정 화면을 확인하세요</strong><p>LED에 TILT TO FILL SCREEN이 나오면 나침반 센서 보정이 필요합니다.</p><ol><li>마이크로비트를 여러 방향으로 천천히 기울이세요.</li><li>깜빡이는 점을 움직여 LED 화면을 모두 채우세요.</li><li>보정 화면이 끝나면 웹앱에서 연결하고 Start를 누르세요.</li></ol><p>보정 중에는 센서 데이터가 전송되지 않을 수 있습니다. 새 코드를 다운로드하면 다시 보정이 필요할 수 있습니다.</p><figure class=\"calibration-video\"><figcaption>영상으로 보정 방법 확인하기</figcaption><video controls playsinline preload=\"none\" aria-label=\"마이크로비트 나침반 보정 시연\" src=\"https://video.microbit.org/support/compass+calibration.mp4\">영상을 재생할 수 없다면 아래 공식 안내를 열어주세요.</video><p>마이크로비트를 수평으로 들고 천천히 기울여 LED 화면을 채워주세요.</p><a href=\"https://support.microbit.org/support/solutions/articles/19000008874-calibrating-the-micro-bit-compass\" target=\"_blank\" rel=\"noopener noreferrer\">출처: micro:bit 공식 보정 안내 · 영상이 안 보이면 열기 ↗</a></figure></div></div></details><details class=\"support-section\"><summary>전송 데이터 형식</summary><div class=\"support-answer\"><div class=\"packet-preview\"><p class=\"packet-title\">전체 전송 문자열 <span>예시 데이터</span></p><pre class=\"packet-example\" aria-label=\"전체 전송 문자열\"><code><span data-packet-sensor=\"0\" class=\"is-highlighted\">TEMP=25</span>;<span data-packet-sensor=\"1\" class=\"\">LIGHT=120</span>;<span data-packet-sensor=\"2\" class=\"\">ACCX=0</span>;<span data-packet-sensor=\"3\" class=\"\">ACCY=0</span>;<span data-packet-sensor=\"4\" class=\"\">ACCZ=-1024</span>;<span data-packet-sensor=\"5\" class=\"\">SOUND=35</span>;<span data-packet-sensor=\"6\" class=\"\">HEAD=180</span><span class=\"packet-newline\">\\n</span></code></pre><p class=\"packet-hint\">센서 항목을 누르면 문자열에서 해당 부분이 강조됩니다.</p></div><div class=\"sensor-token-list\"><button type=\"button\" data-sensor=\"0\" aria-pressed=\"true\" aria-controls=\"sensor-explanation\"><span class=\"sensor-name\">온도</span><code>TEMP=25</code></button><button type=\"button\" data-sensor=\"1\" aria-pressed=\"false\" aria-controls=\"sensor-explanation\"><span class=\"sensor-name\">밝기</span><code>LIGHT=120</code></button><button type=\"button\" data-sensor=\"2\" aria-pressed=\"false\" aria-controls=\"sensor-explanation\"><span class=\"sensor-name\">X축 가속도</span><code>ACCX=0</code></button><button type=\"button\" data-sensor=\"3\" aria-pressed=\"false\" aria-controls=\"sensor-explanation\"><span class=\"sensor-name\">Y축 가속도</span><code>ACCY=0</code></button><button type=\"button\" data-sensor=\"4\" aria-pressed=\"false\" aria-controls=\"sensor-explanation\"><span class=\"sensor-name\">Z축 가속도</span><code>ACCZ=-1024</code></button><button type=\"button\" data-sensor=\"5\" aria-pressed=\"false\" aria-controls=\"sensor-explanation\"><span class=\"sensor-name\">소리</span><code>SOUND=35</code></button><button type=\"button\" data-sensor=\"6\" aria-pressed=\"false\" aria-controls=\"sensor-explanation\"><span class=\"sensor-name\">나침반</span><code>HEAD=180</code></button></div><p id=\"sensor-explanation\" class=\"sensor-explanation\" aria-live=\"polite\">TEMP · 마이크로비트에서 측정한 온도 (°C)</p><div class=\"format-rules\"><div><code>=</code><span>센서명과 값을 연결</span></div><div><code>;</code><span>센서 항목을 구분</span></div><div><code>\\n</code><span>한 줄의 데이터 완료</span></div></div><p class=\"packet-hint\">숫자는 설명용 예시입니다. 마지막의 <code>\\n</code>은 실제 전송 시 줄바꿈 문자이며, 마지막 세미콜론은 필요하지 않습니다.</p><details class=\"format-detail\"><summary>직접 코드를 만들 때 확인하세요</summary><ul><li>문자열 끝에 줄바꿈을 붙여 bluetooth.uartWriteString(data)으로 전송하세요. 이 함수는 줄바꿈을 자동으로 추가하지 않습니다.</li><li>웹앱은 줄바꿈을 받아야 한 행을 처리합니다.</li><li>TEMP와 temp는 서로 다른 센서입니다. 외부 센서도 센서명=값 형식으로 추가할 수 있습니다.</li><li>Start·Stop은 브라우저의 기록만 제어합니다. 마이크로비트에 시작·정지 명령을 보내지는 않습니다.</li></ul></details></div></details><details class=\"support-section\" id=\"help-troubleshooting\"><summary>문제 해결</summary><div class=\"support-answer support-faq\"><details id=\"help-connection\"><summary>연결이 안 돼요</summary><p>전원·UART 예제·장치 이름을 확인하고 다른 앱의 연결을 해제하세요. PC는 Chrome·Edge, 안드로이드는 Chrome, 아이폰은 Bluefy를 사용하세요.</p></details><details id=\"help-calibration\"><summary>LED에 TILT TO FILL SCREEN이 나오고 데이터가 안 들어와요</summary><p>나침반 센서 보정 화면입니다. 마이크로비트를 여러 방향으로 기울여 LED 화면을 모두 채워주세요. 이 예제는 나침반 값을 읽은 뒤 센서 데이터를 전송하므로 보정부터 완료해야 합니다.</p><figure class=\"calibration-video\"><figcaption>영상으로 보정 방법 확인하기</figcaption><video controls playsinline preload=\"none\" aria-label=\"마이크로비트 나침반 보정 시연\" src=\"https://video.microbit.org/support/compass+calibration.mp4\">영상을 재생할 수 없다면 아래 공식 안내를 열어주세요.</video><p>마이크로비트를 수평으로 들고 천천히 기울여 LED 화면을 채워주세요.</p><a href=\"https://support.microbit.org/support/solutions/articles/19000008874-calibrating-the-micro-bit-compass\" target=\"_blank\" rel=\"noopener noreferrer\">출처: micro:bit 공식 보정 안내 · 영상이 안 보이면 열기 ↗</a></figure></details><details ><summary>연결했는데 그래프가 비어 있어요</summary><p>먼저 마이크로비트의 LED 보정 화면이 끝났는지 확인하세요. Start를 눌러야 기록합니다. 센서 목록도 비어 있다면 센서명=숫자 형식과 줄바꿈을 보내는지 확인하세요.</p></details><details ><summary>센서 체크를 해제하면 수집도 멈추나요?</summary><p>체크는 그래프와 이후 표 행의 표시를 바꿉니다. 데이터는 계속 수집되며 엑셀에는 체크하지 않은 센서도 포함됩니다. 기존 표 행은 다시 그려지지 않으므로 표시 변경 후 과거 열이 어긋나면 엑셀에서 확인하세요.</p></details><details ><summary>이전 그래프가 사라져요</summary><p>그래프는 최근 100개 기록을 표시합니다. 엑셀에는 현재 페이지에서 수집한 전체 기록이 포함됩니다.</p></details><details ><summary>화면 켜짐 유지가 안 돼요</summary><p>Start 전에 선택하세요. 브라우저 지원과 전원 상태에 따라 적용되지 않을 수 있습니다. 기록 중 선택했다면 Stop 후 Start를 눌러 다시 요청하세요.</p></details><details ><summary>Stop과 초기화는 어떻게 다른가요?</summary><p>Stop은 기존 기록을 유지하며 수집만 멈춥니다. 다시 Start하면 이어서 기록합니다. 연결이 끊기면 기록도 멈춥니다. 초기화는 확인 없이 기록·표·그래프를 지우지만 센서 목록과 이름은 남깁니다. 기록 중 초기화하면 새 데이터가 다시 쌓입니다. 새로고침 전에도 엑셀로 저장하세요.</p></details></div></details><details class=\"support-section\" id=\"help-updates\"><summary>업데이트 노트</summary><div class=\"support-answer\"><p class=\"support-release\">2026.11.02 · 예제 카드와 전송 형식 안내 개선</p><ul><li>기기 연결 카드의 보정 안내를 사용 가이드로 통합</li><li>공통 준비·마이크로비트 기본 카드 디자인 통일 및 예제 링크 갱신</li><li>예제 카드의 블루투스 페어링 설정 안내 제거</li><li>전체 전송 문자열을 먼저 표시하고 센서 선택 시 해당 데이터 강조</li><li>센서 이름의 글자 크기·대비와 선택 표시를 개선</li></ul><p class=\"support-release\">2026.11.02 · 나침반 보정 안내 강화</p><ul><li>기기 연결 카드에 LED 보정 화면 안내 추가</li><li>예제·사용법 둘러보기·문제 해결에 LED 화면 채우기 안내 추가</li><li>micro:bit 공식 나침반 보정 영상과 출처 링크 추가</li></ul><ul><li>실제 센서 전송 예제에 맞춰 데이터 형식 설명과 링크 갱신</li><li>기기 연결부터 기록·시각화·엑셀 저장까지 화면 안내 추가</li><li>장치 이름 확인과 센서 전송 예제 연결</li><li>전송 형식·표시와 수집의 차이·문제 해결 안내</li></ul></div></details><p><a href=\"https://boundaryx.io/ai/?bmode=view&idx=172676340&t=board\" target=\"_blank\" rel=\"noopener noreferrer\">소개 · 탐구 프로젝트 아이디어 ↗</a></p></div>";const sensorDescriptions=[["TEMP","25","온도","마이크로비트에서 측정한 온도 (°C)"],["LIGHT","120","밝기","주변 밝기 (0~255)"],["ACCX","0","X축 가속도","좌우 방향 가속도 (mg)"],["ACCY","0","Y축 가속도","앞뒤 방향 가속도 (mg)"],["ACCZ","-1024","Z축 가속도","위아래 방향 가속도 (mg)"],["SOUND","35","소리","소리 크기 (0~255, 마이크로비트 V2)"],["HEAD","180","나침반","북쪽 기준 방향 (0~359°). 사용 전 보정이 필요할 수 있습니다."]];support.querySelectorAll('[data-sensor]').forEach(button=>button.addEventListener('click',()=>{support.querySelectorAll('[data-sensor]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));support.querySelectorAll('[data-packet-sensor]').forEach(part=>part.classList.toggle('is-highlighted',part.dataset.packetSensor===button.dataset.sensor));const item=sensorDescriptions[Number(button.dataset.sensor)];$('sensor-explanation').textContent=item[0]+' · '+item[3];}));const allSteps=[["#project-example-link","센서 전송 코드를 준비하세요","장치 이름 확인 코드로 LED의 소문자 5자리를 확인한 뒤 센서 전송 예제를 다운로드하세요."],["#compass-calibration-guide","LED 화면을 채워 보정하세요","TILT TO FILL SCREEN이 나오면 마이크로비트를 여러 방향으로 기울여 LED 화면을 모두 채우세요. 나침반 보정이 끝나야 센서 데이터가 전송됩니다. 보정 화면이 나오지 않으면 다음 단계로 진행하세요."],["#btn-connect","기기를 연결하세요","연결을 누르고 확인한 장치를 선택하세요. 초록색 연결 상태를 확인하세요."],[".sensor-config-box","센서 목록을 확인하세요","예제에서는 TEMP·LIGHT·ACCX·ACCY·ACCZ·SOUND·HEAD가 자동으로 추가됩니다. 센서 이름을 클릭하면 표시 이름을 바꿀 수 있습니다."],[".checkbox-wrapper","화면 켜짐을 설정하세요","긴 실험이라면 Start 전에 선택하세요. 지원하는 브라우저에서 화면 켜짐을 요청합니다."],["#btn-start","Start로 기록을 시작하세요","연결만으로 기록되지는 않습니다. Start 이후 받은 데이터부터 표와 그래프에 쌓입니다."],[".chart-box","변화를 확인하세요","그래프에는 최근 100개 기록이 표시됩니다. 체크를 해제한 센서도 계속 수집되며 엑셀에 포함됩니다."],["#btn-stop","Stop으로 기록을 멈추세요","기존 기록은 유지합니다. 다시 Start하면 이어서 기록합니다."],["#btn-download","엑셀로 저장하세요","수집한 전체 기록을 .xlsx로 저장합니다. 변경한 센서 이름이 열 제목에 반영됩니다."],["#btn-clear","저장한 뒤 초기화하세요","확인 없이 기록·표·그래프를 삭제합니다. 새 실험은 Stop → 엑셀 저장 → 초기화 → Start 순서로 진행하세요."]];const chapters=[{label:'기기 준비',start:0},{label:'설정·기록',start:3},{label:'확인·저장',start:6}];
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
    if (selector === '#project-example-link' || selector === '#compass-calibration-guide') $('help-examples').open = true;
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




