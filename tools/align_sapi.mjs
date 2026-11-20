import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const pDir = process.argv[2] || 'projects/como-funciona-o-elevador';
const txt = fs.readFileSync(path.join(pDir, 'narracao.txt'), 'utf8').trim();
const lines = txt.split(/\r?\n+/).map(l => l.trim()).filter(Boolean);
const allWords = txt.split(/\s+/).map(w => w.trim()).filter(Boolean);

const wavPath = path.join(pDir, 'narracao.wav');
const durStr = execSync(`ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 "${wavPath}"`).toString().trim();
const dur = parseFloat(durStr);

console.log(`Audio: ${dur}s, Words: ${allWords.length}, Sentences: ${lines.length}`);

let curT = 0.12;
const availT = dur - 0.4;
const totalChars = allWords.reduce((s, w) => s + w.length, 0);

const palavras = [];

for (let i = 0; i < allWords.length; i++) {
  const w = allWords[i];
  const charRatio = w.length / totalChars;
  const wDur = Math.max(0.18, availT * charRatio);
  const isEnd = /[.!?]$/.test(w);
  const pause = isEnd ? 0.35 : 0.04;
  
  palavras.push({
    palavra: w,
    inicio: curT,
    fim: curT + wDur
  });
  curT += wDur + pause;
}

// Rescale so last word ends cleanly right before dur - 0.2
const lastEnd = palavras[palavras.length - 1].fim;
const scale = (dur - 0.25) / lastEnd;
for (const p of palavras) {
  p.inicio = Math.round(p.inicio * scale * 1000) / 1000;
  p.fim = Math.round(p.fim * scale * 1000) / 1000;
}

// Build frases
const frases = [];
let pIdx = 0;
for (const line of lines) {
  const lineWords = line.split(/\s+/).filter(Boolean);
  const startP = palavras[pIdx];
  const endP = palavras[pIdx + lineWords.length - 1];
  frases.push({
    texto: line,
    inicio: startP.inicio,
    fim: endP.fim
  });
  pIdx += lineWords.length;
}

fs.writeFileSync(path.join(pDir, 'palavras.json'), JSON.stringify(palavras, null, 2) + '\n');
fs.writeFileSync(path.join(pDir, 'frases.json'), JSON.stringify(frases, null, 2) + '\n');
fs.writeFileSync(path.join(pDir, 'voz.json'), JSON.stringify({
  provedor: 'windows-sapi',
  voz: 'Microsoft Maria Desktop',
  duracao: Math.round(dur * 100) / 100,
  palavras: palavras.length
}, null, 2) + '\n');

console.log('Primeira palavra:', palavras[0]);
console.log('Última palavra:', palavras[palavras.length - 1]);
console.log('Frases geradas:', frases.length);
