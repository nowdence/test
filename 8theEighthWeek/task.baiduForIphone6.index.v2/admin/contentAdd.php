<!DOCTYPE html>
<html>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<head>
    <title>后台管理首页</title>
    <!-- Bootstrap -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
    <link href="css/jquery.easy-pie-chart.css" rel="stylesheet" media="screen">
    <link href="assets/styles.css" rel="stylesheet" media="screen">
</head>

<body>
    <div class="container">
        <div class="navbar navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </a>
                    <a class="brand" href="index.html">管理面板</a>
                    <div class="nav-collapse collapse">
                        <ul class="nav pull-right">
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-user"></i> 超级用户<i class="caret"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="#">资料</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a tabindex="-1" href="login.html">登陆</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="nav">
                            <li class="active">
                                <a href="#">主要功能</a>
                            </li>
                            <li class="dropdown">
                                <a href="#" data-toggle="dropdown" class="dropdown-toggle">设置 <b class="caret"></b>

                                </a>
                                <ul class="dropdown-menu" id="menu1">
                                    <li>
                                        <a href="#">工具 <i class="icon-arrow-right"></i>

                                        </a>
                                        <ul class="dropdown-menu sub-menu">
                                            <li>
                                                <a href="#">报告</a>
                                            </li>
                                            <li>
                                                <a href="#">日志</a>
                                            </li>
                                            <li>
                                                <a href="#">错误</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">SEO优化</a>
                                    </li>
                                    <li>
                                        <a href="#">链接</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a href="#">链接1</a>
                                    </li>
                                    <li>
                                        <a href="#">链接2</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">内容 <i class="caret"></i>

                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">News</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">Custom Pages</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">Calendar</a>
                                    </li>
                                    <li class="divider"></li>
                                    <li>
                                        <a tabindex="-1" href="#">FAQ</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">用户<i class="caret"></i>

                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a tabindex="-1" href="#">用户列表</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">搜索</a>
                                    </li>
                                    <li>
                                        <a tabindex="-1" href="#">许可</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!--/.nav-collapse -->
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row-fluid">
                <div class="span3" id="sidebar">
                    <ul class="nav nav-list bs-docs-sidenav nav-collapse collapse">
                        <li class="active">
                            <a href="index.php"><i class="icon-chevron-right"></i>新闻列表</a>
                        </li>
                        <li>
                            <a href="contentAdd.php"><i class="icon-chevron-right"></i>增加新闻</a>
                        </li>
                        
                    </ul>
                </div>
                              
                <div class="span9" id="contentAdd">
                    <form class="form-horizontal">
                        <fieldset>
                            <legend>添加新闻</legend>
                            <div class="control-group">
                                <label class="control-label" for="newstitle">新闻标题 </label>
                                <div class="controls">
                                    <input type="text" class="span6" id="newstitle" name="newstitle">
                                    <p class="help-block">请输入新闻标题!</p>
                                </div>
                            </div>
                            <div class="control-group">
                                <label class="control-label" for="newscontent">新闻内容</label>
                                <div class="controls">
                                    <textarea class="input-xlarge textarea" placeholder="新闻内容 ..." name="newscontent" id="newscontent"></textarea>
                                </div>
                            </div>
                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary" id="btn">提交</button>
                                <button type="reset" class="btn">重置</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            <hr>
            <footer>
                <p>&copy; Thank you!</p>
            </footer>
        </div>
    </div>
    <!--/.fluid-container-->
    <script src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
</body>

</html>
