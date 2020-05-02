import React from 'react';
import project from './project.png';
import initSimulator from './initSimulator.png';

export default class Scrollspy extends React.Component{
    render(){
        return(
            <div>
            <h3 className="title">React Native</h3>
                <hr className="line" />
            <div class="row">
        
            <div className="scrollTitle">
            
  <nav class="nav nav-pills flex-column">
    <a class="nav-link" href="#item-1">安裝</a>
    <a class="nav-link" href="#item-2">git版本控制</a>
    <a class="nav-link" href="#item-3">專案架構</a>
    {/* <a class="nav-link" href="#item-4">初始畫面</a>
    <a class="nav-link" href="#item-5">實作前端頁面</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ml-3 my-1" href="#item-5-1">登入</a>
      <a class="nav-link ml-3 my-1" href="#item-5-2">註冊</a>
      <a class="nav-link ml-3 my-1" href="#item-5-3">首頁</a>
      <a class="nav-link ml-3 my-1" href="#item-5-4">個人頁面</a>
      <a class="nav-link ml-3 my-1" href="#item-5-5">聊天室</a>
    </nav> */}
    <a class="nav-link" href="#item-6">React-Redux</a>
    <a class="nav-link" href="#item-7">資料庫</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ml-3 my-1" href="#item-7-1">Firebase</a>
      <a class="nav-link ml-3 my-1" href="#item-7-2">MySql</a>
    </nav>
    <a class="nav-link" href="#item-8">Express</a>
  </nav>
</div>


<div className="scrollContent"> 

<div data-spy="scroll" data-target="#navbar-example3" data-offset="0">
  <h4 id="item-1">安裝</h4>
  <p>
      在這邊我想先介紹React Native在Mac上的環境搭建，首先要下載<a href="https://nodejs.org/zh-tw/download/">Node.js</a>作為執行環境，依據您的電腦規格，下載LTS版本，比較穩定。
      點開安裝包後就一直點擊繼續下一步就行了，安裝完後打開終端機輸入指令<strong>node -v</strong>跟<strong>npm -v</strong>確認是否安裝完畢，若有出現版本號碼則代表有安裝完成。
      （歐對了！套件管理工具也有人用yarn，但我主要都還是用npm比較多。）
      </p>
      {/* <center>
        <img src={node} width="400" height="300" alt="logo" />
      </center> */}
      <p>
          接著下載 watchman，他是一個文件監控系統，可以提升效能。但必須用一個套件管理系統 <a href="https://brew.sh">Homebrew</a>來安裝。安裝完Homebrew後，打開終端機輸入 <strong>brew install watchman</strong> 按下Enter後即可安裝。
      </p>
      <p>
          再來，透過剛剛已載好的npm，安裝React Native 框架。打開終端機，執行以下命令：<strong>npm install -g react-native-cli</strong>。npm 安裝 package 的命令為npm install + package名稱，-g 指令指的是全局安裝，亦即其他目錄也可以使用react-native-cli 的命令來執行任務。
          接著就可以使用React Native CLI提供的命令，來創建專案啦。打開終端機cd到你想要放置專案的目錄下，輸入：<strong>react-native init Shaun</strong>（Shaun是專案名稱，您可以自行修改），環境設置就大功告成囉！
      </p>
      <p>
          最後最後！！！在App Store下載Xcode，就可以準備做測試了！
      </p>
  <h4 id="item-2">git版本控制</h4>
  <p>
      學習程式語言的過程中時常會出現錯誤，此時，一定要親自詢問Google大神！很多錯誤都可以在GitHub、Stack Overflow等等網站看到解決方法。Shaun不才，一開始以為GitHub就只是一個論壇，大家把程式碼丟上去供大家參考或提出各種報錯，並有各路高手幫忙解決問題。後來才知道他背後有一個Git伺服器。
      git是一個版本控制系統，簡單的說呢他會紀錄你每一次新增修改刪除的檔案，你才能知道歐！我今天做了哪些事情、我上次做了什麼事情等等。
  </p>
  <h4 id="item-3">專案架構</h4>
  <p>開發之前，我們要先了解專案架構，Shaun剛接觸React Native時，完全不知道該從哪裡開始寫，因此，每個檔案都點開來改改看，不小心弄亂了就刪掉重建一次專案，研究了好一陣子才知道呢。</p>
  <center>
    <img src={project} width="300" height="500" alt="logo" />
  </center>
  <p>打開初始專案會看到上圖這些，有關IOS的檔案都放在IOS資料夾裡，有關Android的檔案都放在Android資料夾內。node_modules資料夾裡面放的是一些套件，未來您如果有用npm下載package，都會出現在這裡面。
      package.json裡面則記錄一些資訊，您要知道的是他裡面還有紀錄您下載的package的版本號。App.js/index.js是程式進入點。了解這些後就可以打開App.js，開始寫程式囉！一起來看看App.js裡面長什麼樣子吧！</p>
  <h4 id="item-4">初始畫面</h4>
  <p>進入您的專案，進入ios資料夾，雙擊 您的專案名稱.xcworkspace（用Xcode打開），打開後按快捷鍵 command+R 開啟模擬器。</p>
  <center>
    <img src={initSimulator} width="250" height="500" alt="logo" /><p>App.js裡的程式碼就可以變成這個頁面</p>
  </center>
  <h4 id="item-5">實作前端頁面</h4>
  <p>通常，我會在專案路徑下新增以下幾個資料夾：</p>
  <p>1. src資料夾 : 我會把前端頁面的component放在這裡</p>
  <p>2. redux資料夾 : 裡面又有兩個資料夾 action跟 reducers</p>
  <p>3. service資料夾 : 如果後端是用Express.js / MySql 的話，我會建立這個資料夾，來放後端的東西</p>
  <p>4. 如果資料庫是用Firebase，則直接用Firebase提供的指令建立資料夾就可以了</p>
  {/* <div>
      新增好資料夾後，我們開始來實作吧！
  </div> */}
  {/* <h5 id="item-5-1">登入</h5>
  <p>在自建的src資料夾中，加入Login.js（記得！！！Component的檔名一定要是大寫！），然後到<a href="https://reactnative.dev/docs/getting-started">React Native官網</a>上看有什麼Api可以用。</p>
  <p>由於React Native框架先前已經載入過了（可以去node_module跟package.json裡面檢查是否有React Native框架），可以把你想要使用的組建import 進來。</p>
  <h5 id="item-5-2">註冊</h5>
  <p>...</p>
  <h5 id="item-5-3">首頁</h5>
  <p>...</p>
  <h5 id="item-5-4">個人頁面</h5>
  <p>...</p>
  <h5 id="item-5-5">聊天室</h5>
  <p>...</p> */}
  <h4 id="item-6">React-Redux</h4>
  <p>
      一開始使用<a href="https://github.com/reduxjs/react-redux">React-Redux</a>時覺得很難理解，但他能夠節省效能，開發大型專案最好還是使用一下。
      Shaun在這邊簡單說明一下Redux，希望能方便您理解。Redux中，會有store，action跟reducers。
      store是儲存全域的state，一個App僅會有一個store。
      action是一個function，會回傳一個物件，用來描述要做什麼事情。
      reducers是用來檢查你做了哪一個action，然後要發生什麼事情。
 </p>
  <h4 id="item-7">資料庫</h4>
  <h5 id="item-7-1">Firebase</h5>
  <p><a href="https://firebase.google.com">Firebase</a>是一個非常強大的即時資料庫，除了一般資料庫提供的新增修改刪除查詢資料以外，還有許多功能，它把原本一些複雜的事情變得很簡單，我之所以會用Firebase是因為我想試試時做一個即時聊天室，而且他有免費方案，用量對於一般小型App，是綽綽有餘的。</p>
  {/* <h5 id="item-7-2">MySql</h5>
  <p>...</p>
  <h4 id="item-8">Express</h4>
  <p>...</p> */}
</div>
</div>
</div></div>

        );
    }
} 