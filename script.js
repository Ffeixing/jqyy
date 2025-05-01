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

// 点击卡片效果
function createRipple(event) {
    var card = this;
    var rect = card.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    
    var ripple = document.createElement('span');
    ripple.className = 'card-effect';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    card.appendChild(ripple);
    
    setTimeout(function() {
        ripple.remove();
    }, 600);
}

// 导航函数
function navigate(url) {
    window.location.href = url;
}
// 在navigate函数中添加对清理缓存的处理
function navigate(url) {
    if (url === 'clean_cache') {
        alert('清理完成');
        return;
    }
    window.location.href = url;
}
function navigate(url) {
    if (url === 'share') {
if (navigator.share) {
                navigator.share({
                    text: '我发现了个超级好用的资源网站,分享给你--趣加应用http://jqyy.store',
                    
                });
return;
            }

    }
    window.location.href = url;
}
// 初始化
window.onload = function() {
    setDateAndGreeting();
    
    // 为所有卡片添加点击效果
    var cards = document.querySelectorAll('.big-card, .small-card');
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', createRipple);
    }
};