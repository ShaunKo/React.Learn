import React from 'react';
import './App.css';
export default class About extends React.Component{
    
    render(){
        return(
            
            
            <div>
                <div className="lastParagraph">
                <h5 className="title">關於作者-Shaun</h5>
                <div className="paragraph">
                <p>1996年出生，有別於念醫學系的哥哥James，在求學過程中，Shaun的學業成績並不是非常理想。高中畢業後，對於未來並沒有什麼想法，大學學測考完，也沒有心思繼續拼指考，胡亂填幾所學校，不小心申請上了政治系。進入政治系後，對於政治並沒有多大興趣的Shaun上課時間時常與大學時最好的朋友Jack出沒在學校的籃球場，對於成績，也就是求過就好。直到大學三年級下學期，Shaun在跟從小在美國長大的表姐Justine聊天時，對程式語言開始感到好奇，因而開始接觸程式語言。</p>
                <p>Shaun第一個接觸的程式語言是Java，在看了很多有關Java的書籍後，去考了三張Oracle的Java證照(事後發現好像沒什麼用，用作品說話比較實在啦！考試費用對一個學生來講好貴歐～)，懂了MVC的觀念，用JSP/Servlet開始了網頁實作，同時花了一些時間學了Html/JavaScript/Css/JQuery/Bootstrap/MySql等等，最終作出了一個簡單的點餐系統網頁，但因為沒有租虛擬主機，只有在自己的本機上面跑。</p>
                <p>大四時因為本科系的必修幾乎都修得差不多了，因此隨意選修了一門程式語言課（Php），並跟著老師用Php再度完成了一個簡單的點餐系統網頁（奇怪怎麼都是做點餐系統網頁呢？哈哈）。如今在Shaun的殘存記憶中，對於Php這門語言，只剩下&lt;?php 這個起手式跟結尾符號 ?&gt;。</p>
                <p>畢業後Shaun並沒有急著找工作，與好朋友們開始做起白日夢--創業。當完兵後，因為得知Facebook有個語言React Native可以支援雙平台(IOS/Android)，為了希望在最短的時間在雙平台上架App，Shaun開始了React自學之路。</p>
                </div>
                <h5 className="title">本站目的</h5>
                <div className="lastParagraph">
                <p>自學程式語言並不容易，Shaun不是很厲害，但希望可以提供一些學習過程中遇到的問題以及心得，希望能幫助一些想要自己學習React Native/ React的人，本站內容如有錯誤理解歡迎用下方電子信箱私訊指教！</p>
                </div>
                </div>
            </div>
        );
    }
}