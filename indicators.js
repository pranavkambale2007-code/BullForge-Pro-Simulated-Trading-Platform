function calcSMA(data, period) {
    const res = [];
    for (let i = 0; i < data.length; i++) {
        if (i < period - 1) continue;
        let sum = 0;
        for (let j = 0; j < period; j++) sum += data[i - j].close;
        res.push({ time: data[i].time, value: sum / period });
    }
    return res;
}

function calcEMA(data, period) {
    const res = [];
    const k = 2 / (period + 1);
    let ema = 0;
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            ema = data[i].close;
        } else {
            ema = (data[i].close - ema) * k + ema;
        }
        res.push({ time: data[i].time, value: ema });
    }
    return res;
}

function calcWMA(data, period) {
    const res = [];
    const norm = (period * (period + 1)) / 2;
    for (let i = 0; i < data.length; i++) {
        if (i < period - 1) continue;
        let sum = 0;
        for (let j = 0; j < period; j++) sum += data[i - j].close * (period - j);
        res.push({ time: data[i].time, value: sum / norm });
    }
    return res;
}

function calcHMA(data, period) {
    const halfWma = calcWMA(data, Math.floor(period / 2));
    const fullWma = calcWMA(data, period);
    const rawHma = [];
    
    const hMap = new Map(halfWma.map(x => [x.time, x.value]));
    const fMap = new Map(fullWma.map(x => [x.time, x.value]));
    
    for(let d of data) {
        if(hMap.has(d.time) && fMap.has(d.time)) {
            rawHma.push({time: d.time, close: 2 * hMap.get(d.time) - fMap.get(d.time)});
        }
    }
    return calcWMA(rawHma, Math.floor(Math.sqrt(period)));
}

function calcBB(data, period, stdDev) {
    const upper = [], mid = [], lower = [];
    for (let i = 0; i < data.length; i++) {
        if (i < period - 1) continue;
        let sum = 0;
        for (let j = 0; j < period; j++) sum += data[i - j].close;
        const avg = sum / period;
        
        let vSum = 0;
        for (let j = 0; j < period; j++) vSum += Math.pow(data[i - j].close - avg, 2);
        const sd = Math.sqrt(vSum / period);
        
        mid.push({ time: data[i].time, value: avg });
        upper.push({ time: data[i].time, value: avg + (sd * stdDev) });
        lower.push({ time: data[i].time, value: avg - (sd * stdDev) });
    }
    return { upper, mid, lower };
}

function calcATR(data, period) {
    const res = [];
    const tr = [];
    for (let i = 0; i < data.length; i++) {
        if (i === 0) tr.push(data[i].high - data[i].low);
        else tr.push(Math.max(
            data[i].high - data[i].low,
            Math.abs(data[i].high - data[i-1].close),
            Math.abs(data[i].low - data[i-1].close)
        ));
    }
    
    for (let i = 0; i < data.length; i++) {
        if (i < period - 1) continue;
        let sum = 0;
        for (let j = 0; j < period; j++) sum += tr[i - j];
        res.push({ time: data[i].time, value: sum / period });
    }
    return res;
}

function calcKeltner(data, period, atrMult) {
    const ema = calcEMA(data, period);
    const atr = calcATR(data, period);
    
    const upper = [], mid = [], lower = [];
    const eMap = new Map(ema.map(x => [x.time, x.value]));
    const aMap = new Map(atr.map(x => [x.time, x.value]));
    
    for(let d of data) {
        if(eMap.has(d.time) && aMap.has(d.time)) {
            let e = eMap.get(d.time);
            let a = aMap.get(d.time);
            mid.push({time: d.time, value: e});
            upper.push({time: d.time, value: e + (a * atrMult)});
            lower.push({time: d.time, value: e - (a * atrMult)});
        }
    }
    return { upper, mid, lower };
}

function calcDonchian(data, period) {
    const upper = [], lower = [];
    for (let i = 0; i < data.length; i++) {
        if (i < period - 1) continue;
        let h = -Infinity, l = Infinity;
        for (let j = 0; j < period; j++) {
            if(data[i-j].high > h) h = data[i-j].high;
            if(data[i-j].low < l) l = data[i-j].low;
        }
        upper.push({time: data[i].time, value: h});
        lower.push({time: data[i].time, value: l});
    }
    return { upper, lower };
}

function calcPSAR(data, step, maxStep) {
    let res = [];
    if(data.length === 0) return res;
    let isLong = true;
    let sar = data[0].low;
    let ep = data[0].high;
    let af = step;
    
    for(let i=1; i<data.length; i++) {
        sar = sar + af * (ep - sar);
        
        if (isLong) {
            if (data[i].low < sar) {
                isLong = false;
                sar = Math.max(ep, data[i].high, data[i-1] ? data[i-1].high : -Infinity);
                ep = data[i].low;
                af = step;
            } else {
                if (data[i].high > ep) {
                    ep = data[i].high;
                    af = Math.min(af + step, maxStep);
                }
                sar = Math.min(sar, data[i-1].low, data[i-2] ? data[i-2].low : Infinity);
            }
        } else {
            if (data[i].high > sar) {
                isLong = true;
                sar = Math.min(ep, data[i].low, data[i-1] ? data[i-1].low : Infinity);
                ep = data[i].high;
                af = step;
            } else {
                if (data[i].low < ep) {
                    ep = data[i].low;
                    af = Math.min(af + step, maxStep);
                }
                sar = Math.max(sar, data[i-1].high, data[i-2] ? data[i-2].high : -Infinity);
            }
        }
        res.push({time: data[i].time, value: sar});
    }
    return res;
}

function calcIchimoku(data, tPeriod, kPeriod, sPeriod) {
    const tenkan = [], kijun = [], spanA = [], spanB = [];
    
    function highestHighLowestLow(idx, period) {
        if (idx < period - 1) return null;
        let h = -Infinity, l = Infinity;
        for (let j = 0; j < period; j++) {
            if(data[idx-j].high > h) h = data[idx-j].high;
            if(data[idx-j].low < l) l = data[idx-j].low;
        }
        return (h + l) / 2;
    }
    
    for(let i = 0; i < data.length; i++) {
        let t = highestHighLowestLow(i, tPeriod);
        let k = highestHighLowestLow(i, kPeriod);
        let b = highestHighLowestLow(i, sPeriod);
        
        if(t !== null) tenkan.push({time: data[i].time, value: t});
        if(k !== null) kijun.push({time: data[i].time, value: k});
        
        if (t !== null && k !== null) {
            let sA = (t + k) / 2;
            spanA.push({time: data[i].time, value: sA});
        }
        if (b !== null) {
            spanB.push({time: data[i].time, value: b});
        }
    }
    return { tenkan, kijun, spanA, spanB };
}

function calcALMA(data, period, offset, sigma) {
    const res = [];
    const m = offset * (period - 1);
    const s = period / sigma;
    let wSum = 0;
    const weights = [];
    for (let i = 0; i < period; i++) {
        let w = Math.exp(-((i - m) * (i - m)) / (2 * s * s));
        weights.push(w);
        wSum += w;
    }
    for (let i = 0; i < period; i++) weights[i] /= wSum;
    
    for (let i = 0; i < data.length; i++) {
        if (i < period - 1) continue;
        let sum = 0;
        for (let j = 0; j < period; j++) sum += data[i - period + 1 + j].close * weights[j];
        res.push({time: data[i].time, value: sum});
    }
    return res;
}

function calcRSI(data, period) {
    const res = [];
    if(data.length < period) return res;
    
    let avgGain = 0, avgLoss = 0;
    for(let i=1; i<=period; i++) {
        let diff = data[i].close - data[i-1].close;
        if(diff >= 0) avgGain += diff;
        else avgLoss += Math.abs(diff);
    }
    avgGain /= period;
    avgLoss /= period;
    
    for(let i=period; i<data.length; i++) {
        let diff = data[i].close - data[i-1].close;
        if(i > period) {
            let g = diff >= 0 ? diff : 0;
            let l = diff < 0 ? Math.abs(diff) : 0;
            avgGain = (avgGain * (period - 1) + g) / period;
            avgLoss = (avgLoss * (period - 1) + l) / period;
        }
        
        let rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
        let rsi = avgLoss === 0 ? 100 : 100 - (100 / (1 + rs));
        res.push({time: data[i].time, value: rsi});
    }
    return res;
}

function calcMACD(data, fast, slow, signalPeriod) {
    const fastEma = calcEMA(data, fast);
    const slowEma = calcEMA(data, slow);
    
    const macdLine = [];
    const sMap = new Map(slowEma.map(x => [x.time, x.value]));
    
    for(let pt of fastEma) {
        if(sMap.has(pt.time)) {
            macdLine.push({time: pt.time, close: pt.value - sMap.get(pt.time)});
        }
    }
    
    const signalLine = calcEMA(macdLine, signalPeriod);
    const macdOutput = [];
    const sigMap = new Map(signalLine.map(x => [x.time, x.value]));
    
    for(let pt of macdLine) {
        macdOutput.push({time: pt.time, value: pt.close});
    }
    
    const sigOutput = [];
    for(let pt of signalLine) sigOutput.push({time: pt.time, value: pt.value});
    
    return { macd: macdOutput, signal: sigOutput };
}

function calcUTBot(data, aV, keyVal) {
    const atr = calcATR(data, aV);
    const aMap = new Map(atr.map(x=>[x.time, x.value]));
    const res = [];
    
    let stop = 0;
    let pos = 0; 
    for(let i=1; i<data.length; i++) {
        let d = data[i];
        if(!aMap.has(d.time)) continue;
        
        let loss = keyVal * aMap.get(d.time);
        let xBnd = d.close - loss;
        let xBndU = d.close + loss;
        
        if (i === 1) stop = xBnd;
        
        let prevStop = stop;
        if (data[i-1].close > prevStop && d.close > prevStop) stop = Math.max(prevStop, xBnd);
        else if (data[i-1].close < prevStop && d.close < prevStop) stop = Math.min(prevStop, xBndU);
        else if (d.close > prevStop) stop = xBnd;
        else stop = xBndU;
        
        res.push({time: d.time, value: stop});
    }
    return res;
}

const INDICATORS_CONFIG = [
    { id: 'sma10', name: 'SMA 10', type: 'line', color: '#2962ff', calc: (d) => calcSMA(d, 10) },
    { id: 'sma100', name: 'SMA 100', type: 'line', color: '#e91e63', calc: (d) => calcSMA(d, 100) },
    { id: 'sma200', name: 'SMA 200', type: 'line', color: '#9c27b0', calc: (d) => calcSMA(d, 200) },
    { id: 'ema9', name: 'EMA 9', type: 'line', color: '#00bcd4', calc: (d) => calcEMA(d, 9) },
    { id: 'ema21', name: 'EMA 21', type: 'line', color: '#4caf50', calc: (d) => calcEMA(d, 21) },
    { id: 'ema50', name: 'EMA 50', type: 'line', color: '#ffeb3b', calc: (d) => calcEMA(d, 50) },
    { id: 'ema200', name: 'EMA 200', type: 'line', color: '#f44336', calc: (d) => calcEMA(d, 200) },
    { id: 'wma20', name: 'WMA 20', type: 'line', color: '#795548', calc: (d) => calcWMA(d, 20) },
    { id: 'wma50', name: 'WMA 50', type: 'line', color: '#607d8b', calc: (d) => calcWMA(d, 50) },
    { id: 'hma20', name: 'HMA 20', type: 'line', color: '#009688', calc: (d) => calcHMA(d, 20) },
    { id: 'bb_upper', name: 'BB Upper', type: 'line', color: 'rgba(41, 98, 255, 0.5)', calc: (d) => calcBB(d, 20, 2).upper },
    { id: 'bb_mid', name: 'BB Mid', type: 'line', color: 'rgba(41, 98, 255, 0.8)', calc: (d) => calcBB(d, 20, 2).mid },
    { id: 'bb_lower', name: 'BB Lower', type: 'line', color: 'rgba(41, 98, 255, 0.5)', calc: (d) => calcBB(d, 20, 2).lower },
    { id: 'kc_upper', name: 'Keltner Upper', type: 'line', color: 'rgba(255, 152, 0, 0.5)', calc: (d) => calcKeltner(d, 20, 1.5).upper },
    { id: 'kc_mid', name: 'Keltner Mid', type: 'line', color: 'rgba(255, 152, 0, 0.8)', calc: (d) => calcKeltner(d, 20, 1.5).mid },
    { id: 'kc_lower', name: 'Keltner Lower', type: 'line', color: 'rgba(255, 152, 0, 0.5)', calc: (d) => calcKeltner(d, 20, 1.5).lower },
    { id: 'dc_upper', name: 'Donchian Upper', type: 'line', color: 'rgba(233, 30, 99, 0.5)', calc: (d) => calcDonchian(d, 20).upper },
    { id: 'dc_lower', name: 'Donchian Lower', type: 'line', color: 'rgba(233, 30, 99, 0.5)', calc: (d) => calcDonchian(d, 20).lower },
    { id: 'psar', name: 'Parabolic SAR', type: 'line', color: '#00c853', lineStyle: 3, calc: (d) => calcPSAR(d, 0.02, 0.2) }, 
    { id: 'ichi_tenkan', name: 'Ichimoku Tenkan', type: 'line', color: '#0496FF', calc: (d) => calcIchimoku(d, 9, 26, 52).tenkan },
    { id: 'ichi_kijun', name: 'Ichimoku Kijun', type: 'line', color: '#991515', calc: (d) => calcIchimoku(d, 9, 26, 52).kijun },
    { id: 'ichi_spana', name: 'Ichimoku Span A', type: 'line', color: '#26A69A', calc: (d) => calcIchimoku(d, 9, 26, 52).spanA },
    { id: 'ichi_spanb', name: 'Ichimoku Span B', type: 'line', color: '#EF5350', calc: (d) => calcIchimoku(d, 9, 26, 52).spanB },
    { id: 'alma9', name: 'ALMA 9', type: 'line', color: '#F06292', calc: (d) => calcALMA(d, 9, 0.85, 6) },
    { id: 'rsi14', name: 'RSI 14', type: 'line', color: '#9c27b0', priceScaleId: 'oscillator', calc: (d) => calcRSI(d, 14) },
    { id: 'macd_line', name: 'MACD Line', type: 'line', color: '#2962ff', priceScaleId: 'oscillator', calc: (d) => calcMACD(d, 12, 26, 9).macd },
    { id: 'macd_signal', name: 'MACD Signal', type: 'line', color: '#ff9800', priceScaleId: 'oscillator', calc: (d) => calcMACD(d, 12, 26, 9).signal },
    { id: 'ut_bot', name: 'UT Bot Line', type: 'line', color: '#E91E63', calc: (d) => calcUTBot(d, 10, 3) },
    
    // --- 26 NEW PREMIUM INDICATOR PRESETS ---
    { id: 'sma5', name: 'SMA 5', type: 'line', color: '#03a9f4', calc: (d) => calcSMA(d, 5) },
    { id: 'sma20', name: 'SMA 20', type: 'line', color: '#ff5722', calc: (d) => calcSMA(d, 20) },
    { id: 'sma30', name: 'SMA 30', type: 'line', color: '#8bc34a', calc: (d) => calcSMA(d, 30) },
    { id: 'sma50', name: 'SMA 50', type: 'line', color: '#ff9800', calc: (d) => calcSMA(d, 50) },
    { id: 'ema5', name: 'EMA 5', type: 'line', color: '#e040fb', calc: (d) => calcEMA(d, 5) },
    { id: 'ema12', name: 'EMA 12', type: 'line', color: '#00e5ff', calc: (d) => calcEMA(d, 12) },
    { id: 'ema26', name: 'EMA 26', type: 'line', color: '#ff1744', calc: (d) => calcEMA(d, 26) },
    { id: 'ema100', name: 'EMA 100', type: 'line', color: '#b2ff59', calc: (d) => calcEMA(d, 100) },
    { id: 'wma9', name: 'WMA 9', type: 'line', color: '#ffea00', calc: (d) => calcWMA(d, 9) },
    { id: 'wma30', name: 'WMA 30', type: 'line', color: '#76ff03', calc: (d) => calcWMA(d, 30) },
    { id: 'wma100', name: 'WMA 100', type: 'line', color: '#00e676', calc: (d) => calcWMA(d, 100) },
    { id: 'hma9', name: 'HMA 9', type: 'line', color: '#ff6d00', calc: (d) => calcHMA(d, 9) },
    { id: 'hma50', name: 'HMA 50', type: 'line', color: '#ff3d00', calc: (d) => calcHMA(d, 50) },
    { id: 'hma100', name: 'HMA 100', type: 'line', color: '#ff9100', calc: (d) => calcHMA(d, 100) },
    { id: 'bb_upper10', name: 'BB Upper 10', type: 'line', color: 'rgba(233, 30, 99, 0.4)', calc: (d) => calcBB(d, 10, 1.5).upper },
    { id: 'bb_lower10', name: 'BB Lower 10', type: 'line', color: 'rgba(233, 30, 99, 0.4)', calc: (d) => calcBB(d, 10, 1.5).lower },
    { id: 'kc_upper10', name: 'Keltner Upper 10', type: 'line', color: 'rgba(0, 229, 255, 0.4)', calc: (d) => calcKeltner(d, 10, 1.2).upper },
    { id: 'kc_lower10', name: 'Keltner Lower 10', type: 'line', color: 'rgba(0, 229, 255, 0.4)', calc: (d) => calcKeltner(d, 10, 1.2).lower },
    { id: 'dc_upper10', name: 'Donchian Upper 10', type: 'line', color: 'rgba(101, 31, 255, 0.4)', calc: (d) => calcDonchian(d, 10).upper },
    { id: 'dc_lower10', name: 'Donchian Lower 10', type: 'line', color: 'rgba(101, 31, 255, 0.4)', calc: (d) => calcDonchian(d, 10).lower },
    { id: 'rsi9', name: 'RSI 9', type: 'line', color: '#f50057', priceScaleId: 'oscillator', calc: (d) => calcRSI(d, 9) },
    { id: 'rsi21', name: 'RSI 21', type: 'line', color: '#651fff', priceScaleId: 'oscillator', calc: (d) => calcRSI(d, 21) },
    { id: 'alma20', name: 'ALMA 20', type: 'line', color: '#1de9b6', calc: (d) => calcALMA(d, 20, 0.85, 6) },
    { id: 'macd_line_fast', name: 'MACD Line (Fast)', type: 'line', color: '#2979ff', priceScaleId: 'oscillator', calc: (d) => calcMACD(d, 8, 21, 5).macd },
    { id: 'macd_sig_fast', name: 'MACD Signal (Fast)', type: 'line', color: '#ff9100', priceScaleId: 'oscillator', calc: (d) => calcMACD(d, 8, 21, 5).signal },
    { id: 'ut_bot_sens', name: 'UT Bot Line (Sens)', type: 'line', color: '#00e676', calc: (d) => calcUTBot(d, 5, 2) }
];
