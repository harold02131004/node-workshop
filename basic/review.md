**Code Review**
## 為什麼需要 Code Review
1.檢查程式碼中是否有明顯的邏輯錯誤？  
2.程式碼的一致性及可讀性  
3.互相學習提升程式碼的品質  
4.找尋更好的演算法  


## reviewer 應該要去檢查哪些東西？怎麼做？
### 一.排版
(可利用相關套件協助)
1.每行縮排由4個空格組成->Tab  
2.換行縮排由2個空格組成  
3.每行程式碼最長80個字元  
4.結尾都加分號  
5.{ 須加在該當行之後  

```javascript=
function getBreakfast() {
  return {
    tea: 'tea',
    sandWich: 'sandWich'
  };
};
```
6.不要在逗號、分號、冒號前面加空白，但後方則需要  
7.操作符左右都要加空白  
```javascript=
a = 1, b = 2;
a + b = 3;
if(a === b){
 console.log("true");
}else{
 console.log("flase");
}
```  

   

### 二.註解
解釋為什麼某些程式碼存在

1.檔案前面的註解
    -在檔案前端置入一些關於這檔案的描述
```javascript=
/* program : Hello World Program 
...
*/
```
    
2.分區塊註解
-如需註解，把程式碼切成好幾個區塊，在前端註解該區塊在做甚麼事

```javascript=
// 確認array裡面是否存在0 
int CheckZero = 0;
for(int i = 0;i < 5;i ++){
  if(array[i] == 0) CheckZero = 1;
};
```

3.TODO 註解
-暫時沒有時間繼續完成一部分的Code，在該處註解:
``` javascript=
// TODO : 尚未完成的事
```
4.程式碼已經描述的事實不要再做註解
```javascript=
i = 1; //把變數i變成1
```
### 三.命名
1.英語用詞盡量準確

2.命名前墜  
* 字串:str  
* 數字:num  
* 布林:is  
* 陣列:arr  
* 物件:obj  
 
3.Pascal 命名法的大小寫，空格以_來代替
```javascript=
let num Max_Value = 100;
```




### 四.在環境底下做各項需求測試

例如:
input 只能輸入整數 1-9

Test case
             Expected Result
- 1-9     -> 可以輸入  
- 打英文   -> 不可以輸入，並且顯示「請輸入1-9的整數」  
- 打中文   -> 不可以輸入，並且顯示「請輸入1-9的整數」  
- 英數混打  
- 小數點  
- 大於 9  
- 負數  
- 符號  
- 空白  
- ...  





## code review 時應該要有什麼溝通能力/技巧？
1.對評論區別
 1. [blocker]: 在評論前面加上一個 [blocker] 標記，表示這個代碼行的問題必須要修改  
 2. [optional]：在評論前面加上一個 [optional] 標記，表示這個代碼行的問題可改可不改  
 3. [question]：在評論前面加上一個 [question] 標記，表示對這個代碼行不理解，有問題需要問，被審查者需要針對問題進行回覆澄清  
 
2.對需求的理解並且提出改善方式  
3.每個 pull request 都相對小 
4.客觀評論
5.避免使用負面詞彙



## 多久merge and push 一次  
每個禮拜五  

```
補充說明

.md用法
換行 : 文字段落後面加兩個空白
```  

