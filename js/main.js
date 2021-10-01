//*********私達についてのHover時 *********/
//ドロップダウンメニューの表示
$(document).on("click", ".show-subMenu a", function(){
    console.log("ff");
    
    if($(".gnav-about").css("display")=="none"){
        $('.gnav-about').fadeIn();
    }else{
        $('.gnav-about').fadeOut();
   }
   //Hoverのフラグ
   $('.gnav-about').hover(function(){
    isOver = true;
  }, function(){
    isOver = false;
  }); 

   // メニュー領域外をクリックしたらメニューを閉じる
    $('body').click(function() {
        if (isOver == false) {
            $('.gnav-about').fadeOut();
         }
    });
    return false;//aタグを無効にする
});
// メニュー領域外をクリックしたらメニューを閉じる
$('body').click(function() {
    //if (over_flg == false) {
    //  $('span').removeClass('selected');
    //  $('ul').slideUp('fast');
    // }
    $('.gnav-about').fadeOut();
  });

//*********スマホメニュースライド  *******/
$(document).on("click", ".gnav_sp_menu", function(){
    $('.slide-menu-sp').addClass("fade-in-sub");
    $('.slide-menu-sp').removeClass("fade-out-sub");
    closeSub();
});
function closeSub (){
    $(document).on("click", ".close-icon", function(){
        $('.slide-menu-sp').addClass("fade-out-sub");
        $('.slide-menu-sp').removeClass("fade-in-sub");
    });
}
//*********スライド表示*********

/* 下から */
$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.fade-b').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fade-in-bottom");
            }
        });
    });
});
/*　右から */
$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.fade-r').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fade-in-right");
            }
        });
    });
});
/** 左から **/
$(function () {
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.fade-l').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fade-in-left");
            }
        });
    });
});

//*********タブ分けメニュー*********

//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#all←この#の値とタブ内のリンク名（例）#allが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

//タブをクリックしたら
$(document).on("click", "#mainNews a", function(){
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID (hashName);//設定したタブの読み込み
});

//*********タブ分けメニュー(製品案内)*********

//任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#cat-1の値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#all←この#の値とタブ内のリンク名（例）#cat-1が同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

//タブをクリックしたら
$(document).on("click", "#mainProducts .tab a", function(){
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID (idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});

//******** Owl carousel********/
$(function(){
    $('.owl-carousel').owlCarousel({
            loop:true,　//項目をループさせる
            margin:10,  //itemの間隔
            items: 4,   //表示する項目数
			responsive: { // レスポンシブ
				// ブレイクポイント0px以上
				0: {
				  items: 1,
				},
				// ブレイクポイント560px以上
				520: {
				  items: 2,
				},
				// ブレイクポイント980px以上
				980: {
				  items: 4,
				},
			  },
        })
});

///トップへ戻る
$(function(){
    var pagetop = $('#page_top');
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });
  //アンカーリンクはスクロール
  $(function(){
    $('a[href^=#]').click(function() {
    var speed = 500; // スクロール速度(ミリ秒)
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html').animate({scrollTop:position}, speed, 'swing');
    return false;
    });
    });