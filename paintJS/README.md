# 바닐라 JS 그림판 만들기

javascript를 작성할때 `ID`를 사용하고 css를 사용할때 `class`를 사용한다.

app.js 에서 따로 canvas에 width height값을 강제로 넣는 이유

- js에서 동작할때 html로 부터 canvas라는 element를 생성때 css에서 지정한 width height를 받아오지 않는다.
- 그래서 `width`, `height`를 사이즈를 지정하던가 `offsetWidth`, `offsetHeight`등으로 매번 canvas를 측정해서 가져오도록 지정해야 한다.
- 스크립트로 따로 지정하는 일이 없도록 하기 위해선 html 내부에 직접 width와 height를 지정하면 정상적 그림이 그려진다.

```html
<canvas id="jsCanvas" class="canvas" width="700" height="700"></canvas>
```
