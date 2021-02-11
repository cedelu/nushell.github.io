(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{492:function(s,a,e){"use strict";e.r(a);var n=e(42),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("Pivots the table contents so rows become columns and columns become rows.")]),s._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" docs\n───┬────────────────────┬──────┬────────┬─────────────\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ name               │ type │ size   │ modified")]),s._v("\n───┼────────────────────┼──────┼────────┼─────────────\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ docs/commands      │ Dir  │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" mins ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ docs/docker.md     │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.0")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" mins ago\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ docs/philosophy.md │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("912")]),s._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),s._v(" mins ago\n───┴────────────────────┴──────┴────────┴─────────────\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" docs "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" pivot\n───┬──────────┬───────────────┬────────────────┬────────────────────\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ Column0  │ Column1       │ Column2        │ Column3")]),s._v("\n───┼──────────┼───────────────┼────────────────┼────────────────────\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ name     │ docs/commands │ docs/docker.md │ docs/philosophy.md\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v("     │ Dir           │ File           │ File\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ size     │        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(" KB │         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.0")]),s._v(" KB │              "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("912")]),s._v(" B\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ modified │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" mins ago   │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" mins ago    │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" mins ago\n───┴──────────┴───────────────┴────────────────┴────────────────────\n")])])]),e("p",[s._v("Use "),e("code",[s._v("--header-row")]),s._v(" to treat the first row as column names:")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" docs "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" pivot --header-row\n───┬───────────────┬────────────────┬────────────────────\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ docs/commands │ docs/docker.md │ docs/philosophy.md")]),s._v("\n───┼───────────────┼────────────────┼────────────────────\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Dir           │ File           │ File\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(" KB │         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.0")]),s._v(" KB │              "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("912")]),s._v(" B\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" mins ago   │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(" mins ago    │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" mins ago\n───┴───────────────┴────────────────┴────────────────────\n")])])]),e("p",[s._v("Use "),e("code",[s._v("--ignore-titles")]),s._v(" to prevent pivoting the column names into values:")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" docs "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" pivot --ignore-titles\n───┬───────────────┬────────────────┬────────────────────\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ Column0       │ Column1        │ Column2")]),s._v("\n───┼───────────────┼────────────────┼────────────────────\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ docs/commands │ docs/docker.md │ docs/philosophy.md\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ Dir           │ File           │ File\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(" KB │         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.0")]),s._v(" KB │              "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("912")]),s._v(" B\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("54")]),s._v(" mins ago   │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v(" mins ago    │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" mins ago\n───┴───────────────┴────────────────┴────────────────────\n")])])]),e("p",[s._v("Additional arguments are used as column names:")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" docs "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" pivot foo bar baz\n───┬──────────┬───────────────┬────────────────┬────────────────────\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ foo      │ bar           │ baz            │ Column3")]),s._v("\n───┼──────────┼───────────────┼────────────────┼────────────────────\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ name     │ docs/commands │ docs/docker.md │ docs/philosophy.md\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v("     │ Dir           │ File           │ File\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ size     │        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7")]),s._v(" KB │         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.0")]),s._v(" KB │              "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("912")]),s._v(" B\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ modified │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),s._v(" mins ago   │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v(" mins ago    │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(" mins ago\n───┴──────────┴───────────────┴────────────────┴────────────────────\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);