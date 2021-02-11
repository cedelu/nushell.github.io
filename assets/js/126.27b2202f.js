(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{524:function(s,a,t){"use strict";t.r(a);var e=t(42),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Returns unique rows or values from a dataset.")]),s._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),t("p",[s._v("Given a file "),t("code",[s._v("test.csv")])]),s._v(" "),t("div",{staticClass:"language-csv extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("first_name,last_name,rusty_at,type\nAndrés,Robalino,10/11/2013,A\nAndrés,Robalino,10/11/2013,A\nJonathan,Turner,10/12/2013,B\nYehuda,Katz,10/11/2013,A\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" test.csv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n━━━┯━━━━━━━━━━━━┯━━━━━━━━━━━┯━━━━━━━━━━━━┯━━━━━━\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ first_name │ last_name │ rusty_at   │ type")]),s._v("\n───┼────────────┼───────────┼────────────┼──────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ Andrés     │ Robalino  │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("/11/2013 │ A\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ Jonathan   │ Turner    │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("/12/2013 │ B\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ Yehuda     │ Katz      │ "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("/11/2013 │ A\n━━━┷━━━━━━━━━━━━┷━━━━━━━━━━━┷━━━━━━━━━━━━┷━━━━━━\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" test.csv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n━━━┯━━━━━━━━━\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │")]),s._v("\n───┼─────────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ A\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ B\n━━━┷━━━━━━━━━\n")])])]),t("h3",{attrs:{id:"counting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#counting"}},[s._v("#")]),s._v(" Counting")]),s._v(" "),t("p",[t("code",[s._v("--count")]),s._v(" or "),t("code",[s._v("-c")]),s._v(" is the flag to output a "),t("code",[s._v("count")]),s._v(" column.")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" test.csv "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" get "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" -c"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n───┬───────┬───────\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ value │ count")]),s._v("\n───┼───────┼───────\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ A     │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ B     │     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n───┴───────┴───────\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);