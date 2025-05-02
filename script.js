// 设置日期和问候语
function setDateAndGreeting() {
    var now = new Date();
    var days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // 设置日期
    var dateStr = months[now.getMonth()] + now.getDate() + '. ' + days[now.getDay()];
    document.querySelector('.date').textContent = dateStr;
    
    // 设置问候语和夜间模式
    var hours = now.getHours();
    var greeting = '';
    
    if (hours >= 5 && hours < 11) {
        greeting = '早上好';
    } else if (hours >= 11 && hours < 17) {
        greeting = '下午好';
    } else {
        greeting = '晚上好';
        document.body.className = 'night';
    }
    
    document.querySelector('.greeting').textContent = greeting;
}


// 导航函数
function navigate(url) {
    if (url === 'clean_cache') {
        alert('清理完成');
        return;
    }
    window.location.href = url;
}

// 分享函数
function shareApp() {
    // 检查浏览器是否支持Web Share API
    if (navigator.share) {
        navigator.share({
            title: '趣加应用分享',
            text: '我发现了一个宝藏网站--趣加应用，分享给你：jqyy.store（在浏览器打开）',
            url: 'https://jqyy.store'
        }).catch(err => {
            console.log('分享失败:', err);
            fallbackShare();
        });
    } else {
        fallbackShare();
    }
}

// 不支持Web Share API时的备用分享方案
function fallbackShare() {
    // 这里可以添加复制到剪贴板或其他备用分享方式
    alert('已复制分享内容到剪贴板，请粘贴分享给好友！\n\n我发现了一个宝藏网站--趣加应用，分享给你：jqyy.store（在浏览器打开）');
    
    // 复制到剪贴板
    const textToCopy = '我发现了一个宝藏网站--趣加应用，分享给你：jqyy.store（在浏览器打开）';
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('内容已复制到剪贴板');
    }).catch(err => {
        console.error('无法复制内容:', err);
    });
}

// 初始化
window.onload = function() {
    setDateAndGreeting();
};
    



