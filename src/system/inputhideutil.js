/*
作者：神麤詭末
QQ：2682963017
*/
var InputHideUtil = function () {
    importClass(Packages.android.graphics.Rect);
    importClass(Packages.android.view.ViewTreeObserver);
    var mChildOfContent;
    var usableHeightPrevious;
    var frameLayoutParams;
    //为适应华为小米等手机键盘上方出现黑条或不适配
    var contentHeight; //获取setContentView本来view的高度
    var isfirst = true; //只用获取一次
    var scrollViewParams
    var scrollViewMargin = 0
    var ignoreViewParams
    var contentViewMargin = 0

    function InputHideUtil(activity, scrollView, ignoreView) {
        //找到Activity的最外层布局控件，它其实是一个DecorView,它所用的控件就是FrameLayout
        var content = activity.findViewById(android.R.id.content);
        //获取到setContentView放进去的View
        mChildOfContent = content.getChildAt(0);
        if (scrollView) {
            scrollViewParams = scrollView.layoutParams;
            scrollViewMargin = scrollViewParams.bottomMargin;
        }
        if (ignoreView) {
            ignoreViewParams = ignoreView.layoutParams;
        }
        //给Activity的xml布局设置View树监听，当布局有变化，如键盘弹出或收起时，都会回调此监听  
        mChildOfContent.getViewTreeObserver().addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener({
            //软键盘弹起会使GlobalLayout发生变化
            onGlobalLayout() {
                if (isfirst) {
                    contentHeight = mChildOfContent.getHeight(); //兼容华为等机型
                    isfirst = false;
                }
                //当前布局发生变化时，对Activity的xml布局进行重绘
                possiblyResizeChildOfContent(scrollView, ignoreView);
            }
        }));
        //获取到Activity的xml布局的放置参数
        frameLayoutParams = mChildOfContent.getLayoutParams();
        contentViewMargin = frameLayoutParams.bottomMargin;

    }
    
    InputHideUtil.assistActivity = function(activity, scrollView, ignoreView) {
        new InputHideUtil(activity, scrollView, ignoreView);
    }
    // 获取界面可用高度，如果软键盘弹起后，进行控件处理
    function possiblyResizeChildOfContent(scrollView, ignoreView) {
        //获取当前界面可用高度，键盘弹起后，当前界面可用布局会减少键盘的高度
        var usableHeightNow = computeUsableHeight();
        //如果当前可用高度和原始值不一样
        if (usableHeightNow != usableHeightPrevious) {
            //获取Activity中xml中布局在当前界面显示的高度
            var usableHeightSansKeyboard = mChildOfContent.getRootView().getHeight();
            //Activity中xml布局的高度-当前可用高度
            var heightDifference = usableHeightSansKeyboard - usableHeightNow;

            if (scrollView) {
                //高度差大于屏幕1/4时，说明键盘弹出
                if (heightDifference > (usableHeightSansKeyboard / 4)) {
                    // 键盘弹出了，scrollView的xml底部边缘距离应当...自己看~
                    var height = ignoreView?ignoreView.height:0;
                    var topMargin = ignoreViewParams?ignoreViewParams.topMargin:0;
                    var bottomMargin = ignoreViewParams?ignoreViewParams.bottomMargin:0;
                    scrollViewParams.bottomMargin =
                        heightDifference - height - topMargin - bottomMargin

                } else {

                    scrollViewParams.bottomMargin = scrollViewMargin
                }
                //重绘scrollView布局
                scrollView.requestLayout()
            } else {
                //高度差大于屏幕1/4时，说明键盘弹出
                if (heightDifference > (usableHeightSansKeyboard / 4)) {
                    // 键盘弹出了，Activity的xml布局底部边缘距离应当加上键盘高度
                    frameLayoutParams.bottomMargin = contentViewMargin + heightDifference
                } else {
                    frameLayoutParams.bottomMargin = contentViewMargin;
                }

                //重绘Activity的xml布局
                mChildOfContent.requestLayout();
            }
            usableHeightPrevious = usableHeightNow;
        }
    }

    function computeUsableHeight() {
        var r = Rect()
        mChildOfContent.getWindowVisibleDisplayFrame(r)
        return r.bottom
    }
    return InputHideUtil;
}();

module.exports = InputHideUtil;