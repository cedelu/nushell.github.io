(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{578:function(e,a,o){"use strict";o.r(a);var s=o(42),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"introduccion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduccion"}},[e._v("#")]),e._v(" Introducción")]),e._v(" "),o("p",[e._v("Hola, y bienvenido al proyecto Nushell. El objectivo de este proyecto es tomar la filosofía Unix de shells, dónde tuberías (pipes) conectan comandos simples juntos y llevarlos al estilo moderno de desarrollo.")]),e._v(" "),o("p",[e._v('Nu toma ideas de muchos territorios familiares: shells tradicionales como bash, shells avanzadas como PowerShell, programación funcional, programación de sistemas, y más. Pero, en lugar de ser un "Todo en uno", No enfoca su energía en hacer algunas cosas bien:')]),e._v(" "),o("ul",[o("li",[e._v("Crear una shell flexible de plataforma cruzada con un toque moderno.")]),e._v(" "),o("li",[e._v("Permitirte mezclar y combinar aplicaciones de línea de comandos con una shell que comprende la estructura de tus datos.")]),e._v(" "),o("li",[e._v("Tenga el brillo UX que proporcionan las aplicaciones modernas CLI.")])]),e._v(" "),o("p",[e._v("La manera más facil de ver qué puede hacer Nu es empezando con ejemplos, así que vamos a sumergirnos.")]),e._v(" "),o("p",[e._v("Lo primero que notarás al ejercutar un comando como "),o("code",[e._v("ls")]),e._v(" es que en lugar de un bloque de texto que regresa, recibirás una tabla estructurada.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> ls\n----+------------------+-----------+----------+----------+----------------+----------------\n #  | name             | type      | readonly | size     | accessed       | modified \n----+------------------+-----------+----------+----------+----------------+----------------\n 0  | .azure           | Directory |          | 4.1 KB   | 2 months ago   | a week ago \n 1  | IMG_1291.jpg     | File      |          | 115.5 KB | a month ago    | 4 months ago \n 2  | Cargo.toml       | File      |          | 3.1 KB   | 17 minutes ago | 17 minutes ago \n 3  | LICENSE          | File      |          | 1.1 KB   | 2 months ago   | 2 months ago \n 4  | readonly.txt     | File      | readonly | <empty>  | a month ago    | a month ago \n 5  | target           | Directory |          | 4.1 KB   | 2 days ago     | 15 minutes ago\n...\n")])])]),o("p",[e._v("La tabla es más que solamente mostrar el directorio de una manera diferente. Tanto las tablas en una hoja de cálculo (spreadsheet), esta tabla te permite trabajar con los datos más interactivamente.")]),e._v(" "),o("p",[e._v("Lo primero que vamos hacer es ordenar nuestra tabla por nombre. Para poder hacerlo tomaremos la salida de "),o("code",[e._v("ls")]),e._v(" and alimentarla al comando que ordena tablas basado en el contenido de una columna.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> ls | sort-by name\n----+------------------+-----------+----------+----------+----------------+----------------\n #  | name             | type      | readonly | size     | accessed       | modified \n----+------------------+-----------+----------+----------+----------------+----------------\n 0  | .azure           | Directory |          | 4.1 KB   | 2 months ago   | a week ago \n 1  | .cargo           | Directory |          | 4.1 KB   | 2 months ago   | 2 months ago \n 2  | .editorconfig    | File      |          | 148 B    | 2 months ago   | 2 months ago \n 3  | .git             | Directory |          | 4.1 KB   | 2 months ago   | 20 minutes ago \n 4  | .gitignore       | File      |          | 58 B     | a week ago     | a week ago \n 5  | .vscode          | Directory |          | 4.1 KB   | a month ago    | a month ago \n...\n")])])]),o("p",[e._v("Puedes observar que para lograrlo no tuvimos que pasar argumentos al comando "),o("code",[e._v("ls")]),e._v(". En cambio, nosotros usamos el comando "),o("code",[e._v("sort-by")]),e._v(" que proporciona Nu para ordenar la salida del comando "),o("code",[e._v("ls")]),e._v(".")]),e._v(" "),o("p",[e._v("Nu proporciona comandos que trabajan con tablas. Por ejemplo, podemos filtrar los contenidos de la tabla de "),o("code",[e._v("ls")]),e._v(" para únicamente mostrar archivos superiores a 4 kilobytes:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> ls | where size > 4kb\n----+----------------+------+----------+----------+----------------+----------------\n #  | name           | type | readonly | size     | accessed       | modified \n----+----------------+------+----------+----------+----------------+----------------\n 0  | IMG_1291.jpg   | File |          | 115.5 KB | a month ago    | 4 months ago \n 1  | README.md      | File |          | 11.1 KB  | 2 days ago     | 2 days ago \n 2  | IMG_1291.png   | File |          | 589.0 KB | a month ago    | a month ago \n 3  | IMG_1381.jpg   | File |          | 81.0 KB  | a month ago    | 4 months ago \n 4  | butterfly.jpeg | File |          | 4.2 KB   | a month ago    | a month ago \n 5  | Cargo.lock     | File |          | 199.6 KB | 22 minutes ago | 22 minutes ago\n")])])]),o("p",[e._v("Al igual que en la filosofía Unix, poder hacer que los comandos hablen entre ellos nos da maneras de mezclar y combinar de formas distintas. Probemos otro comando:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> ps\n-----+-------+----------+------+--------------------------------------------------------------------------------\n #   | pid   | status   | cpu  | name \n-----+-------+----------+------+--------------------------------------------------------------------------------\n 0   | 1003  | Unknown  | 0.00 |  \n 1   | 1515  | Sleeping | 0.00 | /usr/lib/gnome-settings-daemon/gsd-screensaver-proxy \n 2   | 2128  | Sleeping | 0.00 | /usr/lib/gnome-settings-daemon/gsd-screensaver-proxy \n 3   | 2285  | Unknown  | 0.00 |  \n 4   | 8872  | Sleeping | 0.00 | /usr/lib/gvfs/gvfsd-dnssd--spawner:1.23/org/gtk/gvfs/exec_spaw/4 \n 5   | 1594  | Sleeping | 0.00 | /usr/lib/ibus/ibus-engine-simple\n")])])]),o("p",[e._v("Es posible que estés familiarizado con el comando "),o("code",[e._v("ps")]),e._v(" si has utlizado Linux. Con dicho comando, podemos tener una lista de los procesos actuales que ejecuta el sistema, qué estado tienen y sus nombres. También podemos ver la carga CPU del proceso.")]),e._v(" "),o("p",[e._v("¿Qué tal si quisiéramos mostrar los procesos que activamente usan el CPU? Así como hicimos con el comando "),o("code",[e._v("ls")]),e._v(" previamente, también podemos trabajar con la tabla que nos devuelve "),o("code",[e._v("ps")]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> ps | where cpu > 10\n---+-------+----------+-------+-----------------------------\n # | pid   | status   | cpu   | name \n---+-------+----------+-------+-----------------------------\n 0 | 1992  | Sleeping | 44.52 | /usr/bin/gnome-shell \n 1 | 1069  | Sleeping | 16.15 |  \n 2 | 24116 | Sleeping | 13.70 | /opt/google/chrome/chrome \n 3 | 21976 | Sleeping | 12.67 | /usr/share/discord/Discord\n")])])]),o("p",[e._v("Hasta ahora, hemos visto el uso de "),o("code",[e._v("ls")]),e._v(" y "),o("code",[e._v("ps")]),e._v(" para enumerar archivos y procesos. Nu también ofrece otros comandos que pueden crear tablas de información de utilidad. Exploremos a continuación "),o("code",[e._v("date")]),e._v(" y "),o("code",[e._v("sys")]),e._v(".")]),e._v(" "),o("p",[e._v("Ejecutando "),o("code",[e._v("date")]),e._v(" nos proporciona información del día y tiempo:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> date\n------+-------+-----+------+--------+--------+----------\n year | month | day | hour | minute | second | timezone \n------+-------+-----+------+--------+--------+----------\n 2019 | 8     | 17  | 19   | 20     | 50     | +12:00 \n------+-------+-----+------+--------+--------+----------\n")])])]),o("p",[e._v("Ejecutando "),o("code",[e._v("sys")]),e._v(" devuelve información sobre el sistema en el que se ejecuta Nu:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> sys\n----------+----------+-----------+----------+-----------+-----------\n host     | cpu      | disks     | mem      | temp      | net \n----------+----------+-----------+----------+-----------+-----------\n [object] | [object] | [3 items] | [object] | [3 items] | [3 items] \n----------+----------+-----------+----------+-----------+-----------\n")])])]),o("p",[e._v("Esto es un poco diferente ante las tablas que hemos visto. El comando "),o("code",[e._v("sys")]),e._v(" nos proporciona una tabla que contiene tablas estructuradas en las celdas en vez de valores simples. Para mirar estos datos necesitamos seleccionar una columa para mostrar:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> sys | get host\n-------+------------------+----------+--------+----------+----------\n name  | release          | hostname | arch   | uptime   | users \n-------+------------------+----------+--------+----------+----------\n Linux | 5.0.0-21-generic | pop-os   | x86_64 | [object] | [1 item] \n-------+------------------+----------+--------+----------+----------\n")])])]),o("p",[e._v("El comando "),o("code",[e._v("get")]),e._v(' nos permite saltar directo al contenido de una columa de la tabla. Aquí estamos mirando la columna "host" que contiene información del host dónde se está ejecutando Nu. El nombre del sistema operativo, hostanme, CPU, y más. Miremos los nombres de los usuarios en el sistema:')]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> sys | get host.users\njonathan   \n")])])]),o("p",[e._v('En este momento, solo hay un usuario en el sistema llamado "jonathan". Notarás que podemos pasar una ruta y no únicamente el nombre de una columna. Nu tomará esta ruta e irá a los datos correspondientes en la tabla.')]),e._v(" "),o("p",[e._v('Es posible que hayas notado algo más que es diferente. En lugar de tener una tabla de datos, tenemos solo un elemento individual: la cadena "jonathan". Nu trabaja tanto con tabla de datos así como cadenas. Cadenas son una parte importante de trabajar con comandos fuera de Nu.')]),e._v(" "),o("p",[e._v("Miremos en acción cómo funcionan las cadenas fuera de Nu. Tomaremos el ejemplo anterior y ejecutaremos el comando externo "),o("code",[e._v("echo")]),e._v(", que se encuentra instalado en la mayoría de los sitemas operativos:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> sys | get host.users | echo $it\njonathan\n")])])]),o("p",[e._v("Si esto se parece mucho a lo que teníamos antes, ¡tienes buen ojo! Es similar, pero con una diferencia importante: hemos llamado "),o("code",[e._v("echo")]),e._v(" con el valor que vimos antes. Esto nos permite pasar datos fuera de Nu a "),o("code",[e._v("echo")]),e._v(" (o cualquier comando fuera de Nu, como "),o("code",[e._v("git")]),e._v(" por ejemplo)")]),e._v(" "),o("p",[o("em",[e._v("Nota: El texto de ayuda para cualquiera de los comandos incorporados de Nu se pueden observar con el comando "),o("code",[e._v("help")])]),e._v(":")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("> help config\nConfiguration management.\n\nUsage:\n  > config <subcommand> {flags}\n\nSubcommands:\n  config get -\n  config set -\n  config set_into -\n  config clear -\n  config load -\n  config remove -\n  config path -\n\nFlags:\n  -h, --help:\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);