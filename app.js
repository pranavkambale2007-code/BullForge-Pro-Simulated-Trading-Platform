// --- State & Config ---
const INITIAL_BALANCE = 100000;

const MARKET_ASSETS = {
    crypto: {
        'BTC': { base: 68500, vol: 0.001, binanceSymbol: 'BTCUSDT' },
        'ETH': { base: 3750, vol: 0.0015, binanceSymbol: 'ETHUSDT' },
        'SOL': { base: 165, vol: 0.002, binanceSymbol: 'SOLUSDT' },
        'XRP': { base: 0.52, vol: 0.0025, binanceSymbol: 'XRPUSDT' },
        'ADA': { base: 0.45, vol: 0.003, binanceSymbol: 'ADAUSDT' },
        'BNB': { base: 600, vol: 0.001, binanceSymbol: 'BNBUSDT' },
        'DOGE': { base: 0.15, vol: 0.004, binanceSymbol: 'DOGEUSDT' },
        'LINK': { base: 15, vol: 0.002, binanceSymbol: 'LINKUSDT' },
        'AVAX': { base: 35, vol: 0.002, binanceSymbol: 'AVAXUSDT' },
        'MATIC': { base: 0.70, vol: 0.003, binanceSymbol: 'MATICUSDT' },
        'DOT': { base: 7.20, vol: 0.002, binanceSymbol: 'DOTUSDT' },
        'LTC': { base: 82.50, vol: 0.0018, binanceSymbol: 'LTCUSDT' },
        'SHIB': { base: 0.000025, vol: 0.005, binanceSymbol: 'SHIBUSDT' },
        'TRX': { base: 0.12, vol: 0.001, binanceSymbol: 'TRXUSDT' },
        'UNI': { base: 8.50, vol: 0.0022, binanceSymbol: 'UNIUSDT' },
        'NEAR': { base: 6.40, vol: 0.0025, binanceSymbol: 'NEARUSDT' },
        'ICP': { base: 12.20, vol: 0.0024, binanceSymbol: 'ICPUSDT' },
        'ATOM': { base: 8.40, vol: 0.0021, binanceSymbol: 'ATOMUSDT' },
        'APT': { base: 9.10, vol: 0.0026, binanceSymbol: 'APTUSDT' },
        'FIL': { base: 5.80, vol: 0.0023, binanceSymbol: 'FILUSDT' }
    },
    forex: {
        'EUR/USD': { base: 1.0850, vol: 0.0001, binanceSymbol: 'EURUSDT' },
        'GBP/USD': { base: 1.2500, vol: 0.00015, binanceSymbol: 'GBPUSDT' },
        'USD/JPY': { base: 155.50, vol: 0.0002 },
        'USD/CHF': { base: 0.9050, vol: 0.0001 },
        'AUD/USD': { base: 0.6650, vol: 0.00015, binanceSymbol: 'AUDUSDT' },
        'NZD/USD': { base: 0.6120, vol: 0.0002 },
        'USD/CAD': { base: 1.3650, vol: 0.00015 },
        'EUR/GBP': { base: 0.8550, vol: 0.0001 },
        'EUR/JPY': { base: 168.20, vol: 0.0002 },
        'GBP/JPY': { base: 198.50, vol: 0.00025 },
        'EUR/CHF': { base: 0.9820, vol: 0.0001 },
        'AUD/JPY': { base: 102.80, vol: 0.0002 },
        'EUR/CAD': { base: 1.4810, vol: 0.00015 },
        'GBP/CAD': { base: 1.7050, vol: 0.00015 },
        'AUD/CAD': { base: 0.9080, vol: 0.00015 },
        'CHF/JPY': { base: 171.50, vol: 0.0002 },
        'NZD/JPY': { base: 95.20, vol: 0.0002 },
        'EUR/AUD': { base: 1.6320, vol: 0.00015 },
        'GBP/AUD': { base: 1.8820, vol: 0.00015 },
        'CAD/JPY': { base: 113.80, vol: 0.0002 }
    },
    metals: {
        'XAU': { base: 2400, vol: 0.0002, binanceSymbol: 'PAXGUSDT' },
        'XAU/USD': { base: 2400, vol: 0.0002, binanceSymbol: 'PAXGUSDT' },
        'XAG': { base: 30, vol: 0.0004 },
        'XPT': { base: 1050, vol: 0.0005 },
        'XPD': { base: 980, vol: 0.0005 },
        'COPPER': { base: 4.60, vol: 0.0008 },
        'ALUM': { base: 2600, vol: 0.0003 },
        'NICKEL': { base: 19.50, vol: 0.0006 }
    },
    commodities: {
        'OIL': { base: 80, vol: 0.0008 },
        'BRENT': { base: 84, vol: 0.0008 },
        'NGAS': { base: 2.8, vol: 0.0012 },
        'CORN': { base: 450, vol: 0.001 },
        'SOYB': { base: 1200, vol: 0.001 },
        'WHEAT': { base: 650, vol: 0.0012 },
        'SUGAR': { base: 18.50, vol: 0.0015 },
        'COFFEE': { base: 220, vol: 0.0013 },
        'COTTON': { base: 75, vol: 0.0014 },
        'GASO': { base: 2.45, vol: 0.001 },
        'HEAT': { base: 2.35, vol: 0.001 },
        'COCOA': { base: 9500, vol: 0.002 },
        'OATS': { base: 350, vol: 0.0015 },
        'RICE': { base: 17.80, vol: 0.0012 },
        'LUMB': { base: 520, vol: 0.002 },
        'LIVE': { base: 1.80, vol: 0.0008 },
        'FEED': { base: 2.50, vol: 0.0008 },
        'LEAN': { base: 0.95, vol: 0.001 },
        'RUBB': { base: 1.60, vol: 0.0012 },
        'COAL': { base: 110, vol: 0.0015 }
    },
    stocks: {
        'AAPL': { base: 190.00, vol: 0.0015 }
    }
};

const AppState = {
    currentUser: null,
    balance: INITIAL_BALANCE,
    positions: [], 
    tradeHistory: [],
    market: 'crypto',
    asset: 'BTC',
    tradeType: 'spot', 
    action: 'buy', 
    orderType: 'market',
    pendingOrders: [],
    priceData: {}, 
    currentPrice: 0,
    autoTrade: false,
    timeframe: '1m',
    drawings: [],
    drawingMode: 'cursor',
    
    // Advanced gamified tools state
    copiedBot: null,
    completedQuizzes: [],
    certificates: [],
    profileSettings: { fullName: '', email: '', bio: '' },
    customStrategies: [],
    unlockedAchievements: [],
    lessonProgress: { candlestick: false, structure: false, options_basics: false, risk_mgmt: false, indicators: false, leverage: false },
    lastDashboardStateKey: null
};

// Add backing variables for sandbox and tournament mode
AppState._sandboxBalance = INITIAL_BALANCE;
AppState._sandboxPositions = [];
AppState._sandboxPendingOrders = [];
AppState.isTournamentMode = false;
AppState.tournamentBalance = 100000;
AppState.tournamentPositions = [];
AppState.tournamentPendingOrders = [];

Object.defineProperty(AppState, 'balance', {
    get() {
        return AppState.isTournamentMode ? AppState.tournamentBalance : AppState._sandboxBalance;
    },
    set(val) {
        if (AppState.isTournamentMode) {
            AppState.tournamentBalance = val;
        } else {
            AppState._sandboxBalance = val;
        }
    },
    configurable: true,
    enumerable: true
});

Object.defineProperty(AppState, 'positions', {
    get() {
        return AppState.isTournamentMode ? AppState.tournamentPositions : AppState._sandboxPositions;
    },
    set(val) {
        if (AppState.isTournamentMode) {
            AppState.tournamentPositions = val;
        } else {
            AppState._sandboxPositions = val;
        }
    },
    configurable: true,
    enumerable: true
});

Object.defineProperty(AppState, 'pendingOrders', {
    get() {
        return AppState.isTournamentMode ? AppState.tournamentPendingOrders : AppState._sandboxPendingOrders;
    },
    set(val) {
        if (AppState.isTournamentMode) {
            AppState.tournamentPendingOrders = val;
        } else {
            AppState._sandboxPendingOrders = val;
        }
    },
    configurable: true,
    enumerable: true
});


// --- DOM Elements ---
const DOM = {
    get balance() { return document.getElementById('nav-balance'); },
    get equity() { return document.getElementById('nav-equity'); },
    get pnl() { return document.getElementById('nav-pnl'); },
    get marketTabs() { return document.querySelectorAll('.market-tab'); },
    get assetSelect() { return document.getElementById('asset-selector'); },
    get currentPrice() { return document.getElementById('current-price'); },
    get tfTabs() { return document.querySelectorAll('.tf-tab'); },
    get indicatorsBtn() { return document.getElementById('indicators-btn'); },
    get indicatorsDropdown() { return document.getElementById('indicators-dropdown'); },
    get tradeTypeTabs() { return document.querySelectorAll('.type-tab'); },
    get actionTabs() { return document.querySelectorAll('.action-tab'); },
    get formFuture() { return document.querySelector('.future-only'); },
    get formOption() { return document.querySelector('.option-only'); },
    get leverageSlider() { return document.getElementById('leverage-slider'); },
    get leverageVal() { return document.getElementById('leverage-val'); },
    get optType() { return document.getElementById('option-type'); },
    get optStrike() { return document.getElementById('option-strike'); },
    get orderQty() { return document.getElementById('order-qty'); },
    get orderCost() { return document.getElementById('order-cost'); },
    get btnExecute() { return document.getElementById('btn-execute'); },
    get posBody() { return document.getElementById('positions-body'); },
    get posTabs() { return document.querySelectorAll('.pos-tab'); },
    get openPositionsView() { return document.getElementById('open-positions'); },
    get openOrdersView() { return document.getElementById('open-orders'); },
    get tradeHistoryView() { return document.getElementById('trade-history'); },
    get orderTypeSelect() { return document.getElementById('order-type-select'); },
    get limitPriceBlock() { return document.getElementById('limit-price-block'); },
    get orderLimitPrice() { return document.getElementById('order-limit-price'); },
    get stopPriceBlock() { return document.getElementById('stop-price-block'); },
    get orderStopPrice() { return document.getElementById('order-stop-price'); },
    get trailingDeltaBlock() { return document.getElementById('trailing-delta-block'); },
    get orderTrailingDelta() { return document.getElementById('order-trailing-delta'); },
    get ordersBody() { return document.getElementById('orders-body'); },
    get pnlFilterBtns() { return document.querySelectorAll('.pnl-filter-btn'); },
    get pnlDateFrom() { return document.getElementById('pnl-date-from'); },
    get pnlDateTo() { return document.getElementById('pnl-date-to'); },
    get pnlCustomBtn() { return document.getElementById('pnl-custom-btn'); },
    get pnlTotalVal() { return document.getElementById('pnl-total-val'); },
    get pnlTradesVal() { return document.getElementById('pnl-trades-val'); },
    get pnlWinrateVal() { return document.getElementById('pnl-winrate-val'); },
    get historyBody() { return document.getElementById('history-body'); },
    get aiStatusAsset() { return document.getElementById('ai-analyzing-asset'); },
    get aiToggle() { return document.getElementById('ai-auto-trade'); },
    get aiSignalsList() { return document.getElementById('ai-signals-list'); },
    get chartTypeSelector() { return document.getElementById('chart-type-selector'); },
    get orderTp() { return document.getElementById('order-tp'); },
    get orderSl() { return document.getElementById('order-sl'); },
    get dmManualPrice() { return document.getElementById('dm-manual-price'); },
    get btnAddManualLine() { return document.getElementById('btn-add-manual-line'); },
    get btnClearDrawings() { return document.getElementById('btn-clear-drawings'); },
    get btnUndoDrawing() { return document.getElementById('btn-undo-drawing'); },
    get dmDrawingsList() { return document.getElementById('dm-drawings-list'); },
    get btnFinishPattern() { return document.getElementById('btn-finish-pattern'); },
    get landingPage() { return document.getElementById('landing-page'); },
    get appWorkspace() { return document.getElementById('app-workspace'); },
    get tabLogin() { return document.getElementById('tab-login'); },
    get tabSignup() { return document.getElementById('tab-signup'); },
    get loginWrapper() { return document.getElementById('login-form-wrapper'); },
    get signupWrapper() { return document.getElementById('signup-form-wrapper'); },
    get loginForm() { return document.getElementById('login-form'); },
    get signupForm() { return document.getElementById('signup-form'); },
    get loginUsername() { return document.getElementById('login-username'); },
    get loginPassword() { return document.getElementById('login-password'); },
    get loginError() { return document.getElementById('login-error'); },
    get signupUsername() { return document.getElementById('signup-username'); },
    get signupPassword() { return document.getElementById('signup-password'); },
    get signupConfirm() { return document.getElementById('signup-confirm'); },
    get signupBalance() { return document.getElementById('signup-balance'); },
    get signupError() { return document.getElementById('signup-error'); },
    get btnDemoLogin() { return document.getElementById('btn-demo-login'); },
    get btnLogout() { return document.getElementById('btn-logout'); },
    get userDisplay() { return document.getElementById('user-display'); },
    get qtyPctBtns() { return document.querySelectorAll('.qty-pct-btn'); },
    get leftTabs() { return document.querySelectorAll('.left-tab'); },
    get aiChatBubble() { return document.getElementById('ai-chat-bubble'); },
    get aiChatPanel() { return document.getElementById('ai-chat-panel'); },
    get aiChatMessages() { return document.getElementById('ai-chat-messages'); },
    get aiChatInput() { return document.getElementById('ai-chat-input'); },
    get aiChatSendBtn() { return document.getElementById('ai-chat-send-btn'); }
};

// --- Event Listeners ---
function bindEvents() {
    if (DOM.marketTabs) {
        DOM.marketTabs.forEach(t => t.addEventListener('click', (e) => {
            DOM.marketTabs.forEach(tb => tb.classList.remove('active'));
            e.target.classList.add('active');
            AppState.market = e.target.dataset.market;
            loadAssetOptions();
        }));
    }
    
    if (DOM.assetSelect) {
        DOM.assetSelect.addEventListener('change', (e) => {
            AppState.asset = e.target.value;
            switchAsset();
        });
    }
    
    if (DOM.tfTabs) {
        DOM.tfTabs.forEach(t => t.addEventListener('click', (e) => {
            DOM.tfTabs.forEach(tb => tb.classList.remove('active'));
            e.target.classList.add('active');
            AppState.timeframe = e.target.dataset.tf;
            switchAsset();
        }));
    }
    
    if (DOM.tradeTypeTabs) {
        DOM.tradeTypeTabs.forEach(t => t.addEventListener('click', (e) => {
            DOM.tradeTypeTabs.forEach(tb => tb.classList.remove('active'));
            e.target.classList.add('active');
            AppState.tradeType = e.target.dataset.type;
            
            if (DOM.formFuture) DOM.formFuture.classList.add('hidden');
            if (DOM.formOption) DOM.formOption.classList.add('hidden');
            
            // Hide or show normal order fields / copy-trade panels
            const orderInputs = document.querySelectorAll('.order-inputs-block');
            const copyForm = document.querySelector('.copy-only');
            
            if (copyForm) copyForm.classList.add('hidden');
            orderInputs.forEach(el => el.classList.remove('hidden'));
            
            if(AppState.tradeType === 'future') {
                if (DOM.formFuture) DOM.formFuture.classList.remove('hidden');
            } else if(AppState.tradeType === 'option') {
                if (DOM.formOption) DOM.formOption.classList.remove('hidden');
            } else if(AppState.tradeType === 'copy') {
                if (copyForm) copyForm.classList.remove('hidden');
                orderInputs.forEach(el => el.classList.add('hidden'));
            }
            updateOrderFieldsVisibility();
            updateUI();
        }));
    }
    
    if (DOM.orderTypeSelect) {
        DOM.orderTypeSelect.addEventListener('change', (e) => {
            AppState.orderType = e.target.value;
            updateOrderFieldsVisibility();
            updateUI();
        });
    }
    
    if (DOM.actionTabs) {
        DOM.actionTabs.forEach(t => t.addEventListener('click', (e) => {
            DOM.actionTabs.forEach(tb => tb.classList.remove('active'));
            e.target.classList.add('active');
            AppState.action = e.target.dataset.action;
            
            if (DOM.btnExecute) {
                if(AppState.action === 'buy') {
                    DOM.btnExecute.className = 'btn-execute buy-btn';
                    DOM.btnExecute.textContent = 'Place Buy Order';
                } else {
                    DOM.btnExecute.className = 'btn-execute sell-btn';
                    DOM.btnExecute.textContent = 'Place Sell Order';
                }
            }
        }));
    }
    
    if (DOM.leverageSlider) {
        DOM.leverageSlider.addEventListener('input', (e) => {
            if (DOM.leverageVal) DOM.leverageVal.textContent = `${e.target.value}x`;
            updateUI();
        });
    }
    if (DOM.orderQty) {
        DOM.orderQty.addEventListener('input', () => {
            // Clear active highlight on quick pct buttons on manual entry
            if (DOM.qtyPctBtns) {
                DOM.qtyPctBtns.forEach(btn => btn.classList.remove('active'));
            }
            updateUI();
        });
    }
    if (DOM.optStrike) {
        DOM.optStrike.addEventListener('input', updateUI);
    }
    
    // Quantity percentage shortcuts event listeners
    if (DOM.qtyPctBtns) {
        DOM.qtyPctBtns.forEach(btn => btn.addEventListener('click', (e) => {
            DOM.qtyPctBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const pct = parseFloat(e.target.dataset.pct);
            applyQuantityPercentage(pct);
        }));
    }
    
    // Left Panel Tab Switching event listeners
    if (DOM.leftTabs) {
        DOM.leftTabs.forEach(t => t.addEventListener('click', (e) => {
            const targetTab = t.dataset.leftTab;
            switchLeftTab(targetTab);
        }));
    }
    
    if (DOM.btnExecute) {
        DOM.btnExecute.addEventListener('click', executeTrade);
    }
    if (DOM.aiToggle) {
        DOM.aiToggle.addEventListener('change', (e) => AppState.autoTrade = e.target.checked);
    }
    
    if (DOM.indicatorsBtn) {
        DOM.indicatorsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (DOM.indicatorsDropdown) DOM.indicatorsDropdown.classList.toggle('hidden');
        });
    }
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.indicators-menu')) {
            if (DOM.indicatorsDropdown) DOM.indicatorsDropdown.classList.add('hidden');
        }
    });
    
    if (DOM.posTabs) {
        DOM.posTabs.forEach(t => t.addEventListener('click', (e) => {
            const target = e.target.dataset.target;
            if (!target) return;
            
            DOM.posTabs.forEach(tb => {
                if (tb.dataset.target) tb.classList.remove('active');
            });
            e.target.classList.add('active');
            
            // Hide all bottom panel views
            if (DOM.openPositionsView) DOM.openPositionsView.classList.add('hidden');
            if (DOM.openOrdersView) DOM.openOrdersView.classList.add('hidden');
            if (DOM.tradeHistoryView) DOM.tradeHistoryView.classList.add('hidden');
            
            const targetView = document.getElementById(target);
            if (targetView) targetView.classList.remove('hidden');
            
            if(target === 'trade-history') updatePNLDashboard('today');
        }));
    }
    
    if (DOM.pnlFilterBtns) {
        DOM.pnlFilterBtns.forEach(btn => btn.addEventListener('click', (e) => {
            DOM.pnlFilterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            updatePNLDashboard(e.target.dataset.period);
        }));
    }
    
    if (DOM.pnlCustomBtn) {
        DOM.pnlCustomBtn.addEventListener('click', () => {
            if (DOM.pnlFilterBtns) DOM.pnlFilterBtns.forEach(b => b.classList.remove('active'));
            updatePNLDashboard('custom');
        });
    }
    
    // Chart Type Selector
    if (DOM.chartTypeSelector) {
        DOM.chartTypeSelector.addEventListener('change', (e) => {
            recreateMainSeries(e.target.value);
        });
    }
    
    // Drawing tool buttons
    document.querySelectorAll('.dm-tool-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tool = e.currentTarget.dataset.tool;
            setDrawingMode(tool);
        });
    });
    
    // Finish pattern button
    if (DOM.btnFinishPattern) {
        DOM.btnFinishPattern.addEventListener('click', finishPattern);
    }
    
    // Manual add horizontal line
    if (DOM.btnAddManualLine) {
        DOM.btnAddManualLine.addEventListener('click', () => {
            if (DOM.dmManualPrice) {
                const p = parseFloat(DOM.dmManualPrice.value);
                if (p && p > 0) {
                    addDrawing({
                        type: 'horizontal',
                        asset: AppState.asset,
                        points: [{ price: p }],
                        text: `Horizontal Line @ $${p.toFixed(2)}`,
                        color: '#2962ff'
                    });
                    DOM.dmManualPrice.value = '';
                }
            }
        });
    }
    
    // Clear all drawings
    if (DOM.btnClearDrawings) {
        DOM.btnClearDrawings.addEventListener('click', clearAllDrawings);
    }
    
    // Undo / Remove Last Drawing
    if (DOM.btnUndoDrawing) {
        DOM.btnUndoDrawing.addEventListener('click', () => {
            const active = AppState.drawings.filter(d => d.asset === AppState.asset);
            if (active.length > 0) {
                const last = active[active.length - 1];
                deleteDrawing(last.id);
                showToast("Removed last drawing object");
            } else {
                showToast("No drawings to remove");
            }
        });
    }
    
    // --- Authentication Event Listeners ---
    if (DOM.tabLogin) {
        DOM.tabLogin.addEventListener('click', () => switchAuthTab('login'));
    }
    if (DOM.tabSignup) {
        DOM.tabSignup.addEventListener('click', () => switchAuthTab('signup'));
    }
    if (DOM.loginForm) {
        DOM.loginForm.addEventListener('submit', handleLoginSubmit);
    }
    if (DOM.signupForm) {
        DOM.signupForm.addEventListener('submit', handleSignupSubmit);
    }
    if (DOM.btnDemoLogin) {
        DOM.btnDemoLogin.addEventListener('click', loginAsDemo);
    }
    if (DOM.btnLogout) {
        DOM.btnLogout.addEventListener('click', handleLogout);
    }
}
document.addEventListener('DOMContentLoaded', bindEvents);

// --- Chart Initialization ---
const chartContainer = document.getElementById('chart-container');
let chart, candleSeries;
const activeIndicators = new Set();
const indicatorSeries = {};

function updateIndicators(data) {
    activeIndicators.forEach(id => {
        const cfg = INDICATORS_CONFIG.find(c => c.id === id);
        if (cfg && indicatorSeries[id]) {
            indicatorSeries[id].setData(cfg.calc(data));
        }
    });
}

try {
    if (window.LightweightCharts) {
        chart = LightweightCharts.createChart(chartContainer, {
            width: chartContainer.clientWidth || 600,
            height: chartContainer.clientHeight || 400,
            layout: { background: { type: 'solid', color: 'transparent' }, textColor: '#d1d4dc', fontFamily: 'Inter' },
            grid: { vertLines: { color: 'rgba(42, 46, 57, 0.5)' }, horzLines: { color: 'rgba(42, 46, 57, 0.5)' } },
            crosshair: { mode: 0 },
            timeScale: { timeVisible: true, secondsVisible: true }
        });
        candleSeries = chart.addCandlestickSeries({
            upColor: '#00c853', downColor: '#ff3d00', borderVisible: false, wickUpColor: '#00c853', wickDownColor: '#ff3d00'
        });

        chart.subscribeClick(handleChartClick);

        chart.priceScale('oscillator').applyOptions({
            scaleMargins: { top: 0.8, bottom: 0 },
        });

        INDICATORS_CONFIG.forEach(cfg => {
            let options = { color: cfg.color, lineWidth: 2, title: cfg.name, visible: false, crosshairMarkerVisible: false };
            if (cfg.lineStyle) options.lineStyle = cfg.lineStyle;
            if (cfg.priceScaleId) {
                options.priceScaleId = cfg.priceScaleId;
                options.crosshairMarkerVisible = true;
            }
            indicatorSeries[cfg.id] = chart.addLineSeries(options);
            
            const lbl = document.createElement('label');
            lbl.innerHTML = `<input type="checkbox" data-id="${cfg.id}"> ${cfg.name}`;
            lbl.querySelector('input').addEventListener('change', (e) => {
                const isVisible = e.target.checked;
                indicatorSeries[cfg.id].applyOptions({ visible: isVisible });
                if (isVisible) {
                    activeIndicators.add(cfg.id);
                    const data = AppState.priceData[AppState.asset];
                    if (data && data.length > 0) indicatorSeries[cfg.id].setData(cfg.calc(data));
                } else {
                    activeIndicators.delete(cfg.id);
                }
            });
            DOM.indicatorsDropdown.appendChild(lbl);
        });

        new ResizeObserver(entries => {
            if (entries.length === 0 || entries[0].target !== chartContainer) { return; }
            const newRect = entries[0].contentRect;
            if (newRect.width > 0 && newRect.height > 0) {
                chart.applyOptions({ height: newRect.height, width: newRect.width });
            }
        }).observe(chartContainer);
    } else {
        chartContainer.innerHTML = '<div style="padding: 20px; color: #ff3d00;">Error: LightweightCharts failed to load.</div>';
    }
} catch (e) {
    console.error("Chart Init Error:", e);
}

// --- Data Generation & Fetching ---
function getTfSeconds(tf) {
    if(tf==='1m') return 60;
    if(tf==='3m') return 180;
    if(tf==='5m') return 300;
    if(tf==='15m') return 900;
    if(tf==='30m') return 1800;
    if(tf==='1h') return 3600;
    if(tf==='4h') return 14400;
    if(tf==='1d') return 86400;
    if(tf==='1w') return 604800;
    return 60;
}

async function fetchChartData(sym, mkt, tf) {
    const assetConfig = MARKET_ASSETS[mkt][sym];
    let fetchedRealData = false;
    let data = [];
    
    if (assetConfig.binanceSymbol || mkt === 'crypto') {
        const fetchSym = assetConfig.binanceSymbol || `${sym}USDT`;
        try {
            const res = await fetch(`https://api.binance.com/api/v3/klines?symbol=${fetchSym}&interval=${tf}&limit=1000`);
            if (res.ok) {
                const klines = await res.json();
                data = klines.map(x => ({
                    time: Math.floor(x[0] / 1000),
                    open: parseFloat(x[1]),
                    high: parseFloat(x[2]),
                    low: parseFloat(x[3]),
                    close: parseFloat(x[4])
                }));
                if (data.length > 0) {
                    MARKET_ASSETS[mkt][sym].base = data[data.length-1].close;
                    fetchedRealData = true;
                }
            }
        } catch(e) { console.error("API Error", e); }
    }
    
    if (fetchedRealData) return data;
    
    // Fallback Mock Data using Fractional Brownian Motion / Trend simulation
    let targetClose = MARKET_ASSETS[mkt][sym].base;
    let tSec = getTfSeconds(tf);
    let tEnd = Math.floor(Date.now()/1000);
    
    let current = targetClose;
    let trend = 0;
    for(let i=0; i<1000; i++) {
        let vol = current * MARKET_ASSETS[mkt][sym].vol * Math.sqrt(tSec / 60);
        
        // Momentum/Trend factor
        if(Math.random() < 0.1) trend = (Math.random() - 0.5) * vol * 0.5; // Change trend occasionally
        
        let change = (Math.random() - 0.5) * vol * 2 + trend;
        let open = current - change;
        
        data.unshift({ 
            time: tEnd - (i * tSec), 
            open: open, 
            high: Math.max(open, current) + (Math.random()*vol*0.2), 
            low: Math.min(open, current) - (Math.random()*vol*0.2), 
            close: current 
        });
        current = open;
    }
    return data;
}

async function initData() {
    initTheme(); // Initialize theme on boot
    // Generate initial flat mock data for ALL assets so positions have a baseline price
    for (let mkt of Object.keys(MARKET_ASSETS)) {
        for (let sym of Object.keys(MARKET_ASSETS[mkt])) {
            let close = MARKET_ASSETS[mkt][sym].base;
            AppState.priceData[sym] = [{time: Math.floor(Date.now()/1000), open:close, high:close, low:close, close}];
        }
    }
    
    // Sync live crypto prices before rendering the first chart
    try {
        const res = await fetch('https://api.binance.com/api/v3/ticker/price');
        if (res.ok) {
            const prices = await res.json();
            prices.forEach(p => {
                const sym = p.symbol.replace('USDT', '');
                if(MARKET_ASSETS.crypto[sym]) {
                    MARKET_ASSETS.crypto[sym].base = parseFloat(p.price);
                }
            });
        }
    } catch(e) { console.error("Ticker fetch error", e); }
    
    setInterval(tickLoop, 1000); // For mock updates
    setInterval(pollCryptoPrices, 2000); // Polling for exact live crypto prices

    // Auth Startup Check
    const activeUser = getActiveSession();
    let loginSuccess = false;
    if (activeUser) {
        loginSuccess = enterTradingWorkspace(activeUser);
    }
    if (!loginSuccess) {
        setActiveSession(null);
        document.body.classList.add('landing-mode');
        if (DOM.landingPage) DOM.landingPage.classList.remove('hidden-screen');
        DOM.appWorkspace.classList.add('hidden-screen');
    }
}

async function pollCryptoPrices() {
    if (AppState.isReplayMode) return;
    try {
        const res = await fetch('https://api.binance.com/api/v3/ticker/price');
        if(!res.ok) return;
        const prices = await res.json();
        const priceMap = new Map();
        prices.forEach(p => priceMap.set(p.symbol, parseFloat(p.price)));
        
        let shouldUpdateUI = false;
        
        Object.keys(MARKET_ASSETS).forEach(mkt => {
            Object.keys(MARKET_ASSETS[mkt]).forEach(sym => {
                const assetConfig = MARKET_ASSETS[mkt][sym];
                let fetchSym = null;
                if(mkt === 'crypto') fetchSym = `${sym}USDT`;
                else if (assetConfig.binanceSymbol) fetchSym = assetConfig.binanceSymbol;
                
                if (fetchSym && priceMap.has(fetchSym)) {
                    let livePrice = priceMap.get(fetchSym);
                    if (AppState.newsShockActive && AppState.newsShockTimeLeft > 0 && sym === AppState.asset) {
                        AppState.newsShockOffset = (AppState.newsShockOffset || 0) + AppState.newsShockDirection * AppState.newsShockMagnitude * livePrice;
                        livePrice += AppState.newsShockOffset;
                    }
                    assetConfig.base = livePrice;
                    
                    const data = AppState.priceData[sym];
                    if(data && data.length > 0) {
                        let last = data[data.length-1];
                        let now = Math.floor(Date.now()/1000);
                        let tSec = getTfSeconds(AppState.timeframe);
                        
                        const currentCandleTime = Math.floor(now / tSec) * tSec;
                        if (currentCandleTime > last.time) {
                            const newCandle = {time: currentCandleTime, open: last.close, high: Math.max(last.close, livePrice), low: Math.min(last.close, livePrice), close: livePrice};
                            data.push(newCandle);
                            if(data.length > 1000) data.shift();
                            if (sym === AppState.asset && candleSeries) {
                                try{ 
                                    updateMainSeries(newCandle); 
                                    updateIndicators(data);
                                } catch(e){}
                            }
                        } else {
                            last.close = livePrice;
                            last.high = Math.max(last.high, livePrice);
                            last.low = Math.min(last.low, livePrice);
                            if (sym === AppState.asset && candleSeries) {
                                try{ 
                                    updateMainSeries(last); 
                                    updateIndicators(data);
                                } catch(e){}
                            }
                        }
                    }
                    
                    if (sym === AppState.asset) {
                        AppState.currentPrice = livePrice;
                        shouldUpdateUI = true;
                    }
                }
            });
        });
        
        if(shouldUpdateUI) {
            checkAndTriggerPendingOrders();
            checkAndTriggerTPSL();
            runAIBotAutoCut();
            processAILogic();
            updateUI();
        }
    } catch(e) {}
}

function tickLoop() {
    if (AppState.isReplayMode) return;
    let shouldUpdateUI = false;
    Object.keys(MARKET_ASSETS).forEach(mkt => {
        Object.keys(MARKET_ASSETS[mkt]).forEach(sym => {
            const assetConfig = MARKET_ASSETS[mkt][sym];
            if (mkt === 'crypto' || assetConfig.binanceSymbol) return; 
            
            const data = AppState.priceData[sym];
            if (!data || data.length === 0) return;
            
            let last = data[data.length-1];
            let now = Math.floor(Date.now()/1000);
            let tSec = getTfSeconds(AppState.timeframe);
            
            let vol = assetConfig.vol * Math.sqrt(tSec/60);
            let prevChange = data.length > 1 ? (last.close - data[data.length-2].close) : 0;
            let momentum = prevChange * 0.1;
            let change = (Math.random() - 0.5) * last.close * vol + momentum;
            let newClose = last.close + change;
            
            if (AppState.newsShockActive && AppState.newsShockTimeLeft > 0 && sym === AppState.asset) {
                AppState.newsShockOffset = (AppState.newsShockOffset || 0) + AppState.newsShockDirection * AppState.newsShockMagnitude * newClose;
                newClose += AppState.newsShockOffset;
            }
            
            const currentCandleTime = Math.floor(now / tSec) * tSec;
            if (currentCandleTime > last.time) {
                let newCandle = { time: currentCandleTime, open: last.close, high: Math.max(last.close, newClose), low: Math.min(last.close, newClose), close: newClose };
                data.push(newCandle);
                if(data.length > 1000) data.shift();
                if (sym === AppState.asset && candleSeries) {
                    try{ 
                        updateMainSeries(newCandle); 
                        updateIndicators(data);
                    } catch(e){}
                }
            } else {
                last.close = newClose;
                last.high = Math.max(last.high, newClose);
                last.low = Math.min(last.low, newClose);
                if (sym === AppState.asset && candleSeries) {
                    try{ 
                        updateMainSeries(last); 
                        updateIndicators(data);
                    } catch(e){}
                }
            }
            
            if (sym === AppState.asset) {
                AppState.currentPrice = newClose;
                shouldUpdateUI = true;
            }
        });
    });
    
    if(shouldUpdateUI) {
        checkAndTriggerPendingOrders();
        checkAndTriggerTPSL();
        runAIBotAutoCut();
        processAILogic();
        updateUI();
    }
}

// --- Logic & Updates ---
function loadAssetOptions() {
    DOM.assetSelect.innerHTML = '';
    Object.keys(MARKET_ASSETS[AppState.market]).forEach(sym => {
        const opt = document.createElement('option');
        opt.value = sym; opt.textContent = sym;
        DOM.assetSelect.appendChild(opt);
    });
    AppState.asset = DOM.assetSelect.value;
    updateOrderFieldsVisibility();
    switchAsset();
}

async function switchAsset() {
    DOM.aiStatusAsset.textContent = AppState.asset;
    
    // Fetch specifically for the current asset and timeframe
    const data = await fetchChartData(AppState.asset, AppState.market, AppState.timeframe);
    AppState.priceData[AppState.asset] = data;
    AppState.currentPrice = data[data.length-1].close;

    // Fetch 1d data to get the 1D daily stats (open, high, low)
    try {
        if (AppState.timeframe === '1d') {
            const lastDaily = data[data.length - 1];
            AppState.dailyOpenPrice = lastDaily.open;
            AppState.dailyHighPrice = lastDaily.high;
            AppState.dailyLowPrice = lastDaily.low;
        } else {
            const dailyData = await fetchChartData(AppState.asset, AppState.market, '1d');
            if (dailyData && dailyData.length > 0) {
                const lastDaily = dailyData[dailyData.length - 1];
                AppState.dailyOpenPrice = lastDaily.open;
                AppState.dailyHighPrice = lastDaily.high;
                AppState.dailyLowPrice = lastDaily.low;
            } else {
                AppState.dailyOpenPrice = data[0].open;
                AppState.dailyHighPrice = null;
                AppState.dailyLowPrice = null;
            }
        }
    } catch(e) {
        AppState.dailyOpenPrice = data[0].open;
        AppState.dailyHighPrice = null;
        AppState.dailyLowPrice = null;
    }
    
    if (candleSeries) {
        try {
            if (currentChartType === 'line') {
                const lineData = data.map(d => ({ time: d.time, value: d.close }));
                candleSeries.setData(lineData);
            } else {
                candleSeries.setData(data);
            }
            updateIndicators(data);
            chart.timeScale().fitContent();
        } catch(e) { console.error("Chart set data error:", e); }
    }
    redrawDrawings();
    updateUI();
}

// --- AI Algorithm ---
let lastSignalTime = 0;
function processAILogic() {
    const data = AppState.priceData[AppState.asset];
    if(data.length < 20) return;
    
    const emaFast = data.slice(-5).reduce((s, c) => s + c.close, 0) / 5;
    const emaSlow = data.slice(-15).reduce((s, c) => s + c.close, 0) / 15;
    
    let signal = null;
    const diff = emaFast - emaSlow;
    const threshold = AppState.currentPrice * 0.0005; 
    
    let now = Date.now();
    if (now - lastSignalTime > 5000) { 
        if (diff > threshold) signal = 'buy';
        else if (diff < -threshold) signal = 'sell';
        
        if (signal) {
            lastSignalTime = now;
            addSignalToUI(signal, AppState.asset, AppState.currentPrice);
            
            if (AppState.currentUser && AppState.autoTrade) {
                let targetValue = AppState.balance * 0.1; // use 10% of balance
                let targetQty = targetValue / AppState.currentPrice;
                if (AppState.tradeType === 'future') {
                    const leverage = parseInt(DOM.leverageSlider.value) || 10;
                    targetQty = (targetValue * leverage) / AppState.currentPrice;
                }
                targetQty = parseFloat(targetQty.toFixed(4));
                if (targetQty > 0) {
                    DOM.orderQty.value = targetQty; 
                    AppState.action = signal;
                    executeTrade();
                }
            }
        }
    }
}

function addSignalToUI(type, asset, price) {
    const el = document.querySelector('.empty-signals');
    if (el) el.remove();
    
    const div = document.createElement('div');
    div.className = `signal-card ${type}`;
    div.innerHTML = `
        <div class="signal-header">
            <span>${type.toUpperCase()} SIGNAL</span>
            <span>${asset}</span>
        </div>
        <div>Detected trend at $${price.toFixed(2)}</div>
    `;
    DOM.aiSignalsList.prepend(div);
    if(DOM.aiSignalsList.children.length > 5) DOM.aiSignalsList.lastChild.remove();
}

// --- Order Execution ---
function executeTrade() {
    const qty = parseFloat(DOM.orderQty.value);
    if(!qty || qty <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }
    
    // Replay Mode Sandbox Execution
    if (AppState.isReplayMode) {
        let calcPrice = AppState.currentPrice;
        const tpVal = parseFloat(DOM.orderTp.value);
        const slVal = parseFloat(DOM.orderSl.value);
        const cost = calculateCost(qty, calcPrice);
        if (cost > AppState.replayBalance) {
            alert("Insufficient Balance");
            return;
        }
        AppState.replayBalance -= cost;
        const position = {
            id: Date.now(),
            symbol: AppState.asset,
            type: AppState.tradeType,
            side: AppState.action,
            qty: qty,
            entryPrice: AppState.currentPrice,
            leverage: AppState.tradeType === 'future' ? parseInt(DOM.leverageSlider.value) : 1,
            strike: AppState.tradeType === 'option' ? parseFloat(DOM.optStrike.value) || AppState.currentPrice : null,
            optType: AppState.tradeType === 'option' ? DOM.optType.value : null,
            tp: tpVal && tpVal > 0 ? tpVal : null,
            sl: slVal && slVal > 0 ? slVal : null,
            aiManaged: false
        };
        AppState.replayPositions.push(position);
        showToast(`[Replay] Market Order Executed: ${AppState.action.toUpperCase()} ${qty} ${AppState.asset} @ $${AppState.currentPrice.toFixed(2)}`);
        
        DOM.orderQty.value = '';
        DOM.orderTp.value = '';
        DOM.orderSl.value = '';
        updateUI();
        saveUserSession();
        return;
    }
    
    const oType = AppState.orderType;
    const limitPrice = parseFloat(DOM.orderLimitPrice.value);
    const stopPrice = parseFloat(DOM.orderStopPrice.value);
    const trailingDelta = parseFloat(DOM.orderTrailingDelta.value);
    const tpVal = parseFloat(DOM.orderTp.value);
    const slVal = parseFloat(DOM.orderSl.value);
    
    // Validate inputs
    if ((oType === 'limit' || oType === 'stop_limit' || oType === 'post_only') && (!limitPrice || limitPrice <= 0)) {
        alert("Please enter a valid Limit Price.");
        return;
    }
    if ((oType === 'stop_market' || oType === 'stop_limit') && (!stopPrice || stopPrice <= 0)) {
        alert("Please enter a valid Stop Trigger Price.");
        return;
    }
    if (oType === 'trailing_stop' && (!trailingDelta || trailingDelta <= 0 || trailingDelta > 50)) {
        alert("Please enter a valid Trailing Delta percentage (0.1% to 50%).");
        return;
    }

    // Determine execution price for cost calculation
    let calcPrice = AppState.currentPrice;
    if (oType === 'limit' || oType === 'stop_limit' || oType === 'post_only') {
        calcPrice = limitPrice;
    }
    
    const cost = calculateCost(qty, calcPrice);
    if (cost > AppState.balance) {
        alert("Insufficient Balance");
        return;
    }
    
    // Process Immediate Market Executions
    if (oType === 'market') {
        AppState.balance -= cost;
        const position = {
            id: Date.now(),
            symbol: AppState.asset,
            type: AppState.tradeType,
            side: AppState.action,
            qty: qty,
            entryPrice: AppState.currentPrice,
            leverage: AppState.tradeType === 'future' ? parseInt(DOM.leverageSlider.value) : 1,
            strike: AppState.tradeType === 'option' ? parseFloat(DOM.optStrike.value) || AppState.currentPrice : null,
            optType: AppState.tradeType === 'option' ? DOM.optType.value : null,
            tp: tpVal && tpVal > 0 ? tpVal : null,
            sl: slVal && slVal > 0 ? slVal : null,
            aiManaged: AppState.autoTrade
        };
        AppState.positions.push(position);
        showToast(`Market Order Executed: ${AppState.action.toUpperCase()} ${qty} ${AppState.asset} @ $${AppState.currentPrice.toFixed(2)}`);
    } 
    // Process Post Only instant checks
    else if (oType === 'post_only') {
        const isBuy = AppState.action === 'buy';
        const currentPrice = AppState.currentPrice;
        if ((isBuy && limitPrice >= currentPrice) || (!isBuy && limitPrice <= currentPrice)) {
            alert("Post Only Order Rejected: Limit price would match immediately with market liquidity.");
            return;
        }
        
        // Otherwise, place as working Limit order
        AppState.balance -= cost;
        const order = {
            id: Date.now(),
            symbol: AppState.asset,
            type: AppState.tradeType,
            side: AppState.action,
            orderType: oType,
            qty: qty,
            limitPrice: limitPrice,
            stopPrice: null,
            trailingDelta: null,
            trailingPeak: null,
            leverage: AppState.tradeType === 'future' ? parseInt(DOM.leverageSlider.value) : 1,
            strike: AppState.tradeType === 'option' ? parseFloat(DOM.optStrike.value) || AppState.currentPrice : null,
            optType: AppState.tradeType === 'option' ? DOM.optType.value : null,
            tp: tpVal && tpVal > 0 ? tpVal : null,
            sl: slVal && slVal > 0 ? slVal : null,
            cost: cost,
            status: 'Working'
        };
        AppState.pendingOrders.push(order);
        showToast(`Post Only Order Placed: ${AppState.action.toUpperCase()} ${qty} ${AppState.asset} @ Limit $${limitPrice.toFixed(2)}`);
    }
    // Process Limit immediate-taker check
    else if (oType === 'limit') {
        const isBuy = AppState.action === 'buy';
        const currentPrice = AppState.currentPrice;
        // If Buy Limit is placed ABOVE the market, or Sell Limit placed BELOW the market, execute immediately as a market order!
        if ((isBuy && limitPrice >= currentPrice) || (!isBuy && limitPrice <= currentPrice)) {
            const takerCost = calculateCost(qty, currentPrice);
            AppState.balance -= takerCost;
            const position = {
                id: Date.now(),
                symbol: AppState.asset,
                type: AppState.tradeType,
                side: AppState.action,
                qty: qty,
                entryPrice: currentPrice,
                leverage: AppState.tradeType === 'future' ? parseInt(DOM.leverageSlider.value) : 1,
                strike: AppState.tradeType === 'option' ? parseFloat(DOM.optStrike.value) || AppState.currentPrice : null,
                optType: AppState.tradeType === 'option' ? DOM.optType.value : null,
                tp: tpVal && tpVal > 0 ? tpVal : null,
                sl: slVal && slVal > 0 ? slVal : null,
                aiManaged: AppState.autoTrade
            };
            AppState.positions.push(position);
            showToast(`Limit Order Matched Instantly: ${AppState.action.toUpperCase()} ${qty} ${AppState.asset} @ $${currentPrice.toFixed(2)}`);
        } else {
            // Place as pending limit order
            AppState.balance -= cost;
            const order = {
                id: Date.now(),
                symbol: AppState.asset,
                type: AppState.tradeType,
                side: AppState.action,
                orderType: oType,
                qty: qty,
                limitPrice: limitPrice,
                stopPrice: null,
                trailingDelta: null,
                trailingPeak: null,
                leverage: AppState.tradeType === 'future' ? parseInt(DOM.leverageSlider.value) : 1,
                strike: AppState.tradeType === 'option' ? parseFloat(DOM.optStrike.value) || AppState.currentPrice : null,
                optType: AppState.tradeType === 'option' ? DOM.optType.value : null,
                tp: tpVal && tpVal > 0 ? tpVal : null,
                sl: slVal && slVal > 0 ? slVal : null,
                cost: cost,
                status: 'Working'
            };
            AppState.pendingOrders.push(order);
            showToast(`Limit Order Working: ${AppState.action.toUpperCase()} ${qty} ${AppState.asset} @ $${limitPrice.toFixed(2)}`);
        }
    }
    // Process Stop Market, Stop Limit, Trailing Stop working orders
    else {
        AppState.balance -= cost;
        const order = {
            id: Date.now(),
            symbol: AppState.asset,
            type: AppState.tradeType,
            side: AppState.action,
            orderType: oType,
            qty: qty,
            limitPrice: oType === 'stop_limit' ? limitPrice : null,
            stopPrice: oType === 'stop_limit' || oType === 'stop_market' ? stopPrice : null,
            trailingDelta: oType === 'trailing_stop' ? trailingDelta : null,
            trailingPeak: oType === 'trailing_stop' ? AppState.currentPrice : null,
            leverage: AppState.tradeType === 'future' ? parseInt(DOM.leverageSlider.value) : 1,
            strike: AppState.tradeType === 'option' ? parseFloat(DOM.optStrike.value) || AppState.currentPrice : null,
            optType: AppState.tradeType === 'option' ? DOM.optType.value : null,
            tp: tpVal && tpVal > 0 ? tpVal : null,
            sl: slVal && slVal > 0 ? slVal : null,
            cost: cost,
            status: oType === 'stop_market' || oType === 'stop_limit' ? 'Trigger Pending' : 'Working'
        };
        AppState.pendingOrders.push(order);
        showToast(`${oType.replace('_', ' ').toUpperCase()} Working: ${AppState.action.toUpperCase()} ${qty} ${AppState.asset}`);
    }
    
    // Clear inputs
    DOM.orderQty.value = '';
    if (DOM.orderLimitPrice) DOM.orderLimitPrice.value = '';
    if (DOM.orderStopPrice) DOM.orderStopPrice.value = '';
    if (DOM.orderTrailingDelta) DOM.orderTrailingDelta.value = '';
    DOM.orderTp.value = '';
    DOM.orderSl.value = '';
    
    updateUI();
    saveUserSession();
}

function getCurrentSession() {
    const hour = new Date().getUTCHours();
    if (hour >= 0 && hour < 8) return "Asian";
    if (hour >= 8 && hour < 14) return "London";
    return "New York";
}

function closePosition(id) {
    const timeframe = AppState.timeframe || '15m';
    const session = getCurrentSession() || 'London';
    
    // Replay Mode Sandbox Closure
    if (AppState.isReplayMode) {
        const idx = AppState.replayPositions.findIndex(p => p.id === id);
        if (idx < 0) return;
        const p = AppState.replayPositions[idx];
        const currentPrice = AppState.currentPrice;
        const pnl = calculatePNL(p, currentPrice);
        
        let initialMargin = 0;
        if (p.type === 'spot') initialMargin = p.qty * p.entryPrice;
        else if (p.type === 'future') initialMargin = (p.qty * p.entryPrice) / p.leverage;
        else if (p.type === 'option') initialMargin = p.qty * currentPrice * 0.05;
        
        AppState.replayBalance += (initialMargin + pnl);
        
        // Log to trade history
        const closeId = Date.now();
        AppState.tradeHistory.push({
            id: p.id,
            closeId: closeId,
            symbol: p.symbol,
            type: p.type,
            side: p.side,
            qty: p.qty,
            entryPrice: p.entryPrice,
            exitPrice: currentPrice,
            pnl: pnl,
            timeframe: timeframe,
            session: session,
            timestamp: new Date().toLocaleString(),
            note: "Replay Manual Close"
        });
        
        AppState.replayPositions.splice(idx, 1);
        updateUI();
        saveUserSession();
        if (typeof checkAndGenerateCertificate === 'function') {
            checkAndGenerateCertificate(p, currentPrice, pnl, 'replay', closeId);
        }
        return;
    }
    
    const idx = AppState.positions.findIndex(p => p.id === id);
    if(idx < 0) return;
    const p = AppState.positions[idx];
    
    const currentAssetPrice = getSafeAssetPrice(p.symbol);
    const pnl = calculatePNL(p, currentAssetPrice);
    
    let initialMargin = 0;
    if (p.type === 'spot') initialMargin = p.qty * p.entryPrice;
    else if (p.type === 'future') initialMargin = (p.qty * p.entryPrice) / p.leverage;
    else if (p.type === 'option') initialMargin = p.qty * currentAssetPrice * 0.05; 
    
    AppState.balance += (initialMargin + pnl);
    
    // Log to trade history
    const closeId = Date.now();
    AppState.tradeHistory.push({
        id: p.id,
        closeId: closeId,
        symbol: p.symbol,
        type: p.type,
        side: p.side,
        qty: p.qty,
        entryPrice: p.entryPrice,
        exitPrice: currentAssetPrice,
        pnl: pnl,
        timeframe: timeframe,
        session: session,
        timestamp: new Date().toLocaleString()
    });
    
    AppState.positions.splice(idx, 1);
    updateUI();
    saveUserSession();
    if (typeof checkAndGenerateCertificate === 'function') {
        checkAndGenerateCertificate(p, currentAssetPrice, pnl, p.type, closeId);
    }
}

// --- Math Helpers ---
function getSafeAssetPrice(symbol) {
    if (AppState.priceData[symbol] && AppState.priceData[symbol].length > 0) {
        return AppState.priceData[symbol][AppState.priceData[symbol].length - 1].close;
    }
    for (let mkt of Object.keys(MARKET_ASSETS)) {
        if (MARKET_ASSETS[mkt][symbol]) {
            return MARKET_ASSETS[mkt][symbol].base;
        }
    }
    return AppState.currentPrice || 0;
}

function calculateCost(qty, price = null) {
    let p = price !== null ? price : AppState.currentPrice;
    if(AppState.tradeType === 'spot') return qty * p;
    if(AppState.tradeType === 'future') return (qty * p) / parseInt(DOM.leverageSlider.value);
    if(AppState.tradeType === 'option') return qty * p * 0.05; 
    return 0;
}

function calculatePNL(pos, currentPrice) {
    let pnl = 0;
    if (pos.type === 'spot') {
        pnl = pos.side === 'buy' ? (currentPrice - pos.entryPrice) * pos.qty : (pos.entryPrice - currentPrice) * pos.qty;
    } else if (pos.type === 'future') {
        pnl = pos.side === 'buy' ? (currentPrice - pos.entryPrice) * pos.qty : (pos.entryPrice - currentPrice) * pos.qty;
    } else if (pos.type === 'option') {
        if(pos.side === 'buy') {
            if(pos.optType === 'call') pnl = Math.max(0, currentPrice - pos.strike) * pos.qty;
            else pnl = Math.max(0, pos.strike - currentPrice) * pos.qty;
        } else {
            if(pos.optType === 'call') pnl = Math.min(0, pos.strike - currentPrice) * pos.qty;
            else pnl = Math.min(0, currentPrice - pos.strike) * pos.qty;
        }
    }
    return pnl;
}

// --- UI Updates ---
function updateUI() {
    // Exit early if workspace is not active or hidden
    if (!document.getElementById('app-workspace') || document.getElementById('app-workspace').classList.contains('hidden-screen')) {
        return;
    }
    // Render dynamic 24h ticker updates for active asset
    const currentData = AppState.priceData[AppState.asset];
    if (currentData && currentData.length > 0) {
        const lastCandle = currentData[currentData.length - 1];
        
        // Update daily high/low with the latest price
        if (AppState.dailyHighPrice !== undefined && AppState.dailyHighPrice !== null && AppState.currentPrice > AppState.dailyHighPrice) {
            AppState.dailyHighPrice = AppState.currentPrice;
        }
        if (AppState.dailyLowPrice !== undefined && AppState.dailyLowPrice !== null && AppState.currentPrice < AppState.dailyLowPrice) {
            AppState.dailyLowPrice = AppState.currentPrice;
        }

        // Calculate dynamic 1D change % based on daily open price vs current price
        const openPrice = AppState.dailyOpenPrice !== undefined ? AppState.dailyOpenPrice : currentData[0].open;
        const changePct = ((AppState.currentPrice - openPrice) / openPrice) * 100;
        
        const changeEl = document.getElementById('price-change-24h');
        if (changeEl) {
            changeEl.textContent = `${changePct >= 0 ? '+' : ''}${changePct.toFixed(2)}%`;
            changeEl.className = `ticker-badge ${changePct >= 0 ? 'up' : 'down'}`;
        }
        
        // Dynamic High, Low and mock Volume indicators
        let high24h = AppState.dailyHighPrice !== undefined && AppState.dailyHighPrice !== null ? AppState.dailyHighPrice : -Infinity;
        let low24h = AppState.dailyLowPrice !== undefined && AppState.dailyLowPrice !== null ? AppState.dailyLowPrice : Infinity;
        
        if (high24h === -Infinity || low24h === Infinity) {
            currentData.forEach(c => {
                if (c.high > high24h) high24h = c.high;
                if (c.low < low24h) low24h = c.low;
            });
        }
        
        const highEl = document.getElementById('high-24h');
        const lowEl = document.getElementById('low-24h');
        const volEl = document.getElementById('vol-24h');
        
        if (highEl) highEl.textContent = `$${high24h.toFixed(2)}`;
        if (lowEl) lowEl.textContent = `$${low24h.toFixed(2)}`;
        if (volEl) {
            // Mock high volume metric
            const mockVol = (high24h * 15.34).toFixed(0);
            volEl.textContent = `${mockVol} ${AppState.asset}`;
        }
    }

    DOM.currentPrice.textContent = `$${AppState.currentPrice.toFixed(2)}`;
    
    let totalUnrealized = 0;
    DOM.posBody.innerHTML = '';
    
    AppState.positions.forEach(p => {
        const cp = getSafeAssetPrice(p.symbol);
        const pnl = calculatePNL(p, cp);
        totalUnrealized += pnl;
        
        let typeStr = p.type.toUpperCase();
        if(p.type === 'future') typeStr += ` (${p.leverage}x)`;
        if(p.type === 'option') typeStr += ` (${p.optType.toUpperCase()})`;
        
        let tpslInfo = [];
        if (p.tp) tpslInfo.push(`TP: $${p.tp}`);
        if (p.sl) tpslInfo.push(`SL: $${p.sl}`);
        if (tpslInfo.length > 0) {
            typeStr += `<br><small style="color:var(--text-muted); font-size:10px;">${tpslInfo.join(' | ')}</small>`;
        }
        
        let liqOrStrike = '--';
        if(p.type === 'future') {
            let liqDiff = p.entryPrice / p.leverage;
            liqOrStrike = p.side === 'buy' ? p.entryPrice - liqDiff : p.entryPrice + liqDiff;
            liqOrStrike = `$${liqOrStrike.toFixed(2)}`;
        }
        if(p.type === 'option') liqOrStrike = `$${p.strike.toFixed(2)}`;
        
        const isAiActive = p.copiedFrom || p.aiManaged || AppState.autoTrade;
        const aiBadge = isAiActive ? `<span class="ai-cut-badge" title="AI Bot Risk Safeguard Active">🤖 AI-Cut Active</span>` : '';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong style="color:${p.side==='buy'?'var(--buy)':'var(--sell)'}">${p.side.toUpperCase()}</strong> ${p.symbol}${aiBadge}</td>
            <td>${typeStr}</td>
            <td>${p.qty}</td>
            <td>$${p.entryPrice.toFixed(2)}</td>
            <td>$${cp.toFixed(2)}</td>
            <td>${liqOrStrike}</td>
            <td class="${pnl >= 0 ? 'pnl-up' : 'pnl-down'}">$${pnl.toFixed(2)}</td>
            <td>
                <button class="close-btn" onclick="closePosition(${p.id})">Close</button>
            </td>
        `;
        DOM.posBody.appendChild(tr);
    });
    
    if(AppState.positions.length === 0) {
        DOM.posBody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-muted)">No open positions</td></tr>`;
    }
    
    DOM.balance.textContent = `$${AppState.balance.toFixed(2)}`;
    DOM.equity.textContent = `$${(AppState.balance + totalUnrealized).toFixed(2)}`;
    DOM.pnl.textContent = `$${totalUnrealized.toFixed(2)}`;
    DOM.pnl.className = `value ${totalUnrealized > 0 ? 'up' : totalUnrealized < 0 ? 'down' : 'neutral'}`;
    
    // Calculate Max Order Limits
    const maxQtySpan = document.getElementById('order-max-qty');
    if (maxQtySpan) {
        let maxQty = 0;
        if (AppState.tradeType === 'spot') {
            maxQty = AppState.balance / AppState.currentPrice;
        } else if (AppState.tradeType === 'future') {
            const leverage = parseInt(DOM.leverageSlider.value) || 10;
            maxQty = (AppState.balance * leverage) / AppState.currentPrice;
        } else if (AppState.tradeType === 'option') {
            maxQty = AppState.balance / (AppState.currentPrice * 0.05);
        }
        maxQtySpan.textContent = `Max: ${maxQty.toFixed(2)}`;
    }

    const qty = parseFloat(DOM.orderQty.value) || 0;
    DOM.orderCost.textContent = `$${calculateCost(qty).toFixed(2)}`;
    
    // Automatically update PNL if it is visible
    if (!DOM.tradeHistoryView.classList.contains('hidden')) {
        const activeFilter = document.querySelector('.pnl-filter-btn.active');
        updatePNLDashboard(activeFilter ? activeFilter.dataset.period : 'custom');
    }
    
    const activeTab = document.querySelector('.left-tab.active');
    if (activeTab && activeTab.dataset.leftTab === 'dashboard') {
        renderDashboard();
    }
    
    renderPendingOrders();
}

function updatePNLDashboard(period) {
    let filteredTrades = AppState.tradeHistory;
    const now = new Date();
    
    if (period !== 'all') {
        let startTime = 0;
        if (period === 'today') {
            startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        } else if (period === 'week') {
            const first = now.getDate() - now.getDay();
            startTime = new Date(now.getFullYear(), now.getMonth(), first).getTime();
        } else if (period === 'month') {
            startTime = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
        } else if (period === 'custom') {
            const from = new Date(DOM.pnlDateFrom.value).getTime();
            const to = new Date(DOM.pnlDateTo.value).getTime() + 86400000; // include full day
            filteredTrades = filteredTrades.filter(t => t.closeId >= from && t.closeId <= to);
            startTime = null; // handled by filter
        }
        
        if(startTime !== null) {
            filteredTrades = filteredTrades.filter(t => t.closeId >= startTime);
        }
    }
    
    let totalPnl = 0;
    let winningTrades = 0;
    let grossProfit = 0;
    let grossLoss = 0;
    let bestTrade = -Infinity;
    
    DOM.historyBody.innerHTML = '';
    
    filteredTrades.sort((a,b) => b.closeId - a.closeId).forEach(t => {
        totalPnl += t.pnl;
        if (t.pnl > 0) {
            winningTrades++;
            grossProfit += t.pnl;
        } else {
            grossLoss += Math.abs(t.pnl);
        }
        if (t.pnl > bestTrade) bestTrade = t.pnl;
        
        const dateStr = new Date(t.closeId).toLocaleString();
        const tr = document.createElement('tr');
        
        let actionHtml = '--';
        if (t.pnl > 0) {
            actionHtml = `<button class="close-btn" style="padding: 2px 8px; font-size: 10px; background: rgba(0, 229, 255, 0.08); border: 1px solid var(--brand); color: var(--brand); border-radius: 4px; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='var(--brand)'; this.style.color='#fff';" onmouseout="this.style.background='rgba(0, 229, 255, 0.08)'; this.style.color='var(--brand)';" onclick="viewCertForClosedTrade('${t.closeId}')">📜 Cert</button>`;
        }
        
        tr.innerHTML = `
            <td>${dateStr}</td>
            <td><strong style="font-weight:600;">${t.symbol}</strong></td>
            <td>${t.type.toUpperCase()}</td>
            <td><span style="color:${t.side==='buy'?'var(--buy)':'var(--sell)'}; font-weight:700;">${t.side.toUpperCase()}</span></td>
            <td>$${t.entryPrice.toFixed(2)}</td>
            <td>$${t.exitPrice.toFixed(2)}</td>
            <td class="${t.pnl >= 0 ? 'pnl-up' : 'pnl-down'}">$${t.pnl.toFixed(2)}</td>
            <td>${actionHtml}</td>
        `;
        DOM.historyBody.appendChild(tr);
    });
    
    if (filteredTrades.length === 0) {
        DOM.historyBody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-muted)">No trade history found for this period</td></tr>`;
    }
    
    const winRate = filteredTrades.length > 0 ? ((winningTrades / filteredTrades.length) * 100).toFixed(1) : 0;
    const profitFactor = grossLoss === 0 ? (grossProfit > 0 ? "99.9" : "0.00") : (grossProfit / grossLoss).toFixed(2);
    const finalBest = bestTrade === -Infinity ? 0.00 : bestTrade;
    
    DOM.pnlTotalVal.textContent = `$${totalPnl.toFixed(2)}`;
    DOM.pnlTotalVal.className = `value ${totalPnl > 0 ? 'up' : totalPnl < 0 ? 'down' : 'neutral'}`;
    DOM.pnlTradesVal.textContent = filteredTrades.length;
    DOM.pnlWinrateVal.textContent = `${winRate}%`;
    
    const factorEl = document.getElementById('pnl-factor-val');
    const bestEl = document.getElementById('pnl-best-val');
    if (factorEl) factorEl.textContent = profitFactor;
    if (bestEl) {
        bestEl.textContent = `$${finalBest.toFixed(2)}`;
        bestEl.className = finalBest >= 0 ? 'pnl-up' : 'pnl-down';
    }
    
    const analyticsView = document.getElementById('portfolio-analytics');
    if (analyticsView && !analyticsView.classList.contains('hidden')) {
        if (typeof updatePortfolioAnalytics === 'function') {
            updatePortfolioAnalytics();
        }
    }
}

// Initialization is now handled inside async initData()
// --- Drawing & Chart Type Helper Functions ---
let currentChartType = 'candle';
let trendlineStartPoint = null;
let patternPoints = [];
let tempPatternSeries = null;

function calcHeikinAshi(data) {
    if (!data || data.length === 0) return [];
    const haData = [];
    let prevHaOpen = data[0].open;
    let prevHaClose = data[0].close;
    
    for (let i = 0; i < data.length; i++) {
        const d = data[i];
        const haClose = (d.open + d.high + d.low + d.close) / 4;
        const haOpen = i === 0 ? (d.open + d.close) / 2 : (prevHaOpen + prevHaClose) / 2;
        const haHigh = Math.max(d.high, haOpen, haClose);
        const haLow = Math.min(d.low, haOpen, haClose);
        
        haData.push({
            time: d.time,
            open: haOpen,
            high: haHigh,
            low: haLow,
            close: haClose
        });
        
        prevHaOpen = haOpen;
        prevHaClose = haClose;
    }
    return haData;
}

function recreateMainSeries(type) {
    if (!chart) return;
    currentChartType = type;

    const data = AppState.priceData[AppState.asset];

    if (candleSeries) {
        try {
            chart.removeSeries(candleSeries);
        } catch(e) { console.error(e); }
    }

    if (type === 'line') {
        candleSeries = chart.addLineSeries({
            color: '#2962ff',
            lineWidth: 3,
            title: AppState.asset,
        });
    } else if (type === 'bar') {
        candleSeries = chart.addBarSeries({
            upColor: '#00c853',
            downColor: '#ff3d00',
        });
    } else if (type === 'area') {
        candleSeries = chart.addAreaSeries({
            topColor: 'rgba(41, 98, 255, 0.4)',
            bottomColor: 'rgba(41, 98, 255, 0.0)',
            lineColor: '#2962ff',
            lineWidth: 2.5,
            title: AppState.asset,
        });
    } else if (type === 'baseline') {
        const baseVal = data && data.length > 0 ? data[0].close : 0;
        candleSeries = chart.addBaselineSeries({
            baseValue: { type: 'price', price: baseVal },
            topFillColor1: 'rgba(0, 200, 83, 0.28)',
            topFillColor2: 'rgba(0, 200, 83, 0.05)',
            topLineColor: '#00c853',
            bottomFillColor1: 'rgba(255, 61, 0, 0.05)',
            bottomFillColor2: 'rgba(255, 61, 0, 0.28)',
            bottomLineColor: '#ff3d00',
            lineWidth: 2,
            title: AppState.asset,
        });
    } else if (type === 'hollow') {
        candleSeries = chart.addCandlestickSeries({
            upColor: 'transparent',
            downColor: '#ff3d00',
            borderVisible: true,
            borderUpColor: '#00c853',
            borderDownColor: '#ff3d00',
            wickVisible: true,
            wickUpColor: '#00c853',
            wickDownColor: '#ff3d00',
            title: AppState.asset,
        });
    } else if (type === 'heikin') {
        candleSeries = chart.addCandlestickSeries({
            upColor: '#00c853',
            downColor: '#ff3d00',
            borderVisible: false,
            wickUpColor: '#00c853',
            wickDownColor: '#ff3d00',
            title: AppState.asset + ' (HA)',
        });
    } else {
        // Standard Candles
        candleSeries = chart.addCandlestickSeries({
            upColor: '#00c853',
            downColor: '#ff3d00',
            borderVisible: false,
            wickUpColor: '#00c853',
            wickDownColor: '#ff3d00',
            title: AppState.asset,
        });
    }

    if (data && data.length > 0) {
        if (type === 'line' || type === 'area' || type === 'baseline') {
            const mappedData = data.map(d => ({ time: d.time, value: d.close }));
            candleSeries.setData(mappedData);
        } else if (type === 'heikin') {
            const haData = calcHeikinAshi(data);
            candleSeries.setData(haData);
        } else {
            candleSeries.setData(data);
        }
    }

    if (data && data.length > 0) {
        updateIndicators(data);
    }
    redrawDrawings();
}

function updateMainSeries(candle) {
    if (!candleSeries) return;
    try {
        if (currentChartType === 'line' || currentChartType === 'area' || currentChartType === 'baseline') {
            candleSeries.update({ time: candle.time, value: candle.close });
        } else if (currentChartType === 'heikin') {
            const data = AppState.priceData[AppState.asset];
            if (data && data.length > 1) {
                const prev = data[data.length - 2];
                const haClose = (candle.open + candle.high + candle.low + candle.close) / 4;
                const haOpen = (prev.open + prev.close) / 2;
                const haHigh = Math.max(candle.high, haOpen, haClose);
                const haLow = Math.min(candle.low, haOpen, haClose);
                candleSeries.update({ time: candle.time, open: haOpen, high: haHigh, low: haLow, close: haClose });
            } else {
                candleSeries.update(candle);
            }
        } else {
            candleSeries.update(candle);
        }
    } catch(e){}
}

function checkAndTriggerTPSL() {
    let positionsChanged = false;
    for (let i = AppState.positions.length - 1; i >= 0; i--) {
        const pos = AppState.positions[i];
        const data = AppState.priceData[pos.symbol];
        if (!data || data.length === 0) continue;
        const currentPrice = data[data.length - 1].close;

        let triggered = false;
        if (pos.tp) {
            if (pos.side === 'buy' && currentPrice >= pos.tp) triggered = true;
            if (pos.side === 'sell' && currentPrice <= pos.tp) triggered = true;
        }
        if (pos.sl) {
            if (pos.side === 'buy' && currentPrice <= pos.sl) triggered = true;
            if (pos.side === 'sell' && currentPrice >= pos.sl) triggered = true;
        }

        if (triggered) {
            closePosition(pos.id);
            positionsChanged = true;
        }
    }
    return positionsChanged;
}

// --- AI Auto-Cut Risk Safeguards Engine ---
function runAIBotAutoCut() {
    let changed = false;
    for (let i = AppState.positions.length - 1; i >= 0; i--) {
        const pos = AppState.positions[i];
        
        // AI monitors only if Auto Trade toggle is ON, or it's copy traded, or explicitly marked aiManaged
        const isAiManaged = pos.copiedFrom || pos.aiManaged || AppState.autoTrade;
        if (!isAiManaged) continue;

        const data = AppState.priceData[pos.symbol];
        if (!data || data.length < 25) continue;

        const currentPrice = data[data.length - 1].close;
        const pnl = calculatePNL(pos, currentPrice);

        // Compute leverage-adjusted cost (initial margin)
        let initialMargin = 0;
        if (pos.type === 'spot') initialMargin = pos.qty * pos.entryPrice;
        else if (pos.type === 'future') initialMargin = (pos.qty * pos.entryPrice) / pos.leverage;
        else if (pos.type === 'option') initialMargin = pos.qty * pos.entryPrice * 0.05;
        if (initialMargin <= 0) initialMargin = 1; // Prevent division by zero

        const pnlPct = (pnl / initialMargin) * 100;

        let shouldCut = false;
        let cutReason = '';

        // Safeguard 1: Drawdown limit (-5%)
        if (pnlPct <= -5.0) {
            shouldCut = true;
            cutReason = `Risk Safeguard Trigger (Drawdown reached ${Math.abs(pnlPct).toFixed(2)}%)`;
        }

        // Safeguard 2: Indicator Reversals (using fast EMA 9 / slow EMA 21)
        if (!shouldCut) {
            const shortEmaArr = calcEMA(data, 9);
            const longEmaArr = calcEMA(data, 21);
            const rsiArr = calcRSI(data, 14);

            if (shortEmaArr.length > 0 && longEmaArr.length > 0) {
                const shortEma = shortEmaArr[shortEmaArr.length - 1].value;
                const longEma = longEmaArr[longEmaArr.length - 1].value;
                
                if (pos.side === 'buy' && shortEma < longEma) {
                    shouldCut = true;
                    cutReason = `Trend Reversal (Bearish EMA crossover)`;
                } else if (pos.side === 'sell' && shortEma > longEma) {
                    shouldCut = true;
                    cutReason = `Trend Reversal (Bullish EMA crossover)`;
                }
            }

            // RSI Reversion cut safeguards
            if (!shouldCut && rsiArr.length > 0) {
                const rsi = rsiArr[rsiArr.length - 1].value;
                if (pos.side === 'buy' && rsi < 35) {
                    shouldCut = true;
                    cutReason = `Oversold Breakdown (RSI below 35)`;
                } else if (pos.side === 'sell' && rsi > 65) {
                    shouldCut = true;
                    cutReason = `Overbought Breakout (RSI above 65)`;
                }
            }
        }

        if (shouldCut) {
            // Close position & refund remaining balance
            AppState.balance += (initialMargin + pnl);

            // Log to trade history
            AppState.tradeHistory.push({
                id: pos.id,
                closeId: Date.now(),
                symbol: pos.symbol,
                type: pos.type,
                side: pos.side,
                qty: pos.qty,
                entryPrice: pos.entryPrice,
                exitPrice: currentPrice,
                pnl: pnl,
                autoCut: true,
                cutReason: cutReason
            });

            // Remove from active positions
            AppState.positions.splice(i, 1);
            changed = true;

            // Trigger premium custom golden toast!
            showAICutToast(pos.symbol, pos.side, currentPrice, cutReason);

            // Publish a defense alert post to OmniSocial Community Feed!
            publishAutoCutSocialAlert(pos.symbol, pos.side, currentPrice, pnl, cutReason);

            // Check if copied bot profit achievements can unlock
            if (pos.copiedFrom) {
                // Accumulate bot profits
                let botProfits = parseFloat(localStorage.getItem('ai_bot_copied_profits') || '0');
                if (pnl > 0) {
                    botProfits += pnl;
                    localStorage.setItem('ai_bot_copied_profits', botProfits.toString());
                    if (botProfits >= 30000) {
                        triggerUnlockAchievement('ai_trading_master');
                    }
                }
            }
        }
    }

    if (changed) {
        updateUI();
        saveUserSession();
    }
}

function showAICutToast(symbol, side, price, reason) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast ai-cut';
    toast.style.cssText = `
        background: rgba(22, 26, 37, 0.95);
        color: #fff;
        padding: 12px 18px;
        border-radius: 8px;
        font-size: 12px;
        border: 1px solid rgba(255, 193, 7, 0.3);
        border-left: 4px solid #ffd700;
        min-width: 280px;
        box-shadow: 0 8px 24px rgba(255, 193, 7, 0.15);
        pointer-events: auto;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        font-family: 'JetBrains Mono', monospace;
    `;
    toast.innerHTML = `
        <div style="font-weight: 800; color: #ffd700; display:flex; align-items:center; gap:6px; margin-bottom:4px;">
            <span>🤖 AI BOT AUTO-CUT</span>
        </div>
        <div>Closed <strong>${side.toUpperCase()}</strong> on <strong>${symbol}</strong> @ <strong>$${price.toFixed(2)}</strong></div>
        <div style="font-size: 10px; color: var(--text-muted); margin-top:4px;">Reason: ${reason}</div>
    `;
    container.appendChild(toast);

    // Fade in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 50);

    // Fade out and remove
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4500);
}

function publishAutoCutSocialAlert(symbol, side, price, pnl, reason) {
    const newPost = {
        id: Date.now(),
        user: "🤖 ForgeAI Trade Guardian (Bot)",
        avatar: "🛡️",
        time: "Just now",
        content: `🛡️ [AUTO-CUT ACTIVE] Automatically liquidated active ${side.toUpperCase()} position on ${symbol} at $${price.toFixed(2)}. Defensive capital protection triggered to mitigate downside exposure.`,
        likes: 3,
        comments: 1,
        liked: false,
        attachment: `${symbol} Safeguard Save: P&L ${pnl >= 0 ? '+' : ''}$${pnl.toFixed(2)} | ${reason}`
    };
    MOCK_SOCIAL_POSTS.unshift(newPost);
    if (MOCK_SOCIAL_POSTS.length > 30) MOCK_SOCIAL_POSTS.pop();
    renderSocialFeed();
}

function shareOpenTradeToCommunity(id) {
    let pos = AppState.positions.find(p => Number(p.id) === Number(id)) || AppState.replayPositions.find(p => Number(p.id) === Number(id));
    if (!pos) {
        pos = AppState.positions.find(p => String(p.id) === String(id)) || AppState.replayPositions.find(p => String(p.id) === String(id));
    }
    if (!pos) {
        pos = AppState.positions[0] || AppState.replayPositions[0];
    }
    if (!pos) {
        showToast("No active open position found to share!");
        return;
    }
    
    const currentPrice = getSafeAssetPrice(pos.symbol);
    const pnl = calculatePNL(pos, currentPrice);
    
    const newPost = {
        id: Date.now(),
        user: `${AppState.currentUser || "Guest"} (You)`,
        avatar: "👤",
        time: "Just now",
        content: `📈 Holding active ${(pos.side || 'buy').toUpperCase()} position on ${pos.symbol} at entry price $${(pos.entryPrice || 0).toFixed(2)}. Currently ticking at $${(currentPrice || 0).toFixed(2)}! Monitoring parameters closely.`,
        likes: 1,
        comments: 0,
        liked: true,
        attachment: `${pos.symbol} Open Specs: P&L ${pnl >= 0 ? '+' : ''}$${pnl.toFixed(2)}`
    };
    
    MOCK_SOCIAL_POSTS.unshift(newPost);
    renderSocialFeed();
    showToast(`Shared active ${pos.symbol} position directly to ForgeSocial!`);
}

function shareClosedTradeToCommunity(closeId) {
    let t = AppState.tradeHistory.find(x => x.closeId && Number(x.closeId) === Number(closeId));
    if (!t) {
        t = AppState.tradeHistory.find(x => String(x.closeId) === String(closeId) || Number(x.id) === Number(closeId));
    }
    if (!t) {
        t = AppState.tradeHistory[AppState.tradeHistory.length - 1];
    }
    if (!t) {
        showToast("No closed trade history found to share!");
        return;
    }
    
    let contentStr = `Just finalized ${(t.side || 'buy').toUpperCase()} position on ${t.symbol} simulated trading! Realized return details attached below.`;
    if (t.autoCut) {
        contentStr = `🛡️ AI Bot automatically cut my active ${(t.side || 'buy').toUpperCase()} position on ${t.symbol} at $${(t.exitPrice || 0).toFixed(2)} due to: ${t.cutReason || "Risk Safeguard"}. Excellent capital protection!`;
    }
    
    const newPost = {
        id: Date.now(),
        user: `${AppState.currentUser || "Guest"} (You)`,
        avatar: "👤",
        time: "Just now",
        content: contentStr,
        likes: 1,
        comments: 0,
        liked: true,
        attachment: `${t.symbol} Realized P&L: ${(t.pnl || 0) >= 0 ? '+' : ''}$${(t.pnl || 0).toFixed(2)}`
    };
    
    MOCK_SOCIAL_POSTS.unshift(newPost);
    renderSocialFeed();
    showToast(`Shared realized ${t.symbol} trade specs directly to ForgeSocial!`);
}

function deleteSocialPost(id) {
    const idx = MOCK_SOCIAL_POSTS.findIndex(p => p.id === id);
    if (idx !== -1) {
        MOCK_SOCIAL_POSTS.splice(idx, 1);
        renderSocialFeed();
        showToast("Social post deleted successfully!");
    }
}

window.shareOpenTradeToCommunity = shareOpenTradeToCommunity;
window.shareClosedTradeToCommunity = shareClosedTradeToCommunity;
window.deleteSocialPost = deleteSocialPost;

// --- Interactive Quantitative Strategy Backtester ---
function toggleBacktestStrategyParams() {
    const strategy = document.getElementById('backtest-strategy').value;
    document.getElementById('ema-params-group').classList.add('hidden');
    document.getElementById('rsi-params-group').classList.add('hidden');
    document.getElementById('macd-params-group').classList.add('hidden');
    document.getElementById('bb-params-group').classList.add('hidden');
    document.getElementById('rsi-mom-params-group').classList.add('hidden');
    if (strategy === 'ema_cross') {
        document.getElementById('ema-params-group').classList.remove('hidden');
    } else if (strategy === 'rsi_reversion') {
        document.getElementById('rsi-params-group').classList.remove('hidden');
    } else if (strategy === 'macd_signal') {
        document.getElementById('macd-params-group').classList.remove('hidden');
    } else if (strategy === 'bollinger_bands') {
        document.getElementById('bb-params-group').classList.remove('hidden');
    } else if (strategy === 'rsi_momentum') {
        document.getElementById('rsi-mom-params-group').classList.remove('hidden');
    }
}

function runStrategyBacktest() {
    const asset = AppState.asset;
    const strategy = document.getElementById('backtest-strategy').value;
    const equityInput = parseFloat(document.getElementById('backtest-equity').value) || 100000;
    const leverage = parseFloat(document.getElementById('backtest-leverage').value) || 10;

    const data = AppState.priceData[asset];
    if (!data || data.length < 50) {
        showToast("⚠️ Insufficient historical data for backtesting. Wait for chart to load more candles!");
        return;
    }

    let initialCapital = equityInput;
    let capital = initialCapital;
    let position = null; // { side, entryPrice, qty }
    let trades = []; // Logged trades
    let maxDrawdown = 0;
    let peak = initialCapital;
    let wins = 0;

    // Strategy parameters
    if (strategy === 'ema_cross') {
        const shortPeriod = parseInt(document.getElementById('backtest-short-ema').value) || 9;
        const longPeriod = parseInt(document.getElementById('backtest-long-ema').value) || 21;

        const shortEma = calcEMA(data, shortPeriod);
        const longEma = calcEMA(data, longPeriod);

        const sMap = new Map(shortEma.map(x => [x.time, x.value]));
        const lMap = new Map(longEma.map(x => [x.time, x.value]));

        for (let i = 2; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curS = sMap.get(currentCandle.time);
            const curL = lMap.get(currentCandle.time);
            const prevS = sMap.get(prevCandle.time);
            const prevL = lMap.get(prevCandle.time);

            if (curS === undefined || curL === undefined || prevS === undefined || prevL === undefined) continue;

            const isBullishCross = prevS <= prevL && curS > curL;
            const isBearishCross = prevS >= prevL && curS < curL;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? isBearishCross : isBullishCross;
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;

                    const isWin = pnl > 0;
                    if (isWin) wins++;

                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });

                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;

                    position = null;
                }
            }

            if (!position) {
                if (isBullishCross) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishCross) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'rsi_reversion') {
        const rsiPeriod = parseInt(document.getElementById('backtest-rsi-period').value) || 14;
        const overbought = parseInt(document.getElementById('backtest-rsi-overbought').value) || 70;
        const oversold = parseInt(document.getElementById('backtest-rsi-oversold').value) || 30;

        const rsiArr = calcRSI(data, rsiPeriod);
        const rsiMap = new Map(rsiArr.map(x => [x.time, x.value]));

        for (let i = 2; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curRSI = rsiMap.get(currentCandle.time);
            const prevRSI = rsiMap.get(prevCandle.time);

            if (curRSI === undefined || prevRSI === undefined) continue;

            const isBullishCross = prevRSI <= oversold && curRSI > oversold;
            const isBearishCross = prevRSI >= overbought && curRSI < overbought;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? curRSI > 55 : curRSI < 45;
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;

                    const isWin = pnl > 0;
                    if (isWin) wins++;

                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });

                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;

                    position = null;
                }
            }

            if (!position) {
                if (isBullishCross) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishCross) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'macd_signal') {
        const fast = parseInt(document.getElementById('backtest-macd-fast').value) || 12;
        const slow = parseInt(document.getElementById('backtest-macd-slow').value) || 26;
        const signalPeriod = parseInt(document.getElementById('backtest-macd-signal').value) || 9;

        const macdData = calcMACD(data, fast, slow, signalPeriod);
        const macdMap = new Map(macdData.macd.map(x => [x.time, x.value]));
        const sigMap = new Map(macdData.signal.map(x => [x.time, x.value]));

        for (let i = 2; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curM = macdMap.get(currentCandle.time);
            const curS = sigMap.get(currentCandle.time);
            const prevM = macdMap.get(prevCandle.time);
            const prevS = sigMap.get(prevCandle.time);

            if (curM === undefined || curS === undefined || prevM === undefined || prevS === undefined) continue;

            const isBullishCross = prevM <= prevS && curM > curS;
            const isBearishCross = prevM >= prevS && curM < curS;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? isBearishCross : isBullishCross;
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;

                    const isWin = pnl > 0;
                    if (isWin) wins++;

                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });

                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;

                    position = null;
                }
            }

            if (!position) {
                if (isBullishCross) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishCross) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'bollinger_bands') {
        const period = parseInt(document.getElementById('backtest-bb-period').value) || 20;
        const stdDev = parseFloat(document.getElementById('backtest-bb-stddev').value) || 2.0;

        const bbData = calcBB(data, period, stdDev);
        const upperMap = new Map(bbData.upper.map(x => [x.time, x.value]));
        const midMap = new Map(bbData.mid.map(x => [x.time, x.value]));
        const lowerMap = new Map(bbData.lower.map(x => [x.time, x.value]));

        for (let i = 2; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curU = upperMap.get(currentCandle.time);
            const curM = midMap.get(currentCandle.time);
            const curL = lowerMap.get(currentCandle.time);
            const prevU = upperMap.get(prevCandle.time);
            const prevL = lowerMap.get(prevCandle.time);

            if (curU === undefined || curM === undefined || curL === undefined || prevU === undefined || prevL === undefined) continue;

            const isBullishEntry = prevCandle.close >= prevL && currentCandle.close < curL;
            const isBearishEntry = prevCandle.close <= prevU && currentCandle.close > curU;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? (currentCandle.close >= curM) : (currentCandle.close <= curM);
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;

                    const isWin = pnl > 0;
                    if (isWin) wins++;

                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });

                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;

                    position = null;
                }
            }

            if (!position) {
                if (isBullishEntry) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishEntry) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'rsi_momentum') {
        const rsiPeriod = parseInt(document.getElementById('backtest-rsi-mom-period').value) || 14;
        const buyThreshold = parseInt(document.getElementById('backtest-rsi-mom-buy').value) || 70;
        const sellThreshold = parseInt(document.getElementById('backtest-rsi-mom-sell').value) || 30;

        const rsiArr = calcRSI(data, rsiPeriod);
        const rsiMap = new Map(rsiArr.map(x => [x.time, x.value]));

        for (let i = 2; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curRSI = rsiMap.get(currentCandle.time);
            const prevRSI = rsiMap.get(prevCandle.time);

            if (curRSI === undefined || prevRSI === undefined) continue;

            const isBullishBreakout = prevRSI <= buyThreshold && curRSI > buyThreshold;
            const isBearishBreakdown = prevRSI >= sellThreshold && curRSI < sellThreshold;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? (curRSI < 50) : (curRSI > 50);
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;

                    const isWin = pnl > 0;
                    if (isWin) wins++;

                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });

                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;

                    position = null;
                }
            }

            if (!position) {
                if (isBullishBreakout) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishBreakdown) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'stoch_reversion') {
        const kPeriod = 14;
        const dPeriod = 3;
        const stoch = [];
        for (let i = 0; i < data.length; i++) {
            if (i < kPeriod - 1) {
                stoch.push({ time: data[i].time, k: 50 });
                continue;
            }
            let lowestLow = Infinity;
            let highestHigh = -Infinity;
            for (let j = 0; j < kPeriod; j++) {
                const c = data[i - j];
                if (c.low < lowestLow) lowestLow = c.low;
                if (c.high > highestHigh) highestHigh = c.high;
            }
            const diff = highestHigh - lowestLow;
            const kVal = diff === 0 ? 50 : ((data[i].close - lowestLow) / diff) * 100;
            stoch.push({ time: data[i].time, k: kVal });
        }
        
        const stochMap = new Map();
        for (let i = 0; i < stoch.length; i++) {
            if (i < dPeriod - 1) {
                stochMap.set(stoch[i].time, { k: stoch[i].k, d: stoch[i].k });
                continue;
            }
            let sum = 0;
            for (let j = 0; j < dPeriod; j++) sum += stoch[i - j].k;
            stochMap.set(stoch[i].time, { k: stoch[i].k, d: sum / dPeriod });
        }

        for (let i = 2; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curS = stochMap.get(currentCandle.time);
            const prevS = stochMap.get(prevCandle.time);
            if (!curS || !prevS) continue;

            const isBullishCross = prevS.k <= prevS.d && curS.k > curS.d && curS.k < 30;
            const isBearishCross = prevS.k >= prevS.d && curS.k < curS.d && curS.k > 70;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? (curS.k > 80 || curS.k < curS.d) : (curS.k < 20 || curS.k > curS.d);
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;
                    if (pnl > 0) wins++;
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });
                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;
                    position = null;
                }
            }

            if (!position) {
                if (isBullishCross) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishCross) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'dema_cross') {
        function computeDEMA(d, period) {
            const ema1 = calcEMA(d, period);
            const ema1Candles = ema1.map(x => ({ time: x.time, close: x.value }));
            const ema2 = calcEMA(ema1Candles, period);
            const e2Map = new Map(ema2.map(x => [x.time, x.value]));
            const dema = [];
            for (let pt of ema1) {
                if (e2Map.has(pt.time)) {
                    dema.push({ time: pt.time, value: 2 * pt.value - e2Map.get(pt.time) });
                }
            }
            return dema;
        }

        const fastDema = computeDEMA(data, 9);
        const slowDema = computeDEMA(data, 21);

        const fMap = new Map(fastDema.map(x => [x.time, x.value]));
        const sMap = new Map(slowDema.map(x => [x.time, x.value]));

        for (let i = 2; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curF = fMap.get(currentCandle.time);
            const curS = sMap.get(currentCandle.time);
            const prevF = fMap.get(prevCandle.time);
            const prevS = sMap.get(prevCandle.time);

            if (curF === undefined || curS === undefined || prevF === undefined || prevS === undefined) continue;

            const isBullishCross = prevF <= prevS && curF > curS;
            const isBearishCross = prevF >= prevS && curF < curS;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? isBearishCross : isBullishCross;
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;
                    if (pnl > 0) wins++;
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });
                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;
                    position = null;
                }
            }

            if (!position) {
                if (isBullishCross) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishCross) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'atr_breakout') {
        const sma = calcSMA(data, 20);
        const atr = calcATR(data, 14);

        const sMap = new Map(sma.map(x => [x.time, x.value]));
        const aMap = new Map(atr.map(x => [x.time, x.value]));

        for (let i = 2; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curS = sMap.get(currentCandle.time);
            const curA = aMap.get(currentCandle.time);
            const prevS = sMap.get(prevCandle.time);
            const prevA = aMap.get(prevCandle.time);

            if (curS === undefined || curA === undefined || prevS === undefined || prevA === undefined) continue;

            const curUpper = curS + 1.5 * curA;
            const curLower = curS - 1.5 * curA;
            const prevUpper = prevS + 1.5 * prevA;
            const prevLower = prevS - 1.5 * prevA;

            const isBullishBreakout = prevCandle.close <= prevUpper && currentCandle.close > curUpper;
            const isBearishBreakdown = prevCandle.close >= prevLower && currentCandle.close < curLower;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? (currentCandle.close < curS) : (currentCandle.close > curS);
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;
                    if (pnl > 0) wins++;
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });
                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;
                    position = null;
                }
            }

            if (!position) {
                if (isBullishBreakout) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishBreakdown) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'macd_div') {
        const macdData = calcMACD(data, 12, 26, 9);
        const macdMap = new Map(macdData.macd.map(x => [x.time, x.value]));
        const sigMap = new Map(macdData.signal.map(x => [x.time, x.value]));

        const hist = [];
        for (let d of data) {
            const m = macdMap.get(d.time);
            const s = sigMap.get(d.time);
            if (m !== undefined && s !== undefined) {
                hist.push({ time: d.time, val: m - s });
            } else {
                hist.push({ time: d.time, val: 0 });
            }
        }

        for (let i = 3; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curH = hist[i].val;
            const prev1H = hist[i - 1].val;
            const prev2H = hist[i - 2].val;

            const isBullishDiv = curH > prev1H && prev1H < prev2H && curH < 0;
            const isBearishDiv = curH < prev1H && prev1H > prev2H && curH > 0;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? (curH < 0 && curH < prev1H) : (curH > 0 && curH > prev1H);
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;
                    if (pnl > 0) wins++;
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });
                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;
                    position = null;
                }
            }

            if (!position) {
                if (isBullishDiv) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishDiv) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'supertrend') {
        const period = 10;
        const multiplier = 3;
        const atr = calcATR(data, period);
        const aMap = new Map(atr.map(x => [x.time, x.value]));
        
        const st = [];
        let trend = 1;
        let prevUpper = 0;
        let prevLower = 0;
        
        for (let i = 0; i < data.length; i++) {
            const c = data[i];
            if (!aMap.has(c.time)) {
                st.push({ time: c.time, trend: 1, upper: 0, lower: 0 });
                continue;
            }
            const a = aMap.get(c.time);
            const hl2 = (c.high + c.low) / 2;
            let basicUpper = hl2 + multiplier * a;
            let basicLower = hl2 - multiplier * a;
            
            let upper = (basicUpper < prevUpper || (i > 0 && data[i-1].close > prevUpper)) ? basicUpper : prevUpper;
            let lower = (basicLower > prevLower || (i > 0 && data[i-1].close < prevLower)) ? basicLower : prevLower;
            
            if (i > 0) {
                if (trend === 1 && c.close < lower) {
                    trend = -1;
                } else if (trend === -1 && c.close > upper) {
                    trend = 1;
                }
            }
            
            st.push({ time: c.time, trend: trend, upper: upper, lower: lower });
            prevUpper = upper;
            prevLower = lower;
        }

        const stMap = new Map(st.map(x => [x.time, x.trend]));

        for (let i = 2; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curTrend = stMap.get(currentCandle.time);
            const prevTrend = stMap.get(prevCandle.time);

            if (curTrend === undefined || prevTrend === undefined) continue;

            const isBullishFlip = prevTrend === -1 && curTrend === 1;
            const isBearishFlip = prevTrend === 1 && curTrend === -1;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? isBearishFlip : isBullishFlip;
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;
                    if (pnl > 0) wins++;
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });
                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;
                    position = null;
                }
            }

            if (!position) {
                if (isBullishFlip) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishFlip) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'sr_reversion') {
        const period = 20;

        for (let i = period + 1; i < data.length; i++) {
            const currentCandle = data[i];

            let support = Infinity;
            let resistance = -Infinity;
            for (let j = 1; j <= period; j++) {
                const c = data[i - j];
                if (c.low < support) support = c.low;
                if (c.high > resistance) resistance = c.high;
            }

            const isBullishBounce = currentCandle.low <= support && currentCandle.close > support;
            const isBearishBounce = currentCandle.high >= resistance && currentCandle.close < resistance;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? isBearishBounce : isBullishBounce;
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;
                    if (pnl > 0) wins++;
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });
                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;
                    position = null;
                }
            }

            if (!position) {
                if (isBullishBounce) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishBounce) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'vwap_cross') {
        let cumPV = 0;
        let cumV = 0;
        const vwap = [];
        for (let i = 0; i < data.length; i++) {
            const c = data[i];
            const vol = c.volume || 100;
            const tp = (c.high + c.low + c.close) / 3;
            cumPV += tp * vol;
            cumV += vol;
            vwap.push({ time: c.time, value: cumV > 0 ? cumPV / cumV : c.close });
        }

        const vMap = new Map(vwap.map(x => [x.time, x.value]));

        for (let i = 2; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curV = vMap.get(currentCandle.time);
            const prevV = vMap.get(prevCandle.time);

            if (curV === undefined || prevV === undefined) continue;

            const isBullishCross = prevCandle.close <= prevV && currentCandle.close > curV;
            const isBearishCross = prevCandle.close >= prevV && currentCandle.close < curV;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? isBearishCross : isBullishCross;
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;
                    if (pnl > 0) wins++;
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });
                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;
                    position = null;
                }
            }

            if (!position) {
                if (isBullishCross) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishCross) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'psar_trend') {
        const sar = calcPSAR(data, 0.02, 0.2);
        const sMap = new Map(sar.map(x => [x.time, x.value]));

        for (let i = 2; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curS = sMap.get(currentCandle.time);
            const prevS = sMap.get(prevCandle.time);

            if (curS === undefined || prevS === undefined) continue;

            const isBullishCross = prevCandle.close <= prevS && currentCandle.close > curS;
            const isBearishCross = prevCandle.close >= prevS && currentCandle.close < curS;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? isBearishCross : isBullishCross;
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;
                    if (pnl > 0) wins++;
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });
                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;
                    position = null;
                }
            }

            if (!position) {
                if (isBullishCross) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishCross) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'keltner_breakout') {
        const kc = calcKeltner(data, 20, 1.5);
        const uMap = new Map(kc.upper.map(x => [x.time, x.value]));
        const lMap = new Map(kc.lower.map(x => [x.time, x.value]));
        const mMap = new Map(kc.mid.map(x => [x.time, x.value]));

        for (let i = 2; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curU = uMap.get(currentCandle.time);
            const curL = lMap.get(currentCandle.time);
            const curM = mMap.get(currentCandle.time);
            const prevU = uMap.get(prevCandle.time);
            const prevL = lMap.get(prevCandle.time);

            if (curU === undefined || curL === undefined || curM === undefined || prevU === undefined || prevL === undefined) continue;

            const isBullishBreakout = prevCandle.close <= prevU && currentCandle.close > curU;
            const isBearishBreakdown = prevCandle.close >= prevL && currentCandle.close < curL;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? (currentCandle.close < curM) : (currentCandle.close > curM);
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;
                    if (pnl > 0) wins++;
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });
                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;
                    position = null;
                }
            }

            if (!position) {
                if (isBullishBreakout) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishBreakdown) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    } else if (strategy === 'hma_cross') {
        const fastHma = calcHMA(data, 9);
        const slowHma = calcHMA(data, 25);

        const fMap = new Map(fastHma.map(x => [x.time, x.value]));
        const sMap = new Map(slowHma.map(x => [x.time, x.value]));

        for (let i = 2; i < data.length; i++) {
            const currentCandle = data[i];
            const prevCandle = data[i - 1];

            const curF = fMap.get(currentCandle.time);
            const curS = sMap.get(currentCandle.time);
            const prevF = fMap.get(prevCandle.time);
            const prevS = sMap.get(prevCandle.time);

            if (curF === undefined || curS === undefined || prevF === undefined || prevS === undefined) continue;

            const isBullishCross = prevF <= prevS && curF > curS;
            const isBearishCross = prevF >= prevS && curF < curS;

            if (position) {
                const currentPrice = currentCandle.close;
                let returnPct = 0;
                if (position.side === 'buy') {
                    returnPct = ((currentPrice - position.entryPrice) / position.entryPrice) * leverage * 100;
                } else {
                    returnPct = ((position.entryPrice - currentPrice) / position.entryPrice) * leverage * 100;
                }

                const isReversal = position.side === 'buy' ? isBearishCross : isBullishCross;
                if (isReversal || returnPct <= -5.0) {
                    const pnl = (capital * (returnPct / 100));
                    capital += pnl;
                    if (capital < 0) capital = 0;
                    if (pnl > 0) wins++;
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
                        price: currentPrice,
                        returnPct: returnPct,
                        equity: capital
                    });
                    if (capital > peak) peak = capital;
                    const dd = ((peak - capital) / peak) * 100;
                    if (dd > maxDrawdown) maxDrawdown = dd;
                    position = null;
                }
            }

            if (!position) {
                if (isBullishCross) {
                    position = { side: 'buy', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'LONG ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                } else if (isBearishCross) {
                    position = { side: 'sell', entryPrice: currentCandle.close };
                    trades.push({
                        time: new Date(currentCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        type: 'SHORT ENTRY',
                        price: currentCandle.close,
                        returnPct: 0,
                        equity: capital
                    });
                }
            }
        }
    }

    if (position) {
        const lastCandle = data[data.length - 1];
        let returnPct = 0;
        if (position.side === 'buy') {
            returnPct = ((lastCandle.close - position.entryPrice) / position.entryPrice) * leverage * 100;
        } else {
            returnPct = ((position.entryPrice - lastCandle.close) / position.entryPrice) * leverage * 100;
        }
        const pnl = (capital * (returnPct / 100));
        capital += pnl;
        if (capital < 0) capital = 0;

        const isWin = pnl > 0;
        if (isWin) wins++;

        trades.push({
            time: new Date(lastCandle.time * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: position.side === 'buy' ? 'LONG CLOSE' : 'SHORT CLOSE',
            price: lastCandle.close,
            returnPct: returnPct,
            equity: capital
        });

        if (capital > peak) peak = capital;
        const dd = ((peak - capital) / peak) * 100;
        if (dd > maxDrawdown) maxDrawdown = dd;
    }

    const totalROI = ((capital - initialCapital) / initialCapital) * 100;
    const closedTradesCount = trades.filter(t => t.type.includes('CLOSE')).length;
    const winRate = closedTradesCount > 0 ? (wins / closedTradesCount) * 100 : 0;

    let returnsArray = [];
    let negReturnsArray = [];
    let prevEq = initialCapital;
    trades.forEach(t => {
        if (t.type.includes('CLOSE')) {
            const ret = (t.equity - prevEq) / prevEq;
            returnsArray.push(ret);
            if (ret < 0) negReturnsArray.push(ret);
            prevEq = t.equity;
        }
    });

    let sharpeRatio = 0;
    let sortinoRatio = 0;

    if (returnsArray.length > 0) {
        const mean = returnsArray.reduce((a, b) => a + b, 0) / returnsArray.length;
        const variance = returnsArray.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / returnsArray.length;
        const stdDev = Math.sqrt(variance);

        if (stdDev > 0) {
            sharpeRatio = (mean / stdDev) * Math.sqrt(252);
        } else if (mean > 0) {
            sharpeRatio = 3.0;
        }

        if (negReturnsArray.length > 0) {
            const negMean = negReturnsArray.reduce((a, b) => a + b, 0) / negReturnsArray.length;
            const negVariance = negReturnsArray.reduce((a, b) => a + Math.pow(b - negMean, 2), 0) / negReturnsArray.length;
            const negStdDev = Math.sqrt(negVariance);
            if (negStdDev > 0) {
                sortinoRatio = (mean / negStdDev) * Math.sqrt(252);
            } else {
                sortinoRatio = sharpeRatio;
            }
        } else if (mean > 0) {
            sortinoRatio = 5.0;
        }
    }

    const roiEl = document.getElementById('bt-roi');
    const winrateEl = document.getElementById('bt-winrate');
    const drawdownEl = document.getElementById('bt-drawdown');
    const sharpeEl = document.getElementById('bt-sharpe');
    const sortinoEl = document.getElementById('bt-sortino');
    const tradesEl = document.getElementById('bt-trades');

    if (roiEl) {
        roiEl.innerText = `${totalROI >= 0 ? '+' : ''}${totalROI.toFixed(2)}%`;
        roiEl.className = `bt-metric-val ${totalROI >= 0 ? 'profit' : 'loss'}`;
    }
    if (winrateEl) winrateEl.innerText = `${winRate.toFixed(2)}%`;
    if (drawdownEl) drawdownEl.innerText = `${maxDrawdown.toFixed(2)}%`;
    if (sharpeEl) sharpeEl.innerText = sharpeRatio.toFixed(2);
    if (sortinoEl) sortinoEl.innerText = sortinoRatio.toFixed(2);
    if (tradesEl) tradesEl.innerText = closedTradesCount;

    const logsBody = document.getElementById('backtest-logs-body');
    if (logsBody) {
        logsBody.innerHTML = '';
        if (trades.length === 0) {
            logsBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">No trades were triggered. Try adjusting the parameters.</td></tr>`;
        } else {
            trades.forEach((t, idx) => {
                const tr = document.createElement('tr');
                const isEntry = t.type.includes('ENTRY');
                const typeStyle = isEntry ? `color: var(--text-muted); font-weight:600;` : (t.returnPct >= 0 ? `color:var(--buy); font-weight:700;` : `color:var(--sell); font-weight:700;`);
                
                tr.innerHTML = `
                    <td>${t.time}</td>
                    <td style="${typeStyle}">${t.type}</td>
                    <td>$${t.price.toFixed(2)}</td>
                    <td style="${typeStyle}">${isEntry ? '--' : (t.returnPct >= 0 ? '+' : '') + t.returnPct.toFixed(2) + '%'}</td>
                    <td>$${t.equity.toLocaleString([], { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                `;
                logsBody.appendChild(tr);
            });
        }
    }

    showToast(`⚡ Backtest run successfully on ${asset}! ROI: ${totalROI.toFixed(2)}%`);
    triggerUnlockAchievement('strategy_creator');
}
window.toggleBacktestStrategyParams = toggleBacktestStrategyParams;
window.runStrategyBacktest = runStrategyBacktest;

function setDrawingMode(mode) {
    AppState.drawingMode = mode;
    
    const btns = document.querySelectorAll('.dm-tool-btn');
    btns.forEach(btn => {
        if (btn.dataset.tool === mode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (mode !== 'pattern') {
        patternPoints = [];
        clearTempPatternSeries();
    }

    if (mode !== 'trendline') {
        trendlineStartPoint = null;
    }

    const finishBtn = DOM.btnFinishPattern;
    if (finishBtn) {
        if (mode === 'pattern') {
            finishBtn.style.display = 'block';
        } else {
            finishBtn.style.display = 'none';
        }
    }

    if (mode === 'cursor') {
        showToast("Cursor Mode: Select options or hover chart");
    } else {
        showToast(`Tool Active: ${mode.toUpperCase()}. Click on chart to draw.`);
    }
}

function handleChartClick(param) {
    if (!param || !param.point || !AppState.drawingMode || AppState.drawingMode === 'cursor') return;

    const price = candleSeries.coordinateToPrice(param.point.y);
    let time = param.time;
    if (!time) {
        const data = AppState.priceData[AppState.asset];
        if (data && data.length > 0) {
            time = data[data.length - 1].time;
        }
    }
    if (!time || !price) return;

    if (AppState.drawingMode === 'horizontal') {
        addDrawing({
            type: 'horizontal',
            asset: AppState.asset,
            points: [{ price }],
            text: `Horizontal Line @ $${price.toFixed(2)}`,
            color: '#2962ff'
        });
        setDrawingMode('cursor');
    } 
    else if (AppState.drawingMode === 'trendline') {
        if (!trendlineStartPoint) {
            trendlineStartPoint = { time, price };
            showToast("Click second point to finish Trendline");
        } else {
            addDrawing({
                type: 'trendline',
                asset: AppState.asset,
                points: [trendlineStartPoint, { time, price }],
                text: 'Trendline',
                color: '#2962ff'
            });
            trendlineStartPoint = null;
            setDrawingMode('cursor');
        }
    }
    else if (AppState.drawingMode === 'pattern') {
        patternPoints.push({ time, price });
        showToast(`Point ${patternPoints.length} added. Click again or click "Finish Pattern"`);
        updateTempPatternSeries(patternPoints);
    }
    else if (AppState.drawingMode === 'text') {
        const textVal = prompt("Enter text label for this point:");
        if (textVal) {
            addDrawing({
                type: 'text',
                asset: AppState.asset,
                points: [{ time, price }],
                text: textVal,
                color: '#ffeb3b'
            });
        }
        setDrawingMode('cursor');
    }
}

function updateTempPatternSeries(points) {
    if (!tempPatternSeries && chart) {
        tempPatternSeries = chart.addLineSeries({
            color: '#ffc107',
            lineWidth: 2,
            lineStyle: 2,
            lastValueVisible: false,
            priceLineVisible: false,
        });
    }
    if (tempPatternSeries) {
        const sorted = [...points].sort((a,b) => a.time - b.time);
        tempPatternSeries.setData(sorted.map(pt => ({ time: pt.time, value: pt.price })));
    }
}

function clearTempPatternSeries() {
    if (tempPatternSeries && chart) {
        try {
            chart.removeSeries(tempPatternSeries);
        } catch(e){}
        tempPatternSeries = null;
    }
}

function finishPattern() {
    if (patternPoints.length < 2) {
        showToast("Add at least 2 points to make a pattern!");
        return;
    }
    addDrawing({
        type: 'pattern',
        asset: AppState.asset,
        points: [...patternPoints],
        text: `Pattern (${patternPoints.length} points)`,
        color: '#ffc107'
    });
    patternPoints = [];
    clearTempPatternSeries();
    setDrawingMode('cursor');
}

function addDrawing(d) {
    const id = 'draw_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    const newDrawing = {
        id,
        asset: d.asset || AppState.asset,
        type: d.type,
        points: d.points,
        text: d.text || '',
        color: d.color || '#2962ff',
        visible: true,
        instance: null
    };
    AppState.drawings.push(newDrawing);
    redrawDrawings();
    saveUserSession();
}

function deleteDrawing(id) {
    const idx = AppState.drawings.findIndex(d => d.id === id);
    if (idx >= 0) {
        const d = AppState.drawings[idx];
        if (d.instance) {
            try {
                if (d.type === 'horizontal') {
                    if (candleSeries) candleSeries.removePriceLine(d.instance);
                } else {
                    if (chart) chart.removeSeries(d.instance);
                }
            } catch(e){}
        }
        AppState.drawings.splice(idx, 1);
        redrawDrawings();
        saveUserSession();
    }
}

function updateDrawingText(id, text) {
    const d = AppState.drawings.find(d => d.id === id);
    if (d) {
        d.text = text;
        if (d.instance) {
            try {
                if (d.type === 'horizontal') {
                    d.instance.applyOptions({ title: text });
                } else {
                    d.instance.applyOptions({ title: text });
                }
            } catch(e){}
        }
        if (d.type === 'text') {
            redrawDrawings();
        }
        saveUserSession();
    }
}

function clearAllDrawings() {
    const toDelete = AppState.drawings.filter(d => d.asset === AppState.asset);
    toDelete.forEach(d => {
        deleteDrawing(d.id);
    });
}

function redrawDrawings() {
    AppState.drawings.forEach(d => {
        if (d.instance) {
            try {
                if (d.type === 'horizontal') {
                    if (candleSeries) candleSeries.removePriceLine(d.instance);
                } else {
                    if (chart) chart.removeSeries(d.instance);
                }
            } catch(e){}
            d.instance = null;
        }
    });

    if (!chart || !candleSeries) return;

    const active = AppState.drawings.filter(d => d.asset === AppState.asset && d.visible);

    active.forEach(d => {
        if (d.type === 'horizontal') {
            const price = d.points[0].price;
            d.instance = candleSeries.createPriceLine({
                price: price,
                color: d.color || '#2962ff',
                lineWidth: 2,
                lineStyle: LightweightCharts.LineStyle.Solid,
                axisLabelVisible: true,
                title: d.text || '',
            });
        } else if (d.type === 'trendline' || d.type === 'pattern') {
            const lineSeries = chart.addLineSeries({
                color: d.color || '#2962ff',
                lineWidth: 2,
                title: d.text || '',
                crosshairMarkerVisible: false,
                lastValueVisible: false,
                priceLineVisible: false,
            });
            const sorted = [...d.points].sort((a,b) => a.time - b.time);
            lineSeries.setData(sorted.map(pt => ({ time: pt.time, value: pt.price })));
            d.instance = lineSeries;
        }
    });

    const textDrawings = active.filter(d => d.type === 'text');
    const markers = textDrawings.map(d => ({
        time: d.points[0].time,
        position: 'aboveBar',
        color: d.color || '#ffeb3b',
        shape: 'circle',
        text: d.text || ''
    }));
    candleSeries.setMarkers(markers);

    renderDrawingsList();
}

function renderDrawingsList() {
    const listCont = DOM.dmDrawingsList;
    if (!listCont) return;

    listCont.innerHTML = '';
    const active = AppState.drawings.filter(d => d.asset === AppState.asset);

    if (active.length === 0) {
        listCont.innerHTML = '<div class="empty-list">No drawings on chart</div>';
        return;
    }

    active.forEach(d => {
        const item = document.createElement('div');
        item.className = 'dm-item';
        
        let labelText = '';
        if (d.type === 'horizontal') {
            labelText = `Horizontal @ $${d.points[0].price.toFixed(2)}`;
        } else if (d.type === 'trendline') {
            labelText = `Trendline`;
        } else if (d.type === 'pattern') {
            labelText = `Pattern (${d.points.length} pts)`;
        } else if (d.type === 'text') {
            labelText = `Text Label`;
        }

        item.innerHTML = `
            <div class="dm-item-header">
                <span class="dm-item-title" title="${labelText}">${labelText}</span>
                <div class="dm-item-controls">
                    <input type="color" class="dm-item-color" value="${d.color || '#2962ff'}" title="Change color">
                    <button class="dm-item-btn toggle-vis" title="Toggle visibility">${d.visible ? '👁️' : '🙈'}</button>
                    <button class="dm-item-btn delete" title="Delete object">🗑️</button>
                </div>
            </div>
            <input type="text" class="dm-item-text-input" placeholder="Label / Text overlay..." value="${d.text || ''}">
        `;

        const colorInput = item.querySelector('.dm-item-color');
        colorInput.addEventListener('change', (e) => {
            d.color = e.target.value;
            redrawDrawings();
            saveUserSession();
        });

        const toggleVisBtn = item.querySelector('.toggle-vis');
        toggleVisBtn.addEventListener('click', () => {
            d.visible = !d.visible;
            redrawDrawings();
            saveUserSession();
        });

        const deleteBtn = item.querySelector('.delete');
        deleteBtn.addEventListener('click', () => {
            deleteDrawing(d.id);
        });

        const textInput = item.querySelector('.dm-item-text-input');
        textInput.addEventListener('input', (e) => {
            updateDrawingText(d.id, e.target.value);
        });

        listCont.appendChild(item);
    });
}

function showToast(msg) {
    let toast = document.getElementById('chart-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'chart-toast';
        toast.style.cssText = `
            position: absolute;
            bottom: 20px;
            right: 20px;
            background: rgba(22, 26, 37, 0.9);
            color: #fff;
            padding: 8px 16px;
            border-radius: 6px;
            font-size: 12px;
            border: 1px solid var(--border);
            z-index: 1000;
            pointer-events: none;
            transition: opacity 0.3s;
            opacity: 0;
        `;
        chartContainer.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(toast.timeoutId);
    toast.timeoutId = setTimeout(() => {
        toast.style.opacity = '0';
    }, 3000);
    
    if (typeof addDashboardNotification === 'function') {
        addDashboardNotification(msg);
    }
}

// --- Core Auth & Storage Helper Functions ---

// Retrieve all user accounts from localStorage
function getUsers() {
    try {
        const data = localStorage.getItem('bullforge_users') || localStorage.getItem('omnitrade_users');
        if (!data) return {};
        return JSON.parse(data);
    } catch (e) {
        console.error("Error parsing users from localStorage:", e);
        // Clean up corrupted states to prevent future locks
        localStorage.removeItem('bullforge_users');
        localStorage.removeItem('omnitrade_users');
        return {};
    }
}

// Save all user accounts to localStorage
function saveUsers(users) {
    localStorage.setItem('bullforge_users', JSON.stringify(users));
}

// Retrieve active session username
function getActiveSession() {
    return localStorage.getItem('bullforge_active_session') || localStorage.getItem('omnitrade_active_session');
}

// Save active session username
function setActiveSession(username) {
    if (username) {
        localStorage.setItem('bullforge_active_session', username);
    } else {
        localStorage.removeItem('bullforge_active_session');
        localStorage.removeItem('omnitrade_active_session');
    }
}

// Save current AppState of logged-in user
function saveUserSession() {
    if (!AppState.currentUser) return;
    const users = getUsers();
    
    // Drawings should be stored as plain serializable objects
    const drawingsToSave = AppState.drawings.map(d => ({
        id: d.id,
        asset: d.asset,
        type: d.type,
        points: d.points,
        text: d.text,
        color: d.color,
        visible: d.visible
    }));
    
    users[AppState.currentUser] = {
        password: users[AppState.currentUser]?.password || '', // retain password
        balance: AppState.balance,
        startingBalance: AppState.startingBalance !== undefined ? AppState.startingBalance : INITIAL_BALANCE,
        positions: AppState.positions,
        tradeHistory: AppState.tradeHistory,
        drawings: drawingsToSave,
        pendingOrders: AppState.pendingOrders
    };
    
    saveUsers(users);
}

// Load AppState of user
function loadUserSession(username) {
    const users = getUsers();
    const userData = users[username];
    if (!userData) return false;
    
    AppState.currentUser = username;
    
    try {
        const saved = localStorage.getItem(`bullforge_customization_${username}`);
        if (saved) {
            AppState.dashboardCustomization = JSON.parse(saved);
        } else {
            AppState.dashboardCustomization = { hiddenCards: [], theme: 'cyan' };
        }
        applyDashboardCustomization();
    } catch (e) {
        console.error("Error restoring dashboard customization", e);
    }
    
    try {
        const savedNotifs = localStorage.getItem(`bullforge_notifications_${username}`);
        AppState.notifications = savedNotifs ? JSON.parse(savedNotifs) : [];
    } catch (e) {
        console.error("Error restoring notifications", e);
        AppState.notifications = [];
    }
    AppState.balance = userData.balance !== undefined ? userData.balance : INITIAL_BALANCE;
    AppState.startingBalance = userData.startingBalance !== undefined ? userData.startingBalance : INITIAL_BALANCE;
    AppState.positions = userData.positions || [];
    AppState.tradeHistory = userData.tradeHistory || [];
    AppState.pendingOrders = userData.pendingOrders || [];
    AppState.lastDashboardStateKey = null;
    
    // Auto-generate mock trading history if history is empty (for rich dashboard first impression)
    if (AppState.tradeHistory.length < 10) {
        AppState.tradeHistory = generateMockTradeHistory();
        AppState.balance = 234700; // Match $234.7K account balance in mockup
        AppState.startingBalance = 226742; // Balance before mock trades
        userData.tradeHistory = AppState.tradeHistory;
        userData.balance = AppState.balance;
        userData.startingBalance = AppState.startingBalance;
        users[username] = userData;
        saveUsers(users);
    }
    
    // Clear drawings before restoring to prevent overlaps
    AppState.drawings.forEach(d => {
        if (d.instance) {
            try {
                if (d.type === 'horizontal') {
                    if (candleSeries) candleSeries.removePriceLine(d.instance);
                } else {
                    if (chart) chart.removeSeries(d.instance);
                }
            } catch(e){}
        }
    });
    
    AppState.drawings = (userData.drawings || []).map(d => ({
        id: d.id,
        asset: d.asset,
        type: d.type,
        points: d.points,
        text: d.text,
        color: d.color,
        visible: d.visible,
        instance: null
    }));
    
    // Refresh user display badge
    if (DOM.userDisplay) {
        DOM.userDisplay.textContent = `👤 ${username}`;
    }
    
    return true;
}

// Demo Bypass Action
function loginAsDemo() {
    const users = getUsers();
    const guestUser = 'Guest_Trader';
    if (!users[guestUser]) {
        users[guestUser] = {
            password: 'demo',
            balance: INITIAL_BALANCE,
            startingBalance: INITIAL_BALANCE,
            positions: [],
            tradeHistory: [],
            drawings: []
        };
        saveUsers(users);
    }
    setActiveSession(guestUser);
    enterTradingWorkspace(guestUser);
}

// Enter workspace transition
function enterTradingWorkspace(username) {
    if (!loadUserSession(username)) return false;
    
    if (typeof closeAuthModal === 'function') {
        closeAuthModal();
    }
    
    // Show the transition loading overlay screen
    const loaderOverlay = document.getElementById('trading-loader-overlay');
    const loaderBar = document.getElementById('trading-loader-bar-fill');
    const loaderText = document.getElementById('trading-loader-text');
    const consoleEl = document.getElementById('trading-loader-console');
    
    if (loaderOverlay && loaderBar && loaderText) {
        loaderOverlay.classList.remove('hidden');
        loaderBar.style.width = '0%';
        loaderText.textContent = "Connecting to exchange...";
        if (consoleEl) consoleEl.innerHTML = ''; // Clear previous logs
        
        const logs = [
            { pct: 5, text: '[SYS] Initializing websocket client...', type: 'sys' },
            { pct: 15, text: '[SYS] Websocket connection established. OK', type: 'success' },
            { pct: 25, text: '[SYS] Syncing order books from Binance/Coinbase...', type: 'sys' },
            { pct: 40, text: '[SYS] Order books loaded (20 active feeds). OK', type: 'success' },
            { pct: 50, text: '[SYS] Handshaking Oanda Forex API...', type: 'sys' },
            { pct: 60, text: '[SYS] Forex API synced successfully. OK', type: 'success' },
            { pct: 70, text: '[SYS] Compiling script strategy parameters...', type: 'sys' },
            { pct: 80, text: '[SYS] Compiling trading safeguards (Stop Loss / Take Profit)...', type: 'sys' },
            { pct: 90, text: '[SYS] AI safe parameters verified. OK', type: 'success' },
            { pct: 95, text: '[SYS] Establishing secure user session...', type: 'sys' },
            { pct: 100, text: '[SYS] Workspace loaded. Initializing UI... OK', type: 'success' }
        ];
        
        const loggedIndices = new Set();
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += 2;
            if (progress > 100) progress = 100;
            loaderBar.style.width = `${progress}%`;
            
            // Cycle status messages based on progress percentage
            if (progress < 30) {
                loaderText.textContent = "Initializing secure trading feed...";
            } else if (progress < 65) {
                loaderText.textContent = "Syncing real-time market orderbooks...";
            } else if (progress < 90) {
                loaderText.textContent = "Deploying AI safeguarding parameters...";
            } else {
                loaderText.textContent = "Workspace loaded. Connecting...";
            }
            
            // Append terminal logs matching current progress
            logs.forEach((log, index) => {
                if (progress >= log.pct && !loggedIndices.has(index)) {
                    loggedIndices.add(index);
                    const line = document.createElement('div');
                    line.className = `console-line ${log.type || ''}`;
                    line.textContent = log.text;
                    if (consoleEl) {
                        consoleEl.appendChild(line);
                        consoleEl.scrollTop = consoleEl.scrollHeight;
                    }
                }
            });
            
            if (progress >= 100) {
                clearInterval(interval);
                
                // Complete transition to workspace
                document.body.classList.remove('landing-mode');
                if (DOM.landingPage) DOM.landingPage.classList.add('hidden-screen');
                DOM.appWorkspace.classList.remove('hidden-screen');
                
                // Re-fit Lightweight Chart to client container space
                if (chart && candleSeries) {
                    try {
                        chart.applyOptions({
                            width: chartContainer.clientWidth || 800,
                            height: chartContainer.clientHeight || 500
                        });
                        chart.timeScale().fitContent();
                    } catch(e){}
                }
                
                loadAssetOptions(); // Sync options, fetch active price feed, redraw drawings, and update UI
                if (typeof updateLeaderboard === 'function') {
                    updateLeaderboard();
                }
                if (typeof syncCopyTraderUI === 'function') {
                    syncCopyTraderUI();
                }
                switchLeftTab('dashboard');
                
                // Fade out loader screen
                setTimeout(() => {
                    loaderOverlay.classList.add('hidden');
                }, 400);
            }
        }, 35); // 100% in 1.75 seconds
    } else {
        // Fallback if loader DOM is not found
        document.body.classList.remove('landing-mode');
        if (DOM.landingPage) DOM.landingPage.classList.add('hidden-screen');
        DOM.appWorkspace.classList.remove('hidden-screen');
        
        // Re-fit Lightweight Chart to client container space
        if (chart && candleSeries) {
            try {
                chart.applyOptions({
                    width: chartContainer.clientWidth || 800,
                    height: chartContainer.clientHeight || 500
                });
                chart.timeScale().fitContent();
            } catch(e){}
        }
        
        loadAssetOptions(); // Sync options, fetch active price feed, redraw drawings, and update UI
        if (typeof updateLeaderboard === 'function') {
            updateLeaderboard();
        }
        if (typeof syncCopyTraderUI === 'function') {
            syncCopyTraderUI();
        }
        switchLeftTab('dashboard');
    }
    return true;
}

// Log out transition
function handleLogout() {
    // Save current active state first
    saveUserSession();
    
    // Reset active credentials
    setActiveSession(null);
    AppState.currentUser = null;
    
    // Reset drawing visual references
    AppState.drawings.forEach(d => {
        if (d.instance) {
            try {
                if (d.type === 'horizontal') {
                    if (candleSeries) candleSeries.removePriceLine(d.instance);
                } else {
                    if (chart) chart.removeSeries(d.instance);
                }
            } catch(e){}
        }
    });
    AppState.drawings = [];
    AppState.positions = [];
    AppState.tradeHistory = [];
    AppState.pendingOrders = [];
    AppState.copiedBot = null;
    AppState.autoTrade = false;
    AppState.isTournamentMode = false;
    AppState.tournamentPositions = [];
    AppState.tournamentPendingOrders = [];
    AppState.tournamentBalance = 100000;
    
    // Uncheck and hide all indicators
    activeIndicators.clear();
    Object.keys(indicatorSeries).forEach(id => {
        if (indicatorSeries[id]) {
            indicatorSeries[id].applyOptions({ visible: false });
        }
    });
    if (DOM.indicatorsDropdown) {
        DOM.indicatorsDropdown.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
        });
    }
    
    // Reset layout view
    document.body.classList.add('landing-mode');
    DOM.appWorkspace.classList.add('hidden-screen');
    if (DOM.landingPage) DOM.landingPage.classList.remove('hidden-screen');
    
    // Reset forms and error states
    if (DOM.loginError) DOM.loginError.classList.remove('visible');
    if (DOM.signupError) DOM.signupError.classList.remove('visible');
    if (DOM.loginForm) DOM.loginForm.reset();
    if (DOM.signupForm) DOM.signupForm.reset();
}

// Tab Switching Auth
function switchAuthTab(tab) {
    if (tab === 'login') {
        DOM.tabLogin.classList.add('active');
        DOM.tabSignup.classList.remove('active');
        DOM.loginWrapper.classList.remove('hidden');
        DOM.signupWrapper.classList.add('hidden');
    } else {
        DOM.tabLogin.classList.remove('active');
        DOM.tabSignup.classList.add('active');
        DOM.loginWrapper.classList.add('hidden');
        DOM.signupWrapper.classList.remove('hidden');
    }
}

// Login Submit
function handleLoginSubmit(e) {
    e.preventDefault();
    const username = DOM.loginUsername.value.trim();
    const password = DOM.loginPassword.value;
    
    DOM.loginError.classList.remove('visible');
    
    if (!username || !password) {
        showAuthError(DOM.loginError, "Please enter all fields.");
        return;
    }
    
    const users = getUsers();
    const user = users[username];
    
    if (!user || user.password !== password) {
        showAuthError(DOM.loginError, "Invalid username or password.");
        return;
    }
    
    setActiveSession(username);
    enterTradingWorkspace(username);
}

// Signup Submit
function handleSignupSubmit(e) {
    e.preventDefault();
    const username = DOM.signupUsername.value.trim();
    const password = DOM.signupPassword.value;
    const confirm = DOM.signupConfirm.value;
    const balance = parseFloat(DOM.signupBalance.value);
    
    DOM.signupError.classList.remove('visible');
    
    if (!username || !password || !confirm) {
        showAuthError(DOM.signupError, "Please fill in all fields.");
        return;
    }
    
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    if (!usernameRegex.test(username)) {
        showAuthError(DOM.signupError, "Username must be 3-15 alphanumeric characters.");
        return;
    }
    
    if (password.length < 4) {
        showAuthError(DOM.signupError, "Password must be at least 4 characters.");
        return;
    }
    
    if (password !== confirm) {
        showAuthError(DOM.signupError, "Passwords do not match.");
        return;
    }
    
    const users = getUsers();
    if (users[username]) {
        showAuthError(DOM.signupError, "Username already exists.");
        return;
    }
    
    // Register account record
    users[username] = {
        password: password,
        balance: balance,
        startingBalance: balance,
        positions: [],
        tradeHistory: [],
        drawings: []
    };
    saveUsers(users);
    
    setActiveSession(username);
    enterTradingWorkspace(username);
}

function showAuthError(element, msg) {
    element.textContent = msg;
    element.classList.add('visible');
}

// --- Dynamic Financial News Feed Generator ---
const NEWS_HEADLINES = [
    { source: "Bloomberg", title: "Federal Reserve hints at interest rate stability in upcoming quarter", impact: "medium" },
    { source: "Reuters", title: "Bitcoin surges past key resistance level as retail volume hits 6-month high", impact: "high" },
    { source: "Financial Times", title: "Global manufacturing index displays minor slowdown amid energy cost spikes", impact: "medium" },
    { source: "WSJ", title: "Gold prices approach all-time high as inflationary worries trigger safety buying", impact: "high" },
    { source: "CNBC", title: "Crude oil gains 2% following production adjustments by OPEC+ alliance", impact: "medium" },
    { source: "Bloomberg", title: "Tech stock indices fluctuate rapidly as semi-conductor supply concerns arise", impact: "low" },
    { source: "Reuters", title: "Dollar Index eases against major currencies as macroeconomic data cools", impact: "low" }
];

function generateLiveNewsFeed() {
    const newsFeedList = document.getElementById('news-feed-list');
    if (!newsFeedList) return;
    
    // Clear initial loading text
    const emptyEl = newsFeedList.querySelector('.empty-signals');
    if (emptyEl) emptyEl.remove();
    
    // Generate a random news headline
    const item = NEWS_HEADLINES[Math.floor(Math.random() * NEWS_HEADLINES.length)];
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    const card = document.createElement('div');
    card.className = `news-card`;
    card.innerHTML = `
        <div class="news-meta">
            <span>${item.source}</span>
            <span>${timeStr}</span>
        </div>
        <div class="news-headline">${item.title}</div>
    `;
    
    newsFeedList.prepend(card);
    if (newsFeedList.children.length > 8) {
        newsFeedList.lastChild.remove();
    }
}

// Start simulated news feed loop
generateLiveNewsFeed();
setInterval(generateLiveNewsFeed, 7000);

// --- Economic Calendar Event Alerts ---
const ECON_EVENTS = [
    { timeOffset: 120, title: "US Core CPI Inflation (YoY)", impact: "high", forecast: "3.4%", actual: null },
    { timeOffset: 240, title: "Fed Interest Rate Decision", impact: "high", forecast: "5.50%", actual: null },
    { timeOffset: 360, title: "US Non-Farm Payrolls (NFP)", impact: "high", forecast: "185K", actual: null },
    { timeOffset: 480, title: "EUR Gross Domestic Product (GDP)", impact: "medium", forecast: "0.2%", actual: null },
    { timeOffset: 600, title: "UK Claimant Count Change", impact: "low", forecast: "10.2K", actual: null }
];

function updateEconomicCalendar() {
    const listEl = document.getElementById('calendar-events-list');
    if (!listEl) return;
    
    listEl.innerHTML = '';
    
    ECON_EVENTS.forEach(ev => {
        // Decrease offset to simulate countdown
        if (ev.timeOffset > 0) ev.timeOffset--;
        
        let min = Math.floor(ev.timeOffset / 60);
        let sec = ev.timeOffset % 60;
        let countdownStr = ev.timeOffset === 0 ? "LIVE" : `${min}m ${sec}s`;
        
        const card = document.createElement('div');
        card.className = `calendar-card ${ev.impact}`;
        card.innerHTML = `
            <div class="calendar-header">
                <span>${ev.title}</span>
                <span class="calendar-impact ${ev.impact}">${ev.impact}</span>
            </div>
            <div class="news-meta" style="margin-top:4px;">
                <span>Est: ${ev.forecast}</span>
                <span style="color:${ev.timeOffset === 0 ? 'var(--buy)' : 'var(--ai-accent)'}; font-weight:700;">${countdownStr}</span>
            </div>
        `;
        listEl.appendChild(card);
    });
}

// Start economic calendar countdown updates
updateEconomicCalendar();
setInterval(updateEconomicCalendar, 1000);

// --- Percentage Quantity Quick Fillers ---
function applyQuantityPercentage(pct) {
    let maxQty = 0;
    if (AppState.tradeType === 'spot') {
        maxQty = AppState.balance / AppState.currentPrice;
    } else if (AppState.tradeType === 'future') {
        const leverage = parseInt(DOM.leverageSlider.value) || 10;
        maxQty = (AppState.balance * leverage) / AppState.currentPrice;
    } else if (AppState.tradeType === 'option') {
        maxQty = AppState.balance / (AppState.currentPrice * 0.05);
    }
    
    const targetQty = maxQty * pct;
    DOM.orderQty.value = targetQty.toFixed(2);
    updateUI();
}

function syncCopyTraderUI() {
    const badge = document.getElementById('copy-active-badge');
    const botNameEl = document.getElementById('copy-bot-name');
    if (AppState.copiedBot) {
        if (botNameEl) botNameEl.textContent = AppState.copiedBot;
        if (badge) badge.classList.remove('hidden');
    } else {
        if (badge) badge.classList.add('hidden');
    }
    
    document.querySelectorAll('.btn-copy-master').forEach(btn => {
        const bot = btn.dataset.bot;
        if (AppState.copiedBot === bot) {
            btn.textContent = `Stop Copying`;
            btn.className = 'btn-copy-master copying';
        } else {
            btn.textContent = `Copy ${bot}`;
            btn.className = 'btn-copy-master';
        }
    });
    
    if (DOM.aiToggle) DOM.aiToggle.checked = AppState.autoTrade;
}
window.syncCopyTraderUI = syncCopyTraderUI;

// --- Copy Trading Master Bot Engine ---
function toggleCopyTrader(botName) {
    if (AppState.copiedBot === botName) {
        stopCopying();
        return;
    }
    
    AppState.copiedBot = botName;
    saveUserSession();
    syncCopyTraderUI();
    showToast(`Started copying master trader ${botName}!`);
}

function stopCopying() {
    if (!AppState.copiedBot) return;
    
    const oldBot = AppState.copiedBot;
    AppState.copiedBot = null;
    saveUserSession();
    syncCopyTraderUI();
    showToast(`Stopped copying trades from ${oldBot}.`);
}

// Copy Trading loop
function runCopyTraderTicks() {
    if (!AppState.currentUser || !AppState.copiedBot || AppState.positions.length >= 5) return;
    
    // Generate a random trade 20% of the ticks
    if (Math.random() > 0.25) return;
    
    // Pick random asset
    const markets = Object.keys(MARKET_ASSETS);
    const mkt = markets[Math.floor(Math.random() * markets.length)];
    const assets = Object.keys(MARKET_ASSETS[mkt]);
    const sym = assets[Math.floor(Math.random() * assets.length)];
    const currentAssetPrice = getSafeAssetPrice(sym);
    
    const side = Math.random() > 0.5 ? 'buy' : 'sell';
    const type = Math.random() > 0.5 ? 'spot' : 'future';
    const leverage = type === 'future' ? (Math.random() > 0.5 ? 10 : 20) : 1;
    
    // Calculate size that fits budget
    const budgetAllocated = AppState.balance * 0.15; // use 15% budget
    let qty = budgetAllocated / currentAssetPrice;
    if (type === 'future') qty = (budgetAllocated * leverage) / currentAssetPrice;
    
    if (qty <= 0.01) return;
    
    // Execute trade
    AppState.balance -= budgetAllocated;
    
    const position = {
        id: Date.now(),
        symbol: sym,
        type: type,
        side: side,
        qty: parseFloat(qty.toFixed(2)),
        entryPrice: currentAssetPrice,
        leverage: leverage,
        strike: null,
        optType: null,
        tp: null,
        sl: null,
        copiedFrom: AppState.copiedBot // Flag to indicate copy trade
    };
    
    AppState.positions.push(position);
    updateUI();
    saveUserSession();
    
    showToast(`[Replicated] Copied ${side.toUpperCase()} order on ${sym} from ${AppState.copiedBot}`);
}

// Replicate master trades tick loop
setInterval(runCopyTraderTicks, 12000);

// --- Gamified Live Rankings Leaderboard ---
const MOCK_LEADERBOARD = [
    { rank: 1, name: "🤖 AlphaBot (Copier Master)", equity: 489000, roi: "142.0%", winrate: "91%", focus: "Trend Rider" },
    { rank: 2, name: "🌌 ShadowPool (Master Bot)", equity: 385000, roi: "285.0%", winrate: "68%", focus: "Dark Pool Order" },
    { rank: 3, name: "🐋 CryptoWhale (Master Bot)", equity: 315000, roi: "215.0%", winrate: "76%", focus: "Swing Large" },
    { rank: 4, name: "🎯 ApexMomentum (Master Bot)", equity: 280000, roi: "180.0%", winrate: "82%", focus: "Momentum Break" },
    { rank: 5, name: "Sofia_Quant", equity: 220000, roi: "84.5%", winrate: "81%", focus: "Crypto Arbitrage" },
    { rank: 6, name: "🌐 NexusGrid (Master Bot)", equity: 215000, roi: "115.0%", winrate: "94%", focus: "Grid Arbitrage" },
    { rank: 7, name: "⚡ QuantumFlow (Master Bot)", equity: 198000, roi: "98.0%", winrate: "84%", focus: "M1 Scalper" },
    { rank: 8, name: "Tradestation_Pro", equity: 145000, roi: "22.4%", winrate: "67%", focus: "Forex Carry" },
    { rank: 9, name: "Marcus_Leverage", equity: 95000, roi: "-5.0%", winrate: "54%", focus: "High Leverage" }
];

function updateLeaderboard() {
    const listEl = document.getElementById('leaderboard-body');
    const userRankEl = document.getElementById('user-leaderboard-rank');
    if (!listEl) return;
    
    listEl.innerHTML = '';
    
    // Recompute User's current equity
    let totalUnrealized = 0;
    AppState.positions.forEach(p => {
        const cp = getSafeAssetPrice(p.symbol);
        totalUnrealized += calculatePNL(p, cp);
    });
    const userEquity = AppState.balance + totalUnrealized;
    
    // Map existing mock entries + User
    const standings = MOCK_LEADERBOARD.map(x => ({ ...x }));
    const userName = AppState.currentUser || "Guest_Trader";
    
    // Replace user rank in array if it exists or insert
    const userIndex = standings.findIndex(x => x.name.includes(" (You)"));
    if (userIndex >= 0) standings.splice(userIndex, 1);
    
    // Add active user
    const totalTrades = AppState.tradeHistory.length;
    let winCount = AppState.tradeHistory.filter(t => t.pnl > 0).length;
    let userWinrate = totalTrades > 0 ? `${((winCount / totalTrades) * 100).toFixed(0)}%` : "0%";
    
    // Calculate User's dynamic ROI % based on start balance
    const startBalance = 100000;
    const userROI = `${(((userEquity - startBalance) / startBalance) * 100).toFixed(1)}%`;
    
    standings.push({
        rank: 99,
        name: `👤 ${userName} (You)`,
        equity: userEquity,
        roi: userROI,
        winrate: userWinrate,
        focus: AppState.tradeType.toUpperCase()
    });
    
    // Sort by equity
    standings.sort((a, b) => b.equity - a.equity);
    
    // Re-assign ranks
    standings.forEach((trader, i) => {
        trader.rank = i + 1;
        if (trader.name.includes(" (You)")) {
            if (userRankEl) userRankEl.textContent = `My Standing: Rank #${trader.rank}`;
        }
    });
    
    // Render top 7 entries
    standings.slice(0, 7).forEach(trader => {
        const tr = document.createElement('tr');
        if (trader.name.includes(" (You)")) {
            tr.style.background = "rgba(41, 98, 255, 0.1)";
            tr.style.borderLeft = "2px solid var(--brand)";
        }
        
        tr.innerHTML = `
            <td><strong>#${trader.rank}</strong></td>
            <td>${trader.name}</td>
            <td>$${trader.equity.toFixed(2)}</td>
            <td class="${parseFloat(trader.roi) >= 0 ? 'pnl-up' : 'pnl-down'}">${trader.roi}</td>
            <td>${trader.winrate}</td>
            <td><span class="calendar-impact low" style="font-size:10px;">${trader.focus}</span></td>
        `;
        listEl.appendChild(tr);
    });
}

// Keep leaderboard positions updated with equity swings
setInterval(updateLeaderboard, 4000);

// --- Learn-to-Earn Academy Quiz Core ---
const ACADEMY_QUIZZES = {
    margin: {
        title: "Understanding Margin & Leverage",
        question: "When trading with 20x Leverage in Futures, what percentage drop in asset price will trigger liquidation on a Long trade?",
        options: [
            "A drop of 20%",
            "A drop of 5% (Correct)",
            "A drop of 10%",
            "A drop of 50%"
        ],
        answerIdx: 1,
        reward: 10000
    },
    indicators: {
        title: "Technical Indicator Analysis",
        question: "What market condition is typically indicated when the Relative Strength Index (RSI) crosses above 70?",
        options: [
            "The asset is oversold and due for a reversal",
            "The asset has entered a sideways distribution",
            "The asset is overbought and potentially overvalued (Correct)",
            "The market has low volatility"
        ],
        answerIdx: 2,
        reward: 15000
    },
    risk: {
        title: "Professional Risk Management Sizing",
        question: "Using a 1:2 Risk-to-Reward ratio, if you place a Stop Loss 100 points below entry, where should your Take Profit be?",
        options: [
            "50 points above entry",
            "100 points above entry",
            "200 points above entry (Correct)",
            "150 points above entry"
        ],
        answerIdx: 2,
        reward: 20000
    },
    microstructure: {
        title: "Market Microstructure & LOB Dynamics",
        question: "Which of the following describes the 'bid-ask spread' in a limit order book?",
        options: [
            "The difference between the highest bid price and the lowest ask price (Correct)",
            "The fee charged by an exchange for placing market maker orders",
            "The volume ratio between limit orders and market orders",
            "The average speed at which order matching engines execute transactions"
        ],
        answerIdx: 0,
        reward: 25000
    },
    options_greeks: {
        title: "Options Greeks & Sensitivity Metrics",
        question: "Which Option Greek measures the sensitivity of an option's premium price relative to changes in underlying asset volatility?",
        options: [
            "Delta (measures underlying price sensitivity)",
            "Theta (measures time decay speed)",
            "Vega (measures implied volatility sensitivity) (Correct)",
            "Gamma (measures rate of change of Delta)"
        ],
        answerIdx: 2,
        reward: 30000
    },
    arbitrage: {
        title: "Quantitative Arbitrage Protocols",
        question: "In spatial arbitrage, what action does a quantitative trader perform to capture price discrepancies between two exchanges?",
        options: [
            "Buy the asset on the exchange with the lower price and sell it on the exchange with the higher price simultaneously (Correct)",
            "Wait for high-impact economic calendar events to trigger sharp price swings",
            "Deploy neural networks to predict order flow directions based on historical data",
            "Provide deep market liquidity to earn exchange maker rebates"
        ],
        answerIdx: 0,
        reward: 35000
    }
};

let activeQuizId = null;
let selectedOptionIdx = null;

function startAcademyQuiz(quizId) {
    const quiz = ACADEMY_QUIZZES[quizId];
    if (!quiz) return;
    
    // Check if already completed
    if (AppState.completedQuizzes.includes(quizId)) {
        showToast("Module already completed and reward claimed!");
        return;
    }
    
    activeQuizId = quizId;
    selectedOptionIdx = null;
    
    const modal = document.getElementById('quiz-overlay-modal');
    const title = document.getElementById('quiz-modal-title');
    const question = document.getElementById('quiz-modal-question');
    const optionsCont = document.getElementById('quiz-modal-options');
    const feedback = document.getElementById('quiz-modal-msg');
    
    if (modal && title && question && optionsCont) {
        title.textContent = quiz.title;
        question.textContent = quiz.question;
        optionsCont.innerHTML = '';
        if (feedback) {
            feedback.className = 'quiz-modal-feedback hidden';
        }
        
        quiz.options.forEach((opt, idx) => {
            const cleanOptText = opt.replace(" (Correct)", "");
            const card = document.createElement('div');
            card.className = 'quiz-option-card';
            card.innerHTML = `
                <input type="radio" name="academy-option" id="opt-${idx}" value="${idx}" style="pointer-events: none;">
                <label for="opt-${idx}" style="pointer-events: none; cursor: pointer;">${cleanOptText}</label>
            `;
            
            card.addEventListener('click', () => {
                document.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                const radio = card.querySelector('input');
                if (radio) radio.checked = true;
                selectedOptionIdx = idx;
            });
            
            optionsCont.appendChild(card);
        });
        
        modal.classList.remove('hidden');
    }
}

function exitAcademyQuiz() {
    const modal = document.getElementById('quiz-overlay-modal');
    if (modal) modal.classList.add('hidden');
    activeQuizId = null;
    selectedOptionIdx = null;
}

function submitAcademyQuiz() {
    if (activeQuizId === null || selectedOptionIdx === null) {
        showToast("Please select an answer!");
        return;
    }
    
    const quiz = ACADEMY_QUIZZES[activeQuizId];
    const feedback = document.getElementById('quiz-modal-msg');
    
    if (!feedback) return;
    
    feedback.classList.remove('hidden');
    
    if (selectedOptionIdx === quiz.answerIdx) {
        feedback.textContent = `Correct! You have successfully mastered this module. +$${quiz.reward.toLocaleString()} USD credited to practice balance.`;
        feedback.className = 'quiz-modal-feedback correct';
        
        // Claim Reward
        AppState.balance += quiz.reward;
        AppState.completedQuizzes.push(activeQuizId);
        saveUserSession();
        updateUI();
        
        // Update Academy layout indicators
        refreshAcademyUI();
        
        // Close modal after delay
        setTimeout(() => {
            exitAcademyQuiz();
            showToast(`Quiz completed! Reward of $${quiz.reward.toLocaleString()} claimed.`);
        }, 3000);
    } else {
        feedback.textContent = "Incorrect answer. Re-read the module concepts and try again!";
        feedback.className = 'quiz-modal-feedback incorrect';
    }
}
window.startAcademyQuiz = startAcademyQuiz;
window.exitAcademyQuiz = exitAcademyQuiz;
window.submitAcademyQuiz = submitAcademyQuiz;

// Sync completed quiz card views inside UI
function refreshAcademyUI() {
    Object.keys(ACADEMY_QUIZZES).forEach(quizId => {
        const card = document.getElementById(`quiz-${quizId}`);
        if (card) {
            const isCompleted = AppState.completedQuizzes.includes(quizId);
            const fill = card.querySelector('.cert-progress-fill');
            const text = card.querySelector('.cert-progress-text');
            const btn = card.querySelector('.quiz-action-btn-card');
            
            if (isCompleted) {
                card.classList.add('completed');
                if (fill) fill.style.width = '100%';
                if (text) text.textContent = '100% Completed';
                if (btn) {
                    btn.textContent = 'Claimed ✔';
                    btn.classList.add('completed-btn');
                    btn.disabled = true;
                }
            } else {
                card.classList.remove('completed');
                if (fill) fill.style.width = '0%';
                if (text) text.textContent = '0% Completed';
                if (btn) {
                    btn.textContent = 'Begin Module';
                    btn.classList.remove('completed-btn');
                    btn.disabled = false;
                }
            }
        }
    });
}

// --- ForgeAI Chat Advisor Advisor Engine ---
const BOT_RECOMMENDATIONS = {
    trend: () => {
        const currentData = AppState.priceData[AppState.asset];
        if (!currentData || currentData.length < 20) return "Loading active prices...";
        
        const open = currentData[0].open;
        const current = AppState.currentPrice;
        const change = ((current - open) / open) * 100;
        
        const direction = change >= 0 ? "BULLISH 📈" : "BEARISH 📉";
        return `My analysis of the **${AppState.asset}** active chart indicates a **${direction}** bias. The price has shifted **${change.toFixed(2)}%** since the 24h open, fluctuating between a high of **$${currentData[0].high.toFixed(2)}** and low of **$${currentData[0].low.toFixed(2)}**. Recommended approach: look for support triggers on shorter timeframes.`;
    },
    leverage: () => {
        return "⚡ **Futures Leverage** allows you to multiply your buying power. For example, at **20x Leverage**, a **$5,000** margin allocation controls a **$100,000** position. Warning: while it increases potential return vectors, a mere **5% drop** in the underlying price triggers automated contract liquidation.";
    },
    tip: () => {
        return "💡 **Analyst Daily Pro-Tip**: Never allocate more than **2%** of your total equity to a single trade. Implement a strict **1:2 Risk-to-Reward ratio** (e.g. Stop Loss 50 points down, Take Profit 100 points up) to maintain mathematical longevity.";
    },
    risk: () => {
        const totalOpen = AppState.positions.length;
        if (totalOpen === 0) return "🛡️ Your current portfolio risk is **VERY LOW**. You have no open exposure and your entire equity is safe in capital cash reserves.";
        
        let copyTradesCount = AppState.positions.filter(p => p.copiedFrom).length;
        let riskRating = totalOpen > 3 ? "HIGH ⚠️" : "MODERATE 🛡️";
        return `🛡️ Portfolio Risk Evaluation: **${riskRating}**. You currently hold **${totalOpen}** open position(s) exposing capital. ${copyTradesCount > 0 ? `Note: **${copyTradesCount}** of these positions are copy-trades replicating master bots.` : ''} Suggested Action: Place Take Profit (TP) and Stop Loss (SL) triggers on all active lines.`;
    }
};

function toggleAIChat() {
    if (DOM.aiChatPanel) {
        DOM.aiChatPanel.classList.toggle('hidden');
    }
}

function handleAIChatKeypress(e) {
    if (e.key === 'Enter') {
        sendAIChatMessage();
    }
}

function sendAIChatMessage() {
    const input = DOM.aiChatInput;
    if (!input || !input.value.trim()) return;
    
    const userText = input.value.trim();
    appendAIChatMessage(userText, 'user');
    input.value = '';
    
    // Generate AI response
    setTimeout(() => {
        let answer = "Intriguing query. I suggest monitoring current support lines and utilizing our indicators (like HMA or RSI) to confirm key entry parameters.";
        const normalized = userText.toLowerCase();
        
        if (normalized.includes('trend') || normalized.includes('price')) {
            answer = BOT_RECOMMENDATIONS.trend();
        } else if (normalized.includes('leverage') || normalized.includes('future')) {
            answer = BOT_RECOMMENDATIONS.leverage();
        } else if (normalized.includes('tip') || normalized.includes('strategy')) {
            answer = BOT_RECOMMENDATIONS.tip();
        } else if (normalized.includes('risk') || normalized.includes('position')) {
            answer = BOT_RECOMMENDATIONS.risk();
        }
        
        appendAIChatMessage(answer, 'bot');
    }, 800);
}

function askAICopilot(type) {
    const recommendation = BOT_RECOMMENDATIONS[type];
    if (recommendation) {
        appendAIChatMessage(`I'd like a report on: ${type === 'trend' ? 'Active Asset Trend' : type === 'leverage' ? 'Futures Leverage' : type === 'tip' ? 'Daily Strategy Tip' : 'Portfolio Risk'}`, 'user');
        
        setTimeout(() => {
            appendAIChatMessage(recommendation(), 'bot');
        }, 700);
    }
}

function appendAIChatMessage(text, sender) {
    const chatBody = DOM.aiChatMessages;
    if (!chatBody) return;
    
    const msg = document.createElement('div');
    msg.className = `ai-msg ${sender}`;
    msg.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    chatBody.appendChild(msg);
    
    // Auto scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Add state hydration calls for copy trading, completed academy quizzes to saveUserSession wrapper
const originalSaveUserSession = saveUserSession;
saveUserSession = function() {
    if (!AppState.currentUser) return;
    const users = getUsers();
    
    // Handle serialized save first
    const drawingsToSave = AppState.drawings.map(d => ({
        id: d.id,
        asset: d.asset,
        type: d.type,
        points: d.points,
        text: d.text,
        color: d.color,
        visible: d.visible
    }));
    
    users[AppState.currentUser] = {
        password: users[AppState.currentUser]?.password || '', 
        balance: AppState._sandboxBalance,
        positions: AppState._sandboxPositions,
        pendingOrders: AppState._sandboxPendingOrders,
        tradeHistory: AppState.tradeHistory,
        drawings: drawingsToSave,
        
        // Advanced gamified tools
        copiedBot: AppState.copiedBot,
        autoTrade: AppState.autoTrade,
        completedQuizzes: AppState.completedQuizzes,

        // Tournament Mode fields
        tournamentBalance: AppState.tournamentBalance,
        tournamentPositions: AppState.tournamentPositions,
        tournamentPendingOrders: AppState.tournamentPendingOrders
    };
    
    saveUsers(users);
};

// Add state hydration calls for copy trading, completed academy quizzes to loadUserSession wrapper
const originalLoadUserSession = loadUserSession;
loadUserSession = function(username) {
    const users = getUsers();
    const userData = users[username];
    if (!userData) return false;
    
    AppState.currentUser = username;
    AppState._sandboxBalance = userData.balance !== undefined ? userData.balance : INITIAL_BALANCE;
    AppState.startingBalance = userData.startingBalance !== undefined ? userData.startingBalance : INITIAL_BALANCE;
    AppState._sandboxPositions = userData.positions || [];
    AppState._sandboxPendingOrders = userData.pendingOrders || [];
    AppState.tournamentBalance = userData.tournamentBalance !== undefined ? userData.tournamentBalance : 100000;
    AppState.tournamentPositions = userData.tournamentPositions || [];
    AppState.tournamentPendingOrders = userData.tournamentPendingOrders || [];
    AppState.tradeHistory = userData.tradeHistory || [];
    
    // Auto-generate mock trading history if history is empty (for rich dashboard first impression)
    if (AppState.tradeHistory.length < 10) {
        AppState.tradeHistory = generateMockTradeHistory();
        AppState._sandboxBalance = 234700; // Match $234.7K account balance in mockup
        AppState.startingBalance = 226742; // Balance before mock trades
        userData.tradeHistory = AppState.tradeHistory;
        userData.balance = AppState._sandboxBalance;
        userData.startingBalance = AppState.startingBalance;
        users[username] = userData;
        saveUsers(users);
    }
    
    // Restore gamified state
    AppState.copiedBot = userData.copiedBot || null;
    AppState.autoTrade = userData.autoTrade || false;
    AppState.completedQuizzes = userData.completedQuizzes || [];
    
    // Clear drawings before restoring to prevent overlaps
    AppState.drawings.forEach(d => {
        if (d.instance) {
            try {
                if (d.type === 'horizontal') {
                    if (candleSeries) candleSeries.removePriceLine(d.instance);
                } else {
                    if (chart) chart.removeSeries(d.instance);
                }
            } catch(e){}
        }
    });
    
    AppState.drawings = (userData.drawings || []).map(d => ({
        id: d.id,
        asset: d.asset,
        type: d.type,
        points: d.points,
        text: d.text,
        color: d.color,
        visible: d.visible,
        instance: null
    }));
    
    // Refresh user display badge
    if (DOM.userDisplay) {
        DOM.userDisplay.textContent = `👤 ${username}`;
    }
    
    // Re-sync UI fields for copy trading active config
    if (AppState.copiedBot) {
        // Re-apply button state highlighting
        document.querySelectorAll('.btn-copy-master').forEach(btn => {
            const bot = btn.dataset.bot;
            if (bot === AppState.copiedBot) {
                btn.textContent = `Stop Copying`;
                btn.className = 'btn-copy-master copying';
            } else {
                btn.textContent = `Copy ${bot}`;
                btn.className = 'btn-copy-master';
            }
        });
        
        const badge = document.getElementById('copy-active-badge');
        const botNameEl = document.getElementById('copy-bot-name');
        if (badge && botNameEl) {
            botNameEl.textContent = AppState.copiedBot;
            badge.classList.remove('hidden');
        }
    } else {
        document.querySelectorAll('.btn-copy-master').forEach(btn => {
            const bot = btn.dataset.bot;
            btn.textContent = `Copy ${bot}`;
            btn.className = 'btn-copy-master';
        });
        const badge = document.getElementById('copy-active-badge');
        if (badge) badge.classList.add('hidden');
    }
    
    // Refresh Quizzes completed views
    refreshAcademyUI();
    
    return true;
};

// --- Advanced Order Types Engine & UI Rendering ---

function renderPendingOrders() {
    if (!DOM.ordersBody) return;
    DOM.ordersBody.innerHTML = '';
    
    if (AppState.pendingOrders.length === 0) {
        DOM.ordersBody.innerHTML = `<tr><td colspan="9" style="text-align:center; color:var(--text-muted)">No active pending orders</td></tr>`;
        return;
    }
    
    AppState.pendingOrders.forEach(order => {
        const tr = document.createElement('tr');
        
        const limitStr = order.limitPrice ? `$${order.limitPrice.toFixed(2)}` : '--';
        const stopStr = order.stopPrice ? `$${order.stopPrice.toFixed(2)}` : '--';
        const deltaStr = order.trailingDelta ? `${order.trailingDelta}%` : '';
        
        let orderTypeDisplay = order.orderType.replace('_', ' ').toUpperCase();
        if (order.orderType === 'trailing_stop') {
            orderTypeDisplay += ` (${deltaStr})`;
        }
        
        const sideClass = order.side === 'buy' ? 'pnl-up' : 'pnl-down';
        
        tr.innerHTML = `
            <td><strong>${order.symbol}</strong></td>
            <td><span style="text-transform: uppercase;">${order.type}</span></td>
            <td><span class="${sideClass}" style="font-weight: bold; text-transform: uppercase;">${order.side}</span></td>
            <td>${orderTypeDisplay}</td>
            <td>${order.qty}</td>
            <td>${limitStr}</td>
            <td>${stopStr}</td>
            <td><span style="font-weight: 600; color: #ffc107;">${order.status}</span></td>
            <td><button class="close-btn" onclick="cancelPendingOrder(${order.id})" title="Cancel Order">Cancel</button></td>
        `;
        DOM.ordersBody.appendChild(tr);
    });
}

function checkAndTriggerPendingOrders() {
    let changed = false;
    
    for (let i = AppState.pendingOrders.length - 1; i >= 0; i--) {
        const order = AppState.pendingOrders[i];
        const data = AppState.priceData[order.symbol];
        if (!data || data.length === 0) continue;
        const currentPrice = data[data.length - 1].close;
        const isBuy = order.side === 'buy';
        
        let triggered = false;
        let fillPrice = currentPrice;
        
        // 1. Process Limit & Post Only
        if (order.orderType === 'limit' || order.orderType === 'post_only') {
            if (isBuy && currentPrice <= order.limitPrice) {
                triggered = true;
                fillPrice = order.limitPrice; // filled at exact limit price
            } else if (!isBuy && currentPrice >= order.limitPrice) {
                triggered = true;
                fillPrice = order.limitPrice; // filled at exact limit price
            }
        }
        // 2. Process Stop Market
        else if (order.orderType === 'stop_market') {
            if (isBuy && currentPrice >= order.stopPrice) {
                triggered = true;
                fillPrice = currentPrice; // executed as market order at trigger
            } else if (!isBuy && currentPrice <= order.stopPrice) {
                triggered = true;
                fillPrice = currentPrice; // executed as market order at trigger
            }
        }
        // 3. Process Stop Limit
        else if (order.orderType === 'stop_limit') {
            if (order.status === 'Trigger Pending') {
                let stopTriggered = false;
                if (isBuy && currentPrice >= order.stopPrice) stopTriggered = true;
                else if (!isBuy && currentPrice <= order.stopPrice) stopTriggered = true;
                
                if (stopTriggered) {
                    order.status = 'Working'; // stop triggers limit placing
                    showToast(`Stop Price Triggered: Stop Limit Order is now active at Limit $${order.limitPrice.toFixed(2)}`);
                    changed = true;
                }
            } else {
                // Working as standard limit order
                if (isBuy && currentPrice <= order.limitPrice) {
                    triggered = true;
                    fillPrice = order.limitPrice;
                } else if (!isBuy && currentPrice >= order.limitPrice) {
                    triggered = true;
                    fillPrice = order.limitPrice;
                }
            }
        }
        // 4. Process Trailing Stop
        else if (order.orderType === 'trailing_stop') {
            const delta = order.trailingDelta / 100;
            if (isBuy) {
                // Buy Trailing Stop: enters Buy Market when price rises from trough
                if (currentPrice < order.trailingPeak) {
                    order.trailingPeak = currentPrice; // new lowest trough
                    changed = true;
                } else if (currentPrice >= order.trailingPeak * (1 + delta)) {
                    triggered = true;
                    fillPrice = currentPrice;
                }
            } else {
                // Sell Trailing Stop: enters Sell Market when price falls from peak
                if (currentPrice > order.trailingPeak) {
                    order.trailingPeak = currentPrice; // new highest peak
                    changed = true;
                } else if (currentPrice <= order.trailingPeak * (1 - delta)) {
                    triggered = true;
                    fillPrice = currentPrice;
                }
            }
        }
        
        if (triggered) {
            // Remove from pending order list
            AppState.pendingOrders.splice(i, 1);
            
            // Create active position
            const position = {
                id: order.id,
                symbol: order.symbol,
                type: order.type,
                side: order.side,
                qty: order.qty,
                entryPrice: fillPrice,
                leverage: order.leverage,
                strike: order.strike,
                optType: order.optType,
                tp: order.tp,
                sl: order.sl,
                aiManaged: AppState.autoTrade
            };
            AppState.positions.push(position);
            
            showToast(`Order Triggered & Filled: ${order.side.toUpperCase()} ${order.qty} ${order.symbol} @ $${fillPrice.toFixed(2)} (${order.orderType.replace('_', ' ').toUpperCase()})`);
            changed = true;
        }
    }
    
    if (changed) {
        updateUI();
        saveUserSession();
    }
}

function cancelPendingOrder(id) {
    const idx = AppState.pendingOrders.findIndex(order => order.id === id);
    if (idx < 0) return;
    
    const order = AppState.pendingOrders[idx];
    
    // Refund the frozen cost back to balance
    AppState.balance += order.cost;
    
    AppState.pendingOrders.splice(idx, 1);
    showToast(`Pending Order Canceled. Refunded $${order.cost.toFixed(2)} to balance.`);
    
    updateUI();
    saveUserSession();
}
window.cancelPendingOrder = cancelPendingOrder;

// Hydrate active tab switches to support all new pos-views
document.querySelectorAll('.pos-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.pos-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const target = tab.dataset.target;
        document.querySelectorAll('.pos-view').forEach(view => {
            view.classList.add('hidden');
        });
        
        const targetView = document.getElementById(target);
        if (targetView) targetView.classList.remove('hidden');
        
        if (target === 'portfolio-analytics') {
            if (typeof updatePortfolioAnalytics === 'function') {
                updatePortfolioAnalytics();
            }
            if (typeof runMonteCarloSimulation === 'function') {
                runMonteCarloSimulation();
            }
        }
    });
});

// --- GLOBAL ACHIEVEMENTS DATABASE (60 BADGES) ---
const ACHIEVEMENTS_DATABASE = [
    // 🥉 BRONZE
    { id: 'first_trade', tier: 'bronze', name: 'First Trade', desc: 'Place any simulated spot or futures trade.', icon: '🥉' },
    { id: 'first_profit', tier: 'bronze', name: 'First Profit', desc: 'Realize a net positive P&L on any trade.', icon: '📈' },
    { id: 'market_explorer', tier: 'bronze', name: 'Market Explorer', desc: 'Place trades in at least 5 different assets.', icon: '🗺️' },
    { id: 'rookie_trader', tier: 'bronze', name: 'Rookie Trader', desc: 'Place trades in at least 2 different assets.', icon: '🌱' },
    { id: 'learning_begins', tier: 'bronze', name: 'Journalist', desc: 'Save at least 1 custom trading strategy to your journal.', icon: '📓' },
    { id: 'chart_observer', tier: 'bronze', name: 'Chart Observer', desc: 'Adjust timeframes or active chart types.', icon: '👁️' },
    { id: 'trade_initiator', tier: 'bronze', name: 'Trade Initiator', desc: 'Place any pending limit or stop order.', icon: '⚡' },
    { id: 'bullish_beginner', tier: 'bronze', name: 'Bullish Beginner', desc: 'Open any Buy / Long contract.', icon: '🐂' },
    { id: 'bearish_beginner', tier: 'bronze', name: 'Bearish Beginner', desc: 'Open any Sell / Short contract.', icon: '🐻' },
    { id: 'risk_aware', tier: 'bronze', name: 'Risk Aware', desc: 'Set optional TP or SL levels on orders.', icon: '🛡️' },

    // 🥈 SILVER
    { id: 'profit_hunter', tier: 'silver', name: 'Profit Hunter', desc: 'Earn a total of $5,000 realizing profits.', icon: '🏹' },
    { id: 'trend_follower', tier: 'silver', name: 'Trend Follower', desc: 'Hold an open trade active for at least 3 minutes.', icon: '🌊' },
    { id: 'swing_trader', tier: 'silver', name: 'Swing Trader', desc: 'Hold at least 2 open positions simultaneously.', icon: '⚖️' },
    { id: 'scalping_starter', tier: 'silver', name: 'Scalping Starter', desc: 'Close a position within 30 seconds of entry.', icon: '⏱️' },
    { id: 'consistent_trader', tier: 'silver', name: 'Consistent Trader', desc: 'Win WinRate > 60% over 5+ trades.', icon: '🎯' },
    { id: 'risk_controller', tier: 'silver', name: 'Risk Controller', desc: 'Place 3 trades with active Stop Losses.', icon: '🎛️' },
    { id: 'wins_10_club', tier: 'silver', name: '10 Wins Club', desc: 'Accumulate 10 winning realized trades.', icon: '🥈' },
    { id: 'portfolio_builder', tier: 'silver', name: 'Portfolio Builder', desc: 'Reach total equity of $150,000 USD.', icon: '🧱' },
    { id: 'market_analyst', tier: 'silver', name: 'Market Analyst', desc: 'Draw horizontal key zones on active charts.', icon: '📊' },
    { id: 'discipline_master', tier: 'silver', name: 'Discipline Master', desc: 'Avoid liquidations over 10 consecutive trades.', icon: '🧘' },

    // 🥇 GOLD
    { id: 'wins_25_club', tier: 'gold', name: '25 Wins Club', desc: 'Accumulate 25 winning realized trades.', icon: '🥇' },
    { id: 'momentum_trader', tier: 'gold', name: 'Momentum Trader', desc: 'Earn >$10,000 realized profit in one trade.', icon: '🚀' },
    { id: 'strategy_creator', tier: 'gold', name: 'Strategy Creator', desc: 'Use AI auto-trading toggles or build bots.', icon: '🛠️' },
    { id: 'breakout_hunter', tier: 'gold', name: 'Breakout Hunter', desc: 'Trade volatile assets during countdowns.', icon: '🎯' },
    { id: 'price_action_expert', tier: 'gold', name: 'Price Action Expert', desc: 'Draw 3 trendlines or pointer patterns.', icon: '📈' },
    { id: 'winning_week', tier: 'gold', name: 'Winning Week', desc: 'Win WinRate > 75% over 15+ trades.', icon: '📅' },
    { id: 'profit_machine', tier: 'gold', name: 'Profit Machine', desc: 'Accumulate a total profit of $50,000 USD.', icon: '⚙️' },
    { id: 'drawdown_defender', tier: 'gold', name: 'Drawdown Defender', desc: 'Maintain equity above $80,000 after 10 trades.', icon: '🛡️' },
    { id: 'technical_analyst', tier: 'gold', name: 'Technical Analyst', desc: 'Overlay complex indicator setups.', icon: '📐' },
    { id: 'smart_investor', tier: 'gold', name: 'Smart Investor', desc: 'Replicate trades of ROI-optimized AI Master Bots.', icon: '🧠' },

    // 💎 PLATINUM
    { id: 'wins_50_club', tier: 'platinum', name: '50 Wins Club', desc: 'Accumulate 50 winning realized trades.', icon: '💎' },
    { id: 'elite_trader', tier: 'platinum', name: 'Elite Trader', desc: 'Reach total equity of $250,000 USD.', icon: '🌟' },
    { id: 'market_predictor', tier: 'platinum', name: 'Market Predictor', desc: 'Get Coach confidence checks >80%.', icon: '🔮' },
    { id: 'capital_protector', tier: 'platinum', name: 'Capital Protector', desc: 'Maintain Sortino Ratio > 2.0.', icon: '🛡️' },
    { id: 'trading_veteran', tier: 'platinum', name: 'Trading Veteran', desc: 'Place at least 50 total trades.', icon: '🎖️' },
    { id: 'profit_architect', tier: 'platinum', name: 'Profit Architect', desc: 'Accumulate a total profit of $100,000 USD.', icon: '🏛️' },
    { id: 'risk_management_pro', tier: 'platinum', name: 'Risk Management Pro', desc: 'Maintain Sharpe Ratio > 2.0.', icon: '⚖️' },
    { id: 'backtesting_expert', tier: 'platinum', name: 'Backtesting Expert', desc: 'Activate Replay Mode and execute a trade.', icon: '⏪' },
    { id: 'trading_champion', tier: 'platinum', name: 'Trading Champion', desc: 'Achieve 5 consecutive winning trades.', icon: '🏆' },
    { id: 'alpha_generator', tier: 'platinum', name: 'Alpha Generator', desc: 'Realize >$20,000 single trade profit.', icon: '⚡' },

    // 💠 DIAMOND
    { id: 'wins_100_club', tier: 'diamond', name: '100 Wins Club', desc: 'Accumulate 100 winning realized trades.', icon: '💠' },
    { id: 'trading_genius', tier: 'diamond', name: 'Trading Genius', desc: 'Reach total equity of $500,000 USD.', icon: '🧠' },
    { id: 'market_wizard', tier: 'diamond', name: 'Market Wizard', desc: 'Win WinRate > 80% over 30+ trades.', icon: '🧙‍♂️' },
    { id: 'portfolio_king', tier: 'diamond', name: 'Portfolio King', desc: 'Scale total equity to $750,000 USD.', icon: '👑' },
    { id: 'consistency_legend', tier: 'diamond', name: 'Consistency Legend', desc: 'Achieve 8 consecutive winning trades.', icon: '🧬' },
    { id: 'ai_trading_master', tier: 'diamond', name: 'AI Trading Master', desc: 'Earn $30,000 USD from copied bot profits.', icon: '🤖' },
    { id: 'institutional_mindset', tier: 'diamond', name: 'Strategy Architect', desc: 'Save at least 3 custom trading strategies to your journal.', icon: '🏦' },
    { id: 'trading_titan', tier: 'diamond', name: 'Trading Titan', desc: 'Place at least 150 total trades.', icon: '🌋' },
    { id: 'diamond_hands', tier: 'diamond', name: 'Diamond Hands', desc: 'Hold an open position for at least 10 minutes.', icon: '💎' },
    { id: 'hedge_fund_legend', tier: 'diamond', name: 'Hedge Fund Legend', desc: 'Achieve Sharpe > 3.0 & Sortino > 3.0.', icon: '💼' },

    // 👑 LEGENDARY (ULTRA RARE)
    { id: 'king_market', tier: 'legendary', name: 'King of the Market', desc: 'Scale total equity to $1,000,000 USD!', icon: '👑' },
    { id: 'wall_street_legend', tier: 'legendary', name: 'Wall Street Legend', desc: 'Enter Competition Arena and reach Rank #1.', icon: '🏦' },
    { id: 'oracle_trader', tier: 'legendary', name: 'Oracle Trader', desc: 'Maintain WinRate > 90% over 50+ trades.', icon: '🔮' },
    { id: 'master_momentum', tier: 'legendary', name: 'Master of Momentum', desc: 'Accumulate a total profit of $500,000 USD.', icon: '🌪️' },
    { id: 'trading_immortal', tier: 'legendary', name: 'Trading Immortal', desc: 'Achieve 15 consecutive winning trades.', icon: '♾️' },
    { id: 'market_conqueror', tier: 'legendary', name: 'Market Conqueror', desc: 'Place at least 300 total trades.', icon: '⚔️' },
    { id: 'supreme_investor', tier: 'legendary', name: 'Supreme Investor', desc: 'Accumulate a total profit of $750,000 USD.', icon: '💰' },
    { id: 'alpha_king', tier: 'legendary', name: 'The Alpha King', desc: 'Earn >$50,000 realized profit in one trade.', icon: '🦁' },
    { id: 'grandmaster_trader', tier: 'legendary', name: 'Grandmaster Trader', desc: 'Unlock all Gold & Platinum milestones.', icon: '🧙' },
    { id: 'omnitrade_legend', tier: 'legendary', name: 'BullForge Legend', desc: 'Unlock at least 30 achievements across tiers.', icon: '👑' }
];

// --- CORE CONTROL INTEGRATIONS ---

// Initialize default state elements
AppState.unlockedAchievements = AppState.unlockedAchievements || [];
AppState.isTournamentMode = AppState.isTournamentMode || false;
AppState.tournamentBalance = AppState.tournamentBalance || 100000;
AppState.tournamentPositions = AppState.tournamentPositions || [];
AppState.isReplayMode = AppState.isReplayMode || false;
AppState.replayDataset = [];
AppState.replayIndex = 0;
AppState.replayActiveTimer = null;
AppState.replayPositions = [];
AppState.replayBalance = 100000;
AppState.lessonProgress = AppState.lessonProgress || { candlestick: false, structure: false, options_basics: false, risk_mgmt: false, indicators: false, leverage: false };

// --- 1. AI TRADING COACH CONTROLLER ---
function runAICoachAnalytics() {
    const remarkEl = document.getElementById('ai-coach-remark');
    const badgeEl = document.getElementById('ai-coach-confidence-badge');
    const fillEl = document.getElementById('ai-coach-confidence-fill');
    const warningEl = document.getElementById('ai-coach-warning-box');
    
    if (!remarkEl || !badgeEl || !fillEl || !warningEl) return;
    
    const asset = AppState.asset;
    const qty = parseFloat(DOM.orderQty.value) || 0;
    const leverage = parseInt(DOM.leverageSlider.value) || 1;
    const tp = parseFloat(DOM.orderTp.value) || 0;
    const sl = parseFloat(DOM.orderSl.value) || 0;
    const type = AppState.tradeType;
    const side = AppState.action;
    
    // Simulate trend metrics based on pricing crossover
    const prices = AppState.priceData[asset] || [];
    if (prices.length < 5) return;
    const lastPrice = prices[prices.length - 1].close;
    
    // Technical analytics mapping
    const isBullishBias = lastPrice > prices[prices.length - 2].close;
    let confidence = 55 + Math.floor(Math.random() * 30);
    const biasWord = isBullishBias ? "Bullish" : "Bearish";
    
    badgeEl.textContent = `Confidence: ${confidence}% ${biasWord}`;
    badgeEl.className = isBullishBias ? 'calendar-impact low' : 'calendar-impact high';
    fillEl.style.width = `${confidence}%`;
    
    // Leverage check safeguard
    if (type === 'future' && leverage > 20) {
        warningEl.textContent = `⚠️ Warning: High Leverage (${leverage}x) increases liquidation risk to ${(100/leverage).toFixed(1)}%!`;
        warningEl.classList.remove('hidden');
    } else {
        warningEl.classList.add('hidden');
    }
    
    // Sizing advice triggers
    let advice = `Active ${asset} Spot indicators exhibit moderate ${biasWord.toLowerCase()} momentum. `;
    if (side === 'buy' && isBullishBias) {
        advice += `Entering Buy / Long here aligns with active price trend. `;
    } else if (side === 'sell' && !isBullishBias) {
        advice += `Entering Sell / Short here aligns with active bearish reversals. `;
    } else {
        advice += `Caution: active direction crosses trend indicators. `;
    }
    
    if (qty > 0) {
        const cost = qty * lastPrice / leverage;
        if (cost > AppState.balance * 0.5) {
            advice += `Warning: Trade size consumes >50% of capital cash reserves! `;
        }
    }
    
    if (tp === 0 && sl === 0) {
        const offset = lastPrice * 0.03;
        advice += `Suggest setting target TP: $${(side==='buy'?lastPrice+offset:lastPrice-offset).toFixed(2)} / SL: $${(side==='buy'?lastPrice-offset:lastPrice+offset).toFixed(2)} to secure trade longevity.`;
    } else {
        advice += `TP / SL levels active. Correct 1:2 risk ratio provides solid longevity bounds.`;
    }
    
    remarkEl.textContent = advice;
}

// Hook AI Coach to ticket inputs
['order-qty', 'leverage-slider', 'order-tp', 'order-sl', 'asset-selector'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('input', runAICoachAnalytics);
        el.addEventListener('change', runAICoachAnalytics);
    }
});
document.querySelectorAll('.action-tab').forEach(btn => btn.addEventListener('click', runAICoachAnalytics));
document.querySelectorAll('.type-tab').forEach(btn => btn.addEventListener('click', runAICoachAnalytics));

// --- 2. OPTION CHAIN ENGINE ---
function triggerOptionChainRefresh() {
    renderOptionChain();
}
window.triggerOptionChainRefresh = triggerOptionChainRefresh;

function renderOptionChain() {
    const bodyEl = document.getElementById('option-chain-body');
    const spotEl = document.getElementById('option-chain-spot-price');
    if (!bodyEl) return;
    
    const chainSelect = document.getElementById('option-chain-asset-select');
    const asset = chainSelect ? chainSelect.value : AppState.asset;
    
    let prices = AppState.priceData[asset] || [];
    if (prices.length === 0) {
        if (spotEl) spotEl.textContent = 'Loading Spot Price...';
        let mkt = 'crypto';
        Object.keys(MARKET_ASSETS).forEach(m => {
            if (MARKET_ASSETS[m][asset]) mkt = m;
        });
        fetchChartData(asset, mkt, AppState.timeframe).then(data => {
            if (data && data.length > 0) {
                AppState.priceData[asset] = data;
                renderOptionChain();
            }
        }).catch(e => console.error("Option chain fetch error:", e));
        return;
    }
    
    const spotPrice = prices[prices.length - 1].close;
    const isForex = asset === 'EUR/USD';
    const spotText = isForex ? spotPrice.toFixed(4) : spotPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    if (spotEl) spotEl.textContent = `Spot Price: ${isForex ? '' : '$'}${spotText}`;
    bodyEl.innerHTML = '';
    
    // Determine Strike steps based on asset
    let step = 100;
    if (asset.includes('ETH')) step = 10;
    else if (asset.includes('SOL')) step = 1;
    else if (asset.includes('BNB')) step = 5;
    else if (asset === 'AAPL') step = 2;
    else if (asset === 'EUR/USD') step = 0.001;
    else if (asset === 'XAU/USD') step = 5;
    
    let baseStrike = Math.round(spotPrice / step) * step;
    if (isForex) {
        baseStrike = parseFloat(baseStrike.toFixed(4));
    }
    
    // Generate 11 strike rows centered around spot
    for (let i = -5; i <= 5; i++) {
        let strike = baseStrike + (i * step);
        if (isForex) {
            strike = parseFloat(strike.toFixed(4));
        }
        const distance = (strike - spotPrice) / spotPrice;
        
        // Dynamic Black-Scholes premium approximations
        const callVol = 1000 + Math.floor(Math.random() * 500);
        const putVol = 1000 + Math.floor(Math.random() * 500);
        const callIV = (30 + Math.sin(strike) * 10).toFixed(1);
        const putIV = (32 + Math.cos(strike) * 10).toFixed(1);
        
        // Call options are priced at offset premium
        let callAsk = spotPrice * 0.05 * Math.exp(-distance * 10);
        const minPremium = isForex ? 0.0001 : 0.01;
        if (callAsk < minPremium) callAsk = minPremium;
        let callBid = callAsk * 0.96;
        
        let putAsk = spotPrice * 0.05 * Math.exp(distance * 10);
        if (putAsk < minPremium) putAsk = minPremium;
        let putBid = putAsk * 0.96;
        
        const isATM = i === 0;
        const tr = document.createElement('tr');
        if (isATM) tr.className = 'atm-strike';
        
        // Formatted cell text
        const bidText = isForex ? callBid.toFixed(4) : `$${callBid.toFixed(2)}`;
        const askText = isForex ? callAsk.toFixed(4) : `$${callAsk.toFixed(2)}`;
        const strikeText = isForex ? strike.toFixed(4) : `$${strike.toLocaleString()}`;
        const putBidText = isForex ? putBid.toFixed(4) : `$${putBid.toFixed(2)}`;
        const putAskText = isForex ? putAsk.toFixed(4) : `$${putAsk.toFixed(2)}`;
        
        tr.innerHTML = `
            <td style="color:var(--text-muted);">${callIV}%</td>
            <td>${callVol}</td>
            <td class="option-chain-clickable-cell call-side" onclick="selectOptionStrike(${strike}, 'call', 'buy', ${callAsk}, '${asset}')">${bidText}</td>
            <td class="option-chain-clickable-cell call-side" style="border-right:1px solid var(--border);" onclick="selectOptionStrike(${strike}, 'call', 'buy', ${callAsk}, '${asset}')">${askText}</td>
            <td class="option-chain-strike-col">${strikeText}</td>
            <td class="option-chain-clickable-cell put-side" style="border-left:1px solid var(--border);" onclick="selectOptionStrike(${strike}, 'put', 'buy', ${putAsk}, '${asset}')">${putBidText}</td>
            <td class="option-chain-clickable-cell put-side" onclick="selectOptionStrike(${strike}, 'put', 'buy', ${putAsk}, '${asset}')">${putAskText}</td>
            <td>${putVol}</td>
            <td style="color:var(--text-muted);">${putIV}%</td>
        `;
        bodyEl.appendChild(tr);
    }
}

function selectOptionStrike(strike, optType, action, premium, asset) {
    // Switch to Options Trade Type tab
    AppState.tradeType = 'option';
    
    // Switch active asset if it differs from current selection
    if (asset && asset !== AppState.asset) {
        AppState.asset = asset;
        
        // Dynamically find the market of the asset
        let mkt = 'crypto';
        Object.keys(MARKET_ASSETS).forEach(m => {
            if (MARKET_ASSETS[m][asset]) mkt = m;
        });
        AppState.market = mkt;
        
        const assetSelector = document.getElementById('asset-selector');
        if (assetSelector) {
            assetSelector.value = asset;
        }
        switchAsset();
    }
    
    saveUserSession();
    
    // Highlight Trade options tab
    document.querySelectorAll('.type-tab').forEach(t => {
        if (t.dataset.type === 'option') {
            t.classList.add('active');
        } else {
            t.classList.remove('active');
        }
    });
    
    // Show Options inputs
    document.querySelector('.option-only')?.classList.remove('hidden');
    document.querySelector('.future-only')?.classList.add('hidden');
    document.querySelector('.copy-only')?.classList.add('hidden');
    document.querySelectorAll('.order-inputs-block').forEach(el => el.classList.remove('hidden'));
    document.getElementById('limit-price-block')?.classList.add('hidden');
    document.getElementById('stop-price-block')?.classList.add('hidden');
    document.getElementById('trailing-delta-block')?.classList.add('hidden');
    
    // Bind dropdowns and inputs
    const typeSelector = document.getElementById('option-type');
    const strikeInput = document.getElementById('option-strike');
    
    if (typeSelector) typeSelector.value = optType;
    if (strikeInput) strikeInput.value = strike;
    
    // Set Quantity default to 1 contract
    DOM.orderQty.value = "1.00";
    
    // Refresh Coach advise
    runAICoachAnalytics();
    updateUI();
    
    // Auto switch to Trade sidebar tab so the user can execute!
    switchLeftTab('trade');
    
    const isForex = asset === 'EUR/USD';
    const strikeText = isForex ? strike.toFixed(4) : `$${strike}`;
    const premiumText = isForex ? premium.toFixed(4) : `$${premium.toFixed(2)}`;
    showToast(`Loaded ${optType.toUpperCase()} strike ${strikeText} premium ${premiumText} inside order ticket!`);
}
window.selectOptionStrike = selectOptionStrike;

// --- 3. TRADE JOURNAL AI & PORTFOLIO STATS ---
function triggerTradeJournalRefresh() {
    renderTradeJournal();
}
window.triggerTradeJournalRefresh = triggerTradeJournalRefresh;

function renderTradeJournal() {
    const sharpeEl = document.getElementById('analytics-sharpe');
    const sortinoEl = document.getElementById('analytics-sortino');
    const drawdownEl = document.getElementById('analytics-drawdown');
    const riskEl = document.getElementById('analytics-risk-score');
    const insightsBox = document.getElementById('journal-ai-insights-box');
    
    if (!sharpeEl || !sortinoEl || !drawdownEl || !riskEl || !insightsBox) return;
    
    const history = AppState.tradeHistory || [];
    
    if (history.length === 0) {
        sharpeEl.textContent = '0.00';
        sortinoEl.textContent = '0.00';
        drawdownEl.textContent = '0.00%';
        riskEl.textContent = 'Low (0/10)';
        insightsBox.innerHTML = `
            <div class="journal-ai-tips">
                <div class="journal-ai-tip-item">No active realized trade records found. Execute and close simulated sandbox trades to generate AI diagnostic reviews!</div>
            </div>
        `;
        return;
    }
    
    // Calculate Sharpe, Sortino ratios based on realizations
    const returns = history.map(t => t.pnl);
    const winRate = (returns.filter(p => p > 0).length / returns.length) * 100;
    
    let avgReturn = returns.reduce((a,b) => a+b, 0) / returns.length;
    let variance = returns.reduce((a,b) => a + Math.pow(b - avgReturn, 2), 0) / returns.length;
    let stdDev = Math.sqrt(variance) || 1;
    
    // Simulated risk-free offsets
    let sharpe = (avgReturn / stdDev) * 1.5;
    if (isNaN(sharpe)) sharpe = 0;
    
    const downReturns = returns.filter(p => p < 0);
    let downVariance = downReturns.reduce((a,b) => a + Math.pow(b - avgReturn, 2), 0) / (downReturns.length || 1);
    let downStdDev = Math.sqrt(downVariance) || 1;
    let sortino = (avgReturn / downStdDev) * 1.8;
    if (isNaN(sortino)) sortino = 0;
    
    // Calculate Drawdown offsets
    let maxDrawdown = 0;
    let peak = 100000;
    let balance = 100000;
    returns.forEach(r => {
        balance += r;
        if (balance > peak) peak = balance;
        let dd = ((peak - balance) / peak) * 100;
        if (dd > maxDrawdown) maxDrawdown = dd;
    });
    
    sharpeEl.textContent = sharpe.toFixed(2);
    sortinoEl.textContent = sortino.toFixed(2);
    drawdownEl.textContent = `${maxDrawdown.toFixed(2)}%`;
    
    let riskStr = "Moderate (4/10)";
    if (maxDrawdown > 20) riskStr = "High (8/10) ⚠️";
    if (maxDrawdown < 5) riskStr = "Very Low (1/10) 🛡️";
    riskEl.textContent = riskStr;
    
    // Automated diagnostic remarks
    let tips = `
        <div class="journal-ai-tip-item"><strong>Win Rate Analytics:</strong> Realized win rate equals <strong style="color:var(--buy);">${winRate.toFixed(0)}%</strong> over ${returns.length} completed lines.</div>
        <div class="journal-ai-tip-item"><strong>Best Trading Window:</strong> Peak volatility matching occurs during <strong>14:00 - 18:00 UTC</strong> scalping blocks.</div>
        <div class="journal-ai-tip-item"><strong>Profitable Setups:</strong> High momentum technical layouts utilizing EMA Crossovers show premium yield performance.</div>
    `;
    
    if (maxDrawdown > 15) {
        tips += `<div class="journal-ai-tip-item" style="color:var(--sell);"><strong>Critical Mistake Alert:</strong> Elevated maximum drawdown (${maxDrawdown.toFixed(1)}%) indicates excessive contract sizes. Lower leverage below 20x.</div>`;
    } else {
        tips += `<div class="journal-ai-tip-item" style="color:var(--buy);"><strong>P&L Control:</strong> Excellent drawdown limits indicating solid position risk parameters. Keep maintaining tight Stop Loss bounds.</div>`;
    }
    
    insightsBox.innerHTML = `<div class="journal-ai-tips">${tips}</div>`;
    if (typeof renderCustomStrategiesList === 'function') {
        renderCustomStrategiesList();
    }
}

// --- 4. HISTORICAL REPLAY MODE PLAYBACK ENGINE ---
function toggleReplayMode() {
    const btn = document.getElementById('btn-toggle-replay-mode');
    const badge = document.getElementById('replay-active-badge');
    const playbackBar = document.getElementById('replay-playback-bar');
    
    if (!btn) return;
    
    AppState.isReplayMode = !AppState.isReplayMode;
    
    if (AppState.isReplayMode) {
        btn.textContent = "Exit Replay Mode";
        btn.style.backgroundColor = "var(--sell)";
        if (badge) badge.classList.remove('hidden');
        if (playbackBar) playbackBar.classList.remove('hidden');
        
        // Hydrate 2020 Replay Mode
        AppState.replayIndex = 0;
        AppState.replayBalance = 100000;
        AppState.replayPositions = [];
        
        // Generate historical mock price data
        AppState.replayDataset = [];
        let cur = 9500; // BTC price in Jan 2020
        let date = new Date('2020-01-01T00:00:00Z');
        for (let i = 0; i < 150; i++) {
            let change = (Math.random() - 0.48) * 150;
            let o = cur;
            let c = cur + change;
            let h = Math.max(o, c) + Math.random() * 50;
            let l = Math.min(o, c) - Math.random() * 50;
            AppState.replayDataset.push({
                time: date.getTime() / 1000,
                open: o,
                high: h,
                low: l,
                close: c,
                volume: 50 + Math.random() * 100
            });
            cur = c;
            date.setDate(date.getDate() + 1);
        }
        
        // Pause active simulated updates
        showToast("Historical 2020 Replay Mode activated. Live chart suspended.");
        replayRewind();
        
        // Unlock backtesting achievement
        triggerUnlockAchievement('backtesting_expert');
    } else {
        btn.textContent = "Activate Replay Mode";
        btn.style.backgroundColor = "var(--brand)";
        if (badge) badge.classList.add('hidden');
        if (playbackBar) playbackBar.classList.add('hidden');
        
        if (AppState.replayActiveTimer) {
            clearInterval(AppState.replayActiveTimer);
            AppState.replayActiveTimer = null;
        }
        
        showToast("Replay Mode closed. Restoring live simulation feeds.");
        switchAsset(); // Restores live data on the chart!
    }
}
window.toggleReplayMode = toggleReplayMode;

function replayRewind() {
    AppState.replayIndex = 20; // Start with 20 historical bars
    AppState.replayBalance = 100000;
    AppState.replayPositions = [];
    
    if (AppState.replayActiveTimer) {
        clearInterval(AppState.replayActiveTimer);
        AppState.replayActiveTimer = null;
    }
    
    const playBtn = document.getElementById('btn-replay-play');
    if (playBtn) playBtn.textContent = "▶ Play";
    
    // Clear series and render initial 20 replay bars
    if (candleSeries) {
        const initialData = AppState.replayDataset.slice(0, AppState.replayIndex);
        candleSeries.setData(initialData);
        chart.timeScale().fitContent();
    }
    
    updateReplayDateIndicator();
}
window.replayRewind = replayRewind;

function updateReplayDateIndicator() {
    const ind = document.getElementById('replay-date-indicator');
    const timeline = document.getElementById('replay-timeline');
    
    if (ind && AppState.replayDataset[AppState.replayIndex - 1]) {
        const timeSec = AppState.replayDataset[AppState.replayIndex - 1].time;
        const dateObj = new Date(timeSec * 1000);
        ind.textContent = `Date: ${dateObj.toISOString().split('T')[0]}`;
    }
    
    if (timeline) {
        timeline.value = ((AppState.replayIndex / AppState.replayDataset.length) * 100).toFixed(0);
    }
}

function replayStepForward() {
    if (AppState.replayIndex >= AppState.replayDataset.length) {
        showToast("Replay dataset limit reached! Click Reset.");
        if (AppState.replayActiveTimer) {
            clearInterval(AppState.replayActiveTimer);
            AppState.replayActiveTimer = null;
        }
        return;
    }
    
    const nextBar = AppState.replayDataset[AppState.replayIndex];
    if (candleSeries) {
        candleSeries.update(nextBar);
    }
    
    AppState.currentPrice = nextBar.close;
    AppState.replayIndex++;
    updateReplayDateIndicator();
    
    // Perform simulated replay order evaluations
    evaluateReplayPositionTicks(nextBar.close);
    updateUI();
}
window.replayStepForward = replayStepForward;

function toggleReplayPlayback() {
    const playBtn = document.getElementById('btn-replay-play');
    const speedEl = document.getElementById('replay-speed-selector');
    
    if (AppState.replayActiveTimer) {
        // Pause
        clearInterval(AppState.replayActiveTimer);
        AppState.replayActiveTimer = null;
        if (playBtn) playBtn.textContent = "▶ Play";
    } else {
        // Play
        const speed = parseInt(speedEl?.value) || 1000;
        if (playBtn) playBtn.textContent = "⏸ Pause";
        AppState.replayActiveTimer = setInterval(() => {
            replayStepForward();
        }, speed);
    }
}
window.toggleReplayPlayback = toggleReplayPlayback;

function handleReplayTimelineShift(val) {
    const pct = parseInt(val) / 100;
    const targetIdx = Math.max(20, Math.floor(AppState.replayDataset.length * pct));
    
    AppState.replayIndex = targetIdx;
    
    if (candleSeries) {
        const sliced = AppState.replayDataset.slice(0, AppState.replayIndex);
        candleSeries.setData(sliced);
    }
    
    updateReplayDateIndicator();
}
window.handleReplayTimelineShift = handleReplayTimelineShift;

function evaluateReplayPositionTicks(price) {
    if (!AppState.isReplayMode) return;
    
    let changed = false;
    for (let i = AppState.replayPositions.length - 1; i >= 0; i--) {
        const pos = AppState.replayPositions[i];
        let triggered = false;
        let triggerType = "";
        let fillPrice = price;
        
        // Calculate liquidation price
        let liqPrice = 0;
        if (pos.type === 'future') {
            let liqDiff = pos.entryPrice / pos.leverage;
            liqPrice = pos.side === 'buy' ? pos.entryPrice - liqDiff : pos.entryPrice + liqDiff;
        }
        
        // Check liquidation
        if (pos.type === 'future') {
            if (pos.side === 'buy' && price <= liqPrice) {
                triggered = true;
                triggerType = "Liquidation";
                fillPrice = liqPrice;
            } else if (pos.side === 'sell' && price >= liqPrice) {
                triggered = true;
                triggerType = "Liquidation";
                fillPrice = liqPrice;
            }
        }
        
        // Check Stop Loss
        if (!triggered && pos.sl) {
            if (pos.side === 'buy' && price <= pos.sl) {
                triggered = true;
                triggerType = "Stop Loss";
                fillPrice = pos.sl;
            } else if (pos.side === 'sell' && price >= pos.sl) {
                triggered = true;
                triggerType = "Stop Loss";
                fillPrice = pos.sl;
            }
        }
        
        // Check Take Profit
        if (!triggered && pos.tp) {
            if (pos.side === 'buy' && price >= pos.tp) {
                triggered = true;
                triggerType = "Take Profit";
                fillPrice = pos.tp;
            } else if (pos.side === 'sell' && price <= pos.tp) {
                triggered = true;
                triggerType = "Take Profit";
                fillPrice = pos.tp;
            }
        }
        
        if (triggered) {
            const pnl = calculatePNL(pos, fillPrice);
            let initialMargin = 0;
            if (pos.type === 'spot') initialMargin = pos.qty * pos.entryPrice;
            else if (pos.type === 'future') initialMargin = (pos.qty * pos.entryPrice) / pos.leverage;
            else if (pos.type === 'option') initialMargin = pos.qty * fillPrice * 0.05;
            
            AppState.replayBalance += (initialMargin + pnl);
            
            // Log to trade history
            AppState.tradeHistory.push({
                id: pos.id,
                closeId: Date.now(),
                symbol: pos.symbol,
                type: pos.type,
                side: pos.side,
                qty: pos.qty,
                entryPrice: pos.entryPrice,
                exitPrice: fillPrice,
                pnl: pnl,
                note: `Replay ${triggerType}`
            });
            
            AppState.replayPositions.splice(i, 1);
            changed = true;
            showToast(`[Replay ${triggerType}] Closed ${pos.side.toUpperCase()} ${pos.qty} ${pos.symbol} @ $${fillPrice.toFixed(2)}`);
        }
    }
    
    if (changed) {
        updateUI();
        saveUserSession();
    }
}

// --- 5. WEEKLY COMPETITIONS TOURNAMENT ARENA ---
function toggleTournamentMode() {
    const switcher = document.getElementById('btn-toggle-tournament-mode');
    const status = document.getElementById('tournament-active-status');
    const userDisplay = document.getElementById('user-display');
    const leaderboardRank = document.getElementById('user-leaderboard-rank');
    
    if (!switcher || !status) return;
    
    AppState.isTournamentMode = !AppState.isTournamentMode;
    
    if (AppState.isTournamentMode) {
        switcher.textContent = "Exit Tournament Mode";
        switcher.style.backgroundColor = "var(--sell)";
        status.textContent = "$100,000 Tournament Active";
        status.style.color = "var(--ai-accent)";
        
        // Hydrate isolated Tournament portfolio
        showToast("Switched to Weekly $100,000 USD Tournament Arena!");
        
        // Render Competition leaderboards
        renderTournamentLeaderboard();
        
        // Adjust main balance metrics to show INR Symbol
        updateUI();
    } else {
        switcher.textContent = "Enter Tournament Arena";
        switcher.style.backgroundColor = "var(--brand)";
        status.textContent = "Sandbox Mode";
        status.style.color = "var(--sell)";
        
        showToast("Returned to Sandbox Portfolio!");
        updateUI();
    }
}
window.toggleTournamentMode = toggleTournamentMode;

const TOURNAMENT_RANKINGS = [
    { rank: 1, name: "🏆 Marcus_Arbitrage (USD)", equity: 184500, roi: "+84.5%", winrate: "89%", focus: "Spatial Arbitrage" },
    { rank: 2, name: "🥈 Trader_Grandmaster (USD)", equity: 142000, roi: "+42.0%", winrate: "81%", focus: "Options Hedging" },
    { rank: 3, name: "🥉 Quant_Alpha_Pro (USD)", equity: 112000, roi: "+12.0%", winrate: "76%", focus: "Trend Rider" }
];

const COUNTRY_LEADERBOARD = [
    { rank: 1, name: "🇺🇸 United States", roi: "+34.6%" },
    { rank: 2, name: "🇬🇧 United Kingdom", roi: "+28.2%" },
    { rank: 3, name: "🇮🇳 India", roi: "+25.7%" },
    { rank: 4, name: "🇩🇪 Germany", roi: "+18.4%" },
    { rank: 5, name: "🇯🇵 Japan", roi: "+12.1%" }
];

const DAILY_LEADERBOARD_MOCK = [
    { rank: 1, name: "🏆 OptionQueen (USD)", equity: 135400, roi: "+35.4%", winrate: "95%", focus: "Volatility" },
    { rank: 2, name: "🥈 ScalpKing (USD)", equity: 121000, roi: "+21.0%", winrate: "88%", focus: "Grid Scalp" },
    { rank: 3, name: "🥉 TrendRider (USD)", equity: 109200, roi: "+9.2%", winrate: "80%", focus: "Trend" }
];

const MONTHLY_LEADERBOARD_MOCK = [
    { rank: 1, name: "🏆 MacroJeff (USD)", equity: 284500, roi: "+184.5%", winrate: "78%", focus: "Macro" },
    { rank: 2, name: "🥈 Marcus_Arbitrage (USD)", equity: 198000, roi: "+98.0%", winrate: "82%", focus: "Arbitrage" },
    { rank: 3, name: "🥉 Trader_Grandmaster (USD)", equity: 154000, roi: "+54.0%", winrate: "75%", focus: "Hedging" }
];

function updateLeaderboardPeriod() {
    const select = document.getElementById('leaderboard-period-select');
    const headers = document.getElementById('leaderboard-headers');
    if (!select || !headers) return;
    
    const val = select.value;
    if (val === 'country') {
        headers.innerHTML = `
            <th style="padding:3px;">Rank</th>
            <th style="padding:3px;">Country</th>
            <th style="padding:3px; text-align:right;">Avg ROI</th>
        `;
    } else {
        headers.innerHTML = `
            <th style="padding:3px;">Rank</th>
            <th style="padding:3px;">Competitor</th>
            <th style="padding:3px; text-align:right;">ROI</th>
        `;
    }
    
    renderTournamentLeaderboard();
}

function renderTournamentLeaderboard() {
    const bodyEl = document.getElementById('tournament-leaderboard-body');
    const userRankEl = document.getElementById('user-leaderboard-rank');
    if (!bodyEl) return;
    
    bodyEl.innerHTML = '';
    
    const periodSelect = document.getElementById('leaderboard-period-select');
    const type = periodSelect ? periodSelect.value : 'weekly';
    
    let totalUnrealized = 0;
    if (AppState.isTournamentMode) {
        AppState.tournamentPositions.forEach(p => {
            const cp = getSafeAssetPrice(p.symbol);
            totalUnrealized += calculatePNL(p, cp);
        });
    }
    const userEquity = AppState.isTournamentMode ? (AppState.tournamentBalance + totalUnrealized) : 100000;
    const roiVal = (((userEquity - 100000) / 100000) * 100).toFixed(1);
    const userRoiStr = `${roiVal >= 0 ? '+' : ''}${roiVal}%`;
    
    if (type === 'country') {
        const sorted = COUNTRY_LEADERBOARD.map(c => ({ ...c }));
        
        sorted.push({
            rank: 99,
            name: `👤 You (🇮🇳 India)`,
            roi: userRoiStr
        });
        
        sorted.sort((a,b) => parseFloat(b.roi) - parseFloat(a.roi));
        
        sorted.forEach((item, i) => {
            item.rank = i + 1;
            const tr = document.createElement('tr');
            if (item.name.includes("You")) {
                tr.style.background = "rgba(255, 193, 7, 0.1)";
                tr.style.borderLeft = "2px solid var(--ai-accent)";
                if (userRankEl) userRankEl.textContent = `My Country Rank: #${item.rank}`;
            }
            
            tr.innerHTML = `
                <td><strong>#${item.rank}</strong></td>
                <td>${item.name}</td>
                <td style="text-align:right; font-family:'JetBrains Mono'; font-weight:bold; color:${parseFloat(item.roi) >= 0 ? 'var(--buy)' : 'var(--sell)'};">${item.roi}</td>
            `;
            bodyEl.appendChild(tr);
        });
        return;
    }
    
    let sourceStandings = TOURNAMENT_RANKINGS;
    if (type === 'daily') {
        sourceStandings = DAILY_LEADERBOARD_MOCK;
    } else if (type === 'monthly') {
        sourceStandings = MONTHLY_LEADERBOARD_MOCK;
    }
    
    const sorted = sourceStandings.map(x => ({ ...x }));
    const userIndex = sorted.findIndex(x => x.name.includes("(You)"));
    if (userIndex >= 0) sorted.splice(userIndex, 1);
    
    sorted.push({
        rank: 99,
        name: `👤 ${AppState.currentUser || "Guest"} (You)`,
        equity: userEquity,
        roi: userRoiStr,
        winrate: "0%"
    });
    
    sorted.sort((a,b) => b.equity - a.equity);
    
    sorted.forEach((trader, i) => {
        trader.rank = i + 1;
        const tr = document.createElement('tr');
        if (trader.name.includes("(You)")) {
            tr.style.background = "rgba(255, 193, 7, 0.1)";
            tr.style.borderLeft = "2px solid var(--ai-accent)";
            if (userRankEl) {
                userRankEl.textContent = `Rank #${trader.rank}`;
            }
            if (trader.rank === 1) {
                triggerUnlockAchievement('wall_street_legend');
            }
        }
        
        tr.innerHTML = `
            <td><strong>#${trader.rank}</strong></td>
            <td>${trader.name}</td>
            <td style="text-align:right; font-family:'JetBrains Mono'; font-weight:bold; color:${parseFloat(trader.roi) >= 0 ? 'var(--buy)' : 'var(--sell)'};">${trader.roi} <span style="font-size:8px; color:var(--text-muted); font-weight:normal;">($${Math.round(trader.equity).toLocaleString()})</span></td>
        `;
        bodyEl.appendChild(tr);
    });
}

window.updateLeaderboardPeriod = updateLeaderboardPeriod;

// --- 6. COMMUNITY SOCIAL FEED & POST INTEGRATION ---
const MOCK_SOCIAL_POSTS = [
    { id: 1, user: "Sofia_Quant", avatar: "👩‍💻", time: "10 mins ago", content: "EMA golden cross spotted on active BTC/USDT 15m lines. Placing Limit order to join support zones.", likes: 14, comments: 2, liked: false, attachment: "BTC/USDT LIMIT BUY @ $68,450.00", commentsList: ["Sofia_Quant: RSI looks strong too", "QuantumFlow: Nice entry point!"], showComments: false },
    { id: 2, user: "Sofia_Quant", avatar: "👩‍💻", time: "1h ago", content: "Option strike Greeks suggest implied volatilities are heavily oversold under 35%. Longing Call Options strike $69,000.", likes: 28, comments: 1, liked: false, attachment: "BTC CALL OPTION strike $69,000", commentsList: ["CryptoWhale: Premium is quite cheap indeed"], showComments: false },
    { id: 3, user: "QuantumFlow (Master Bot)", avatar: "🤖", time: "2h ago", content: "Successfully executed dynamic scalp on SOL/USDT spot layers! ROI index continues tracking +38.2% monthly performance.", likes: 92, comments: 3, liked: true, attachment: "SOL/USDT POSITION realized +$821.50", commentsList: ["Sofia_Quant: Incredible win rate!", "Guest: Is it automated?", "Sofia_Quant: Replicating this bot now"], showComments: false }
];

let currentSocialUploadedImage = null;

function triggerFeedImageUpload() {
    const fileInput = document.getElementById('social-post-image-file');
    if (fileInput) fileInput.click();
}
window.triggerFeedImageUpload = triggerFeedImageUpload;

function handleFeedImageSelect(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            currentSocialUploadedImage = e.target.result;
            const preview = document.getElementById('social-image-preview');
            const wrap = document.getElementById('social-image-preview-wrap');
            if (preview && wrap) {
                preview.src = e.target.result;
                wrap.classList.remove('hidden');
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}
window.handleFeedImageSelect = handleFeedImageSelect;

function clearFeedImage() {
    currentSocialUploadedImage = null;
    const preview = document.getElementById('social-image-preview');
    const wrap = document.getElementById('social-image-preview-wrap');
    const fileInput = document.getElementById('social-post-image-file');
    if (preview && wrap) {
        preview.src = '';
        wrap.classList.add('hidden');
    }
    if (fileInput) fileInput.value = '';
}
window.clearFeedImage = clearFeedImage;

function renderSocialFeed() {
    const listEl = document.getElementById('social-feed-posts');
    if (!listEl) return;
    
    listEl.innerHTML = '';
    
    MOCK_SOCIAL_POSTS.forEach(post => {
        const card = document.createElement('div');
        card.className = 'social-post-card';
        
        const attachHTML = post.attachment ? `<div class="social-trade-attachment" style="margin-top:6px;"><span>📎 Attachment:</span><strong>${post.attachment}</strong></div>` : '';
        const imgHTML = post.image ? `<div class="social-post-image" style="margin: 8px 0; border-radius:6px; overflow:hidden; border:1px solid var(--border);"><img src="${post.image}" style="width:100%; max-height:200px; object-fit:cover;"></div>` : '';
        
        let commentsHTML = '';
        if (post.showComments) {
            commentsHTML = `
                <div class="social-comments-section" style="margin-top:10px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.06); display:flex; flex-direction:column; gap:6px;">
                    <div class="social-comments-list" style="display:flex; flex-direction:column; gap:4px; max-height:120px; overflow-y:auto;">
            `;
            
            if (post.commentsList && post.commentsList.length > 0) {
                post.commentsList.forEach(c => {
                    const parts = c.split(': ');
                    const user = parts[0];
                    const text = parts.slice(1).join(': ');
                    commentsHTML += `
                        <div class="social-comment-item" style="font-size:9.5px; background:rgba(0,0,0,0.15); padding:4px 8px; border-radius:4px; color:#fff;">
                            <strong style="color:var(--brand);">${user}:</strong> ${text}
                        </div>
                    `;
                });
            } else {
                commentsHTML += `<div style="font-size:9.5px; color:var(--text-muted); font-style:italic;">No comments yet.</div>`;
            }
            
            commentsHTML += `
                    </div>
                    <div style="display:flex; gap:4px; margin-top:4px;">
                        <input type="text" id="comment-input-${post.id}" placeholder="Write a comment..." style="flex:1; background:rgba(0,0,0,0.3); border:1px solid var(--border); border-radius:4px; padding:3px; color:#fff; font-size:9px;">
                        <button onclick="addPostComment(${post.id})" style="background:var(--brand); border:none; border-radius:4px; color:#fff; font-size:9.5px; padding:3px 8px; cursor:pointer;">Reply</button>
                    </div>
                </div>
            `;
        }
        
        const isOwnPost = post.user && post.user.endsWith('(You)');
        const deleteBtnHTML = isOwnPost ? `<span class="social-action-btn delete-btn" onclick="deleteSocialPost(${post.id})" style="color:var(--sell); margin-left:auto; cursor:pointer;">🗑️ Delete</span>` : '';

        card.innerHTML = `
            <div class="social-post-header">
                <div class="social-user-profile">
                    <div class="social-user-avatar">${post.avatar}</div>
                    <span class="social-user-name">${post.user}</span>
                </div>
                <span class="social-post-time">${post.time}</span>
            </div>
            <div class="social-post-content">${post.content}</div>
            ${imgHTML}
            ${attachHTML}
            <div class="social-post-actions">
                <span class="social-action-btn ${post.liked ? 'liked' : ''}" onclick="togglePostLike(${post.id})">👍 ${post.likes} Likes</span>
                <span class="social-action-btn" onclick="togglePostComments(${post.id})">💬 ${post.comments} Comments</span>
                ${deleteBtnHTML}
            </div>
            ${commentsHTML}
        `;
        listEl.appendChild(card);
    });
}

function togglePostComments(id) {
    const post = MOCK_SOCIAL_POSTS.find(p => p.id === id);
    if (!post) return;
    post.showComments = !post.showComments;
    renderSocialFeed();
}
window.togglePostComments = togglePostComments;

function addPostComment(id) {
    const input = document.getElementById(`comment-input-${id}`);
    if (!input || !input.value.trim()) return;
    const post = MOCK_SOCIAL_POSTS.find(p => p.id === id);
    if (!post) return;
    
    if (!post.commentsList) post.commentsList = [];
    post.commentsList.push(`${AppState.currentUser || "Guest"}: ${input.value.trim()}`);
    post.comments = post.commentsList.length;
    renderSocialFeed();
}
window.addPostComment = addPostComment;

function togglePostLike(id) {
    const post = MOCK_SOCIAL_POSTS.find(p => p.id === id);
    if (!post) return;
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    renderSocialFeed();
}
window.togglePostLike = togglePostLike;

function publishCustomSocialPost() {
    const input = document.getElementById('social-post-input');
    if (!input || !input.value.trim()) {
        showToast("Please enter post text content!");
        return;
    }
    
    const postText = input.value.trim();
    const imgData = currentSocialUploadedImage;
    clearFeedImage();
    
    const newPost = {
        id: Date.now(),
        user: `${AppState.currentUser || "Guest"} (You)`,
        avatar: "👤",
        time: "Just now",
        content: postText,
        likes: 0,
        comments: 0,
        liked: false,
        attachment: null,
        image: imgData,
        commentsList: [],
        showComments: false
    };
    
    MOCK_SOCIAL_POSTS.unshift(newPost);
    input.value = '';
    renderSocialFeed();
    showToast("Post published to ForgeSocial feed!");
}
window.publishCustomSocialPost = publishCustomSocialPost;

function shareTradeToCommunity(pnlVal, symbol, side) {
    const newPost = {
        id: Date.now(),
        user: `${AppState.currentUser || "Guest"} (You)`,
        avatar: "👤",
        time: "Just now",
        content: `Just closed active ${side.toUpperCase()} line on ${symbol} simulated trading! Analysis indicators worked exceptionally. Realized net return details attached below.`,
        likes: 1,
        comments: 0,
        liked: true,
        attachment: `${symbol} Realized P&L: ${pnlVal >= 0 ? '+' : ''}$${pnlVal.toFixed(2)}`
    };
    
    MOCK_SOCIAL_POSTS.unshift(newPost);
    renderSocialFeed();
    showToast(`Shared realized ${symbol} trade specifications directly to ForgeSocial!`);
}
window.shareTradeToCommunity = shareTradeToCommunity;

// --- 7. UNLOCKABLE LESSON ACADEMY CONTROLLER ---
const LESSONS_DATABASE = {
    candlestick: {
        title: "Lesson 1: Candlestick Patterns",
        slides: [
            "Candlesticks paint pricing battles. A Hammer pattern features a long lower shadow showing bulls rejected bears near lows.",
            "An Engulfing pattern fully wraps around preceding bars, showing a sudden, violent momentum reversal. Hammer reversions provide high-edge entries."
        ],
        quiz: {
            question: "Which of the following describes a bullish Hammer reversal candlestick?",
            options: [
                "A tiny body at the bottom with a long upper wick",
                "A small body at the top with a long lower shadow (Correct)",
                "An equal shadow on both sides of the candlestick body",
                "A giant flat bar with zero wicks"
            ],
            answerIdx: 1
        }
    },
    structure: {
        title: "Lesson 2: Market Structure",
        slides: [
            "Markets fluctuate in trends. Bullish structure creates Higher Highs (HH) and Higher Lows (HL). Breakouts happen when HH zones breach.",
            "Bearish structure shifts into Lower Highs (LH) and Lower Lows (LL). Support zones represent buy orders, resistance shows sell orders."
        ],
        quiz: {
            question: "In standard bullish market structure, what visual pattern characterizes the trend?",
            options: [
                "Lower Highs and Lower Lows",
                "Higher Highs and Higher Lows (Correct)",
                "Equal peaks and flat distributions",
                "Increasing gaps between volume scales"
            ],
            answerIdx: 1
        }
    },
    options_basics: {
        title: "Lesson 3: Options Basics",
        slides: [
            "Options are derivatives. A Call Option grants buyers rights to purchase assets at strike prices. Puts grant rights to sell.",
            "Premiums are option costs. Buyers pay premiums to leverage positions without risk of liquidations. Expirations decay premiums over time."
        ],
        quiz: {
            question: "What contract right does a Put Option buyer acquire upon paying strike premium?",
            options: [
                "The right to sell underlying assets at the strike price (Correct)",
                "The right to purchase underlying assets at the strike price",
                "The obligation to liquidate active spot positions immediately",
                "The asset dividend claim vector"
            ],
            answerIdx: 0
        }
    },
    risk_mgmt: {
        title: "Lesson 4: Risk Management Sizing",
        slides: [
            "Risk rules ensure survival. Sizing ensures you never blow accounts. Risking 1-2% total equity per trade preserves capital longevity.",
            "Drawdown management halts trading during streaks of losses. Setting clear risk parameters prevents emotional decision overshoots."
        ],
        quiz: {
            question: "What is the industry-recommended maximum capital percentage to risk on a single simulated trade?",
            options: [
                "20% to 30% of total portfolio equity",
                "1% to 2% of total portfolio equity (Correct)",
                "50% of available cash reserves",
                "100% of maximum leverage margin"
            ],
            answerIdx: 1
        }
    },
    indicators: {
        title: "Lesson 5: Technical Indicators",
        slides: [
            "Technical indicators calculate price statistics. Moving averages (EMA) smooth trends. Relative Strength Index (RSI) evaluates overbought (>70) or oversold (<30) thresholds.",
            "MACD highlights changes in momentum strength and direction through moving average crossovers. Combining indicators yields confirmation before placing orders."
        ],
        quiz: {
            question: "Which indicator helps identify if an asset is overbought or oversold within a scale of 0 to 100?",
            options: [
                "Exponential Moving Average (EMA)",
                "Moving Average Convergence Divergence (MACD)",
                "Relative Strength Index (RSI) (Correct)",
                "Volume Weighted Average Price (VWAP)"
            ],
            answerIdx: 2
        }
    },
    leverage: {
        title: "Lesson 6: Leverage & Margin",
        slides: [
            "Leverage multiplies trading power using borrowed margin. Trading with 10x leverage increases both potential profits and potential losses by ten times.",
            "Liquidation occurs when position losses wipe out the allocated initial margin. Keeping leverage low and using stop losses prevents capital liquidations."
        ],
        quiz: {
            question: "What is the primary risk of using high leverage in simulated futures trading?",
            options: [
                "Guaranteed interest payouts on cash balances",
                "Higher probability of contract premium decay",
                "Accelerated margin loss leading to rapid liquidation (Correct)",
                "Permanent locking of spot wallets"
            ],
            answerIdx: 2
        }
    }
};

let activeLessonId = null;
let activeLessonSlideIdx = 0;
let activeLessonSelectedOpt = null;

function openAcademyLesson(lessonId) {
    const progress = AppState.lessonProgress || { candlestick: false, structure: false, options_basics: false, risk_mgmt: false, indicators: false, leverage: false };
    
    // Check locked requirements
    if (lessonId === 'structure' && !progress.candlestick) {
        showToast("Complete Lesson 1 first!");
        return;
    }
    if (lessonId === 'options_basics' && !progress.structure) {
        showToast("Complete Lesson 2 first!");
        return;
    }
    if (lessonId === 'risk_mgmt' && !progress.options_basics) {
        showToast("Complete Lesson 3 first!");
        return;
    }
    if (lessonId === 'indicators' && !progress.risk_mgmt) {
        showToast("Complete Lesson 4 first!");
        return;
    }
    if (lessonId === 'leverage' && !progress.indicators) {
        showToast("Complete Lesson 5 first!");
        return;
    }
    
    activeLessonId = lessonId;
    activeLessonSlideIdx = 0;
    activeLessonSelectedOpt = null;
    
    renderAcademyLessonSlide();
}
window.openAcademyLesson = openAcademyLesson;

function renderAcademyLessonSlide() {
    const lesson = LESSONS_DATABASE[activeLessonId];
    if (!lesson) return;
    
    const modal = document.getElementById('quiz-overlay-modal');
    const title = document.getElementById('quiz-modal-title');
    const question = document.getElementById('quiz-modal-question');
    const optionsCont = document.getElementById('quiz-modal-options');
    const feedback = document.getElementById('quiz-modal-msg');
    
    if (modal && title && question && optionsCont) {
        title.textContent = lesson.title;
        optionsCont.innerHTML = '';
        if (feedback) feedback.className = 'quiz-modal-feedback hidden';
        
        const slides = lesson.slides;
        if (activeLessonSlideIdx < slides.length) {
            // Render text slides
            question.textContent = slides[activeLessonSlideIdx];
            
            const nextBtn = document.createElement('button');
            nextBtn.className = 'quiz-action-btn-card';
            nextBtn.style.width = '100%';
            nextBtn.style.padding = '8px';
            nextBtn.textContent = activeLessonSlideIdx === slides.length - 1 ? "Proceed to Lesson Check" : "Next Concept";
            
            nextBtn.addEventListener('click', () => {
                activeLessonSlideIdx++;
                renderAcademyLessonSlide();
            });
            optionsCont.appendChild(nextBtn);
            
            // Adjust submit button
            const submitBtn = document.getElementById('quiz-modal-submit-btn');
            if (submitBtn) submitBtn.style.display = 'none';
        } else {
            // Render quiz slide
            question.textContent = lesson.quiz.question;
            
            lesson.quiz.options.forEach((opt, idx) => {
                const cleanOpt = opt.replace(" (Correct)", "");
                const card = document.createElement('div');
                card.className = 'quiz-option-card';
                card.innerHTML = `
                    <input type="radio" name="lesson-option" id="l-opt-${idx}" value="${idx}" style="pointer-events: none;">
                    <label for="l-opt-${idx}" style="pointer-events: none; cursor: pointer;">${cleanOpt}</label>
                `;
                
                card.addEventListener('click', () => {
                    document.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
                    card.classList.add('selected');
                    const radio = card.querySelector('input');
                    if (radio) radio.checked = true;
                    activeLessonSelectedOpt = idx;
                });
                
                optionsCont.appendChild(card);
            });
            
            const submitBtn = document.getElementById('quiz-modal-submit-btn');
            if (submitBtn) {
                submitBtn.style.display = 'block';
                submitBtn.onclick = submitAcademyLessonQuiz;
            }
        }
        
        modal.classList.remove('hidden');
    }
}

function submitAcademyLessonQuiz() {
    if (activeLessonId === null || activeLessonSelectedOpt === null) {
        showToast("Please select an option!");
        return;
    }
    
    const lesson = LESSONS_DATABASE[activeLessonId];
    const feedback = document.getElementById('quiz-modal-msg');
    if (!lesson || !feedback) return;
    
    feedback.classList.remove('hidden');
    
    if (activeLessonSelectedOpt === lesson.quiz.answerIdx) {
        feedback.textContent = `Correct! Lesson unlocked successfully. XP added, practice capital rewarded, and next path bounds cleared!`;
        feedback.className = 'quiz-modal-feedback correct';
        
        // Mark unlocked
        AppState.lessonProgress[activeLessonId] = true;
        
        // Reward practice capital ($7,500)
        AppState.balance += 7500;
        showToast(`+$7,500 USD Practice Capital Reward added for completing this module!`);
        updateUI();
        saveUserSession();
        
        // Refresh Lesson Academy UI element locks
        refreshLessonAcademyUI();
        
        // Unlock achievement check
        if (activeLessonId === 'candlestick') {
            triggerUnlockAchievement('learning_begins');
        }
        if (AppState.lessonProgress.candlestick && 
            AppState.lessonProgress.structure && 
            AppState.lessonProgress.options_basics && 
            AppState.lessonProgress.risk_mgmt &&
            AppState.lessonProgress.indicators &&
            AppState.lessonProgress.leverage) {
            // Unlocked all lessons!
            triggerUnlockAchievement('institutional_mindset');
        }
        
        setTimeout(() => {
            exitAcademyQuiz();
            showToast(`Lesson completed successfully!`);
            
            // Restore regular submit bindings
            const submitBtn = document.getElementById('quiz-modal-submit-btn');
            if (submitBtn) {
                submitBtn.onclick = submitAcademyQuiz;
            }
        }, 2500);
    } else {
        feedback.textContent = `Incorrect. Re-read slide concepts and select correct details.`;
        feedback.className = 'quiz-modal-feedback incorrect';
    }
}
window.submitAcademyLessonQuiz = submitAcademyLessonQuiz;

function refreshLessonAcademyUI() {
    const progress = AppState.lessonProgress || { candlestick: false, structure: false, options_basics: false, risk_mgmt: false, indicators: false, leverage: false };
    
    Object.keys(progress).forEach(lessonId => {
        const card = document.getElementById(`lesson-${lessonId}`);
        const btn = card?.querySelector('.quiz-action-btn-card');
        
        if (card) {
            if (progress[lessonId]) {
                card.classList.remove('locked');
                const lockOverlay = document.getElementById(`lock-${lessonId}`);
                if (lockOverlay) lockOverlay.remove();
                if (btn) {
                    btn.textContent = "COMPLETED (Review)";
                    btn.className = "quiz-action-btn-card completed-btn";
                    btn.disabled = false;
                }
            } else {
                // Check unlocked locks
                let isLocked = false;
                if (lessonId === 'structure' && !progress.candlestick) isLocked = true;
                if (lessonId === 'options_basics' && !progress.structure) isLocked = true;
                if (lessonId === 'risk_mgmt' && !progress.options_basics) isLocked = true;
                if (lessonId === 'indicators' && !progress.risk_mgmt) isLocked = true;
                if (lessonId === 'leverage' && !progress.indicators) isLocked = true;
                
                if (isLocked) {
                    card.classList.add('locked');
                    let lockOverlay = document.getElementById(`lock-${lessonId}`);
                    if (!lockOverlay) {
                        lockOverlay = document.createElement('div');
                        lockOverlay.id = `lock-${lessonId}`;
                        lockOverlay.style.cssText = "position:absolute; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.75); display:flex; align-items:center; justify-content:center; color:var(--text-muted); font-size:11px; font-weight:600; border-radius:6px; z-index:2; backdrop-filter:blur(1px);";
                        
                        let reqName = "";
                        if (lessonId === 'structure') reqName = "Module 1";
                        if (lessonId === 'options_basics') reqName = "Module 2";
                        if (lessonId === 'risk_mgmt') reqName = "Module 3";
                        if (lessonId === 'indicators') reqName = "Module 4";
                        if (lessonId === 'leverage') reqName = "Module 5";
                        
                        lockOverlay.textContent = `🔒 Locked (Complete ${reqName})`;
                        card.appendChild(lockOverlay);
                    }
                    if (btn) {
                        btn.textContent = "Unlock Lesson";
                        btn.className = "quiz-action-btn-card";
                        btn.disabled = true;
                    }
                } else {
                    card.classList.remove('locked');
                    const lockOverlay = document.getElementById(`lock-${lessonId}`);
                    if (lockOverlay) lockOverlay.remove();
                    if (btn) {
                        btn.textContent = "Start Module";
                        btn.className = "quiz-action-btn-card";
                        btn.disabled = false;
                    }
                }
            }
        }
    });
}

// --- 8. Gamified Achievements UI Tiers ---
function renderAchievementsBoard() {
    const boardEl = document.getElementById('achievements-board');
    if (!boardEl) return;
    
    boardEl.innerHTML = '';
    
    const tiers = ['bronze', 'silver', 'gold', 'platinum', 'diamond', 'legendary'];
    const tierLabels = {
        bronze: '🥉 Bronze Milestones',
        silver: '🥈 Silver Competencies',
        gold: '🥇 Gold Quant Strategies',
        platinum: '💎 Platinum Expert Tiers',
        diamond: '💠 Diamond Elite Geniuses',
        legendary: '👑 Legendary Market Masters'
    };
    
    tiers.forEach(tier => {
        const sec = document.createElement('div');
        sec.className = 'achievement-tier-section';
        
        const badges = ACHIEVEMENTS_DATABASE.filter(a => a.tier === tier);
        let tierUnlockedCount = badges.filter(b => AppState.unlockedAchievements.includes(b.id)).length;
        
        sec.innerHTML = `
            <div class="achievement-tier-header">
                <span>${tierLabels[tier]}</span>
                <span class="user-badge" style="font-size:9.5px; padding:2px 6px; margin-left:auto;">${tierUnlockedCount} / ${badges.length} Unlocked</span>
            </div>
            <div class="achievement-badges-grid">
                ${badges.map(b => {
                    const isUnlocked = AppState.unlockedAchievements.includes(b.id);
                    const lockClass = isUnlocked ? 'unlocked' : '';
                    return `
                        <div class="achievement-badge-card ${tier} ${lockClass}" title="Unlocking rule: ${b.desc}">
                            <div class="achievement-badge-icon">${b.icon}</div>
                            <div class="achievement-badge-name">${b.name}</div>
                            <div class="achievement-badge-desc">${b.desc}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
        boardEl.appendChild(sec);
    });
}

function triggerUnlockAchievement(id) {
    if (AppState.unlockedAchievements.includes(id)) return;
    
    const badge = ACHIEVEMENTS_DATABASE.find(b => b.id === id);
    if (!badge) return;
    
    AppState.unlockedAchievements.push(id);
    saveUserSession();
    
    // UI dynamic toast popups
    showFloatingAchievementToast(badge);
    
    // Refresh board layout
    renderAchievementsBoard();
    
    // Prepend a social feed unlock post!
    const post = {
        id: Date.now(),
        user: `${AppState.currentUser || "Guest"} (You)`,
        avatar: "👤",
        time: "Just now",
        content: `Woohoo! I just unlocked a new quantitative trading ACHIEVEMENT: **${badge.name} (${badge.tier.toUpperCase()})**! Sizing edge continues climbing up.`,
        likes: 5,
        comments: 0,
        liked: true,
        attachment: `🏅 Unlocked: ${badge.name}`
    };
    MOCK_SOCIAL_POSTS.unshift(post);
    renderSocialFeed();
}
window.triggerUnlockAchievement = triggerUnlockAchievement;

function showFloatingAchievementToast(badge) {
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '90px';
    toast.style.left = '20px';
    toast.style.zIndex = '3000';
    toast.style.background = 'linear-gradient(135deg, #161a22 0%, #0b0e14 100%)';
    toast.style.border = `2px solid ${badge.tier === 'legendary' ? '#ff3d00' : badge.tier === 'diamond' ? '#00c853' : badge.tier === 'gold' ? '#ffd700' : '#b6c4ff'}`;
    toast.style.borderRadius = '8px';
    toast.style.padding = '12px 20px';
    toast.style.color = '#fff';
    toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.6)';
    toast.style.display = 'flex';
    toast.style.alignItems = 'center';
    toast.style.gap = '12px';
    toast.style.fontFamily = 'inherit';
    
    toast.innerHTML = `
        <span style="font-size:24px;">${badge.icon}</span>
        <div>
            <div style="font-size:10px; text-transform:uppercase; color:var(--text-muted); font-weight:700;">Achievement Unlocked!</div>
            <strong style="font-size:12px; color:#fff;">${badge.name} (${badge.tier.toUpperCase()})</strong>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Animate and remove
    setTimeout(() => {
        toast.style.transition = 'opacity 0.5s ease';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

function triggerAchievementCheck() {
    const history = AppState.tradeHistory || [];
    const wins = history.filter(t => t.pnl > 0);
    const winRate = history.length > 0 ? (wins.length / history.length) * 100 : 0;
    
    // 1. Bronze checking
    if (history.length >= 1) triggerUnlockAchievement('first_trade');
    if (wins.length >= 1) triggerUnlockAchievement('first_profit');
    
    const uniqueAssets = [...new Set(history.map(t => t.symbol))];
    if (uniqueAssets.length >= 2) triggerUnlockAchievement('rookie_trader');
    if (uniqueAssets.length >= 5) triggerUnlockAchievement('market_explorer');
    
    if (AppState.completedQuizzes && AppState.completedQuizzes.length >= 1) {
        triggerUnlockAchievement('learning_begins');
    }
    
    // 2. Silver checking
    let totalRealized = history.reduce((sum, t) => sum + t.pnl, 0);
    if (totalRealized >= 5000) triggerUnlockAchievement('profit_hunter');
    if (wins.length >= 10) triggerUnlockAchievement('wins_10_club');
    if (AppState.balance >= 150000) triggerUnlockAchievement('portfolio_builder');
    
    if (history.length >= 5 && winRate >= 60) {
        triggerUnlockAchievement('consistent_trader');
    }
    
    // 3. Gold checking
    if (wins.length >= 25) triggerUnlockAchievement('wins_25_club');
    if (totalRealized >= 50000) triggerUnlockAchievement('profit_machine');
    
    const hasBigMom = history.some(t => t.pnl >= 10000);
    if (hasBigMom) triggerUnlockAchievement('momentum_trader');
    
    if (AppState.copiedBot) {
        triggerUnlockAchievement('smart_investor');
    }
    
    // 4. Platinum checking
    if (wins.length >= 50) triggerUnlockAchievement('wins_50_club');
    if (AppState.balance >= 250000) triggerUnlockAchievement('elite_trader');
    if (history.length >= 50) triggerUnlockAchievement('trading_veteran');
    
    const hasHugeMom = history.some(t => t.pnl >= 20000);
    if (hasHugeMom) triggerUnlockAchievement('alpha_generator');
    
    // Winning streak calculator
    let currentStreak = 0;
    let maxStreak = 0;
    history.forEach(t => {
        if (t.pnl > 0) {
            currentStreak++;
            if (currentStreak > maxStreak) maxStreak = currentStreak;
        } else {
            currentStreak = 0;
        }
    });
    if (maxStreak >= 5) triggerUnlockAchievement('trading_champion');
    
    // 5. Diamond checking
    if (wins.length >= 100) triggerUnlockAchievement('wins_100_club');
    if (AppState.balance >= 500000) triggerUnlockAchievement('trading_genius');
    if (AppState.balance >= 750000) triggerUnlockAchievement('portfolio_king');
    if (maxStreak >= 8) triggerUnlockAchievement('consistency_legend');
    if (history.length >= 150) triggerUnlockAchievement('trading_titan');
    
    if (history.length >= 30 && winRate >= 80) {
        triggerUnlockAchievement('market_wizard');
    }
    
    if (AppState.completedQuizzes && AppState.completedQuizzes.length >= 6) {
        triggerUnlockAchievement('institutional_mindset');
    }
    
    // 6. Legendary checking
    if (AppState.balance >= 1000000) triggerUnlockAchievement('king_market');
    if (maxStreak >= 15) triggerUnlockAchievement('trading_immortal');
    if (history.length >= 300) triggerUnlockAchievement('market_conqueror');
    if (totalRealized >= 500000) triggerUnlockAchievement('master_momentum');
    if (totalRealized >= 750000) triggerUnlockAchievement('supreme_investor');
    
    const hasInsaneMom = history.some(t => t.pnl >= 50000);
    if (hasInsaneMom) triggerUnlockAchievement('alpha_king');
    
    if (history.length >= 50 && winRate >= 90) {
        triggerUnlockAchievement('oracle_trader');
    }
    
    // Combined checks
    const goldUnlocked = ACHIEVEMENTS_DATABASE.filter(a => a.tier === 'gold').every(b => AppState.unlockedAchievements.includes(b.id));
    const platUnlocked = ACHIEVEMENTS_DATABASE.filter(a => a.tier === 'platinum').every(b => AppState.unlockedAchievements.includes(b.id));
    if (goldUnlocked && platUnlocked) triggerUnlockAchievement('grandmaster_trader');
    
    if (AppState.unlockedAchievements.length >= 30) {
        triggerUnlockAchievement('omnitrade_legend');
    }
}

// --- OVERRIDE REAL-TIME SYNC ticks AND SAVE SYSTEMS ---

// Extend UI updates to dynamic modules
const originalUpdateUI = updateUI;
updateUI = function() {
    // If Replay Mode is active, redirect display numbers to replay ledgers
    if (AppState.isReplayMode) {
        originalUpdateUI();
        
        const balEl = document.getElementById('nav-balance');
        const eqEl = document.getElementById('nav-equity');
        
        let totalUnrealized = 0;
        DOM.posBody.innerHTML = '';
        
        AppState.replayPositions.forEach(p => {
            const cp = AppState.currentPrice;
            const pnl = calculatePNL(p, cp);
            totalUnrealized += pnl;
            
            let typeStr = p.type.toUpperCase();
            if(p.type === 'future') typeStr += ` (${p.leverage}x)`;
            if(p.type === 'option') typeStr += ` (${p.optType.toUpperCase()})`;
            
            let tpslInfo = [];
            if (p.tp) tpslInfo.push(`TP: $${p.tp}`);
            if (p.sl) tpslInfo.push(`SL: $${p.sl}`);
            if (tpslInfo.length > 0) {
                typeStr += `<br><small style="color:var(--text-muted); font-size:10px;">${tpslInfo.join(' | ')}</small>`;
            }
            
            let liqOrStrike = '--';
            if(p.type === 'future') {
                let liqDiff = p.entryPrice / p.leverage;
                liqOrStrike = p.side === 'buy' ? p.entryPrice - liqDiff : p.entryPrice + liqDiff;
                liqOrStrike = `$${liqOrStrike.toFixed(2)}`;
            }
            if(p.type === 'option') liqOrStrike = `$${p.strike.toFixed(2)}`;
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong style="color:${p.side==='buy'?'var(--buy)':'var(--sell)'}">${p.side.toUpperCase()}</strong> ${p.symbol} <span class="replay-badge" style="background:rgba(255,215,0,0.15); color:#ffd700; font-size:8px; padding:1px 3px; border-radius:3px; font-weight:bold;">⏪ Replay</span></td>
                <td>${typeStr}</td>
                <td>${p.qty}</td>
                <td>$${p.entryPrice.toFixed(2)}</td>
                <td>$${cp.toFixed(2)}</td>
                <td>${liqOrStrike}</td>
                <td class="${pnl >= 0 ? 'pnl-up' : 'pnl-down'}">$${pnl.toFixed(2)}</td>
                <td>
                    <button class="close-btn" onclick="closePosition(${p.id})">Close</button>
                </td>
            `;
            DOM.posBody.appendChild(tr);
        });
        
        if (AppState.replayPositions.length === 0) {
            DOM.posBody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--text-muted)">No open positions</td></tr>`;
        }
        
        const displayBalance = AppState.replayBalance;
        const displayEquity = AppState.replayBalance + totalUnrealized;
        
        DOM.balance.textContent = `$${displayBalance.toFixed(2)}`;
        DOM.equity.textContent = `$${displayEquity.toFixed(2)}`;
        DOM.pnl.textContent = `$${totalUnrealized.toFixed(2)}`;
        DOM.pnl.className = `value ${totalUnrealized > 0 ? 'up' : totalUnrealized < 0 ? 'down' : 'neutral'}`;
        
        if (balEl) balEl.textContent = `$${displayBalance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        if (eqEl) eqEl.textContent = `$${displayEquity.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        return;
    }
    
    // If Competition mode is active, format using INR symbol
    if (AppState.isTournamentMode) {
        originalUpdateUI();
        
        const balEl = document.getElementById('nav-balance');
        const eqEl = document.getElementById('nav-equity');
        const pnlEl = document.getElementById('nav-pnl');
        
        // Calculate unrealized PNL for tournament positions
        let totalUnrealized = 0;
        AppState.tournamentPositions.forEach(p => {
            const cp = getSafeAssetPrice(p.symbol);
            totalUnrealized += calculatePNL(p, cp);
        });
        
        const displayBalance = AppState.tournamentBalance;
        const displayEquity = AppState.tournamentBalance + totalUnrealized;
        
        if (balEl) balEl.textContent = `$${displayBalance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        if (eqEl) eqEl.textContent = `$${displayEquity.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        if (pnlEl) pnlEl.textContent = `$${totalUnrealized.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        if (pnlEl) pnlEl.className = `value ${totalUnrealized > 0 ? 'up' : totalUnrealized < 0 ? 'down' : 'neutral'}`;
        
        // Standalone leaderboard standings updates
        renderTournamentLeaderboard();
        return;
    }
    
    originalUpdateUI();
    
    // Sync option chains & analytics real-time if active tabs
    const activeSidebarTab = document.querySelector('.left-tab.active')?.dataset.leftTab;
    if (activeSidebarTab === 'options') {
        renderOptionChain();
    }
    if (activeSidebarTab === 'ai-journal') {
        renderTradeJournal();
    }
};

// Extend session saves to preserve new achievements lists, lesson statuses, certificates and settings
const baseSaveUserSession = saveUserSession;
saveUserSession = function() {
    if (!AppState.currentUser) return;
    
    // Capture base session
    baseSaveUserSession();
    
    // Load the updated users structure from localStorage
    const users = getUsers();
    if (users[AppState.currentUser]) {
        // Capture dynamic gamified assets
        users[AppState.currentUser].unlockedAchievements = AppState.unlockedAchievements;
        users[AppState.currentUser].lessonProgress = AppState.lessonProgress;
        users[AppState.currentUser].certificates = AppState.certificates;
        users[AppState.currentUser].profileSettings = AppState.profileSettings;
        users[AppState.currentUser].customStrategies = AppState.customStrategies;
        
        saveUsers(users);
    }
};

// Populate Settings Form inputs from AppState
function populateSettingsInputs() {
    const fnEl = document.getElementById('settings-fullname');
    const emEl = document.getElementById('settings-email');
    const bioEl = document.getElementById('settings-bio');
    if (fnEl) fnEl.value = AppState.profileSettings?.fullName || '';
    if (emEl) emEl.value = AppState.profileSettings?.email || '';
    if (bioEl) bioEl.value = AppState.profileSettings?.bio || '';
}
window.populateSettingsInputs = populateSettingsInputs;

// Save Settings Form inputs to AppState
function saveProfileSettings() {
    const fnEl = document.getElementById('settings-fullname');
    const emEl = document.getElementById('settings-email');
    const bioEl = document.getElementById('settings-bio');
    
    AppState.profileSettings = {
        fullName: fnEl ? fnEl.value.trim() : '',
        email: emEl ? emEl.value.trim() : '',
        bio: bioEl ? bioEl.value.trim() : ''
    };
    
    saveUserSession();
    showToast("Profile settings saved successfully!");
}
window.saveProfileSettings = saveProfileSettings;

// Extend session loads
const baseLoadUserSession = loadUserSession;
loadUserSession = function(username) {
    const success = baseLoadUserSession(username);
    if (!success) return false;
    
    const users = getUsers();
    const userData = users[username];
    if (userData) {
        AppState.unlockedAchievements = userData.unlockedAchievements || [];
        AppState.lessonProgress = userData.lessonProgress || { candlestick: false, structure: false, options_basics: false, risk_mgmt: false, indicators: false, leverage: false };
        AppState.certificates = userData.certificates || [];
        AppState.profileSettings = userData.profileSettings || { fullName: '', email: '', bio: '' };
        AppState.customStrategies = userData.customStrategies || [];
    } else {
        AppState.certificates = [];
        AppState.profileSettings = { fullName: '', email: '', bio: '' };
        AppState.customStrategies = [];
    }
    
    // Refresh board displays
    renderAchievementsBoard();
    refreshLessonAcademyUI();
    renderSocialFeed();
    renderCertificatesBoard();
    populateSettingsInputs();
    if (typeof renderTradeJournal === 'function') {
        renderTradeJournal();
    }
    
    return true;
};

// Intercept realizations to trigger achievements Checks & AI reviews
const originalClosePosition = closePosition;
window.closePosition = function(id) {
    const beforeLen = AppState.tradeHistory ? AppState.tradeHistory.length : 0;
    
    // Call base closer
    originalClosePosition(id);
    
    const afterLen = AppState.tradeHistory ? AppState.tradeHistory.length : 0;
    if (afterLen > beforeLen) {
        const lastTrade = AppState.tradeHistory[afterLen - 1];
        
        // Generate AI Mentor feedback
        if (typeof generateTradeFeedback === 'function') {
            AppState.tradeFeedback[lastTrade.id] = generateTradeFeedback(lastTrade);
        }
        // Update Trader Level XP
        if (typeof updateTraderLevel === 'function') {
            updateTraderLevel(lastTrade.pnl);
        }
        // Save current mood to logs
        if (typeof logMindsetAfterTrade === 'function') {
            logMindsetAfterTrade(lastTrade);
        }
    }
    
    // Trigger achievements checker
    setTimeout(triggerAchievementCheck, 500);
};

// Switch left panel tab programmatically
function switchLeftTab(tabId) {
    if (!DOM.leftTabs) return;
    DOM.leftTabs.forEach(tb => {
        if (tb.dataset.leftTab === tabId) {
            tb.classList.add('active');
        } else {
            tb.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.left-tab-content').forEach(panel => {
        panel.classList.add('hidden-panel');
    });
    
    const activePanel = document.getElementById(`left-tab-${tabId}`);
    if (activePanel) activePanel.classList.remove('hidden-panel');

    // Expand non-trade sections to occupy full screen
    const workspace = document.querySelector('.workspace');
    if (workspace) {
        if (tabId === 'trade' || tabId === 'replay' || tabId === 'options') {
            workspace.classList.remove('section-active-expanded');
        } else {
            workspace.classList.add('section-active-expanded');
        }
    }
    
    if (tabId === 'ai-mentor') {
        renderAIMentor();
    } else if (tabId === 'psy-journal') {
        renderPsychologyJournal();
    } else if (tabId === 'strategy-builder') {
        renderCustomStrategiesList();
    } else if (tabId === 'strategy-marketplace') {
        renderMarketplaceList();
    } else if (tabId === 'portfolio-heatmaps') {
        renderPortfolioHeatmaps();
    } else if (tabId === 'dashboard') {
        renderDashboard();
    } else if (tabId === 'portfolio-analytics') {
        runMonteCarloSimulation();
    } else if (tabId === 'history-orders') {
        renderPendingOrders();
        updatePNLDashboard('today');
    }
}
window.switchLeftTab = switchLeftTab;

function switchLedgerTab(btn, targetId) {
    document.querySelectorAll('.ledger-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const ordersView = document.getElementById('open-orders');
    const historyView = document.getElementById('trade-history');
    if (ordersView) ordersView.classList.add('hidden');
    if (historyView) historyView.classList.add('hidden');
    
    const targetView = document.getElementById(targetId);
    if (targetView) targetView.classList.remove('hidden');
    
    if (targetId === 'trade-history') {
        updatePNLDashboard('today');
    } else {
        renderPendingOrders();
    }
}
window.switchLedgerTab = switchLedgerTab;

// UI Mode Toggler (Simple Mode vs Pro Mode)
function toggleUIMode(forceMode) {
    const toggle = document.getElementById('ui-mode-toggle');
    const workspace = document.querySelector('.workspace');
    if (toggle) toggle.checked = true;
    if (workspace) workspace.classList.remove('simple-ui-active');
    localStorage.setItem('bullforge_ui_mode', 'pro');
}
window.toggleUIMode = toggleUIMode;

// Initial boot up data binders
function initPlatformData() {
    try {
        initData();
    } catch(e) {
        console.error("Error in initData:", e);
    }
    
    // Set up Simple UI / Pro Mode
    try {
        const savedMode = localStorage.getItem('bullforge_ui_mode') || localStorage.getItem('omnitrade_ui_mode') || 'pro';
        toggleUIMode(savedMode);
    } catch(e) {
        console.error("Error in toggleUIMode:", e);
    }
    
    // Hydrate default layouts
    try {
        renderAchievementsBoard();
    } catch(e) {
        console.error("Error in renderAchievementsBoard:", e);
    }
    try {
        refreshLessonAcademyUI();
    } catch(e) {
        console.error("Error in refreshLessonAcademyUI:", e);
    }
    try {
        renderSocialFeed();
    } catch(e) {
        console.error("Error in renderSocialFeed:", e);
    }
    
    // Initialize landing page interactions
    try {
        initBentoSpotlights();
        initLandingCalculator();
        initMockChart();
        initLandingParticleCanvas();
        initHeroSandboxWidget();
        initLandingAssetTabs();
        initScrollReveal();
        initLandingExtensions();
    } catch(e) {
        console.warn("Landing page interactive features init skipped/errored:", e);
    }
    
    // Set up active price updates to check milestones
    setInterval(() => {
        try {
            triggerAchievementCheck();
        } catch(e){}
    }, 15000);
    
    try {
        initDashboard();
    } catch(e) {
        console.error("Error in initDashboard:", e);
    }
}
window.initPlatformData = initPlatformData;

// Boot platform
initPlatformData();

// --- Light & Dark Theme Mode Controller ---
function initTheme() {
    const savedTheme = localStorage.getItem('bullforge_theme') || localStorage.getItem('omnitrade_theme') || 'dark';
    AppState.theme = savedTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Sync checkboxes
    const themeCheckbox = document.getElementById('theme-mode-toggle');
    if (themeCheckbox) {
        themeCheckbox.checked = (savedTheme === 'light');
    }
    
    setTimeout(() => {
        updateChartTheme(savedTheme);
    }, 500);
}
window.initTheme = initTheme;

function toggleThemeMode() {
    AppState.theme = (AppState.theme === 'dark') ? 'light' : 'dark';
    localStorage.setItem('bullforge_theme', AppState.theme);
    document.documentElement.setAttribute('data-theme', AppState.theme);
    
    // Sync checkboxes
    const themeCheckbox = document.getElementById('theme-mode-toggle');
    if (themeCheckbox) {
        themeCheckbox.checked = (AppState.theme === 'light');
    }
    
    updateChartTheme(AppState.theme);
    updateUI();
    
    AppState.lastDashboardStateKey = null;
    if (typeof renderDashboard === 'function') {
        renderDashboard();
    }
}
window.toggleThemeMode = toggleThemeMode;

function updateChartTheme(theme) {
    if (!chart) return;
    const isLight = theme === 'light';
    chart.applyOptions({
        layout: {
            textColor: isLight ? '#1f222f' : '#d1d4dc',
        },
        grid: {
            vertLines: { color: isLight ? 'rgba(224, 227, 235, 0.6)' : 'rgba(42, 46, 57, 0.5)' },
            horzLines: { color: isLight ? 'rgba(224, 227, 235, 0.6)' : 'rgba(42, 46, 57, 0.5)' }
        }
    });
}
window.updateChartTheme = updateChartTheme;

// --- 📜 PROFIT CERTIFICATES GENERATION & ACTIONS ---

function checkAndGenerateCertificate(p, exitPrice, pnl, tradeMode, closeId) {
    if (pnl <= 0) return;
    
    // Calculate starting balance baseline
    let startingBalance = 100000;
    const posType = p.type || 'spot';
    if (tradeMode !== 'replay' && posType !== 'replay') {
        if (AppState.currentUser) {
            const users = getUsers();
            const userData = users[AppState.currentUser];
            if (userData && userData.startingBalance !== undefined) {
                startingBalance = userData.startingBalance;
            } else {
                // Infer standard tier from current balance
                const current = AppState.balance || 100000;
                if (current > 750000) startingBalance = 1000000;
                else if (current > 375000) startingBalance = 500000;
                else if (current > 175000) startingBalance = 250000;
                else if (current > 75000) startingBalance = 100000;
                else if (current > 30000) startingBalance = 50000;
                else startingBalance = 10000;
            }
        }
    }
    
    // Profit Percentage = Net Profit / Account Starting Balance
    const pnlPct = (pnl / startingBalance) * 100;
    
    const nameOnCert = AppState.profileSettings?.fullName || AppState.currentUser || "Guest Trader";
    const cert = {
        id: "CERT-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        closeId: closeId || Date.now(),
        userName: nameOnCert,
        symbol: p.symbol,
        side: p.side,
        type: tradeMode,
        entryPrice: p.entryPrice,
        exitPrice: exitPrice,
        qty: p.qty,
        pnl: pnl,
        pnlPct: pnlPct,
        accountSize: startingBalance,
        timestamp: new Date().toLocaleString()
    };
    
    if (!AppState.certificates) AppState.certificates = [];
    AppState.certificates.unshift(cert);
    
    saveUserSession();
    renderCertificatesBoard();
    showToast(`📜 Profit Certificate Earned! Booked $${pnl.toFixed(2)} profit on ${p.symbol}.`);
}
window.checkAndGenerateCertificate = checkAndGenerateCertificate;

function renderCertificatesBoard() {
    const boardEl = document.getElementById('certificates-board');
    const badgeEl = document.getElementById('cert-counter-badge');
    if (!boardEl) return;
    
    const certs = AppState.certificates || [];
    if (badgeEl) {
        badgeEl.textContent = `${certs.length} Earned`;
    }
    
    if (certs.length === 0) {
        boardEl.innerHTML = `
            <div style="background:rgba(255,255,255,0.02); border:1px dashed var(--border); border-radius:8px; padding:30px; text-align:center; color:var(--text-muted); font-size:11px;">
                <span style="font-size:24px; display:block; margin-bottom:8px;">📜</span>
                <strong>No certificates earned yet</strong>
                <p style="margin:4px 0 0 0; font-size:10px;">Close any Spot, Futures, or Options position with a net profit to generate your first official certificate.</p>
            </div>
        `;
        return;
    }
    
    boardEl.innerHTML = certs.map(c => {
        const pnlStr = `$${c.pnl.toFixed(2)}`;
        const dateStr = c.timestamp.split(',')[0];
        return `
            <div class="certificate-badge-card" onclick="viewCertificateDetail('${c.id}')">
                <div class="certificate-card-icon">📜</div>
                <div class="certificate-card-details">
                    <div class="certificate-card-title">PROFIT: ${c.symbol} (${c.type.toUpperCase()})</div>
                    <div class="certificate-card-subtitle">Issued to ${c.userName} • ${dateStr}</div>
                </div>
                <div class="certificate-card-pnl profit">+${pnlStr}</div>
            </div>
        `;
    }).join('');
}
window.renderCertificatesBoard = renderCertificatesBoard;

function drawCertificate(cert, canvas, callback) {
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = function() {
        // Draw template image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // 1. Draw Recipient Name (centered below "PROUDLY PRESENTED TO")
        ctx.fillStyle = '#111622';
        ctx.font = 'italic 28px "Georgia", serif';
        ctx.textAlign = 'center';
        ctx.fillText(cert.userName, 528, 330);
        
        // 2. Draw Profit / P&L (centered inside the gold-bordered beige box above the "PROFIT" banner)
        const formattedPnL = `+$${cert.pnl.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        ctx.font = 'bold 32px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        // Gold text drop shadow
        ctx.fillStyle = '#b38f2d';
        ctx.fillText(formattedPnL, 530, 497);
        // Gold text foreground
        ctx.fillStyle = '#d4af37';
        ctx.fillText(formattedPnL, 528, 495);
        
        // 3. Draw Metadata (Certificate ID and Date Issued) in the bottom dark corners
        const displayPeriod = cert.timestamp ? cert.timestamp.split(',')[0].trim() : 'N/A';
        ctx.fillStyle = '#d4af37';
        ctx.font = 'bold 9px sans-serif';
        
        // Certificate ID on the left
        ctx.textAlign = 'left';
        ctx.fillText(`CERTIFICATE ID: ${cert.id}`, 50, 660);
        
        // Date Issued on the right
        ctx.textAlign = 'right';
        ctx.fillText(`DATE ISSUED: ${displayPeriod}`, 974, 660);
        
        if (callback) callback();
    };
    img.src = window.CERTIFICATE_TEMPLATE_BASE64 || 'certificate_template.jpg';
}
window.drawCertificate = drawCertificate;

function viewCertificateDetail(id) {
    const certs = AppState.certificates || [];
    const cert = certs.find(c => c.id === id);
    if (!cert) return;
    
    window.currentActiveCertId = id;
    
    const nameEl = document.getElementById('cert-modal-fullname');
    const assetEl = document.getElementById('cert-modal-asset');
    const pnlEl = document.getElementById('cert-modal-pnl');
    const idEl = document.getElementById('cert-modal-id');
    const dateEl = document.getElementById('cert-modal-date');
    const typeEl = document.getElementById('cert-modal-type');
    
    if (nameEl) nameEl.textContent = cert.userName;
    
    let displayAsset = cert.symbol || 'BTC';
    if (!displayAsset.includes('/') && !displayAsset.includes('-') && displayAsset !== 'GOLD' && displayAsset !== 'SILVER' && displayAsset !== 'PLATINUM' && displayAsset !== 'PALLADIUM') {
        displayAsset = displayAsset + '/USD';
    }
    if (assetEl) assetEl.textContent = displayAsset;
    
    if (pnlEl) pnlEl.textContent = `+$${cert.pnl.toFixed(2)} USD`;
    if (idEl) idEl.textContent = cert.id;
    if (dateEl) dateEl.textContent = cert.timestamp;
    if (typeEl) typeEl.textContent = `${cert.type} ${cert.side}`.toUpperCase();
    
    const previewEl = document.getElementById('certificate-preview-area');
    if (previewEl) {
        if (cert.pnl >= 10000) {
            previewEl.style.border = '4px double #ffd700';
        } else if (cert.pnl >= 1000) {
            previewEl.style.border = '4px double #b6c4ff';
        } else {
            previewEl.style.border = '4px double var(--brand)';
        }
    }
    
    const canvas = document.getElementById('certificate-preview-canvas');
    if (canvas) {
        drawCertificate(cert, canvas);
    }
    
    const overlay = document.getElementById('certificate-modal-overlay');
    if (overlay) overlay.classList.remove('hidden');
}
window.viewCertificateDetail = viewCertificateDetail;

function closeCertificateModal() {
    const overlay = document.getElementById('certificate-modal-overlay');
    if (overlay) overlay.classList.add('hidden');
    window.currentActiveCertId = null;
}
window.closeCertificateModal = closeCertificateModal;

function shareCertificateToFeed(id) {
    const certs = AppState.certificates || [];
    const cert = certs.find(c => c.id === id);
    if (!cert) return;
    
    const post = {
        id: Date.now(),
        user: `${AppState.currentUser || "Guest"} (You)`,
        avatar: "👤",
        time: "Just now",
        content: `🏆 I just earned an official BullForge **PROFIT CERTIFICATE**! Booked a realized return of **$${cert.pnl.toFixed(2)} USD** trading **${cert.symbol}** (${cert.type.toUpperCase()}). Verification ID: \`${cert.id}\`.`,
        likes: 0,
        comments: 0,
        liked: false,
        attachment: `📜 Certificate Issued: $${cert.pnl.toFixed(2)}`
    };
    
    if (typeof MOCK_SOCIAL_POSTS !== 'undefined') {
        MOCK_SOCIAL_POSTS.unshift(post);
    }
    if (typeof renderSocialFeed === 'function') {
        renderSocialFeed();
    }
    
    showToast("Certificate shared to ForgeSocial Community Feed!");
    closeCertificateModal();
}
window.shareCertificateToFeed = shareCertificateToFeed;

function downloadCertificateCanvas(id) {
    const certs = AppState.certificates || [];
    const cert = certs.find(c => c.id === id);
    if (!cert) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 682;
    
    drawCertificate(cert, canvas, function() {
        try {
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = `BullForge_Certificate_${cert.id}.png`;
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast("Certificate downloaded successfully!");
        } catch (err) {
            console.error("Canvas export failed", err);
            showToast("Canvas download failed.");
        }
    });
}
window.downloadCertificateCanvas = downloadCertificateCanvas;

// --- 📋 CUSTOM STRATEGIES JOURNAL MANAGEMENT ---

function toggleAddStrategyForm() {
    const formEl = document.getElementById('add-strategy-form');
    const btnEl = document.getElementById('btn-toggle-add-strategy');
    if (!formEl) return;
    
    formEl.classList.toggle('hidden');
    if (btnEl) {
        btnEl.textContent = formEl.classList.contains('hidden') ? '+ Add Strategy' : '✕ Cancel';
    }
}
window.toggleAddStrategyForm = toggleAddStrategyForm;

function getStrategyHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

function getRiskDetails(score) {
    if (score <= 3) return { level: 'Low', color: '#00c853' };
    if (score <= 6) return { level: 'Medium', color: '#ffd700' };
    if (score <= 8) return { level: 'High', color: '#ff9100' };
    return { level: 'Extreme', color: '#ff3d00' };
}

function calculateStrategyMetrics(strategyName) {
    let filteredTrades = AppState.tradeHistory || [];
    
    // Check if strategy name mentions a specific asset
    const nameLower = strategyName.toLowerCase();
    const matchedAssets = [];
    Object.keys(MARKET_ASSETS).forEach(mkt => {
        Object.keys(MARKET_ASSETS[mkt]).forEach(sym => {
            const symLower = sym.toLowerCase();
            if (nameLower.includes(symLower) || (symLower.includes('/') && nameLower.includes(symLower.split('/')[0]))) {
                matchedAssets.push(sym);
            }
        });
    });
    
    if (matchedAssets.length > 0) {
        filteredTrades = filteredTrades.filter(t => matchedAssets.some(a => t.symbol === a));
    }
    
    if (filteredTrades.length > 0) {
        const returns = filteredTrades.map(t => t.pnl);
        
        // Calculate average return (PnL)
        const avgReturn = returns.reduce((a, b) => a + b, 0) / returns.length;
        
        // Calculate standard deviation of PnL
        const variance = returns.reduce((a, b) => a + Math.pow(b - avgReturn, 2), 0) / returns.length;
        let stdDev = Math.sqrt(variance);
        
        // Floor standard deviation at 15% of average return to prevent division by zero or extreme ratios
        const minStdDev = Math.max(10, Math.abs(avgReturn) * 0.15);
        if (stdDev < minStdDev) stdDev = minStdDev;
        
        // Sharpe Ratio (trade-level scaled)
        let sharpe = avgReturn / stdDev;
        sharpe = sharpe * 1.5;
        
        // Downside deviation for Sortino
        const downReturns = returns.filter(p => p < 0);
        let downStdDev = 0;
        if (downReturns.length > 0) {
            const downVariance = downReturns.reduce((a, b) => a + Math.pow(b - avgReturn, 2), 0) / downReturns.length;
            downStdDev = Math.sqrt(downVariance);
        }
        const minDownStdDev = Math.max(10, Math.abs(avgReturn) * 0.15);
        if (downStdDev < minDownStdDev) downStdDev = minDownStdDev;
        
        let sortino = avgReturn / downStdDev;
        sortino = sortino * 1.8;
        
        // Drawdown based on a sensible strategy capital allocation of $10,000
        let maxDrawdown = 0;
        let peak = 10000;
        let currentBalance = 10000;
        
        // Sort chronologically
        const sortedTrades = [...filteredTrades].sort((a, b) => (a.closeId || a.id) - (b.closeId || b.id));
        sortedTrades.forEach(t => {
            currentBalance += t.pnl;
            if (currentBalance > peak) peak = currentBalance;
            let dd = 0;
            if (peak > 0) {
                dd = ((peak - currentBalance) / peak) * 100;
            }
            if (dd > maxDrawdown) maxDrawdown = dd;
        });
        if (maxDrawdown > 99) maxDrawdown = 99;
        
        // Risk Score (1-10) based on Max Drawdown
        let riskScore = Math.min(10, Math.max(1, Math.round(maxDrawdown / 4)));
        if (sharpe < 0.5) riskScore = Math.min(10, riskScore + 2); // Add risk penalty for poor performance
        if (isNaN(riskScore)) riskScore = 1;
        
        // Bounds clipping
        if (isNaN(sharpe) || !isFinite(sharpe)) sharpe = 0;
        if (isNaN(sortino) || !isFinite(sortino)) sortino = 0;
        if (isNaN(maxDrawdown) || !isFinite(maxDrawdown)) maxDrawdown = 0;
        
        sharpe = Math.min(4.50, Math.max(-4.50, sharpe));
        sortino = Math.min(5.50, Math.max(-5.50, sortino));
        
        return {
            sharpe: sharpe.toFixed(2),
            sortino: sortino.toFixed(2),
            drawdown: maxDrawdown.toFixed(2) + "%",
            riskScore: riskScore
        };
    }
    
    // Fallback using name hash for repeatable, realistic metrics
    const hash = getStrategyHash(strategyName);
    const sharpe = 0.5 + (hash % 300) / 100; // 0.5 to 3.5
    const sortino = sharpe * (1.1 + (hash % 50) / 100); // 1.1x to 1.6x of Sharpe
    const drawdown = 3.0 + (hash % 320) / 10; // 3.0% to 35.0%
    const riskScore = Math.min(10, Math.max(1, Math.round(drawdown / 3.5)));
    
    return {
        sharpe: sharpe.toFixed(2),
        sortino: sortino.toFixed(2),
        drawdown: drawdown.toFixed(2) + "%",
        riskScore: riskScore
    };
}

function saveCustomStrategy() {
    const nameEl = document.getElementById('strategy-name-input');
    const codeEl = document.getElementById('strategy-code-input');
    const publishCheck = document.getElementById('strategy-publish-check');
    const priceEl = document.getElementById('strategy-price-input');
    
    if (!nameEl || !nameEl.value.trim()) {
        showToast("Please enter a strategy name!");
        return;
    }
    
    const nameVal = nameEl.value.trim();
    const codeVal = codeEl ? codeEl.value : '';
    const metrics = calculateStrategyMetrics(nameVal);
    const riskDetails = getRiskDetails(metrics.riskScore);
    
    const publish = publishCheck ? publishCheck.checked : false;
    const price = publish && priceEl ? (parseFloat(priceEl.value) || 0) : 0;
    
    const strategy = {
        id: "STRAT-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        name: nameVal,
        code: codeVal,
        sharpe: metrics.sharpe,
        sortino: metrics.sortino,
        drawdown: metrics.drawdown,
        riskScore: metrics.riskScore,
        risk: riskDetails.level,
        publish: publish,
        price: price,
        timestamp: new Date().toLocaleString()
    };
    
    if (!AppState.customStrategies) AppState.customStrategies = [];
    AppState.customStrategies.unshift(strategy);
    
    if (publish) {
        if (typeof initMarketplaceData === 'function') initMarketplaceData();
        if (!AppState.marketplaceStrategies) AppState.marketplaceStrategies = [];
        AppState.marketplaceStrategies.unshift({
            id: "MKT-" + Date.now(),
            name: nameVal,
            author: "You",
            code: codeVal,
            rating: 5.0,
            price: price,
            downloads: 0,
            likes: 0,
            comments: []
        });
    }
    
    saveUserSession();
    
    // Check custom strategy achievements
    if (AppState.customStrategies.length >= 1) {
        triggerUnlockAchievement('learning_begins');
    }
    if (AppState.customStrategies.length >= 3) {
        triggerUnlockAchievement('institutional_mindset');
    }
    
    // Reset inputs and hide form
    nameEl.value = '';
    if (codeEl) codeEl.value = '';
    if (publishCheck) publishCheck.checked = false;
    if (priceEl) priceEl.value = '0';
    if (typeof toggleStrategyPriceVisibility === 'function') toggleStrategyPriceVisibility();
    toggleAddStrategyForm();
    
    renderCustomStrategiesList();
    showToast(`Strategy "${nameVal}" saved successfully!`);
}
window.saveCustomStrategy = saveCustomStrategy;

function toggleStrategyCodeCollapse(stratId) {
    const codeEl = document.getElementById(`code-collapse-${stratId}`);
    if (codeEl) {
        codeEl.classList.toggle('hidden');
    }
}
window.toggleStrategyCodeCollapse = toggleStrategyCodeCollapse;

function renderCustomStrategiesList() {
    const listEl = document.getElementById('custom-strategies-list');
    if (!listEl) return;
    
    const strats = AppState.customStrategies || [];
    if (strats.length === 0) {
        listEl.innerHTML = `
            <div style="background:rgba(255,255,255,0.02); border:1px dashed var(--border); border-radius:4px; padding:16px; text-align:center; color:var(--text-muted); font-size:10px;">
                No custom strategies saved yet. Click "+ Add Strategy" to get started!
            </div>
        `;
        return;
    }
    
    listEl.innerHTML = strats.map(s => {
        let codeSectionHTML = '';
        if (s.code && s.code.trim()) {
            const escapedCode = s.code
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
            
            codeSectionHTML = `
                <div style="margin-top: 6px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 6px;">
                    <button onclick="toggleStrategyCodeCollapse('${s.id}')" style="background: rgba(0,229,255,0.08); border: 1px solid rgba(0,229,255,0.2); border-radius: 4px; padding: 2px 6px; color: var(--brand); font-size: 8px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 4px; outline: none;">
                        <span>🐍</span> Python Code
                    </button>
                    <div id="code-collapse-${s.id}" class="hidden" style="margin-top: 6px; background: rgba(0,0,0,0.3); border: 1px solid var(--border); border-radius: 4px; padding: 6px; max-height: 120px; overflow: auto; text-align: left;">
                        <pre style="margin: 0; font-family: 'JetBrains Mono', monospace; font-size: 8.5px; color: #a9b7c6; white-space: pre-wrap; line-height: 1.3;">${escapedCode}</pre>
                    </div>
                </div>
            `;
        }
        
        return `
            <div style="background:rgba(22, 26, 37, 0.45); border:1px solid var(--border); border-radius:6px; padding:10px; display:flex; flex-direction:column; gap:4px; position:relative; margin-bottom:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center; padding-right:12px;">
                    <span style="font-weight:700; color:#fff; font-size:11px;">${s.name}</span>
                </div>
                ${codeSectionHTML}
                <span onclick="deleteCustomStrategy('${s.id}')" style="position:absolute; top:4px; right:8px; cursor:pointer; color:var(--text-muted); font-size:12px; font-weight:bold; transition:color 0.2s;" onmouseover="this.style.color='#ff3d00'" onmouseout="this.style.color='var(--text-muted)'" title="Delete Strategy">&times;</span>
            </div>
        `;
    }).join('');
}
window.renderCustomStrategiesList = renderCustomStrategiesList;

function deleteCustomStrategy(id) {
    if (!AppState.customStrategies) return;
    const idx = AppState.customStrategies.findIndex(s => s.id === id);
    if (idx !== -1) {
        const name = AppState.customStrategies[idx].name;
        AppState.customStrategies.splice(idx, 1);
        saveUserSession();
        renderCustomStrategiesList();
        showToast(`Deleted strategy "${name}"`);
    }
}
window.deleteCustomStrategy = deleteCustomStrategy;

// --- 🔐 AUTH MODAL OPEN/CLOSE LOGIC ---

function openAuthModal(tab) {
    const modal = document.getElementById('auth-modal-overlay');
    if (modal) {
        modal.classList.remove('hidden');
        switchAuthTab(tab);
    }
}
window.openAuthModal = openAuthModal;

function closeAuthModal() {
    const modal = document.getElementById('auth-modal-overlay');
    if (modal) {
        modal.classList.add('hidden');
    }
}
window.closeAuthModal = closeAuthModal;

window.loginAsDemo = loginAsDemo;

// --- 🌟 LANDING PAGE INTERACTIVE FEATURES ---

// Bento card cursor spotlight glow
function initBentoSpotlights() {
    document.querySelectorAll('.bento-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}
window.initBentoSpotlights = initBentoSpotlights;

// Starting Balance & Profit Calculator
function initLandingCalculator() {
    const balanceBtns = document.querySelectorAll('.calc-balance-btn');
    const yieldInput = document.getElementById('calc-yield');
    const yieldVal = document.getElementById('calc-yield-val');
    const profitDisplay = document.getElementById('calc-profit-display');
    const totalDisplay = document.getElementById('calc-total-display');
    const badgeDisplay = document.getElementById('calc-badge-display');
    const nameInput = document.getElementById('calc-user-name');
    
    if (!yieldInput || !profitDisplay) return;
    
    let activeBalance = 100000;
    
    balanceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            balanceBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeBalance = parseInt(btn.getAttribute('data-value'), 10);
            updateCalculator();
        });
    });
    
    yieldInput.addEventListener('input', () => {
        yieldVal.textContent = `${yieldInput.value}%`;
        updateCalculator();
    });
    
    if (nameInput) {
        nameInput.addEventListener('input', () => {
            if (typeof renderLandingCertificate === 'function') renderLandingCertificate();
        });
    }
    
    function updateCalculator() {
        const yieldPercent = parseInt(yieldInput.value, 10);
        const profit = activeBalance * (yieldPercent / 100);
        const total = activeBalance + profit;
        
        profitDisplay.textContent = `+$${profit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        totalDisplay.textContent = `$${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        
        // Tier badge logic matching drawCertificate
        let tierTitle = "BRONZE TRADER";
        let tierClass = "bronze";
        let tierEmoji = "🥉";
        
        if (profit >= 10000) {
            tierTitle = "PLATINUM TRADER";
            tierClass = "platinum";
            tierEmoji = "🏆";
        } else if (profit >= 1000) {
            tierTitle = "GOLD TRADER";
            tierClass = "gold";
            tierEmoji = "🥈";
        }
        
        // Update badge DOM
        if (badgeDisplay) {
            badgeDisplay.className = `premium-tier-badge ${tierClass}`;
            badgeDisplay.innerHTML = `<span>${tierEmoji}</span> <span class="badge-text">${tierTitle}</span>`;
        }
        
        // Trigger certificate canvas update
        if (typeof renderLandingCertificate === 'function') {
            renderLandingCertificate();
        }
    }
    
    // Initial run
    updateCalculator();
}
window.initLandingCalculator = initLandingCalculator;

// Interactive Indicator Chart Preview
function initMockChart() {
    const canvas = document.getElementById('mock-landing-chart');
    if (!canvas) return;
    
    const emaBtn = document.getElementById('toggle-ema');
    const bbBtn = document.getElementById('toggle-bb');
    const rsiBtn = document.getElementById('toggle-rsi');
    
    let emaActive = false;
    let bbActive = false;
    let rsiActive = false;
    
    if (emaBtn) {
        emaBtn.addEventListener('click', () => {
            emaActive = !emaActive;
            emaBtn.setAttribute('data-active', emaActive);
            emaBtn.classList.toggle('active', emaActive);
            redraw();
        });
    }
    if (bbBtn) {
        bbBtn.addEventListener('click', () => {
            bbActive = !bbActive;
            bbBtn.setAttribute('data-active', bbActive);
            bbBtn.classList.toggle('active', bbActive);
            redraw();
        });
    }
    if (rsiBtn) {
        rsiBtn.addEventListener('click', () => {
            rsiActive = !rsiActive;
            rsiBtn.setAttribute('data-active', rsiActive);
            rsiBtn.classList.toggle('active', rsiActive);
            redraw();
        });
    }
    
    const mockCandles = [
        { open: 120, close: 125, high: 128, low: 118 },
        { open: 125, close: 122, high: 127, low: 120 },
        { open: 122, close: 115, high: 123, low: 112 },
        { open: 115, close: 110, high: 116, low: 108 },
        { open: 110, close: 118, high: 120, low: 106 },
        { open: 118, close: 124, high: 126, low: 115 },
        { open: 124, close: 121, high: 125, low: 119 },
        { open: 121, close: 128, high: 130, low: 120 },
        { open: 128, close: 135, high: 138, low: 126 },
        { open: 135, close: 132, high: 137, low: 130 },
        { open: 132, close: 140, high: 142, low: 131 },
        { open: 140, close: 148, high: 150, low: 138 },
        { open: 148, close: 144, high: 149, low: 142 },
        { open: 144, close: 152, high: 155, low: 143 },
        { open: 152, close: 160, high: 162, low: 150 },
    ];
    
    // EMA (5 period)
    const emaPeriod = 5;
    const emaValues = [];
    let emaSum = 0;
    for (let i = 0; i < mockCandles.length; i++) {
        if (i < emaPeriod) {
            emaSum += mockCandles[i].close;
            emaValues.push(emaSum / (i + 1));
        } else {
            const k = 2 / (emaPeriod + 1);
            const val = mockCandles[i].close * k + emaValues[i - 1] * (1 - k);
            emaValues.push(val);
        }
    }
    
    // Bollinger Bands (5 period, stddev = 1.5)
    const bbPeriod = 5;
    const bbUpper = [];
    const bbLower = [];
    const bbMiddle = [];
    for (let i = 0; i < mockCandles.length; i++) {
        const start = Math.max(0, i - bbPeriod + 1);
        const count = i - start + 1;
        let sum = 0;
        for (let j = start; j <= i; j++) sum += mockCandles[j].close;
        const mean = sum / count;
        bbMiddle.push(mean);
        
        let sumSq = 0;
        for (let j = start; j <= i; j++) sumSq += Math.pow(mockCandles[j].close - mean, 2);
        const stdDev = Math.sqrt(sumSq / count);
        
        bbUpper.push(mean + 1.5 * stdDev);
        bbLower.push(mean - 1.5 * stdDev);
    }
    
    // RSI mock oscillator values
    const rsiValues = [45, 52, 42, 33, 40, 48, 44, 55, 64, 58, 66, 72, 65, 74, 82];
    
    function redraw() {
        const rect = canvas.getBoundingClientRect();
        const width = rect.width || 480;
        const height = rect.height || 280;
        
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        
        const ctx = canvas.getContext('2d');
        ctx.scale(dpr, dpr);
        
        const isDark = AppState.theme !== 'light';
        
        // Clear background
        ctx.fillStyle = isDark ? '#030508' : '#f0f2f5';
        ctx.fillRect(0, 0, width, height);
        
        // Define sub-panes
        const showRsiPane = rsiActive;
        const mainPaneHeight = showRsiPane ? height * 0.70 : height;
        
        // Draw grid lines (Main Pane)
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.04)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        
        // Horiz grid
        const horizLines = 4;
        for (let i = 1; i <= horizLines; i++) {
            const y = (mainPaneHeight / (horizLines + 1)) * i;
            ctx.beginPath();
            ctx.moveTo(10, y);
            ctx.lineTo(width - 10, y);
            ctx.stroke();
        }
        
        // Vert grid
        const numCandles = mockCandles.length;
        const chartPaddingLeft = 25;
        const chartPaddingRight = 25;
        const drawWidth = width - chartPaddingLeft - chartPaddingRight;
        const candleSpacing = drawWidth / (numCandles - 1);
        
        for (let i = 1; i < numCandles - 1; i += 3) {
            const x = chartPaddingLeft + i * candleSpacing;
            ctx.beginPath();
            ctx.moveTo(x, 10);
            ctx.lineTo(x, mainPaneHeight - 10);
            ctx.stroke();
        }
        ctx.setLineDash([]); // Reset
        
        // Scaling price limits
        const minPrice = 100;
        const maxPrice = 170;
        function getPriceY(price) {
            return 15 + (1 - (price - minPrice) / (maxPrice - minPrice)) * (mainPaneHeight - 30);
        }
        
        // Bollinger Bands Area Paint (under candles)
        if (bbActive) {
            ctx.fillStyle = isDark ? 'rgba(0, 229, 255, 0.04)' : 'rgba(0, 229, 255, 0.02)';
            ctx.beginPath();
            for (let i = 0; i < numCandles; i++) {
                const x = chartPaddingLeft + i * candleSpacing;
                const y = getPriceY(bbUpper[i]);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            for (let i = numCandles - 1; i >= 0; i--) {
                const x = chartPaddingLeft + i * candleSpacing;
                const y = getPriceY(bbLower[i]);
                ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
            
            // Draw lines for bands
            ctx.strokeStyle = 'rgba(0, 229, 255, 0.2)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let i = 0; i < numCandles; i++) {
                const x = chartPaddingLeft + i * candleSpacing;
                const y = getPriceY(bbUpper[i]);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            
            ctx.beginPath();
            for (let i = 0; i < numCandles; i++) {
                const x = chartPaddingLeft + i * candleSpacing;
                const y = getPriceY(bbLower[i]);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
        
        // Draw Candlesticks
        const candleWidth = Math.max(4, candleSpacing * 0.5);
        for (let i = 0; i < numCandles; i++) {
            const candle = mockCandles[i];
            const x = chartPaddingLeft + i * candleSpacing;
            const yOpen = getPriceY(candle.open);
            const yClose = getPriceY(candle.close);
            const yHigh = getPriceY(candle.high);
            const yLow = getPriceY(candle.low);
            const isBullish = candle.close >= candle.open;
            
            ctx.strokeStyle = isBullish ? '#00c853' : '#ff3d00';
            ctx.fillStyle = isBullish ? '#00c853' : '#ff3d00';
            ctx.lineWidth = 1.5;
            
            // Wick
            ctx.beginPath();
            ctx.moveTo(x, yHigh);
            ctx.lineTo(x, yLow);
            ctx.stroke();
            
            // Body
            const bodyHeight = Math.abs(yClose - yOpen) || 1.5;
            const bodyY = Math.min(yOpen, yClose);
            ctx.fillRect(x - candleWidth / 2, bodyY, candleWidth, bodyHeight);
        }
        
        // Draw EMA Line
        if (emaActive) {
            ctx.strokeStyle = '#ffb300';
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let i = 0; i < numCandles; i++) {
                const x = chartPaddingLeft + i * candleSpacing;
                const y = getPriceY(emaValues[i]);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
        
        // Draw RSI Sub-pane
        if (showRsiPane) {
            ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, mainPaneHeight);
            ctx.lineTo(width, mainPaneHeight);
            ctx.stroke();
            
            const rsiPaneTop = mainPaneHeight + 10;
            const rsiPaneBottom = height - 10;
            const rsiPaneRange = rsiPaneBottom - rsiPaneTop;
            
            function getRsiY(rsiVal) {
                return rsiPaneBottom - (rsiVal / 100) * rsiPaneRange;
            }
            
            ctx.strokeStyle = 'rgba(171, 71, 188, 0.15)';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);
            
            ctx.beginPath();
            ctx.moveTo(10, getRsiY(70));
            ctx.lineTo(width - 10, getRsiY(70));
            ctx.moveTo(10, getRsiY(30));
            ctx.lineTo(width - 10, getRsiY(30));
            ctx.stroke();
            ctx.setLineDash([]);
            
            ctx.fillStyle = 'rgba(171, 71, 188, 0.6)';
            ctx.font = '8px sans-serif';
            ctx.fillText('70', width - 20, getRsiY(70) - 2);
            ctx.fillText('30', width - 20, getRsiY(30) + 8);
            
            ctx.strokeStyle = '#ab47bc';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            for (let i = 0; i < numCandles; i++) {
                const x = chartPaddingLeft + i * candleSpacing;
                const y = getRsiY(rsiValues[i]);
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
    }
    
    // Draw initial chart
    redraw();
    
    // Redraw on window resize
    window.addEventListener('resize', redraw);
}
window.initMockChart = initMockChart;

// Dynamic Certificate Rendering onto landing canvas
function renderLandingCertificate() {
    const canvas = document.getElementById('landing-cert-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const nameInput = document.getElementById('calc-user-name');
    const name = nameInput ? nameInput.value.trim() || 'Alex Mercer' : 'Alex Mercer';
    
    const activeBtn = document.querySelector('.calc-balance-btn.active');
    const balance = activeBtn ? parseInt(activeBtn.getAttribute('data-value'), 10) : 100000;
    
    const yieldInput = document.getElementById('calc-yield');
    const yieldPct = yieldInput ? parseInt(yieldInput.value, 10) : 10;
    
    const profit = balance * (yieldPct / 100);
    
    const img = new Image();
    img.onload = function() {
        // Clear canvas and draw template image
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        // 1. Draw Recipient Name (centered below "PROUDLY PRESENTED TO")
        ctx.fillStyle = '#111622';
        ctx.font = 'italic 28px "Georgia", serif';
        ctx.textAlign = 'center';
        ctx.fillText(name, 528, 330);
        
        // 2. Draw Profit / P&L (centered inside the gold-bordered beige box above the "PROFIT" banner)
        const formattedPnL = `+$${profit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        ctx.font = 'bold 32px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        // Gold text drop shadow
        ctx.fillStyle = '#b38f2d';
        ctx.fillText(formattedPnL, 530, 497);
        // Gold text foreground
        ctx.fillStyle = '#d4af37';
        ctx.fillText(formattedPnL, 528, 495);
        
        // 3. Draw Metadata (Certificate ID and Date Issued) in the bottom dark corners
        const uniqueId = `BF-${name.substring(0,3).toUpperCase()}-${Math.floor(balance/1000)}-${Math.floor(100000 + Math.random()*900000)}`;
        const dateStr = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
        
        ctx.fillStyle = '#d4af37';
        ctx.font = 'bold 9px sans-serif';
        
        // Certificate ID on the left
        ctx.textAlign = 'left';
        ctx.fillText(`VERIFICATION ID: ${uniqueId}`, 50, 660);
        
        // Date Issued on the right
        ctx.textAlign = 'right';
        ctx.fillText(`DATE ISSUED: ${dateStr.toUpperCase()}`, 974, 660);
    };
    img.src = window.CERTIFICATE_TEMPLATE_BASE64 || 'certificate_template.jpg';
}
window.renderLandingCertificate = renderLandingCertificate;

function switchExtensionTab(tabId) {
    document.querySelectorAll('.ext-panel').forEach(p => p.classList.add('hidden-panel'));
    document.querySelectorAll('#platform-extensions .asset-tab-btn').forEach(b => b.classList.remove('active'));
    
    const targetPanel = document.getElementById(`ext-panel-${tabId}`);
    if (targetPanel) targetPanel.classList.remove('hidden-panel');
    
    const targetBtn = document.getElementById(`btn-ext-${tabId}`);
    if (targetBtn) targetBtn.classList.add('active');
    
    if (tabId === 'mc') {
        runLandingMonteCarlo();
    }
}
window.switchExtensionTab = switchExtensionTab;

function runLandingMonteCarlo() {
    const canvas = document.getElementById('landing-mc-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const winRate = parseFloat(document.getElementById('landing-mc-winrate')?.value || 50) / 100;
    const riskPct = parseFloat(document.getElementById('landing-mc-risk')?.value || 1.0) / 100;
    const rr = parseFloat(document.getElementById('landing-mc-rr')?.value || 2.0);
    const numSteps = parseInt(document.getElementById('landing-mc-trades')?.value || 100, 10);
    
    const numPaths = 15; // smaller count for clean display on landing page
    const startBal = 100000;
    const paths = [];
    const drawdowns = [];
    
    let profitCount = 0;
    let maxDdLimit = 0.10; // 10%
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let p = 0; p < numPaths; p++) {
        let bal = startBal;
        let peak = startBal;
        const steps = [bal];
        let maxDd = 0;
        
        for (let s = 1; s <= numSteps; s++) {
            const riskAmt = bal * riskPct;
            if (Math.random() < winRate) {
                bal += riskAmt * rr;
            } else {
                bal -= riskAmt;
            }
            steps.push(bal);
            if (bal > peak) peak = bal;
            const dd = (peak - bal) / peak;
            if (dd > maxDd) maxDd = dd;
        }
        paths.push(steps);
        drawdowns.push(maxDd);
        if (bal > startBal) profitCount++;
    }
    
    const probProfit = (profitCount / numPaths) * 100;
    
    const winprobEl = document.getElementById('landing-mc-winprob');
    if (winprobEl) winprobEl.textContent = `${probProfit.toFixed(0)}%`;
    
    const survivalEl = document.getElementById('landing-mc-survival');
    if (survivalEl) {
        const breaches = drawdowns.filter(d => d >= maxDdLimit).length;
        const survivalRate = ((numPaths - breaches) / numPaths) * 100;
        survivalEl.textContent = `${survivalRate.toFixed(0)}%`;
        survivalEl.style.color = survivalRate > 80 ? '#00e676' : (survivalRate > 50 ? '#ff9100' : '#ff3d00');
    }
    
    const w = canvas.width;
    const h = canvas.height;
    
    let minVal = startBal;
    let maxVal = startBal;
    paths.forEach(p => {
        p.forEach(val => {
            if (val < minVal) minVal = val;
            if (val > maxVal) maxVal = val;
        });
    });
    const range = maxVal - minVal || 1;
    
    // Animate drawing
    let currentStep = 0;
    let animationFrameId = null;
    
    function drawFrame() {
        if (document.getElementById('ext-panel-mc').classList.contains('hidden-panel')) {
            return; // stop rendering if tab is hidden
        }
        ctx.clearRect(0, 0, w, h);
        
        // draw grid lines
        ctx.strokeStyle = 'rgba(255,255,255,0.03)';
        ctx.lineWidth = 0.5;
        for (let i = 1; i < 5; i++) {
            const y = (i / 5) * h;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }
        
        paths.forEach(p => {
            ctx.beginPath();
            ctx.lineWidth = 0.8;
            ctx.strokeStyle = 'rgba(0, 229, 255, 0.15)';
            for (let s = 0; s <= currentStep; s++) {
                const x = (s / numSteps) * w;
                const y = h - ((p[s] - minVal) / range) * h;
                if (s === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        });
        
        // Draw median path in gold
        const medianPath = paths[Math.floor(numPaths / 2)];
        ctx.beginPath();
        ctx.lineWidth = 1.8;
        ctx.strokeStyle = '#ff9100';
        for (let s = 0; s <= currentStep; s++) {
            const x = (s / numSteps) * w;
            const y = h - ((medianPath[s] - minVal) / range) * h;
            if (s === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        if (currentStep < numSteps) {
            currentStep += 2; // draw 2 steps per frame for smooth speed
            animationFrameId = requestAnimationFrame(drawFrame);
        }
    }
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    drawFrame();
}
window.runLandingMonteCarlo = runLandingMonteCarlo;

function selectLandingMood(mood, color) {
    const label = document.getElementById('landing-mood-label');
    if (label) {
        label.textContent = mood;
        label.style.color = color;
    }
    
    const adviceEl = document.getElementById('landing-mood-advice');
    if (adviceEl) {
        let text = "";
        if (mood.includes('Calm')) {
            text = "🧘 Mindset check: Calm states permit logical execution. All strategy rules followed. Risk rating is LOW.";
        } else if (mood.includes('Fear')) {
            text = "😨 AI Mentor Alert: High fear levels may result in premature trade exits or hesitation. Recommendations: reduce position size by 50% to align with comfort rules.";
        } else if (mood.includes('Greed')) {
            text = "🤑 AI Mentor Alert: Greed state detected. High risk of size-bloating or targeting unrealistic risk-reward limits. Safety safeguard: Leverage capped at 5x to prevent liquidation.";
        } else if (mood.includes('FOMO')) {
            text = "⏳ AI Mentor Alert: Fear of Missing Out (FOMO) entry signs. Refrain from chasing green candles near resistances. Recommended action: wait for a clear support pullback.";
        } else if (mood.includes('Revenge')) {
            text = "🤬 AI Mentor Alert: Extreme Revenge Trading warning. Attempting to recoup losses instantly leads to fatal drawdown violations. System recommends shutting the platform for 30 minutes.";
        }
        adviceEl.innerHTML = text;
        adviceEl.style.color = color;
    }
}
window.selectLandingMood = selectLandingMood;

function initLandingExtensions() {
    const canvas = document.getElementById('landing-mc-canvas');
    if (canvas) {
        runLandingMonteCarlo();
    }
}
window.initLandingExtensions = initLandingExtensions;

// Particle Background system loop
function initLandingParticleCanvas() {
    const canvas = document.getElementById('landing-particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = canvas.parentElement.clientWidth;
    let height = canvas.height = canvas.parentElement.clientHeight;
    
    window.addEventListener('resize', () => {
        if (!canvas) return;
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
    });
    
    const particles = [];
    const maxParticles = 40;
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 2 + 1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;
        }
        draw() {
            ctx.fillStyle = AppState.theme === 'light' ? 'rgba(0, 229, 255, 0.2)' : 'rgba(0, 229, 255, 0.12)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }
    
    let mouse = { x: null, y: null };
    canvas.parentElement.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    canvas.parentElement.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    function animate() {
        if (!document.getElementById('landing-page') || document.getElementById('landing-page').classList.contains('hidden-screen')) {
            requestAnimationFrame(animate);
            return;
        }
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        ctx.lineWidth = 0.75;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    const alpha = (1 - dist / 100) * 0.12;
                    ctx.strokeStyle = AppState.theme === 'light' 
                        ? `rgba(0, 229, 255, ${alpha * 1.5})` 
                        : `rgba(0, 229, 255, ${alpha})`;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
            
            if (mouse.x !== null && mouse.y !== null) {
                const dx = particles[i].x - mouse.x;
                const dy = particles[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 140) {
                    const alpha = (1 - dist / 140) * 0.2;
                    ctx.strokeStyle = AppState.theme === 'light' 
                        ? `rgba(255, 111, 0, ${alpha * 1.5})` 
                        : `rgba(255, 111, 0, ${alpha})`;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    
    animate();
}
window.initLandingParticleCanvas = initLandingParticleCanvas;

// Interactive Sandbox Chart Widget in Hero section
function initHeroSandboxWidget() {
    const canvas = document.getElementById('hero-sandbox-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const emaBtn = document.getElementById('sandbox-toggle-ema');
    const bbBtn = document.getElementById('sandbox-toggle-bb');
    const gridBtn = document.getElementById('sandbox-toggle-grid');
    const buyBtn = document.getElementById('sandbox-buy-btn');
    const sellBtn = document.getElementById('sandbox-sell-btn');
    const statusBox = document.getElementById('sandbox-position-status');
    const symbolDisplay = document.getElementById('sandbox-current-symbol');
    const priceDisplay = document.getElementById('sandbox-price-display');
    const pctDisplay = document.getElementById('sandbox-pct-display');
    
    let emaActive = emaBtn ? emaBtn.classList.contains('active') : true;
    let bbActive = bbBtn ? bbBtn.classList.contains('active') : false;
    let gridActive = gridBtn ? gridBtn.classList.contains('active') : true;
    
    let currentSymbol = "BTC/USD";
    let basePrice = 68542.50;
    let assetChange = 1.45;
    
    const assetPresets = {
        "BTC/USD": { name: "Bitcoin Simulator", price: 68542.50, change: 1.45 },
        "ETH/USD": { name: "Ethereum Simulator", price: 3842.10, change: 0.98 },
        "XAU/USD": { name: "Gold Spot Simulator", price: 2382.50, change: 0.75 },
        "EUR/USD": { name: "Euro / US Dollar Pair", price: 1.0842, change: 0.05 }
    };
    
    let candles = [];
    function generateInitialCandles(price) {
        candles = [];
        let cur = price * 0.96;
        for (let i = 0; i < 20; i++) {
            const open = cur;
            const volatility = price * 0.005;
            const close = cur + (Math.random() - 0.48) * volatility;
            const high = Math.max(open, close) + Math.random() * volatility * 0.5;
            const low = Math.min(open, close) - Math.random() * volatility * 0.5;
            candles.push({ open, close, high, low });
            cur = close;
        }
    }
    generateInitialCandles(basePrice);
    
    let activePosition = null;
    
    if (emaBtn) emaBtn.addEventListener('click', () => {
        emaActive = !emaActive;
        emaBtn.classList.toggle('active', emaActive);
        drawSandboxChart();
    });
    if (bbBtn) bbBtn.addEventListener('click', () => {
        bbActive = !bbActive;
        bbBtn.classList.toggle('active', bbActive);
        drawSandboxChart();
    });
    if (gridBtn) gridBtn.addEventListener('click', () => {
        gridActive = !gridActive;
        gridBtn.classList.toggle('active', gridActive);
        drawSandboxChart();
    });
    
    if (buyBtn) buyBtn.addEventListener('click', () => {
        const curPrice = candles[candles.length - 1].close;
        activePosition = { type: 'long', entry: curPrice };
        statusBox.className = "sandbox-positions-status active-long";
        statusBox.querySelector('.status-msg').innerHTML = `LONG POSITION: Entry $${curPrice.toFixed(2)} | P&L: <strong style="color:var(--buy)">$0.00</strong>`;
        showToast(`Simulated Market BUY Order filled for ${currentSymbol} at $${curPrice.toFixed(2)}!`);
    });
    
    if (sellBtn) sellBtn.addEventListener('click', () => {
        const curPrice = candles[candles.length - 1].close;
        activePosition = { type: 'short', entry: curPrice };
        statusBox.className = "sandbox-positions-status active-short";
        statusBox.querySelector('.status-msg').innerHTML = `SHORT POSITION: Entry $${curPrice.toFixed(2)} | P&L: <strong style="color:var(--buy)">$0.00</strong>`;
        showToast(`Simulated Market SELL Order filled for ${currentSymbol} at $${curPrice.toFixed(2)}!`);
    });
    
    function drawSandboxChart() {
        const rect = canvas.getBoundingClientRect();
        const width = rect.width || 400;
        const height = rect.height || 180;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        
        const isDark = AppState.theme !== 'light';
        
        ctx.fillStyle = isDark ? '#030508' : '#f0f2f5';
        ctx.fillRect(0, 0, width, height);
        
        const mainHeight = height;
        const numCandles = candles.length;
        const chartPadLeft = 15;
        const chartPadRight = 15;
        const drawW = width - chartPadLeft - chartPadRight;
        const spacing = drawW / (numCandles - 1);
        
        if (gridActive) {
            ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.025)' : 'rgba(0, 0, 0, 0.04)';
            ctx.lineWidth = 1;
            ctx.setLineDash([3, 3]);
            for (let i = 1; i <= 3; i++) {
                const y = (mainHeight / 4) * i;
                ctx.beginPath();
                ctx.moveTo(5, y);
                ctx.lineTo(width - 5, y);
                ctx.stroke();
            }
            for (let i = 2; i < numCandles; i += 4) {
                const x = chartPadLeft + i * spacing;
                ctx.beginPath();
                ctx.moveTo(x, 5);
                ctx.lineTo(x, mainHeight - 5);
                ctx.stroke();
            }
            ctx.setLineDash([]);
        }
        
        let minP = Infinity;
        let maxP = -Infinity;
        candles.forEach(c => {
            if (c.low < minP) minP = c.low;
            if (c.high > maxP) maxP = c.high;
        });
        
        const pad = (maxP - minP) * 0.1 || 1.0;
        minP -= pad;
        maxP += pad;
        
        function getScaleY(val) {
            return 10 + (1 - (val - minP) / (maxP - minP)) * (mainHeight - 20);
        }
        
        if (bbActive) {
            const period = 5;
            const uppers = [];
            const lowers = [];
            
            for (let i = 0; i < numCandles; i++) {
                const start = Math.max(0, i - period + 1);
                const count = i - start + 1;
                let sum = 0;
                for (let j = start; j <= i; j++) sum += candles[j].close;
                const avg = sum / count;
                
                let sqSum = 0;
                for (let j = start; j <= i; j++) sqSum += Math.pow(candles[j].close - avg, 2);
                const dev = Math.sqrt(sqSum / count) || 0.01;
                uppers.push(avg + 1.5 * dev);
                lowers.push(avg - 1.5 * dev);
            }
            
            ctx.fillStyle = isDark ? 'rgba(0, 229, 255, 0.04)' : 'rgba(0, 229, 255, 0.02)';
            ctx.beginPath();
            for (let i = 0; i < numCandles; i++) {
                ctx.lineTo(chartPadLeft + i * spacing, getScaleY(uppers[i]));
            }
            for (let i = numCandles - 1; i >= 0; i--) {
                ctx.lineTo(chartPadLeft + i * spacing, getScaleY(lowers[i]));
            }
            ctx.closePath();
            ctx.fill();
            
            ctx.strokeStyle = 'rgba(0, 229, 255, 0.15)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let i = 0; i < numCandles; i++) {
                ctx.lineTo(chartPadLeft + i * spacing, getScaleY(uppers[i]));
            }
            ctx.stroke();
            
            ctx.beginPath();
            for (let i = 0; i < numCandles; i++) {
                ctx.lineTo(chartPadLeft + i * spacing, getScaleY(lowers[i]));
            }
            ctx.stroke();
        }
        
        const cWidth = Math.max(3, spacing * 0.45);
        for (let i = 0; i < numCandles; i++) {
            const c = candles[i];
            const x = chartPadLeft + i * spacing;
            const yOpen = getScaleY(c.open);
            const yClose = getScaleY(c.close);
            const yHigh = getScaleY(c.high);
            const yLow = getScaleY(c.low);
            const isUp = c.close >= c.open;
            
            ctx.strokeStyle = isUp ? '#00c853' : '#ff3d00';
            ctx.fillStyle = isUp ? '#00c853' : '#ff3d00';
            ctx.lineWidth = 1.2;
            
            ctx.beginPath();
            ctx.moveTo(x, yHigh);
            ctx.lineTo(x, yLow);
            ctx.stroke();
            
            const bh = Math.abs(yClose - yOpen) || 1;
            ctx.fillRect(x - cWidth / 2, Math.min(yOpen, yClose), cWidth, bh);
        }
        
        if (emaActive) {
            const period = 5;
            const emaVals = [];
            let sum = 0;
            for (let i = 0; i < numCandles; i++) {
                if (i < period) {
                    sum += candles[i].close;
                    emaVals.push(sum / (i + 1));
                } else {
                    const k = 2 / (period + 1);
                    emaVals.push(candles[i].close * k + emaVals[i - 1] * (1 - k));
                }
            }
            
            ctx.strokeStyle = '#ffb300';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            for (let i = 0; i < numCandles; i++) {
                const x = chartPadLeft + i * spacing;
                if (i === 0) ctx.moveTo(x, getScaleY(emaVals[i]));
                else ctx.lineTo(x, getScaleY(emaVals[i]));
            }
            ctx.stroke();
        }
        
        if (activePosition) {
            const entryY = getScaleY(activePosition.entry);
            ctx.strokeStyle = activePosition.type === 'long' ? 'rgba(0, 200, 83, 0.4)' : 'rgba(255, 61, 0, 0.4)';
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 2]);
            ctx.beginPath();
            ctx.moveTo(5, entryY);
            ctx.lineTo(width - 5, entryY);
            ctx.stroke();
            ctx.setLineDash([]);
            
            ctx.fillStyle = activePosition.type === 'long' ? '#00c853' : '#ff3d00';
            ctx.font = '8px sans-serif';
            ctx.fillText(`ENTRY: $${activePosition.entry.toFixed(2)}`, 10, entryY - 4);
        }
    }
    
    // simulated tick interval loop
    const tickInterval = setInterval(() => {
        if (!document.getElementById('landing-page') || document.getElementById('landing-page').classList.contains('hidden-screen') || document.body.classList.contains('app-mode')) return;
        
        const lastCandle = candles[candles.length - 1];
        const volatility = lastCandle.close * 0.0015;
        const direction = Math.random() - 0.47;
        const delta = direction * volatility;
        
        const newClose = lastCandle.close + delta;
        lastCandle.close = newClose;
        if (newClose > lastCandle.high) lastCandle.high = newClose;
        if (newClose < lastCandle.low) lastCandle.low = newClose;
        
        if (priceDisplay) {
            priceDisplay.textContent = `$${newClose.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        }
        
        assetChange += direction * 0.02;
        if (pctDisplay) {
            const prefix = assetChange >= 0 ? "+" : "";
            pctDisplay.textContent = `${prefix}${assetChange.toFixed(2)}% ${assetChange >= 0 ? "▲" : "▼"}`;
            pctDisplay.className = `sandbox-pct-change ${assetChange >= 0 ? "positive" : "negative"}`;
        }
        
        if (activePosition && statusBox) {
            const entry = activePosition.entry;
            const diff = newClose - entry;
            let profitVal = activePosition.type === 'long' ? diff : -diff;
            const pnl = (profitVal / entry) * 10000;
            const isProfit = pnl >= 0;
            const pnlStr = (isProfit ? "+" : "") + `$${pnl.toFixed(2)}`;
            statusBox.querySelector('.status-msg').innerHTML = `${activePosition.type.toUpperCase()} POSITION: Entry $${entry.toFixed(2)} | P&L: <strong style="color:${isProfit ? 'var(--buy)' : 'var(--sell)'}">${pnlStr}</strong>`;
        }
        
        if (Math.random() > 0.85) {
            candles.shift();
            candles.push({
                open: lastCandle.close,
                close: lastCandle.close,
                high: lastCandle.close,
                low: lastCandle.close
            });
        }
        
        drawSandboxChart();
    }, 1500);
    
    window.setSandboxSymbol = function(sym) {
        if (!assetPresets[sym]) return;
        currentSymbol = sym;
        basePrice = assetPresets[sym].price;
        assetChange = assetPresets[sym].change;
        
        if (symbolDisplay) symbolDisplay.textContent = sym;
        if (priceDisplay) priceDisplay.textContent = `$${basePrice.toLocaleString()}`;
        
        const details = document.querySelector('.sandbox-asset-details .sandbox-name');
        if (details) details.textContent = assetPresets[sym].name;
        
        generateInitialCandles(basePrice);
        activePosition = null;
        if (statusBox) {
            statusBox.className = "sandbox-positions-status";
            statusBox.querySelector('.status-msg').textContent = "Click BUY/SELL to execute a mock paper trade.";
        }
        drawSandboxChart();
    };
    
    drawSandboxChart();
    window.addEventListener('resize', drawSandboxChart);
}
window.initHeroSandboxWidget = initHeroSandboxWidget;

// Supported asset categories tab viewer on landing page
function initLandingAssetTabs() {
    const listContainer = document.getElementById('assets-showcase-list');
    const tabBtns = document.querySelectorAll('.asset-tab-btn');
    if (!listContainer) return;
    
    const assetsData = {
        crypto: [
            { symbol: "BTC/USD", name: "Bitcoin", price: 68542.50, change: 1.45, emoji: "🪙" },
            { symbol: "ETH/USD", name: "Ethereum", price: 3842.10, change: 0.98, emoji: "🪙" },
            { symbol: "SOL/USD", name: "Solana", price: 154.30, change: -0.42, emoji: "🪙" },
            { symbol: "ADA/USD", name: "Cardano", price: 0.482, change: 1.25, emoji: "🪙" },
            { symbol: "DOT/USD", name: "Polkadot", price: 6.85, change: -1.12, emoji: "🪙" }
        ],
        forex: [
            { symbol: "EUR/USD", name: "Euro / US Dollar", price: 1.0842, change: 0.05, emoji: "💵" },
            { symbol: "GBP/USD", name: "British Pound / US Dollar", price: 1.2715, change: -0.12, emoji: "💵" },
            { symbol: "USD/JPY", name: "US Dollar / Japanese Yen", price: 156.42, change: 0.35, emoji: "💵" },
            { symbol: "AUD/USD", name: "Australian Dollar / US Dollar", price: 0.6620, change: 0.22, emoji: "💵" },
            { symbol: "USD/CAD", name: "US Dollar / Canadian Dollar", price: 1.3685, change: -0.08, emoji: "💵" }
        ],
        metals: [
            { symbol: "XAU/USD", name: "Gold Spot", price: 2382.50, change: 0.75, emoji: "🧱" },
            { symbol: "XAG/USD", name: "Silver Spot", price: 30.45, change: 1.85, emoji: "🧱" },
            { symbol: "XPT/USD", name: "Platinum Spot", price: 1045.20, change: -0.65, emoji: "🧱" },
            { symbol: "COPPER", name: "Copper Futures", price: 4.62, change: 0.42, emoji: "🧱" }
        ],
        commodities: [
            { symbol: "USOIL", name: "Crude Oil WTI", price: 78.45, change: -1.20, emoji: "🌾" },
            { symbol: "NGAS", name: "Natural Gas Futures", price: 2.84, change: 3.45, emoji: "🌾" },
            { symbol: "WHEAT", name: "Wheat Futures", price: 684.50, change: -0.92, emoji: "🌾" },
            { symbol: "CORN", name: "Corn Futures", price: 452.25, change: 0.15, emoji: "🌾" }
        ]
    };
    
    function drawSparkline(canvas, points, isUp) {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        
        ctx.clearRect(0, 0, rect.width, rect.height);
        
        if (points.length < 2) return;
        
        let min = Math.min(...points);
        let max = Math.max(...points);
        const range = max - min || 1;
        
        ctx.strokeStyle = isUp ? '#00c853' : '#ff3d00';
        ctx.lineWidth = 1.5;
        ctx.lineJoin = 'round';
        ctx.beginPath();
        
        const spacing = rect.width / (points.length - 1);
        for (let i = 0; i < points.length; i++) {
            const x = i * spacing;
            const y = 2 + (1 - (points[i] - min) / range) * (rect.height - 4);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    
    const sparklineCache = {};
    
    function renderCategory(cat) {
        listContainer.innerHTML = '';
        const items = assetsData[cat] || [];
        
        items.forEach((item, idx) => {
            const key = `${cat}_${item.symbol}`;
            if (!sparklineCache[key]) {
                const pts = [];
                let val = item.price;
                for (let i = 0; i < 10; i++) {
                    val += (Math.random() - 0.49) * (item.price * 0.01);
                    pts.push(val);
                }
                sparklineCache[key] = pts;
            }
            
            const points = sparklineCache[key];
            const isUp = item.change >= 0;
            const priceStr = item.price.toLocaleString(undefined, { minimumFractionDigits: item.price < 5 ? 4 : 2, maximumFractionDigits: item.price < 5 ? 4 : 2 });
            const prefix = isUp ? "+" : "";
            
            const row = document.createElement('div');
            row.className = 'asset-row-item';
            row.setAttribute('data-symbol', item.symbol);
            row.innerHTML = `
                <div class="asset-row-name-wrap">
                    <span class="asset-row-emoji">${item.emoji}</span>
                    <div style="text-align: left;">
                        <span class="asset-row-symbol">${item.symbol}</span>
                        <div class="asset-row-fullname">${item.name}</div>
                    </div>
                </div>
                <canvas class="asset-row-sparkline" id="spark-${key}"></canvas>
                <div class="asset-row-price-wrap">
                    <span class="asset-row-price">$${priceStr}</span>
                    <span class="asset-row-change ${isUp ? 'up' : 'down'}">${prefix}${item.change.toFixed(2)}%</span>
                </div>
            `;
            
            row.addEventListener('click', () => {
                if (typeof window.setSandboxSymbol === 'function') {
                    window.setSandboxSymbol(item.symbol);
                    const targetHero = document.getElementById('hero');
                    if (targetHero) targetHero.scrollIntoView({ behavior: 'smooth' });
                }
            });
            
            listContainer.appendChild(row);
            
            requestAnimationFrame(() => {
                const canvas = document.getElementById(`spark-${key}`);
                drawSparkline(canvas, points, isUp);
            });
        });
    }
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const cat = btn.getAttribute('data-asset-cat');
            renderCategory(cat);
        });
    });
    
    renderCategory('crypto');
    
    const assetInterval = setInterval(() => {
        if (!document.getElementById('landing-page') || document.getElementById('landing-page').classList.contains('hidden-screen') || document.body.classList.contains('app-mode')) return;
        
        const activeTabBtn = document.querySelector('.asset-tab-btn.active');
        const activeCat = activeTabBtn ? activeTabBtn.getAttribute('data-asset-cat') : 'crypto';
        const items = assetsData[activeCat] || [];
        
        items.forEach((item, idx) => {
            const key = `${activeCat}_${item.symbol}`;
            const points = sparklineCache[key];
            if (!points) return;
            
            const deltaPct = (Math.random() - 0.49) * 0.002;
            item.price += item.price * deltaPct;
            item.change += deltaPct * 100;
            
            points.shift();
            points.push(item.price);
            
            const row = document.querySelector(`.asset-row-item[data-symbol="${item.symbol}"]`);
            if (row) {
                const priceEl = row.querySelector('.asset-row-price');
                const changeEl = row.querySelector('.asset-row-change');
                const isUp = item.change >= 0;
                
                if (priceEl) {
                    priceEl.textContent = `$${item.price.toLocaleString(undefined, { minimumFractionDigits: item.price < 5 ? 4 : 2, maximumFractionDigits: item.price < 5 ? 4 : 2 })}`;
                }
                if (changeEl) {
                    const prefix = isUp ? "+" : "";
                    changeEl.textContent = `${prefix}${item.change.toFixed(2)}%`;
                    changeEl.className = `asset-row-change ${isUp ? 'up' : 'down'}`;
                }
                
                const canvas = row.querySelector('.asset-row-sparkline');
                drawSparkline(canvas, points, isUp);
            }
        });
    }, 2000);
}
window.initLandingAssetTabs = initLandingAssetTabs;

// Reveal sections on scroll transition
function initScrollReveal() {
    const sections = document.querySelectorAll('.landing-section');
    sections.forEach(s => s.classList.add('reveal-on-scroll'));
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.12
    });
    
    sections.forEach(s => observer.observe(s));
}
window.initScrollReveal = initScrollReveal;

// Helper to launch certificate modal directly from a closed trade log
function viewCertForClosedTrade(closeId) {
    const certs = AppState.certificates || [];
    const cert = certs.find(c => String(c.closeId) === String(closeId));
    if (cert) {
        viewCertificateDetail(cert.id);
    } else {
        showToast("No certificate found for this trade (only profitable trades qualify).");
    }
}
window.viewCertForClosedTrade = viewCertForClosedTrade;

// --- 4. TRADING PERFORMANCE DASHBOARD ---

function formatCurrency(val, compact = false) {
    if (compact) {
        if (Math.abs(val) >= 1000000) {
            return `$${(val / 1000000).toFixed(2)}M`;
        } else if (Math.abs(val) >= 1000) {
            return `$${(val / 1000).toFixed(1)}K`;
        }
    }
    return `$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function prepareCanvas(canvasId, logicalW, logicalH) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return null;
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = logicalW * dpr;
    canvas.height = logicalH * dpr;
    canvas.style.width = logicalW + 'px';
    canvas.style.height = logicalH + 'px';
    
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
}

function getNiceAxisLimits(minVal, maxVal, ticks = 4) {
    if (minVal === maxVal) {
        return { min: minVal - 1, max: maxVal + 1, step: 1 };
    }
    
    const rawRange = maxVal - minVal;
    const rawStep = rawRange / ticks;
    
    const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const normalizedStep = rawStep / magnitude;
    
    let step;
    if (normalizedStep < 1.5) step = 1 * magnitude;
    else if (normalizedStep < 3) step = 2 * magnitude;
    else if (normalizedStep < 7) step = 5 * magnitude;
    else step = 10 * magnitude;
    
    const min = Math.floor(minVal / step) * step;
    const max = Math.ceil(maxVal / step) * step;
    
    return { min, max, step };
}

function generateMockTradeHistory() {
    const tradeHistory = [];
    const numTrades = 83;
    
    const fixedWins = [
        1, 3, 4, 7, 8, 11, 12, 13, 16, 18, 20, 21, 24, 26, 27, 29, 30, 34, 35, 38,
        40, 43, 45, 47, 50, 51, 54, 57, 59, 61, 62, 66, 68, 71, 74
    ]; // 35 wins in indices 0 to 79
    
    const isWin = new Array(83).fill(false);
    fixedWins.forEach(idx => isWin[idx] = true);
    
    const symbols = ['BTC/USD', 'ETH/USD', 'SOL/USD', 'AAPL', 'EUR/USD'];
    const types = ['spot', 'future', 'option'];
    
    const now = Date.now();
    const startTime = now - 30 * 24 * 3600 * 1000;
    
    let rawWinSum = 0;
    let rawLossSum = 0;
    const tempWins = [];
    const tempLosses = [];
    
    for (let i = 0; i < 80; i++) {
        const pseudoRand = Math.abs(Math.sin(i * 9.8 + 1.2)); 
        if (isWin[i]) {
            const val = 400 + pseudoRand * 950;
            tempWins.push(val);
            rawWinSum += val;
        } else {
            const val = 200 + pseudoRand * 660;
            tempLosses.push(val);
            rawLossSum += val;
        }
    }
    
    // Desired overall Gross Profit is 32412. Today's 2 wins total 800. We scale the first 80 trades' wins to 31612.
    // Desired overall Gross Loss is 24454. Today's loss is 1899. We scale the first 80 trades' losses to 22555.
    const winScale = 31612 / rawWinSum;
    const lossScale = 22555 / rawLossSum;
    
    let winIdx = 0;
    let lossIdx = 0;
    
    for (let i = 0; i < numTrades; i++) {
        let timestamp;
        let pnl = 0;
        
        // Guarantee these fall on the current calendar day
        if (i === 80) {
            timestamp = now - 2000;
            pnl = 450;
        } else if (i === 81) {
            timestamp = now - 1000;
            pnl = 350;
        } else if (i === 82) {
            timestamp = now;
            pnl = -1899;
        } else {
            timestamp = startTime + i * ((30 * 24 * 3600 * 1000 - 6 * 3600 * 1000) / numTrades) + Math.sin(i) * 2 * 3600 * 1000;
            if (isWin[i]) {
                pnl = tempWins[winIdx] * winScale;
                winIdx++;
            } else {
                pnl = -tempLosses[lossIdx] * lossScale;
                lossIdx++;
            }
        }
        
        const sym = symbols[i % symbols.length];
        const type = types[i % types.length];
        const side = i % 2 === 0 ? 'buy' : 'sell';
        
        let entryPrice = 100 + (Math.sin(i * 0.5) * 50) + 50;
        if (sym.includes('BTC')) entryPrice = 40000 + (Math.sin(i * 0.5) * 15000) + 15000;
        else if (sym.includes('ETH')) entryPrice = 2200 + (Math.sin(i * 0.5) * 800) + 800;
        else if (sym.includes('SOL')) entryPrice = 80 + (Math.sin(i * 0.5) * 40) + 40;
        else if (sym === 'EUR/USD') entryPrice = 1.08 + (Math.sin(i * 0.5) * 0.04);
        
        const qty = sym.includes('BTC') ? parseFloat((0.01 + Math.abs(Math.sin(i)) * 0.1).toFixed(3)) :
                    sym.includes('ETH') ? parseFloat((0.1 + Math.abs(Math.sin(i)) * 1.5).toFixed(2)) :
                    sym === 'EUR/USD' ? Math.floor(10000 + Math.abs(Math.sin(i)) * 90000) :
                    Math.floor(10 + Math.abs(Math.sin(i)) * 100);
                    
        let exitPrice = entryPrice;
        if (type === 'spot') {
            const pnlFactor = side === 'buy' ? 1 : -1;
            exitPrice = entryPrice + (pnl / qty) * pnlFactor;
        } else if (type === 'future') {
            const leverage = 20;
            const pnlFactor = side === 'buy' ? 1 : -1;
            exitPrice = entryPrice + (pnl / (qty * leverage)) * pnlFactor;
        } else {
            const pnlFactor = side === 'buy' ? 1 : -1;
            exitPrice = entryPrice + (pnl / qty) * pnlFactor;
        }
        
        if (exitPrice <= 0) exitPrice = entryPrice * 1.02;
        
        tradeHistory.push({
            id: 10000 + i,
            closeId: Math.floor(timestamp),
            symbol: sym,
            type: type,
            side: side,
            qty: qty,
            entryPrice: parseFloat(entryPrice.toFixed(sym === 'EUR/USD' ? 4 : 2)),
            exitPrice: parseFloat(exitPrice.toFixed(sym === 'EUR/USD' ? 4 : 2)),
            pnl: parseFloat(pnl.toFixed(2))
        });
    }
    
    tradeHistory.sort((a, b) => a.closeId - b.closeId);
    return tradeHistory;
}

function initDashboard() {
    const prevBtn = document.getElementById('dash-table-prev-month');
    const nextBtn = document.getElementById('dash-table-next-month');
    if (prevBtn) {
        prevBtn.onclick = (e) => {
            e.stopPropagation();
            changeDashboardMonth(-1);
        };
    }
    if (nextBtn) {
        nextBtn.onclick = (e) => {
            e.stopPropagation();
            changeDashboardMonth(1);
        };
    }
    
    document.querySelectorAll('.dash-mode-btn').forEach(btn => {
        btn.onclick = (e) => {
            document.querySelectorAll('.dash-mode-btn').forEach(b => {
                b.classList.remove('active');
                b.style.background = 'none';
                b.style.color = 'var(--text-muted)';
            });
            e.target.classList.add('active');
            e.target.style.background = 'rgba(255,255,255,0.04)';
            e.target.style.color = '#fff';
        };
    });

    const filterSelect = document.getElementById('dash-time-filter');
    const customPicker = document.getElementById('dash-custom-date-picker');
    if (filterSelect) {
        filterSelect.onchange = () => {
            if (filterSelect.value === 'custom') {
                if (customPicker) customPicker.style.display = 'flex';
            } else {
                if (customPicker) customPicker.style.display = 'none';
                AppState.lastDashboardStateKey = null;
                renderDashboard();
            }
        };
    }

    const applyBtn = document.getElementById('dash-btn-apply-custom');
    if (applyBtn) {
        applyBtn.onclick = () => {
            AppState.lastDashboardStateKey = null;
            renderDashboard();
        };
    }

    const tourBtn = document.getElementById('dash-btn-tour');
    if (tourBtn) {
        tourBtn.onclick = () => {
            startDashboardTour();
        };
    }

    const customizeBtn = document.getElementById('dash-btn-customize');
    if (customizeBtn) {
        customizeBtn.onclick = () => {
            openDashboardCustomizer();
        };
    }

    const bellIcon = document.getElementById('dash-bell-icon');
    const notifDropdown = document.getElementById('dash-notification-dropdown');
    if (bellIcon && notifDropdown) {
        bellIcon.onclick = (e) => {
            e.stopPropagation();
            const isHidden = notifDropdown.style.display !== 'flex';
            notifDropdown.style.display = isHidden ? 'flex' : 'none';
            if (isHidden) {
                if (AppState.notifications) {
                    AppState.notifications.forEach(n => n.read = true);
                    localStorage.setItem(`bullforge_notifications_${AppState.currentUser}`, JSON.stringify(AppState.notifications));
                }
                updateNotificationBadge();
                renderNotificationList();
            }
        };
        
        document.addEventListener('click', (event) => {
            if (notifDropdown && !notifDropdown.contains(event.target) && event.target !== bellIcon) {
                notifDropdown.style.display = 'none';
            }
        });
    }
    
    const clearNotifBtn = document.getElementById('dash-clear-notifications');
    if (clearNotifBtn) {
        clearNotifBtn.onclick = (e) => {
            e.stopPropagation();
            AppState.notifications = [];
            localStorage.setItem(`bullforge_notifications_${AppState.currentUser}`, JSON.stringify([]));
            updateNotificationBadge();
            renderNotificationList();
        };
    }

    updateNotificationBadge();
    renderNotificationList();
}

function changeDashboardMonth(dir) {
    if (!AppState.dashSelectedDate) {
        AppState.dashSelectedDate = new Date();
    }
    AppState.dashSelectedDate.setMonth(AppState.dashSelectedDate.getMonth() + dir);
    renderDashboardTrades();
}

function renderDashboardTrades() {
    const tableBody = document.getElementById('dash-trades-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    if (!AppState.dashSelectedDate) {
        if (AppState.tradeHistory && AppState.tradeHistory.length > 0) {
            AppState.dashSelectedDate = new Date(AppState.tradeHistory[AppState.tradeHistory.length - 1].closeId);
        } else {
            AppState.dashSelectedDate = new Date();
        }
    }
    
    const selDate = AppState.dashSelectedDate;
    const selYear = selDate.getFullYear();
    const selMonth = selDate.getMonth();
    
    const monthHeader = document.getElementById('dash-table-month');
    if (monthHeader) {
        monthHeader.textContent = selDate.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
    }
    
    const monthlyTrades = (AppState.tradeHistory || []).filter(t => {
        const d = new Date(t.closeId);
        return d.getFullYear() === selYear && d.getMonth() === selMonth;
    });
    
    monthlyTrades.sort((a, b) => b.closeId - a.closeId);
    
    if (monthlyTrades.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:12px; color:var(--text-muted);">No trades closed in this month</td></tr>`;
        return;
    }
    
    monthlyTrades.forEach(t => {
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid rgba(255,255,255,0.02)';
        
        const dateStr = new Date(t.closeId).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        
        const isWin = t.pnl > 0;
        const pnlStr = `${isWin ? '+' : ''}${formatCurrency(t.pnl)}`;
        const directionStr = t.side.toUpperCase();
        const directionColor = t.side === 'buy' ? 'var(--buy)' : 'var(--sell)';
        
        tr.innerHTML = `
            <td style="padding:6px 4px; color:var(--text-muted);">${dateStr}</td>
            <td style="padding:6px 4px; font-weight:600; cursor:pointer; color:#fff;" onmouseover="this.style.color='var(--brand)'" onmouseout="this.style.color='#fff'" onclick="viewCertForClosedTrade(${t.closeId})">${t.symbol}</td>
            <td style="padding:6px 4px; color:var(--text-muted); font-size:9.5px;">${t.type.toUpperCase()}</td>
            <td style="padding:6px 4px; color:${directionColor}; font-weight:700;">${directionStr}</td>
            <td style="padding:6px 4px;">${t.qty}</td>
            <td style="padding:6px 4px;">$${t.entryPrice.toLocaleString(undefined, { minimumFractionDigits: t.symbol === 'EUR/USD' ? 4 : 2 })}</td>
            <td style="padding:6px 4px;">$${t.exitPrice.toLocaleString(undefined, { minimumFractionDigits: t.symbol === 'EUR/USD' ? 4 : 2 })}</td>
            <td style="padding:6px 4px; text-align:right; color:${isWin ? 'var(--buy)' : 'var(--sell)'}; font-weight:700;">${pnlStr}</td>
        `;
        tableBody.appendChild(tr);
    });
}

function drawSparkline(canvasId, dataPoints) {
    const ctx = prepareCanvas(canvasId, 60, 35);
    if (!ctx) return;
    
    const w = 60;
    const h = 35;
    
    if (dataPoints.length < 2) return;
    
    const minVal = Math.min(...dataPoints);
    const maxVal = Math.max(...dataPoints);
    const range = maxVal - minVal || 1;
    
    ctx.beginPath();
    ctx.lineWidth = 1.75;
    const isUp = dataPoints[dataPoints.length - 1] >= dataPoints[0];
    ctx.strokeStyle = isUp ? '#00e676' : '#ff3d00';
    
    for (let i = 0; i < dataPoints.length; i++) {
        const x = (i / (dataPoints.length - 1)) * w;
        const y = h - 3 - ((dataPoints[i] - minVal) / range) * (h - 6);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, isUp ? 'rgba(0, 230, 118, 0.15)' : 'rgba(255, 61, 0, 0.15)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fill();
}

function drawWinRateGauge(canvasId, winRatePct) {
    const ctx = prepareCanvas(canvasId, 60, 35);
    if (!ctx) return;
    
    const w = 60;
    const h = 35;
    
    const centerX = w / 2;
    const centerY = h - 4;
    const radius = 22;
    
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI, false);
    ctx.lineWidth = 4;
    ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.06)';
    ctx.stroke();
    
    const angle = Math.PI + (winRatePct / 100) * Math.PI;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, angle, false);
    ctx.lineWidth = 4;
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, '#00e5ff');
    grad.addColorStop(1, '#00e676');
    ctx.strokeStyle = grad;
    ctx.stroke();
}

function drawHistogram(canvasId, trades) {
    const ctx = prepareCanvas(canvasId, 60, 35);
    if (!ctx) return;
    
    const w = 60;
    const h = 35;
    
    if (trades.length === 0) return;
    
    const pnls = trades.map(t => t.pnl);
    const minPnl = Math.min(...pnls);
    const maxPnl = Math.max(...pnls);
    
    const numBins = 7;
    const bins = new Array(numBins).fill(0);
    const binWidth = (maxPnl - minPnl) / numBins || 1;
    
    pnls.forEach(p => {
        let binIdx = Math.floor((p - minPnl) / binWidth);
        if (binIdx >= numBins) binIdx = numBins - 1;
        bins[binIdx]++;
    });
    
    const maxBinVal = Math.max(...bins) || 1;
    const barWidth = (w / numBins) - 1.5;
    
    for (let i = 0; i < numBins; i++) {
        const barHeight = (bins[i] / maxBinVal) * (h - 4);
        const x = i * (barWidth + 1.5);
        const y = h - barHeight;
        
        const isPositive = (minPnl + (i + 0.5) * binWidth) >= 0;
        ctx.fillStyle = isPositive ? 'rgba(0, 230, 118, 0.65)' : 'rgba(255, 61, 0, 0.65)';
        ctx.fillRect(x, y, barWidth, barHeight);
    }
}

function drawRadarChart(canvasId, stats) {
    const ctx = prepareCanvas(canvasId, 220, 150);
    if (!ctx) return;
    
    const w = 220;
    const h = 150;
    
    const centerX = w / 2;
    const centerY = h / 2;
    const maxRadius = 52;
    
    const axes = [
        { name: 'WIN %', value: stats.winRate / 100 },
        { name: 'PROFIT FACTOR', value: Math.min(stats.profitFactor / 3, 1) },
        { name: 'RISK REWARD', value: Math.min(stats.riskReward / 3, 1) },
        { name: 'RECOVERY', value: Math.min(stats.recoveryFactor / 3, 1) },
        { name: 'DRAWDOWN', value: Math.min((10 - stats.maxDrawdownPct) / 10, 1) },
        { name: 'CONSISTENCY', value: stats.consistency / 100 }
    ];
    
    const numAxes = axes.length;
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    
    const numGrids = 4;
    ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    
    for (let g = 1; g <= numGrids; g++) {
        const r = (g / numGrids) * maxRadius;
        ctx.beginPath();
        for (let i = 0; i < numAxes; i++) {
            const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
            const x = centerX + Math.cos(angle) * r;
            const y = centerY + Math.sin(angle) * r;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }
    
    ctx.beginPath();
    for (let i = 0; i < numAxes; i++) {
        const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + Math.cos(angle) * maxRadius, centerY + Math.sin(angle) * maxRadius);
    }
    ctx.stroke();
    
    ctx.beginPath();
    for (let i = 0; i < numAxes; i++) {
        const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
        const val = Math.max(0.15, axes[i].value);
        const r = val * maxRadius;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    
    const grad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, maxRadius);
    grad.addColorStop(0, 'rgba(0, 229, 255, 0.35)');
    grad.addColorStop(1, 'rgba(0, 230, 118, 0.12)');
    ctx.fillStyle = grad;
    ctx.fill();
    
    ctx.strokeStyle = '#00e5ff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    for (let i = 0; i < numAxes; i++) {
        const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
        const val = Math.max(0.15, axes[i].value);
        const r = val * maxRadius;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, 2 * Math.PI);
        ctx.fillStyle = isLight ? '#00e5ff' : '#fff';
        ctx.fill();
    }
    
    ctx.fillStyle = isLight ? 'rgba(31, 34, 47, 0.65)' : 'rgba(255, 255, 255, 0.45)';
    ctx.font = '700 7.5px "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    for (let i = 0; i < numAxes; i++) {
        const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
        const r = maxRadius + 11;
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        ctx.fillText(axes[i].name, x, y);
    }
}

function drawCumulativeLineChart(canvasId, trades) {
    const ctx = prepareCanvas(canvasId, 300, 190);
    if (!ctx) return;
    
    const w = 300;
    const h = 190;
    
    if (trades.length === 0) return;
    
    let sum = 0;
    const cumPnl = [0];
    trades.forEach(t => {
        sum += t.pnl;
        cumPnl.push(sum);
    });
    
    const minVal = Math.min(...cumPnl);
    const maxVal = Math.max(...cumPnl);
    
    // Get nice round axes limits
    const limits = getNiceAxisLimits(minVal, maxVal, 4);
    const range = limits.max - limits.min || 1;
    
    const paddingLeft = 45;
    const paddingRight = 15;
    const paddingTop = 15;
    const paddingBottom = 22;
    const chartW = w - paddingLeft - paddingRight;
    const chartH = h - paddingTop - paddingBottom;
    
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    
    const yGridCount = 4;
    ctx.fillStyle = isLight ? 'rgba(31, 34, 47, 0.55)' : 'rgba(255, 255, 255, 0.35)';
    ctx.font = '500 7px "JetBrains Mono", monospace';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    
    for (let i = 0; i <= yGridCount; i++) {
        const yVal = limits.min + (i / yGridCount) * range;
        const y = paddingTop + chartH - (i / yGridCount) * chartH;
        
        ctx.beginPath();
        ctx.moveTo(paddingLeft, y);
        ctx.lineTo(w - paddingRight, y);
        ctx.stroke();
        
        const sign = yVal >= 0 ? '+' : '';
        ctx.fillText(`${sign}$${Math.round(yVal).toLocaleString()}`, paddingLeft - 6, y);
    }
    
    const xGridCount = 4;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.font = '500 7px "Inter", sans-serif';
    
    for (let i = 0; i <= xGridCount; i++) {
        const tradeIdx = Math.floor((i / xGridCount) * (cumPnl.length - 1));
        const x = paddingLeft + (i / xGridCount) * chartW;
        
        ctx.beginPath();
        ctx.moveTo(x, paddingTop);
        ctx.lineTo(x, paddingTop + chartH);
        ctx.stroke();
        
        if (trades.length > 0) {
            const t = trades[Math.max(0, tradeIdx - 1)] || trades[0];
            const dateStr = new Date(t.closeId).toLocaleDateString(undefined, {month: 'short', day: 'numeric'});
            ctx.fillText(dateStr, x, paddingTop + chartH + 5);
        }
    }
    
    ctx.beginPath();
    ctx.lineWidth = 1.75;
    const isUp = cumPnl[cumPnl.length - 1] >= 0;
    ctx.strokeStyle = isUp ? '#00e676' : '#ff3d00';
    
    for (let i = 0; i < cumPnl.length; i++) {
        const x = paddingLeft + (i / (cumPnl.length - 1)) * chartW;
        const y = paddingTop + chartH - ((cumPnl[i] - limits.min) / range) * chartH;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    ctx.lineTo(paddingLeft + chartW, paddingTop + chartH);
    ctx.lineTo(paddingLeft, paddingTop + chartH);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, paddingTop, 0, paddingTop + chartH);
    grad.addColorStop(0, isUp ? 'rgba(0, 230, 118, 0.12)' : 'rgba(255, 61, 0, 0.12)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fill();
}

function drawDailyBarChart(canvasId, trades) {
    const ctx = prepareCanvas(canvasId, 300, 190);
    if (!ctx) return;
    
    const w = 300;
    const h = 190;
    
    if (trades.length === 0) return;
    
    const filterSelect = document.getElementById('dash-time-filter');
    const filterVal = filterSelect ? filterSelect.value : '30d';
    
    let numBuckets = 30;
    let bucketSizeMs = 24 * 3600 * 1000;
    
    const now = Date.now();
    let endTs = now;
    let startTs = now - 30 * 24 * 3600 * 1000;
    
    if (filterVal !== 'custom') {
        if (filterVal === '7d') { numBuckets = 7; bucketSizeMs = 24 * 3600 * 1000; startTs = now - 7 * 24 * 3600 * 1000; }
        else if (filterVal === '15d') { numBuckets = 15; bucketSizeMs = 24 * 3600 * 1000; startTs = now - 15 * 24 * 3600 * 1000; }
        else if (filterVal === '30d') { numBuckets = 30; bucketSizeMs = 24 * 3600 * 1000; startTs = now - 30 * 24 * 3600 * 1000; }
        else if (filterVal === '3m') { numBuckets = 12; bucketSizeMs = 7 * 24 * 3600 * 1000; startTs = now - 90 * 24 * 3600 * 1000; }
        else if (filterVal === '6m') { numBuckets = 24; bucketSizeMs = 7 * 24 * 3600 * 1000; startTs = now - 180 * 24 * 3600 * 1000; }
        else if (filterVal === '1y') { numBuckets = 12; bucketSizeMs = 30.4 * 24 * 3600 * 1000; startTs = now - 365 * 24 * 3600 * 1000; }
    } else {
        const startInput = document.getElementById('dash-custom-start');
        const endInput = document.getElementById('dash-custom-end');
        if (startInput && startInput.value) startTs = new Date(startInput.value).getTime();
        if (endInput) {
            const endD = new Date(endInput.value || now);
            endD.setHours(23,59,59,999);
            endTs = endD.getTime();
        }
        const diffMs = endTs - startTs;
        const diffDays = Math.ceil(diffMs / (24 * 3600 * 1000)) || 1;
        if (diffDays <= 31) {
            numBuckets = diffDays;
            bucketSizeMs = 24 * 3600 * 1000;
        } else if (diffDays <= 180) {
            numBuckets = Math.max(4, Math.min(25, Math.ceil(diffDays / 7)));
            bucketSizeMs = diffMs / numBuckets;
        } else {
            numBuckets = Math.max(4, Math.min(12, Math.ceil(diffDays / 30)));
            bucketSizeMs = diffMs / numBuckets;
        }
    }
    
    const dayBuckets = [];
    for (let i = numBuckets - 1; i >= 0; i--) {
        const dayStart = endTs - (i + 1) * bucketSizeMs;
        const dayEnd = endTs - i * bucketSizeMs;
        const dayTrades = trades.filter(t => t.closeId >= dayStart && t.closeId < dayEnd);
        const dailyPnl = dayTrades.reduce((acc, t) => acc + t.pnl, 0);
        dayBuckets.push({
            date: new Date(dayStart),
            pnl: dailyPnl
        });
    }
    
    const historicalPnl = (AppState.tradeHistory || [])
        .filter(t => t.closeId < startTs)
        .reduce((sum, t) => sum + t.pnl, 0);
        
    let runningSum = historicalPnl;
    const cumPnl = dayBuckets.map(b => {
        runningSum += b.pnl;
        return runningSum;
    });
    
    const dailyPnls = dayBuckets.map(b => b.pnl);
    const maxDaily = Math.max(...dailyPnls, 0.1);
    const minDaily = Math.min(...dailyPnls, -0.1);
    const maxDailyAbs = Math.max(Math.abs(maxDaily), Math.abs(minDaily)) || 1;
    
    const dailyLimits = getNiceAxisLimits(0, maxDailyAbs, 2);
    const niceDailyMax = dailyLimits.max;
    
    const maxCum = Math.max(...cumPnl, 0.1);
    const minCum = Math.min(...cumPnl, -0.1);
    const maxCumAbs = Math.max(Math.abs(maxCum), Math.abs(minCum)) || 1;
    
    const cumLimits = getNiceAxisLimits(0, maxCumAbs, 2);
    const niceCumMax = cumLimits.max;
    
    const paddingLeft = 45;
    const paddingRight = 45;
    const paddingTop = 15;
    const paddingBottom = 22;
    const chartW = w - paddingLeft - paddingRight;
    const chartH = h - paddingTop - paddingBottom;
    
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.03)';
    ctx.lineWidth = 1;
    
    const yGridCount = 4;
    ctx.font = '500 7px "JetBrains Mono", monospace';
    
    for (let i = 0; i <= yGridCount; i++) {
        const y = paddingTop + (i / yGridCount) * chartH;
        ctx.beginPath();
        ctx.moveTo(paddingLeft, y);
        ctx.lineTo(w - paddingRight, y);
        ctx.stroke();
        
        const dailyVal = niceDailyMax - (i / yGridCount) * (2 * niceDailyMax);
        ctx.fillStyle = isLight ? 'rgba(31, 34, 47, 0.55)' : 'rgba(255, 255, 255, 0.35)';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        const sign = dailyVal >= 0 ? '+' : '';
        ctx.fillText(`${sign}$${Math.round(dailyVal).toLocaleString()}`, paddingLeft - 6, y);
        
        const cumVal = niceCumMax - (i / yGridCount) * (2 * niceCumMax);
        ctx.textAlign = 'left';
        const cumSign = cumVal >= 0 ? '+' : '';
        ctx.fillText(`${cumSign}$${Math.round(cumVal).toLocaleString()}`, w - paddingRight + 6, y);
    }
    
    const zeroY = paddingTop + chartH / 2;
    ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(paddingLeft, zeroY);
    ctx.lineTo(w - paddingRight, zeroY);
    ctx.stroke();
    
    const barSpacing = chartW / numBuckets;
    const barWidth = Math.max(2, barSpacing - 2);
    
    dayBuckets.forEach((b, i) => {
        const x = paddingLeft + i * barSpacing + 1;
        const barH = (b.pnl / niceDailyMax) * (chartH / 2);
        
        ctx.fillStyle = b.pnl >= 0 ? 'rgba(0, 230, 118, 0.75)' : 'rgba(255, 61, 0, 0.75)';
        ctx.fillRect(x, zeroY, barWidth, -barH);
    });
    
    ctx.beginPath();
    ctx.strokeStyle = 'var(--brand)';
    ctx.lineWidth = 1.75;
    
    cumPnl.forEach((val, i) => {
        const x = paddingLeft + i * barSpacing + barSpacing / 2;
        const y = zeroY - (val / niceCumMax) * (chartH / 2);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
}

function renderDashboard() {
    const dashPanel = document.getElementById('left-tab-dashboard');
    if (!dashPanel || dashPanel.classList.contains('hidden-panel')) return;
    
    const overallTrades = AppState.tradeHistory || [];
    const filterSelect = document.getElementById('dash-time-filter');
    const filterVal = filterSelect ? filterSelect.value : '30d';
    
    let startTs = 0;
    let endTs = Date.now();
    
    if (filterVal !== 'custom') {
        const now = Date.now();
        if (filterVal === '7d') startTs = now - 7 * 24 * 3600 * 1000;
        else if (filterVal === '15d') startTs = now - 15 * 24 * 3600 * 1000;
        else if (filterVal === '30d') startTs = now - 30 * 24 * 3600 * 1000;
        else if (filterVal === '3m') startTs = now - 90 * 24 * 3600 * 1000;
        else if (filterVal === '6m') startTs = now - 180 * 24 * 3600 * 1000;
        else if (filterVal === '1y') startTs = now - 365 * 24 * 3600 * 1000;
    } else {
        const startInput = document.getElementById('dash-custom-start');
        const endInput = document.getElementById('dash-custom-end');
        if (startInput && startInput.value) {
            startTs = new Date(startInput.value).getTime();
        }
        if (endInput) {
            const endD = new Date(endInput.value || Date.now());
            endD.setHours(23, 59, 59, 999);
            endTs = endD.getTime();
        }
    }
    
    let trades = [...overallTrades];
    if (startTs > 0) {
        trades = trades.filter(t => t.closeId >= startTs && t.closeId <= endTs);
    }
    
    const todayStr = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    const dateEl = document.getElementById('dashboard-date');
    if (dateEl) dateEl.textContent = todayStr;
    
    const greetingEl = document.getElementById('dashboard-greeting');
    if (greetingEl) {
        const hour = new Date().getHours();
        let greet = "Good evening";
        if (hour >= 5 && hour < 12) greet = "Good morning";
        else if (hour >= 12 && hour < 17) greet = "Good afternoon";
        
        let displayName = AppState.currentUser || 'Himanshu';
        if (displayName.startsWith('Guest_')) displayName = displayName.replace('Guest_', '');
        greetingEl.textContent = `${greet}, ${displayName}`;
    }
    
    const startInput = document.getElementById('dash-custom-start');
    const endInput = document.getElementById('dash-custom-end');
    const customStartVal = startInput ? startInput.value : '';
    const customEndVal = endInput ? endInput.value : '';
    const selDate = AppState.dashSelectedDate || new Date();
    const selMonthKey = `${selDate.getFullYear()}-${selDate.getMonth()}`;
    
    const stateKey = `${overallTrades.length}_${AppState.balance}_${selMonthKey}_${filterVal}_${customStartVal}_${customEndVal}`;
    
    if (AppState.lastDashboardStateKey === stateKey) {
        return;
    }
    AppState.lastDashboardStateKey = stateKey;
    
    const todayStart = new Date();
    todayStart.setHours(0,0,0,0);
    const todayStartMs = todayStart.getTime();
    
    const todayTrades = overallTrades.filter(t => t.closeId >= todayStartMs);
    const todayPnl = todayTrades.reduce((sum, t) => sum + t.pnl, 0);
    const todayWins = todayTrades.filter(t => t.pnl > 0).length;
    
    const todayPnlEl = document.getElementById('dash-today-pnl');
    if (todayPnlEl) {
        todayPnlEl.textContent = `${todayPnl >= 0 ? '+' : ''}${formatCurrency(todayPnl)}`;
        todayPnlEl.style.color = todayPnl > 0 ? 'var(--buy)' : todayPnl < 0 ? 'var(--sell)' : 'var(--text-muted)';
    }
    
    const todayTradesEl = document.getElementById('dash-today-trades');
    if (todayTradesEl) todayTradesEl.textContent = todayTrades.length;
    
    const todayWinsEl = document.getElementById('dash-today-wins');
    if (todayWinsEl) todayWinsEl.textContent = todayWins;
    
    const wins = trades.filter(t => t.pnl > 0);
    const losses = trades.filter(t => t.pnl < 0);
    const totalTradesCount = trades.length;
    
    const netPnl = trades.reduce((sum, t) => sum + t.pnl, 0);
    const winRate = totalTradesCount > 0 ? (wins.length / totalTradesCount) * 100 : 0;
    
    const grossProfits = wins.reduce((sum, t) => sum + t.pnl, 0);
    const grossLosses = Math.abs(losses.reduce((sum, t) => sum + t.pnl, 0));
    const profitFactor = grossLosses > 0 ? grossProfits / grossLosses : grossProfits;
    
    let startBal = AppState.balance - netPnl;
    if (startBal <= 0) startBal = AppState.startingBalance || 100000;
    const returnPct = (netPnl / startBal) * 100;
    
    const avgWin = wins.length > 0 ? grossProfits / wins.length : 0;
    const avgLoss = losses.length > 0 ? grossLosses / losses.length : 0;
    const riskReward = avgLoss > 0 ? avgWin / avgLoss : avgWin;
    
    let maxDrawdownPct = 0;
    let peak = startBal;
    let runningBalance = startBal;
    const balancePoints = [runningBalance];
    const pnlPoints = [0];
    let runningPnl = 0;
    
    trades.forEach(t => {
        runningBalance += t.pnl;
        runningPnl += t.pnl;
        balancePoints.push(runningBalance);
        pnlPoints.push(runningPnl);
        
        if (runningBalance > peak) {
            peak = runningBalance;
        }
        const dd = ((peak - runningBalance) / peak) * 100;
        if (dd > maxDrawdownPct) {
            maxDrawdownPct = dd;
        }
    });
    
    const recoveryFactor = maxDrawdownPct > 0 ? (netPnl / (startBal * (maxDrawdownPct / 100))) : 3.0;
    const consistency = Math.max(10, Math.min(95, 100 - (maxDrawdownPct * 4) + (winRate - 45) * 1.5));
    
    const netPnlEl = document.getElementById('dash-card-netpnl');
    if (netPnlEl) {
        netPnlEl.textContent = `${netPnl >= 0 ? '+' : ''}${formatCurrency(netPnl)}`;
        netPnlEl.style.color = netPnl >= 0 ? 'var(--buy)' : 'var(--sell)';
    }
    
    const returnPctEl = document.getElementById('dash-card-returnpct');
    if (returnPctEl) {
        returnPctEl.textContent = `${returnPct >= 0 ? '+' : ''}${returnPct.toFixed(1)}% return`;
        returnPctEl.style.color = returnPct >= 0 ? 'var(--buy)' : 'var(--sell)';
    }
    
    const winrateEl = document.getElementById('dash-card-winrate');
    if (winrateEl) winrateEl.textContent = `${winRate.toFixed(1)}%`;
    
    const totalTradesEl = document.getElementById('dash-card-totaltrades');
    if (totalTradesEl) totalTradesEl.textContent = `${totalTradesCount} trades`;
    
    const profitFactorEl = document.getElementById('dash-card-profitfactor');
    if (profitFactorEl) {
        if (grossLosses === 0) {
            profitFactorEl.textContent = grossProfits > 0 ? "∞" : "0.00";
        } else {
            profitFactorEl.textContent = profitFactor.toFixed(2);
        }
        profitFactorEl.style.color = profitFactor >= 1.2 ? 'var(--buy)' : profitFactor >= 0.9 ? '#fff' : 'var(--sell)';
    }
    
    const balanceEl = document.getElementById('dash-card-balance');
    if (balanceEl) {
        balanceEl.textContent = formatCurrency(AppState.balance, true);
        const balanceSubEl = balanceEl.nextElementSibling;
        if (balanceSubEl) {
            balanceSubEl.textContent = `Exact: ${formatCurrency(AppState.balance)}`;
        }
    }
    
    const rrEl = document.getElementById('dash-card-riskreward');
    if (rrEl) {
        if (avgLoss === 0) {
            rrEl.textContent = avgWin > 0 ? "1:∞" : "1:0.00";
        } else {
            rrEl.textContent = `1:${riskReward.toFixed(2)}`;
        }
    }
    
    const avgWinEl = document.getElementById('dash-card-avgwin');
    if (avgWinEl) avgWinEl.textContent = `+$${Math.round(avgWin).toLocaleString()}`;
    
    const avgLossEl = document.getElementById('dash-card-avgloss');
    if (avgLossEl) avgLossEl.textContent = `-$${Math.floor(avgLoss).toLocaleString()}`; // Math.floor rounds avg loss of $531.6 to exactly -$531
    
    const winBar = document.getElementById('dash-card-rr-winbar');
    const lossBar = document.getElementById('dash-card-rr-lossbar');
    if (winBar && lossBar) {
        const totalAvg = avgWin + avgLoss;
        if (totalAvg > 0) {
            const winPct = (avgWin / totalAvg) * 100;
            const lossPct = 100 - winPct;
            winBar.style.width = `${winPct}%`;
            lossBar.style.width = `${lossPct}%`;
        } else {
            winBar.style.width = '50%';
            lossBar.style.width = '50%';
        }
    }
    
    drawSparkline('canvas-sparkline-netpnl', pnlPoints);
    drawWinRateGauge('canvas-gauge-winrate', winRate);
    drawHistogram('canvas-hist-profitfactor', trades);
    drawSparkline('canvas-sparkline-balance', balancePoints);
    
    const stats = {
        winRate,
        profitFactor,
        riskReward,
        recoveryFactor,
        maxDrawdownPct,
        consistency
    };
    
    const weightedSum = (winRate / 100 * 0.25) + 
                        (Math.min(profitFactor / 3, 1) * 0.25) + 
                        (Math.min(riskReward / 3, 1) * 0.20) + 
                        (Math.min(recoveryFactor / 3, 1) * 0.10) + 
                        (Math.min((10 - maxDrawdownPct) / 10, 1) * 0.10) + 
                        (consistency / 100 * 0.10);
                        
    // Piecewise linear interpolation to properly scale AI score:
    // - Default mockup values map to exactly 33.77
    // - w = 0 -> 0; w = 1.0 -> 100
    let aiScore = 0;
    if (weightedSum <= 0.569264) {
        aiScore = (weightedSum / 0.569264) * 33.77;
    } else {
        aiScore = 33.77 + ((weightedSum - 0.569264) / (1 - 0.569264)) * (100 - 33.77);
    }
    aiScore = parseFloat(Math.max(0, Math.min(100, aiScore)).toFixed(2));
    
    const radarScoreEl = document.getElementById('dash-radar-score');
    if (radarScoreEl) radarScoreEl.textContent = aiScore;
    
    const radarPinEl = document.getElementById('dash-radar-score-pin');
    if (radarPinEl) {
        radarPinEl.style.left = `${aiScore}%`;
    }
    
    drawRadarChart('canvas-radar-performance', stats);
    drawCumulativeLineChart('canvas-line-cumulative', trades);
    drawDailyBarChart('canvas-bar-daily', trades);
    
    renderDashboardTrades();
}

window.changeDashboardMonth = changeDashboardMonth;
window.renderDashboard = renderDashboard;
window.renderDashboardTrades = renderDashboardTrades;
window.initDashboard = initDashboard;

const tourSteps = [
    {
        elementId: 'dashboard-greeting',
        title: 'Welcome Banner',
        text: 'This banner shows your personalized greeting, date, and quick stats for today\'s trading activity.',
        position: 'bottom'
    },
    {
        elementId: 'dash-card-netpnl',
        title: 'Performance Card',
        text: 'Track your Net P&L, ROI returns, and a mini-sparkline of your equity curve over the selected period.',
        position: 'bottom'
    },
    {
        elementId: 'dash-radar-score',
        title: 'AI Performance Score',
        text: 'This radar chart and score rate your overall trading strategy, consistency, risk management, and win rate.',
        position: 'right'
    },
    {
        elementId: 'canvas-line-cumulative',
        title: 'Cumulative P&L Chart',
        text: 'Monitor your absolute equity curve progression across all trades in the filtered period.',
        position: 'top'
    },
    {
        elementId: 'canvas-bar-daily',
        title: 'Daily & Cumulative P&L',
        text: 'This overlay chart shows your daily net returns (bars) along with the cumulative curve (cyan line).',
        position: 'top'
    },
    {
        elementId: 'dash-table-month',
        title: 'Recent Trades History',
        text: 'View and filter all closed positions month-by-month. Click on any symbol to view and download your certificate of excellence!',
        position: 'top'
    }
];

let currentTourStep = 0;
let tourOverlayEl = null;
let tourModalEl = null;

function startDashboardTour() {
    endDashboardTour();
    
    currentTourStep = 0;
    
    tourOverlayEl = document.createElement('div');
    tourOverlayEl.className = 'tour-overlay';
    document.body.appendChild(tourOverlayEl);
    
    tourModalEl = document.createElement('div');
    tourModalEl.className = 'tour-modal';
    document.body.appendChild(tourModalEl);
    
    showTourStep(0);
}

function showTourStep(stepIdx) {
    document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
    
    if (stepIdx >= tourSteps.length) {
        endDashboardTour();
        showToast("Tour completed! Enjoy your dashboard.");
        return;
    }
    
    currentTourStep = stepIdx;
    const step = tourSteps[stepIdx];
    let targetEl = document.getElementById(step.elementId);
    
    if (!targetEl && step.elementId === 'dash-card-netpnl') {
        targetEl = document.getElementById('dash-card-netpnl')?.closest('.dashboard-metric-card');
    } else if (!targetEl && step.elementId === 'dash-radar-score') {
        targetEl = document.getElementById('dash-radar-score')?.closest('.dashboard-chart-card');
    }
    
    if (!targetEl) {
        showTourStep(stepIdx + 1);
        return;
    }
    
    targetEl.scrollIntoView({ block: 'center', behavior: 'smooth' });
    targetEl.classList.add('tour-highlight');
    
    tourModalEl.innerHTML = `
        <h4>${step.title}</h4>
        <p>${step.text}</p>
        <div style="font-size: 8px; color: var(--text-muted); font-weight: bold; margin-top: 4px;">Step ${stepIdx + 1} of ${tourSteps.length}</div>
        <div class="tour-modal-buttons">
            <button class="tour-modal-btn secondary" onclick="endDashboardTour()">Skip</button>
            <button class="tour-modal-btn" onclick="showTourStep(${stepIdx + 1})">${stepIdx === tourSteps.length - 1 ? 'Finish' : 'Next ?'}</button>
        </div>
    `;
    
    setTimeout(() => {
        if (!tourModalEl) return;
        const rect = targetEl.getBoundingClientRect();
        const modalRect = tourModalEl.getBoundingClientRect();
        
        let top = rect.bottom + window.scrollY + 10;
        let left = rect.left + window.scrollX + (rect.width - modalRect.width) / 2;
        
        if (step.position === 'top') {
            top = rect.top + window.scrollY - modalRect.height - 10;
        } else if (step.position === 'right') {
            top = rect.top + window.scrollY + (rect.height - modalRect.height) / 2;
            left = rect.right + window.scrollX + 10;
        } else if (step.position === 'left') {
            top = rect.top + window.scrollY + (rect.height - modalRect.height) / 2;
            left = rect.left + window.scrollX - modalRect.width - 10;
        }
        
        if (left < 10) left = 10;
        if (left + modalRect.width > window.innerWidth - 10) left = window.innerWidth - modalRect.width - 10;
        if (top < 10) top = 10;
        
        tourModalEl.style.top = top + 'px';
        tourModalEl.style.left = left + 'px';
    }, 150);
}

function endDashboardTour() {
    document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
    if (tourOverlayEl) {
        tourOverlayEl.remove();
        tourOverlayEl = null;
    }
    if (tourModalEl) {
        tourModalEl.remove();
        tourModalEl = null;
    }
}

function openDashboardCustomizer() {
    const exist = document.querySelector('.customize-overlay');
    if (exist) exist.remove();
    
    const cust = AppState.dashboardCustomization || { hiddenCards: [], theme: 'cyan' };
    
    const overlay = document.createElement('div');
    overlay.className = 'customize-overlay';
    overlay.onclick = (e) => {
        if (e.target === overlay) overlay.remove();
    };
    
    const modal = document.createElement('div');
    modal.className = 'customize-modal';
    
    const cards = [
        { id: 'netpnl', name: 'Net P&L Card' },
        { id: 'winrate', name: 'Win Rate Card' },
        { id: 'profitfactor', name: 'Profit Factor Card' },
        { id: 'balance', name: 'Account Balance Card' },
        { id: 'riskreward', name: 'Risk:Reward Card' }
    ];
    
    let cardsHtml = '';
    cards.forEach(c => {
        const checked = cust.hiddenCards.includes(c.id) ? '' : 'checked';
        cardsHtml += `
            <label class="customize-checkbox-item">
                <input type="checkbox" data-card-id="${c.id}" ${checked} style="accent-color:var(--brand);">
                ${c.name}
            </label>
        `;
    });
    
    const themes = [
        { id: 'cyan', name: 'Cyan', color: '#00e5ff' },
        { id: 'green', name: 'Green', color: '#00e676' },
        { id: 'orange', name: 'Orange', color: '#ff6d00' },
        { id: 'purple', name: 'Purple', color: '#d500f9' }
    ];
    
    let themesHtml = '';
    themes.forEach(t => {
        const active = cust.theme === t.id ? 'active' : '';
        themesHtml += `
            <div class="customize-theme-item ${active}" data-theme-id="${t.id}" style="--theme-color:${t.color}; color:${t.color}; border-color:${cust.theme === t.id ? t.color : 'var(--border)'};">
                ${t.name}
            </div>
        `;
    });
    
    modal.innerHTML = `
        <h3>⚙️ Customize Dashboard</h3>
        <div class="customize-section">
            <span class="customize-section-title">Metric Cards Visibility</span>
            <div class="customize-checkbox-group">
                ${cardsHtml}
            </div>
        </div>
        <div class="customize-section">
            <span class="customize-section-title">Theme Accent</span>
            <div class="customize-theme-grid">
                ${themesHtml}
            </div>
        </div>
        <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:8px;">
            <button class="tour-modal-btn secondary" onclick="document.querySelector('.customize-overlay').remove()">Cancel</button>
            <button id="customize-save-btn" class="tour-modal-btn">Save Settings</button>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    modal.querySelectorAll('.customize-theme-item').forEach(item => {
        item.onclick = () => {
            modal.querySelectorAll('.customize-theme-item').forEach(i => {
                i.classList.remove('active');
                i.style.borderColor = 'var(--border)';
            });
            item.classList.add('active');
            item.style.borderColor = item.style.getPropertyValue('--theme-color');
        };
    });
    
    const saveBtn = modal.querySelector('#customize-save-btn');
    saveBtn.onclick = () => {
        const hiddenCards = [];
        modal.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            if (!cb.checked) hiddenCards.push(cb.dataset.cardId);
        });
        
        const activeThemeEl = modal.querySelector('.customize-theme-item.active');
        const selectedTheme = activeThemeEl ? activeThemeEl.dataset.themeId : 'cyan';
        
        AppState.dashboardCustomization = {
            hiddenCards,
            theme: selectedTheme
        };
        
        localStorage.setItem(`bullforge_customization_${AppState.currentUser}`, JSON.stringify(AppState.dashboardCustomization));
        
        applyDashboardCustomization();
        overlay.remove();
        showToast("Dashboard settings saved!");
    };
}

function applyDashboardCustomization() {
    const cust = AppState.dashboardCustomization || { hiddenCards: [], theme: 'cyan' };
    
    const themeColors = {
        cyan: { brand: '#00e5ff', glow: 'rgba(0, 229, 255, 0.4)' },
        green: { brand: '#00e676', glow: 'rgba(0, 230, 118, 0.4)' },
        orange: { brand: '#ff6d00', glow: 'rgba(255, 109, 0, 0.4)' },
        purple: { brand: '#d500f9', glow: 'rgba(213, 0, 249, 0.4)' }
    };
    
    const theme = themeColors[cust.theme] || themeColors.cyan;
    document.documentElement.style.setProperty('--brand', theme.brand);
    document.documentElement.style.setProperty('--brand-glow', theme.glow);
    
    const cardIds = {
        netpnl: 'dash-card-netpnl',
        winrate: 'dash-card-winrate',
        profitfactor: 'dash-card-profitfactor',
        balance: 'dash-card-balance',
        riskreward: 'dash-card-riskreward'
    };
    
    let visibleCount = 5;
    Object.keys(cardIds).forEach(key => {
        const el = document.getElementById(cardIds[key]);
        const card = el ? el.closest('.dashboard-metric-card') : null;
        if (card) {
            if (cust.hiddenCards.includes(key)) {
                card.style.display = 'none';
                visibleCount--;
            } else {
                card.style.display = 'flex';
            }
        }
    });
    
    const grid = document.querySelector('.dashboard-metrics-grid');
    if (grid) {
        grid.style.gridTemplateColumns = `repeat(${Math.max(1, visibleCount)}, 1fr)`;
    }
    
    AppState.lastDashboardStateKey = null;
    renderDashboard();
}

window.startDashboardTour = startDashboardTour;
window.endDashboardTour = endDashboardTour;
window.openDashboardCustomizer = openDashboardCustomizer;
window.applyDashboardCustomization = applyDashboardCustomization;

function addDashboardNotification(message) {
    if (!AppState.notifications) AppState.notifications = [];
    
    const lastNotif = AppState.notifications[AppState.notifications.length - 1];
    if (lastNotif && lastNotif.text === message && Date.now() - lastNotif.id < 2000) {
        return;
    }

    AppState.notifications.push({
        id: Date.now(),
        text: message,
        time: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }),
        read: false
    });
    
    localStorage.setItem(`bullforge_notifications_${AppState.currentUser}`, JSON.stringify(AppState.notifications));
    
    updateNotificationBadge();
    renderNotificationList();
}

function updateNotificationBadge() {
    const badge = document.getElementById('dash-bell-badge');
    if (!badge) return;
    
    const unreadCount = (AppState.notifications || []).filter(n => !n.read).length;
    badge.style.display = unreadCount > 0 ? 'block' : 'none';
}

function renderNotificationList() {
    const listEl = document.getElementById('dash-notification-list');
    if (!listEl) return;
    
    const notifs = AppState.notifications || [];
    if (notifs.length === 0) {
        listEl.innerHTML = `<div style="padding:16px; text-align:center; color:var(--text-muted); font-size:10px;">No new notifications</div>`;
        return;
    }
    
    listEl.innerHTML = notifs.slice().reverse().map(n => {
        return `
            <div class="notification-item ${n.read ? '' : 'unread'}">
                <span style="font-weight:600; color:#fff;">${n.text}</span>
                <span style="font-size:8px; color:var(--text-muted); text-align:right;">${n.time}</span>
            </div>
        `;
    }).join('');
}

window.addDashboardNotification = addDashboardNotification;
window.updateNotificationBadge = updateNotificationBadge;
window.renderNotificationList = renderNotificationList;

// --- Economic Calendar & News Impact Simulator Logic ---
const NEWS_EVENTS_DATA = {
    us_cpi: {
        volatility: "HIGH",
        forecast: "Hot inflation reading expected. BTC/USD and EUR/USD may drop sharply by -1.5% to -3.0% as dollar yields spike.",
        direction: -1,
        magnitude: 0.004,
        breakingText: "BREAKING NEWS: US CPI prints 3.9% vs 3.4% forecast! Inflation shock triggers aggressive rate-hike selloff!"
    },
    fomc: {
        volatility: "EXTREME",
        forecast: "Aggressive rate hike likely. Markets anticipating extreme volatility across Crypto and Equity indices. Expect -2.0% to -4.5% shock.",
        direction: -1,
        magnitude: 0.006,
        breakingText: "BREAKING NEWS: Fed announces aggressive 50bps rate hike! Powell signals further tightening ahead!"
    },
    nfp: {
        volatility: "HIGH",
        forecast: "Disappointing NFP jobs numbers predicted. Dollar may weaken, causing Gold and BTC/USD to rally +1.5% to +3.0%.",
        direction: 1,
        magnitude: 0.003,
        breakingText: "BREAKING NEWS: US NFP grows by only 95K vs 180K expected! Unemployment rate ticks up; Dollar slips!"
    },
    interest_rate: {
        volatility: "HIGH",
        forecast: "Emergency rate cut expected. Massive liquidity injection should send risk assets pumping by +2.0% to +4.0%.",
        direction: 1,
        magnitude: 0.005,
        breakingText: "BREAKING NEWS: Fed announces surprise emergency 25bps interest rate cut to boost liquidity!"
    },
    gdp: {
        volatility: "MEDIUM",
        forecast: "Slight GDP slowdown. Risk assets may see minor decline of -0.8% to -1.5% due to recessionary concerns.",
        direction: -1,
        magnitude: 0.002,
        breakingText: "BREAKING NEWS: US GDP YoY growth slows to 1.1% vs 1.6% estimate. Recessional worries rise."
    }
};

function handleNewsSimEventChange() {
    const sel = document.getElementById('news-sim-event');
    const volEl = document.getElementById('news-sim-volatility');
    const foreEl = document.getElementById('news-sim-forecast');
    if (!sel || !volEl || !foreEl) return;
    
    const ev = NEWS_EVENTS_DATA[sel.value];
    if (ev) {
        volEl.textContent = ev.volatility;
        volEl.className = `calendar-impact ${ev.volatility.toLowerCase()}`;
        foreEl.textContent = ev.forecast;
    }
}

function triggerNewsSimRelease() {
    const sel = document.getElementById('news-sim-event');
    if (!sel) return;
    const ev = NEWS_EVENTS_DATA[sel.value];
    if (!ev) return;
    
    AppState.newsShockActive = true;
    AppState.newsShockTimeLeft = 10;
    AppState.newsShockDirection = ev.direction;
    AppState.newsShockMagnitude = ev.magnitude;
    AppState.newsShockOffset = 0;
    
    const banner = document.getElementById('breaking-news-banner');
    const bannerText = document.getElementById('breaking-news-text');
    if (banner && bannerText) {
        bannerText.textContent = ev.breakingText;
        banner.style.transform = 'translateY(0)';
    }
    
    if (typeof addDashboardNotification === 'function') {
        addDashboardNotification(`[News Shock] ${ev.breakingText}`);
    }
    
    if (AppState.newsBannerTimer) clearInterval(AppState.newsBannerTimer);
    AppState.newsBannerTimer = setInterval(() => {
        if (AppState.newsShockTimeLeft > 0) {
            AppState.newsShockTimeLeft--;
        } else {
            clearInterval(AppState.newsBannerTimer);
            closeBreakingNewsBanner();
        }
    }, 1000);
}

function closeBreakingNewsBanner() {
    const banner = document.getElementById('breaking-news-banner');
    if (banner) {
        banner.style.transform = 'translateY(-100%)';
    }
    AppState.newsShockActive = false;
}

window.handleNewsSimEventChange = handleNewsSimEventChange;
window.triggerNewsSimRelease = triggerNewsSimRelease;
window.closeBreakingNewsBanner = closeBreakingNewsBanner;

// --- Social Strategy Marketplace & Creator Dashboard ---
function toggleStrategyPriceVisibility() {
    const chk = document.getElementById('strategy-publish-check');
    const row = document.getElementById('strategy-price-row');
    if (chk && row) {
        row.style.display = chk.checked ? 'flex' : 'none';
    }
}

function switchStratSubtab(tabName) {
    const btnBuilder = document.getElementById('btn-strat-sub-builder');
    const btnMarket = document.getElementById('btn-strat-sub-market');
    const btnDash = document.getElementById('btn-strat-sub-dash');
    
    const panelBuilder = document.getElementById('strat-panel-builder');
    const panelMarket = document.getElementById('strat-panel-market');
    const panelDash = document.getElementById('strat-panel-dash');
    
    if (btnBuilder) btnBuilder.classList.remove('active');
    if (btnMarket) btnMarket.classList.remove('active');
    if (btnDash) btnDash.classList.remove('active');
    
    if (panelBuilder) panelBuilder.classList.add('hidden');
    if (panelMarket) panelMarket.classList.add('hidden');
    if (panelDash) panelDash.classList.add('hidden');
    
    if (tabName === 'builder') {
        if (btnBuilder) btnBuilder.classList.add('active');
        if (panelBuilder) panelBuilder.classList.remove('hidden');
        renderCustomStrategiesList();
    } else if (tabName === 'market') {
        if (btnMarket) btnMarket.classList.add('active');
        if (panelMarket) panelMarket.classList.remove('hidden');
        renderMarketplaceList();
    } else if (tabName === 'dash') {
        if (btnDash) btnDash.classList.add('active');
        if (panelDash) panelDash.classList.remove('hidden');
        renderCreatorDashboard();
    }
}

function initMarketplaceData() {
    if (!AppState.marketplaceStrategies) {
        AppState.marketplaceStrategies = [
            {
                id: "MKT-1",
                name: "MACD Trend Rider",
                author: "OmniTrader",
                code: "def on_bar(self, bar):\n    if self.macd[0] > self.macd_signal[0]:\n        self.buy()\n    elif self.macd[0] < self.macd_signal[0]:\n        self.sell()",
                rating: 4.8,
                price: 0,
                downloads: 234,
                likes: 42,
                comments: ["Runs really smooth on BTC 15m TF!", "Very reliable during trending phases."]
            },
            {
                id: "MKT-2",
                name: "Mean Reversion Bot",
                author: "QuantJeff",
                code: "def on_bar(self, bar):\n    if bar.close < self.bb_lower[0]:\n        self.buy()\n    elif bar.close > self.bb_upper[0]:\n        self.sell()",
                rating: 4.6,
                price: 150,
                downloads: 145,
                likes: 29,
                comments: ["Works wonders on Gold and Forex pairs.", "Good risk control."]
            },
            {
                id: "MKT-3",
                name: "Grid Scalper Pro",
                author: "CopyGod",
                code: "def on_bar(self, bar):\n    self.buy_limit(bar.close - 100)\n    self.sell_limit(bar.close + 100)",
                rating: 4.9,
                price: 350,
                downloads: 88,
                likes: 54,
                comments: ["Incredible win rate, but watch out for trend breakouts!", "Best premium strategy so far."]
            }
        ];
    }
}

function renderMarketplaceList() {
    initMarketplaceData();
    const listEl = document.getElementById('strategy-marketplace-list');
    if (!listEl) return;
    
    listEl.innerHTML = AppState.marketplaceStrategies.map(s => {
        const isUserOwn = s.author === "You" || s.author === AppState.currentUser;
        const priceStr = s.price === 0 ? "FREE" : `${s.price} Credits`;
        const importBtnHTML = isUserOwn ? 
            `<span style="font-size:9px; color:var(--text-muted); font-style:italic;">Your Strategy</span>` : 
            `<button onclick="importMarketplaceStrategy('${s.id}')" style="background:var(--brand); border:none; color:#fff; font-size:8px; font-weight:700; padding:3px 8px; border-radius:4px; cursor:pointer;">Import ⚡</button>`;
        
        return `
            <div style="background:rgba(22, 26, 37, 0.45); border:1px solid var(--border); border-radius:6px; padding:10px; display:flex; flex-direction:column; gap:4px; position:relative; margin-bottom:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:700; color:#fff; font-size:11px;">${s.name}</span>
                    <span style="font-size:8.5px; background:rgba(0, 229, 255, 0.1); border:1px solid rgba(0, 229, 255, 0.25); color:#00e5ff; padding:1px 4px; border-radius:3px; font-weight:700;">${priceStr}</span>
                </div>
                <div style="font-size:8.5px; color:var(--text-muted);">By ${s.author} | ⭐ ${s.rating.toFixed(1)} (${s.downloads} DLs)</div>
                
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;">
                    <div style="display:flex; gap:8px; align-items:center;">
                        <button onclick="likeMarketplaceStrategy('${s.id}')" style="background:none; border:none; cursor:pointer; color:var(--text-muted); font-size:9.5px; display:flex; align-items:center; gap:2px; padding:0;">
                            ❤️ <span style="color:var(--text-muted); font-weight:600;">${s.likes}</span>
                        </button>
                        <button onclick="toggleMarketplaceComments('${s.id}')" style="background:none; border:none; cursor:pointer; color:var(--text-muted); font-size:9.5px; display:flex; align-items:center; gap:2px; padding:0;">
                            💬 <span style="color:var(--text-muted); font-weight:600;">${s.comments.length}</span>
                        </button>
                    </div>
                    ${importBtnHTML}
                </div>
                
                <!-- Comments Section -->
                <div id="market-comments-${s.id}" class="hidden" style="margin-top:6px; border-top:1px solid rgba(255,255,255,0.05); padding-top:6px;">
                    <div style="display:flex; flex-direction:column; gap:3px; max-height:80px; overflow-y:auto; font-size:8.5px; color:var(--text-muted); margin-bottom:4px;">
                        ${s.comments.map(c => `<div style="background:rgba(0,0,0,0.15); padding:3px 5px; border-radius:3px; margin-bottom:2px;"><strong style="color:#00e5ff;">User:</strong> ${c}</div>`).join('')}
                    </div>
                    <div style="display:flex; gap:3px;">
                        <input type="text" id="market-comment-input-${s.id}" placeholder="Add comment..." style="flex:1; background:rgba(0,0,0,0.3); border:1px solid var(--border); border-radius:3px; padding:3px; color:#fff; font-size:8.5px;">
                        <button onclick="addMarketplaceComment('${s.id}')" style="background:rgba(255,255,255,0.06); border:1px solid var(--border); color:#fff; font-size:8.5px; padding:2px 6px; border-radius:3px; cursor:pointer;">Send</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function likeMarketplaceStrategy(id) {
    initMarketplaceData();
    const s = AppState.marketplaceStrategies.find(item => item.id === id);
    if (s) {
        s.likes++;
        renderMarketplaceList();
    }
}

function toggleMarketplaceComments(id) {
    const el = document.getElementById(`market-comments-${id}`);
    if (el) el.classList.toggle('hidden');
}

function addMarketplaceComment(id) {
    const input = document.getElementById(`market-comment-input-${id}`);
    if (!input || !input.value.trim()) return;
    
    initMarketplaceData();
    const s = AppState.marketplaceStrategies.find(item => item.id === id);
    if (s) {
        s.comments.push(input.value.trim());
        input.value = '';
        renderMarketplaceList();
    }
}

function importMarketplaceStrategy(id) {
    initMarketplaceData();
    const s = AppState.marketplaceStrategies.find(item => item.id === id);
    if (!s) return;
    
    const imported = {
        id: "STRAT-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        name: s.name + " (Imported)",
        code: s.code,
        sharpe: 1.5,
        sortino: 1.8,
        drawdown: 5.2,
        riskScore: 25,
        risk: "Low",
        timestamp: new Date().toLocaleString()
    };
    
    if (!AppState.customStrategies) AppState.customStrategies = [];
    AppState.customStrategies.unshift(imported);
    
    s.downloads++;
    saveUserSession();
    switchLeftTab('strategy-builder');
    showToast(`Strategy "${s.name}" imported to builder!`);
}

function renderCreatorDashboard() {
    initMarketplaceData();
    const ownStrats = AppState.marketplaceStrategies.filter(s => s.author === "You" || s.author === AppState.currentUser);
    
    let totalDL = 0;
    let totalRatingSum = 0;
    let totalEarnings = 0;
    
    ownStrats.forEach(s => {
        totalDL += s.downloads;
        totalRatingSum += s.rating;
        totalEarnings += s.downloads * s.price;
    });
    
    const avgRating = ownStrats.length > 0 ? (totalRatingSum / ownStrats.length).toFixed(2) : "--";
    
    const dlEl = document.getElementById('creator-downloads-val');
    const rtEl = document.getElementById('creator-rating-val');
    const earnEl = document.getElementById('creator-earnings-val');
    if (dlEl) dlEl.textContent = totalDL.toLocaleString();
    if (rtEl) rtEl.textContent = avgRating;
    if (earnEl) earnEl.textContent = `$${totalEarnings.toLocaleString()}`;
    
    const listEl = document.getElementById('creator-listed-strategies');
    if (!listEl) return;
    
    if (ownStrats.length === 0) {
        listEl.innerHTML = `<div style="font-size:9.5px; text-align:center; color:var(--text-muted); padding:12px;">You haven't listed any strategies on the marketplace yet. Add a strategy and check "Publish on Marketplace"!</div>`;
        return;
    }
    
    listEl.innerHTML = ownStrats.map(s => {
        return `
            <div style="background:rgba(0,0,0,0.15); border:1px solid var(--border); border-radius:4px; padding:6px; font-size:9px; display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                <div>
                    <strong style="color:#fff;">${s.name}</strong>
                    <div style="color:var(--text-muted); font-size:7.5px;">DLs: ${s.downloads} | Earnings: $${s.downloads * s.price}</div>
                </div>
                <span style="font-size:8px; background:rgba(0, 230, 118, 0.08); border:1px solid rgba(0,230,118,0.2); color:#00e676; padding:1px 3px; border-radius:2px;">$${s.price} Price</span>
            </div>
        `;
    }).join('');
}

// Bindings
window.toggleStrategyPriceVisibility = toggleStrategyPriceVisibility;
window.switchStratSubtab = switchStratSubtab;
window.initMarketplaceData = initMarketplaceData;
window.renderMarketplaceList = renderMarketplaceList;
window.likeMarketplaceStrategy = likeMarketplaceStrategy;
window.toggleMarketplaceComments = toggleMarketplaceComments;
window.addMarketplaceComment = addMarketplaceComment;
window.importMarketplaceStrategy = importMarketplaceStrategy;
window.renderCreatorDashboard = renderCreatorDashboard;

// --- Portfolio Heatmaps & Advanced Analytics ---
function updatePortfolioAnalytics() {
    const heatmapAssets = ["BTC", "ETH", "SOL", "AAPL", "TSLA", "MSFT", "EUR/USD", "GBP/USD", "XAUUSD", "USO"];
    const assetPnl = {};
    heatmapAssets.forEach(a => assetPnl[a] = 0);
    
    const trades = AppState.tradeHistory || [];
    trades.forEach(t => {
        const asset = t.symbol;
        if (assetPnl[asset] !== undefined) {
            assetPnl[asset] += t.pnl;
        } else {
            const cleanAsset = asset.replace('USDT', '');
            if (assetPnl[cleanAsset] !== undefined) {
                assetPnl[cleanAsset] += t.pnl;
            }
        }
    });
    
    const gridEl = document.getElementById('heatmap-grid-container');
    if (gridEl) {
        gridEl.innerHTML = heatmapAssets.map(a => {
            const pnl = assetPnl[a];
            let cardClass = 'neutral';
            let pnlText = 'No Trades';
            let colorStyle = 'color: var(--text-muted); border-color: var(--border); background: rgba(255,255,255,0.02);';
            
            if (pnl > 0.01) {
                cardClass = 'profitable';
                pnlText = `+$${pnl.toFixed(2)}`;
                colorStyle = 'color: #00e676; border-color: rgba(0, 230, 118, 0.2); background: rgba(0, 230, 118, 0.05);';
            } else if (pnl < -0.01) {
                cardClass = 'losing';
                pnlText = `-$${Math.abs(pnl).toFixed(2)}`;
                colorStyle = 'color: #ff3d00; border-color: rgba(255, 61, 0, 0.2); background: rgba(255, 61, 0, 0.05);';
            }
            
            return `
                <div class="heatmap-card ${cardClass}" style="border: 1px solid; border-radius: 6px; padding: 8px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; gap: 4px; font-family: 'JetBrains Mono', monospace; ${colorStyle}">
                    <span style="font-size: 10px; font-weight: 700; color: inherit;">${a}</span>
                    <span style="font-size: 9px; font-weight: 800; color: inherit;">${pnlText}</span>
                </div>
            `;
        }).join('');
    }
    
    let winCount = 0;
    let lossCount = 0;
    let grossProfit = 0;
    let grossLoss = 0;
    let totalPnl = 0;
    let maxDrawdown = 0;
    let totalHoldTime = 0;
    
    const returns = [];
    let peakBal = startingBalance;
    let runningBal = startingBalance;
    
    const sessionPnls = { Asian: 0, London: 0, NY: 0 };
    
    trades.forEach(t => {
        totalPnl += t.pnl;
        const prevBal = runningBal;
        runningBal += t.pnl;
        
        returns.push(t.pnl / prevBal);
        
        if (runningBal > peakBal) {
            peakBal = runningBal;
        }
        const dd = (peakBal - runningBal) / peakBal;
        if (dd > maxDrawdown) {
            maxDrawdown = dd;
        }
        
        if (t.pnl > 0) {
            winCount++;
            grossProfit += t.pnl;
        } else {
            lossCount++;
            grossLoss += Math.abs(t.pnl);
        }
        
        if (t.closeId && t.openId) {
            totalHoldTime += (t.closeId - t.openId);
        }
        
        const dateObj = new Date(t.closeId);
        const utcHour = dateObj.getUTCHours();
        if (utcHour >= 0 && utcHour < 8) {
            sessionPnls.Asian += t.pnl;
        } else if (utcHour >= 8 && utcHour < 16) {
            sessionPnls.London += t.pnl;
        } else {
            sessionPnls.NY += t.pnl;
        }
    });
    
    let sharpe = 0;
    let sortino = 0;
    if (returns.length > 1) {
        const meanReturn = returns.reduce((a, b) => a + b, 0) / returns.length;
        const variance = returns.reduce((a, b) => a + Math.pow(b - meanReturn, 2), 0) / (returns.length - 1);
        const stdDev = Math.sqrt(variance);
        
        if (stdDev > 0) {
            sharpe = meanReturn / stdDev;
        }
        
        const negativeReturns = returns.filter(r => r < 0);
        if (negativeReturns.length > 0) {
            const downsideVar = negativeReturns.reduce((a, b) => a + Math.pow(b, 2), 0) / returns.length;
            const downsideStdDev = Math.sqrt(downsideVar);
            if (downsideStdDev > 0) {
                sortino = meanReturn / downsideStdDev;
            }
        }
    }
    
    const profitFactor = grossLoss > 0 ? (grossProfit / grossLoss).toFixed(2) : (grossProfit > 0 ? "99.00" : "1.00");
    const avgHoldTimeStr = trades.length > 0 ? formatHoldTime(totalHoldTime / trades.length) : "--";
    
    let bestSession = "NY";
    let maxSessionPnl = sessionPnls.NY;
    if (sessionPnls.Asian > maxSessionPnl) {
        bestSession = "Asian";
        maxSessionPnl = sessionPnls.Asian;
    }
    if (sessionPnls.London > maxSessionPnl) {
        bestSession = "London";
        maxSessionPnl = sessionPnls.London;
    }
    if (trades.length === 0) bestSession = "--";
    
    const riskScore = calculateRiskScore(sharpe, maxDrawdown);
    
    document.getElementById('analytics-sharpe-val').textContent = sharpe !== 0 ? sharpe.toFixed(2) : "--";
    document.getElementById('analytics-sortino-val').textContent = sortino !== 0 ? sortino.toFixed(2) : "--";
    document.getElementById('analytics-maxdd-val').textContent = maxDrawdown > 0 ? (maxDrawdown * 100).toFixed(2) + "%" : "0.00%";
    document.getElementById('analytics-riskscore-val').textContent = riskScore.toFixed(0);
    document.getElementById('analytics-holdtime-val').textContent = avgHoldTimeStr;
    document.getElementById('analytics-session-val').textContent = bestSession;
    document.getElementById('analytics-factor-val').textContent = profitFactor;
    
    runMonteCarloSimulation();
}

function formatHoldTime(ms) {
    const totalSecs = Math.floor(ms / 1000);
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    
    if (hrs > 0) {
        return `${hrs}h ${mins}m`;
    } else if (mins > 0) {
        return `${mins}m ${secs}s`;
    } else {
        return `${secs}s`;
    }
}

function calculateRiskScore(sharpe, maxDd) {
    if (AppState.tradeHistory && AppState.tradeHistory.length === 0) return 0;
    let score = 50;
    score -= (sharpe * 15);
    score += (maxDd * 120);
    return Math.min(Math.max(score, 5), 99);
}

function runMonteCarloSimulation() {
    const canvas = document.getElementById('canvas-monte-carlo');
    if (!canvas) return;
    
    const ctx = prepareCanvas('canvas-monte-carlo', 220, 100);
    if (!ctx) return;
    
    ctx.clearRect(0, 0, 220, 100);
    
    const trades = AppState.tradeHistory || [];
    let winRate = 0.45;
    let avgWin = 850;
    let avgLoss = 500;
    
    if (trades.length > 0) {
        let wins = [];
        let losses = [];
        trades.forEach(t => {
            if (t.pnl > 0) wins.push(t.pnl);
            else losses.push(Math.abs(t.pnl));
        });
        
        winRate = wins.length / trades.length;
        if (wins.length > 0) avgWin = wins.reduce((a, b) => a + b, 0) / wins.length;
        if (losses.length > 0) avgLoss = losses.reduce((a, b) => a + b, 0) / losses.length;
    }
    
    const numPaths = 50;
    const numSteps = 50;
    const startBal = AppState.balance || 100000;
    const paths = [];
    
    let ruinCount = 0;
    const terminalBalances = [];
    
    for (let p = 0; p < numPaths; p++) {
        let bal = startBal;
        const steps = [bal];
        let hitRuin = false;
        
        for (let s = 0; s < numSteps; s++) {
            if (Math.random() < winRate) {
                bal += avgWin * (0.7 + Math.random() * 0.6);
            } else {
                bal -= avgLoss * (0.7 + Math.random() * 0.6);
            }
            steps.push(bal);
            if (bal < startBal * 0.25) {
                hitRuin = true;
            }
        }
        
        paths.push(steps);
        terminalBalances.push(bal);
        if (hitRuin) ruinCount++;
    }
    
    let minVal = startBal;
    let maxVal = startBal;
    paths.forEach(p => {
        p.forEach(val => {
            if (val < minVal) minVal = val;
            if (val > maxVal) maxVal = val;
        });
    });
    
    const range = maxVal - minVal || 1;
    const w = 220;
    const h = 100;
    
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    ctx.lineWidth = 1;
    
    paths.forEach((p, idx) => {
        ctx.beginPath();
        ctx.strokeStyle = isLight ? 'rgba(0, 184, 212, 0.08)' : 'rgba(0, 229, 255, 0.06)';
        
        for (let s = 0; s <= numSteps; s++) {
            const x = (s / numSteps) * w;
            const y = h - ((p[s] - minVal) / range) * h;
            if (s === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    });
    
    terminalBalances.sort((a, b) => a - b);
    const medianVal = terminalBalances[Math.floor(numPaths / 2)];
    let medianPath = paths[0];
    let minDiff = Math.abs(paths[0][numSteps] - medianVal);
    paths.forEach(p => {
        const diff = Math.abs(p[numSteps] - medianVal);
        if (diff < minDiff) {
            minDiff = diff;
            medianPath = p;
        }
    });
    
    ctx.beginPath();
    ctx.lineWidth = 1.75;
    ctx.strokeStyle = '#ff9100';
    for (let s = 0; s <= numSteps; s++) {
        const x = (s / numSteps) * w;
        const y = h - ((medianPath[s] - minVal) / range) * h;
        if (s === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    const startY = h - ((startBal - minVal) / range) * h;
    ctx.beginPath();
    ctx.strokeStyle = isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.moveTo(0, startY);
    ctx.lineTo(w, startY);
    ctx.stroke();
    ctx.setLineDash([]);
    
    const ruinPct = (ruinCount / numPaths) * 100;
    document.getElementById('mc-ruin-val').textContent = `${ruinPct.toFixed(0)}%`;
    document.getElementById('mc-ruin-val').style.color = ruinPct > 15 ? 'var(--sell)' : 'var(--buy)';
    
    const lowConf = terminalBalances[Math.floor(numPaths * 0.05)] || terminalBalances[0];
    const highConf = terminalBalances[Math.floor(numPaths * 0.95)] || terminalBalances[terminalBalances.length - 1];
    document.getElementById('mc-range-val').textContent = `$${Math.round(lowConf/1000)}K - $${Math.round(highConf/1000)}K`;
}

window.updatePortfolioAnalytics = updatePortfolioAnalytics;
window.runMonteCarloSimulation = runMonteCarloSimulation;

// --- Community Features: Group Chats & Messaging Loops ---
AppState.activeChatRoom = 'crypto';
AppState.chatHistories = {
    crypto: [
        { user: "ScalpKing", text: "Welcome to the Crypto Chat Room! Who is buying SOL today?", time: "10:14 AM" },
        { user: "CryptoBull", text: "Just entered a 10x long. Targeting $160.", time: "10:15 AM" }
    ],
    forex: [
        { user: "PipWhisperer", text: "EUR/USD holding the 1.0820 support. Standard trade setup.", time: "10:10 AM" },
        { user: "MacroJeff", text: "Indeed, watch the DXY chart. It looks topping.", time: "10:12 AM" }
    ],
    xau: [
        { user: "GoldHunter", text: "Gold looking bullish before US NFP release.", time: "10:05 AM" },
        { user: "TrendRider", text: "Yep, standard deviation suggests a spike to $2350 is possible.", time: "10:07 AM" }
    ]
};

const CHAT_USERS = ["ScalpKing", "MacroJeff", "CryptoBull", "GoldHunter", "PipWhisperer", "OptionQueen", "TrendRider"];
const CHAT_MESSAGES_MOCK = {
    crypto: [
        "Are we going to break $70K BTC today? Volume is picking up.",
        "SOL is squeezing bears! Up +4% in the last hour.",
        "Funding rates are down, perfect spot for spot accumulators.",
        "Anyone trade the Keltner breakout strategy? Got a long signal on ETH.",
        "Just imported Grid Scalper from the marketplace. It's printing!"
    ],
    forex: [
        "GBP/USD looking like a short. Retesting weekly resistance.",
        "BOJ rate comments causing yen volatility. Stay safe.",
        "EUR/USD target hit! Quick +35 pips.",
        "Recessional worries in GDP report might trigger a rate cut.",
        "US Dollar Index DXY breaking down. Commodities might pump."
    ],
    xau: [
        "Gold retesting $2320. Buying the dip.",
        "CPI inflation print will decide the next major trend direction.",
        "RSI divergence on Gold 1H chart. Expecting a short bounce.",
        "Options open interest at $2300 strike is massive.",
        "Just closed my Gold long for +$1,240 P&L!"
    ]
};

function switchCommunitySubtab(tabName) {
    const btnFeed = document.getElementById('btn-comm-sub-feed');
    const btnChats = document.getElementById('btn-comm-sub-chats');
    const panelFeed = document.getElementById('comm-panel-feed');
    const panelChats = document.getElementById('comm-panel-chats');
    
    if (btnFeed) btnFeed.classList.remove('active');
    if (btnChats) btnChats.classList.remove('active');
    if (panelFeed) panelFeed.classList.add('hidden');
    if (panelChats) panelChats.classList.add('hidden');
    
    if (tabName === 'feed') {
        if (btnFeed) btnFeed.classList.add('active');
        if (panelFeed) panelFeed.classList.remove('hidden');
    } else if (tabName === 'chats') {
        if (btnChats) btnChats.classList.add('active');
        if (panelChats) panelChats.classList.remove('hidden');
        selectChatRoom(AppState.activeChatRoom);
    }
}

function selectChatRoom(room) {
    AppState.activeChatRoom = room;
    
    const btnCrypto = document.getElementById('btn-chat-room-crypto');
    const btnForex = document.getElementById('btn-chat-room-forex');
    const btnXau = document.getElementById('btn-chat-room-xau');
    
    if (btnCrypto) {
        btnCrypto.style.background = room === 'crypto' ? 'rgba(0,229,255,0.1)' : 'none';
        btnCrypto.style.color = room === 'crypto' ? '#00e5ff' : 'var(--text-muted)';
        btnCrypto.style.borderColor = room === 'crypto' ? 'rgba(0,229,255,0.2)' : 'transparent';
    }
    if (btnForex) {
        btnForex.style.background = room === 'forex' ? 'rgba(0,229,255,0.1)' : 'none';
        btnForex.style.color = room === 'forex' ? '#00e5ff' : 'var(--text-muted)';
        btnForex.style.borderColor = room === 'forex' ? 'rgba(0,229,255,0.2)' : 'transparent';
    }
    if (btnXau) {
        btnXau.style.background = room === 'xau' ? 'rgba(0,229,255,0.1)' : 'none';
        btnXau.style.color = room === 'xau' ? '#00e5ff' : 'var(--text-muted)';
        btnXau.style.borderColor = room === 'xau' ? 'rgba(0,229,255,0.2)' : 'transparent';
    }
    
    renderChatMessages();
}

function renderChatMessages() {
    const box = document.getElementById('chat-messages-box');
    if (!box) return;
    
    const history = AppState.chatHistories[AppState.activeChatRoom] || [];
    box.innerHTML = history.map(msg => {
        const isSelf = msg.user === "You";
        const userColor = isSelf ? '#00e676' : '#00e5ff';
        
        return `
            <div style="font-size: 9px; line-height: 1.35; background: rgba(255,255,255,0.02); padding: 5px; border-radius: 4px; border-left: 2px solid ${userColor};">
                <div style="display:flex; justify-content:space-between; margin-bottom:2px;">
                    <strong style="color:${userColor};">${msg.user}</strong>
                    <span style="color:var(--text-muted); font-size:7px;">${msg.time}</span>
                </div>
                <div style="color:var(--text-main); font-family: sans-serif;">${msg.text}</div>
            </div>
        `;
    }).join('');
    
    box.scrollTop = box.scrollHeight;
}

function handleChatInputKeypress(e) {
    if (e.key === 'Enter') sendUserChatMessage();
}

function sendUserChatMessage() {
    const input = document.getElementById('chat-user-input');
    if (!input || !input.value.trim()) return;
    
    const textVal = input.value.trim();
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    if (!AppState.chatHistories[AppState.activeChatRoom]) {
        AppState.chatHistories[AppState.activeChatRoom] = [];
    }
    
    AppState.chatHistories[AppState.activeChatRoom].push({
        user: "You",
        text: textVal,
        time: timeStr
    });
    
    input.value = '';
    renderChatMessages();
}

// Simulated active chat loops
function tickSimulatedChats() {
    // Only generate comments if group-chats tab is active
    const commTab = document.getElementById('left-tab-group-chats');
    if (!commTab || commTab.classList.contains('hidden-panel')) return;
    
    // Pick a random user and message
    const room = AppState.activeChatRoom;
    const user = CHAT_USERS[Math.floor(Math.random() * CHAT_USERS.length)];
    const messages = CHAT_MESSAGES_MOCK[room] || [];
    const text = messages[Math.floor(Math.random() * messages.length)];
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    if (!AppState.chatHistories[room]) AppState.chatHistories[room] = [];
    AppState.chatHistories[room].push({ user, text, time: timeStr });
    
    // limit history size
    if (AppState.chatHistories[room].length > 50) {
        AppState.chatHistories[room].shift();
    }
    
    renderChatMessages();
}

setInterval(tickSimulatedChats, 6000);

window.switchCommunitySubtab = switchCommunitySubtab;
window.selectChatRoom = selectChatRoom;
window.handleChatInputKeypress = handleChatInputKeypress;
window.sendUserChatMessage = sendUserChatMessage;

// ============================================================================
// NEW SUITE: AI Mentor, levels, Psychology Journal, heatmaps, Monte Carlo
// ============================================================================

// 1. Trader Levels & XP System
AppState.traderXP = AppState.traderXP || 0;
AppState.traderLevel = AppState.traderLevel || 1;

const TRADER_LEVELS = [
    { name: "Beginner", minXP: 0, badge: "🥉" },
    { name: "Intermediate", minXP: 1000, badge: "🥈" },
    { name: "Advanced", minXP: 3000, badge: "🥇" },
    { name: "Pro Trader", minXP: 6000, badge: "💎" },
    { name: "Elite Trader", minXP: 10000, badge: "👑" },
    { name: "Legend Trader", minXP: 15000, badge: "🔥" }
];

function updateTraderLevel(pnlChange) {
    let xpGained = 25;
    if (pnlChange > 0) {
        xpGained = 100 + Math.min(200, Math.floor(pnlChange / 10));
    }
    AppState.traderXP += xpGained;
    
    let newLevel = 1;
    for (let i = TRADER_LEVELS.length - 1; i >= 0; i--) {
        if (AppState.traderXP >= TRADER_LEVELS[i].minXP) {
            newLevel = i + 1;
            break;
        }
    }
    
    if (newLevel > AppState.traderLevel) {
        AppState.traderLevel = newLevel;
        showNotification(`🎉 LEVEL UP! You are now a ${TRADER_LEVELS[newLevel - 1].name}!`, "success");
    }
    updateTraderLevelUI();
}

function updateTraderLevelUI() {
    const badgeEl = document.getElementById('trader-level-badge');
    const nameEl = document.getElementById('trader-level-name');
    const xpTextEl = document.getElementById('trader-xp-text');
    const fillEl = document.getElementById('trader-xp-fill');
    
    if (!badgeEl || !nameEl || !xpTextEl || !fillEl) return;
    
    const currentLvlInfo = TRADER_LEVELS[AppState.traderLevel - 1] || TRADER_LEVELS[0];
    const nextLvlInfo = TRADER_LEVELS[AppState.traderLevel] || null;
    
    badgeEl.textContent = currentLvlInfo.badge;
    nameEl.innerHTML = `${currentLvlInfo.name} <span style="color:var(--brand); font-weight:800;">(Level ${AppState.traderLevel})</span>`;
    
    if (nextLvlInfo) {
        const nextMin = nextLvlInfo.minXP;
        const currentMin = currentLvlInfo.minXP;
        const diff = nextMin - currentMin;
        const progressed = AppState.traderXP - currentMin;
        const pct = Math.max(0, Math.min(100, (progressed / diff) * 100));
        
        xpTextEl.textContent = `${AppState.traderXP} / ${nextMin} XP`;
        fillEl.style.width = `${pct}%`;
    } else {
        xpTextEl.textContent = `${AppState.traderXP} XP (MAX)`;
        fillEl.style.width = `100%`;
    }
}
window.updateTraderLevel = updateTraderLevel;
window.updateTraderLevelUI = updateTraderLevelUI;

// 2. AI Mentor & Loss Analysis
AppState.tradeFeedback = AppState.tradeFeedback || {};

function generateTradeFeedback(trade) {
    if (!trade) return null;
    
    const isWin = trade.pnl > 0;
    const absPnl = Math.abs(trade.pnl);
    const mistakes = [];
    let disciplineScore = 100;
    let riskScore = 100;
    
    const entryVal = trade.entryPrice * trade.qty;
    const portfolioSize = AppState.balance || 100000;
    if (entryVal > portfolioSize * 0.15) {
        mistakes.push("Position size exceeded 15% of total portfolio capital (over-leveraging).");
        riskScore -= 30;
    }
    
    const recentTrades = (AppState.tradeHistory || []).slice(-5);
    if (recentTrades.length >= 4) {
        const earliestTime = new Date(recentTrades[0].timestamp || Date.now());
        const latestTime = new Date(trade.timestamp || Date.now());
        const diffMs = Math.abs(latestTime - earliestTime);
        if (diffMs < 30 * 60 * 1000) {
            mistakes.push("Overtrading detected: executed 4+ trades within a 30-minute window.");
            disciplineScore -= 25;
        }
    }
    
    if (trade.type === 'BUY' && Math.random() > 0.6) {
        mistakes.push("FOMO Entry: bought near short-term resistance without waiting for a retest.");
        disciplineScore -= 20;
    }
    
    let aiTradeScore = 50 + Math.floor(Math.random() * 40);
    if (isWin) {
        aiTradeScore += 10;
    } else {
        aiTradeScore -= 15;
    }
    if (mistakes.length > 0) {
        aiTradeScore -= mistakes.length * 10;
    }
    aiTradeScore = Math.max(10, Math.min(100, aiTradeScore));
    
    let advice = "";
    let proTip = "";
    if (isWin) {
        advice = `Excellent trade execution on ${trade.symbol}! You capitalized well on the volatility.`;
        proTip = `Pro traders look to trim partial profits around major psychological resistance levels while letting the remainder run.`;
    } else {
        if (mistakes.length > 0) {
            advice = `This trade resulted in a loss of -$${absPnl.toFixed(2)}. Diagnostic suggests: ${mistakes[0]}`;
        } else {
            advice = `Standard market friction. Even with good entry parameters, standard probability distribution means some setups will result in stops.`;
        }
        proTip = `A professional trader would immediately review if the stop-loss was placed according to structure, and take a 10-minute break to reset emotional bias.`;
    }
    
    return {
        id: trade.id || Math.floor(100000 + Math.random()*900000),
        symbol: trade.symbol,
        isWin: isWin,
        pnl: trade.pnl,
        aiScore: aiTradeScore,
        discipline: Math.max(10, disciplineScore),
        risk: Math.max(10, riskScore),
        confidence: 60 + Math.floor(Math.random() * 30),
        mistakes: mistakes,
        advice: advice,
        proTip: proTip,
        timestamp: trade.timestamp || new Date().toLocaleString()
    };
}

function renderAIMentor() {
    const listEl = document.getElementById('mentor-reviews-list');
    const lossBoxEl = document.getElementById('mentor-loss-analysis-box');
    const tradeScoreEl = document.getElementById('mentor-trade-score');
    const discScoreEl = document.getElementById('mentor-discipline-score');
    const riskScoreEl = document.getElementById('mentor-risk-score');
    const confScoreEl = document.getElementById('mentor-confidence-score');
    const bestSessionEl = document.getElementById('mentor-best-session');
    const dailyAdviceEl = document.getElementById('mentor-daily-advice');
    
    if (!listEl || !lossBoxEl || !tradeScoreEl || !discScoreEl || !riskScoreEl || !confScoreEl) return;
    
    updateTraderLevelUI();
    
    const history = AppState.tradeHistory || [];
    if (history.length === 0) {
        listEl.innerHTML = `<div class="empty-list" style="font-size: 10px; color: var(--text-muted); font-style: italic;">Awaiting your first simulated trade to review...</div>`;
        lossBoxEl.innerHTML = `<div class="empty-list" style="font-size: 10px; color: var(--text-muted); font-style: italic;">No losing trades to analyze yet. Keep up the good risk management!</div>`;
        return;
    }
    
    const feedbacks = history.map(t => {
        if (!AppState.tradeFeedback[t.id]) {
            AppState.tradeFeedback[t.id] = generateTradeFeedback(t);
        }
        return AppState.tradeFeedback[t.id];
    }).filter(Boolean);
    
    let totalScore = 0;
    let totalDisc = 0;
    let totalRisk = 0;
    let totalConf = 0;
    feedbacks.forEach(f => {
        totalScore += f.aiScore;
        totalDisc += f.discipline;
        totalRisk += f.risk;
        totalConf += f.confidence;
    });
    const avgScore = Math.round(totalScore / feedbacks.length);
    const avgDisc = Math.round(totalDisc / feedbacks.length);
    const avgRisk = Math.round(totalRisk / feedbacks.length);
    const avgConf = Math.round(totalConf / feedbacks.length);
    
    tradeScoreEl.textContent = avgScore;
    discScoreEl.textContent = `${avgDisc}/100`;
    riskScoreEl.textContent = `${avgRisk}/100`;
    confScoreEl.textContent = `${avgConf}%`;
    
    const reversedFeedbacks = [...feedbacks].reverse();
    listEl.innerHTML = reversedFeedbacks.map(f => {
        const borderStyle = f.isWin ? 'border-left: 2.5px solid #00e676;' : 'border-left: 2.5px solid #ff3d00;';
        const badgeColor = f.isWin ? '#00e676' : '#ff3d00';
        const pnlText = f.isWin ? `+$${f.pnl.toFixed(2)}` : `-$${Math.abs(f.pnl).toFixed(2)}`;
        
        return `
            <div class="mentor-feedback-card" style="${borderStyle} margin-bottom:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:700; color:#fff;">${f.symbol} (${f.isWin ? 'WIN' : 'LOSS'})</span>
                    <span style="font-weight:800; color:${badgeColor}; font-family:'JetBrains Mono', monospace;">${pnlText}</span>
                </div>
                <div style="font-size:7.5px; color:var(--text-muted); display:flex; gap:10px;">
                    <span>Score: <strong style="color:#fff;">${f.aiScore}</strong></span>
                    <span>Discipline: <strong style="color:#fff;">${f.discipline}%</strong></span>
                    <span>Confidence: <strong style="color:#fff;">${f.confidence}%</strong></span>
                </div>
                <p style="color:var(--text-muted); margin:2px 0 0 0; line-height:1.3; font-size:8.5px;">"${f.advice}"</p>
                <p style="color:#fff; margin:2px 0 0 0; line-height:1.3; font-size:8px; font-style:italic;">💡 Pro: "${f.proTip}"</p>
            </div>
        `;
    }).join('');
    
    const losingFeedbacks = feedbacks.filter(f => !f.isWin);
    if (losingFeedbacks.length === 0) {
        lossBoxEl.innerHTML = `<div class="empty-list" style="font-size: 10px; color: var(--text-muted); font-style: italic;">No losing trades to analyze yet. Keep up the good risk management!</div>`;
    } else {
        lossBoxEl.innerHTML = losingFeedbacks.reverse().slice(0, 3).map(f => {
            const mistakesList = f.mistakes.length > 0 ? f.mistakes.map(m => `<li>${m}</li>`).join('') : `<li>Unavoidable probability distribution (friction).</li>`;
            return `
                <div style="background:rgba(255, 61, 0, 0.03); border:1px solid rgba(255,61,0,0.15); border-radius:4px; padding:6px; font-size:9px; margin-bottom:4px;">
                    <div style="display:flex; justify-content:space-between; font-weight:700; color:#fff; margin-bottom:3px;">
                        <span>${f.symbol} Loss Diagnostic</span>
                        <span style="color:#ff3d00;">-$${Math.abs(f.pnl).toFixed(2)}</span>
                    </div>
                    <ul style="margin:0; padding-left:12px; color:var(--text-muted); line-height:1.3; display:flex; flex-direction:column; gap:2px;">
                        ${mistakesList}
                    </ul>
                </div>
            `;
        }).join('');
    }
    
    if (bestSessionEl) bestSessionEl.textContent = "New York (13:30 - 20:00 UTC) with 64% Win Rate";
    if (dailyAdviceEl) {
        if (losingFeedbacks.length > 0) {
            dailyAdviceEl.textContent = "Your loss rate is higher during highly leveraged positions. Reduce risk per trade to 1% to stabilize the drawdowns.";
        } else {
            dailyAdviceEl.textContent = "Brilliant risk management today. Keep following your setups and let winners run.";
        }
    }
}
window.generateTradeFeedback = generateTradeFeedback;
window.renderAIMentor = renderAIMentor;

// 3. Trading Psychology Journal
AppState.psyJournal = AppState.psyJournal || [];
AppState.currentMood = AppState.currentMood || "Calm";

function setMindsetMood(btn) {
    if (!btn) return;
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    AppState.currentMood = btn.getAttribute('data-mood');
    const moodText = document.getElementById('current-mood-text');
    const emojis = { Calm: "🧘 State: Calm", Fear: "😨 State: Fear", Greed: "🤑 State: Greed", FOMO: "⏳ State: FOMO", Revenge: "🤬 State: Revenge" };
    if (moodText) moodText.textContent = emojis[AppState.currentMood] || `🧘 State: ${AppState.currentMood}`;
}
window.setMindsetMood = setMindsetMood;

function logMindsetBeforeTrade() {
    const reasonInput = document.getElementById('psy-entry-reason');
    const confSlider = document.getElementById('psy-confidence-val');
    
    if (!reasonInput || !confSlider) return;
    
    const reason = reasonInput.value.trim();
    if (!reason) {
        showNotification("Please describe your entry plan first!", "warning");
        return;
    }
    
    const confidence = parseInt(confSlider.value, 10);
    const entry = {
        id: "PSY-" + Date.now() + "-" + Math.floor(Math.random()*1000),
        timestamp: new Date().toLocaleString(),
        mood: AppState.currentMood,
        reason: reason,
        confidence: confidence,
        resolved: false,
        tradeId: null
    };
    
    AppState.psyJournal.push(entry);
    reasonInput.value = "";
    
    showNotification("Mindset logged successfully! Your next trade will be correlated.", "success");
    renderPsychologyJournal();
}
window.logMindsetBeforeTrade = logMindsetBeforeTrade;

function deleteMindsetEntry(id) {
    if (!AppState.psyJournal) return;
    const idx = AppState.psyJournal.findIndex(l => l.id === id);
    if (idx >= 0) {
        const entryName = AppState.psyJournal[idx].reason.slice(0, 20);
        AppState.psyJournal.splice(idx, 1);
        saveUserSession();
        renderPsychologyJournal();
        showToast(`Mindset entry "${entryName}..." deleted.`);
    }
}
window.deleteMindsetEntry = deleteMindsetEntry;

function editMindsetEntry(id) {
    if (!AppState.psyJournal) return;
    const log = AppState.psyJournal.find(l => l.id === id);
    if (log) {
        const newReason = prompt("Edit your trading mindset note:", log.reason);
        if (newReason === null) return;
        const trimmed = newReason.trim();
        if (!trimmed) {
            showNotification("Mindset note cannot be empty!", "warning");
            return;
        }
        log.reason = trimmed;
        
        const newConf = prompt("Edit confidence rating (1-10):", log.confidence);
        if (newConf !== null) {
            const parsed = parseInt(newConf, 10);
            if (!isNaN(parsed) && parsed >= 1 && parsed <= 10) {
                log.confidence = parsed;
            }
        }
        
        saveUserSession();
        renderPsychologyJournal();
        showToast("Mindset entry updated.");
    }
}
window.editMindsetEntry = editMindsetEntry;

function logMindsetAfterTrade(trade) {
    if (!trade) return;
    const unresolvedIndex = AppState.psyJournal.findIndex(l => !l.resolved);
    if (unresolvedIndex >= 0) {
        const log = AppState.psyJournal[unresolvedIndex];
        log.resolved = true;
        log.tradeId = trade.id;
        log.pnl = trade.pnl;
        log.exitPrice = trade.exitPrice;
        
        const isWin = trade.pnl > 0;
        log.followedStrategy = (log.mood === "Calm") ? "Yes" : "No";
        log.lessonsLearned = isWin ? "Patience pays off. Let setup develop fully." : "Stops are part of the game. Minimize size when feeling anxious.";
        log.mistakesMade = (log.mood === "FOMO") ? "FOMO Entry" : ((log.mood === "Revenge") ? "Revenge Trading" : "None");
        log.emotionalRating = isWin ? 5 : 2;
    } else {
        AppState.psyJournal.push({
            id: "PSY-" + Date.now() + "-" + Math.floor(Math.random()*1000),
            timestamp: new Date().toLocaleString(),
            mood: AppState.currentMood,
            reason: `Executed trade on ${trade.symbol}`,
            confidence: 7,
            resolved: true,
            tradeId: trade.id,
            pnl: trade.pnl,
            followedStrategy: "Yes",
            lessonsLearned: trade.pnl > 0 ? "Setup executed well." : "Stopped out.",
            mistakesMade: "None",
            emotionalRating: trade.pnl > 0 ? 5 : 3
        });
    }
    renderPsychologyJournal();
}
window.logMindsetAfterTrade = logMindsetAfterTrade;

function renderPsychologyJournal() {
    const listEl = document.getElementById('psy-logs-list');
    const bestMoodEl = document.getElementById('psy-best-mood');
    const emoScoreEl = document.getElementById('psy-emotional-score');
    const fomoCountEl = document.getElementById('psy-count-fomo');
    const revengeCountEl = document.getElementById('psy-count-revenge');
    const discRateEl = document.getElementById('psy-discipline-rate');
    
    if (!listEl || !bestMoodEl || !emoScoreEl || !fomoCountEl || !revengeCountEl || !discRateEl) return;
    
    const logs = AppState.psyJournal || [];
    if (logs.length === 0) {
        listEl.innerHTML = `<div class="empty-list" style="font-size: 10px; color: var(--text-muted); font-style: italic;">No mindset logs entered today...</div>`;
        bestMoodEl.textContent = "🧘 Calm";
        emoScoreEl.textContent = "--";
        fomoCountEl.textContent = "0";
        revengeCountEl.textContent = "0";
        discRateEl.textContent = "--";
        return;
    }
    
    listEl.innerHTML = [...logs].reverse().map(l => {
        const emojis = { Calm: "🧘", Fear: "😨", Greed: "🤑", FOMO: "⏳", Revenge: "🤬" };
        const emoji = emojis[l.mood] || "🧘";
        
        return `
            <div style="background:rgba(255,255,255,0.015); border:1px solid var(--border); border-radius:4px; padding:6px; font-size:9px; display:flex; flex-direction:column; gap:2px; margin-bottom:4px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:700; color:#fff;">${emoji} Mindset: ${l.mood}</span>
                    <span style="font-size:7.5px; color:var(--text-muted);">${l.timestamp.split(',')[1] || l.timestamp}</span>
                </div>
                <p style="color:var(--text-muted); margin:1px 0; line-height:1.2;">"${l.reason}"</p>
                <div style="font-size:7px; color:var(--brand); display:flex; justify-content:space-between; align-items:center; margin-top:2px;">
                    <div style="display:flex; gap:10px;">
                        <span>Confidence: ${l.confidence}/10</span>
                        ${l.resolved ? `<span>P&L: <strong style="color:${l.pnl > 0 ? '#00e676' : '#ff3d00'};">${l.pnl > 0 ? '+' : ''}$${l.pnl.toFixed(0)}</strong></span>` : ''}
                    </div>
                    <div style="display:flex; gap:6px;">
                        <button onclick="editMindsetEntry('${l.id}')" style="background:none; border:none; color:var(--brand); cursor:pointer; font-size:8px; font-weight:700; padding:0; text-decoration:underline;">✏️ Edit</button>
                        <button onclick="deleteMindsetEntry('${l.id}')" style="background:none; border:none; color:var(--sell); cursor:pointer; font-size:8px; font-weight:700; padding:0; text-decoration:underline;">❌ Delete</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    let fomoCount = 0;
    let revengeCount = 0;
    let disciplineYes = 0;
    let resolvedCount = 0;
    
    logs.forEach(l => {
        if (l.mood === 'FOMO') fomoCount++;
        if (l.mood === 'Revenge') revengeCount++;
        if (l.resolved) {
            resolvedCount++;
            if (l.followedStrategy === 'Yes') disciplineYes++;
        }
    });
    
    fomoCountEl.textContent = fomoCount;
    revengeCountEl.textContent = revengeCount;
    
    const winsByMood = {};
    const countsByMood = {};
    logs.forEach(l => {
        if (l.resolved) {
            countsByMood[l.mood] = (countsByMood[l.mood] || 0) + 1;
            if (l.pnl > 0) winsByMood[l.mood] = (winsByMood[l.mood] || 0) + 1;
        }
    });
    
    let bestMood = "🧘 Calm";
    let bestRate = 0;
    for (let m of Object.keys(countsByMood)) {
        const rate = (winsByMood[m] || 0) / countsByMood[m];
        if (rate > bestRate) {
            bestRate = rate;
            const emojis = { Calm: "🧘 Calm", Fear: "😨 Fear", Greed: "🤑 Greed", FOMO: "⏳ FOMO", Revenge: "🤬 Revenge" };
            bestMood = `${emojis[m]} (${Math.round(rate * 100)}%)`;
        }
    }
    
    bestMoodEl.textContent = bestMood;
    emoScoreEl.textContent = `${Math.round(80 + Math.random()*15)}/100`;
    discRateEl.textContent = resolvedCount > 0 ? `${Math.round((disciplineYes / resolvedCount) * 100)}%` : "100%";
}
window.renderPsychologyJournal = renderPsychologyJournal;

// 4. Portfolio Heatmaps
AppState.heatmapType = AppState.heatmapType || "asset";

function switchHeatmapType(type) {
    AppState.heatmapType = type;
    document.querySelectorAll('#left-tab-portfolio-heatmaps .pos-tab').forEach(b => {
        if (b.id === `btn-heatmap-${type}`) b.classList.add('active');
        else b.classList.remove('active');
    });
    renderPortfolioHeatmaps();
}
window.switchHeatmapType = switchHeatmapType;

function renderPortfolioHeatmaps() {
    const matrixEl = document.getElementById('calendar-heatmap-matrix');
    const gridEl = document.getElementById('heatmap-grid-container-sidebar');
    const bestAssetEl = document.getElementById('stats-best-asset');
    const worstAssetEl = document.getElementById('stats-worst-asset');
    const longShortEl = document.getElementById('stats-long-short');
    const winrateAssetEl = document.getElementById('stats-winrate-asset');
    
    if (!matrixEl || !gridEl) return;
    
    // Calculate 15 Sunday-aligned weeks for calendar heatmap
    const cells = [];
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startSunday = new Date(today);
    startSunday.setDate(today.getDate() - (14 * 7) - dayOfWeek);
    startSunday.setHours(0,0,0,0);
    
    const pnlMap = {};
    const history = AppState.tradeHistory || [];
    history.forEach(t => {
        const d = new Date(t.timestamp || Date.now());
        const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
        pnlMap[key] = (pnlMap[key] || 0) + t.pnl;
    });
    
    // Inject Month labels dynamically above the columns
    const monthsEl = document.getElementById('calendar-heatmap-months');
    if (monthsEl) {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const labelsHTML = [];
        let prevMonth = -1;
        for (let w = 0; w < 15; w++) {
            const weekSunday = new Date(startSunday);
            weekSunday.setDate(startSunday.getDate() + (w * 7));
            const m = weekSunday.getMonth();
            if (m !== prevMonth) {
                labelsHTML.push(`<span style="flex: 1; text-align: left; min-width: 24px; font-weight:700; color:var(--text-muted); font-size:7px;">${monthNames[m]}</span>`);
                prevMonth = m;
            } else {
                labelsHTML.push(`<span style="flex: 1;"></span>`);
            }
        }
        monthsEl.innerHTML = labelsHTML.join('');
    }
    
    // Inject 105 daily calendar cells
    for (let c = 0; c < 105; c++) {
        const targetDate = new Date(startSunday);
        targetDate.setDate(startSunday.getDate() + c);
        const key = `${targetDate.getFullYear()}-${targetDate.getMonth()}-${targetDate.getDate()}`;
        
        let bg = "#1c1c1e";
        let title = `Date: ${targetDate.toLocaleDateString()} | No trading activity`;
        
        if (pnlMap[key] !== undefined) {
            const dayPnl = pnlMap[key];
            if (dayPnl > 200) bg = "#00e676";
            else if (dayPnl > 0) bg = "#b9f6ca";
            else if (dayPnl < -200) bg = "#ff3d00";
            else bg = "#ff8a80";
            title = `Date: ${targetDate.toLocaleDateString()} | P&L: ${dayPnl > 0 ? '+' : ''}$${dayPnl.toFixed(2)}`;
        } else {
            if (history.length === 0) {
                if (c % 13 === 0) { bg = "#00e676"; title = `Date: ${targetDate.toLocaleDateString()} | Profit: +$450.00`; }
                else if (c % 17 === 0) { bg = "#ff3d00"; title = `Date: ${targetDate.toLocaleDateString()} | Loss: -$180.00`; }
                else if (c % 23 === 0) { bg = "#b9f6ca"; title = `Date: ${targetDate.toLocaleDateString()} | Profit: +$120.00`; }
                else if (c % 29 === 0) { bg = "#ff8a80"; title = `Date: ${targetDate.toLocaleDateString()} | Loss: -$90.00`; }
            }
        }
        cells.push(`<div class="calendar-cell" style="background:${bg};" title="${title}"></div>`);
    }
    matrixEl.innerHTML = cells.join('');
    
    // Dynamically retrieve all symbols from MARKET_ASSETS
    const cryptoList = Object.keys(MARKET_ASSETS.crypto || {});
    const forexList = Object.keys(MARKET_ASSETS.forex || {});
    const metalsList = Object.keys(MARKET_ASSETS.metals || {});
    const commList = Object.keys(MARKET_ASSETS.commodities || {});
    
    const assetList = [...cryptoList, ...forexList, ...metalsList, ...commList];
    const sectorList = ["Crypto", "Forex", "Metals", "Energies", "Equities"];
    const timeframeList = ["1m", "5m", "15m", "1h", "4h", "1d"];
    const sessionList = ["Asian", "London", "New York"];
    
    let activeCategories = assetList;
    if (AppState.heatmapType === "sector") activeCategories = sectorList;
    else if (AppState.heatmapType === "timeframe") activeCategories = timeframeList;
    else if (AppState.heatmapType === "session") activeCategories = sessionList;
    
    gridEl.innerHTML = activeCategories.map(cat => {
        let pnlVal = 0;
        history.forEach(t => {
            let matches = false;
            if (AppState.heatmapType === "asset") {
                const tSym = t.symbol.replace('/', '').toUpperCase();
                const catSym = cat.replace('/', '').toUpperCase();
                if (tSym === catSym) matches = true;
            } else if (AppState.heatmapType === "sector") {
                const sym = t.symbol.toUpperCase();
                if (cat === "Crypto" && (MARKET_ASSETS.crypto[sym] || cryptoList.includes(sym))) matches = true;
                if (cat === "Forex" && (MARKET_ASSETS.forex[sym] || forexList.includes(sym) || sym.includes('/') || t.symbol.includes('/'))) {
                    const normalized = sym.replace('/', '');
                    if (forexList.map(x=>x.replace('/','')).includes(normalized)) matches = true;
                }
                if (cat === "Metals" && (MARKET_ASSETS.metals[sym] || metalsList.includes(sym))) matches = true;
                if (cat === "Energies" && (sym === "OIL" || sym === "BRENT" || sym === "NGAS" || sym === "GASO" || sym === "HEAT")) matches = true;
                if (cat === "Equities" && (sym === "AAPL" || sym === "TSLA")) matches = true;
            } else if (AppState.heatmapType === "timeframe") {
                const tTf = t.timeframe || "15m";
                if (tTf.toLowerCase() === cat.toLowerCase()) matches = true;
            } else if (AppState.heatmapType === "session") {
                const tSess = t.session || "London";
                if (tSess.toLowerCase() === cat.toLowerCase()) matches = true;
            }
            if (matches) pnlVal += t.pnl;
        });
        
        if (history.length === 0) {
            pnlVal = (cat.charCodeAt(0) % 3 === 0) ? 820 : (cat.charCodeAt(0) % 2 === 0 ? -410 : 0);
        }
        
        let bg = "background: rgba(255, 255, 255, 0.02); border-color: var(--border); color: var(--text-muted);";
        let displayPnl = "Neutral";
        if (pnlVal > 0.01) {
            bg = "background: rgba(0, 230, 118, 0.05); border-color: rgba(0,230,118,0.25); color: #00e676;";
            displayPnl = `+$${pnlVal.toFixed(0)}`;
        } else if (pnlVal < -0.01) {
            bg = "background: rgba(255, 61, 0, 0.05); border-color: rgba(255,61,0,0.25); color: #ff3d00;";
            displayPnl = `-$${Math.abs(pnlVal).toFixed(0)}`;
        }
        
        return `
            <div style="border:1px solid; border-radius:4px; padding:6px; text-align:center; font-family:'JetBrains Mono', monospace; font-size:8.5px; ${bg} display:flex; flex-direction:column; gap:2px; justify-content:center;">
                <span style="font-weight:700; color:inherit;">${cat}</span>
                <span style="font-size:7.5px; color:inherit; font-weight:800;">${displayPnl}</span>
            </div>
        `;
    }).join('');
    
    if (bestAssetEl) bestAssetEl.textContent = history.length > 0 ? "GOLD (+$1,450.00)" : "BTC (+$820.00)";
    if (worstAssetEl) worstAssetEl.textContent = history.length > 0 ? "EURUSD (-$480.00)" : "EURUSD (-$410.00)";
    if (longShortEl) longShortEl.textContent = "Longs (64% Win) | Shorts (50% Win)";
    if (winrateAssetEl) winrateAssetEl.textContent = "GOLD (80%) | BTC (60%)";
}
window.renderPortfolioHeatmaps = renderPortfolioHeatmaps;

// 5. Strategy Marketplace Categories Seeding
AppState.selectedMarketCategory = AppState.selectedMarketCategory || "all";

function filterMarketplace(cat) {
    AppState.selectedMarketCategory = cat;
    document.querySelectorAll('#left-tab-strategy-marketplace .pos-tab').forEach(b => {
        if (b.getAttribute('data-market-cat') === cat) b.classList.add('active');
        else b.classList.remove('active');
    });
    renderMarketplaceList();
}
window.filterMarketplace = filterMarketplace;

function toggleFollowCreator(id) {
    initMarketplaceData();
    const s = AppState.marketplaceStrategies.find(item => item.id === id);
    if (s) {
        s.followed = !s.followed;
        showNotification(s.followed ? `Followed ${s.author}!` : `Unfollowed ${s.author}.`, "info");
        renderMarketplaceList();
    }
}
window.toggleFollowCreator = toggleFollowCreator;

// Redefining initMarketplaceData to support ROI/Winrate/follow
const originalInitMarketplaceData = initMarketplaceData;
initMarketplaceData = function() {
    if (!AppState.marketplaceStrategies) {
        AppState.marketplaceStrategies = [
            {
                id: "MKT-1",
                name: "MACD Trend Rider",
                author: "OmniTrader",
                category: "trend",
                roi: "38.5%",
                winRate: "58%",
                drawdown: "7.2%",
                sharpe: "2.1",
                users: 234,
                code: "def on_bar(self, bar):\n    if self.macd[0] > self.macd_signal[0]:\n        self.buy()\n    elif self.macd[0] < self.macd_signal[0]:\n        self.sell()",
                rating: 4.8,
                price: 0,
                downloads: 234,
                likes: 42,
                comments: ["Runs really smooth on BTC 15m TF!", "Very reliable during trending phases."],
                followed: false
            },
            {
                id: "MKT-2",
                name: "Mean Reversion Bot",
                author: "QuantJeff",
                category: "forex",
                roi: "28.1%",
                winRate: "64%",
                drawdown: "5.4%",
                sharpe: "2.5",
                users: 145,
                code: "def on_bar(self, bar):\n    if bar.close < self.bb_lower[0]:\n        self.buy()\n    elif bar.close > self.bb_upper[0]:\n        self.sell()",
                rating: 4.6,
                price: 150,
                downloads: 145,
                likes: 29,
                comments: ["Works wonders on Gold and Forex pairs.", "Good risk control."],
                followed: false
            },
            {
                id: "MKT-3",
                name: "Grid Scalper Pro",
                author: "CopyGod",
                category: "scalping",
                roi: "85.4%",
                winRate: "82%",
                drawdown: "18.5%",
                sharpe: "1.8",
                users: 88,
                code: "def on_bar(self, bar):\n    self.buy_limit(bar.close - 100)\n    self.sell_limit(bar.close + 100)",
                rating: 4.9,
                price: 350,
                downloads: 88,
                likes: 54,
                comments: ["Incredible win rate, but watch out for trend breakouts!", "Best premium strategy so far."],
                followed: false
            },
            {
                id: "MKT-4",
                name: "Iron Condor automated",
                author: "OptionMaster",
                category: "options",
                roi: "19.2%",
                winRate: "78%",
                drawdown: "3.2%",
                sharpe: "2.8",
                users: 64,
                code: "def on_bar(self, bar):\n    # Trade short calls & puts spread",
                rating: 4.7,
                price: 500,
                downloads: 64,
                likes: 18,
                comments: ["Highly consistent yield option strategy."],
                followed: false
            },
            {
                id: "MKT-5",
                name: "ETH Breakout Rider",
                author: "CryptoWhale",
                category: "crypto",
                roi: "112.5%",
                winRate: "52%",
                drawdown: "24.1%",
                sharpe: "1.9",
                users: 198,
                code: "def on_bar(self, bar):\n    # Buy breakout peaks",
                rating: 4.8,
                price: 0,
                downloads: 198,
                likes: 72,
                comments: ["Amazing tool for volatile Ethereum sessions!"],
                followed: false
            }
        ];
    }
};
window.initMarketplaceData = initMarketplaceData;

// Redefining renderMarketplaceList
const originalRenderMarketplaceList = renderMarketplaceList;
renderMarketplaceList = function() {
    initMarketplaceData();
    const listEl = document.getElementById('strategy-marketplace-list');
    if (!listEl) return;
    
    const category = AppState.selectedMarketCategory || "all";
    const filtered = category === "all" ? AppState.marketplaceStrategies : AppState.marketplaceStrategies.filter(s => s.category === category);
    
    if (filtered.length === 0) {
        listEl.innerHTML = `<div class="empty-list" style="font-size: 10px; color: var(--text-muted); font-style: italic; text-align: center; padding: 20px;">No strategies found in this category...</div>`;
        return;
    }
    
    listEl.innerHTML = filtered.map(s => {
        const isUserOwn = s.author === "You" || s.author === AppState.currentUser;
        const priceStr = s.price === 0 ? "FREE" : `${s.price} Credits`;
        const importBtnHTML = isUserOwn ? 
            `<span style="font-size:9px; color:var(--text-muted); font-style:italic;">Your Strategy</span>` : 
            `<button onclick="importMarketplaceStrategy('${s.id}')" style="background:var(--brand); border:none; color:#fff; font-size:8px; font-weight:700; padding:3px 8px; border-radius:4px; cursor:pointer;">Import ⚡</button>`;
        
        const followText = s.followed ? "Following" : "+ Follow";
        const followColor = s.followed ? "var(--brand)" : "var(--text-muted)";
        const followBtn = isUserOwn ? "" : `<span onclick="toggleFollowCreator('${s.id}')" style="font-size: 8px; color: ${followColor}; cursor: pointer; text-decoration: underline; margin-left: 6px;">${followText}</span>`;
        
        return `
            <div style="background:rgba(22, 26, 37, 0.45); border:1px solid var(--border); border-radius:6px; padding:10px; display:flex; flex-direction:column; gap:4px; position:relative; margin-bottom:6px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:700; color:#fff; font-size:11px;">${s.name}</span>
                    <span style="font-size:8.5px; background:rgba(0, 229, 255, 0.1); border:1px solid rgba(0, 229, 255, 0.25); color:#00e5ff; padding:1px 4px; border-radius:3px; font-weight:700;">${priceStr}</span>
                </div>
                <div style="font-size:8.5px; color:var(--text-muted); display: flex; align-items: center;">By ${s.author} ${followBtn} | ⭐ ${s.rating.toFixed(1)} (${s.downloads} DLs)</div>
                
                <!-- Expanded Strategy Analytics -->
                <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:2px; font-size:7px; background:rgba(0,0,0,0.2); padding:4px; border-radius:3px; text-align:center; margin-top:2px;">
                    <div>
                        <span style="color:var(--text-muted); display:block; font-size:5.5px;">ROI</span>
                        <strong style="color:#00e676;">${s.roi}</strong>
                    </div>
                    <div>
                        <span style="color:var(--text-muted); display:block; font-size:5.5px;">Win Rate</span>
                        <strong style="color:#fff;">${s.winRate}</strong>
                    </div>
                    <div>
                        <span style="color:var(--text-muted); display:block; font-size:5.5px;">Max DD</span>
                        <strong style="color:var(--sell);">${s.drawdown}</strong>
                    </div>
                    <div>
                        <span style="color:var(--text-muted); display:block; font-size:5.5px;">Sharpe</span>
                        <strong style="color:#00e5ff;">${s.sharpe}</strong>
                    </div>
                    <div>
                        <span style="color:var(--text-muted); display:block; font-size:5.5px;">Users</span>
                        <strong style="color:#fff;">${s.users}</strong>
                    </div>
                </div>
                
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;">
                    <div style="display:flex; gap:8px; align-items:center;">
                        <button onclick="likeMarketplaceStrategy('${s.id}')" style="background:none; border:none; cursor:pointer; color:var(--text-muted); font-size:9.5px; display:flex; align-items:center; gap:2px; padding:0;">
                            ❤️ <span style="color:var(--text-muted); font-weight:600;">${s.likes}</span>
                        </button>
                        <button onclick="toggleMarketplaceComments('${s.id}')" style="background:none; border:none; cursor:pointer; color:var(--text-muted); font-size:9.5px; display:flex; align-items:center; gap:2px; padding:0;">
                            💬 <span style="color:var(--text-muted); font-weight:600;">${s.comments.length}</span>
                        </button>
                    </div>
                    ${importBtnHTML}
                </div>
                
                <!-- Comments Section -->
                <div id="market-comments-${s.id}" class="hidden" style="margin-top:6px; border-top:1px solid rgba(255,255,255,0.05); padding-top:6px;">
                    <div style="display:flex; flex-direction:column; gap:3px; max-height:80px; overflow-y:auto; font-size:8.5px; color:var(--text-muted); margin-bottom:4px;">
                        ${s.comments.map(c => `<div style="background:rgba(0,0,0,0.15); padding:3px 5px; border-radius:3px; margin-bottom:2px;"><strong style="color:#00e5ff;">User:</strong> ${c}</div>`).join('')}
                    </div>
                    <div style="display:flex; gap:3px;">
                        <input type="text" id="market-comment-input-${s.id}" placeholder="Add comment..." style="flex:1; background:rgba(0,0,0,0.3); border:1px solid var(--border); border-radius:3px; padding:3px; color:#fff; font-size:8.5px;">
                        <button onclick="addMarketplaceComment('${s.id}')" style="background:rgba(255,255,255,0.06); border:1px solid var(--border); color:#fff; font-size:8.5px; padding:2px 6px; border-radius:3px; cursor:pointer;">Send</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
};
window.renderMarketplaceList = renderMarketplaceList;

// 6. Advanced Monte Carlo Simulator
AppState.mcChartType = AppState.mcChartType || "curves";

function switchMcChartType(type) {
    AppState.mcChartType = type;
    const btnCurves = document.getElementById('btn-mc-chart-curves');
    const btnHisto = document.getElementById('btn-mc-chart-histogram');
    if (btnCurves && btnHisto) {
        if (type === 'curves') {
            btnCurves.classList.add('active');
            btnHisto.classList.remove('active');
        } else {
            btnCurves.classList.remove('active');
            btnHisto.classList.add('active');
        }
    }
    runMonteCarloSimulation();
}
window.switchMcChartType = switchMcChartType;

function runMonteCarloSimulation() {
    const canvas = document.getElementById('canvas-monte-carlo');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const startBal = parseFloat(document.getElementById('mc-input-balance')?.value || 100000);
    const winRate = parseFloat(document.getElementById('mc-input-winrate')?.value || 50) / 100;
    const rr = parseFloat(document.getElementById('mc-input-rr')?.value || 2.0);
    const riskPct = parseFloat(document.getElementById('mc-input-riskpct')?.value || 1.0) / 100;
    const numSteps = parseInt(document.getElementById('mc-input-trades')?.value || 100, 10);
    const maxDdLimit = parseFloat(document.getElementById('mc-input-maxdd')?.value || 10.0) / 100;
    
    const propMode = document.getElementById('mc-input-prop-mode')?.checked || false;
    const propTarget = parseFloat(document.getElementById('mc-input-prop-target')?.value || 8.0) / 100;
    const propDailyDd = parseFloat(document.getElementById('mc-input-prop-dailydd')?.value || 5.0) / 100;
    
    const numPaths = 50;
    const paths = [];
    const drawdowns = [];
    const terminalBalances = [];
    
    let profitCount = 0;
    let lossCount = 0;
    let propPassCount = 0;
    let propFailCount = 0;
    let totalDaysToPass = 0;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let p = 0; p < numPaths; p++) {
        let bal = startBal;
        let peak = startBal;
        const steps = [bal];
        let maxDd = 0;
        let passedProp = false;
        let violatedProp = false;
        let dayToPass = 0;
        
        for (let s = 1; s <= numSteps; s++) {
            const riskAmt = bal * riskPct;
            if (Math.random() < winRate) {
                bal += riskAmt * rr;
            } else {
                bal -= riskAmt;
            }
            steps.push(bal);
            
            if (bal > peak) peak = bal;
            
            const dd = (peak - bal) / peak;
            if (dd > maxDd) maxDd = dd;
            
            if (propMode && !passedProp && !violatedProp) {
                const targetAmt = startBal * (1 + propTarget);
                const dailyDdAmt = startBal * propDailyDd;
                
                if (bal >= targetAmt) {
                    passedProp = true;
                    dayToPass = s;
                }
                if (dd >= maxDdLimit || (peak - bal) >= dailyDdAmt) {
                    violatedProp = true;
                }
            }
        }
        
        paths.push(steps);
        drawdowns.push(maxDd);
        terminalBalances.push(bal);
        
        if (bal > startBal) profitCount++;
        else if (bal < startBal) lossCount++;
        
        if (passedProp && !violatedProp) {
            propPassCount++;
            totalDaysToPass += dayToPass;
        } else if (violatedProp) {
            propFailCount++;
        }
    }
    
    const probProfit = (profitCount / numPaths) * 100;
    const probLoss = (lossCount / numPaths) * 100;
    
    terminalBalances.sort((a, b) => a - b);
    const avgBal = terminalBalances.reduce((a, b) => a + b, 0) / numPaths;
    const medianBal = terminalBalances[Math.floor(numPaths / 2)];
    const worstCase = terminalBalances[Math.floor(numPaths * 0.05)] || terminalBalances[0];
    const bestCase = terminalBalances[Math.floor(numPaths * 0.95)] || terminalBalances[terminalBalances.length - 1];
    const avgMaxDd = (drawdowns.reduce((a, b) => a + b, 0) / numPaths) * 100;
    
    document.getElementById('mc-metric-prob-profit').textContent = `${probProfit.toFixed(0)}%`;
    document.getElementById('mc-metric-prob-loss').textContent = `${probLoss.toFixed(0)}%`;
    document.getElementById('mc-metric-median-bal').textContent = `$${Math.round(medianBal).toLocaleString()}`;
    document.getElementById('mc-metric-maxdd-est').textContent = `${avgMaxDd.toFixed(1)}%`;
    
    document.getElementById('mc-metric-worst').textContent = `$${Math.round(worstCase).toLocaleString()}`;
    document.getElementById('mc-metric-avg-bal').textContent = `$${Math.round(avgBal).toLocaleString()}`;
    document.getElementById('mc-metric-best').textContent = `$${Math.round(bestCase).toLocaleString()}`;
    
    if (propMode) {
        const passRate = (propPassCount / numPaths) * 100;
        const failRate = (propFailCount / numPaths) * 100;
        const avgDays = propPassCount > 0 ? Math.round(totalDaysToPass / propPassCount) : 0;
        
        document.getElementById('mc-prop-pass-rate').textContent = `${passRate.toFixed(0)}%`;
        document.getElementById('mc-prop-fail-rate').textContent = `${failRate.toFixed(0)}%`;
        document.getElementById('mc-prop-avg-days').textContent = avgDays > 0 ? `${avgDays} Days` : '--';
        document.getElementById('mc-prop-firm-box').style.display = 'flex';
    } else {
        document.getElementById('mc-prop-firm-box').style.display = 'none';
    }
    
    const riskRatingEl = document.getElementById('mc-ai-risk-lbl');
    let riskRating = "LOW";
    let riskColorClass = "low";
    if (avgMaxDd > 15 || riskPct > 0.03) {
        riskRating = "HIGH";
        riskColorClass = "high";
    } else if (avgMaxDd > 8 || riskPct > 0.015) {
        riskRating = "MEDIUM";
        riskColorClass = "medium";
    }
    
    if (riskRatingEl) {
        riskRatingEl.textContent = riskRating;
        riskRatingEl.className = `calendar-impact ${riskColorClass}`;
    }
    document.getElementById('mc-ai-suggested-risk').textContent = `${(winRate > 0.5 ? 2.0 : 1.0).toFixed(1)}% Risk / Trade`;
    document.getElementById('mc-ai-survival').textContent = `${(100 - (drawdowns.filter(d => d >= maxDdLimit).length / numPaths) * 100).toFixed(0)}%`;
    
    const w = canvas.width;
    const h = canvas.height;
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    
    if (AppState.mcChartType === "curves") {
        let minVal = startBal;
        let maxVal = startBal;
        paths.forEach(p => {
            p.forEach(val => {
                if (val < minVal) minVal = val;
                if (val > maxVal) maxVal = val;
            });
        });
        const range = maxVal - minVal || 1;
        
        paths.forEach(p => {
            ctx.beginPath();
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = isLight ? 'rgba(0, 184, 212, 0.08)' : 'rgba(0, 229, 255, 0.05)';
            for (let s = 0; s <= numSteps; s++) {
                const x = (s / numSteps) * w;
                const y = h - ((p[s] - minVal) / range) * h;
                if (s === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        });
        
        const medianPath = paths[Math.floor(numPaths / 2)];
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = '#ff9100';
        for (let s = 0; s <= numSteps; s++) {
            const x = (s / numSteps) * w;
            const y = h - ((medianPath[s] - minVal) / range) * h;
            if (s === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    } else {
        const numBins = 10;
        const bins = Array(numBins).fill(0);
        const minVal = terminalBalances[0];
        const maxVal = terminalBalances[terminalBalances.length - 1];
        const range = maxVal - minVal || 1;
        
        terminalBalances.forEach(b => {
            let binIdx = Math.floor(((b - minVal) / range) * numBins);
            if (binIdx >= numBins) binIdx = numBins - 1;
            bins[binIdx]++;
        });
        
        const maxBinVal = Math.max(...bins) || 1;
        const binWidth = w / numBins;
        
        ctx.fillStyle = isLight ? 'rgba(0, 184, 212, 0.15)' : 'rgba(0, 229, 255, 0.1)';
        ctx.strokeStyle = 'var(--brand)';
        ctx.lineWidth = 1;
        
        bins.forEach((count, i) => {
            const x = i * binWidth;
            const binH = (count / maxBinVal) * (h - 15);
            const y = h - binH;
            ctx.fillRect(x + 2, y, binWidth - 4, binH);
            ctx.strokeRect(x + 2, y, binWidth - 4, binH);
        });
    }
}
window.runMonteCarloSimulation = runMonteCarloSimulation;




