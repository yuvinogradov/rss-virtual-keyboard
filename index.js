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
  Space: { regular: ' ', shift: null, keycode: '32' },
  AltRight: { regular: 'Alt', shift: null, keycode: '225' },
  ControlRight: { regular: 'Ctrl', shift: null, keycode: '17' },
  ArrowLeft: { regular: '&larr;', shift: null, keycode: '37' },
  ArrowUp: { regular: '&uarr;', shift: null, keycode: '38' },
  ArrowDown: { regular: '&darr;', shift: null, keycode: '40' },
  ArrowRight: { regular: '&rarr;', shift: null, keycode: '39' },
  Win: { regular: 'Win', shift: null, keycode: '1000' },
};

const layoutRu = {
  CapsLock: { regular: 'CapsLock', shift: null, keycode: '0' },
  Backquote: { regular: 'ё', shift: 'Ё', keycode: '192' },
  Digit1: { regular: '1', shift: '!', keycode: '49' },
  Digit2: { regular: '2', shift: '"', keycode: '50' },
  Digit3: { regular: '3', shift: '№', keycode: '51' },
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
  KeyQ: { regular: 'й', shift: 'Й', keycode: '81' },
  KeyW: { regular: 'ц', shift: 'Ц', keycode: '87' },
  KeyE: { regular: 'у', shift: 'У', keycode: '69' },
  KeyR: { regular: 'к', shift: 'К', keycode: '82' },
  KeyT: { regular: 'е', shift: 'Е', keycode: '84' },
  KeyY: { regular: 'н', shift: 'Н', keycode: '89' },
  KeyU: { regular: 'г', shift: 'Г', keycode: '85' },
  KeyI: { regular: 'ш', shift: 'Ш', keycode: '73' },
  KeyO: { regular: 'щ', shift: 'Щ', keycode: '79' },
  KeyP: { regular: 'з', shift: 'З', keycode: '80' },
  BracketLeft: { regular: 'х', shift: 'Х', keycode: '219' },
  BracketRight: { regular: 'ъ', shift: 'Ъ', keycode: '221' },
  Enter: { regular: 'Enter', shift: null, keycode: '13' },
  KeyA: { regular: 'ф', shift: 'Ф', keycode: '65' },
  KeyS: { regular: 'ы', shift: 'Ы', keycode: '83' },
  KeyD: { regular: 'в', shift: 'В', keycode: '68' },
  KeyF: { regular: 'а', shift: 'А', keycode: '70' },
  KeyG: { regular: 'п', shift: 'П', keycode: '71' },
  KeyH: { regular: 'р', shift: 'Р', keycode: '72' },
  KeyJ: { regular: 'о', shift: 'О', keycode: '74' },
  KeyK: { regular: 'л', shift: 'Л', keycode: '75' },
  KeyL: { regular: 'д', shift: 'Д', keycode: '76' },
  Semicolon: { regular: 'ж', shift: 'Ж', keycode: '186' },
  Quote: { regular: 'э', shift: 'Э', keycode: '222' },
  Backslash: { regular: '\\', shift: '/', keycode: '220' },
  ShiftLeft: { regular: 'Shift', shift: null, keycode: '16' },
  IntlBackslash: { regular: '/', shift: '|', keycode: '191' },
  KeyZ: { regular: 'я', shift: 'Я', keycode: '90' },
  KeyX: { regular: 'ч', shift: 'Ч', keycode: '88' },
  KeyC: { regular: 'с', shift: 'С', keycode: '67' },
  KeyV: { regular: 'м', shift: 'М', keycode: '86' },
  KeyB: { regular: 'и', shift: 'И', keycode: '66' },
  KeyN: { regular: 'т', shift: 'Т', keycode: '78' },
  KeyM: { regular: 'ь', shift: 'Ь', keycode: '77' },
  Comma: { regular: 'б', shift: 'Б', keycode: '188' },
  Period: { regular: 'ю', shift: 'Ю', keycode: '190' },
  Slash: { regular: '.', shift: ',', keycode: '191' },
  ShiftRight: { regular: 'Shift', shift: null, keycode: '16' },
  ControlLeft: { regular: 'Ctrl', shift: null, keycode: '17' },
  AltLeft: { regular: 'Alt', shift: null, keycode: '18' },
  Space: { regular: ' ', shift: null, keycode: '32' },
  AltRight: { regular: 'Alt', shift: null, keycode: '225' },
  ControlRight: { regular: 'Ctrl', shift: null, keycode: '17' },
  ArrowLeft: { regular: '&larr;', shift: null, keycode: '37' },
  ArrowUp: { regular: '&uarr;', shift: null, keycode: '38' },
  ArrowDown: { regular: '&darr;', shift: null, keycode: '40' },
  ArrowRight: { regular: '&rarr;', shift: null, keycode: '39' },
  Win: { regular: 'Win', shift: null, keycode: '1000' },
};

const keyboardRows = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Delete'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backspace'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],
  ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

const BODY = document.body;

const MAIN_WRAPPER = document.createElement('div');
MAIN_WRAPPER.classList.add('main-wrapper');
BODY.appendChild(MAIN_WRAPPER);

const TITLE = document.createElement('div');
TITLE.classList.add('title');
TITLE.innerHTML = 'RSS Virtual Keyboard';
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

function keyDownHandler(event) {
  const currentPosition = textArea.selectionStart;
  const content = textArea.value;

  console.log(`${event.code} down`);
  document.querySelector(`#${event.code}`).classList.add('pressed');

  textArea.value = content.slice(0, currentPosition) + event.key + content.slice(currentPosition);
  textArea.selectionStart = currentPosition + 1;
  textArea.selectionEnd = textArea.selectionStart;
}

function keyUpHandler(event) {
  console.log(`${event.code} up`);
  document.querySelector(`#${event.code}`).classList.remove('pressed');
}

textArea.addEventListener('keydown', (event) => { event.preventDefault(); });
BODY.removeEventListener('keydown', keyDownHandler);
BODY.removeEventListener('keyup', keyUpHandler);

BODY.addEventListener('keydown', keyDownHandler);
BODY.addEventListener('keyup', keyUpHandler);

class Keyboard {
  constructor() {
    keyboardRows.forEach((row, index) => {
      const keyboardRow = document.createElement('div');
      keyboardRow.id = `row${index}`;
      keyboardRow.classList.add('keyboard-row');
      row.forEach((keyCode) => {
        const Key = document.createElement('div');
        Key.id = keyCode;
        Key.classList.add('key');
        if (keyCode !== 'Space') {
          Key.innerHTML = layoutEn[keyCode].regular;
        } else {
          Key.innerHTML = '&nbsp;';
        }
        keyboardRow.appendChild(Key);
      });
      keyboardWrapper.appendChild(keyboardRow);
    });
  }
}

const kb = new Keyboard();

// function drawKeyboard() {
//   keyboardRows.forEach((row, index) => {
//     const keyboardRow = document.createElement('div');
//     keyboardRow.id = `row${index}`;
//     keyboardRow.classList.add('keyboard-row');
//     row.forEach((keyCode) => {
//       const Key = document.createElement('div');
//       Key.id = keyCode;
//       Key.classList.add('key');
//       if (keyCode !== 'Space') {
//         Key.innerHTML = layoutEn[keyCode].regular;
//       } else {
//         Key.innerHTML = '&nbsp;';
//       }
//       keyboardRow.appendChild(Key);
//     });
//     keyboardWrapper.appendChild(keyboardRow);
//   });
// }

// drawKeyboard();
