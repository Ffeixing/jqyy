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
function fallbackShare() {
    const textToCopy = '我发现了一个宝藏网站--趣加应用，分享给你：jqyy.store（在浏览器打开）';

    // 创建一个隐藏的 textarea 元素
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            alert('已复制分享内容到剪贴板，请粘贴分享给好友！\n\n' + textToCopy);
        } else {
            alert('复制失败，请手动复制：\n\n' + textToCopy);
        }
    } catch (err) {
        alert('复制失败，请手动复制：\n\n' + textToCopy);
        console.error('复制失败:', err);
    }

    // 清理 textarea
    document.body.removeChild(textarea);
}

// 初始化
window.onload = function() {
    setDateAndGreeting();
};
    



