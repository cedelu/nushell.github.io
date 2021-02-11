(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{466:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Parse text as "),a("code",[t._v(".ics")]),t._v(" and create table.")]),t._v(" "),a("p",[t._v("Syntax: "),a("code",[t._v("from ics")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Suppose calendar.txt is a text file that is formatted like a "),a("code",[t._v(".ics")]),t._v(" (iCal) file:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" calendar.txt\nBEGIN:VCALENDAR\nBEGIN:VEVENT\nDTSTART:20171007T200000Z\nDTEND:20171007T233000Z\nDTSTAMP:20200319T182138Z\nSUMMARY:Basketball Game\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("UID")]),t._v(":4l80f6dcovnriq38g57g07btid@google.com\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("p",[t._v("Pass the output of the "),a("code",[t._v("open")]),t._v(" command to "),a("code",[t._v("from ics")]),t._v(" to get a correctly formatted table:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" calendar.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" from ics\n───┬────────────────┬──────────────────┬────────────────┬────────────────┬────────────────┬────────────────┬────────────────\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# │ properties     │ events           │ alarms         │ to-Dos         │ journals       │ free-busys     │ timezones")]),t._v("\n───┼────────────────┼──────────────────┼────────────────┼────────────────┼────────────────┼────────────────┼────────────────\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n───┴────────────────┴──────────────────┴────────────────┴────────────────┴────────────────┴────────────────┴────────────────\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" calendar.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" from ics "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get events "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" get properties "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" where name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SUMMARY"')]),t._v("\n─────┬─────────┬───────────────────────────────────────┬────────\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   │ name    │ value                                 │ params")]),t._v("\n─────┼─────────┼───────────────────────────────────────┼────────\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ SUMMARY │ Basketball Game                       │\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);