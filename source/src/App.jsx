"use client";

import { useEffect, useMemo, useState } from "react";

const translations = {
  en: {
    brand: "Balance Sheet Square",
    eyebrow: "PERSONAL WEALTH BLUEPRINT",
    titleA: "See your wealth.",
    titleB: "Shape your freedom.",
    intro: "Turn your personal balance sheet into one clear picture. Edit any figure and watch the square, net worth, and key ratios respond instantly.",
    private: "Public calculator",
    local: "Your figures stay on this device",
    currency: "Currency",
    workspace: "Your financial square",
    workspaceHint: "Edit the figures — every result updates automatically.",
    assets: "Assets",
    liabilities: "Liabilities",
    equity: "Equity",
    cash: "Cash & savings",
    investments: "Investments",
    retirement: "Retirement / KWSP",
    property: "Property",
    vehicles: "Vehicles",
    otherAssets: "Other assets",
    homeLoan: "Home loan",
    vehicleLoan: "Vehicle loan",
    cards: "Credit cards / personal loans",
    otherDebt: "Other liabilities",
    monthlyExpenses: "Monthly living expenses",
    assumptions: "Planning input",
    totalAssets: "Total assets",
    totalRight: "Total liabilities + equity",
    netWorth: "Net worth",
    debtAsset: "Debt-to-assets",
    equityRatio: "Equity ratio",
    debtEquity: "Debt-to-equity",
    runway: "Cash runway",
    months: "months",
    equation: "Assets = Liabilities + Equity",
    balanced: "Balanced",
    negative: "Negative equity",
    insolvent: "Insolvent / bankruptcy risk",
    bankruptcyNote: "Negative equity is a serious warning; legal bankruptcy depends on formal proceedings.",
    strong: "Strong",
    moderate: "Moderate",
    caution: "Needs attention",
    noDebt: "Debt-free",
    scenarios: "Explore example paths",
    scenarioHint: "Load a scenario, then adjust it to reflect your own financial life.",
    load: "Load scenario",
    custom: "Custom figures",
    saved: "Saved on this device",
    reset: "Restore loaded scenario",
    methodology: "How to read the square",
    methodText: "The left side shows everything you own. The right side shows who financed it: creditors (liabilities) and you (equity). As debt falls or assets grow, the equity block becomes larger. If equity falls below zero, assets no longer cover liabilities and the square flags insolvency risk.",
    disclaimer: "For education and personal planning. Values are stored locally in your browser and are not financial advice.",
    scenarioNames: ["Balanced RM500k", "Starting out", "Growing wealth", "Financial freedom", "Insolvency warning"],
    scenarioDescs: ["A clear 64% equity base", "Build liquidity, reduce debt", "Assets compound faster than debt", "High runway with no debt", "Liabilities exceed all assets"],
    assetMix: "Asset mix",
    liabilitiesExceed: "Liabilities exceed assets by",
    close: "Close",
    offlineReady: "Works offline",
    exportPdf: "Export PDF",
    share: "Share report",
    exporting: "Preparing report…",
    pdfReady: "PDF downloaded",
    shared: "Report shared",
    shareUnavailable: "Sharing is unavailable here — the PDF was downloaded instead.",
    reportTitle: "Personal Balance Sheet Report",
    generated: "Generated",
    financialStatus: "Financial status",
    privacyPolicy: "Privacy policy",
  },
  ms: {
    brand: "Petak Kunci Kira-kira",
    eyebrow: "PELAN INDUK HARTA PERIBADI",
    titleA: "Lihat harta anda.",
    titleB: "Bentuk kebebasan anda.",
    intro: "Jadikan kunci kira-kira peribadi anda satu gambaran yang jelas. Ubah mana-mana angka dan lihat petak, nilai bersih serta nisbah utama dikemas kini serta-merta.",
    private: "Kalkulator awam",
    local: "Angka anda kekal pada peranti ini",
    currency: "Mata wang",
    workspace: "Petak kewangan anda",
    workspaceHint: "Ubah angka — semua keputusan dikemas kini secara automatik.",
    assets: "Aset",
    liabilities: "Liabiliti",
    equity: "Ekuiti",
    cash: "Tunai & simpanan",
    investments: "Pelaburan",
    retirement: "Persaraan / KWSP",
    property: "Hartanah",
    vehicles: "Kenderaan",
    otherAssets: "Aset lain",
    homeLoan: "Pinjaman rumah",
    vehicleLoan: "Pinjaman kenderaan",
    cards: "Kad kredit / pinjaman peribadi",
    otherDebt: "Liabiliti lain",
    monthlyExpenses: "Perbelanjaan hidup bulanan",
    assumptions: "Input perancangan",
    totalAssets: "Jumlah aset",
    totalRight: "Jumlah liabiliti + ekuiti",
    netWorth: "Nilai bersih",
    debtAsset: "Hutang kepada aset",
    equityRatio: "Nisbah ekuiti",
    debtEquity: "Hutang kepada ekuiti",
    runway: "Tempoh tunai",
    months: "bulan",
    equation: "Aset = Liabiliti + Ekuiti",
    balanced: "Seimbang",
    negative: "Ekuiti negatif",
    insolvent: "Tidak solven / risiko muflis",
    bankruptcyNote: "Ekuiti negatif ialah amaran serius; status muflis bergantung pada proses undang-undang rasmi.",
    strong: "Kukuh",
    moderate: "Sederhana",
    caution: "Perlu perhatian",
    noDebt: "Bebas hutang",
    scenarios: "Terokai contoh laluan",
    scenarioHint: "Muatkan satu senario, kemudian sesuaikannya dengan kehidupan kewangan anda.",
    load: "Muatkan senario",
    custom: "Angka tersuai",
    saved: "Disimpan pada peranti ini",
    reset: "Pulihkan senario",
    methodology: "Cara membaca petak",
    methodText: "Bahagian kiri menunjukkan semua yang anda miliki. Bahagian kanan menunjukkan pembiayanya: pemiutang (liabiliti) dan anda (ekuiti). Apabila hutang berkurang atau aset berkembang, blok ekuiti menjadi lebih besar. Jika ekuiti jatuh di bawah sifar, aset tidak lagi mampu menampung liabiliti dan petak menandakan risiko tidak solven.",
    disclaimer: "Untuk pendidikan dan perancangan peribadi. Nilai disimpan secara setempat dalam pelayar anda dan bukan nasihat kewangan.",
    scenarioNames: ["Seimbang RM500k", "Permulaan", "Harta berkembang", "Kebebasan kewangan", "Amaran tidak solven"],
    scenarioDescs: ["Asas ekuiti 64% yang jelas", "Bina kecairan, kurangkan hutang", "Aset berkembang lebih pantas", "Tempoh tunai tinggi tanpa hutang", "Liabiliti melebihi semua aset"],
    assetMix: "Campuran aset",
    liabilitiesExceed: "Liabiliti melebihi aset sebanyak",
    close: "Tutup",
    offlineReady: "Berfungsi luar talian",
    exportPdf: "Eksport PDF",
    share: "Kongsi laporan",
    exporting: "Menyediakan laporan…",
    pdfReady: "PDF telah dimuat turun",
    shared: "Laporan telah dikongsi",
    shareUnavailable: "Perkongsian tidak tersedia — PDF telah dimuat turun.",
    reportTitle: "Laporan Kunci Kira-kira Peribadi",
    generated: "Dijana",
    financialStatus: "Status kewangan",
    privacyPolicy: "Dasar privasi",
  },
  zh: {
    brand: "个人资产负债方格",
    eyebrow: "个人财富蓝图",
    titleA: "看见你的财富。",
    titleB: "塑造你的自由。",
    intro: "把个人资产负债表变成一幅清晰的图。修改任何数字，方格、净资产与关键比率都会即时更新。",
    private: "公开计算工具",
    local: "你的数据只保留在此设备",
    currency: "货币",
    workspace: "你的财务方格",
    workspaceHint: "修改数字，所有结果都会自动更新。",
    assets: "资产",
    liabilities: "负债",
    equity: "净资产",
    cash: "现金与储蓄",
    investments: "投资",
    retirement: "退休金 / 公积金",
    property: "房地产",
    vehicles: "车辆",
    otherAssets: "其他资产",
    homeLoan: "房屋贷款",
    vehicleLoan: "汽车贷款",
    cards: "信用卡 / 个人贷款",
    otherDebt: "其他负债",
    monthlyExpenses: "每月生活开销",
    assumptions: "规划输入",
    totalAssets: "总资产",
    totalRight: "负债 + 净资产总额",
    netWorth: "净资产",
    debtAsset: "负债资产比",
    equityRatio: "净资产比率",
    debtEquity: "负债净资产比",
    runway: "现金可用期",
    months: "个月",
    equation: "资产 = 负债 + 净资产",
    balanced: "平衡",
    negative: "负净资产",
    insolvent: "资不抵债 / 破产风险",
    bankruptcyNote: "负净资产是严重警讯；法律上的破产须经正式程序确定。",
    strong: "稳健",
    moderate: "适中",
    caution: "需要关注",
    noDebt: "无负债",
    scenarios: "探索示例路径",
    scenarioHint: "载入一个情景，再按自己的财务状况调整。",
    load: "载入情景",
    custom: "自定义数字",
    saved: "已保存在此设备",
    reset: "恢复情景",
    methodology: "如何阅读方格",
    methodText: "左边显示你拥有的一切。右边说明资金来自谁：债权人（负债）和你自己（净资产）。随着债务下降或资产增长，净资产方格会变大。净资产低于零时，资产已不足以覆盖负债，方格会显示资不抵债风险。",
    disclaimer: "仅供教育与个人规划。数据储存在你的浏览器内，不构成财务建议。",
    scenarioNames: ["均衡 RM500k", "财富起步", "财富增长", "财务自由", "资不抵债警示"],
    scenarioDescs: ["清晰的 64% 净资产基础", "建立流动性，降低负债", "资产增长快于债务", "高现金保障且无负债", "总负债超过全部资产"],
    assetMix: "资产组合",
    liabilitiesExceed: "负债超出资产",
    close: "关闭",
    offlineReady: "可离线使用",
    exportPdf: "导出 PDF",
    share: "分享报告",
    exporting: "正在生成报告…",
    pdfReady: "PDF 已下载",
    shared: "报告已分享",
    shareUnavailable: "此处无法直接分享，PDF 已改为下载。",
    reportTitle: "个人资产负债表报告",
    generated: "生成日期",
    financialStatus: "财务状况",
    privacyPolicy: "隐私政策",
  },
};

const scenarios = [
  {
    id: "balanced",
    values: { cash: 40000, investments: 90000, retirement: 120000, property: 220000, vehicles: 25000, otherAssets: 5000, homeLoan: 120000, vehicleLoan: 40000, cards: 5000, otherDebt: 15000, monthlyExpenses: 5000 },
  },
  {
    id: "starting",
    values: { cash: 18000, investments: 12000, retirement: 45000, property: 0, vehicles: 30000, otherAssets: 5000, homeLoan: 0, vehicleLoan: 50000, cards: 9000, otherDebt: 16000, monthlyExpenses: 3500 },
  },
  {
    id: "growing",
    values: { cash: 120000, investments: 280000, retirement: 310000, property: 420000, vehicles: 50000, otherAssets: 20000, homeLoan: 230000, vehicleLoan: 35000, cards: 0, otherDebt: 0, monthlyExpenses: 6500 },
  },
  {
    id: "freedom",
    values: { cash: 360000, investments: 1050000, retirement: 780000, property: 650000, vehicles: 100000, otherAssets: 60000, homeLoan: 0, vehicleLoan: 0, cards: 0, otherDebt: 0, monthlyExpenses: 8000 },
  },
  {
    id: "insolvent",
    values: { cash: 5000, investments: 10000, retirement: 25000, property: 0, vehicles: 15000, otherAssets: 5000, homeLoan: 0, vehicleLoan: 60000, cards: 25000, otherDebt: 15000, monthlyExpenses: 3000 },
  },
];

const assetKeys = ["cash", "investments", "retirement", "property", "vehicles", "otherAssets"];
const debtKeys = ["homeLoan", "vehicleLoan", "cards", "otherDebt"];
const assetColors = ["#d8faef", "#9aefd8", "#66dfbd", "#28b98e", "#177961", "#0c4d41"];

function safeNumber(value) {
  const number = Number(String(value).replace(/,/g, ""));
  return Number.isFinite(number) && number >= 0 ? number : 0;
}

function amount(value, currency, compact = false) {
  const locale = currency === "RM" ? "en-MY" : "en-US";
  const prefix = currency === "RM" ? "RM" : currency === "USD" ? "$" : "¥";
  const abs = Math.abs(value);
  if (compact && abs >= 1000000) return `${value < 0 ? "−" : ""}${prefix}${(abs / 1000000).toFixed(abs >= 10000000 ? 1 : 2)}m`;
  if (compact && abs >= 1000) return `${value < 0 ? "−" : ""}${prefix}${(abs / 1000).toFixed(abs >= 100000 ? 0 : 1)}k`;
  return `${value < 0 ? "−" : ""}${prefix}${abs.toLocaleString(locale, { maximumFractionDigits: 0 })}`;
}

function Field({ label, value, currency, onChange }) {
  return (
    <label className="field-row">
      <span>{label}</span>
      <span className="input-shell">
        <b>{currency === "RM" ? "RM" : currency === "USD" ? "$" : "¥"}</b>
        <input
          inputMode="decimal"
          value={value}
          onFocus={(event) => event.currentTarget.select()}
          onChange={(event) => onChange(event.target.value.replace(/[^0-9.]/g, ""))}
          aria-label={label}
        />
      </span>
    </label>
  );
}

function Metric({ label, value, note, tone = "neutral" }) {
  return (
    <article className={`metric metric-${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </article>
  );
}

function canvasBlob(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("Unable to create report")), type, quality);
  });
}

function buildImagePdf(jpegBytes, width, height) {
  const encoder = new TextEncoder();
  const parts = [];
  const offsets = [0];
  let length = 0;
  const pushText = (text) => {
    const bytes = encoder.encode(text);
    parts.push(bytes);
    length += bytes.length;
  };
  const pushBytes = (bytes) => {
    parts.push(bytes);
    length += bytes.length;
  };

  pushText("%PDF-1.4\n%âãÏÓ\n");
  offsets[1] = length;
  pushText("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  offsets[2] = length;
  pushText("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");
  offsets[3] = length;
  pushText("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>\nendobj\n");
  offsets[4] = length;
  pushText(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`);
  pushBytes(jpegBytes);
  pushText("\nendstream\nendobj\n");
  offsets[5] = length;
  const content = "q\n595.28 0 0 841.89 0 0 cm\n/Im0 Do\nQ\n";
  pushText(`5 0 obj\n<< /Length ${encoder.encode(content).length} >>\nstream\n${content}endstream\nendobj\n`);

  const startXref = length;
  pushText("xref\n0 6\n0000000000 65535 f \n");
  for (let index = 1; index <= 5; index += 1) {
    pushText(`${String(offsets[index]).padStart(10, "0")} 00000 n \n`);
  }
  pushText(`trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${startXref}\n%%EOF`);
  return new Blob(parts, { type: "application/pdf" });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(String(reader.result).split(",")[1] || "");
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function createReportPdf({ values, calculations, currency, language, t }) {
  const width = 1240;
  const height = 1754;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  const blue = "#0d3478";
  const brightBlue = "#16499b";
  const yellow = "#fff2a8";
  const card = "#fffbea";
  const muted = "#5d6d88";
  const green = "#176f5a";
  const red = "#9b3a2e";
  const locale = language === "ms" ? "ms-MY" : language === "zh" ? "zh-CN" : "en-MY";
  const status = calculations.equity < 0 ? t.insolvent : calculations.equityRatio >= 60 ? t.strong : calculations.equityRatio >= 30 ? t.moderate : t.caution;

  context.fillStyle = yellow;
  context.fillRect(0, 0, width, height);
  context.fillStyle = brightBlue;
  context.fillRect(0, 0, 24, height);
  context.fillStyle = blue;
  context.font = '700 28px system-ui, "Noto Sans", sans-serif';
  context.fillText(t.brand, 76, 92);
  context.font = '500 66px Georgia, "Noto Serif", serif';
  context.fillText(t.reportTitle, 76, 182);
  context.fillStyle = muted;
  context.font = '400 22px system-ui, "Noto Sans", sans-serif';
  context.fillText(`${t.generated}: ${new Date().toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}`, 78, 228);

  const summary = [
    [t.totalAssets, amount(calculations.assets, currency)],
    [t.liabilities, amount(calculations.liabilities, currency)],
    [t.netWorth, amount(calculations.equity, currency)],
  ];
  summary.forEach(([label, value], index) => {
    const x = 76 + index * 366;
    context.fillStyle = card;
    context.fillRect(x, 278, 330, 156);
    context.fillStyle = muted;
    context.font = '700 17px system-ui, "Noto Sans", sans-serif';
    context.fillText(label.toUpperCase(), x + 24, 320);
    context.fillStyle = index === 2 && calculations.equity < 0 ? red : blue;
    context.font = '500 36px Georgia, "Noto Serif", serif';
    context.fillText(value, x + 24, 382);
  });

  const drawSection = (title, rows, x, y, boxWidth) => {
    context.fillStyle = card;
    context.fillRect(x, y, boxWidth, 76 + rows.length * 54);
    context.fillStyle = brightBlue;
    context.font = '800 20px system-ui, "Noto Sans", sans-serif';
    context.fillText(title.toUpperCase(), x + 24, y + 42);
    rows.forEach(([label, value], index) => {
      const rowY = y + 82 + index * 54;
      context.strokeStyle = "#ded59d";
      context.beginPath();
      context.moveTo(x + 24, rowY - 22);
      context.lineTo(x + boxWidth - 24, rowY - 22);
      context.stroke();
      context.fillStyle = muted;
      context.font = '400 18px system-ui, "Noto Sans", sans-serif';
      context.fillText(label, x + 24, rowY + 5);
      context.fillStyle = blue;
      context.font = '700 18px system-ui, "Noto Sans", sans-serif';
      context.textAlign = "right";
      context.fillText(value, x + boxWidth - 24, rowY + 5);
      context.textAlign = "left";
    });
  };

  drawSection(t.assets, assetKeys.map((key) => [t[key], amount(safeNumber(values[key]), currency)]), 76, 486, 532);
  drawSection(t.liabilities, debtKeys.map((key) => [t[key], amount(safeNumber(values[key]), currency)]), 632, 486, 532);
  drawSection(t.assumptions, [[t.monthlyExpenses, amount(safeNumber(values.monthlyExpenses), currency)]], 632, 816, 532);

  const ratioY = 966;
  context.fillStyle = card;
  context.fillRect(76, ratioY, 1088, 250);
  context.fillStyle = brightBlue;
  context.font = '800 20px system-ui, "Noto Sans", sans-serif';
  context.fillText(t.financialStatus.toUpperCase(), 100, ratioY + 42);
  const ratios = [
    [t.debtAsset, `${calculations.debtAsset.toFixed(1)}%`],
    [t.equityRatio, `${calculations.equityRatio.toFixed(1)}%`],
    [t.debtEquity, calculations.debtEquity === null ? "—" : `${calculations.debtEquity.toFixed(2)}×`],
    [t.runway, `${calculations.runway.toFixed(1)} ${t.months}`],
  ];
  ratios.forEach(([label, value], index) => {
    const x = 100 + index * 264;
    context.fillStyle = muted;
    context.font = '700 15px system-ui, "Noto Sans", sans-serif';
    context.fillText(label.toUpperCase(), x, ratioY + 100);
    context.fillStyle = blue;
    context.font = '500 34px Georgia, "Noto Serif", serif';
    context.fillText(value, x, ratioY + 154);
  });
  context.fillStyle = calculations.equity < 0 ? red : green;
  context.font = '800 22px system-ui, "Noto Sans", sans-serif';
  context.fillText(`${t.financialStatus}: ${status}`, 100, ratioY + 208);

  if (calculations.equity < 0) {
    context.fillStyle = "#fff0eb";
    context.fillRect(76, 1250, 1088, 126);
    context.fillStyle = red;
    context.font = '800 22px system-ui, "Noto Sans", sans-serif';
    context.fillText(`${t.liabilitiesExceed} ${amount(-calculations.equity, currency)}`, 104, 1298);
    context.font = '400 17px system-ui, "Noto Sans", sans-serif';
    context.fillText(t.bankruptcyNote, 104, 1338);
  }

  context.fillStyle = blue;
  context.font = '500 30px Georgia, "Noto Serif", serif';
  context.fillText(t.equation, 76, 1465);
  context.fillStyle = muted;
  context.font = '400 17px system-ui, "Noto Sans", sans-serif';
  context.fillText(t.disclaimer, 76, 1522);
  context.fillStyle = brightBlue;
  context.fillRect(76, 1600, 1088, 4);
  context.fillStyle = blue;
  context.font = '700 20px system-ui, "Noto Sans", sans-serif';
  context.fillText(t.brand, 76, 1652);

  const jpegBlob = await canvasBlob(canvas, "image/jpeg", 0.93);
  const jpegBytes = new Uint8Array(await jpegBlob.arrayBuffer());
  const pdf = buildImagePdf(jpegBytes, width, height);
  const filename = `balance-sheet-square-${new Date().toISOString().slice(0, 10)}.pdf`;
  return { pdf, filename };
}

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("RM");
  const [values, setValues] = useState(scenarios[0].values);
  const [activeScenario, setActiveScenario] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [actionStatus, setActionStatus] = useState("");
  const t = translations[language];

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("balance-sheet-square-v1"));
      if (saved?.values) setValues({ vehicles: 0, ...saved.values });
      if (saved?.language && translations[saved.language]) setLanguage(saved.language);
      if (["RM", "USD", "CNY"].includes(saved?.currency)) setCurrency(saved.currency);
      if (Number.isInteger(saved?.activeScenario)) setActiveScenario(saved.activeScenario);
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("balance-sheet-square-v1", JSON.stringify({ values, language, currency, activeScenario }));
  }, [values, language, currency, activeScenario, hydrated]);

  useEffect(() => {
    if ("serviceWorker" in navigator && window.location.hostname !== "appassets.androidplatform.net") {
      navigator.serviceWorker.register("./sw.js", { scope: "./" }).catch(() => {});
    }
  }, []);

  const calculations = useMemo(() => {
    const assets = assetKeys.reduce((sum, key) => sum + safeNumber(values[key]), 0);
    const liabilities = debtKeys.reduce((sum, key) => sum + safeNumber(values[key]), 0);
    const equity = assets - liabilities;
    const debtAsset = assets ? (liabilities / assets) * 100 : 0;
    const equityRatio = assets ? (equity / assets) * 100 : 0;
    const debtEquity = equity > 0 ? liabilities / equity : null;
    const runway = safeNumber(values.monthlyExpenses) ? safeNumber(values.cash) / safeNumber(values.monthlyExpenses) : 0;
    const liabilityHeight = assets ? Math.min(100, (liabilities / assets) * 100) : liabilities ? 100 : 0;
    return { assets, liabilities, equity, debtAsset, equityRatio, debtEquity, runway, liabilityHeight };
  }, [values]);

  const update = (key, next) => {
    setValues((current) => ({ ...current, [key]: next }));
    setActiveScenario(-1);
  };

  const loadScenario = (index) => {
    setValues(scenarios[index].values);
    setActiveScenario(index);
  };

  const prepareReport = async (shouldShare) => {
    setActionStatus(t.exporting);
    try {
      const { pdf, filename } = await createReportPdf({ values, calculations, currency, language, t });
      if (window.AndroidBridge?.sharePdf || window.AndroidBridge?.savePdf) {
        const base64 = await blobToBase64(pdf);
        if (shouldShare && window.AndroidBridge.sharePdf) {
          window.AndroidBridge.sharePdf(base64, filename);
        } else if (window.AndroidBridge.savePdf) {
          window.AndroidBridge.savePdf(base64, filename);
        } else {
          window.AndroidBridge.sharePdf(base64, filename);
        }
        setActionStatus(shouldShare ? t.shared : t.pdfReady);
      } else {
        const file = new File([pdf], filename, { type: "application/pdf" });
        if (shouldShare && navigator.share && navigator.canShare?.({ files: [file] })) {
          await navigator.share({ title: t.reportTitle, text: t.brand, files: [file] });
          setActionStatus(t.shared);
        } else {
          downloadBlob(pdf, filename);
          setActionStatus(shouldShare ? t.shareUnavailable : t.pdfReady);
        }
      }
    } catch (error) {
      if (error?.name !== "AbortError") setActionStatus(t.shareUnavailable);
    }
    window.setTimeout(() => setActionStatus(""), 4200);
  };

  const debtTone = calculations.debtAsset <= 20 ? "good" : calculations.debtAsset <= 50 ? "neutral" : "warn";
  const equityTone = calculations.equityRatio >= 70 ? "good" : calculations.equityRatio >= 40 ? "neutral" : "warn";
  const runwayTone = calculations.runway >= 12 ? "good" : calculations.runway >= 6 ? "neutral" : "warn";
  const debtNote = calculations.liabilities === 0 ? t.noDebt : calculations.debtAsset <= 35 ? t.strong : calculations.debtAsset <= 60 ? t.moderate : t.caution;

  return (
    <main>
      <section className="hero">
        <nav>
          <a className="wordmark" href="#top" aria-label={t.brand}>
            <span className="mark"><i /><i /></span>
            <span>{t.brand}</span>
          </a>
          <div className="nav-controls">
            <div className="language-switch" aria-label="Language">
              {[['en','EN'], ['ms','BM'], ['zh','中文']].map(([code, label]) => (
                <button key={code} className={language === code ? "active" : ""} onClick={() => setLanguage(code)}>{label}</button>
              ))}
            </div>
            <label className="currency-select">
              <span className="sr-only">{t.currency}</span>
              <select value={currency} onChange={(event) => setCurrency(event.target.value)}>
                <option value="RM">RM</option>
                <option value="USD">USD</option>
                <option value="CNY">CNY</option>
              </select>
            </label>
          </div>
        </nav>
        <div className="hero-copy" id="top">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
          </div>
          <div className="hero-support">
            <p>{t.intro}</p>
            <div className="privacy-line"><span className="shield">✓</span><strong>{t.private}</strong><span>·</span><span>{t.local}</span></div>
          </div>
        </div>
      </section>

      <section className="workbench" id="workbench">
        <header className="section-heading">
          <div><span>01</span><h2>{t.workspace}</h2></div>
          <p>{t.workspaceHint}</p>
        </header>

        <div className="workspace-grid">
          <aside className="editor-panel">
            <div className="edit-group asset-group">
              <div className="group-title"><span className="dot dot-asset"/><h3>{t.assets}</h3><strong>{amount(calculations.assets, currency)}</strong></div>
              {assetKeys.map((key) => <Field key={key} label={t[key]} value={values[key]} currency={currency} onChange={(next) => update(key, next)} />)}
            </div>
            <div className="edit-group debt-group">
              <div className="group-title"><span className="dot dot-debt"/><h3>{t.liabilities}</h3><strong>{amount(calculations.liabilities, currency)}</strong></div>
              {debtKeys.map((key) => <Field key={key} label={t[key]} value={values[key]} currency={currency} onChange={(next) => update(key, next)} />)}
            </div>
            <div className="edit-group planning-group">
              <div className="group-title"><span className="dot dot-plan"/><h3>{t.assumptions}</h3></div>
              <Field label={t.monthlyExpenses} value={values.monthlyExpenses} currency={currency} onChange={(next) => update("monthlyExpenses", next)} />
            </div>
            <div className="save-row">
              <span><i className="pulse" />{activeScenario >= 0 ? t.scenarioNames[activeScenario] : t.custom}</span>
              <span>✓ {t.saved}</span>
            </div>
          </aside>

          <div className="visual-panel">
            <div className="report-actions">
              <span className="offline-badge"><i className="pulse" />{t.offlineReady}</span>
              <div>
                <button type="button" className="report-button" onClick={() => prepareReport(false)}>{t.exportPdf}</button>
                <button type="button" className="report-button report-button-primary" onClick={() => prepareReport(true)}>{t.share}</button>
              </div>
              <span className="action-status" aria-live="polite">{actionStatus}</span>
            </div>
            <div className="square-wrap">
              <div className={`balance-square ${calculations.equity < 0 ? "is-negative" : ""}`}>
                <div className="asset-block">
                  <div className="block-label"><span>{t.assets}</span><strong>{amount(calculations.assets, currency, true)}</strong><small>100%</small></div>
                  <div className="asset-mix" aria-label={t.assetMix}>
                    {assetKeys.map((key, index) => {
                      const width = calculations.assets ? safeNumber(values[key]) / calculations.assets * 100 : 20;
                      return <span key={key} style={{ width: `${width}%`, background: assetColors[index] }} title={`${t[key]}: ${amount(safeNumber(values[key]), currency)}`} />;
                    })}
                  </div>
                </div>
                <div className="funding-block">
                  {calculations.liabilityHeight > 0 && (
                    <div className="liability-block" style={{ height: `${Math.max(calculations.liabilityHeight, calculations.liabilities ? 12 : 0)}%` }}>
                      <div className="block-label"><span>{t.liabilities}</span><strong>{amount(calculations.liabilities, currency, true)}</strong><small>{Math.round(calculations.debtAsset)}%</small></div>
                    </div>
                  )}
                  {calculations.equity >= 0 ? (
                    <div className="equity-block">
                      <div className="block-label"><span>{t.equity}</span><strong>{amount(calculations.equity, currency, true)}</strong><small>{Math.round(calculations.equityRatio)}%</small></div>
                    </div>
                  ) : (
                    <div className="negative-flag"><span>{t.insolvent}</span><strong>{amount(calculations.equity, currency, true)}</strong><small>{t.negative}</small></div>
                  )}
                </div>
              </div>
              <div className="square-totals">
                <div><span>{t.totalAssets}</span><strong>{amount(calculations.assets, currency)}</strong></div>
                <div><span>{t.totalRight}</span><strong>{amount(calculations.assets, currency)}</strong></div>
              </div>
            </div>

            <div className="equation-line"><span>{t.equation}</span><strong className={calculations.equity >= 0 ? "positive" : "negative"}>{calculations.equity >= 0 ? t.balanced : t.insolvent}</strong></div>
            {calculations.equity < 0 && (
              <div className="insolvency-alert" role="alert">
                <span className="alert-mark">!</span>
                <div><strong>{t.liabilitiesExceed} {amount(-calculations.equity, currency)}</strong><small>{t.bankruptcyNote}</small></div>
              </div>
            )}

            <div className="metrics-grid">
              <Metric label={t.netWorth} value={amount(calculations.equity, currency, true)} note={calculations.equity >= 0 ? t.equity : t.insolvent} tone={calculations.equity >= 0 ? "good" : "warn"} />
              <Metric label={t.debtAsset} value={`${calculations.debtAsset.toFixed(1)}%`} note={debtNote} tone={debtTone} />
              <Metric label={t.equityRatio} value={`${calculations.equityRatio.toFixed(1)}%`} note={calculations.equityRatio >= 60 ? t.strong : calculations.equityRatio >= 30 ? t.moderate : t.caution} tone={equityTone} />
              <Metric label={t.debtEquity} value={calculations.debtEquity === null ? "—" : `${calculations.debtEquity.toFixed(2)}×`} note={calculations.liabilities === 0 ? t.noDebt : debtNote} tone={debtTone} />
              <Metric label={t.runway} value={`${calculations.runway.toFixed(1)}`} note={t.months} tone={runwayTone} />
            </div>
          </div>
        </div>
      </section>

      <section className="scenarios-section">
        <header className="section-heading scenario-heading">
          <div><span>02</span><h2>{t.scenarios}</h2></div>
          <p>{t.scenarioHint}</p>
        </header>
        <div className="scenario-grid">
          {scenarios.map((scenario, index) => {
            const a = assetKeys.reduce((sum, key) => sum + safeNumber(scenario.values[key]), 0);
            const l = debtKeys.reduce((sum, key) => sum + safeNumber(scenario.values[key]), 0);
            const e = a - l;
            return (
              <button key={scenario.id} className={`scenario-card ${activeScenario === index ? "selected" : ""}`} onClick={() => loadScenario(index)}>
                <span className="scenario-number">0{index + 1}</span>
                <div><h3>{t.scenarioNames[index]}</h3><p>{t.scenarioDescs[index]}</p></div>
                <div className="mini-square" aria-hidden="true"><span/><i style={{ height: `${a ? Math.min(100, l/a*100) : 0}%` }}/><b /></div>
                <div className="scenario-stats"><span>{t.assets}<strong>{amount(a, currency, true)}</strong></span><span>{t.equity}<strong>{amount(e, currency, true)}</strong></span></div>
                <span className="load-label">{t.load} <b>↗</b></span>
              </button>
            );
          })}
        </div>
        <div className="method-card">
          <div className="method-icon"><span /><span /></div>
          <div><h3>{t.methodology}</h3><p>{t.methodText}</p></div>
        </div>
        <footer><span>{t.brand}</span><a href="./privacy.html">{t.privacyPolicy}</a><p>{t.disclaimer}</p></footer>
      </section>
    </main>
  );
}
