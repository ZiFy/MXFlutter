//VSCode Run support=====================================================================================
//为便于在JS IDE如VSCode，webStorm里脱离APP环境执行JS，以快速验证JS代码正确性
//用g_isNativeEnvironment检查是否在App环境，
//如果不在App环境，Native接口重定向到JS同名函数打印调用
//jsFlutterRequire 转调Node运行环境中的require
//如果不能运行，核对下js_ide_node_run_support.js文件中jsFlutterLibDir 相对路径
//新建文件拷贝这个头
let g_isNativeEnvironment = typeof JSAPI_require != "undefined" ? true : false;
function jsFlutterRequire(file) {
  if (!g_isNativeEnvironment) {
    console.log("[JS]-MXJSFlutter:: jsFlutterRequire", ...arguments);
    let { calcJSFrameworkFilePath } = require("./js_ide_node_run_support.js");
    return require(calcJSFrameworkFilePath(file));
  }
    return mxRequire(file);
}
//VSCode Run support end ================================================================================

//replay_page.js 正式开始，😝

let {
    runApp,
    MXJSFlutterApp,
    MXJSWidget,
    MaterialApp,
    Scaffold,
    AppBar,
    Container,
    Row,
    FlatButton,
    Text,
    Expanded,
    TextStyle,
    Colors,
    BoxDecoration,
    BorderSide,
    NetworkImage,
    BorderRadius,
    Radius,
    TextField,
    Icon,
    IconData,
    BorderDirectional,
    EdgeInsets,
    Column,
    FontWeight,
    SingleChildScrollView,
    InputDecoration,
    MainAxisAlignment,
    Alignment,
    CircleAvatar,
    ButtonTextTheme,
    ListTile,
    IconButton,
    RaisedButton,
    BottomAppBar,
    InputBorder,
} = jsFlutterRequire("js_flutter_ui.js");

let {GlobalConfig} = jsFlutterRequire("./zhihu/global_config.js");
// let {QuestionPage} = jsFlutterRequire("./zhihu/home/question_page.js");

class Common {
    static searchInput(context) {
        return new Container({
            child: new Row({
                children: [
                    new Container({
                        child: FlatButton.icon({
                            onPressed: function(){
                                this.navigatorPop();
                            },
                            icon: new Icon(new IconData(0xe5c4, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor}),
                            label: new Text(""),
                        }),
                        width: 60.0,
                    }),
                    new Expanded({
                        child: new TextField({
                            decoration: InputDecoration.collapsed({
                                hintText: "搜索比乎内容",
                                border: InputBorder.none,
                                hintStyle: new TextStyle({color: GlobalConfig.fontColor})
                            }),
                        }),
                    }),
                    new Container({
                        child: new IconButton({icon: new Icon(new IconData(0xe80d, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor}), 
                            onPressed: function(){}, 
                            padding: EdgeInsets.all(0.0),
                            iconSize: 18.0
                        }),
                    }),
                    new Container({
                        child: new IconButton({icon: new Icon(new IconData(0xe896, {fontFamily: 'MaterialIcons'}), {color: GlobalConfig.fontColor}), 
                            onPressed: function(){}, 
                            padding: EdgeInsets.all(0.0), 
                            iconSize: 18.0
                        }),
                    }),
                ],
            }),
            decoration: new BoxDecoration({
                borderRadius: BorderRadius.all(Radius.circular(4.0)),
                color: GlobalConfig.searchBackgroundColor,
            }),
            height: 36.0,
        });
    }
}

class ReplyPage extends MXJSWidget {
    constructor(){
        super("ReplyPage");
    }

    build(context){
        let widget = new MaterialApp({
            // theme: GlobalConfig.themeData,
            home: new Scaffold({
                appBar: new AppBar({
                    title: Common.searchInput(context),
                }),
                body: new SingleChildScrollView({
                    child: new Column({
                        children: [
                            new Container({
                                child: new FlatButton({
                                    onPressed: function(){
                                      this.navigatorPush(new QuestionPage);
                                    },
                                    child: new Container({
                                        child: new Text("你认为《三体》中最牛的文明是？", {
                                            style: new TextStyle({
                                                fontWeight: FontWeight.bold, 
                                                fontSize: 18.0, 
                                                height: 1.3, 
                                                color: Colors.black(),
                                            })
                                        }),
                                        padding: EdgeInsets.all(16.0),
                                        alignment: Alignment.topLeft,
                                    }),
                                    color: GlobalConfig.cardBackgroundColor,
                                }),
                                decoration: new BoxDecoration({
                                    border: new BorderDirectional({bottom: new BorderSide({color: Colors.white10()})})
                                }),
                            }),
                            new Container({
                                child: new Row({
                                    children: [
                                        new Expanded({
                                            flex: 1,
                                            child: new Container({
                                                child: FlatButton.icon({
                                                    onPressed: function(){},
                                                    icon: new Icon(new IconData(0xe3ae, {fontFamily: 'MaterialIcons'})),
                                                    label: new Text("写回答"),
                                                    textTheme: ButtonTextTheme.accent,
                                                }),
                                                decoration: new BoxDecoration({
                                                    border: new BorderDirectional({end: new BorderSide({color: Colors.white10()})}),
                                                }),
                                            }),
                                        }),
                                        new Expanded({
                                            flex: 1,
                                            child: new Container({
                                                child: new FlatButton({
                                                    onPressed: function(){
                                                        this.navigatorPush(new QuestionPage);
                                                    },
                                                    child: new Text("查看全部10000个回答 > "),
                                                }),
                                            }),
                                        })
                                    ],
                                }),
                                decoration: new BoxDecoration({
                                  color: GlobalConfig.cardBackgroundColor,
                                }),
                                margin: EdgeInsets.only({bottom: 10.0}),
                            }),
                            new Container({
                                child: new ListTile({
                                    leading: new CircleAvatar({
                                        backgroundImage: new NetworkImage("https://pic3.zhimg.com/v2-cd467bb9bb31d0384f065cf0bd677930_xl.jpg"),
                                        radius: 20.0
                                    }),
                                    title: new Text("Flutter"),
                                    subtitle: new Text("人生如逆旅，我亦是行人"),
                                    trailing: RaisedButton.icon({
                                        onPressed: function(){}, 
                                        icon: new Icon(new IconData(0xe145, {fontFamily: 'MaterialIcons'}), {color: Colors.black()}), 
                                        label: new Text("关注", {style: new TextStyle({color: Colors.black()})}), 
                                        color: Colors.blue(),
                                    }),
                                }),
                                decoration: new BoxDecoration({
                                    color: GlobalConfig.cardBackgroundColor,
                                    border: new BorderDirectional({bottom: new BorderSide({color: Colors.black()})})
                                }),
                            }),
                            new Container({
                                child: new Text(
                                    "回归运动\n\n三体定义的黑暗森林的宇宙格局，就是文明相互攻击和毁灭，越高级的，越明白藏好自己做好清理，绝不做探测对方文明的愚蠢行为。\n\n然而归还运动跳出了这个黑暗森林法则，不玩黑暗森林打击，不但探测别的宇宙文明，而且还深入了解对方文明，而且是全宇宙的所有文明。\n\n这是一种多么自信的科技实力呀，才能跳出黑暗森林的生存法则呀",{
                                    style: new TextStyle({
                                        height: 1.4, 
                                        fontSize: 16.0,
                                        color: GlobalConfig.fontColor
                                    }), 
                                    textAlign: TextAlign.start,
                                }),
                                margin: EdgeInsets.all(16.0),
                            }),
                        ],
                    }),
                }),
                bottomNavigationBar: new BottomAppBar({
                    child: new Container({
                        height: 50.0,
                        child: new Row({
                            children: [
                                new Container({
                                    child: FlatButton.icon({
                                        onPressed: function(){},
                                        label: new Text("赞同 10 K"), 
                                        color: GlobalConfig.searchBackgroundColor, 
                                        icon: new Icon(new IconData(0xe5c7, {fontFamily: 'MaterialIcons'}))
                                    }),
                                    margin: EdgeInsets.only({left: 16.0}),
                                    height: 30.0,
                                }),
                                new Container({
                                    child: new IconButton({
                                        onPressed: function(){}, 
                                        icon: new Icon(new IconData(0xe5c5, {fontFamily: 'MaterialIcons'})),
                                        padding: EdgeInsets.all(0.0)
                                    }),
                                    margin: EdgeInsets.only({left: 8.0}),
                                    height: 30.0,
                                    decoration: new BoxDecoration({
                                      borderRadius: BorderRadius.all(Radius.circular(2.0)),
                                      color: GlobalConfig.searchBackgroundColor,
                                    }),
                                }),
                                new Expanded({
                                    child: new Row({
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: [
                                            new IconButton({
                                                onPressed: function(){},
                                                icon: new Container({
                                                    child: new Column({
                                                        children: [
                                                        new Icon(new IconData(0xe87d, {fontFamily: 'MaterialIcons'}), {
                                                            size: 18.0,
                                                            color: GlobalConfig.fontColor,
                                                        }),
                                                        new Text("感谢", {
                                                            style: new TextStyle({
                                                                fontSize: 10.0, 
                                                                color: GlobalConfig.fontColor
                                                            }),
                                                        })
                                                        ],
                                                    }),
                                                    margin: EdgeInsets.only(),
                                                    height: 30.0,
                                                })
                                            }),
                                            new IconButton({
                                                onPressed: function(){},
                                                icon: new Container({
                                                    child: new Column({
                                                        children: [
                                                            new Icon(new IconData(0xe838, {fontFamily: 'MaterialIcons'}), {
                                                                size: 18.0, 
                                                                color: GlobalConfig.fontColor,
                                                            }),
                                                            new Text("收藏", {
                                                                style: new TextStyle({
                                                                    fontSize: 10.0,
                                                                    color: GlobalConfig.fontColor
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    margin: EdgeInsets.only(),
                                                    height: 30.0,
                                                })
                                            }),
                                            new IconButton({
                                                onPressed: function(){},
                                                icon: new Container({
                                                    child: new Column({
                                                        children: [
                                                            new Icon(new IconData(0xe253, {fontFamily: 'MaterialIcons'}), {
                                                                size: 18.0, 
                                                                color: GlobalConfig.fontColor,
                                                            }),
                                                            new Text("345", {
                                                                style: new TextStyle({
                                                                    fontSize: 10.0,
                                                                    color: GlobalConfig.fontColor
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    margin: EdgeInsets.only(),
                                                    height: 30.0,
                                                })
                                            }),
                                        ],
                                    })
                                })
                            ]
                        }),
                        color: GlobalConfig.cardBackgroundColor,
                    }),
                }),
            }),
        })
        return widget;
    }
}

module.exports = { ReplyPage, Common };


//测试代码，修改Widget name
//在VSCode 直接运行测试JS代码正确性,在app无任何效果
IDERunFileTestWidget(ReplyPage);

//拷贝一份到目标文件
function IDERunFileTestWidget(TestPage) {
    if (g_isNativeEnvironment) {
        return;
    }
    class AppTest extends MXJSFlutterApp {
        constructor() {
            super("app_test", "initRouteName");
        }

        //子类重写
        //flutter->js 用于路由跳转
        //return MXJSWidget subclass
        createJSWidgetWithName(pageName) {
            let w = new TestPage;
            return w;
        }
    }

    let app = new AppTest;
    runApp(app);

    app.runWithPageName();
};