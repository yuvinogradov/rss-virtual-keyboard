let lang = 'en';
let capsLockFlag;
let shiftFlag = false;
let ControlFlag;
let AltFlag;

const layoutEn = {
  Backquote: { regular: '`', shift: '~', keycode: '192' },
  Digit1: { regular: '1', shift: '!', keycode: '49' },
  Digit2: { regular: '2', shift: '@', keycode: '50' },
  Digit3: { regular: '3', shift: '#', keycode: '51' },
  Digit4: { regular: '4', shift: '$', keycode: '52' },
  Digit5: { regular: '5', shift: '%', keycode: '53' },
  Digit6: { regular: '6', shift: '^', keycode: '54' },
  Digit7: { regular: '7', shift: '&', keycode: '55' },
  Digit8: { regular: '8', shift: '*', keycode: '56' },
  Digit9: { regular: '9', shift: '(', keycode: '57' },
  Digit0: { regular: '0', shift: ')', keycode: '48' },
  Minus: { regular: '-', shift: '_', keycode: '189' },
  Equal: { regular: '=', shift: '+', keycode: '187' },
  Backspace: { regular: 'Backspace', shift: null, keycode: '8' },
  Delete: { regular: 'Delete', shift: null, keycode: '46' },
  Tab: { regular: 'Tab', shift: null, keycode: '9' },
  KeyQ: { regular: 'q', shift: 'Q', keycode: '81' },
  KeyW: { regular: 'w', shift: 'W', keycode: '87' },
  KeyE: { regular: 'e', shift: 'E', keycode: '69' },
  KeyR: { regular: 'r', shift: 'R', keycode: '82' },
  KeyT: { regular: 't', shift: 'T', keycode: '84' },
  KeyY: { regular: 'y', shift: 'Y', keycode: '89' },
  KeyU: { regular: 'u', shift: 'U', keycode: '85' },
  KeyI: { regular: 'i', shift: 'I', keycode: '73' },
  KeyO: { regular: 'o', shift: 'O', keycode: '79' },
  KeyP: { regular: 'p', shift: 'P', keycode: '80' },
  BracketLeft: { regular: '[', shift: '{', keycode: '219' },
  BracketRight: { regular: ']', shift: '}', keycode: '221' },
  Enter: { regular: 'Enter', shift: null, keycode: 13 },
  CapsLock: { regular: 'CapsLock', shift: null, keycode: '0' },
  KeyA: { regular: 'a', shift: 'A', keycode: '65' },
  KeyS: { regular: 's', shift: 'S', keycode: '83' },
  KeyD: { regular: 'd', shift: 'D', keycode: '68' },
  KeyF: { regular: 'f', shift: 'F', keycode: '70' },
  KeyG: { regular: 'g', shift: 'G', keycode: '71' },
  KeyH: { regular: 'h', shift: 'H', keycode: '72' },
  KeyJ: { regular: 'j', shift: 'J', keycode: '74' },
  KeyK: { regular: 'k', shift: 'K', keycode: '75' },
  KeyL: { regular: 'l', shift: 'L', keycode: '76' },
  Semicolon: { regular: ';', shift: ':', keycode: '186' },
  Quote: { regular: "'", shift: '"', keycode: '222' },
  Backslash: { regular: '\\', shift: '|', keycode: '220' },
  ShiftLeft: { regular: 'Shift', shift: null, keycode: '16' },
  IntlBackslash: { regular: '<', shift: '>', keycode: '220' },
  KeyZ: { regular: 'z', shift: 'Z', keycode: '90' },
  KeyX: { regular: 'x', shift: 'X', keycode: '88' },
  KeyC: { regular: 'c', shift: 'C', keycode: '67' },
  KeyV: { regular: 'v', shift: 'V', keycode: '86' },
  KeyB: { regular: 'b', shift: 'B', keycode: '66' },
  KeyN: { regular: 'n', shift: 'N', keycode: '78' },
  KeyM: { regular: 'm', shift: 'M', keycode: '77' },
  Comma: { regular: ',', shift: '<', keycode: '188' },
  Period: { regular: '.', shift: '>', keycode: '190' },
  Slash: { regular: '/', shift: '?', keycode: '191' },
  ShiftRight: { regular: 'Shift', shift: null, keycode: '16' },
  ControlLeft: { regular: 'Ctrl', shift: null, keycode: '17' },
  AltLeft: { regular: 'Alt', shift: null, keycode: '18' },
  Space: { regular: ' ', shift: ' ', keycode: '32' },
  AltRight: { regular: 'Alt', shift: null, keycode: '225' },
  ControlRight: { regular: 'Ctrl', shift: null, keycode: '17' },
  ArrowLeft: { regular: '&larr;', shift: null, keycode: '37' },
  ArrowUp: { regular: '&uarr;', shift: null, keycode: '38' },
  ArrowDown: { regular: '&darr;', shift: null, keycode: '40' },
  ArrowRight: { regular: '&rarr;', shift: null, keycode: '39' },
  MetaLeft: { regular: 'Win', shift: null, keycode: '1000' },
};

const layoutRu = {
  CapsLock: { regular: 'CapsLock', shift: null, keycode: '0' },
  Backquote: { regular: '??', shift: '??', keycode: '192' },
  Digit1: { regular: '1', shift: '!', keycode: '49' },
  Digit2: { regular: '2', shift: '"', keycode: '50' },
  Digit3: { regular: '3', shift: '???', keycode: '51' },
  Digit4: { regular: '4', shift: ';', keycode: '52' },
  Digit5: { regular: '5', shift: '%', keycode: '53' },
  Digit6: { regular: '6', shift: ':', keycode: '54' },
  Digit7: { regular: '7', shift: '?', keycode: '55' },
  Digit8: { regular: '8', shift: '*', keycode: '56' },
  Digit9: { regular: '9', shift: '(', keycode: '57' },
  Digit0: { regular: '0', shift: ')', keycode: '48' },
  Minus: { regular: '-', shift: '_', keycode: '189' },
  Equal: { regular: '=', shift: '+', keycode: '187' },
  Backspace: { regular: 'Backspace', shift: null, keycode: '8' },
  Delete: { regular: 'Delete', shift: null, keycode: '46' },
  Tab: { regular: 'Tab', shift: null, keycode: '9' },
  KeyQ: { regular: '??', shift: '??', keycode: '81' },
  KeyW: { regular: '??', shift: '??', keycode: '87' },
  KeyE: { regular: '??', shift: '??', keycode: '69' },
  KeyR: { regular: '??', shift: '??', keycode: '82' },
  KeyT: { regular: '??', shift: '??', keycode: '84' },
  KeyY: { regular: '??', shift: '??', keycode: '89' },
  KeyU: { regular: '??', shift: '??', keycode: '85' },
  KeyI: { regular: '??', shift: '??', keycode: '73' },
  KeyO: { regular: '??', shift: '??', keycode: '79' },
  KeyP: { regular: '??', shift: '??', keycode: '80' },
  BracketLeft: { regular: '??', shift: '??', keycode: '219' },
  BracketRight: { regular: '??', shift: '??', keycode: '221' },
  Enter: { regular: 'Enter', shift: null, keycode: '13' },
  KeyA: { regular: '??', shift: '??', keycode: '65' },
  KeyS: { regular: '??', shift: '??', keycode: '83' },
  KeyD: { regular: '??', shift: '??', keycode: '68' },
  KeyF: { regular: '??', shift: '??', keycode: '70' },
  KeyG: { regular: '??', shift: '??', keycode: '71' },
  KeyH: { regular: '??', shift: '??', keycode: '72' },
  KeyJ: { regular: '??', shift: '??', keycode: '74' },
  KeyK: { regular: '??', shift: '??', keycode: '75' },
  KeyL: { regular: '??', shift: '??', keycode: '76' },
  Semicolon: { regular: '??', shift: '??', keycode: '186' },
  Quote: { regular: '??', shift: '??', keycode: '222' },
  Backslash: { regular: '\\', shift: '/', keycode: '220' },
  ShiftLeft: { regular: 'Shift', shift: null, keycode: '16' },
  IntlBackslash: { regular: '/', shift: '|', keycode: '191' },
  KeyZ: { regular: '??', shift: '??', keycode: '90' },
  KeyX: { regular: '??', shift: '??', keycode: '88' },
  KeyC: { regular: '??', shift: '??', keycode: '67' },
  KeyV: { regular: '??', shift: '??', keycode: '86' },
  KeyB: { regular: '??', shift: '??', keycode: '66' },
  KeyN: { regular: '??', shift: '??', keycode: '78' },
  KeyM: { regular: '??', shift: '??', keycode: '77' },
  Comma: { regular: '??', shift: '??', keycode: '188' },
  Period: { regular: '??', shift: '??', keycode: '190' },
  Slash: { regular: '.', shift: ',', keycode: '191' },
  ShiftRight: { regular: 'Shift', shift: null, keycode: '16' },
  ControlLeft: { regular: 'Ctrl', shift: null, keycode: '17' },
  AltLeft: { regular: 'Alt', shift: null, keycode: '18' },
  Space: { regular: ' ', shift: ' ', keycode: '32' },
  AltRight: { regular: 'Alt', shift: null, keycode: '225' },
  ControlRight: { regular: 'Ctrl', shift: null, keycode: '17' },
  ArrowLeft: { regular: '&larr;', shift: null, keycode: '37' },
  ArrowUp: { regular: '&uarr;', shift: null, keycode: '38' },
  ArrowDown: { regular: '&darr;', shift: null, keycode: '40' },
  ArrowRight: { regular: '&rarr;', shift: null, keycode: '39' },
  MetaLeft: { regular: 'Win', shift: null, keycode: '1000' },
};

const keyboardRows = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Delete'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backspace'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

function switchLang() {
  if (AltFlag && ControlFlag) {
    if (lang === 'en') {
      lang = 'ru';
    } else {
      lang = 'en';
    }
    localStorage.setItem('lang', lang);
    AltFlag = false;
    ControlFlag = false;
  }
}

function updateLang() {
  const keys = document.querySelectorAll(`.${lang === 'en' ? 'ru' : 'en'}`);
  keys.forEach((k) => k.classList.add('hidden'));
  const keysNew = document.querySelectorAll(`.${lang}`);
  keysNew.forEach((k) => k.classList.remove('hidden'));
}

function shiftOn(on) {
  const keys = document.querySelectorAll(`.${!on ? 'shift' : 'regular'}`);
  keys.forEach((k) => k.classList.add('hidden'));
  const keysNew = document.querySelectorAll(`.${on ? 'shift' : 'regular'}`);
  keysNew.forEach((k) => k.classList.remove('hidden'));
}

function getCurrentLineNumber(textarea) {
  return textarea.value.substr(0, textarea.selectionStart).split('\n').length;
}

function getTotalLinesNumber(textarea) {
  return textarea.value.split('\n').length;
}

// returns object with array of all \n positions and with a current line and shift
function getLinesInfo(textarea) {
  const newLinePositionsArray = textarea.value.split('').reduce((acc, val, index) => {
    if (val === '\n') {
      acc.push(index);
    }
    return acc;
  }, []);

  return {
    newLines: newLinePositionsArray,
    currentLine: getCurrentLineNumber(textarea),
    totalLines: getTotalLinesNumber(textarea),
    shiftInLine: textarea.selectionStart
      - (newLinePositionsArray[getCurrentLineNumber(textarea) - 2] || 0),
  };
}

const BODY = document.body;

const MAIN_WRAPPER = document.createElement('div');
MAIN_WRAPPER.classList.add('main-wrapper');
BODY.appendChild(MAIN_WRAPPER);

const TITLE = document.createElement('div');
TITLE.classList.add('text');
TITLE.innerHTML = `<div class="title">RSS Virtual Keyboard</div>
<div class="subtitle">The Windows Keyboard</div>
<div class="switch-layout">Use left <span>Ctrl+Alt</span> to switch language. The selected language will be loaded on the next time page load</div>`;
MAIN_WRAPPER.appendChild(TITLE);

const container = document.createElement('div');
container.classList.add('keyboard-container');
MAIN_WRAPPER.appendChild(container);

const textArea = document.createElement('textarea');
textArea.classList.add('textarea');

container.appendChild(textArea);

const keyboardWrapper = document.createElement('div');
keyboardWrapper.classList.add('keyboard');
container.appendChild(keyboardWrapper);

function insertChar(key, content, currentPosition) {
  textArea.value = content.slice(0, currentPosition) + key + content.slice(currentPosition);
  textArea.selectionStart = currentPosition + 1;
  textArea.selectionEnd = textArea.selectionStart;
}

function keyDownHandler(event) {
  const currentPosition = textArea.selectionStart;
  const content = textArea.value;
  const { code } = event;
  const {
    newLines, currentLine, totalLines, shiftInLine,
  } = getLinesInfo(textArea);

  textArea.focus();
  if (capsLockFlag === undefined) {
    if (code === 'CapsLock' && event.getModifierState) {
      capsLockFlag = !event.getModifierState('CapsLock');
    } else if (event.getModifierState) {
      capsLockFlag = event.getModifierState('CapsLock');
    }
  }

  if (layoutEn[code]) {
    document.querySelector(`#${code}`).classList.add('pressed');
  }
  switch (code) {
    case 'ShiftLeft':
    case 'ShiftRight':
      shiftFlag = true;
      break;
    case 'CapsLock':
      capsLockFlag = !capsLockFlag;

      break;

    case 'Tab':
      insertChar('\t', content, currentPosition);
      break;
    case 'Enter':
      insertChar('\n', content, currentPosition);
      break;
    case 'Backspace':
      if (currentPosition > 0) {
        textArea.value = content.slice(0, currentPosition - 1) + content.slice(currentPosition);
        textArea.selectionStart = currentPosition - 1;
        textArea.selectionEnd = textArea.selectionStart;
      }
      break;
    case 'Delete':
      if (currentPosition < textArea.value.length) {
        textArea.value = content.slice(0, currentPosition) + content.slice(currentPosition + 1);
        textArea.selectionStart = currentPosition;
        textArea.selectionEnd = textArea.selectionStart;
      }
      break;
    case 'ArrowRight':
      if (currentPosition < textArea.value.length) {
        textArea.selectionStart = currentPosition + 1;
        textArea.selectionEnd = textArea.selectionStart;
      }
      break;
    case 'ArrowLeft':
      if (currentPosition > 0) {
        textArea.selectionStart = currentPosition - 1;
        textArea.selectionEnd = textArea.selectionStart;
      }
      break;
    case 'ArrowUp':
      if (currentLine > 1) {
        textArea.selectionStart = Math.min(
          (newLines[currentLine - 3] || -1) + shiftInLine,
          newLines[currentLine - 2],
        );
        textArea.selectionEnd = textArea.selectionStart;
      }
      break;
    case 'ArrowDown':

      if (currentLine < totalLines) {
        textArea.selectionStart = Math.min(
          newLines[currentLine - 1] + shiftInLine + (currentLine === 1 ? 1 : 0),
          newLines[currentLine] || textArea.value.length,
        );
        textArea.selectionEnd = textArea.selectionStart;
      }
      break;
    case 'MetaLeft':
      break;
    case 'ControlLeft':
    case 'ControlRight':
      ControlFlag = true;
      switchLang();
      updateLang();
      break;
    case 'AltLeft':
    case 'AltRight':
      AltFlag = true;
      switchLang();
      updateLang();
      break;

    default:
      if (layoutEn[code]) {
        if (lang === 'en') {
          if ((capsLockFlag && shiftFlag) || (!capsLockFlag && !shiftFlag)) {
            insertChar(layoutEn[code].regular, content, currentPosition);
          } else {
            insertChar(layoutEn[code].shift, content, currentPosition);
          }
        }
        if (lang === 'ru') {
          if ((capsLockFlag && shiftFlag) || (!capsLockFlag && !shiftFlag)) {
            insertChar(layoutRu[code].regular, content, currentPosition);
          } else {
            insertChar(layoutRu[code].shift, content, currentPosition);
          }
        }
      }
      break;
  }

  if (layoutEn[code]) {
    if (capsLockFlag) {
      document.querySelector('#CapsLock').classList.add('caps-lock-on');
    } else {
      document.querySelector('#CapsLock').classList.remove('caps-lock-on');
    }
  }

  if ((capsLockFlag && shiftFlag) || (!capsLockFlag && !shiftFlag)) {
    shiftOn(false);
  } else {
    shiftOn(true);
  }
}

function keyUpHandler(event) {
  const { key, code } = event;
  if (layoutEn[code]) {
    document.querySelector(`#${code}`).classList.remove('pressed');
  }

  switch (key) {
    case 'Shift':
      shiftOn((capsLockFlag));
      shiftFlag = false;
      break;
    case 'Control':
      ControlFlag = false;
      break;
    case 'Alt':
      AltFlag = false;
      break;

    default:
      break;
  }
}

textArea.addEventListener('keydown', (event) => { event.preventDefault(); });
BODY.removeEventListener('keydown', keyDownHandler);
BODY.removeEventListener('keyup', keyUpHandler);

BODY.addEventListener('keydown', keyDownHandler);
BODY.addEventListener('keyup', keyUpHandler);
document.addEventListener('click', () => { textArea.focus(); });
BODY.addEventListener('mousedown', (event) => {
  if (event.path[2].id) {
    keyDownHandler({
      code: event.path[2].id,
    });
  }
});
BODY.addEventListener('mouseup', (event) => {
  if (event.path[2].id) {
    keyUpHandler({
      code: event.path[2].id,
    });
  }
});

class Keyboard {
  constructor() {
    if (localStorage.lang) {
      lang = localStorage.lang;
    }
    keyboardRows.forEach((row, index) => {
      const keyboardRow = document.createElement('div');
      keyboardRow.id = `row${index}`;
      keyboardRow.classList.add('keyboard-row');
      row.forEach((keyCode) => {
        const Key = document.createElement('div');
        Key.id = keyCode;
        Key.classList.add('key');
        if (keyCode !== 'Space') {
          Key.innerHTML = `
            <div class="ru ${lang === 'ru' ? '' : 'hidden'}">
              <div class="regular ${shiftFlag ? 'hidden' : ''}">${layoutRu[keyCode].regular}</div>
              <div class="shift ${shiftFlag ? '' : 'hidden'}">${layoutRu[keyCode].shift || layoutRu[keyCode].regular}</div>
            </div>
            <div class="en ${lang === 'en' ? '' : 'hidden'}">
              <div class="regular ${shiftFlag ? 'hidden' : ''}">${layoutEn[keyCode].regular}</div>
              <div class="shift  ${shiftFlag ? '' : 'hidden'}">${layoutEn[keyCode].shift || layoutEn[keyCode].regular}</div>
            </div>
          `;
        } else {
          Key.innerHTML = `
            <div class="ru ${lang === 'ru' ? '' : 'hidden'}">
              <div class="regular ${shiftFlag ? 'hidden' : ''}">&nbsp</div>
              <div class="shift ${shiftFlag ? '' : 'hidden'}">&nbsp</div>
            </div>
            <div class="en ${lang === 'en' ? '' : 'hidden'}">
              <div class="regular ${shiftFlag ? 'hidden' : ''}">&nbsp</div>
              <div class="shift  ${shiftFlag ? '' : 'hidden'}">&nbsp</div>
            </div>
          `;
        }
        keyboardRow.appendChild(Key);
      });
      keyboardWrapper.appendChild(keyboardRow);
    });
  }
}

const kb = new Keyboard();
textArea.focus();
kb.AltFlag = true;
