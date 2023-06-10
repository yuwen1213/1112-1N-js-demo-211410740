### [Github URL](https://github.com/yuwen1213/1112-1N-js-demo-211410740.git)

### [Github Vercel](https://1112-1-n-js-demo-211410740.vercel.app/)

### [Vercel api project URL](http://127.0.0.1:5502/demo/API-project/p3/index.html)

### P1: get menu items from local json (product.json)

參考到的 API 網站來源：

### [Store rest URL](https://storerestapi.com/docs)

使用上學期補交作業之前端頁面套用到此次 API 上，因為主題與服飾網路商店有關，上網找到有關商店的 API 網站(Store rest API)作為這次 projects.json 的資源。

![p1-1.2.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p1-1.3.png)

![p1-1.2.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p1-1.5.png)

實作過程：
參考 w15store-product，將網路上找來的 API 製作出 product.json，使用 fetchData 非同步(async、await)抓到 product.json 陣列。

![p1-1.2.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p1-1.2.png)

從 local json 中 return 出陣列中的內容，再透過監聽 console 出 allProducts 的內容

![p1-1.1.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p1-1.1.png)

完成以及未完成：
Done

![p1-1.1.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p1-1.4.png)

### P2: get company products by pressing shop buttons

實作過程(一樣使用 Store rest API)：
在 HTML 中加入 data-id，利用 dataset 呼叫，取得 data-id 的值。

![p1-1.1.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p2-1.2.png)

做按鈕監聽，按下按鈕事件發生時觸發被監聽的物件，可利用 btn 做出篩選動作，選擇想要的 item

![p1-1.1.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p2-1.1.png)

完成以及未完成：
Done

![p1-1.1.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p2-1.3.png)

![p1-1.1.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p2-1.4.png)

### P3: Show products by search term

實作過程(一樣使用 Store rest API)：
參考了 w16 meal-finder，因老師是用 fetch 抓取 API 網址，但因 Store rest API 原本的 json 沒有圖片檔，所以使用自己的圖片檔加入 json，過程中使用了老師的方法，以及匯集前幾週的 local json 端做法試了很多次也無法抓取到資料最後是參考了網路資料所做出來的結果。

![p1-1.1.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p3-2.png)

在前端頁面的部分因為是用上學期只運用 HTML、CSS 所做出來的成品，在搜尋圖示的部分從原本只是 icon 變成 button 且多了移過去有手(cursor: pointer;)的部分，讓整個網頁變得更加精緻、逼真。而 search 文字的部分從原本的只是文字加底線變成真的可以 input type 去做搜索。

![p1-1.1.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p3-3.png)

![p1-1.1.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p3-4.png)

完成以及未完成：
Done

![p1-1.1.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p3-1.png)

### 心得甘苦談

![p1-1.1.png](https://hlbovfzvhsftjuylmwlc.supabase.co/storage/v1/object/public/demo-40/md_1N_img/p3-5.png)

從一開始知道 project 的題目，到找 API 的過程其實花了蠻長的時間，因還未太過了解 API 是什麼，以及如何應用。但當下已經明確知道自己主題的方向是什麼(服飾商品的商店)，所以相對來說也較有一個明確的方向可以去找 API。
在找到 API 之後又是一大難題，因為不知道所選的 API 能否套用在自己設計的前端網頁上，結果剛好我所選的 API 沒有自帶圖片，所以無法完全套用 API 的 url，必須使用 local json 去抓資料，而馬上出現了一個問題就是如果使用 local 端的圖片無法隨著 P2 所做的篩選所變換圖片，只能固定出現前幾張照片，最後求救於助教才得以完美解決(將圖片檔直接寫入 json)。
在那之後在 P3 的搜尋部分又是一大挑戰。因為圖片問題無法像老師 w16 週所做的 meal-finder 一樣利用 fetch 抓取 API url，依舊只能用 local 端去抓資料，這也是我在做這次的 project 中覺得最困難的地方，因為沒有範本可以參考，利用前幾週上課內容，自己也試了很多方式都無果，最後只能一直在網路上找資料，查詢如何讓 js 連接 local 端內容而做出搜索動作，最後也終於成功做出搜尋功能。
在這當中因為有利用上學期所做的檔案去做，所以可以更明顯的看出這學期多學了非常多的內容，且與真正的網頁越來越像，每次做 project 都可以更了解上課所學內容，因為可以真正理解後派上用場，這才是上這堂課覺得最大的收穫。
