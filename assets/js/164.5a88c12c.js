(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{562:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[e._v("#")]),e._v(" HTTP")]),e._v(" "),a("h3",{attrs:{id:"fetching-json-from-a-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetching-json-from-a-url"}},[e._v("#")]),e._v(" Fetching JSON from a url")]),e._v(" "),a("p",[a("code",[e._v("fetch https://jsonplaceholder.typicode.com/posts | first 5")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("━━━┯━━━━━━━━┯━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n # │ userId │ id │ title                                                   │ body\n───┼────────┼────┼─────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────\n 0 │      1 │  1 │ sunt aut facere repellat provident occaecati excepturi  │ quia et suscipit\n   │        │    │ optio reprehenderit                                     │ suscipit recusandae consequuntur expedita et cum\n   │        │    │                                                         │ reprehenderit molestiae ut ut quas totam\n   │        │    │                                                         │ nostrum rerum est autem sunt rem eveniet architecto\n 1 │      1 │  2 │ qui est esse                                            │ est rerum tempore vitae\n   │        │    │                                                         │ sequi sint nihil reprehenderit dolor beatae ea dolores\n   │        │    │                                                         │ neque\n   │        │    │                                                         │ fugiat blanditiis voluptate porro vel nihil molestiae ut\n   │        │    │                                                         │ reiciendis\n   │        │    │                                                         │ qui aperiam non debitis possimus qui neque nisi nulla\n 2 │      1 │  3 │ ea molestias quasi exercitationem repellat qui ipsa sit │ et iusto sed quo iure\n   │        │    │ aut                                                     │ voluptatem occaecati omnis eligendi aut ad\n   │        │    │                                                         │ voluptatem doloribus vel accusantium quis pariatur\n   │        │    │                                                         │ molestiae porro eius odio et labore et velit aut\n 3 │      1 │  4 │ eum et est occaecati                                    │ ullam et saepe reiciendis voluptatem adipisci\n   │        │    │                                                         │ sit amet autem assumenda provident rerum culpa\n   │        │    │                                                         │ quis hic commodi nesciunt rem tenetur doloremque ipsam\n   │        │    │                                                         │ iure\n   │        │    │                                                         │ quis sunt voluptatem rerum illo velit\n 4 │      1 │  5 │ nesciunt quas odio                                      │ repudiandae veniam quaerat sunt sed\n   │        │    │                                                         │ alias aut fugiat sit autem sed est\n   │        │    │                                                         │ voluptatem omnis possimus esse voluptatibus quis\n   │        │    │                                                         │ est aut tenetur dolor neque\n━━━┷━━━━━━━━┷━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")])])]),a("hr"),e._v(" "),a("h3",{attrs:{id:"fetch-from-multiple-urls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-from-multiple-urls"}},[e._v("#")]),e._v(" Fetch from multiple urls")]),e._v(" "),a("p",[e._v("Suppose you are querying several endpoints,\nperhaps with different query parameters and you want to view all the responses as a single dataset.\nYou can make use of "),a("code",[e._v("$it")]),e._v(" to run nu commands on every row of data.")]),e._v(" "),a("p",[e._v("An example JSON file, "),a("code",[e._v("urls.json")]),e._v(", with the following contents:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "urls": [\n    "https://jsonplaceholder.typicode.com/posts/1",\n    "https://jsonplaceholder.typicode.com/posts/2",\n    "https://jsonplaceholder.typicode.com/posts/3"\n  ]\n}\n')])])]),a("p",[a("code",[e._v("open urls.json | get urls | fetch $it")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("━━━┯━━━━━━━━┯━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n # │ userId │ id │ title                                                   │ body\n───┼────────┼────┼─────────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────\n 0 │      1 │  1 │ sunt aut facere repellat provident occaecati excepturi  │ quia et suscipit\n   │        │    │ optio reprehenderit                                     │ suscipit recusandae consequuntur expedita et cum\n   │        │    │                                                         │ reprehenderit molestiae ut ut quas totam\n   │        │    │                                                         │ nostrum rerum est autem sunt rem eveniet architecto\n 1 │      1 │  2 │ qui est esse                                            │ est rerum tempore vitae\n   │        │    │                                                         │ sequi sint nihil reprehenderit dolor beatae ea dolores\n   │        │    │                                                         │ neque\n   │        │    │                                                         │ fugiat blanditiis voluptate porro vel nihil molestiae ut\n   │        │    │                                                         │ reiciendis\n   │        │    │                                                         │ qui aperiam non debitis possimus qui neque nisi nulla\n 2 │      1 │  3 │ ea molestias quasi exercitationem repellat qui ipsa sit │ et iusto sed quo iure\n   │        │    │ aut                                                     │ voluptatem occaecati omnis eligendi aut ad\n   │        │    │                                                         │ voluptatem doloribus vel accusantium quis pariatur\n   │        │    │                                                         │ molestiae porro eius odio et labore et velit aut\n━━━┷━━━━━━━━┷━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n")])])]),a("hr"),e._v(" "),a("p",[e._v("If you specify the "),a("code",[e._v("--raw")]),e._v(" flag, you'll see 3 separate json objects, one in each row.")]),e._v(" "),a("p",[a("code",[e._v("open urls.json | get urls | fetch $it --raw")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('━━━┯━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n # │ <value>\n───┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────\n 0 │ {\n   │   "userId": 1,\n   │   "id": 1,\n   │   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",\n   │   "body": "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum\n   │ rerum est autem sunt rem eveniet architecto"\n   │ }\n 1 │ {\n   │   "userId": 1,\n   │   "id": 2,\n   │   "title": "qui est esse",\n   │   "body": "est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro\n   │ vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla"\n   │ }\n 2 │ {\n   │   "userId": 1,\n   │   "id": 3,\n   │   "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",\n   │   "body": "et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis\n   │ pariatur\\nmolestiae porro eius odio et labore et velit aut"\n   │ }\n━━━┷━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')])])]),a("hr"),e._v(" "),a("p",[e._v("To combine these responses together into a valid JSON array, you can turn the table into json.")]),e._v(" "),a("p",[a("code",[e._v("open urls.json | get urls | fetch $it | to-json")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut"}]\n')])])]),a("hr"),e._v(" "),a("p",[e._v("Making a "),a("code",[e._v("post")]),e._v(" request to an endpoint with a JSON payload.\nTo make long requests easier,\nyou can organize your json payloads inside a file.")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"my_payload"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"body"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"userId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[a("code",[e._v("open payload.json | get my_payload | post https://jsonplaceholder.typicode.com/posts $it")])]),e._v(" "),a("p",[e._v("Output")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("━━━━━\n id\n─────\n 101\n━━━━━\n")])])]),a("hr"),e._v(" "),a("p",[e._v("We can put this all together into a pipeline where we read data, manipulate it, and then send it back to the API.\nLets "),a("code",[e._v("fetch")]),e._v(" a post, "),a("code",[e._v("increment")]),e._v(" the id, and "),a("code",[e._v("post")]),e._v(" it back to the endpoint.\nIn this particular example, the test endpoint gives back an arbitrary response which we can't actually mutate.")]),e._v(" "),a("p",[a("code",[e._v("open urls.json | get urls | first | fetch $it | inc id | to-json | post https://jsonplaceholder.typicode.com/posts $it")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("━━━━━\n id\n─────\n 101\n━━━━━\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);