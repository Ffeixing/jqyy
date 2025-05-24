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
    const textToCopy = '我发现了一个宝藏网站--趣加应用，分享给你：jqyy.store（在浏览器打开）';

    // 尝试使用 clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('已复制分享内容到剪贴板，请粘贴分享给好友！\n\n' + textToCopy);
        }).catch(err => {
            console.warn('clipboard API 复制失败，尝试备用方案。', err);
            legacyCopy(textToCopy);
        });
    } else {
        // 如果 clipboard API 不存在，使用备用方法
        legacyCopy(textToCopy);
    }
}

// 使用 textarea 的旧式复制方式，兼容性更好
function legacyCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';  // 防止页面滚动影响
    textarea.style.opacity = '0';       // 隐藏元素
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    
    try {
        const success = document.execCommand('copy');
        if (success) {
            alert('已复制分享内容到剪贴板，请粘贴分享给好友！\n\n' + text);
        } else {
            alert('复制失败，请手动复制：\n\n' + text);
        }
    } catch (err) {
        alert('复制失败，请手动复制：\n\n' + text);
        console.error('execCommand 复制失败:', err);
    }

    document.body.removeChild(textarea);
}



// 初始化
window.onload = function() {
    setDateAndGreeting();
};
    



