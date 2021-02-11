(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{618:function(t,a,v){"use strict";v.r(a);var _=v(42),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"データ型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#データ型"}},[t._v("#")]),t._v(" データ型")]),t._v(" "),v("p",[t._v("従来、Unixシェルコマンドは文字列テキストを通じて互いに通信してきました。あるコマンドは標準出力(しばしば'stdout'と略されます)を介してテキストを出力し、他方のコマンドは標準入力(または'stdin')を介してテキストを読み込みます。このようにして、２つのコマンドは通信できます。")]),t._v(" "),v("p",[t._v("この種の通信は文字列ベースと考えることができます。")]),t._v(" "),v("p",[t._v("Nuはコマンドに対してこのアプローチを採用しつつ、他の種類のデータを扱えるよう拡張しています。現在、Nuはシンプルなデータと構造化されたデータ、２つの種類をサポートしています。")]),t._v(" "),v("h2",{attrs:{id:"シンプルなデータ"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#シンプルなデータ"}},[t._v("#")]),t._v(" シンプルなデータ")]),t._v(" "),v("p",[t._v("多くのプログラミング言語と同様に、Nuはシンプルなデータと構造化されたデータを用いてデータをモデル化します。シンプルなデータ型には、整数、浮動小数点、文字列、真偽値、日付、およびパスが含まれます。ファイルサイズのための特別な型もこれに含まれます。")]),t._v(" "),v("h3",{attrs:{id:"整数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#整数"}},[t._v("#")]),t._v(" 整数")]),t._v(" "),v("p",[t._v("整数(または丸めた数)。例として、１，５，および100があります。")]),t._v(" "),v("h3",{attrs:{id:"浮動小数点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浮動小数点"}},[t._v("#")]),t._v(" 浮動小数点")]),t._v(" "),v("p",[t._v("浮動小数点は小数部を含む数です。例として、1.5、2.0、および15.333があります。")]),t._v(" "),v("h3",{attrs:{id:"文字列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#文字列"}},[t._v("#")]),t._v(" 文字列")]),t._v(" "),v("p",[t._v('文字列はテキストを表す基本的な方法です。文字列はダブルクォートを使って表されます。例として、"Fred", "myname.txt", and "Lynchburg, VA"があります。')]),t._v(" "),v("p",[t._v("Nuの文字列はデフォルトでUnicodeに対応しているためUTF-8のテキストを簡単に渡すことができます。")]),t._v(" "),v("h3",{attrs:{id:"lines"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lines"}},[t._v("#")]),t._v(" Lines")]),t._v(" "),v("p",[t._v("LinesはOSに依存した行末をもつ文字列です。使用される場合は、OS固有の行末が使用されます。")]),t._v(" "),v("h3",{attrs:{id:"column-paths"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#column-paths"}},[t._v("#")]),t._v(" Column paths")]),t._v(" "),v("p",[t._v("Column pathsはテーブルにおける特定のサブテーブル、列、行、またはセルへのパスです。")]),t._v(" "),v("h3",{attrs:{id:"パターン"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#パターン"}},[t._v("#")]),t._v(" パターン")]),t._v(" "),v("p",[t._v('"glob"パターンと呼ばれたりもするパターンはシェルでよく利用されるファイル名のマッチング方法です。'),v("br"),t._v(" "),v("code",[t._v("*")]),t._v("は何にでもマッチし、"),v("code",[t._v("?")]),t._v("は一文字にマッチすることを表しています。")]),t._v(" "),v("p",[t._v("例) "),v("code",[t._v("ls test*")]),t._v("における"),v("code",[t._v("test*")]),t._v("がパターンです。")]),t._v(" "),v("h3",{attrs:{id:"真偽値"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#真偽値"}},[t._v("#")]),t._v(" 真偽値")]),t._v(" "),v("p",[t._v("真偽値は真か偽かの状態をとります。しばしば比較の結果を表すために使われます。")]),t._v(" "),v("p",[t._v("真偽値の２つの値は、"),v("code",[t._v("$true")]),t._v("と"),v("code",[t._v("$false")]),t._v("です。")]),t._v(" "),v("h3",{attrs:{id:"日付"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#日付"}},[t._v("#")]),t._v(" 日付")]),t._v(" "),v("p",[t._v("日付と時間は日付型のデータに一緒に保持されます。システムで利用される日付データはタイムゾーンをもち、デフォルトではUTCタイムゾーンが使用されます。")]),t._v(" "),v("h3",{attrs:{id:"duration"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#duration"}},[t._v("#")]),t._v(" Duration")]),t._v(" "),v("p",[t._v("Durationは時間の長さを表します。1秒、5週間、1年はすべてDurationの値です。")]),t._v(" "),v("p",[t._v("例) "),v("code",[t._v("1w")]),t._v("は1週間を表すDurationです。")]),t._v(" "),v("p",[t._v("この表は現在サポートされているすべてのDurationを示しています。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Duration")]),t._v(" "),v("th",[t._v("Length")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1sec")]),t._v(" "),v("td",[t._v("one second")])]),t._v(" "),v("tr",[v("td",[t._v("1min")]),t._v(" "),v("td",[t._v("one minute")])]),t._v(" "),v("tr",[v("td",[t._v("1hr")]),t._v(" "),v("td",[t._v("one hour")])]),t._v(" "),v("tr",[v("td",[t._v("1day")]),t._v(" "),v("td",[t._v("one day")])]),t._v(" "),v("tr",[v("td",[t._v("1wk")]),t._v(" "),v("td",[t._v("one week")])]),t._v(" "),v("tr",[v("td",[t._v("1mon")]),t._v(" "),v("td",[t._v("one month")])]),t._v(" "),v("tr",[v("td",[t._v("1yr")]),t._v(" "),v("td",[t._v("one year")])])])]),t._v(" "),v("h3",{attrs:{id:"ranges"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ranges"}},[t._v("#")]),t._v(" Ranges")]),t._v(" "),v("p",[t._v("値の範囲を表すこともできます。大抵は、開始と終了の間の数値を表すために利用します。")]),t._v(" "),v("p",[t._v("例) "),v("code",[t._v("ls | range 1..4")])]),t._v(" "),v("h3",{attrs:{id:"パス"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#パス"}},[t._v("#")]),t._v(" パス")]),t._v(" "),v("p",[t._v("パスは、特定のOSでファイルパスを表すプラットフォームに依存しない方法です。例として、"),v("code",[t._v("/usr/bin")]),t._v("や"),v("code",[t._v("C:\\Users\\file.txt")]),t._v("があげられます。")]),t._v(" "),v("h3",{attrs:{id:"バイト"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#バイト"}},[t._v("#")]),t._v(" バイト")]),t._v(" "),v("p",[t._v("ファイルサイズはバイトと呼ばれる特別な整数型で保持されます。例として、"),v("code",[t._v("100")]),t._v(", "),v("code",[t._v("15kb")]),t._v("、"),v("code",[t._v("100mb")]),t._v("があります。")]),t._v(" "),v("h3",{attrs:{id:"バイナリデータ"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#バイナリデータ"}},[t._v("#")]),t._v(" バイナリデータ")]),t._v(" "),v("p",[t._v("バイナリデータは、画像ファイルのデータのように、生のバイトの集まりです。")]),t._v(" "),v("h2",{attrs:{id:"構造化データ"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#構造化データ"}},[t._v("#")]),t._v(" 構造化データ")]),t._v(" "),v("p",[t._v("構造化データはシンプルなデータから作られます。例えば、構造化データは、複数の整数を表す方法を提供します。現在サポートされている構造化データは次のとおりです。rows, lists, そしてblocksです。")]),t._v(" "),v("h3",{attrs:{id:"rows"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rows"}},[t._v("#")]),t._v(" Rows")]),t._v(" "),v("p",[t._v("rowデータ型は表の１行のデータで見えるものを表しています。異なる要素のデータをもち、データにはそれぞれ列名が与えられます。")]),t._v(" "),v("h3",{attrs:{id:"lists"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#lists"}},[t._v("#")]),t._v(" Lists")]),t._v(" "),v("p",[t._v("Listsは一つ以上の値を保持できます。単純な値だけでなく、rowsも保持することができます。rowsのlistsはしばしばテーブルと呼ばれます。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("> echo [sam fred george]\n───┬────────\n 0 │ sam \n 1 │ fred \n 2 │ george \n───┴────────\n")])])]),v("h3",{attrs:{id:"blocks"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#blocks"}},[t._v("#")]),t._v(" Blocks")]),t._v(" "),v("p",[t._v("BlocksはNuのコードブロックを表します。例えば、"),v("code",[t._v("each { echo $it }")]),t._v("というコマンドでは、"),v("code",[t._v("{ echo $it }")]),t._v("がblockになります。\nblockはデータの行ごとに実行するコードを表すのに便利です。")])])}),[],!1,null,null,null);a.default=s.exports}}]);