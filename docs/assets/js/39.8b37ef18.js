(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{221:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/introduction/proj-structure.png"),width:"300px",alt:"proj structure"}}),t._v(" "),t._m(3),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/introduction/proj-dependency.png"),alt:"proj denpendency"}}),t._v(" "),s("p",[t._v("如上图所示：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("注意事项")]),t._v(" "),s("ul",[s("li",[t._v("引导程序Boot-x.exe必须放到根目录。引导程序可采用Boot.exe, 源码及下载见 "),s("a",{attrs:{href:""}},[t._v("博客园: C#通过System.Diagnostics.Process扩展实现引导程序")]),t._v("; 也可采用Boot-cpp.exe, 源码及使用方法详见 "),s("a",{attrs:{href:"https://www.gitee.com/Liggin2019/Ligg.SeqExec",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee: Liggin2019/Ligg.SeqExec"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("Boot-x.ini可以放到根目录, 也可以统一放到根目录下的\\ini下, 这样根目录比较整洁。")]),t._v(" "),s("li",[t._v("Conf下各文件夹名称和位置不能改变。")]),t._v(" "),s("li",[t._v("Data、Lib、Cblps的文件夹可以在配置文件ApplicationSetting.*里设置, 如在配置文件采用相对路径则在缺省位置。")]),t._v(" "),s("li",[t._v("OeStdServiceComponents文件夹在配置文件OeStdServiceComponents.*里设置, 如在配置文件采用相对路径则在缺省位置。")]),t._v(" "),s("li",[t._v("启动程序WinformApp.exe、ConsoleApp.exe必须放到根目录的第3层子目录下如: \\Program\\Main\\netcoreapp3.1, 系统SetCurrentDirectory的方式如下:")])]),t._v(" "),t._m(24)]),t._v(" "),t._m(25),t._v(" "),s("ul",[t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),s("li",[s("p",[t._v("开发时的目录结构和启动项目Ligg.Ewa.WinformApp和Ligg.Ewa.ConsoleApp的Output Path, 设置如下, 比较方便:\n"),s("img",{attrs:{src:t.$withBase("/images/introduction/proj-debug.png"),alt:"proj debug"}})])]),t._v(" "),t._m(29)]),t._v(" "),t._m(30),t._m(31),t._v(" "),s("p",[t._v("可以从下面几个方面进行集成开发")]),t._v(" "),t._m(32),t._v(" "),s("hr"),t._v(" "),t._m(33)])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"总体介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总体介绍"}},[this._v("#")]),this._v(" 总体介绍")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[this._v("提示")]),this._v(" "),n("p",[this._v("本节内容快速浏览即可，通过教程的练习后，再回来加深理解。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"项目结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[this._v("#")]),this._v(" 项目结构")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"项目依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目依赖"}},[this._v("#")]),this._v(" 项目依赖")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[t._v("Ligg.Ewa.WinformApp和Ligg.Ewa.ConsoleApp是Winform和控制台应用的启动项目; 对应不同的启动参数，进入不同的应用(Application)和UI。一个应用可以同时具有多个Winform和Console的界面。")]),t._v(" "),s("li",[t._v("Ligg.Ewa.Winform, Ligg.Ewa.Console项目主要作用是对UI的管理。")]),t._v(" "),s("li",[t._v("Ligg.Ewa.Parser为Ligg.Ewa.Winform, Ligg.Ewa.Console共用。框架内置基础功能(如字符、文件处理, 逻辑、数值运算, 数据输入输出、数据格式转换、加密解密、表单字段验证、Windows脚本执行、Python脚本执行等...), 框架通过Ligg.Ewa.Parser项目以Get(), Do(), GetConstant(), Validate()调用Ligg.Infra项目实现。")]),t._v(" "),s("li",[t._v("Cblp项目(核心业务逻辑处理)实现Get(), Do(), GetConstant(), Validate()的功能扩展。一个应用对应一个的Cblp项目。")]),t._v(" "),s("li",[t._v("OeStdServiceComponent项目(外嵌标准服务组件)通常是通用共享的组件。实现Get(), Do()的功能扩展; 为多个应用共用。")]),t._v(" "),s("li",[t._v("启动项目和Cblp项目以及外嵌标准服务项目项目都需要引用Ligg.Ewa.Interface项目。启动项目和Cblp项目之间， 启动项目和OeStdServiceComponent项目之间没有依赖关系，通过Ioc来调用。")]),t._v(" "),s("li",[t._v("Cblp和OeStdServiceComponent项目的目标框架可以是.net Framework、.net Standand或.net Core。\n详见"),s("a",{attrs:{href:"#%E9%9B%86%E6%88%90%E5%BC%80%E5%8F%91"}},[t._v("集成开发")]),t._v("部分及示例。\n"),s("br")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"开发环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[this._v("#")]),this._v(" 开发环境")])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("project")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("p",[this._v(".NET Framework 4.7.2"),n("br"),this._v("\n.NET Standard 2.0"),n("br"),this._v("\n.NET Core 3.1")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("ul",[n("li",[this._v("Visual Studio")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("blockquote",[n("p",[this._v("Microsoft Visual Studio 2019"),n("br"),this._v("\nVersion 16.9.2"),n("br")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"运行目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行目录"}},[this._v("#")]),this._v(" 运行目录")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Root目录，常量表达式: %rootDir%")]),t._v("\n├── Conf                                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置目录, 常量表达式: %cfgDir%")]),t._v("\n│   │── Apps                                         \n│   │   │── App-1                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# App配置目录, 常量表达式: %appCfgDir%")]),t._v("\n│   │   │   │── Shared                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# %appSharedDir%  ")]),t._v("\n│   │   │   └── UIs                          \n│   │   │       │── Console                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# App Console UI 配置目录, 常量表达式: %appUiDir%           ")]),t._v("\n│   │   │       │── │── Scenarios           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 常量表达式: %snrsDir%")]),t._v("\n│   │   │       │── │── │──.Start         \n│   │   │       │── │── │──│──Logon   \n│   │   │       │   │   │  └──SoftwareCover           \n│   │   │       │── │── │── Scenario-1      \n│   │   │       │── │── │── Scenario-2      \n│   │   │       │── │── └── Scenario-n          \n│   │   │       │── Winform                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# App Winform UI 配置目录, 常量表达式: %appUiDir%          ")]),t._v("\n│   │   │       │── │── functions           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 常量表达式: %funcsDir%")]),t._v("\n│   │   │       │── │── │──function-1        \n│   │   │       │   │   │  │──Menus         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Menu的起始位置")]),t._v("\n│   │   │       │   │   │  └──Tray          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Tray的起始位置")]),t._v("\n│   │   │       │── │── │──function-2       \n│   │   │       │── │── └──function-n       \n│   │   │       │── │── views               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 常量表达式: %viewsDir%")]),t._v("\n│   │   │       │── │── │──view-1           \n│   │   │       │   │   │  └──Tray          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Tray的起始位置")]),t._v("\n│   │   │       │── │── │──view-2           \n│   │   │       │── │── └──view-n           \n│   │   │       │── └── zones               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 常量表达式: %zonesDir%")]),t._v("\n│   │   │       │── │── │──.Start         \n│   │   │       │── │── │──│──Logon   \n│   │   │       │   │   │  └──SoftwareCover          \n│   │   │       │── │── │──zone-1           \n│   │   │       │   │   │  └──Tray          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Tray的起始位置")]),t._v("\n│   │   │       │── │── │──zone-2           \n│   │   │       │── └── └──zone-n           \n│   │   │       │── ApplicationAnnexes.*    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应用的名称、描述、备注多语言配置文件")]),t._v("\n│   │   │       │── SharedAnnexes.*         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 共用的多语言配置文件")]),t._v("\n│   │   │       └── ApplicationSetting.*    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应用配置文件")]),t._v("\n│   │   │── App-2                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同上")]),t._v("\n│   │   └── App-n                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同上")]),t._v("\n│   │── Languages                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 多语言配置目录")]),t._v("\n│   │  │── Images                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 多语言图标配置目录")]),t._v("\n│   │  └── Languages.*                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 多语言配置文件")]),t._v("\n│   │── Global                              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局配置目录，常量表达式: %glbCfgDir%")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   │   │── Shared                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#常量表达式: %glbSharedDir%  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   │   └── UIs                              \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   │       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("── Console                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 常量表达式: %glbUiDir%, ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   │       └── Winform                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 常量表达式: %glbUiDir%, ")]),t._v("\n│   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("—— OeServiceComponents.*               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OeServiceComponents配置文件")]),t._v("\n│   └── GlobalSetting.*                     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局配置文件")]),t._v("\n├── Data                                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据目录，常量表达式: %dataDir%")]),t._v("\n│   │── Apps                                      \n│   │   │── App-1                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# App数据目录，常量表达式: %appDataDir%")]),t._v("\n│   │   │── App-2                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同上")]),t._v("\n│   │   └── App-n                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同上")]),t._v("\n│   └── Global                             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局数据目录，常量表达式: %glbDataDir%")]),t._v("\n├── Ini                                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以把启动程序的ini文件放在此处，让根目录比较整洁")]),t._v("\n├── Lib                                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Lib目录，常量: %libDir%; 下放第3方的程序包- ")]),t._v("\n├   │                                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -例如嵌入式Python    ")]),t._v("\n│   │── Apps                                      \n│   │   │── App-1                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# App Lib 目录，常量表达式: %appLibDir%")]),t._v("\n│   │   │── App-2                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同上")]),t._v("\n│   │   └── App-n                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同上")]),t._v("\n│   └── Global                             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局Lib 目录，常量表达式: %glbLibDir%")]),t._v("\n├── Program                                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本框架相关的程序文件")]),t._v("\n│   │── Boot.exe                           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 引导程序, debug阶段使用            ")]),t._v("\n│   │── Boot-cpp.exe                       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 引导程序, release阶段使用                 ")]),t._v("\n│   │── Cblps                                       \n│   │   │── App-1                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下放应用的Cblp编译出来程序文件")]),t._v("\n│   │   │── App-2                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下放应用的Cblp编译出来程序文件")]),t._v("\n│   │   └── App-n                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下放应用的Cblp编译出来程序文件")]),t._v("\n│── │── Main                               "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下放启动程序项目编译出来程序文件")]),t._v("\n│   │   │── netcoreapp3.1                           \n│   │   │   │── ConsoleApp.exe             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 控制台执行文件, 启动程序")]),t._v("\n│   │   │   │── debug.ini                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 调试时的启动参数文件")]),t._v("\n│   │   │   └── WinformApp.exe             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Winform执行文件, 启动程序")]),t._v("\n│   │   └── netfxapp4.72                           \n│   │   │   │── ConsoleApp.exe             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 控制台执行文件, 启动程序")]),t._v("\n│   │   │   │── debug.ini                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 调试时的启动参数文件")]),t._v("\n│   │   │   └── WinformApp.exe             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Winform执行文件, 启动程序")]),t._v("\n│── └── OeStdServiceComponents             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下放'外嵌标准服务'项目编译出来程序文件")]),t._v("\n│       │── OeStdServiceComponent-1               \n│       │── OeStdServiceComponent-2               \n│       └── OeStdServiceComponent-n       \n│── Boot-1.exe                             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 具体的引导程序")]),t._v("\n│── Boot-1.ini                             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 具体的引导程序同名的的ini文件，包含启动参数-")]),t._v("\n│                                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -也可放到@rootDir\\ini 目录下")]),t._v("\n│── Boot-2.exe                                    \n│── Boot-2.ini                                   \n│── Boot-n.exe                                    \n└── Boot-n.ini                                    \n\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"程序运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#程序运行"}},[this._v("#")]),this._v(" 程序运行")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"控制台程序运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#控制台程序运行"}},[this._v("#")]),this._v(" 控制台程序运行")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("每个Application可以有多个Console的应用窗口, 每个应用窗口就是一个Scenario, 比如IT运维工具箱(OrpTk)有2个Scenario: RunShell、RunPython; OrpTk的控制台应用最少有2个Boot.exe(根据不同的初始化参数, 一个Scenario可能有多个引导程序)。每个Boot.exe对应一个同名的.ini文件。.ini文件的args分3部分, 第1部分是Application级别的参数, 中间以"),n("a",{attrs:{href:""}},[this._v("参数分隔符")]),this._v("相隔; 第2部分是Scenario级别的参数, 中间以"),n("a",{attrs:{href:""}},[this._v("参数分隔符")]),this._v("相隔; 第3部分是起始语言参数; 前后部分之间以空格相隔。")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[s("p",[t._v("起始语言的参数: Culture|LangugageCode"),s("br"),t._v(" "),s("strong",[t._v("例如")]),t._v(":"),s("br"),t._v("\n--"),s("strong",[t._v("en-US:en")]),t._v(" Culture: US, 英文"),s("br"),t._v("\n--"),s("strong",[t._v("zh-CN:szh")]),t._v(" Culture: 中国, 简体中文"),s("br"),t._v("\n--"),s("strong",[t._v("zh-CN:czh")]),t._v(" Culture: 中国, 繁体中文"),s("br"),t._v("\n--"),s("strong",[t._v("zh-CN:en")]),t._v(" Culture: 中国, 英文"),s("br")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("备注")]),t._v(" "),s("p",[t._v("在配置文件ApplicationSetting.* 也设置了起始语言, 优先级此处为高, 详见 "),s("a",{attrs:{href:""}},[t._v("教程-Winform-多语言支持")]),t._v(", "),s("a",{attrs:{href:""}},[t._v("教程-Console-多语言支持")])])])]),t._v(" "),s("li",[s("p",[t._v("Application级别的参数: appCode^startPassword"),s("br"),t._v(" "),s("strong",[t._v("说明")]),t._v(":"),s("br"),t._v("\n--"),s("strong",[t._v("appCode")]),t._v(": Application的编码, 程序运行以此为关联。"),s("br"),t._v("\n--"),s("strong",[t._v("startPassword")]),t._v(": Application的起始密码, 如果在ApplicationSetting.*配置文件里设置了需要起始密码, 如果启动参数里带密码文本, 系统则进行隐式验证, 否则会弹出对话框, 进行显式验证。详见"),s("a",{attrs:{href:""}},[t._v("教程-Winform:起始密码示例")]),t._v(", "),s("a",{attrs:{href:""}},[t._v("教程-Console:起始密码示例")]),s("br")])]),t._v(" "),s("li",[s("p",[t._v("Scenario级别的参数: scenarioLocation^formTitle^initParams"),s("br"),t._v(" "),s("strong",[t._v("说明")]),t._v(":"),s("br"),t._v("\n--"),s("strong",[t._v("scenarioLocation")]),t._v(": 起始ScenarioLocation的位置, 只支持相对路径(第一个''可以省略), 父路径是"),s("a",{attrs:{href:""}},[t._v("常量")]),t._v("%appScenariosDir%。"),s("br"),t._v("\n--"),s("strong",[t._v("formTitle")]),t._v(": 控制台窗口的Text, 在UI的配置文件里也会设置formTitle, 如果此处为empty, 以UI的配置文件的为准。"),s("br"),t._v("\n--"),s("strong",[t._v("initParams")]),t._v(": 初始化参数, "),s("a",{attrs:{href:""}},[t._v("Larray")]),t._v("格式。"),s("br"),t._v(" "),s("br"),t._v(" "),s("strong",[s("a",{attrs:{href:""}},[t._v("以下是2个示例")])]),t._v("(1个Scenario对应2个Boot.exe): "),s("br")]),t._v(" "),s("ul",[s("li",[t._v("通过RunPython实现一个加法"),s("br"),t._v("\n修改引导程序Boot.exe为OrpTk-Console-PythonAdd.exe, 相应的.ini文件OrpTk-Console-PythonAdd.ini内容如下")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("setting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("netFxApp4.72"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ConsoleApp.exe\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OrpTk "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Basic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("RunPython^it-is-run-python-example1^%AppData%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("py"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("calc-add.py,1,2\n")])])]),s("ul",[s("li",[t._v("同理, 通过RunPython实现一个减法"),s("br"),t._v("\n修改引导程序Boot.exe为OrpTk-Console-PythonMinus.exe, 相应的.ini文件OrpTk-Console-PythonMinus.ini如下")])])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("setting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("netFxApp4.72"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ConsoleApp.exe\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OrpTk Basic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("RunPython^it-is-run-python-example1^%AppData%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("py"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("calc-minus.py,2,1 zh-CN:szh\n")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("p",[s("strong",[t._v("示例说明")]),t._v(": "),s("br"),t._v("\n--"),s("strong",[t._v("参数分隔符")]),t._v(": '^' "),s("br"),t._v("\n--"),s("strong",[t._v("appCode")]),t._v(": OrpTk"),s("br"),t._v("\n--"),s("strong",[t._v("无startPassword")]),s("br"),t._v("\n--"),s("strong",[t._v("scenarioLocation")]),t._v(": \\Conf\\Apps\\OrpTk\\UI\\Console\\Basic\\RunPython\\ "),s("br"),t._v("\n--"),s("strong",[t._v("formTitle")]),t._v(": it-is-run-python-example1"),s("br"),t._v("\n--"),s("strong",[t._v("initParams")]),t._v(": '\\Data\\Apps\\OrpTk\\py\\calc-add.py','1','2'"),s("br"),t._v("\n--"),s("strong",[t._v("起始语言")]),t._v(": 中国-简体中文")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("运行过程")]),this._v(": 系统运行引导程序, 然后运行启动程序Program\\Main\\netFxApp4.72\\ConsoleApp.exe, 通过scenarioLocation找到Scenario RunPython的UI"),n("a",{attrs:{href:""}},[this._v("配置文件")]),this._v(", 传入参数, 运行并输出。"),n("br")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"winform程序运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#winform程序运行"}},[this._v("#")]),this._v(" Winform程序运行")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("每个Application可以有多个Winform的启动Form, 比如OrpTk有4个 "),n("a",{attrs:{href:""}},[this._v("不同类型的Form")]),this._v("分别是: 管理员主界面(Function Form)、用户主界面(Function Form)、巡检工具Svi界面(Single View Interface, Svi Form)、备份作业工具Szi界面(Single Zone Interface, SziForm), OrpTk的Winform应用最少有4个Boot.exe(根据不同的初始化参数, 一个Form可能有多个引导程序)。每个Boot.exe对应一个同名的.ini文件。.ini文件的args分3部分, 第1部分是Application级别的参数, 中间以"),n("a",{attrs:{href:""}},[this._v("参数分隔符")]),this._v("相隔; 第2部分是Form级别的参数, 中间以"),n("a",{attrs:{href:""}},[this._v("参数分隔符")]),this._v("相隔; 第3部分是起始语言参数; 前后部分之间以空格相隔。")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[s("p",[t._v("起始语言的参数: 同上, 详见 "),s("a",{attrs:{href:""}},[t._v("教程-Winform-多语言支持")]),s("br")])]),t._v(" "),s("li",[s("p",[t._v("Application级别的参数: appCode^startPassword, 与控制台类似, 详见 "),s("a",{attrs:{href:""}},[t._v("教程-Winform:起始密码示例")]),s("br")])]),t._v(" "),s("li",[s("p",[t._v("Form级别的参数: 根据Form类型有所不同"),s("br"),t._v(" "),s("strong",[t._v("说明")]),t._v(":"),s("br"),t._v("\n--"),s("strong",[t._v("formTitle")]),t._v(": Form窗口的Text, 在UI的配置文件里也会设置formTitle, 如果此处为empty, 以UI的配置文件的为准。"),s("br"),t._v("\n--"),s("strong",[t._v("initParams")]),t._v(": 初始化参数, "),s("a",{attrs:{href:""}},[t._v("Larray")]),t._v("格式。"),s("br"),t._v(" "),s("br"),t._v("\n--"),s("strong",[t._v("Szi/ Svi的Form级别的参数")]),t._v(": formType^FormLocation^formTitle^initParams"),s("br"),t._v("\n----formType: Szi 或Svi, 如果为Empty则为Szi"),s("br"),t._v("\n----FormLocation起始Form的位置, 只支持相对路径(第一个''可以省略), Szi的父路径是"),s("a",{attrs:{href:""}},[t._v("常量")]),t._v(": %appZonesDir%, Svi的父路径是"),s("a",{attrs:{href:""}},[t._v("常量")]),t._v(": %appViewsDir%,。"),s("br")]),t._v(" "),s("p",[t._v("--"),s("strong",[t._v("Mvi的Form级别的参数")]),t._v(": formType^FormLocation|StartView^initParams"),s("br"),t._v("\n----formType: Mvi"),s("br"),t._v("\n----FormLocation: FormLocation是单层的, 只支持相对路径(第一个''可以省略), 父路径是"),s("a",{attrs:{href:""}},[t._v("常量")]),t._v(": %appFunctionsDir%,  详见"),s("a",{attrs:{href:""}},[t._v("教程-Winform-Mvi")]),s("br"),t._v("\n----StartView: 起始View, 每个FuctionForm的UI配置里有设置StartView, 如果此处为empty, 以UI的配置文件的为准。"),s("br"),t._v(" "),s("br"),t._v(" "),s("strong",[t._v("以下是4个示例")]),t._v(": "),s("br")]),t._v(" "),s("ul",[s("li",[t._v("OrpTk管理员主界面"),s("br"),t._v("\n修改引导程序Boot.exe为OrpTk-Winform-Func-Admin.exe, 相应的.ini文件OrpTk-Winform-Func-Admin.ini内容如下")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("setting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("netFxApp4.72"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WinformApp.exe\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OrpTk Mvi^Admin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("OrpMgr\n")])])]),s("p",[s("strong",[t._v("说明")]),t._v(": 没有startPassword, 没有formTitle, 没有初始化参数; Form类型是Mvi, Admin是管理员主界面的FormLocation, OrpMgr表示首先进入运维管理View(缺省是SysMgr-系统管理View)。")]),t._v(" "),s("ul",[s("li",[t._v("OrpTk巡检工具Svi界面"),s("br"),t._v("\n修改引导程序Boot.exe为OrpTk-Winform-Svi-Insp.exe, 相应的.ini文件OrpTk-Winform-Svi-Insp.ini内容如下")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("setting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("netFxApp4.72"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WinformApp.exe\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OrpTk Svi^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Insp^Inspection-Server^server\n")])])]),s("p",[s("strong",[t._v("说明")]),t._v(": 没有startPassword; Form类型是Svi; \\Admin\\Insp是Form的相对路径; formTitle是Inspection-Server; server是初始化参数, 表示Server的巡检, 配置的UI会根据传入参数把Server的巡检界面显示在最前面。")]),t._v(" "),s("ul",[s("li",[t._v("OrpTk备份作业工具Szi界面-备份Db"),s("br"),t._v("\n修改引导程序Boot.exe为OrpTk-Winform-Szi-BakWorkerForDb.exe, 相应的.ini文件OrpTk-Winform-Szi-BakWorkerForDb.ini内容如下")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("setting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("netFxApp4.72"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WinformApp.exe\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OrpTk Szi^Common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BakWorker^db-backup^db,2days,1:00\n")])])]),s("p",[s("strong",[t._v("说明")]),t._v(": 该工具通过配置已集成备份服务器上所有Db和备份磁盘柜相关文件功能。 Form类型是Szi; \\Common\\BakWorker是Form的相对路径; formTitle: db-backup, Form的Text显示db-backup, 与文件备份有个区分; db,2days,1:00是初始化参数, 表示备份Db,每隔2天, 每天1:00开始作业。")]),t._v(" "),s("ul",[s("li",[t._v("OrpTk备份作业工具Szi界面-备份文件"),s("br"),t._v("\n修改引导程序Boot.exe为OrpTk-Winform-Szi-BakWorkerForFile.exe, 相应的.ini文件OrpTk-Winform-Szi-BakWorkerForFile.ini内容如下")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("setting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("netFxApp4.72"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WinformApp.exe\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OrpTk Szi^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("BakWorker^file-backup^files,3days,2:00\n")])])]),s("p",[s("strong",[t._v("说明")]),t._v(": 该工具通过配置已集成备份服务器上所有Db和备份磁盘柜相关文件功能;  Form类型是Szi, \\Common\\BakWorker是Form的相对路径; formTitle: file-backup, Form的Text显示file-backup,与db备份有个区分; file,3days,2:00是初始化参数, 表示备份file,每隔3天, 每天2:00开始作业。")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("运行过程")]),this._v(": 系统运行引导程序, 然后运行启动程序Program\\Main\\netFxApp4.72\\WinformApp.exe, 通过参数找到Form的UI"),n("a",{attrs:{href:""}},[this._v("配置文件")]),this._v(", 传入参数, 显示Form。见"),n("a",{attrs:{href:""}},[this._v("教程示例")]),n("br")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[this._v("#")]),this._v(" 注意事项")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" executableDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n Path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetDirectoryName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("System"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Windows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Forms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExecutablePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n _startUpDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetParent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("executableDir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n _startUpDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetParent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_startUpDir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n _startUpDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetParent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_startUpDir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n Directory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetCurrentDirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_startUpDir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"编译和调试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译和调试"}},[this._v("#")]),this._v(" 编译和调试")])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("Cblp、OeStdServiceComponent项目都需要引用Ligg.Ewa.Interface项目。启动项目和Ligg.Ewa.Cblp项目之间， 启动项目和OeStdServiceComponent项目之间没有依赖关系，通过Ioc来调用; Vs2019是可以进去Debug的。详见 "),n("a",{attrs:{href:""}},[this._v("博客园: C# 通过Ioc和反射的实现依赖注入(DI)和面向切面编程(AOP)")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("Cblp、OeStdServiceComponent项目的标准服务都必须继承Ligg.Ewa.Interface的接口OeStdService, Cblp的Service不用继承。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("Cblp和OeStdServiceComponent项目的目标框架可以是.net Framework、.net Standand或.net Core。")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("在启动文件WinformApp.exe、ConsoleApp.exe并列, 有一个debug.ini文件, 可以方便调试不同的UI配置和初始化参数, 这样不用频繁更改Visual Studio的 Command line arguments。 在发行阶段要把此文件删除或者设置debug=false。这个参数会传递给程序, 决定程序的某些功能, 如读取配置文件的格式的顺序。内容示例如下:")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("setting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("debug")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("netFxApp4.72"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("WinformApp.exe\n//args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Demo Mvi^Function20"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("NoAuth zh-CN"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("szh\n//args"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Demo Svi^demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SendLocalEmail2\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("args")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Demo Szi^Demo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ChooseFile\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"集成开发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集成开发"}},[this._v("#")]),this._v(" 集成开发")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[s("p",[t._v("Winform控件的扩展")])]),t._v(" "),s("li",[s("p",[t._v("Cblp、OeStdService组件的开发, 采用提供的\\release\\下的Release版本作为主运行程序即可。")])]),t._v(" "),s("li",[s("p",[t._v('当采用开源版本做集成开发, 请保留"Powered by Liggin2019"标识, 这是本框架唯一的额外版权要求。')])]),t._v(" "),s("li",[s("p",[t._v("当然你也可以魔改本框架, 本框架采用MIT开源协议, 请遵循该协议即可。注意事项如下:")]),t._v(" "),s("ul",[s("li",[t._v("发行版本的try/catch的处理\n"),s("br"),t._v("在\\src\\Ligg.Ewa.WinForm\\Forms\\FunctionForm.cs, \\src\\Ligg.Ewa.Console\\ScenarioForm.cs的如下所示的注释处, 往上删除不必要的try/catch"),s("br"),t._v(" "),s("blockquote",[s("p",[t._v("//--Please optimize all try/catch before Release in front of this point, after full testing!!!//")])])]),t._v(" "),s("li",[t._v("发行版本的错误日志的处理\n"),s("br"),t._v("在\\src\\Ligg.Ewa.WinForm\\Forms\\FunctionForm.cs, \\src\\Ligg.Ewa.Console\\ScenarioForm.cs的如下所示的注释处, 自行添加错误日志"),s("br"),t._v(" "),s("blockquote",[s("p",[t._v("//--write into error log")])])]),t._v(" "),s("li",[t._v("发行版本的事务日志的处理\n"),s("br"),t._v("在\\src\\Ligg.Ewa.WinForm\\Forms\\FunctionForm.cs, \\src\\Ligg.Ewa.Console\\ScenarioForm.cs的如下所示的注释处, 自行添加事务日志"),s("br"),t._v(" "),s("blockquote",[s("p",[t._v("//--write into readTextlog"),s("br"),t._v("\n//--write into transaction log")])])])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),n("ul",[n("li",[this._v("从3.0版本开始Cblp已不支持COM组件")])])])}],!1,null,null,null);n.default=e.exports}}]);