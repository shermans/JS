// ==UserScript==
// @name           Douban Download Search-自定义
// @namespace      https://github.com/ywzhaiqi
// @description    增加豆瓣电影、图书的下载搜索链接.感谢原作者
// @author         ywzhaiqi
// @version        0.1
// @include        https://movie.douban.com/subject/*
// @include        https://book.douban.com/subject/*
// @grunt          none
// ==/UserScript==

function run () {
	var movieTitle = $('h1 span:eq(0)').text();
	var title = $('html head title').text();
	var keyword1 = title.replace( '(豆瓣)', '' ).trim();
	var keyword2 = encodeURIComponent( keyword1 );
	var movieSimpleTitle = movieTitle.replace(/第\S+季.*/, "");

	var Movie_links = [
		// { html: "百度盘", href: "http://www.baidu.com/s?wd=" + encodeURIComponent(keyword1 + " site:pan.baidu.com")},

		{ html: "努努", href: "https://www.nunuyy.top/so/" + keyword1},
		{ html: "饭团", href: "https://fantuan.tv/vodsearch.html?wd=" + keyword1},
		{ html: "狂人", href: "https://www.kpkuang.cc/vodsearch/-------------.html?wd=" + keyword1},
		{ html: "哔嘀", href: "https://www.mp4er.cc/search/" + keyword1},
		{ html: "哔哩", href: "https://search.bilibili.com/all?keyword=" + keyword1},
		{ html: "Google", href: "https://www.google.com.bz/search?safe=off&q=在线++"+ keyword1},
		{ html: "百度盘", href: "https://www.google.com/search?q=" + keyword1 + " site:pan.baidu.com"},
		{ html: "人人影视", href: "http://www.yayaxz.com/search/" + movieSimpleTitle },
		{ html: "VeryCD", href: "http://www.verycd.com/search/folders/" + keyword2 },
		{ html: "SimpleCD", href: "http://simplecd.me/search/entry/?query=" + keyword1 },
		{ html: "Donkey4u", href: "http://donkey4u.com/search/" + movieTitle },
		{ html: "Torrent Project", href: "http://torrentproject.com/?&btnG=Torrent+Search&num=20&start=0&s=" + keyword2 },
		{ html: "Google MiniSD", href: "https://www.google.com/search?ie=UTF-8&q=" + movieTitle + "+MiniSD" }
	];

	var Book_links = [
		{ html: "百度盘", href: "https://www.google.com/search?q=" + keyword1 + " site:pan.baidu.com"},
		{ html: "mLook", href: "http://www.mlook.mobi/search?q=" + keyword2 },
		{ html: "VeryCD", href: "http://www.verycd.com/search/folders/" + keyword2 },
		{ html: "SimpleCD", href: "http://simplecd.me/search/entry/?query=" + keyword1 },
		{ html: "Donkey4u", href: "http://donkey4u.com/search/" + movieTitle },
		{ html: "Torrent Project", href: "http://torrentproject.com/?&btnG=Torrent+Search&num=20&start=0&s=" + keyword2 },
		{ html: "Google", href: "https://www.google.com/search?ie=UTF-8&q=" + movieTitle },
	];

	var link = $("<div>").append(
		$("<span>").attr("class", "pl").html("下载链接:")
	);

	switch(location.host){
		case "movie.douban.com":
			appendLinks(Movie_links, link)

			link.append('<br>')
				.append('<span class="pl">字幕链接:</span>')
				.append(
					$("<a>").attr({
						href: "http://shooter.cn/search/" + movieTitle,
						target: "_blank"
					}).html("Shooter")
				);

			break;
		case "book.douban.com":
			appendLinks(Book_links, link)
			break;
	}

	$('#info').append(link);


	function appendLinks(items, appendTo){
		items.forEach(function(item, i){
			$("<a>")
				.html(item.html)
				.attr({
					href: item.href,
					target: "_blank"
				})
				.appendTo(appendTo);

			if(i != items.length -1){
				appendTo.append(" / ");
			}
		});
	}
}

run()
