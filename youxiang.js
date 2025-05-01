// 应用数据
var appData = [
    {
        name: "抖音大屏版9.9",
        desc: "Android5.0+ | 小爱音箱提取版本适配大屏安卓或其他安卓设备也有较好的是配",
        icon: "https://static.codemao.cn/coco/player/unstable/BJ62ZCkZA.image/png?hash=FjJcioGE3BmpuEJN-7UMtdtydrHo",
        url: "https://app.qujiayingyong.online/app.html?icon=https%3A%2F%2Fstatic.codemao.cn%2Fcoco%2Fplayer%2Funstable%2FBJ62ZCkZA.image%2Fpng%3Fhash%3DFjJcioGE3BmpuEJN-7UMtdtydrHo&name=抖音大屏版&link=https%3A%2F%2Fwwb.lanzouo.com%2FiumGU1vhlpef&pwd=babb&图片一=https%3A%2F%2Fstatic.codemao.cn%2Fcoco%2Fplayer%2Funstable%2FBkVT-0yZC.image%2Fpng%3Fhash%3DFpPypn-Dyuiy2ByWcYz4WHw0EKd4&图片二=https%3A%2F%2Fstatic.codemao.cn%2Fcoco%2Fplayer%2Funstable%2FBkupbCk-R.image%2Fpng%3Fhash%3DFpPypn-Dyuiy2ByWcYz4WHw0EKd4&简介=本应用为抖音大屏版，可扫码登录，支持安卓4版本所有旧设备，也可覆盖其他版本%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20外置分享密码：babb%20%20%20%20%20%20%20%20%20%20%20%20%20该应用为用户上传，仅供用户测试使用，请在下载后24小时内删除，若出现任何未知问题，我们将不承担任何责任"
    },
    {
        name: "输入法字典 1.0",
        desc: "iOS2.2+ | 2.91 MB",
        icon: "https://via.placeholder.com/40",
        url: "#"
    },
    {
        name: "Notebooks 1.0.3",
        desc: "iOS3.2+ | 2.51 MB",
        icon: "https://via.placeholder.com/40",
        url: "#"
    },
    {
        name: "ChatGPT iOS6 - 18 1.0.6",
        desc: "iOS6.0+ | 760.0 KB",
        icon: "https://via.placeholder.com/40",
        url: "#"
    },
    {
        name: "Get Gravel! 1.0.2",
        desc: "iOS4.0+ | 52.53 MB",
        icon: "https://via.placeholder.com/40",
        url: "#"
    },
    {
        name: "RD Client 微软远程桌面 8.0",
        desc: "iOS6.0+ | 6.34 MB",
        icon: "https://via.placeholder.com/40",
        url: "#"
    }
];

// 初始化应用列表
function initAppList() {
    var appList = document.getElementById('appList');
    appList.innerHTML = '';
    
    appData.forEach(function(app) {
        var appItem = document.createElement('div');
        appItem.className = 'app-item';
        appItem.setAttribute('data-name', app.name.toLowerCase());
        appItem.onclick = function() {
            navigate(app.url);
        };
        
        appItem.innerHTML = `
            <div class="app-icon">
                <img src="${app.icon}" alt="${app.name}">
            </div>
            <div class="app-info">
                <div class="app-name">${app.name}</div>
                <div class="app-desc">${app.desc}</div>
            </div>
            <div class="app-get">
                <div class="get-btn">获取</div>
            </div>
        `;
        
        appList.appendChild(appItem);
    });
}

// 切换描述展开/折叠
function toggleDescription() {
    var descText = document.querySelector('.description-text');
    var toggleBtn = document.querySelector('.toggle-btn');
    
    if (descText.classList.contains('expanded')) {
        descText.classList.remove('expanded');
        toggleBtn.textContent = '展开';
    } else {
        descText.classList.add('expanded');
        toggleBtn.textContent = '收起';
    }
}

// 切换搜索框显示
var isSearching = false;
function toggleSearch() {
    var searchBox = document.querySelector('.search-box');
    var searchBtn = document.querySelector('.search-btn');
    
    if (isSearching) {
        clearSearch();
    } else {
        searchBox.style.display = 'table';
        searchBtn.textContent = '清除';
        isSearching = true;
    }
}

// 清除搜索
function clearSearch() {
    var searchBox = document.querySelector('.search-box');
    var searchBtn = document.querySelector('.search-btn');
    var searchInput = document.getElementById('searchInput');
    
    searchBox.style.display = 'none';
    searchBtn.textContent = '搜索';
    searchInput.value = '';
    filterApps('');
    isSearching = false;
}

// 过滤应用
function filterApps(keyword) {
    var appItems = document.querySelectorAll('.app-item');
    keyword = keyword.toLowerCase();
    
    appItems.forEach(function(item) {
        var appName = item.getAttribute('data-name');
        if (appName.indexOf(keyword) !== -1) {
            item.style.display = 'table';
        } else {
            item.style.display = 'none';
        }
    });
}

// 初始化页面
window.onload = function() {
    setDateAndGreeting();
    initAppList();
    
    // 搜索输入事件
    document.getElementById('searchInput').addEventListener('input', function(e) {
        filterApps(e.target.value);
    });
};