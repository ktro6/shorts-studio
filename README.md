# Shorts Studio AI — Estúdio Integrado de Vídeos Animados com IA

Uma central completa que transforma seu Agente de IA (Antigravity, Claude Code, Codex ou qualquer LLM com capacidade de ler arquivos e executar comandos) em um **diretor e produtor autônomo de vídeos verticais (Shorts, Reels e TikTok)**.

Você só precisa informar **a ideia** e **a duração desejada**. A IA executa todo o restante:
`Ideia → Roteiro Viral → Narração Neural → Storyboard 3D → Simulação Física → Legendas → Renderização MP4 → Capa e Copy de Postagem`.

---

## 🚀 Como Começar em 3 Passos

### 1. Pré-requisitos
- **Node.js** 18+ (já instalado no seu sistema)
- **ffmpeg** (já instalado no seu sistema)
- **Navegador** Chrome, Edge ou Brave (Edge já detectado no seu sistema)
- *(Opcional)* **Python 3.10-3.12** caso queira síntese de voz local grátis ou síntese musical via DSP.

### 2. Instalação
No terminal dentro desta pasta:
```powershell
npm.cmd install
```

### 3. Operação com o seu Agente de IA
Abra seu agente nesta pasta ou envie a seguinte instrução:
```
Você é o meu Criador de Vídeos. Leia o arquivo AGENTE.md desta pasta e siga-o à risca.
Quero um vídeo de 45 segundos sobre: como funciona um elevador.
Modo: automático, me entregue o vídeo pronto.
```

---

## 🎨 Três Estilos Visuais em um Só Estúdio

1. **Modo 3D Low-Poly Explicativo (Padrão de Processos)**
   - Mundo 3D vibrante, limpo e colorido.
   - Ideal para ciência, engenharia, infraestrutura, invenções, corpo humano e máquinas.
   - Focado em **processos físicos reais**: materiais fluindo (pedras, asfalto, água, fumaça), esteiras, escavadeiras, peças girando e camadas sendo construídas passo a passo.

2. **Modo Beanmen Animation (Personagens 2D em Cenários 3D)**
   - O estilo viral clássico de canais do YouTube (*Bean-head cartoon*).
   - Personagens 2D ultra-expressivos com roupas, chapéus, adereços e poses dinâmicas sobre locais 3D estilizados com sombras reais.
   - Inclui **54 efeitos sonoros prontos**, **6 trilhas musicais**, **11 cenários 3D** (quarto, escritório, rua, trincheira, deserto, campo de batalha, etc.) e biblioteca com centenas de objetos.

3. **Modo 2.5D Toon Storyteller (Baseado no Claude Animated Shorts / The Bridge)**
   - Personagens estilo cartum 2D (*cards* em canvas com contornos de tinta) inseridos em cenários 3D estilizados com sombreamento toon, profundidade de campo (*depth-of-field*) e desfoque de lente.
   - Ideal para histórias curiosas, lendas históricas, paradoxos e anedotas biográficas.
   - Trilha sonora estilo marcha e efeitos sonoros sincronizados gerados via DSP em Python.

---

## 📁 Estrutura da Pasta Integrada

```
shorts-studio/
├── AGENTE.md                    # Manual mestre de instruções para o agente de IA
├── PROMPT.md                    # Prompt universal de inicialização rápida
├── package.json                 # Scripts unificados de automação
│
├── beanmen/                     # Estúdio Completo Beanmen Animation
│   ├── src/                     # Motores de personagens (Character, faces, headwear, poses, props, fx)
│   ├── locations/               # 11 cenários 3D (quarto, rua, deserto, trincheira, galeria, etc.) + _objects.json
│   ├── stories/                 # 6 histórias virais completas prontas para render
│   ├── public/                  # 54 efeitos sonoros (SFX), 6 músicas e faixas de voz
│   └── scripts/                 # Scripts make, audio assets e TTS
│
├── assets/                      # Modelos 3D, personagens e áudio global
│   ├── characters/              # 11 presets de personagens com rig esquelético
│   ├── animations/              # 20 clipes de animação esquelética procedural
│   ├── scenery/                 # 57 itens de cenário (casas, prédios, obras, veículos)
│   ├── cards-2d/                # Biblioteca de cartuns 2D (bean-head cards)
│   └── audio/                   # Áudio global compartilhado (54 SFX + 6 trilhas de música)
│       ├── sfx/                 # Efeitos sonoros (socos, moedas, papéis, quedas, estalos)
│       └── music/               # Músicas por humor (curious, mystery, tense, upbeat, warm, sad)
│
├── engine/                      # Motores de renderização WebGL / Three.js
│   ├── player.js                # Player determinístico em função do tempo t
│   ├── player.html              # Palco 1080×1920 WebGL
│   ├── fluxos.js                # Sistema de partículas físicas determinísticas
│   ├── legendas.js              # Legendas dinâmicas estilo Shorts (karaokê)
│   └── shaders/                 # Shaders de contorno de tinta (ink) e lente (lensblur)
│
├── tools/                       # Ferramental CLI
│   ├── render.mjs               # Renderizador headless (Puppeteer + ffmpeg)
│   ├── serve.mjs                # Servidor local para pré-visualização (npm run preview)
│   ├── validar.mjs              # Validador rigoroso de storyboard
│   ├── novo-projeto.mjs         # Criador de novos projetos de vídeo
│   ├── voz/                     # Síntese neural de voz (Kokoro local / ElevenLabs)
│   └── audio-dsp/               # Síntese de marcha, SFX e mixagem travada em -6 dB RMS
│
├── catalog/                     # Catálogo de assets
│   ├── RESUMO.md                # Consulta rápida para a IA economizar tokens
│   └── CATALOG.md               # Detalhes de dimensões, parâmetros e variantes
│
├── docs/                        # Guias e metodologias
│   ├── roteiro-viral.md         # Fórmula de retenção de público para roteiros
│   ├── processos.md             # Guia obrigatório de animação física
│   ├── storyboard.md            # Documentação da estrutura do storyboard.json
│   ├── voz.md                   # Instruções de configuração de voz
│   └── postagem.md              # Criação de títulos, capas e comentários fixados
│
├── references/                  # Biblioteca de pesquisa e engenharia reversa
│   ├── STYLE_BIBLE.md           # Estudo estatístico de 20 canais virais
│   ├── reports/                 # 7 relatórios de luz, cor, câmera e contornos
│   ├── frames/                  # 38 quadros em resolução nativa para referência
│   └── sheets/                  # 20 folhas de contato completas (1.200 frames)
│
└── projects/                    # Projetos funcionais de demonstração
    ├── exemplo-asfalto/         # Curta de 120s completo (áudio WAV, storyboard e roteiro)
    ├── exemplo-casa/            # Curta de 32s completo
    └── exemplo-bridge/          # Projeto de referência clássico (The Bridge That Fell for a Song)
```

---

## 🛠️ Comandos Principais

```bash
# 1. Instalar dependências
npm install

# 2. Abrir o catálogo interativo de personagens e cenários no navegador
npm run preview
# (Acesse http://localhost:5173 para inspecionar todos os modelos)

# 3. Diagnóstico e configuração de voz
npm run voz -- diagnostico
npm run voz -- instalar                 # Instala a voz grátis local (Kokoro + Whisper)

# 4. Criar um novo projeto de vídeo
npm run novo -- "Como Funciona o Elevador"

# 5. Validar o storyboard
npm run validar -- projects/como-funciona-o-elevador

# 6. Renderizar quadros de inspeção (muito rápido, para checar antes do vídeo completo)
npm run render -- projects/como-funciona-o-elevador --quadros

# 7. Renderizar o vídeo final (1080×1920 a 30 fps)
npm run render -- projects/como-funciona-o-elevador

# 8. Renderizar apenas uma prévia leve (540×960)
npm run render -- projects/como-funciona-o-elevador --previa
```

---

## 🔊 Opções de Voz e Áudio

| Modo | Ferramenta | Como Configurar | Custo |
| :--- | :--- | :--- | :--- |
| **Grátis / Local** | Kokoro TTS + Whisper | `npm run voz -- instalar` (requer Python) | R$ 0,00 |
| **Nuvem Premium** | ElevenLabs | Adicionar `ELEVENLABS_API_KEY` no arquivo `.env` | Plano ElevenLabs |
| **Áudio Sintético DSP** | Python DSP (`tools/audio-dsp/`) | Loops de marcha e SFX gerados por código | R$ 0,00 |

---

## 📄 Licença
Código e documentação sob licença MIT. Material de referência incluído exclusivamente para fins de estudo de estilo.
