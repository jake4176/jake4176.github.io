# 럭키랩 (LuckyLab)

**Live site / 사이트:** https://jake4176.github.io/

[English](#english) · [한국어](#한국어)

---

## English

LuckyLab is a small static website with free, in-browser tools for playing with probability and AI, plus guides that explain how they work.

### Pages

| Page | What it is |
|---|---|
| `index.html` | Home: tools, guides, site principles, FAQ |
| `lotto.html` | Lotto 6/45 number generator (1–5 sets, bonus number, include/exclude filters, history, copy) with a usage guide, rules, odds table, FAQ, and Disqus comments |
| `animal-test.html` | AI dog-vs-cat face test (photo upload or webcam) using a Teachable Machine model, with usage, how it works, privacy, and FAQ |
| `guides.html` + `guide-*.html` | Six original guides: lotto odds, lotto myths, random numbers & shuffling, AI image classification, dog/cat face types, photo tips |
| `about.html`, `privacy.html`, `terms.html`, `contact.html` | About, privacy policy (incl. AdSense cookies), terms, contact form (Formspree) |
| `404.html`, `sitemap.xml`, `robots.txt` | Not-found page and search engine files |

### How it works

- Plain HTML/CSS/JS served by GitHub Pages. No build step, no server.
- Shared header, footer, and theme live in `assets/site.css` and `assets/site.js`.
- Lotto draws use a Fisher–Yates shuffle. The animal test runs a TensorFlow.js model in the browser, and photos never leave the device.
- Dark/light theme follows the system setting until the visitor picks one (saved in `localStorage`).

To run locally: `python -m http.server 8000` in this folder, then open http://localhost:8000.

> The lotto generator does not improve your odds, and the animal test is for fun only.

---

## 한국어

럭키랩은 확률과 AI를 브라우저에서 바로 체험하는 무료 도구와, 그 원리를 설명하는 가이드를 모은 정적 웹사이트입니다.

### 페이지 구성

| 페이지 | 내용 |
|---|---|
| `index.html` | 홈: 도구, 가이드, 운영 원칙, 자주 묻는 질문 |
| `lotto.html` | 로또 6/45 번호 추첨기(1~5세트, 보너스 번호, 포함·제외 필터, 기록, 복사)와 사용법·규칙·확률표·FAQ, Disqus 댓글 |
| `animal-test.html` | Teachable Machine 모델을 이용한 AI 강아지상·고양이상 테스트(사진 또는 웹캠)와 사용법·원리·개인정보·FAQ |
| `guides.html`, `guide-*.html` | 직접 쓴 가이드 6편: 로또 확률, 로또 번호 오해, 난수와 셔플, AI 이미지 분류, 강아지상·고양이상, 촬영 팁 |
| `about.html`, `privacy.html`, `terms.html`, `contact.html` | 소개, 개인정보처리방침(AdSense 쿠키 안내 포함), 이용약관, 문의 폼(Formspree) |
| `404.html`, `sitemap.xml`, `robots.txt` | 없는 페이지 안내와 검색엔진용 파일 |

### 동작 방식

- GitHub Pages에서 제공하는 순수 HTML/CSS/JS 사이트입니다. 빌드 과정이나 서버가 없습니다.
- 공통 머리글·바닥글·테마는 `assets/site.css`, `assets/site.js`에 있습니다.
- 로또 추첨은 피셔-예이츠 셔플을 사용합니다. 동물상 테스트는 TensorFlow.js 모델을 브라우저에서 실행하므로 사진이 기기 밖으로 나가지 않습니다.
- 다크/라이트 모드는 방문자가 선택하기 전까지 기기 설정을 따르고, 선택하면 `localStorage`에 기억합니다.

내 컴퓨터에서 실행하기: 이 폴더에서 `python -m http.server 8000`을 실행한 뒤 http://localhost:8000 을 엽니다.

> 로또 번호 추첨기는 당첨 확률을 높여 주지 않으며, 동물상 테스트는 재미를 위한 것입니다.
