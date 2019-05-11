# Vue.js + Typescript + GitHub + TSLint + Bootstrap4 +Visual Studio Code

## netlify link a program teszteléséhez:
https://ecstatic-swirles-d68c4f.netlify.com/

## Fejlesztői környezet telepítése, beállítása (Windows)
1.  Node.js (pl.: node-v10.15.3-x64.msi) letöltése, telepítése:<br>
    https://nodejs.org/en/download/
2.  Command prompt, npm frissítése, globális Node.js csomag(ok) telepítése:<br>
    "npm install -g npm@next" paranccsal<br>
    "npm install -g @vue/cli" paranccsal<br>
    "npm install -g tslint" paranccsal<br>
    "npm install -g @starptech/prettyhtml
2.  Git for windows telepítése (opcionális, git-hez):<br>
    https://git-for-windows.github.io/
3.  Visual Studio Code (User Installer) telepítése:<br>
    https://code.visualstudio.com/Download<br>
    (User installer: "%LocalAppData%\Programs\Microsoft VS Code\bin" települ!)
4.  VSCode futtatása, Visual Studio Extensions telepítése: Ctrl-Shift-X<br>
     Javasolt kiterjesztések keresése, telepítés:<br>

    - Auto Rename Tag<br>
    https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag

    - Beautify<br>
    https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify

    - Debugger for Chrome<br>
    https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome

    - GitLens (telepítése opcionális, kiterjesztett Git szolgáltatások)<br>
    https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

    - JavaScript (ES6) code snippets<br>
    https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets

    - Markdown All in One<br>
    https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one

    - npm<br>
    https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script 

    - npm Intellisense<br>
    https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense

    - Spell Right<br>
    https://marketplace.visualstudio.com/items?itemName=ban.spellright

    - TSLint<br>
    https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin
    
    - TSLint Vue (vscode-tslint-vue)<br>
    https://marketplace.visualstudio.com/items?itemName=prograhammer.tslint-vue

    - Vetur<br>
    https://marketplace.visualstudio.com/items?itemName=octref.vetur

    - Vue Peek<br>
    https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek

    - további kiterjesztések telepítése igény szerint
    
5.  Billentyűkombinációk beállítása (opcionális):<br> 
    File\Preferences\Keyboard Shortcuts menüvel<br>
    Parancs keresése: gépeléssel<br>
    Hozzárendelés, módosítás: "ceruza" ikonra kattintással, törlés: Delete bill.<br>
     - gépel: "delete" > parancs: "Delete Line" > hozzárendel: Ctrl-L
     - opcionális: további billentyűkombinációk hozzárendelése tetszés szerint
6.  "Vue.js devtools" Chrome bővítmény telepítése, Chrome böngésző újraindítása
    Nyomkövetéskor (F5) induló Chrome-nál is telepíteni kell! Link:<br>
    https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
7.  Opcionális: VSCode beállítása: lsd. az oldal végén

## Új projekt létrehozása
1. CMD.EXE (Parancssor futtatása)
2. Projekt szülőmappájának aktuálissá tétele (pl.: CD D:\VueJsProjects)
3. "vue create my-first-vuejs-app" parancs futtatása (idézőjelek nélkül, nem lehet nagybetű), lépések:
    - Manually select features
    - Beállít (*), a többi üres ( ):
        - (*) TypeScript
        - (*) Linter / Formatter
    - Use class-style component syntax? (Y/n) Y
    - Use Babel alongside TypeScript for auto-detected polyfills? (y/N) N
    - Pick a linter / formatter config: TSLint
    - Pick additional lint features: 
        - (*) Lint on save
        - ( ) Lint and fix on commit
    - Where do you prefer placing config for Babel, PostCSS, ESLint, etc.?: In dedicated config files
    - Save this as a preset for future projects? (y/N) N
4. VSCode indítása, projekt mappa (my-first-vuejs-app) megnyitása:
    - File\Open Folder... (vagy)
    - Project mappa helyi menüjéből: Open with Code
    - Vagy CMD ablakból: CD my-first-vuejs-app majd "code ."
5. TSLint "recommended" szabályok módosítása<br>
    A "recommended" szabályok (rules) vannak bekapcsolva.<br>
    Módosítani a tslint.json állományokban lehet őket a rules szekcióban<br>
    Szabályok és leírásuk: https://palantir.github.io/tslint/rules/
6. package.json, tsconfig.json, .gitignore, launch.json, settings.json, tasks.json<br>
   állományok létrehozása/beállítása a "jedlikes starter template" szerint


## Fejlesztés, tesztelés
1.  VSCode indítása (utoljára megnyitott projektet visszatölti), vagy<br>
    Project mappa helyi menüből: Open with Code, vagy<br>
    VSCode indítása után File/Open Folder... menüpontba a project mappa (my-first-vuejs-app) megnyitása
2.  Letöltött (GitHub-clone, ZIP) repók esetén a node csomagok telepítése új terminál ablakból (Ctr-Shift-ö):<br>
    "npm install" vagy "npm i"
2.  Fejlesztői fordítás új terminál ablakból (Ctrl-Shift-ö):<br>
    "npm run serve" (vagy Ctrl-Shift-B -> task.json kell a minta szerinti tartalommal)<br>
    (első indítás után, ha változás történik, akkor újrafordít)
3.  Output: http://localhost:8080/
4.  Forrás állományok (pl.: *.ts, *.vue, ...) létrehozása, meglévők szerkesztése<br>
5.  Futtatás, nyomkövetés (opcionális):<br>
    Töréspontok elhelyezése, vagy a "debugger;" parancs elhelyezése a forráskódban.<br>
    Nyomkövetés indítása: F5-el<br>
    Első nyomkövetésnél: Select environment -> Chrome<br>
    Majd: launch.json beállítások bővítése: "sourceMaps": true<br>
6.  Terjesztési verzió fordítása új terminál ablakból (+ ikonnal is lehet új ablakot nyitni): (opcionális)<br>
    "npm run build"
7.  Formázási hibák ellenőrzése és javítása: (opcionális)<br>
    "npm run lint"


## Hasznos linkek:
- https://vuejs.org/
- https://vuejs.hu/
- https://vuejs.org/v2/guide/typescript.html
- https://github.com/vuejs/awesome-vue/blob/master/README.md

## Verziókezelés Git-el VS Code-ban (nagyon alap, opcionális):
1. GitHub account létrehozása:<br>
   https://github.com/<br>
   (nitslaszlo az account név a példában)
2. Git repository létrehozása:<br>
   pl.: GitHub asztali alkalmazással vagy github.com-on<br>
   (JedlikVueJsStarter a repository neve a példában)
3. Git konfigurálása Git CMD ablakból (1x kell csak, Windows megjegyzi):<br>
   git config --global user.email nitslaszlo@gmail.com<br>
   git config --global user.name nitslaszlo<br>
   git config --global credential.helper wincred
4. Visual Studio Code indítása - project betöltése
5. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
8. Remote repository megadása új terminál ablakból (Ctr-Shift-ö)
   - "git remote add origin https://github.com/nitslaszlo/JedlikVueJsStarter.git"
   - "git push -u origin master"

### Fel/le töltés GitHub-ra későbbiekben:
1. Ctrl-Shift-G -> Commit message megadása, majd commit Ctrl-Enter -el
2. Változások szinkronizálása ("feltöltés"):<br>
   Alul a státus sorban balra "Synchronize Changes" -ra kattint

## VS Code editor beállítása:
1. Ctrl-Shift-P vagy F1
2. "Preferen..." gépelése
3. Preferences: "Open Workplace Settings" a projektben tárolt beállításokhoz (ez az erősebb) vagy
4. Preferences: "Open User Settings" a felhasználónál tárolt beállításokhoz<br>
   Konfig fájl workspace: projekt/.vscode/settings.json<br>
   Konfig fájl user: c:/Users/nitslaszlo/AppData/Roaming/Code/User/settings.json

## Deploy on netlify.com
lsd.: Deploy_on_netlify.pdf
