import {
  A,
  E,
  k
} from "./chunk-A3MKZKSE.js";
import {
  ConstantsUtil,
  NetworkUtil,
  NumberUtil,
  erc20ABI,
  getW3mThemeVariables
} from "./chunk-VX2SFTVG.js";
import {
  require_buffer
} from "./chunk-75QXM6Y4.js";
import {
  proxy,
  ref,
  snapshot,
  subscribe
} from "./chunk-RZICIBFF.js";
import {
  require_shim
} from "./chunk-I34SU4M3.js";
import {
  require_react
} from "./chunk-HBMOUMJU.js";
import {
  __toESM
} from "./chunk-MSFXBLHD.js";

// node_modules/valtio/esm/vanilla/utils.mjs
function subscribeKey(proxyObject, key, callback, notifyInSync) {
  let prevValue = proxyObject[key];
  return subscribe(
    proxyObject,
    () => {
      const nextValue = proxyObject[key];
      if (!Object.is(prevValue, nextValue)) {
        callback(prevValue = nextValue);
      }
    },
    notifyInSync
  );
}
var DEVTOOLS = Symbol();
function proxyMap(entries2) {
  const map = proxy({
    data: Array.from(entries2 || []),
    has(key) {
      return this.data.some((p2) => p2[0] === key);
    },
    set(key, value) {
      const record = this.data.find((p2) => p2[0] === key);
      if (record) {
        record[1] = value;
      } else {
        this.data.push([key, value]);
      }
      return this;
    },
    get(key) {
      var _a2;
      return (_a2 = this.data.find((p2) => p2[0] === key)) == null ? void 0 : _a2[1];
    },
    delete(key) {
      const index = this.data.findIndex((p2) => p2[0] === key);
      if (index === -1) {
        return false;
      }
      this.data.splice(index, 1);
      return true;
    },
    clear() {
      this.data.splice(0);
    },
    get size() {
      return this.data.length;
    },
    toJSON() {
      return new Map(this.data);
    },
    forEach(cb) {
      this.data.forEach((p2) => {
        cb(p2[1], p2[0], this);
      });
    },
    keys() {
      return this.data.map((p2) => p2[0]).values();
    },
    values() {
      return this.data.map((p2) => p2[1]).values();
    },
    entries() {
      return new Map(this.data).entries();
    },
    get [Symbol.toStringTag]() {
      return "Map";
    },
    [Symbol.iterator]() {
      return this.entries();
    }
  });
  Object.defineProperties(map, {
    data: {
      enumerable: false
    },
    size: {
      enumerable: false
    },
    toJSON: {
      enumerable: false
    }
  });
  Object.seal(map);
  return map;
}

// node_modules/@web3modal/core/dist/esm/src/utils/ConstantsUtil.js
var SECURE_SITE = "https://secure.walletconnect.com";
var ONRAMP_PROVIDERS = [
  {
    label: "Coinbase",
    name: "coinbase",
    feeRange: "1-2%",
    url: ""
  }
];
var ConstantsUtil2 = {
  FOUR_MINUTES_MS: 24e4,
  TEN_SEC_MS: 1e4,
  ONE_SEC_MS: 1e3,
  SECURE_SITE,
  SECURE_SITE_DASHBOARD: `${SECURE_SITE}/dashboard`,
  SECURE_SITE_FAVICON: `${SECURE_SITE}/images/favicon.png`,
  RESTRICTED_TIMEZONES: [
    "ASIA/SHANGHAI",
    "ASIA/URUMQI",
    "ASIA/CHONGQING",
    "ASIA/HARBIN",
    "ASIA/KASHGAR",
    "ASIA/MACAU",
    "ASIA/HONG_KONG",
    "ASIA/MACAO",
    "ASIA/BEIJING",
    "ASIA/HARBIN"
  ],
  WC_COINBASE_PAY_SDK_CHAINS: [
    "ethereum",
    "arbitrum",
    "polygon",
    "avalanche-c-chain",
    "optimism",
    "celo",
    "base"
  ],
  WC_COINBASE_PAY_SDK_FALLBACK_CHAIN: "ethereum",
  WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP: {
    Ethereum: "ethereum",
    "Arbitrum One": "arbitrum",
    Polygon: "polygon",
    Avalanche: "avalanche-c-chain",
    "OP Mainnet": "optimism",
    Celo: "celo",
    Base: "base"
  },
  WC_COINBASE_ONRAMP_APP_ID: "bf18c88d-495a-463b-b249-0b9d3656cf5e",
  SWAP_SUGGESTED_TOKENS: [
    "ETH",
    "UNI",
    "1INCH",
    "AAVE",
    "SOL",
    "ADA",
    "AVAX",
    "DOT",
    "LINK",
    "NITRO",
    "GAIA",
    "MILK",
    "TRX",
    "NEAR",
    "GNO",
    "WBTC",
    "DAI",
    "WETH",
    "USDC",
    "USDT",
    "ARB",
    "BAL",
    "BICO",
    "CRV",
    "ENS",
    "MATIC",
    "OP"
  ],
  SWAP_POPULAR_TOKENS: [
    "ETH",
    "UNI",
    "1INCH",
    "AAVE",
    "SOL",
    "ADA",
    "AVAX",
    "DOT",
    "LINK",
    "NITRO",
    "GAIA",
    "MILK",
    "TRX",
    "NEAR",
    "GNO",
    "WBTC",
    "DAI",
    "WETH",
    "USDC",
    "USDT",
    "ARB",
    "BAL",
    "BICO",
    "CRV",
    "ENS",
    "MATIC",
    "OP",
    "METAL",
    "DAI",
    "CHAMP",
    "WOLF",
    "SALE",
    "BAL",
    "BUSD",
    "MUST",
    "BTCpx",
    "ROUTE",
    "HEX",
    "WELT",
    "amDAI",
    "VSQ",
    "VISION",
    "AURUM",
    "pSP",
    "SNX",
    "VC",
    "LINK",
    "CHP",
    "amUSDT",
    "SPHERE",
    "FOX",
    "GIDDY",
    "GFC",
    "OMEN",
    "OX_OLD",
    "DE",
    "WNT"
  ],
  SWAP_SUPPORTED_NETWORKS: [
    "eip155:1",
    "eip155:42161",
    "eip155:10",
    "eip155:324",
    "eip155:8453",
    "eip155:56",
    "eip155:137",
    "eip155:100",
    "eip155:43114",
    "eip155:250",
    "eip155:8217",
    "eip155:1313161554"
  ],
  NATIVE_TOKEN_ADDRESS: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  CONVERT_SLIPPAGE_TOLERANCE: 1
};

// node_modules/@web3modal/core/dist/esm/src/utils/CoreHelperUtil.js
var CoreHelperUtil = {
  isMobile() {
    if (typeof window !== "undefined") {
      return Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent));
    }
    return false;
  },
  checkCaipNetwork(network, networkName = "") {
    return network == null ? void 0 : network.id.toLocaleLowerCase().includes(networkName.toLowerCase());
  },
  isAndroid() {
    const ua = window.navigator.userAgent.toLowerCase();
    return CoreHelperUtil.isMobile() && ua.includes("android");
  },
  isIos() {
    const ua = window.navigator.userAgent.toLowerCase();
    return CoreHelperUtil.isMobile() && (ua.includes("iphone") || ua.includes("ipad"));
  },
  isClient() {
    return typeof window !== "undefined";
  },
  isPairingExpired(expiry) {
    return expiry ? expiry - Date.now() <= ConstantsUtil2.TEN_SEC_MS : true;
  },
  isAllowedRetry(lastRetry) {
    return Date.now() - lastRetry >= ConstantsUtil2.ONE_SEC_MS;
  },
  copyToClopboard(text) {
    navigator.clipboard.writeText(text);
  },
  getPairingExpiry() {
    return Date.now() + ConstantsUtil2.FOUR_MINUTES_MS;
  },
  getNetworkId(caipAddress) {
    return caipAddress == null ? void 0 : caipAddress.split(":")[1];
  },
  getPlainAddress(caipAddress) {
    return caipAddress == null ? void 0 : caipAddress.split(":")[2];
  },
  async wait(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  },
  debounce(func, timeout = 500) {
    let timer = void 0;
    return (...args) => {
      function next() {
        func(...args);
      }
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(next, timeout);
    };
  },
  isHttpUrl(url) {
    return url.startsWith("http://") || url.startsWith("https://");
  },
  formatNativeUrl(appUrl, wcUri) {
    if (CoreHelperUtil.isHttpUrl(appUrl)) {
      return this.formatUniversalUrl(appUrl, wcUri);
    }
    let safeAppUrl = appUrl;
    if (!safeAppUrl.includes("://")) {
      safeAppUrl = appUrl.replaceAll("/", "").replaceAll(":", "");
      safeAppUrl = `${safeAppUrl}://`;
    }
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    const encodedWcUrl = encodeURIComponent(wcUri);
    return {
      redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
      href: safeAppUrl
    };
  },
  formatUniversalUrl(appUrl, wcUri) {
    if (!CoreHelperUtil.isHttpUrl(appUrl)) {
      return this.formatNativeUrl(appUrl, wcUri);
    }
    let safeAppUrl = appUrl;
    if (!safeAppUrl.endsWith("/")) {
      safeAppUrl = `${safeAppUrl}/`;
    }
    const encodedWcUrl = encodeURIComponent(wcUri);
    return {
      redirect: `${safeAppUrl}wc?uri=${encodedWcUrl}`,
      href: safeAppUrl
    };
  },
  openHref(href, target, features) {
    window.open(href, target, features || "noreferrer noopener");
  },
  returnOpenHref(href, target, features) {
    return window.open(href, target, features || "noreferrer noopener");
  },
  async preloadImage(src) {
    const imagePromise = new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = resolve;
      image.onerror = reject;
      image.crossOrigin = "anonymous";
      image.src = src;
    });
    return Promise.race([imagePromise, CoreHelperUtil.wait(2e3)]);
  },
  formatBalance(balance, symbol) {
    var _a2;
    let formattedBalance = void 0;
    if (balance === "0") {
      formattedBalance = "0.000";
    } else if (typeof balance === "string") {
      const number = Number(balance);
      if (number) {
        formattedBalance = (_a2 = number.toString().match(/^-?\d+(?:\.\d{0,3})?/u)) == null ? void 0 : _a2[0];
      }
    }
    return formattedBalance ? `${formattedBalance} ${symbol ?? ""}` : `0.000 ${symbol ?? ""}`;
  },
  formatBalance2(balance, symbol) {
    var _a2;
    let formattedBalance = void 0;
    if (balance === "0") {
      formattedBalance = "0";
    } else if (typeof balance === "string") {
      const number = Number(balance);
      if (number) {
        formattedBalance = (_a2 = number.toString().match(/^-?\d+(?:\.\d{0,3})?/u)) == null ? void 0 : _a2[0];
      }
    }
    return {
      value: formattedBalance ?? "0",
      rest: formattedBalance === "0" ? "000" : "",
      symbol
    };
  },
  getApiUrl() {
    return ConstantsUtil.W3M_API_URL;
  },
  getBlockchainApiUrl() {
    return ConstantsUtil.BLOCKCHAIN_API_RPC_URL;
  },
  getAnalyticsUrl() {
    return ConstantsUtil.PULSE_API_URL;
  },
  getUUID() {
    if (crypto == null ? void 0 : crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  },
  parseError(error) {
    var _a2, _b;
    if (typeof error === "string") {
      return error;
    } else if (typeof ((_b = (_a2 = error == null ? void 0 : error.issues) == null ? void 0 : _a2[0]) == null ? void 0 : _b.message) === "string") {
      return error.issues[0].message;
    } else if (error instanceof Error) {
      return error.message;
    }
    return "Unknown error";
  },
  sortRequestedNetworks(approvedIds, requestedNetworks = []) {
    const approvedIndexMap = {};
    if (requestedNetworks && approvedIds) {
      approvedIds.forEach((id, index) => {
        approvedIndexMap[id] = index;
      });
      requestedNetworks.sort((a2, b) => {
        const indexA = approvedIndexMap[a2.id];
        const indexB = approvedIndexMap[b.id];
        if (indexA !== void 0 && indexB !== void 0) {
          return indexA - indexB;
        } else if (indexA !== void 0) {
          return -1;
        } else if (indexB !== void 0) {
          return 1;
        }
        return 0;
      });
    }
    return requestedNetworks;
  },
  calculateBalance(array) {
    let sum = 0;
    for (const item of array) {
      sum += item.value ?? 0;
    }
    return sum;
  },
  formatTokenBalance(number) {
    const roundedNumber = number.toFixed(2);
    const [dollars, pennies] = roundedNumber.split(".");
    return { dollars, pennies };
  },
  isAddress(address) {
    if (!/^(?:0x)?[0-9a-f]{40}$/iu.test(address)) {
      return false;
    } else if (/^(?:0x)?[0-9a-f]{40}$/iu.test(address) || /^(?:0x)?[0-9A-F]{40}$/iu.test(address)) {
      return true;
    }
    return false;
  },
  uniqueBy(arr, key) {
    const set = /* @__PURE__ */ new Set();
    return arr.filter((item) => {
      const keyValue = item[key];
      if (set.has(keyValue)) {
        return false;
      }
      set.add(keyValue);
      return true;
    });
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/StorageUtil.js
var WC_DEEPLINK = "WALLETCONNECT_DEEPLINK_CHOICE";
var W3M_RECENT = "@w3m/recent";
var W3M_CONNECTED_WALLET_IMAGE_URL = "@w3m/connected_wallet_image_url";
var W3M_CONNECTED_CONNECTOR = "@w3m/connected_connector";
var W3M_CONNECTED_SOCIAL = "@w3m/connected_social";
var W3M_CONNECTED_SOCIAL_USERNAME = "@w3m-storage/SOCIAL_USERNAME";
var StorageUtil = {
  setWalletConnectDeepLink({ href, name }) {
    try {
      localStorage.setItem(WC_DEEPLINK, JSON.stringify({ href, name }));
    } catch {
      console.info("Unable to set WalletConnect deep link");
    }
  },
  getWalletConnectDeepLink() {
    try {
      const deepLink = localStorage.getItem(WC_DEEPLINK);
      if (deepLink) {
        return JSON.parse(deepLink);
      }
    } catch {
      console.info("Unable to get WalletConnect deep link");
    }
    return void 0;
  },
  deleteWalletConnectDeepLink() {
    try {
      localStorage.removeItem(WC_DEEPLINK);
    } catch {
      console.info("Unable to delete WalletConnect deep link");
    }
  },
  setWeb3ModalRecent(wallet) {
    try {
      const recentWallets = StorageUtil.getRecentWallets();
      const exists = recentWallets.find((w2) => w2.id === wallet.id);
      if (!exists) {
        recentWallets.unshift(wallet);
        if (recentWallets.length > 2) {
          recentWallets.pop();
        }
        localStorage.setItem(W3M_RECENT, JSON.stringify(recentWallets));
      }
    } catch {
      console.info("Unable to set Web3Modal recent");
    }
  },
  getRecentWallets() {
    try {
      const recent = localStorage.getItem(W3M_RECENT);
      return recent ? JSON.parse(recent) : [];
    } catch {
      console.info("Unable to get Web3Modal recent");
    }
    return [];
  },
  setConnectedWalletImageUrl(imageUrl) {
    try {
      localStorage.setItem(W3M_CONNECTED_WALLET_IMAGE_URL, imageUrl);
    } catch {
      console.info("Unable to set Connected Wallet Image Url");
    }
  },
  removeConnectedWalletImageUrl() {
    try {
      localStorage.removeItem(W3M_CONNECTED_WALLET_IMAGE_URL);
    } catch {
      console.info("Unable to remove Connected Wallet Image Url");
    }
  },
  getConnectedWalletImageUrl() {
    try {
      return localStorage.getItem(W3M_CONNECTED_WALLET_IMAGE_URL);
    } catch {
      console.info("Unable to set Connected Wallet Image Url");
    }
    return void 0;
  },
  setConnectedConnector(connectorType) {
    try {
      localStorage.setItem(W3M_CONNECTED_CONNECTOR, connectorType);
    } catch {
      console.info("Unable to set Connected Connector");
    }
  },
  getConnectedConnector() {
    try {
      return localStorage.getItem(W3M_CONNECTED_CONNECTOR);
    } catch {
      console.info("Unable to get Connected Connector");
    }
    return void 0;
  },
  setConnectedSocialProvider(socialProvider) {
    try {
      localStorage.setItem(W3M_CONNECTED_SOCIAL, socialProvider);
    } catch {
      console.info("Unable to set Connected Social Provider");
    }
  },
  getConnectedSocialProvider() {
    try {
      return localStorage.getItem(W3M_CONNECTED_SOCIAL);
    } catch {
      console.info("Unable to get Connected Social Provider");
    }
    return void 0;
  },
  getConnectedSocialUsername() {
    try {
      return localStorage.getItem(W3M_CONNECTED_SOCIAL_USERNAME);
    } catch {
      console.info("Unable to get Connected Social Username");
    }
    return void 0;
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/FetchUtil.js
async function fetchData(...args) {
  const response = await fetch(...args);
  if (!response.ok) {
    const err = new Error(`HTTP status code: ${response.status}`, {
      cause: response
    });
    throw err;
  }
  return response;
}
var FetchUtil = class {
  constructor({ baseUrl: baseUrl4 }) {
    this.baseUrl = baseUrl4;
  }
  async get({ headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, { method: "GET", headers, signal, cache: "no-cache" });
    return response.json();
  }
  async getBlob({ headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, { method: "GET", headers, signal });
    return response.blob();
  }
  async post({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "POST",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  async put({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "PUT",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  async delete({ body, headers, signal, ...args }) {
    const url = this.createUrl(args);
    const response = await fetchData(url, {
      method: "DELETE",
      headers,
      body: body ? JSON.stringify(body) : void 0,
      signal
    });
    return response.json();
  }
  createUrl({ path, params }) {
    const url = new URL(path, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          url.searchParams.append(key, value);
        }
      });
    }
    return url;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/AssetController.js
var state = proxy({
  walletImages: {},
  networkImages: {},
  chainImages: {},
  connectorImages: {},
  tokenImages: {},
  currencyImages: {}
});
var AssetController = {
  state,
  subscribeNetworkImages(callback) {
    return subscribe(state.networkImages, () => callback(state.networkImages));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state, key, callback);
  },
  subscribe(callback) {
    return subscribe(state, () => callback(state));
  },
  setWalletImage(key, value) {
    state.walletImages[key] = value;
  },
  setNetworkImage(key, value) {
    state.networkImages[key] = value;
  },
  setChainImage(key, value) {
    state.chainImages[key] = value;
  },
  setConnectorImage(key, value) {
    state.connectorImages[key] = value;
  },
  setTokenImage(key, value) {
    state.tokenImages[key] = value;
  },
  setCurrencyImage(key, value) {
    state.currencyImages[key] = value;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/PublicStateController.js
var state2 = proxy({
  loading: false,
  open: false,
  selectedNetworkId: void 0,
  activeChain: void 0
});
var PublicStateController = {
  state: state2,
  subscribe(callback) {
    return subscribe(state2, () => callback(state2));
  },
  set(newState) {
    Object.assign(state2, { ...state2, ...newState });
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/EventsController.js
var baseUrl = CoreHelperUtil.getAnalyticsUrl();
var api = new FetchUtil({ baseUrl });
var excluded = ["MODAL_CREATED"];
var state3 = proxy({
  timestamp: Date.now(),
  data: {
    type: "track",
    event: "MODAL_CREATED"
  }
});
var EventsController = {
  state: state3,
  subscribe(callback) {
    return subscribe(state3, () => callback(state3));
  },
  _getApiHeaders() {
    const { projectId, sdkType, sdkVersion } = OptionsController.state;
    return {
      "x-project-id": projectId,
      "x-sdk-type": sdkType,
      "x-sdk-version": sdkVersion
    };
  },
  async _sendAnalyticsEvent(payload) {
    try {
      if (excluded.includes(payload.data.event) || typeof window === "undefined") {
        return;
      }
      await api.post({
        path: "/e",
        headers: EventsController._getApiHeaders(),
        body: {
          eventId: CoreHelperUtil.getUUID(),
          url: window.location.href,
          domain: window.location.hostname,
          timestamp: payload.timestamp,
          props: payload.data
        }
      });
    } catch {
    }
  },
  sendEvent(data) {
    state3.timestamp = Date.now();
    state3.data = data;
    if (OptionsController.state.enableAnalytics) {
      EventsController._sendAnalyticsEvent(state3);
    }
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/BlockchainApiController.js
var DEFAULT_OPTIONS = {
  purchaseCurrencies: [
    {
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "USD Coin",
      symbol: "USDC",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    },
    {
      id: "2b92315d-eab7-5bef-84fa-089a131333f5",
      name: "Ether",
      symbol: "ETH",
      networks: [
        {
          name: "ethereum-mainnet",
          display_name: "Ethereum",
          chain_id: "1",
          contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
        },
        {
          name: "polygon-mainnet",
          display_name: "Polygon",
          chain_id: "137",
          contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        }
      ]
    }
  ],
  paymentCurrencies: [
    {
      id: "USD",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    },
    {
      id: "EUR",
      payment_method_limits: [
        {
          id: "card",
          min: "10.00",
          max: "7500.00"
        },
        {
          id: "ach_bank_account",
          min: "10.00",
          max: "25000.00"
        }
      ]
    }
  ]
};
var baseUrl2 = CoreHelperUtil.getBlockchainApiUrl();
var api2 = new FetchUtil({ baseUrl: baseUrl2 });
var BlockchainApiController = {
  fetchIdentity({ address }) {
    return api2.get({
      path: `/v1/identity/${address}`,
      params: {
        projectId: OptionsController.state.projectId
      }
    });
  },
  fetchTransactions({ account, projectId, cursor, onramp, signal }) {
    const queryParams = cursor ? { cursor } : {};
    return api2.get({
      path: `/v1/account/${account}/history?projectId=${projectId}${onramp ? `&onramp=${onramp}` : ""}`,
      params: queryParams,
      signal
    });
  },
  fetchSwapQuote({ projectId, amount, userAddress, from, to, gasPrice }) {
    return api2.get({
      path: `/v1/convert/quotes`,
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        projectId,
        amount,
        userAddress,
        from,
        to,
        gasPrice
      }
    });
  },
  fetchSwapTokens({ projectId, chainId }) {
    return api2.get({
      path: `/v1/convert/tokens?projectId=${projectId}&chainId=${chainId}`
    });
  },
  fetchTokenPrice({ projectId, addresses }) {
    return api2.post({
      path: "/v1/fungible/price",
      body: {
        projectId,
        currency: "usd",
        addresses
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  fetchSwapAllowance({ projectId, tokenAddress, userAddress }) {
    const { sdkType, sdkVersion } = OptionsController.state;
    return api2.get({
      path: `/v1/convert/allowance?projectId=${projectId}&tokenAddress=${tokenAddress}&userAddress=${userAddress}`,
      headers: {
        "Content-Type": "application/json",
        "x-sdk-type": sdkType,
        "x-sdk-version": sdkVersion
      }
    });
  },
  fetchGasPrice({ projectId, chainId }) {
    const { sdkType, sdkVersion } = OptionsController.state;
    return api2.get({
      path: `/v1/convert/gas-price`,
      headers: {
        "Content-Type": "application/json",
        "x-sdk-type": sdkType,
        "x-sdk-version": sdkVersion
      },
      params: {
        projectId,
        chainId
      }
    });
  },
  generateSwapCalldata({ amount, from, projectId, to, userAddress }) {
    return api2.post({
      path: "/v1/convert/build-transaction",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        amount,
        eip155: {
          slippage: ConstantsUtil2.CONVERT_SLIPPAGE_TOLERANCE
        },
        from,
        projectId,
        to,
        userAddress
      }
    });
  },
  generateApproveCalldata({ from, projectId, to, userAddress }) {
    const { sdkType, sdkVersion } = OptionsController.state;
    return api2.get({
      path: `/v1/convert/build-approve`,
      headers: {
        "Content-Type": "application/json",
        "x-sdk-type": sdkType,
        "x-sdk-version": sdkVersion
      },
      params: {
        projectId,
        userAddress,
        from,
        to
      }
    });
  },
  async getBalance(address, chainId, forceUpdate) {
    const { sdkType, sdkVersion } = OptionsController.state;
    return api2.get({
      path: `/v1/account/${address}/balance`,
      headers: {
        "x-sdk-type": sdkType,
        "x-sdk-version": sdkVersion
      },
      params: {
        currency: "usd",
        projectId: OptionsController.state.projectId,
        chainId,
        forceUpdate
      }
    });
  },
  async lookupEnsName(name) {
    return api2.get({
      path: `/v1/profile/account/${name}${ConstantsUtil.WC_NAME_SUFFIX}?projectId=${OptionsController.state.projectId}`
    });
  },
  async reverseLookupEnsName({ address }) {
    return api2.get({
      path: `/v1/profile/reverse/${address}?projectId=${OptionsController.state.projectId}`
    });
  },
  async getEnsNameSuggestions(name) {
    return api2.get({
      path: `/v1/profile/suggestions/${name}?projectId=${OptionsController.state.projectId}`
    });
  },
  async registerEnsName({ coinType, address, message, signature }) {
    return api2.post({
      path: `/v1/profile/account`,
      body: { coin_type: coinType, address, message, signature },
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  async generateOnRampURL({ destinationWallets, partnerUserId, defaultNetwork, purchaseAmount, paymentAmount }) {
    const response = await api2.post({
      path: `/v1/generators/onrampurl?projectId=${OptionsController.state.projectId}`,
      body: {
        destinationWallets,
        defaultNetwork,
        partnerUserId,
        defaultExperience: "buy",
        presetCryptoAmount: purchaseAmount,
        presetFiatAmount: paymentAmount
      }
    });
    return response.url;
  },
  async getOnrampOptions() {
    try {
      const response = await api2.get({
        path: `/v1/onramp/options?projectId=${OptionsController.state.projectId}`
      });
      return response;
    } catch (e) {
      return DEFAULT_OPTIONS;
    }
  },
  async getOnrampQuote({ purchaseCurrency, paymentCurrency, amount, network }) {
    try {
      const response = await api2.post({
        path: `/v1/onramp/quote?projectId=${OptionsController.state.projectId}`,
        body: {
          purchaseCurrency,
          paymentCurrency,
          amount,
          network
        }
      });
      return response;
    } catch (e) {
      return {
        coinbaseFee: { amount, currency: paymentCurrency.id },
        networkFee: { amount, currency: paymentCurrency.id },
        paymentSubtotal: { amount, currency: paymentCurrency.id },
        paymentTotal: { amount, currency: paymentCurrency.id },
        purchaseAmount: { amount, currency: paymentCurrency.id },
        quoteId: "mocked-quote-id"
      };
    }
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/SnackController.js
var state4 = proxy({
  message: "",
  variant: "success",
  open: false
});
var SnackController = {
  state: state4,
  subscribeKey(key, callback) {
    return subscribeKey(state4, key, callback);
  },
  showLoading(message) {
    state4.message = message;
    state4.variant = "loading";
    state4.open = true;
  },
  showSuccess(message) {
    state4.message = message;
    state4.variant = "success";
    state4.open = true;
  },
  showError(message) {
    const errorMessage = CoreHelperUtil.parseError(message);
    state4.message = errorMessage;
    state4.variant = "error";
    state4.open = true;
  },
  hide() {
    state4.open = false;
  }
};

// node_modules/valtio/esm/react/utils.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/valtio/esm/react.mjs
var import_react = __toESM(require_react(), 1);
var import_shim = __toESM(require_shim(), 1);
var { use } = import_react.default;
var { useSyncExternalStore } = import_shim.default;

// node_modules/@web3modal/polyfills/dist/esm/index.js
var import_buffer = __toESM(require_buffer());
var _a;
if (typeof window !== "undefined") {
  if (!window.Buffer) {
    window.Buffer = import_buffer.Buffer;
  }
  if (!window.global) {
    window.global = window;
  }
  if (!window.process) {
    window.process = {};
  }
  if (!((_a = window.process) == null ? void 0 : _a.env)) {
    window.process = { env: {} };
  }
}

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameConstants.js
var SECURE_SITE_SDK = process.env["NEXT_PUBLIC_SECURE_SITE_SDK_URL"] || "https://secure.walletconnect.com/sdk";
var DEFAULT_LOG_LEVEL = process.env["NEXT_PUBLIC_DEFAULT_LOG_LEVEL"] || "error";
var W3mFrameConstants = {
  APP_EVENT_KEY: "@w3m-app/",
  FRAME_EVENT_KEY: "@w3m-frame/",
  RPC_METHOD_KEY: "RPC_",
  STORAGE_KEY: "@w3m-storage/",
  SESSION_TOKEN_KEY: "SESSION_TOKEN_KEY",
  EMAIL_LOGIN_USED_KEY: "EMAIL_LOGIN_USED_KEY",
  LAST_USED_CHAIN_KEY: "LAST_USED_CHAIN_KEY",
  LAST_EMAIL_LOGIN_TIME: "LAST_EMAIL_LOGIN_TIME",
  EMAIL: "EMAIL",
  PREFERRED_ACCOUNT_TYPE: "PREFERRED_ACCOUNT_TYPE",
  SMART_ACCOUNT_ENABLED: "SMART_ACCOUNT_ENABLED",
  SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS",
  SOCIAL_USERNAME: "SOCIAL_USERNAME",
  SOCIAL: "@w3m/connected_social",
  APP_SWITCH_NETWORK: "@w3m-app/SWITCH_NETWORK",
  APP_CONNECT_EMAIL: "@w3m-app/CONNECT_EMAIL",
  APP_CONNECT_DEVICE: "@w3m-app/CONNECT_DEVICE",
  APP_CONNECT_OTP: "@w3m-app/CONNECT_OTP",
  APP_CONNECT_SOCIAL: "@w3m-app/CONNECT_SOCIAL",
  APP_GET_SOCIAL_REDIRECT_URI: "@w3m-app/GET_SOCIAL_REDIRECT_URI",
  APP_GET_USER: "@w3m-app/GET_USER",
  APP_SIGN_OUT: "@w3m-app/SIGN_OUT",
  APP_IS_CONNECTED: "@w3m-app/IS_CONNECTED",
  APP_GET_CHAIN_ID: "@w3m-app/GET_CHAIN_ID",
  APP_RPC_REQUEST: "@w3m-app/RPC_REQUEST",
  APP_UPDATE_EMAIL: "@w3m-app/UPDATE_EMAIL",
  APP_UPDATE_EMAIL_PRIMARY_OTP: "@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",
  APP_UPDATE_EMAIL_SECONDARY_OTP: "@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",
  APP_AWAIT_UPDATE_EMAIL: "@w3m-app/AWAIT_UPDATE_EMAIL",
  APP_SYNC_THEME: "@w3m-app/SYNC_THEME",
  APP_SYNC_DAPP_DATA: "@w3m-app/SYNC_DAPP_DATA",
  APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS: "@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",
  APP_INIT_SMART_ACCOUNT: "@w3m-app/INIT_SMART_ACCOUNT",
  APP_SET_PREFERRED_ACCOUNT: "@w3m-app/SET_PREFERRED_ACCOUNT",
  FRAME_SWITCH_NETWORK_ERROR: "@w3m-frame/SWITCH_NETWORK_ERROR",
  FRAME_SWITCH_NETWORK_SUCCESS: "@w3m-frame/SWITCH_NETWORK_SUCCESS",
  FRAME_CONNECT_EMAIL_ERROR: "@w3m-frame/CONNECT_EMAIL_ERROR",
  FRAME_CONNECT_EMAIL_SUCCESS: "@w3m-frame/CONNECT_EMAIL_SUCCESS",
  FRAME_CONNECT_DEVICE_ERROR: "@w3m-frame/CONNECT_DEVICE_ERROR",
  FRAME_CONNECT_DEVICE_SUCCESS: "@w3m-frame/CONNECT_DEVICE_SUCCESS",
  FRAME_CONNECT_OTP_SUCCESS: "@w3m-frame/CONNECT_OTP_SUCCESS",
  FRAME_CONNECT_OTP_ERROR: "@w3m-frame/CONNECT_OTP_ERROR",
  FRAME_CONNECT_SOCIAL_SUCCESS: "@w3m-frame/CONNECT_SOCIAL_SUCCESS",
  FRAME_CONNECT_SOCIAL_ERROR: "@w3m-frame/CONNECT_SOCIAL_ERROR",
  FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS: "@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",
  FRAME_GET_SOCIAL_REDIRECT_URI_ERROR: "@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",
  FRAME_GET_USER_SUCCESS: "@w3m-frame/GET_USER_SUCCESS",
  FRAME_GET_USER_ERROR: "@w3m-frame/GET_USER_ERROR",
  FRAME_SIGN_OUT_SUCCESS: "@w3m-frame/SIGN_OUT_SUCCESS",
  FRAME_SIGN_OUT_ERROR: "@w3m-frame/SIGN_OUT_ERROR",
  FRAME_IS_CONNECTED_SUCCESS: "@w3m-frame/IS_CONNECTED_SUCCESS",
  FRAME_IS_CONNECTED_ERROR: "@w3m-frame/IS_CONNECTED_ERROR",
  FRAME_GET_CHAIN_ID_SUCCESS: "@w3m-frame/GET_CHAIN_ID_SUCCESS",
  FRAME_GET_CHAIN_ID_ERROR: "@w3m-frame/GET_CHAIN_ID_ERROR",
  FRAME_RPC_REQUEST_SUCCESS: "@w3m-frame/RPC_REQUEST_SUCCESS",
  FRAME_RPC_REQUEST_ERROR: "@w3m-frame/RPC_REQUEST_ERROR",
  FRAME_SESSION_UPDATE: "@w3m-frame/SESSION_UPDATE",
  FRAME_UPDATE_EMAIL_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SUCCESS",
  FRAME_UPDATE_EMAIL_ERROR: "@w3m-frame/UPDATE_EMAIL_ERROR",
  FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS: "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",
  FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR: "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",
  FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",
  FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR: "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",
  FRAME_SYNC_THEME_SUCCESS: "@w3m-frame/SYNC_THEME_SUCCESS",
  FRAME_SYNC_THEME_ERROR: "@w3m-frame/SYNC_THEME_ERROR",
  FRAME_SYNC_DAPP_DATA_SUCCESS: "@w3m-frame/SYNC_DAPP_DATA_SUCCESS",
  FRAME_SYNC_DAPP_DATA_ERROR: "@w3m-frame/SYNC_DAPP_DATA_ERROR",
  FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS: "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",
  FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR: "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",
  FRAME_INIT_SMART_ACCOUNT_SUCCESS: "@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",
  FRAME_INIT_SMART_ACCOUNT_ERROR: "@w3m-frame/INIT_SMART_ACCOUNT_ERROR",
  FRAME_SET_PREFERRED_ACCOUNT_SUCCESS: "@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",
  FRAME_SET_PREFERRED_ACCOUNT_ERROR: "@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",
  RPC_RESPONSE_TYPE_ERROR: "RPC_RESPONSE_ERROR",
  RPC_RESPONSE_TYPE_TX: "RPC_RESPONSE_TRANSACTION_HASH",
  RPC_RESPONSE_TYPE_OBJECT: "RPC_RESPONSE_OBJECT"
};
var W3mFrameRpcConstants = {
  SAFE_RPC_METHODS: [
    "eth_accounts",
    "eth_blockNumber",
    "eth_call",
    "eth_chainId",
    "eth_estimateGas",
    "eth_feeHistory",
    "eth_gasPrice",
    "eth_getAccount",
    "eth_getBalance",
    "eth_getBlockByHash",
    "eth_getBlockByNumber",
    "eth_getBlockReceipts",
    "eth_getBlockTransactionCountByHash",
    "eth_getBlockTransactionCountByNumber",
    "eth_getCode",
    "eth_getFilterChanges",
    "eth_getFilterLogs",
    "eth_getLogs",
    "eth_getProof",
    "eth_getStorageAt",
    "eth_getTransactionByBlockHashAndIndex",
    "eth_getTransactionByBlockNumberAndIndex",
    "eth_getTransactionByHash",
    "eth_getTransactionCount",
    "eth_getTransactionReceipt",
    "eth_getUncleCountByBlockHash",
    "eth_getUncleCountByBlockNumber",
    "eth_maxPriorityFeePerGas",
    "eth_newBlockFilter",
    "eth_newFilter",
    "eth_newPendingTransactionFilter",
    "eth_sendRawTransaction",
    "eth_syncing",
    "eth_uninstallFilter"
  ],
  NOT_SAFE_RPC_METHODS: ["personal_sign", "eth_signTypedData_v4", "eth_sendTransaction"],
  GET_CHAIN_ID: "eth_chainId",
  RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
  RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
  ACCOUNT_TYPES: {
    EOA: "eoa",
    SMART_ACCOUNT: "smartAccount"
  }
};

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k2) => typeof obj[obj[k2]] !== "number");
    const filtered = {};
    for (const k2 of validKeys) {
      filtered[k2] = obj[k2];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = errorMap;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      errorMap
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent2, value, path, key) {
    this._cachedPath = [];
    this.parent = parent2;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (this._key instanceof Array) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a2;
    const ctx = {
      common: {
        issues: [],
        async: (_a2 = params === null || params === void 0 ? void 0 : params.async) !== null && _a2 !== void 0 ? _a2 : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this, this._def);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[a-z][a-z0-9]*$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
var ipv6Regex = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
var datetimeRegex = (args) => {
  if (args.precision) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${args.precision}}Z$`);
    }
  } else if (args.precision === 0) {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
    }
  } else {
    if (args.offset) {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
    } else {
      return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
    }
  }
};
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
        //
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a2) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    var _a2;
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof (options === null || options === void 0 ? void 0 : options.precision) === "undefined" ? null : options === null || options === void 0 ? void 0 : options.precision,
      offset: (_a2 = options === null || options === void 0 ? void 0 : options.offset) !== null && _a2 !== void 0 ? _a2 : false,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options === null || options === void 0 ? void 0 : options.position,
      ...errorUtil.errToObj(options === null || options === void 0 ? void 0 : options.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  var _a2;
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: (_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a2 !== void 0 ? _a2 : false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null, min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = BigInt(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  var _a2;
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: (_a2 = params === null || params === void 0 ? void 0 : params.coerce) !== null && _a2 !== void 0 ? _a2 : false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: (params === null || params === void 0 ? void 0 : params.coerce) || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a2, _b, _c, _d;
          const defaultError = (_c = (_b = (_a2 = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a2, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).forEach((key) => {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    util.objectKeys(this.shape).forEach((key) => {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    });
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return Object.keys(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else {
    return null;
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a2, b) {
  const aType = getParsedType(a2);
  const bType = getParsedType(b);
  if (a2 === b) {
    return { valid: true, data: a2 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a2, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a2.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a2.length; index++) {
      const itemA = a2[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 === +b) {
    return { valid: true, data: a2 };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          errorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values) {
    return _ZodEnum.create(values);
  }
  exclude(values) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)));
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.issues.length) {
        return {
          status: "dirty",
          value: ctx.data
        };
      }
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a2, b) {
    return new _ZodPipeline({
      in: a2,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    if (isValid(result)) {
      result.value = Object.freeze(result.value);
    }
    return result;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
var custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      var _a2, _b;
      if (!check(data)) {
        const p2 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const _fatal = (_b = (_a2 = p2.fatal) !== null && _a2 !== void 0 ? _a2 : fatal) !== null && _b !== void 0 ? _b : true;
        const p22 = typeof p2 === "string" ? { message: p2 } : p2;
        ctx.addIssue({ code: "custom", ...p22, fatal: _fatal });
      }
    });
  return ZodAny.create();
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: (arg) => ZodString.create({ ...arg, coerce: true }),
  number: (arg) => ZodNumber.create({ ...arg, coerce: true }),
  boolean: (arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }),
  bigint: (arg) => ZodBigInt.create({ ...arg, coerce: true }),
  date: (arg) => ZodDate.create({ ...arg, coerce: true })
};
var NEVER = INVALID;
var z = Object.freeze({
  __proto__: null,
  defaultErrorMap: errorMap,
  setErrorMap,
  getErrorMap,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  get util() {
    return util;
  },
  get objectUtil() {
    return objectUtil;
  },
  ZodParsedType,
  getParsedType,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodSymbol,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodCatch,
  ZodNaN,
  BRAND,
  ZodBranded,
  ZodPipeline,
  ZodReadonly,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  coerce,
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  pipeline: pipelineType,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  symbol: symbolType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  NEVER,
  ZodIssueCode,
  quotelessJson,
  ZodError
});

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameSchema.js
var zError = z.object({ message: z.string() });
function zType(key) {
  return z.literal(W3mFrameConstants[key]);
}
var GetTransactionByHashResponse = z.object({
  accessList: z.array(z.string()),
  blockHash: z.string().nullable(),
  blockNumber: z.string().nullable(),
  chainId: z.string(),
  from: z.string(),
  gas: z.string(),
  hash: z.string(),
  input: z.string().nullable(),
  maxFeePerGas: z.string(),
  maxPriorityFeePerGas: z.string(),
  nonce: z.string(),
  r: z.string(),
  s: z.string(),
  to: z.string(),
  transactionIndex: z.string().nullable(),
  type: z.string(),
  v: z.string(),
  value: z.string()
});
var AppSwitchNetworkRequest = z.object({ chainId: z.number() });
var AppConnectEmailRequest = z.object({ email: z.string().email() });
var AppConnectOtpRequest = z.object({ otp: z.string() });
var AppConnectSocialRequest = z.object({ uri: z.string() });
var AppGetUserRequest = z.object({
  chainId: z.optional(z.number()),
  preferredAccountType: z.optional(z.string())
});
var AppGetSocialRedirectUriRequest = z.object({
  provider: z.enum(["google", "github", "apple", "facebook", "x", "discord"])
});
var AppUpdateEmailRequest = z.object({ email: z.string().email() });
var AppUpdateEmailPrimaryOtpRequest = z.object({ otp: z.string() });
var AppUpdateEmailSecondaryOtpRequest = z.object({ otp: z.string() });
var AppSyncThemeRequest = z.object({
  themeMode: z.optional(z.enum(["light", "dark"])),
  themeVariables: z.optional(z.record(z.string(), z.string().or(z.number()))),
  w3mThemeVariables: z.optional(z.record(z.string(), z.string()))
});
var AppSyncDappDataRequest = z.object({
  metadata: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
    icons: z.array(z.string())
  }).optional(),
  sdkVersion: z.string(),
  projectId: z.string()
});
var AppSetPreferredAccountRequest = z.object({ type: z.string() });
var FrameConnectEmailResponse = z.object({
  action: z.enum(["VERIFY_DEVICE", "VERIFY_OTP"])
});
var FrameConnectSocialResponse = z.object({
  email: z.string(),
  address: z.string(),
  chainId: z.number(),
  userName: z.string().optional()
});
var FrameUpdateEmailResponse = z.object({
  action: z.enum(["VERIFY_PRIMARY_OTP", "VERIFY_SECONDARY_OTP"])
});
var FrameGetUserResponse = z.object({
  email: z.string().email(),
  address: z.string(),
  chainId: z.number(),
  smartAccountDeployed: z.optional(z.boolean()),
  preferredAccountType: z.optional(z.string())
});
var FrameGetSocialRedirectUriResponse = z.object({ uri: z.string() });
var FrameIsConnectedResponse = z.object({ isConnected: z.boolean() });
var FrameGetChainIdResponse = z.object({ chainId: z.number() });
var FrameSwitchNetworkResponse = z.object({ chainId: z.number() });
var FrameUpdateEmailSecondaryOtpResolver = z.object({ newEmail: z.string().email() });
var FrameGetSmartAccountEnabledNetworksResponse = z.object({
  smartAccountEnabledNetworks: z.array(z.number())
});
var FrameInitSmartAccountResponse = z.object({
  address: z.string(),
  isDeployed: z.boolean()
});
var FrameSetPreferredAccountResponse = z.object({ type: z.string(), address: z.string() });
var RpcResponse = z.any();
var RpcEthAccountsRequest = z.object({
  method: z.literal("eth_accounts")
});
var RpcEthBlockNumber = z.object({
  method: z.literal("eth_blockNumber")
});
var RpcEthCall = z.object({
  method: z.literal("eth_call"),
  params: z.array(z.any())
});
var RpcEthChainId = z.object({
  method: z.literal("eth_chainId")
});
var RpcEthEstimateGas = z.object({
  method: z.literal("eth_estimateGas"),
  params: z.array(z.any())
});
var RpcEthFeeHistory = z.object({
  method: z.literal("eth_feeHistory"),
  params: z.array(z.any())
});
var RpcEthGasPrice = z.object({
  method: z.literal("eth_gasPrice")
});
var RpcEthGetAccount = z.object({
  method: z.literal("eth_getAccount"),
  params: z.array(z.any())
});
var RpcEthGetBalance = z.object({
  method: z.literal("eth_getBalance"),
  params: z.array(z.any())
});
var RpcEthGetBlockyByHash = z.object({
  method: z.literal("eth_getBlockByHash"),
  params: z.array(z.any())
});
var RpcEthGetBlockByNumber = z.object({
  method: z.literal("eth_getBlockByNumber"),
  params: z.array(z.any())
});
var RpcEthGetBlockReceipts = z.object({
  method: z.literal("eth_getBlockReceipts"),
  params: z.array(z.any())
});
var RcpEthGetBlockTransactionCountByHash = z.object({
  method: z.literal("eth_getBlockTransactionCountByHash"),
  params: z.array(z.any())
});
var RcpEthGetBlockTransactionCountByNumber = z.object({
  method: z.literal("eth_getBlockTransactionCountByNumber"),
  params: z.array(z.any())
});
var RpcEthGetCode = z.object({
  method: z.literal("eth_getCode"),
  params: z.array(z.any())
});
var RpcEthGetFilter = z.object({
  method: z.literal("eth_getFilterChanges"),
  params: z.array(z.any())
});
var RpcEthGetFilterLogs = z.object({
  method: z.literal("eth_getFilterLogs"),
  params: z.array(z.any())
});
var RpcEthGetLogs = z.object({
  method: z.literal("eth_getLogs"),
  params: z.array(z.any())
});
var RpcEthGetProof = z.object({
  method: z.literal("eth_getProof"),
  params: z.array(z.any())
});
var RpcEthGetStorageAt = z.object({
  method: z.literal("eth_getStorageAt"),
  params: z.array(z.any())
});
var RpcEthGetTransactionByBlockHashAndIndex = z.object({
  method: z.literal("eth_getTransactionByBlockHashAndIndex"),
  params: z.array(z.any())
});
var RpcEthGetTransactionByBlockNumberAndIndex = z.object({
  method: z.literal("eth_getTransactionByBlockNumberAndIndex"),
  params: z.array(z.any())
});
var RpcEthGetTransactionByHash = z.object({
  method: z.literal("eth_getTransactionByHash"),
  params: z.array(z.any())
});
var RpcEthGetTransactionCount = z.object({
  method: z.literal("eth_getTransactionCount"),
  params: z.array(z.any())
});
var RpcEthGetTransactionReceipt = z.object({
  method: z.literal("eth_getTransactionReceipt"),
  params: z.array(z.any())
});
var RpcEthGetUncleCountByBlockHash = z.object({
  method: z.literal("eth_getUncleCountByBlockHash"),
  params: z.array(z.any())
});
var RpcEthGetUncleCountByBlockNumber = z.object({
  method: z.literal("eth_getUncleCountByBlockNumber"),
  params: z.array(z.any())
});
var RpcEthMaxPriorityFeePerGas = z.object({
  method: z.literal("eth_maxPriorityFeePerGas")
});
var RpcEthNewBlockFilter = z.object({
  method: z.literal("eth_newBlockFilter")
});
var RpcEthNewFilter = z.object({
  method: z.literal("eth_newFilter"),
  params: z.array(z.any())
});
var RpcEthNewPendingTransactionFilter = z.object({
  method: z.literal("eth_newPendingTransactionFilter")
});
var RpcEthSendRawTransaction = z.object({
  method: z.literal("eth_sendRawTransaction"),
  params: z.array(z.any())
});
var RpcEthSyncing = z.object({
  method: z.literal("eth_syncing"),
  params: z.array(z.any())
});
var RpcUnistallFilter = z.object({
  method: z.literal("eth_uninstallFilter"),
  params: z.array(z.any())
});
var RpcPersonalSignRequest = z.object({
  method: z.literal("personal_sign"),
  params: z.array(z.any())
});
var RpcEthSignTypedDataV4 = z.object({
  method: z.literal("eth_signTypedData_v4"),
  params: z.array(z.any())
});
var RpcEthSendTransactionRequest = z.object({
  method: z.literal("eth_sendTransaction"),
  params: z.array(z.any())
});
var FrameSession = z.object({
  token: z.string()
});
var W3mFrameSchema = {
  appEvent: z.object({ type: zType("APP_SWITCH_NETWORK"), payload: AppSwitchNetworkRequest }).or(z.object({ type: zType("APP_CONNECT_EMAIL"), payload: AppConnectEmailRequest })).or(z.object({ type: zType("APP_CONNECT_DEVICE") })).or(z.object({ type: zType("APP_CONNECT_OTP"), payload: AppConnectOtpRequest })).or(z.object({ type: zType("APP_CONNECT_SOCIAL"), payload: AppConnectSocialRequest })).or(z.object({ type: zType("APP_GET_USER"), payload: z.optional(AppGetUserRequest) })).or(z.object({
    type: zType("APP_GET_SOCIAL_REDIRECT_URI"),
    payload: AppGetSocialRedirectUriRequest
  })).or(z.object({ type: zType("APP_SIGN_OUT") })).or(z.object({ type: zType("APP_IS_CONNECTED"), payload: z.optional(FrameSession) })).or(z.object({ type: zType("APP_GET_CHAIN_ID") })).or(z.object({ type: zType("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS") })).or(z.object({ type: zType("APP_INIT_SMART_ACCOUNT") })).or(z.object({ type: zType("APP_SET_PREFERRED_ACCOUNT"), payload: AppSetPreferredAccountRequest })).or(z.object({
    type: zType("APP_RPC_REQUEST"),
    payload: RpcPersonalSignRequest.or(RpcEthSendTransactionRequest).or(RpcEthAccountsRequest).or(RpcEthBlockNumber).or(RpcEthCall).or(RpcEthChainId).or(RpcEthEstimateGas).or(RpcEthFeeHistory).or(RpcEthGasPrice).or(RpcEthGetAccount).or(RpcEthGetBalance).or(RpcEthGetBlockyByHash).or(RpcEthGetBlockByNumber).or(RpcEthGetBlockReceipts).or(RcpEthGetBlockTransactionCountByHash).or(RcpEthGetBlockTransactionCountByNumber).or(RpcEthGetCode).or(RpcEthGetFilter).or(RpcEthGetFilterLogs).or(RpcEthGetLogs).or(RpcEthGetProof).or(RpcEthGetStorageAt).or(RpcEthGetTransactionByBlockHashAndIndex).or(RpcEthGetTransactionByBlockNumberAndIndex).or(RpcEthGetTransactionByHash).or(RpcEthGetTransactionCount).or(RpcEthGetTransactionReceipt).or(RpcEthGetUncleCountByBlockHash).or(RpcEthGetUncleCountByBlockNumber).or(RpcEthMaxPriorityFeePerGas).or(RpcEthNewBlockFilter).or(RpcEthNewFilter).or(RpcEthNewPendingTransactionFilter).or(RpcEthSendRawTransaction).or(RpcEthSyncing).or(RpcUnistallFilter).or(RpcPersonalSignRequest).or(RpcEthSignTypedDataV4).or(RpcEthSendTransactionRequest)
  })).or(z.object({ type: zType("APP_UPDATE_EMAIL"), payload: AppUpdateEmailRequest })).or(z.object({
    type: zType("APP_UPDATE_EMAIL_PRIMARY_OTP"),
    payload: AppUpdateEmailPrimaryOtpRequest
  })).or(z.object({
    type: zType("APP_UPDATE_EMAIL_SECONDARY_OTP"),
    payload: AppUpdateEmailSecondaryOtpRequest
  })).or(z.object({ type: zType("APP_SYNC_THEME"), payload: AppSyncThemeRequest })).or(z.object({ type: zType("APP_SYNC_DAPP_DATA"), payload: AppSyncDappDataRequest })),
  frameEvent: z.object({ type: zType("FRAME_SWITCH_NETWORK_ERROR"), payload: zError }).or(z.object({ type: zType("FRAME_SWITCH_NETWORK_SUCCESS"), payload: FrameSwitchNetworkResponse })).or(z.object({ type: zType("FRAME_CONNECT_EMAIL_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_CONNECT_EMAIL_SUCCESS"), payload: FrameConnectEmailResponse })).or(z.object({ type: zType("FRAME_CONNECT_OTP_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_CONNECT_OTP_SUCCESS") })).or(z.object({ type: zType("FRAME_CONNECT_DEVICE_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_CONNECT_DEVICE_SUCCESS") })).or(z.object({
    type: zType("FRAME_CONNECT_SOCIAL_SUCCESS"),
    payload: FrameConnectSocialResponse
  })).or(z.object({
    type: zType("FRAME_CONNECT_SOCIAL_ERROR"),
    payload: zError
  })).or(z.object({ type: zType("FRAME_GET_USER_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_GET_USER_SUCCESS"), payload: FrameGetUserResponse })).or(z.object({ type: zType("FRAME_GET_SOCIAL_REDIRECT_URI_ERROR"), payload: zError })).or(z.object({
    type: zType("FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS"),
    payload: FrameGetSocialRedirectUriResponse
  })).or(z.object({ type: zType("FRAME_SIGN_OUT_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_SIGN_OUT_SUCCESS") })).or(z.object({ type: zType("FRAME_IS_CONNECTED_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_IS_CONNECTED_SUCCESS"), payload: FrameIsConnectedResponse })).or(z.object({ type: zType("FRAME_GET_CHAIN_ID_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_GET_CHAIN_ID_SUCCESS"), payload: FrameGetChainIdResponse })).or(z.object({ type: zType("FRAME_RPC_REQUEST_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_RPC_REQUEST_SUCCESS"), payload: RpcResponse })).or(z.object({ type: zType("FRAME_SESSION_UPDATE"), payload: FrameSession })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_SUCCESS"), payload: FrameUpdateEmailResponse })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS") })).or(z.object({ type: zType("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"), payload: zError })).or(z.object({
    type: zType("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),
    payload: FrameUpdateEmailSecondaryOtpResolver
  })).or(z.object({ type: zType("FRAME_SYNC_THEME_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_SYNC_THEME_SUCCESS") })).or(z.object({ type: zType("FRAME_SYNC_DAPP_DATA_ERROR"), payload: zError })).or(z.object({ type: zType("FRAME_SYNC_DAPP_DATA_SUCCESS") })).or(z.object({
    type: zType("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),
    payload: FrameGetSmartAccountEnabledNetworksResponse
  })).or(z.object({
    type: zType("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),
    payload: zError
  })).or(z.object({ type: zType("FRAME_INIT_SMART_ACCOUNT_ERROR"), payload: zError })).or(z.object({
    type: zType("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),
    payload: FrameSetPreferredAccountResponse
  })).or(z.object({ type: zType("FRAME_SET_PREFERRED_ACCOUNT_ERROR"), payload: zError }))
};

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameStorage.js
var W3mFrameStorage = {
  set(key, value) {
    if (W3mFrameHelpers.isClient) {
      localStorage.setItem(`${W3mFrameConstants.STORAGE_KEY}${key}`, value);
    }
  },
  get(key) {
    if (W3mFrameHelpers.isClient) {
      return localStorage.getItem(`${W3mFrameConstants.STORAGE_KEY}${key}`);
    }
    return null;
  },
  delete(key, social) {
    if (W3mFrameHelpers.isClient) {
      if (social) {
        localStorage.removeItem(key);
      } else {
        localStorage.removeItem(`${W3mFrameConstants.STORAGE_KEY}${key}`);
      }
    }
  }
};

// node_modules/@web3modal/wallet/dist/esm/src/RegexUtil.js
var RegexUtil = {
  address: /^0x(?:[A-Fa-f0-9]{40})$/u,
  transactionHash: /^0x(?:[A-Fa-f0-9]{64})$/u,
  signedMessage: /^0x(?:[a-fA-F0-9]{62,})$/u
};

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameHelpers.js
var EMAIL_MINIMUM_TIMEOUT = 30 * 1e3;
var W3mFrameHelpers = {
  checkIfAllowedToTriggerEmail() {
    const lastEmailLoginTime = W3mFrameStorage.get(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
    if (lastEmailLoginTime) {
      const difference = Date.now() - Number(lastEmailLoginTime);
      if (difference < EMAIL_MINIMUM_TIMEOUT) {
        const cooldownSec = Math.ceil((EMAIL_MINIMUM_TIMEOUT - difference) / 1e3);
        throw new Error(`Please try again after ${cooldownSec} seconds`);
      }
    }
  },
  getTimeToNextEmailLogin() {
    const lastEmailLoginTime = W3mFrameStorage.get(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
    if (lastEmailLoginTime) {
      const difference = Date.now() - Number(lastEmailLoginTime);
      if (difference < EMAIL_MINIMUM_TIMEOUT) {
        return Math.ceil((EMAIL_MINIMUM_TIMEOUT - difference) / 1e3);
      }
    }
    return 0;
  },
  checkIfRequestExists(request) {
    const method = this.getRequestMethod(request);
    return W3mFrameRpcConstants.NOT_SAFE_RPC_METHODS.includes(method) || W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(method);
  },
  getRequestMethod(request) {
    var _a2;
    return (_a2 = request == null ? void 0 : request.payload) == null ? void 0 : _a2.method;
  },
  getResponseType(response) {
    const { type, payload } = response;
    const isError = type === W3mFrameConstants.FRAME_RPC_REQUEST_ERROR;
    if (isError) {
      return W3mFrameConstants.RPC_RESPONSE_TYPE_ERROR;
    }
    const isPayloadString = typeof payload === "string";
    const isTransactionHash = isPayloadString && (payload.match(RegexUtil.transactionHash) || payload.match(RegexUtil.signedMessage));
    if (isTransactionHash) {
      return W3mFrameConstants.RPC_RESPONSE_TYPE_TX;
    }
    return W3mFrameConstants.RPC_RESPONSE_TYPE_OBJECT;
  },
  checkIfRequestIsAllowed(request) {
    const method = this.getRequestMethod(request);
    return W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(method);
  },
  isClient: typeof window !== "undefined"
};

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrame.js
var W3mFrame = class {
  constructor(projectId, isAppClient = false) {
    this.iframe = null;
    this.rpcUrl = ConstantsUtil.BLOCKCHAIN_API_RPC_URL;
    this.events = {
      onFrameEvent: (callback) => {
        if (W3mFrameHelpers.isClient) {
          window.addEventListener("message", ({ data }) => {
            var _a2;
            if (!((_a2 = data.type) == null ? void 0 : _a2.includes(W3mFrameConstants.FRAME_EVENT_KEY))) {
              return;
            }
            const frameEvent = W3mFrameSchema.frameEvent.parse(data);
            callback(frameEvent);
          });
        }
      },
      onAppEvent: (callback) => {
        if (W3mFrameHelpers.isClient) {
          window.addEventListener("message", ({ data }) => {
            var _a2;
            if (!((_a2 = data.type) == null ? void 0 : _a2.includes(W3mFrameConstants.APP_EVENT_KEY))) {
              return;
            }
            const appEvent = W3mFrameSchema.appEvent.parse(data);
            callback(appEvent);
          });
        }
      },
      postAppEvent: (event) => {
        var _a2;
        if (W3mFrameHelpers.isClient) {
          if (!((_a2 = this.iframe) == null ? void 0 : _a2.contentWindow)) {
            throw new Error("W3mFrame: iframe is not set");
          }
          W3mFrameSchema.appEvent.parse(event);
          window.postMessage(event);
          this.iframe.contentWindow.postMessage(event, "*");
        }
      },
      postFrameEvent: (event) => {
        if (W3mFrameHelpers.isClient) {
          if (!parent) {
            throw new Error("W3mFrame: parent is not set");
          }
          W3mFrameSchema.frameEvent.parse(event);
          parent.postMessage(event, "*");
        }
      }
    };
    this.projectId = projectId;
    this.frameLoadPromise = new Promise((resolve, reject) => {
      this.frameLoadPromiseResolver = { resolve, reject };
    });
    if (isAppClient) {
      this.frameLoadPromise = new Promise((resolve, reject) => {
        this.frameLoadPromiseResolver = { resolve, reject };
      });
      if (W3mFrameHelpers.isClient) {
        const iframe = document.createElement("iframe");
        iframe.id = "w3m-iframe";
        iframe.src = `${SECURE_SITE_SDK}?projectId=${projectId}`;
        iframe.style.position = "fixed";
        iframe.style.zIndex = "999999";
        iframe.style.display = "none";
        iframe.style.opacity = "0";
        iframe.style.borderBottomLeftRadius = `clamp(0px, var(--wui-border-radius-l), 44px)`;
        iframe.style.borderBottomRightRadius = `clamp(0px, var(--wui-border-radius-l), 44px)`;
        document.body.appendChild(iframe);
        this.iframe = iframe;
        this.iframe.onload = () => {
          var _a2;
          (_a2 = this.frameLoadPromiseResolver) == null ? void 0 : _a2.resolve(void 0);
        };
        this.iframe.onerror = () => {
          var _a2;
          (_a2 = this.frameLoadPromiseResolver) == null ? void 0 : _a2.reject("Unable to load email login dependency");
        };
      }
    }
  }
  get networks() {
    const data = [
      1,
      5,
      11155111,
      10,
      420,
      42161,
      421613,
      137,
      80001,
      42220,
      1313161554,
      1313161555,
      56,
      97,
      43114,
      43113,
      324,
      280,
      100,
      8453,
      84531,
      7777777,
      999
    ].map((id) => ({
      [id]: {
        rpcUrl: `${this.rpcUrl}/v1/?chainId=eip155:${id}&projectId=${this.projectId}`,
        chainId: id
      }
    }));
    return Object.assign({}, ...data);
  }
};

// node_modules/@web3modal/wallet/dist/esm/src/W3mFrameProvider.js
var W3mFrameProvider = class {
  constructor(projectId) {
    var _a2;
    this.connectEmailResolver = void 0;
    this.connectDeviceResolver = void 0;
    this.connectOtpResolver = void 0;
    this.connectResolver = void 0;
    this.connectSocialResolver = void 0;
    this.disconnectResolver = void 0;
    this.isConnectedResolver = void 0;
    this.getChainIdResolver = void 0;
    this.getSocialRedirectUriResolver = void 0;
    this.switchChainResolver = void 0;
    this.rpcRequestResolver = void 0;
    this.updateEmailResolver = void 0;
    this.updateEmailPrimaryOtpResolver = void 0;
    this.updateEmailSecondaryOtpResolver = void 0;
    this.syncThemeResolver = void 0;
    this.syncDappDataResolver = void 0;
    this.smartAccountEnabledNetworksResolver = void 0;
    this.setPreferredAccountResolver = void 0;
    const loggerOptions = k({
      level: DEFAULT_LOG_LEVEL
    });
    const { logger, chunkLoggerController } = A({
      opts: loggerOptions
    });
    this.logger = E(logger, this.constructor.name);
    this.chunkLoggerController = chunkLoggerController;
    if (typeof window !== "undefined" && ((_a2 = this.chunkLoggerController) == null ? void 0 : _a2.downloadLogsBlobInBrowser)) {
      if (!window.dowdownloadAppKitLogsBlob) {
        window.downloadAppKitLogsBlob = {};
      }
      window.downloadAppKitLogsBlob["sdk"] = () => {
        var _a3;
        if ((_a3 = this.chunkLoggerController) == null ? void 0 : _a3.downloadLogsBlobInBrowser) {
          this.chunkLoggerController.downloadLogsBlobInBrowser({
            projectId
          });
        }
      };
    }
    this.w3mFrame = new W3mFrame(projectId, true);
    this.w3mFrame.events.onFrameEvent((event) => {
      this.logger.info({ event }, "Event received");
      switch (event.type) {
        case W3mFrameConstants.FRAME_CONNECT_EMAIL_SUCCESS:
          return this.onConnectEmailSuccess(event);
        case W3mFrameConstants.FRAME_CONNECT_EMAIL_ERROR:
          return this.onConnectEmailError(event);
        case W3mFrameConstants.FRAME_CONNECT_DEVICE_SUCCESS:
          return this.onConnectDeviceSuccess();
        case W3mFrameConstants.FRAME_CONNECT_DEVICE_ERROR:
          return this.onConnectDeviceError(event);
        case W3mFrameConstants.FRAME_CONNECT_OTP_SUCCESS:
          return this.onConnectOtpSuccess();
        case W3mFrameConstants.FRAME_CONNECT_OTP_ERROR:
          return this.onConnectOtpError(event);
        case W3mFrameConstants.FRAME_CONNECT_SOCIAL_SUCCESS:
          return this.onConnectSocialSuccess(event);
        case W3mFrameConstants.FRAME_CONNECT_SOCIAL_ERROR:
          return this.onConnectSocialError(event);
        case W3mFrameConstants.FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:
          return this.onGetSocialRedirectUriSuccess(event);
        case W3mFrameConstants.FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:
          return this.onGetSocialRedirectUriError(event);
        case W3mFrameConstants.FRAME_GET_USER_SUCCESS:
          return this.onConnectSuccess(event);
        case W3mFrameConstants.FRAME_GET_USER_ERROR:
          return this.onConnectError(event);
        case W3mFrameConstants.FRAME_IS_CONNECTED_SUCCESS:
          return this.onIsConnectedSuccess(event);
        case W3mFrameConstants.FRAME_IS_CONNECTED_ERROR:
          return this.onIsConnectedError(event);
        case W3mFrameConstants.FRAME_GET_CHAIN_ID_SUCCESS:
          return this.onGetChainIdSuccess(event);
        case W3mFrameConstants.FRAME_GET_CHAIN_ID_ERROR:
          return this.onGetChainIdError(event);
        case W3mFrameConstants.FRAME_SIGN_OUT_SUCCESS:
          return this.onSignOutSuccess();
        case W3mFrameConstants.FRAME_SIGN_OUT_ERROR:
          return this.onSignOutError(event);
        case W3mFrameConstants.FRAME_SWITCH_NETWORK_SUCCESS:
          return this.onSwitchChainSuccess(event);
        case W3mFrameConstants.FRAME_SWITCH_NETWORK_ERROR:
          return this.onSwitchChainError(event);
        case W3mFrameConstants.FRAME_RPC_REQUEST_SUCCESS:
          return this.onRpcRequestSuccess(event);
        case W3mFrameConstants.FRAME_RPC_REQUEST_ERROR:
          return this.onRpcRequestError(event);
        case W3mFrameConstants.FRAME_SESSION_UPDATE:
          return this.onSessionUpdate(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_SUCCESS:
          return this.onUpdateEmailSuccess(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_ERROR:
          return this.onUpdateEmailError(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:
          return this.onUpdateEmailPrimaryOtpSuccess();
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:
          return this.onUpdateEmailPrimaryOtpError(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:
          return this.onUpdateEmailSecondaryOtpSuccess(event);
        case W3mFrameConstants.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:
          return this.onUpdateEmailSecondaryOtpError(event);
        case W3mFrameConstants.FRAME_SYNC_THEME_SUCCESS:
          return this.onSyncThemeSuccess();
        case W3mFrameConstants.FRAME_SYNC_THEME_ERROR:
          return this.onSyncThemeError(event);
        case W3mFrameConstants.FRAME_SYNC_DAPP_DATA_SUCCESS:
          return this.onSyncDappDataSuccess();
        case W3mFrameConstants.FRAME_SYNC_DAPP_DATA_ERROR:
          return this.onSyncDappDataError(event);
        case W3mFrameConstants.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:
          return this.onSmartAccountEnabledNetworksSuccess(event);
        case W3mFrameConstants.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:
          return this.onSmartAccountEnabledNetworksError(event);
        case W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:
          return this.onSetPreferredAccountSuccess();
        case W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_ERROR:
          return this.onSetPreferredAccountError();
        default:
          return null;
      }
    });
  }
  getLoginEmailUsed() {
    return Boolean(W3mFrameStorage.get(W3mFrameConstants.EMAIL_LOGIN_USED_KEY));
  }
  getEmail() {
    return W3mFrameStorage.get(W3mFrameConstants.EMAIL);
  }
  rejectRpcRequest() {
    var _a2;
    (_a2 = this.rpcRequestResolver) == null ? void 0 : _a2.reject();
  }
  async connectEmail(payload) {
    await this.w3mFrame.frameLoadPromise;
    W3mFrameHelpers.checkIfAllowedToTriggerEmail();
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_EMAIL, payload });
    return new Promise((resolve, reject) => {
      this.connectEmailResolver = { resolve, reject };
    });
  }
  async connectDevice() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_DEVICE });
    return new Promise((resolve, reject) => {
      this.connectDeviceResolver = { resolve, reject };
    });
  }
  async connectOtp(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_CONNECT_OTP, payload });
    return new Promise((resolve, reject) => {
      this.connectOtpResolver = { resolve, reject };
    });
  }
  async isConnected() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_IS_CONNECTED,
      payload: void 0
    });
    return new Promise((resolve, reject) => {
      this.isConnectedResolver = { resolve, reject };
    });
  }
  async getChainId() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_GET_CHAIN_ID });
    return new Promise((resolve, reject) => {
      this.getChainIdResolver = { resolve, reject };
    });
  }
  async getSocialRedirectUri(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_GET_SOCIAL_REDIRECT_URI,
      payload
    });
    return new Promise((resolve, reject) => {
      this.getSocialRedirectUriResolver = { resolve, reject };
    });
  }
  async updateEmail(payload) {
    await this.w3mFrame.frameLoadPromise;
    W3mFrameHelpers.checkIfAllowedToTriggerEmail();
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_UPDATE_EMAIL, payload });
    return new Promise((resolve, reject) => {
      this.updateEmailResolver = { resolve, reject };
    });
  }
  async updateEmailPrimaryOtp(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_UPDATE_EMAIL_PRIMARY_OTP,
      payload
    });
    return new Promise((resolve, reject) => {
      this.updateEmailPrimaryOtpResolver = { resolve, reject };
    });
  }
  async updateEmailSecondaryOtp(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_UPDATE_EMAIL_SECONDARY_OTP,
      payload
    });
    return new Promise((resolve, reject) => {
      this.updateEmailSecondaryOtpResolver = { resolve, reject };
    });
  }
  async syncTheme(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_SYNC_THEME, payload });
    return new Promise((resolve, reject) => {
      this.syncThemeResolver = { resolve, reject };
    });
  }
  async syncDappData(payload) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_SYNC_DAPP_DATA, payload });
    return new Promise((resolve, reject) => {
      this.syncDappDataResolver = { resolve, reject };
    });
  }
  async getSmartAccountEnabledNetworks() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS
    });
    return new Promise((resolve, reject) => {
      this.smartAccountEnabledNetworksResolver = { resolve, reject };
    });
  }
  async setPreferredAccount(type) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_SET_PREFERRED_ACCOUNT,
      payload: { type }
    });
    return new Promise((resolve, reject) => {
      this.setPreferredAccountResolver = { resolve, reject };
    });
  }
  async connect(payload) {
    const chainId = (payload == null ? void 0 : payload.chainId) ?? this.getLastUsedChainId() ?? 1;
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_GET_USER,
      payload: { chainId }
    });
    return new Promise((resolve, reject) => {
      this.connectResolver = { resolve, reject };
    });
  }
  async connectSocial(uri) {
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_CONNECT_SOCIAL,
      payload: { uri }
    });
    return new Promise((resolve, reject) => {
      this.connectSocialResolver = { resolve, reject };
    });
  }
  async switchNetwork(chainId) {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_SWITCH_NETWORK,
      payload: { chainId }
    });
    return new Promise((resolve, reject) => {
      this.switchChainResolver = { resolve, reject };
    });
  }
  async disconnect() {
    await this.w3mFrame.frameLoadPromise;
    this.w3mFrame.events.postAppEvent({ type: W3mFrameConstants.APP_SIGN_OUT });
    return new Promise((resolve, reject) => {
      this.disconnectResolver = { resolve, reject };
    });
  }
  async request(req) {
    await this.w3mFrame.frameLoadPromise;
    if (W3mFrameRpcConstants.GET_CHAIN_ID === req.method) {
      return this.getLastUsedChainId();
    }
    this.w3mFrame.events.postAppEvent({
      type: W3mFrameConstants.APP_RPC_REQUEST,
      payload: req
    });
    return new Promise((resolve, reject) => {
      this.rpcRequestResolver = { resolve, reject };
    });
  }
  onRpcRequest(callback) {
    this.w3mFrame.events.onAppEvent((event) => {
      if (event.type.includes(W3mFrameConstants.RPC_METHOD_KEY)) {
        callback(event);
      }
    });
  }
  onRpcResponse(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type.includes(W3mFrameConstants.RPC_METHOD_KEY)) {
        callback(event);
      }
    });
  }
  onIsConnected(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type === W3mFrameConstants.FRAME_GET_USER_SUCCESS) {
        callback(event.payload);
      }
    });
  }
  onNotConnected(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type === W3mFrameConstants.FRAME_IS_CONNECTED_ERROR) {
        callback();
      }
      if (event.type === W3mFrameConstants.FRAME_IS_CONNECTED_SUCCESS && !event.payload.isConnected) {
        callback();
      }
    });
  }
  onSetPreferredAccount(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type === W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS) {
        callback(event.payload);
      } else if (event.type === W3mFrameConstants.FRAME_SET_PREFERRED_ACCOUNT_ERROR) {
        callback({ type: W3mFrameRpcConstants.ACCOUNT_TYPES.EOA });
      }
    });
  }
  onGetSmartAccountEnabledNetworks(callback) {
    this.w3mFrame.events.onFrameEvent((event) => {
      if (event.type === W3mFrameConstants.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS) {
        callback(event.payload.smartAccountEnabledNetworks);
      } else if (event.type === W3mFrameConstants.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR) {
        callback([]);
      }
    });
  }
  onConnectEmailSuccess(event) {
    var _a2;
    (_a2 = this.connectEmailResolver) == null ? void 0 : _a2.resolve(event.payload);
    this.setNewLastEmailLoginTime();
  }
  onConnectEmailError(event) {
    var _a2;
    (_a2 = this.connectEmailResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onConnectDeviceSuccess() {
    var _a2;
    (_a2 = this.connectDeviceResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onConnectDeviceError(event) {
    var _a2;
    (_a2 = this.connectDeviceResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onConnectOtpSuccess() {
    var _a2;
    (_a2 = this.connectOtpResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onConnectOtpError(event) {
    var _a2;
    (_a2 = this.connectOtpResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onConnectSuccess(event) {
    var _a2;
    this.setEmailLoginSuccess(event.payload.email);
    this.setLastUsedChainId(event.payload.chainId);
    (_a2 = this.connectResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onConnectError(event) {
    var _a2;
    (_a2 = this.connectResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onConnectSocialSuccess(event) {
    var _a2;
    if (event.payload.userName) {
      this.setSocialLoginSuccess(event.payload.userName);
    }
    (_a2 = this.connectSocialResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onConnectSocialError(event) {
    var _a2;
    (_a2 = this.connectSocialResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onIsConnectedSuccess(event) {
    var _a2;
    if (!event.payload.isConnected) {
      this.deleteAuthLoginCache();
    }
    (_a2 = this.isConnectedResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onIsConnectedError(event) {
    var _a2;
    (_a2 = this.isConnectedResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onGetChainIdSuccess(event) {
    var _a2;
    this.setLastUsedChainId(event.payload.chainId);
    (_a2 = this.getChainIdResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onGetChainIdError(event) {
    var _a2;
    (_a2 = this.getChainIdResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onGetSocialRedirectUriSuccess(event) {
    var _a2;
    (_a2 = this.getSocialRedirectUriResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onGetSocialRedirectUriError(event) {
    var _a2;
    (_a2 = this.getSocialRedirectUriResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSignOutSuccess() {
    var _a2;
    (_a2 = this.disconnectResolver) == null ? void 0 : _a2.resolve(void 0);
    this.deleteAuthLoginCache();
  }
  onSignOutError(event) {
    var _a2;
    (_a2 = this.disconnectResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSwitchChainSuccess(event) {
    var _a2;
    this.setLastUsedChainId(event.payload.chainId);
    (_a2 = this.switchChainResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onSwitchChainError(event) {
    var _a2;
    (_a2 = this.switchChainResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onRpcRequestSuccess(event) {
    var _a2;
    (_a2 = this.rpcRequestResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onRpcRequestError(event) {
    var _a2;
    (_a2 = this.rpcRequestResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSessionUpdate(event) {
    const { payload } = event;
    if (payload) {
    }
  }
  onUpdateEmailSuccess(event) {
    var _a2;
    (_a2 = this.updateEmailResolver) == null ? void 0 : _a2.resolve(event.payload);
    this.setNewLastEmailLoginTime();
  }
  onUpdateEmailError(event) {
    var _a2;
    (_a2 = this.updateEmailResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onUpdateEmailPrimaryOtpSuccess() {
    var _a2;
    (_a2 = this.updateEmailPrimaryOtpResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onUpdateEmailPrimaryOtpError(event) {
    var _a2;
    (_a2 = this.updateEmailPrimaryOtpResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onUpdateEmailSecondaryOtpSuccess(event) {
    var _a2;
    const { newEmail } = event.payload;
    this.setEmailLoginSuccess(newEmail);
    (_a2 = this.updateEmailSecondaryOtpResolver) == null ? void 0 : _a2.resolve({ newEmail });
  }
  onUpdateEmailSecondaryOtpError(event) {
    var _a2;
    (_a2 = this.updateEmailSecondaryOtpResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSyncThemeSuccess() {
    var _a2;
    (_a2 = this.syncThemeResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onSyncThemeError(event) {
    var _a2;
    (_a2 = this.syncThemeResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSyncDappDataSuccess() {
    var _a2;
    (_a2 = this.syncDappDataResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onSyncDappDataError(event) {
    var _a2;
    (_a2 = this.syncDappDataResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSmartAccountEnabledNetworksSuccess(event) {
    var _a2;
    this.persistSmartAccountEnabledNetworks(event.payload.smartAccountEnabledNetworks);
    (_a2 = this.smartAccountEnabledNetworksResolver) == null ? void 0 : _a2.resolve(event.payload);
  }
  onSmartAccountEnabledNetworksError(event) {
    var _a2;
    this.persistSmartAccountEnabledNetworks([]);
    (_a2 = this.smartAccountEnabledNetworksResolver) == null ? void 0 : _a2.reject(event.payload.message);
  }
  onSetPreferredAccountSuccess() {
    var _a2;
    (_a2 = this.setPreferredAccountResolver) == null ? void 0 : _a2.resolve(void 0);
  }
  onSetPreferredAccountError() {
    var _a2;
    (_a2 = this.setPreferredAccountResolver) == null ? void 0 : _a2.reject();
  }
  setNewLastEmailLoginTime() {
    W3mFrameStorage.set(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME, Date.now().toString());
  }
  setSocialLoginSuccess(username) {
    W3mFrameStorage.set(W3mFrameConstants.SOCIAL_USERNAME, username);
  }
  setEmailLoginSuccess(email) {
    W3mFrameStorage.set(W3mFrameConstants.EMAIL, email);
    W3mFrameStorage.set(W3mFrameConstants.EMAIL_LOGIN_USED_KEY, "true");
    W3mFrameStorage.delete(W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
  }
  deleteAuthLoginCache() {
    W3mFrameStorage.delete(W3mFrameConstants.EMAIL_LOGIN_USED_KEY);
    W3mFrameStorage.delete(W3mFrameConstants.EMAIL);
    W3mFrameStorage.delete(W3mFrameConstants.LAST_USED_CHAIN_KEY);
    W3mFrameStorage.delete(W3mFrameConstants.SOCIAL_USERNAME);
    W3mFrameStorage.delete(W3mFrameConstants.SOCIAL, true);
  }
  setLastUsedChainId(chainId) {
    W3mFrameStorage.set(W3mFrameConstants.LAST_USED_CHAIN_KEY, String(chainId));
  }
  getLastUsedChainId() {
    return Number(W3mFrameStorage.get(W3mFrameConstants.LAST_USED_CHAIN_KEY));
  }
  persistSmartAccountEnabledNetworks(networks) {
    W3mFrameStorage.set(W3mFrameConstants.SMART_ACCOUNT_ENABLED_NETWORKS, networks.join(","));
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/TransactionsController.js
var state5 = proxy({
  transactions: [],
  coinbaseTransactions: {},
  transactionsByYear: {},
  loading: false,
  empty: false,
  next: void 0
});
var TransactionsController = {
  state: state5,
  subscribe(callback) {
    return subscribe(state5, () => callback(state5));
  },
  async fetchTransactions(accountAddress, onramp) {
    const { projectId } = OptionsController.state;
    if (!projectId || !accountAddress) {
      throw new Error("Transactions can't be fetched without a projectId and an accountAddress");
    }
    state5.loading = true;
    try {
      const response = await BlockchainApiController.fetchTransactions({
        account: accountAddress,
        projectId,
        cursor: state5.next,
        onramp
      });
      const nonSpamTransactions = this.filterSpamTransactions(response.data);
      const filteredTransactions = [...state5.transactions, ...nonSpamTransactions];
      state5.loading = false;
      if (onramp === "coinbase") {
        state5.coinbaseTransactions = this.groupTransactionsByYearAndMonth(state5.coinbaseTransactions, response.data);
      } else {
        state5.transactions = filteredTransactions;
        state5.transactionsByYear = this.groupTransactionsByYearAndMonth(state5.transactionsByYear, nonSpamTransactions);
      }
      state5.empty = filteredTransactions.length === 0;
      state5.next = response.next ? response.next : void 0;
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "ERROR_FETCH_TRANSACTIONS",
        properties: {
          address: accountAddress,
          projectId,
          cursor: state5.next,
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      SnackController.showError("Failed to fetch transactions");
      state5.loading = false;
      state5.empty = true;
      state5.next = void 0;
    }
  },
  groupTransactionsByYearAndMonth(transactionsMap = {}, transactions = []) {
    const grouped = transactionsMap;
    transactions.forEach((transaction) => {
      const year = new Date(transaction.metadata.minedAt).getFullYear();
      const month = new Date(transaction.metadata.minedAt).getMonth();
      const yearTransactions = grouped[year] ?? {};
      const monthTransactions = yearTransactions[month] ?? [];
      const newMonthTransactions = monthTransactions.filter((tx) => tx.id !== transaction.id);
      grouped[year] = {
        ...yearTransactions,
        [month]: [...newMonthTransactions, transaction].sort((a2, b) => new Date(b.metadata.minedAt).getTime() - new Date(a2.metadata.minedAt).getTime())
      };
    });
    return grouped;
  },
  filterSpamTransactions(transactions) {
    return transactions.filter((transaction) => {
      const isAllSpam = transaction.transfers.every((transfer) => {
        var _a2;
        return ((_a2 = transfer.nft_info) == null ? void 0 : _a2.flags.is_spam) === true;
      });
      return !isAllSpam;
    });
  },
  clearCursor() {
    state5.next = void 0;
  },
  resetTransactions() {
    state5.transactions = [];
    state5.transactionsByYear = {};
    state5.loading = false;
    state5.empty = false;
    state5.next = void 0;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/ChainController.js
var accountState = {
  isConnected: false,
  currentTab: 0,
  tokenBalance: [],
  smartAccountDeployed: false
};
var networkState = {
  supportsAllNetworks: true,
  isDefaultCaipNetwork: false,
  smartAccountEnabledNetworks: []
};
var state6 = proxy({
  multiChainEnabled: false,
  chains: proxyMap(),
  activeChain: void 0,
  activeCaipNetwork: void 0
});
var ChainController = {
  state: state6,
  subscribeKey(key, callback) {
    return subscribeKey(state6, key, callback);
  },
  subscribeChain(callback) {
    let prev = void 0;
    const activeChain = state6.activeChain;
    if (activeChain) {
      return subscribe(state6.chains, () => {
        const nextValue = state6.chains.get(activeChain);
        if (!prev || prev !== nextValue) {
          prev = nextValue;
          callback(nextValue);
        }
      });
    }
    return () => {
    };
  },
  subscribeChainProp(property, callback) {
    let prev = void 0;
    const activeChain = state6.activeChain;
    if (activeChain) {
      return subscribe(state6.chains, () => {
        var _a2;
        const nextValue = (_a2 = state6.chains.get(activeChain)) == null ? void 0 : _a2[property];
        if (prev !== nextValue) {
          prev = nextValue;
          callback(nextValue);
        }
      });
    }
    return () => {
    };
  },
  initialize(adapters) {
    var _a2;
    const firstChainToActivate = (_a2 = adapters == null ? void 0 : adapters[0]) == null ? void 0 : _a2.chain;
    if (!firstChainToActivate) {
      throw new Error("Chain is required to initialize ChainController");
    }
    state6.activeChain = firstChainToActivate;
    adapters.forEach((adapter) => {
      state6.chains.set(adapter.chain, {
        chain: adapter.chain,
        connectionControllerClient: adapter.connectionControllerClient,
        networkControllerClient: adapter.networkControllerClient,
        accountState,
        networkState
      });
    });
  },
  setMultiChainEnabled(multiChain) {
    state6.multiChainEnabled = multiChain;
  },
  setChainNetworkData(chain, props) {
    if (!chain) {
      throw new Error("Chain is required to update chain network data");
    }
    const chainAdapter = state6.chains.get(chain);
    if (chainAdapter) {
      chainAdapter.networkState = {
        ...chainAdapter.networkState,
        ...props
      };
      state6.chains.set(chain, chainAdapter);
      NetworkController.replaceState(chainAdapter.networkState);
    }
  },
  setChainAccountData(chain, accountProps) {
    if (!chain) {
      throw new Error("Chain is required to update chain account data");
    }
    const chainAdapter = state6.chains.get(chain);
    if (chainAdapter) {
      chainAdapter.accountState = {
        ...chainAdapter.accountState,
        ...accountProps
      };
      state6.chains.set(chain, chainAdapter);
      AccountController.replaceState(chainAdapter.accountState);
    }
  },
  setAccountProp(prop, value, chain) {
    this.setChainAccountData(state6.multiChainEnabled ? chain : state6.activeChain, {
      [prop]: value
    });
  },
  setActiveChain(chain) {
    var _a2, _b, _c;
    const newAdapter = chain ? state6.chains.get(chain) : void 0;
    if (newAdapter) {
      state6.activeChain = newAdapter.chain;
      state6.activeCaipNetwork = (_c = (_b = (_a2 = state6.chains.get(newAdapter.chain)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b.requestedCaipNetworks) == null ? void 0 : _c[0];
      PublicStateController.set({ activeChain: chain });
    }
  },
  setActiveConnector(connector) {
    if (connector) {
      state6.activeConnector = ref(connector);
    }
  },
  getNetworkControllerClient() {
    const chain = state6.activeChain;
    if (!chain) {
      throw new Error("Chain is required to get network controller client");
    }
    const chainAdapter = state6.chains.get(chain);
    if (!chainAdapter) {
      throw new Error("Chain adapter not found");
    }
    if (!chainAdapter.networkControllerClient) {
      throw new Error("NetworkController client not set");
    }
    return chainAdapter.networkControllerClient;
  },
  getConnectionControllerClient() {
    const chain = state6.activeChain;
    if (!chain) {
      throw new Error("Chain is required to get connection controller client");
    }
    const chainAdapter = state6.chains.get(chain);
    if (!chainAdapter) {
      throw new Error("Chain adapter not found");
    }
    if (!chainAdapter.connectionControllerClient) {
      throw new Error("ConnectionController client not set");
    }
    return chainAdapter.connectionControllerClient;
  },
  getAccountProp(key) {
    var _a2;
    const chainToWrite = state6.multiChainEnabled ? state6.activeChain : state6.activeChain;
    if (!chainToWrite) {
      return void 0;
    }
    const chainAccountState = (_a2 = state6.chains.get(chainToWrite)) == null ? void 0 : _a2.accountState;
    if (!chainAccountState) {
      return void 0;
    }
    return chainAccountState[key];
  },
  getNetworkProp(key) {
    var _a2;
    const chainToWrite = state6.multiChainEnabled ? state6.activeChain : state6.activeChain;
    if (!chainToWrite) {
      return void 0;
    }
    const chainNetworkState = (_a2 = state6.chains.get(chainToWrite)) == null ? void 0 : _a2.networkState;
    if (!chainNetworkState) {
      return void 0;
    }
    return chainNetworkState[key];
  },
  resetAccount(chain) {
    const chainToWrite = state6.multiChainEnabled ? chain : state6.activeChain;
    if (!chainToWrite) {
      throw new Error("Chain is required to set account prop");
    }
    this.setChainAccountData(chainToWrite, {
      isConnected: false,
      smartAccountDeployed: false,
      currentTab: 0,
      caipAddress: void 0,
      address: void 0,
      balance: void 0,
      balanceSymbol: void 0,
      profileName: void 0,
      profileImage: void 0,
      addressExplorerUrl: void 0,
      tokenBalance: [],
      connectedWalletInfo: void 0,
      preferredAccountType: void 0,
      socialProvider: void 0,
      socialWindow: void 0
    });
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/ConnectionController.js
var state7 = proxy({
  wcError: false,
  buffering: false
});
var ConnectionController = {
  state: state7,
  subscribeKey(key, callback) {
    return subscribeKey(state7, key, callback);
  },
  _getClient() {
    return ChainController.getConnectionControllerClient();
  },
  setClient(client) {
    state7._client = ref(client);
  },
  async connectWalletConnect() {
    StorageUtil.setConnectedConnector("WALLET_CONNECT");
    await this._getClient().connectWalletConnect((uri) => {
      state7.wcUri = uri;
      state7.wcPairingExpiry = CoreHelperUtil.getPairingExpiry();
    });
  },
  async connectExternal(options, chain) {
    var _a2, _b;
    await ((_b = (_a2 = this._getClient()).connectExternal) == null ? void 0 : _b.call(_a2, options));
    ChainController.setActiveChain(chain);
    StorageUtil.setConnectedConnector(options.type);
  },
  async reconnectExternal(options) {
    var _a2, _b;
    await ((_b = (_a2 = this._getClient()).reconnectExternal) == null ? void 0 : _b.call(_a2, options));
    StorageUtil.setConnectedConnector(options.type);
  },
  async setPreferredAccountType(accountType) {
    var _a2;
    ModalController.setLoading(true);
    const authConnector = ConnectorController.getAuthConnector();
    if (!authConnector) {
      return;
    }
    await (authConnector == null ? void 0 : authConnector.provider.setPreferredAccount(accountType));
    await this.reconnectExternal(authConnector);
    ModalController.setLoading(false);
    EventsController.sendEvent({
      type: "track",
      event: "SET_PREFERRED_ACCOUNT_TYPE",
      properties: { accountType, network: ((_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id) || "" }
    });
  },
  async signMessage(message) {
    return this._getClient().signMessage(message);
  },
  parseUnits(value, decimals) {
    return this._getClient().parseUnits(value, decimals);
  },
  formatUnits(value, decimals) {
    return this._getClient().formatUnits(value, decimals);
  },
  async sendTransaction(args) {
    return this._getClient().sendTransaction(args);
  },
  async estimateGas(args) {
    return this._getClient().estimateGas(args);
  },
  async writeContract(args) {
    return this._getClient().writeContract(args);
  },
  async getEnsAddress(value) {
    return this._getClient().getEnsAddress(value);
  },
  async getEnsAvatar(value) {
    return this._getClient().getEnsAvatar(value);
  },
  checkInstalled(ids) {
    var _a2, _b;
    return (_b = (_a2 = this._getClient()).checkInstalled) == null ? void 0 : _b.call(_a2, ids);
  },
  resetWcConnection() {
    state7.wcUri = void 0;
    state7.wcPairingExpiry = void 0;
    state7.wcLinking = void 0;
    state7.recentWallet = void 0;
    TransactionsController.resetTransactions();
    StorageUtil.deleteWalletConnectDeepLink();
  },
  setWcLinking(wcLinking) {
    state7.wcLinking = wcLinking;
  },
  setWcError(wcError) {
    state7.wcError = wcError;
    state7.buffering = false;
  },
  setRecentWallet(wallet) {
    state7.recentWallet = wallet;
  },
  setBuffering(buffering) {
    state7.buffering = buffering;
  },
  async disconnect() {
    const client = this._getClient();
    try {
      await client.disconnect();
      StorageUtil.removeConnectedWalletImageUrl();
      this.resetWcConnection();
    } catch (error) {
      throw new Error("Failed to disconnect");
    }
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/SwapApiUtil.js
var SwapApiUtil = {
  async getTokenList() {
    var _a2;
    const caipNetwork = NetworkController.state.caipNetwork;
    const response = await BlockchainApiController.fetchSwapTokens({
      chainId: caipNetwork == null ? void 0 : caipNetwork.id,
      projectId: OptionsController.state.projectId
    });
    const tokens = ((_a2 = response == null ? void 0 : response.tokens) == null ? void 0 : _a2.map((token) => ({
      ...token,
      eip2612: false,
      quantity: {
        decimals: "0",
        numeric: "0"
      },
      price: 0,
      value: 0
    }))) || [];
    return tokens;
  },
  async fetchGasPrice() {
    const projectId = OptionsController.state.projectId;
    const caipNetwork = NetworkController.state.caipNetwork;
    if (!caipNetwork) {
      return null;
    }
    return await BlockchainApiController.fetchGasPrice({
      projectId,
      chainId: caipNetwork.id
    });
  },
  async fetchSwapAllowance({ tokenAddress, userAddress, sourceTokenAmount, sourceTokenDecimals }) {
    const projectId = OptionsController.state.projectId;
    const response = await BlockchainApiController.fetchSwapAllowance({
      projectId,
      tokenAddress,
      userAddress
    });
    if ((response == null ? void 0 : response.allowance) && sourceTokenAmount && sourceTokenDecimals) {
      const parsedValue = ConnectionController.parseUnits(sourceTokenAmount, sourceTokenDecimals);
      const hasAllowance = BigInt(response.allowance) >= parsedValue;
      return hasAllowance;
    }
    return false;
  },
  async getMyTokensWithBalance(forceUpdate) {
    const address = AccountController.state.address;
    const caipNetwork = NetworkController.state.caipNetwork;
    if (!address || !caipNetwork) {
      return [];
    }
    const response = await BlockchainApiController.getBalance(address, caipNetwork.id, forceUpdate);
    const balances = response.balances.filter((balance) => balance.quantity.decimals !== "0");
    AccountController.setTokenBalance(balances);
    return this.mapBalancesToSwapTokens(balances);
  },
  mapBalancesToSwapTokens(balances) {
    return (balances == null ? void 0 : balances.map((token) => ({
      ...token,
      address: (token == null ? void 0 : token.address) ? token.address : `${token.chainId}:${ConstantsUtil2.NATIVE_TOKEN_ADDRESS}`,
      decimals: parseInt(token.quantity.decimals, 10),
      logoUri: token.iconUrl,
      eip2612: false
    }))) || [];
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/RouterController.js
var state8 = proxy({
  view: "Connect",
  history: ["Connect"],
  transactionStack: []
});
var RouterController = {
  state: state8,
  subscribeKey(key, callback) {
    return subscribeKey(state8, key, callback);
  },
  pushTransactionStack(action) {
    state8.transactionStack.push(action);
  },
  popTransactionStack(cancel) {
    var _a2, _b;
    const action = state8.transactionStack.pop();
    if (!action) {
      return;
    }
    if (cancel) {
      this.goBack();
      (_a2 = action == null ? void 0 : action.onCancel) == null ? void 0 : _a2.call(action);
    } else {
      if (action.goBack) {
        this.goBack();
      } else if (action.view) {
        this.reset(action.view);
      }
      (_b = action == null ? void 0 : action.onSuccess) == null ? void 0 : _b.call(action);
    }
  },
  push(view, data) {
    if (view !== state8.view) {
      state8.view = view;
      state8.history.push(view);
      state8.data = data;
    }
  },
  reset(view) {
    state8.view = view;
    state8.history = [view];
  },
  replace(view, data) {
    if (state8.history.length >= 1 && state8.history.at(-1) !== view) {
      state8.view = view;
      state8.history[state8.history.length - 1] = view;
      state8.data = data;
    }
  },
  goBack() {
    if (state8.history.length > 1) {
      state8.history.pop();
      const [last] = state8.history.slice(-1);
      if (last) {
        state8.view = last;
      }
    }
  },
  goBackToIndex(historyIndex) {
    if (state8.history.length > 1) {
      state8.history = state8.history.slice(0, historyIndex + 1);
      const [last] = state8.history.slice(-1);
      if (last) {
        state8.view = last;
      }
    }
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/SwapCalculationUtil.js
var SwapCalculationUtil = {
  getGasPriceInEther(gas, gasPrice) {
    const totalGasCostInWei = gasPrice * gas;
    const totalGasCostInEther = Number(totalGasCostInWei) / 1e18;
    return totalGasCostInEther;
  },
  getGasPriceInUSD(networkPrice, gas, gasPrice) {
    const totalGasCostInEther = SwapCalculationUtil.getGasPriceInEther(gas, gasPrice);
    const networkPriceInUSD = NumberUtil.bigNumber(networkPrice);
    const gasCostInUSD = networkPriceInUSD.multipliedBy(totalGasCostInEther);
    return gasCostInUSD.toNumber();
  },
  getPriceImpact({ sourceTokenAmount, sourceTokenPriceInUSD, toTokenPriceInUSD, toTokenAmount }) {
    const inputValue = NumberUtil.bigNumber(sourceTokenAmount).multipliedBy(sourceTokenPriceInUSD);
    const outputValue = NumberUtil.bigNumber(toTokenAmount).multipliedBy(toTokenPriceInUSD);
    const priceImpact = inputValue.minus(outputValue).dividedBy(inputValue).multipliedBy(100);
    return priceImpact.toNumber();
  },
  getMaxSlippage(slippage, toTokenAmount) {
    const slippageToleranceDecimal = NumberUtil.bigNumber(slippage).dividedBy(100);
    const maxSlippageAmount = NumberUtil.multiply(toTokenAmount, slippageToleranceDecimal);
    return maxSlippageAmount.toNumber();
  },
  getProviderFee(sourceTokenAmount, feePercentage = 85e-4) {
    const providerFee = NumberUtil.bigNumber(sourceTokenAmount).multipliedBy(feePercentage);
    return providerFee.toString();
  },
  isInsufficientNetworkTokenForGas(networkBalanceInUSD, gasPriceInUSD) {
    const gasPrice = gasPriceInUSD || "0";
    if (NumberUtil.bigNumber(networkBalanceInUSD).isZero()) {
      return true;
    }
    return NumberUtil.bigNumber(NumberUtil.bigNumber(gasPrice)).isGreaterThan(networkBalanceInUSD);
  },
  isInsufficientSourceTokenForSwap(sourceTokenAmount, sourceTokenAddress, balance) {
    var _a2, _b;
    const sourceTokenBalance = (_b = (_a2 = balance == null ? void 0 : balance.find((token) => token.address === sourceTokenAddress)) == null ? void 0 : _a2.quantity) == null ? void 0 : _b.numeric;
    const isInSufficientBalance = NumberUtil.bigNumber(sourceTokenBalance || "0").isLessThan(sourceTokenAmount);
    return isInSufficientBalance;
  },
  getToTokenAmount({ sourceToken, toToken, sourceTokenPrice, toTokenPrice, sourceTokenAmount }) {
    if (sourceTokenAmount === "0") {
      return "0";
    }
    if (!sourceToken || !toToken) {
      return "0";
    }
    const sourceTokenDecimals = sourceToken.decimals;
    const sourceTokenPriceInUSD = sourceTokenPrice;
    const toTokenDecimals = toToken.decimals;
    const toTokenPriceInUSD = toTokenPrice;
    if (toTokenPriceInUSD <= 0) {
      return "0";
    }
    const providerFee = NumberUtil.bigNumber(sourceTokenAmount).multipliedBy(85e-4);
    const adjustedSourceTokenAmount = NumberUtil.bigNumber(sourceTokenAmount).minus(providerFee);
    const sourceAmountInSmallestUnit = adjustedSourceTokenAmount.multipliedBy(NumberUtil.bigNumber(10).pow(sourceTokenDecimals));
    const priceRatio = NumberUtil.bigNumber(sourceTokenPriceInUSD).dividedBy(toTokenPriceInUSD);
    const decimalDifference = sourceTokenDecimals - toTokenDecimals;
    const toTokenAmountInSmallestUnit = sourceAmountInSmallestUnit.multipliedBy(priceRatio).dividedBy(NumberUtil.bigNumber(10).pow(decimalDifference));
    const toTokenAmount = toTokenAmountInSmallestUnit.dividedBy(NumberUtil.bigNumber(10).pow(toTokenDecimals));
    const amount = toTokenAmount.toFixed(toTokenDecimals).toString();
    return amount;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/SwapController.js
var INITIAL_GAS_LIMIT = 15e4;
var TO_AMOUNT_DECIMALS = 6;
var initialState = {
  initializing: false,
  initialized: false,
  loadingPrices: false,
  loadingQuote: false,
  loadingApprovalTransaction: false,
  loadingBuildTransaction: false,
  loadingTransaction: false,
  fetchError: false,
  approvalTransaction: void 0,
  swapTransaction: void 0,
  transactionError: void 0,
  sourceToken: void 0,
  sourceTokenAmount: "",
  sourceTokenPriceInUSD: 0,
  toToken: void 0,
  toTokenAmount: "",
  toTokenPriceInUSD: 0,
  networkPrice: "0",
  networkBalanceInUSD: "0",
  networkTokenSymbol: "",
  inputError: void 0,
  slippage: ConstantsUtil2.CONVERT_SLIPPAGE_TOLERANCE,
  tokens: void 0,
  popularTokens: void 0,
  suggestedTokens: void 0,
  foundTokens: void 0,
  myTokensWithBalance: void 0,
  tokensPriceMap: {},
  gasFee: "0",
  gasPriceInUSD: 0,
  priceImpact: void 0,
  maxSlippage: void 0,
  providerFee: void 0
};
var state9 = proxy(initialState);
var SwapController = {
  state: state9,
  subscribe(callback) {
    return subscribe(state9, () => callback(state9));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state9, key, callback);
  },
  getParams() {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    const caipNetwork = NetworkController.state.caipNetwork;
    const address = AccountController.state.address;
    const networkAddress = `${caipNetwork == null ? void 0 : caipNetwork.id}:${ConstantsUtil2.NATIVE_TOKEN_ADDRESS}`;
    if (!address) {
      throw new Error("No address found to swap the tokens from.");
    }
    const caipAddress = AccountController.state.caipAddress;
    const invalidToToken = !((_a2 = state9.toToken) == null ? void 0 : _a2.address) || !((_b = state9.toToken) == null ? void 0 : _b.decimals);
    const invalidSourceToken = !((_c = state9.sourceToken) == null ? void 0 : _c.address) || !((_d = state9.sourceToken) == null ? void 0 : _d.decimals) || !NumberUtil.bigNumber(state9.sourceTokenAmount).isGreaterThan(0);
    const invalidSourceTokenAmount = !state9.sourceTokenAmount;
    return {
      networkAddress,
      fromAddress: address,
      fromCaipAddress: AccountController.state.caipAddress,
      sourceTokenAddress: (_e = state9.sourceToken) == null ? void 0 : _e.address,
      toTokenAddress: (_f = state9.toToken) == null ? void 0 : _f.address,
      toTokenAmount: state9.toTokenAmount,
      toTokenDecimals: (_g = state9.toToken) == null ? void 0 : _g.decimals,
      sourceTokenAmount: state9.sourceTokenAmount,
      sourceTokenDecimals: (_h = state9.sourceToken) == null ? void 0 : _h.decimals,
      invalidToToken,
      invalidSourceToken,
      invalidSourceTokenAmount,
      availableToSwap: caipAddress && !invalidToToken && !invalidSourceToken && !invalidSourceTokenAmount
    };
  },
  setSourceToken(sourceToken) {
    if (!sourceToken) {
      state9.sourceToken = sourceToken;
      state9.sourceTokenAmount = "";
      state9.sourceTokenPriceInUSD = 0;
      return;
    }
    state9.sourceToken = sourceToken;
    this.setTokenPrice(sourceToken.address, "sourceToken");
  },
  setSourceTokenAmount(amount) {
    state9.sourceTokenAmount = amount;
  },
  setToToken(toToken) {
    if (!toToken) {
      state9.toToken = toToken;
      state9.toTokenAmount = "";
      state9.toTokenPriceInUSD = 0;
      return;
    }
    state9.toToken = toToken;
    this.setTokenPrice(toToken.address, "toToken");
  },
  setToTokenAmount(amount) {
    state9.toTokenAmount = amount ? NumberUtil.formatNumberToLocalString(amount, TO_AMOUNT_DECIMALS) : "";
  },
  async setTokenPrice(address, target) {
    const { availableToSwap } = this.getParams();
    let price = state9.tokensPriceMap[address] || 0;
    if (!price) {
      state9.loadingPrices = true;
      price = await this.getAddressPrice(address);
    }
    if (target === "sourceToken") {
      state9.sourceTokenPriceInUSD = price;
    } else if (target === "toToken") {
      state9.toTokenPriceInUSD = price;
    }
    if (state9.loadingPrices) {
      state9.loadingPrices = false;
      if (availableToSwap) {
        this.swapTokens();
      }
    }
  },
  switchTokens() {
    if (state9.initializing || !state9.initialized) {
      return;
    }
    const newSourceToken = state9.toToken ? { ...state9.toToken } : void 0;
    const newToToken = state9.sourceToken ? { ...state9.sourceToken } : void 0;
    const newSourceTokenAmount = newSourceToken && state9.toTokenAmount === "" ? "1" : state9.toTokenAmount;
    this.setSourceToken(newSourceToken);
    this.setToToken(newToToken);
    this.setSourceTokenAmount(newSourceTokenAmount);
    this.setToTokenAmount("");
    this.swapTokens();
  },
  resetState() {
    state9.myTokensWithBalance = initialState.myTokensWithBalance;
    state9.tokensPriceMap = initialState.tokensPriceMap;
    state9.initialized = initialState.initialized;
    state9.sourceToken = initialState.sourceToken;
    state9.sourceTokenAmount = initialState.sourceTokenAmount;
    state9.sourceTokenPriceInUSD = initialState.sourceTokenPriceInUSD;
    state9.toToken = initialState.toToken;
    state9.toTokenAmount = initialState.toTokenAmount;
    state9.toTokenPriceInUSD = initialState.toTokenPriceInUSD;
    state9.networkPrice = initialState.networkPrice;
    state9.networkTokenSymbol = initialState.networkTokenSymbol;
    state9.networkBalanceInUSD = initialState.networkBalanceInUSD;
    state9.inputError = initialState.inputError;
  },
  resetValues() {
    var _a2;
    const { networkAddress } = this.getParams();
    const networkToken = (_a2 = state9.tokens) == null ? void 0 : _a2.find((token) => token.address === networkAddress);
    this.setSourceToken(networkToken);
    this.setToToken(void 0);
  },
  getApprovalLoadingState() {
    return state9.loadingApprovalTransaction;
  },
  clearError() {
    state9.transactionError = void 0;
  },
  async initializeState() {
    if (state9.initializing) {
      return;
    }
    state9.initializing = true;
    if (!state9.initialized) {
      try {
        await this.fetchTokens();
        state9.initialized = true;
      } catch (error) {
        state9.initialized = false;
        SnackController.showError("Failed to initialize swap");
        RouterController.goBack();
      }
    }
    state9.initializing = false;
  },
  async fetchTokens() {
    var _a2;
    const { networkAddress } = this.getParams();
    await this.getTokenList();
    await this.getNetworkTokenPrice();
    await this.getMyTokensWithBalance();
    const networkToken = (_a2 = state9.tokens) == null ? void 0 : _a2.find((token) => token.address === networkAddress);
    if (networkToken) {
      state9.networkTokenSymbol = networkToken.symbol;
      this.setSourceToken(networkToken);
      this.setSourceTokenAmount("1");
    }
  },
  async getTokenList() {
    const tokens = await SwapApiUtil.getTokenList();
    state9.tokens = tokens;
    state9.popularTokens = tokens.sort((aTokenInfo, bTokenInfo) => {
      if (aTokenInfo.symbol < bTokenInfo.symbol) {
        return -1;
      }
      if (aTokenInfo.symbol > bTokenInfo.symbol) {
        return 1;
      }
      return 0;
    });
    state9.suggestedTokens = tokens.filter((token) => {
      if (ConstantsUtil2.SWAP_SUGGESTED_TOKENS.includes(token.symbol)) {
        return true;
      }
      return false;
    }, {});
  },
  async getAddressPrice(address) {
    var _a2, _b;
    const existPrice = state9.tokensPriceMap[address];
    if (existPrice) {
      return existPrice;
    }
    const response = await BlockchainApiController.fetchTokenPrice({
      projectId: OptionsController.state.projectId,
      addresses: [address]
    });
    const fungibles = response.fungibles || [];
    const allTokens = [...state9.tokens || [], ...state9.myTokensWithBalance || []];
    const symbol = (_a2 = allTokens == null ? void 0 : allTokens.find((token) => token.address === address)) == null ? void 0 : _a2.symbol;
    const price = ((_b = fungibles.find((p2) => p2.symbol.toLowerCase() === (symbol == null ? void 0 : symbol.toLowerCase()))) == null ? void 0 : _b.price) || 0;
    const priceAsFloat = parseFloat(price.toString());
    state9.tokensPriceMap[address] = priceAsFloat;
    return priceAsFloat;
  },
  async getNetworkTokenPrice() {
    var _a2;
    const { networkAddress } = this.getParams();
    const response = await BlockchainApiController.fetchTokenPrice({
      projectId: OptionsController.state.projectId,
      addresses: [networkAddress]
    });
    const token = (_a2 = response.fungibles) == null ? void 0 : _a2[0];
    const price = (token == null ? void 0 : token.price.toString()) || "0";
    state9.tokensPriceMap[networkAddress] = parseFloat(price);
    state9.networkTokenSymbol = (token == null ? void 0 : token.symbol) || "";
    state9.networkPrice = price;
  },
  async getMyTokensWithBalance(forceUpdate) {
    const balances = await SwapApiUtil.getMyTokensWithBalance(forceUpdate);
    if (!balances) {
      return;
    }
    await this.getInitialGasPrice();
    this.setBalances(balances);
  },
  setBalances(balances) {
    const { networkAddress } = this.getParams();
    const caipNetwork = NetworkController.state.caipNetwork;
    if (!caipNetwork) {
      return;
    }
    const networkToken = balances.find((token) => token.address === networkAddress);
    balances.forEach((token) => {
      state9.tokensPriceMap[token.address] = token.price || 0;
    });
    state9.myTokensWithBalance = balances.filter((token) => token.address.startsWith(caipNetwork.id));
    state9.networkBalanceInUSD = networkToken ? NumberUtil.multiply(networkToken.quantity.numeric, networkToken.price).toString() : "0";
  },
  async getInitialGasPrice() {
    const res = await SwapApiUtil.fetchGasPrice();
    if (!res) {
      return { gasPrice: null, gasPriceInUsd: null };
    }
    const value = res.standard;
    const gasFee = BigInt(value);
    const gasLimit = BigInt(INITIAL_GAS_LIMIT);
    const gasPrice = SwapCalculationUtil.getGasPriceInUSD(state9.networkPrice, gasLimit, gasFee);
    state9.gasFee = value;
    state9.gasPriceInUSD = gasPrice;
    return { gasPrice: gasFee, gasPriceInUSD: state9.gasPriceInUSD };
  },
  async swapTokens() {
    var _a2, _b;
    const address = AccountController.state.address;
    const sourceToken = state9.sourceToken;
    const toToken = state9.toToken;
    const haveSourceTokenAmount = NumberUtil.bigNumber(state9.sourceTokenAmount).isGreaterThan(0);
    if (!toToken || !sourceToken || state9.loadingPrices || !haveSourceTokenAmount) {
      return;
    }
    state9.loadingQuote = true;
    const amountDecimal = NumberUtil.bigNumber(state9.sourceTokenAmount).multipliedBy(10 ** sourceToken.decimals);
    const quoteResponse = await BlockchainApiController.fetchSwapQuote({
      userAddress: address,
      projectId: OptionsController.state.projectId,
      from: sourceToken.address,
      to: toToken.address,
      gasPrice: state9.gasFee,
      amount: amountDecimal.toString()
    });
    state9.loadingQuote = false;
    const quoteToAmount = (_b = (_a2 = quoteResponse == null ? void 0 : quoteResponse.quotes) == null ? void 0 : _a2[0]) == null ? void 0 : _b.toAmount;
    if (!quoteToAmount) {
      return;
    }
    const toTokenAmount = NumberUtil.bigNumber(quoteToAmount).dividedBy(10 ** toToken.decimals).toString();
    this.setToTokenAmount(toTokenAmount);
    const isInsufficientToken = this.hasInsufficientToken(state9.sourceTokenAmount, sourceToken.address);
    if (isInsufficientToken) {
      state9.inputError = "Insufficient balance";
    } else {
      state9.inputError = void 0;
      this.setTransactionDetails();
    }
  },
  async getTransaction() {
    const { fromCaipAddress, availableToSwap } = this.getParams();
    const sourceToken = state9.sourceToken;
    const toToken = state9.toToken;
    if (!fromCaipAddress || !availableToSwap || !sourceToken || !toToken || state9.loadingQuote) {
      return void 0;
    }
    try {
      state9.loadingBuildTransaction = true;
      const hasAllowance = await SwapApiUtil.fetchSwapAllowance({
        userAddress: fromCaipAddress,
        tokenAddress: sourceToken.address,
        sourceTokenAmount: state9.sourceTokenAmount,
        sourceTokenDecimals: sourceToken.decimals
      });
      let transaction = void 0;
      if (hasAllowance) {
        transaction = await this.createSwapTransaction();
      } else {
        transaction = await this.createAllowanceTransaction();
      }
      state9.loadingBuildTransaction = false;
      state9.fetchError = false;
      return transaction;
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to check allowance");
      state9.loadingBuildTransaction = false;
      state9.approvalTransaction = void 0;
      state9.swapTransaction = void 0;
      state9.fetchError = true;
      return void 0;
    }
  },
  async createAllowanceTransaction() {
    const { fromCaipAddress, fromAddress, sourceTokenAddress, toTokenAddress } = this.getParams();
    if (!fromCaipAddress || !toTokenAddress) {
      return void 0;
    }
    if (!sourceTokenAddress) {
      throw new Error("createAllowanceTransaction - No source token address found.");
    }
    try {
      const response = await BlockchainApiController.generateApproveCalldata({
        projectId: OptionsController.state.projectId,
        from: sourceTokenAddress,
        to: toTokenAddress,
        userAddress: fromCaipAddress
      });
      const gasLimit = await ConnectionController.estimateGas({
        address: fromAddress,
        to: CoreHelperUtil.getPlainAddress(response.tx.to),
        data: response.tx.data
      });
      const transaction = {
        data: response.tx.data,
        to: CoreHelperUtil.getPlainAddress(response.tx.from),
        gas: gasLimit,
        gasPrice: BigInt(response.tx.eip155.gasPrice),
        value: BigInt(response.tx.value),
        toAmount: state9.toTokenAmount
      };
      state9.swapTransaction = void 0;
      state9.approvalTransaction = transaction;
      return transaction;
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to create approval transaction");
      state9.approvalTransaction = void 0;
      state9.swapTransaction = void 0;
      state9.fetchError = true;
      return void 0;
    }
  },
  async createSwapTransaction() {
    const { networkAddress, fromCaipAddress, sourceTokenAmount } = this.getParams();
    const sourceToken = state9.sourceToken;
    const toToken = state9.toToken;
    if (!fromCaipAddress || !sourceTokenAmount || !sourceToken || !toToken) {
      return void 0;
    }
    const amount = ConnectionController.parseUnits(sourceTokenAmount, sourceToken.decimals).toString();
    try {
      const response = await BlockchainApiController.generateSwapCalldata({
        projectId: OptionsController.state.projectId,
        userAddress: fromCaipAddress,
        from: sourceToken.address,
        to: toToken.address,
        amount
      });
      const isSourceTokenIsNetworkToken = sourceToken.address === networkAddress;
      const gas = BigInt(response.tx.eip155.gas);
      const gasPrice = BigInt(response.tx.eip155.gasPrice);
      const transaction = {
        data: response.tx.data,
        to: CoreHelperUtil.getPlainAddress(response.tx.to),
        gas,
        gasPrice,
        value: isSourceTokenIsNetworkToken ? BigInt(amount) : BigInt("0"),
        toAmount: state9.toTokenAmount
      };
      state9.gasPriceInUSD = SwapCalculationUtil.getGasPriceInUSD(state9.networkPrice, gas, gasPrice);
      state9.approvalTransaction = void 0;
      state9.swapTransaction = transaction;
      return transaction;
    } catch (error) {
      RouterController.goBack();
      SnackController.showError("Failed to create transaction");
      state9.approvalTransaction = void 0;
      state9.swapTransaction = void 0;
      state9.fetchError = true;
      return void 0;
    }
  },
  async sendTransactionForApproval(data) {
    const { fromAddress } = this.getParams();
    state9.loadingApprovalTransaction = true;
    RouterController.pushTransactionStack({
      view: null,
      goBack: true,
      onSuccess() {
        SnackController.showLoading("Approving transaction...");
      }
    });
    try {
      await ConnectionController.sendTransaction({
        address: fromAddress,
        to: data.to,
        data: data.data,
        value: BigInt(data.value),
        gasPrice: BigInt(data.gasPrice)
      });
      await this.swapTokens();
      await this.getTransaction();
      state9.approvalTransaction = void 0;
      state9.loadingApprovalTransaction = false;
    } catch (err) {
      const error = err;
      state9.transactionError = error == null ? void 0 : error.shortMessage;
      state9.loadingTransaction = false;
    }
  },
  async sendTransactionForSwap(data) {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if (!data) {
      return void 0;
    }
    const { fromAddress, toTokenAmount } = this.getParams();
    state9.loadingTransaction = true;
    const snackbarPendingMessage = `Swapping ${(_a2 = state9.sourceToken) == null ? void 0 : _a2.symbol} to ${NumberUtil.formatNumberToLocalString(toTokenAmount, 3)} ${(_b = state9.toToken) == null ? void 0 : _b.symbol}`;
    const snackbarSuccessMessage = `Swapped ${(_c = state9.sourceToken) == null ? void 0 : _c.symbol} to ${NumberUtil.formatNumberToLocalString(toTokenAmount, 3)} ${(_d = state9.toToken) == null ? void 0 : _d.symbol}`;
    RouterController.pushTransactionStack({
      view: "Account",
      goBack: false,
      onSuccess() {
        SnackController.showLoading(snackbarPendingMessage);
        SwapController.resetState();
      }
    });
    try {
      const forceUpdateAddresses = [(_e = state9.sourceToken) == null ? void 0 : _e.address, (_f = state9.toToken) == null ? void 0 : _f.address].join(",");
      const transactionHash = await ConnectionController.sendTransaction({
        address: fromAddress,
        to: data.to,
        data: data.data,
        gas: data.gas,
        gasPrice: BigInt(data.gasPrice),
        value: data.value
      });
      state9.loadingTransaction = false;
      SnackController.showSuccess(snackbarSuccessMessage);
      EventsController.sendEvent({
        type: "track",
        event: "SWAP_SUCCESS",
        properties: {
          network: ((_g = NetworkController.state.caipNetwork) == null ? void 0 : _g.id) || "",
          swapFromToken: ((_h = this.state.sourceToken) == null ? void 0 : _h.symbol) || "",
          swapToToken: ((_i = this.state.toToken) == null ? void 0 : _i.symbol) || "",
          swapfromAmount: this.state.sourceTokenAmount || "",
          swapToAmount: this.state.toTokenAmount || "",
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      SwapController.resetState();
      SwapController.getMyTokensWithBalance(forceUpdateAddresses);
      return transactionHash;
    } catch (err) {
      const error = err;
      state9.transactionError = error == null ? void 0 : error.shortMessage;
      state9.loadingTransaction = false;
      SnackController.showError((error == null ? void 0 : error.shortMessage) || "Transaction error");
      EventsController.sendEvent({
        type: "track",
        event: "SWAP_ERROR",
        properties: {
          network: ((_j = NetworkController.state.caipNetwork) == null ? void 0 : _j.id) || "",
          swapFromToken: ((_k = this.state.sourceToken) == null ? void 0 : _k.symbol) || "",
          swapToToken: ((_l = this.state.toToken) == null ? void 0 : _l.symbol) || "",
          swapfromAmount: this.state.sourceTokenAmount || "",
          swapToAmount: this.state.toTokenAmount || "",
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT
        }
      });
      return void 0;
    }
  },
  hasInsufficientToken(sourceTokenAmount, sourceTokenAddress) {
    const isInsufficientSourceTokenForSwap = SwapCalculationUtil.isInsufficientSourceTokenForSwap(sourceTokenAmount, sourceTokenAddress, state9.myTokensWithBalance);
    const insufficientNetworkTokenForGas = SwapCalculationUtil.isInsufficientNetworkTokenForGas(state9.networkBalanceInUSD, state9.gasPriceInUSD);
    return insufficientNetworkTokenForGas || isInsufficientSourceTokenForSwap;
  },
  setTransactionDetails() {
    const { toTokenAddress, toTokenDecimals } = this.getParams();
    if (!toTokenAddress || !toTokenDecimals) {
      return;
    }
    state9.gasPriceInUSD = SwapCalculationUtil.getGasPriceInUSD(state9.networkPrice, BigInt(state9.gasFee), BigInt(INITIAL_GAS_LIMIT));
    state9.priceImpact = SwapCalculationUtil.getPriceImpact({
      sourceTokenAmount: state9.sourceTokenAmount,
      sourceTokenPriceInUSD: state9.sourceTokenPriceInUSD,
      toTokenPriceInUSD: state9.toTokenPriceInUSD,
      toTokenAmount: state9.toTokenAmount
    });
    state9.maxSlippage = SwapCalculationUtil.getMaxSlippage(state9.slippage, state9.toTokenAmount);
    state9.providerFee = SwapCalculationUtil.getProviderFee(state9.sourceTokenAmount);
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/AccountController.js
var state10 = proxy({
  isConnected: false,
  currentTab: 0,
  tokenBalance: [],
  smartAccountDeployed: false
});
var AccountController = {
  state: state10,
  replaceState(newState) {
    Object.assign(state10, newState);
  },
  subscribe(callback) {
    return ChainController.subscribeChainProp("accountState", (accountState2) => {
      if (accountState2) {
        return callback(accountState2);
      }
      return void 0;
    });
  },
  subscribeKey(property, callback) {
    let prev = void 0;
    return ChainController.subscribeChainProp("accountState", (accountState2) => {
      if (accountState2) {
        const nextValue = accountState2[property];
        if (prev !== nextValue) {
          prev = nextValue;
          callback(nextValue);
        }
      }
    });
  },
  setIsConnected(isConnected, chain) {
    ChainController.setAccountProp("isConnected", isConnected, chain);
  },
  setCaipAddress(caipAddress, chain) {
    const newCaipAddress = caipAddress ? CoreHelperUtil.getPlainAddress(caipAddress) : void 0;
    ChainController.setAccountProp("caipAddress", caipAddress, chain);
    ChainController.setAccountProp("address", newCaipAddress, chain);
  },
  setBalance(balance, balanceSymbol, chain) {
    ChainController.setAccountProp("balance", balance, chain);
    ChainController.setAccountProp("balanceSymbol", balanceSymbol, chain);
  },
  setProfileName(profileName, chain) {
    ChainController.setAccountProp("profileName", profileName, chain);
  },
  setProfileImage(profileImage, chain) {
    ChainController.setAccountProp("profileImage", profileImage, chain);
  },
  setAddressExplorerUrl(explorerUrl, chain) {
    ChainController.setAccountProp("addressExplorerUrl", explorerUrl, chain);
  },
  setSmartAccountDeployed(isDeployed, chain) {
    ChainController.setAccountProp("smartAccountDeployed", isDeployed, chain);
  },
  setCurrentTab(currentTab, chain) {
    ChainController.setAccountProp("currentTab", currentTab, chain);
  },
  setTokenBalance(tokenBalance, chain) {
    if (tokenBalance) {
      ChainController.setAccountProp("tokenBalance", tokenBalance, chain);
    }
  },
  setConnectedWalletInfo(connectedWalletInfo, chain) {
    ChainController.setAccountProp("connectedWalletInfo", connectedWalletInfo, chain);
  },
  setPreferredAccountType(preferredAccountType, chain) {
    ChainController.setAccountProp("preferredAccountType", preferredAccountType, chain);
  },
  setSocialProvider(socialProvider, chain) {
    if (socialProvider) {
      ChainController.setAccountProp("socialProvider", socialProvider, chain);
    }
  },
  setSocialWindow(socialWindow, chain) {
    if (socialWindow) {
      ChainController.setAccountProp("socialWindow", socialWindow, chain);
    }
  },
  async fetchTokenBalance() {
    var _a2, _b;
    const chainId = (_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id;
    const chain = (_b = NetworkController.state.caipNetwork) == null ? void 0 : _b.chain;
    const address = AccountController.state.address;
    try {
      if (address && chainId) {
        const response = await BlockchainApiController.getBalance(address, chainId);
        const filteredBalances = response.balances.filter((balance) => balance.quantity.decimals !== "0");
        this.setTokenBalance(filteredBalances, chain);
        SwapController.setBalances(SwapApiUtil.mapBalancesToSwapTokens(response.balances));
      }
    } catch (error) {
      SnackController.showError("Failed to fetch token balance");
    }
  },
  resetAccount(chain) {
    ChainController.resetAccount(chain);
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/ModalController.js
var state11 = proxy({
  loading: false,
  open: false
});
var ModalController = {
  state: state11,
  subscribe(callback) {
    return subscribe(state11, () => callback(state11));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state11, key, callback);
  },
  async open(options) {
    await ApiController.state.prefetchPromise;
    const connected = AccountController.state.isConnected;
    if (options == null ? void 0 : options.view) {
      RouterController.reset(options.view);
    } else if (connected) {
      RouterController.reset("Account");
    } else {
      RouterController.reset("Connect");
    }
    state11.open = true;
    PublicStateController.set({ open: true });
    EventsController.sendEvent({
      type: "track",
      event: "MODAL_OPEN",
      properties: { connected }
    });
  },
  close() {
    const connected = AccountController.state.isConnected;
    state11.open = false;
    PublicStateController.set({ open: false });
    EventsController.sendEvent({
      type: "track",
      event: "MODAL_CLOSE",
      properties: { connected }
    });
  },
  setLoading(loading) {
    state11.loading = loading;
    PublicStateController.set({ loading });
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/NetworkController.js
var state12 = proxy({
  supportsAllNetworks: true,
  isDefaultCaipNetwork: false,
  smartAccountEnabledNetworks: []
});
var NetworkController = {
  state: state12,
  replaceState(newState) {
    Object.assign(state12, newState);
  },
  subscribeKey(property, callback) {
    let prev = void 0;
    return ChainController.subscribeChainProp("networkState", (networkState2) => {
      if (networkState2) {
        const nextValue = networkState2[property];
        if (prev !== nextValue) {
          prev = nextValue;
          callback(nextValue);
        }
      }
    });
  },
  _getClient() {
    return ChainController.getNetworkControllerClient();
  },
  initializeDefaultNetwork() {
    const networks = this.getRequestedCaipNetworks();
    if (networks.length > 0) {
      this.setCaipNetwork(networks[0]);
    }
  },
  setCaipNetwork(caipNetwork) {
    var _a2, _b;
    const chain = ChainController.state.multiChainEnabled ? caipNetwork == null ? void 0 : caipNetwork.chain : ChainController.state.activeChain;
    if (!chain) {
      throw new Error("chain is required to set active network");
    }
    if (!caipNetwork) {
      throw new Error("caipNetwork is required to set active network");
    }
    ChainController.state.activeCaipNetwork = caipNetwork;
    ChainController.state.activeChain = chain;
    ChainController.setChainNetworkData(chain, { caipNetwork });
    PublicStateController.set({ activeChain: chain, selectedNetworkId: caipNetwork == null ? void 0 : caipNetwork.id });
    if (!((_b = (_a2 = ChainController.state.chains.get(chain)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b.allowUnsupportedChain)) {
      this.checkIfSupportedNetwork();
    }
  },
  setDefaultCaipNetwork(caipNetwork, chain) {
    const chainToSet = ChainController.state.multiChainEnabled ? chain : ChainController.state.activeChain;
    if (!chainToSet) {
      throw new Error("chain is required to set default network");
    }
    ChainController.state.activeCaipNetwork = caipNetwork;
    ChainController.state.activeChain = chainToSet;
    ChainController.setChainNetworkData(chainToSet, { caipNetwork, isDefaultCaipNetwork: true });
    PublicStateController.set({ selectedNetworkId: caipNetwork == null ? void 0 : caipNetwork.id, activeChain: chain });
  },
  setRequestedCaipNetworks(requestedNetworks, chain) {
    ChainController.setChainNetworkData(ChainController.state.multiChainEnabled ? chain : ChainController.state.activeChain, { requestedCaipNetworks: requestedNetworks });
  },
  setAllowUnsupportedChain(allowUnsupportedChain, chain) {
    ChainController.setChainNetworkData(chain || ChainController.state.activeChain, {
      allowUnsupportedChain
    });
  },
  setSmartAccountEnabledNetworks(smartAccountEnabledNetworks, chain) {
    ChainController.setChainNetworkData(ChainController.state.multiChainEnabled ? chain : ChainController.state.activeChain, { smartAccountEnabledNetworks });
  },
  getRequestedCaipNetworks(chainToFilter) {
    let chainAdapters = void 0;
    if (!ChainController.state.activeChain) {
      throw new Error("activeChain is required to get requested networks");
    }
    if (chainToFilter) {
      const chain = ChainController.state.multiChainEnabled ? chainToFilter : ChainController.state.activeChain;
      if (!chain) {
        throw new Error("chain is required to get requested networks");
      }
      chainAdapters = [chain];
    } else {
      const chains = ChainController.state.multiChainEnabled ? [...ChainController.state.chains.keys()] : [ChainController.state.activeChain];
      chainAdapters = chains;
    }
    const approvedIds = [];
    const requestedNetworks = [];
    chainAdapters.forEach((chn) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      if ((_b = (_a2 = ChainController.state.chains.get(chn)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b.approvedCaipNetworkIds) {
        approvedIds.push(...((_d = (_c = ChainController.state.chains.get(chn)) == null ? void 0 : _c.networkState) == null ? void 0 : _d.approvedCaipNetworkIds) || []);
      }
      if ((_f = (_e = ChainController.state.chains.get(chn)) == null ? void 0 : _e.networkState) == null ? void 0 : _f.requestedCaipNetworks) {
        requestedNetworks.push(...((_h = (_g = ChainController.state.chains.get(chn)) == null ? void 0 : _g.networkState) == null ? void 0 : _h.requestedCaipNetworks) || []);
      }
    });
    const sortedNetworks = CoreHelperUtil.sortRequestedNetworks(approvedIds, requestedNetworks);
    return sortedNetworks;
  },
  async switchActiveNetwork(network) {
    const networkControllerClient = ChainController.getNetworkControllerClient();
    await networkControllerClient.switchCaipNetwork(network);
    const chain = ChainController.state.multiChainEnabled ? network == null ? void 0 : network.chain : ChainController.state.activeChain;
    if (!chain) {
      throw new Error("chain is required to switch active network");
    }
    if (!network) {
      throw new Error("network is required to switch active network");
    }
    ChainController.state.activeCaipNetwork = network;
    ChainController.state.activeChain = chain;
    ChainController.setChainNetworkData(chain, { caipNetwork: network });
    PublicStateController.set({ activeChain: chain, selectedNetworkId: network.id });
    if (network) {
      EventsController.sendEvent({
        type: "track",
        event: "SWITCH_NETWORK",
        properties: { network: network.id }
      });
    }
  },
  getApprovedCaipNetworkIds(chainToFilter) {
    var _a2, _b;
    if (chainToFilter) {
      const chain = ChainController.state.multiChainEnabled ? chainToFilter : ChainController.state.activeChain;
      if (!chain) {
        throw new Error("chain is required to get approved network IDs");
      }
      return (_b = (_a2 = ChainController.state.chains.get(chain)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b.approvedCaipNetworkIds;
    }
    const allCaipNetworkIds = [];
    Object.values(ChainController.state.chains).forEach((adapter) => {
      var _a3;
      if (adapter.networkState.approvedCaipNetworkIds) {
        allCaipNetworkIds.push(...((_a3 = adapter.networkState) == null ? void 0 : _a3.approvedCaipNetworkIds) || []);
      }
    });
    return allCaipNetworkIds;
  },
  async setApprovedCaipNetworksData(_chain) {
    const networkControllerClient = ChainController.getNetworkControllerClient();
    const data = await networkControllerClient.getApprovedCaipNetworksData();
    const chain = ChainController.state.multiChainEnabled ? _chain : ChainController.state.activeChain;
    if (!chain) {
      throw new Error("chain is required to set approved network data");
    }
    ChainController.setChainNetworkData(chain, {
      approvedCaipNetworkIds: data == null ? void 0 : data.approvedCaipNetworkIds,
      supportsAllNetworks: (data == null ? void 0 : data.supportsAllNetworks) || false
    });
  },
  checkIfSupportedNetwork() {
    var _a2, _b;
    const chain = ChainController.state.multiChainEnabled ? ChainController.state.activeChain : ChainController.state.activeChain;
    if (!chain) {
      return false;
    }
    const activeCaipNetwork = (_b = (_a2 = ChainController.state.chains.get(chain)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b.caipNetwork;
    const requestedCaipNetworks = this.getRequestedCaipNetworks();
    return requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.some((network) => network.id === (activeCaipNetwork == null ? void 0 : activeCaipNetwork.id));
  },
  checkIfSmartAccountEnabled() {
    var _a2, _b, _c;
    const networkId = NetworkUtil.caipNetworkIdToNumber((_a2 = ChainController.state.activeCaipNetwork) == null ? void 0 : _a2.id);
    const activeChain = ChainController.state.activeChain;
    if (!activeChain) {
      throw new Error("activeChain is required to check if smart account is enabled");
    }
    if (!networkId) {
      return false;
    }
    const smartAccountEnabledNetworks = ((_c = (_b = ChainController.state.chains.get(activeChain)) == null ? void 0 : _b.networkState) == null ? void 0 : _c.smartAccountEnabledNetworks) || [];
    return Boolean(smartAccountEnabledNetworks == null ? void 0 : smartAccountEnabledNetworks.includes(networkId));
  },
  resetNetwork() {
    var _a2, _b;
    const chain = ChainController.state.activeChain;
    if (!chain) {
      throw new Error("chain is required to reset network");
    }
    if (!((_b = (_a2 = ChainController.state.chains.get(chain)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b.isDefaultCaipNetwork)) {
      ChainController.setChainNetworkData(chain, { caipNetwork: void 0 });
    }
    ChainController.setChainNetworkData(chain, {
      approvedCaipNetworkIds: void 0,
      supportsAllNetworks: true,
      smartAccountEnabledNetworks: []
    });
  },
  getSupportsAllNetworks() {
    var _a2, _b;
    const chain = ChainController.state.multiChainEnabled ? ChainController.state.activeChain : ChainController.state.activeChain;
    if (!chain) {
      throw new Error("chain is required to check if network supports all networks");
    }
    return (_b = (_a2 = ChainController.state.chains.get(chain)) == null ? void 0 : _a2.networkState) == null ? void 0 : _b.supportsAllNetworks;
  },
  showUnsupportedChainUI() {
    setTimeout(() => {
      ModalController.open({ view: "UnsupportedChain" });
    }, 300);
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/ApiController.js
var baseUrl3 = CoreHelperUtil.getApiUrl();
var api3 = new FetchUtil({ baseUrl: baseUrl3 });
var entries = "40";
var recommendedEntries = "4";
var state13 = proxy({
  page: 1,
  count: 0,
  featured: [],
  recommended: [],
  wallets: [],
  search: [],
  isAnalyticsEnabled: false,
  excludedRDNS: []
});
var ApiController = {
  state: state13,
  subscribeKey(key, callback) {
    return subscribeKey(state13, key, callback);
  },
  _getApiHeaders() {
    const { projectId, sdkType, sdkVersion } = OptionsController.state;
    return {
      "x-project-id": projectId,
      "x-sdk-type": sdkType,
      "x-sdk-version": sdkVersion
    };
  },
  async _fetchWalletImage(imageId) {
    const imageUrl = `${api3.baseUrl}/getWalletImage/${imageId}`;
    const blob = await api3.getBlob({ path: imageUrl, headers: ApiController._getApiHeaders() });
    AssetController.setWalletImage(imageId, URL.createObjectURL(blob));
  },
  async _fetchNetworkImage(imageId) {
    const imageUrl = `${api3.baseUrl}/public/getAssetImage/${imageId}`;
    const blob = await api3.getBlob({ path: imageUrl, headers: ApiController._getApiHeaders() });
    AssetController.setNetworkImage(imageId, URL.createObjectURL(blob));
  },
  async _fetchConnectorImage(imageId) {
    const imageUrl = `${api3.baseUrl}/public/getAssetImage/${imageId}`;
    const blob = await api3.getBlob({ path: imageUrl, headers: ApiController._getApiHeaders() });
    AssetController.setConnectorImage(imageId, URL.createObjectURL(blob));
  },
  async _fetchCurrencyImage(countryCode) {
    const imageUrl = `${api3.baseUrl}/public/getCurrencyImage/${countryCode}`;
    const blob = await api3.getBlob({ path: imageUrl, headers: ApiController._getApiHeaders() });
    AssetController.setCurrencyImage(countryCode, URL.createObjectURL(blob));
  },
  async _fetchTokenImage(symbol) {
    const imageUrl = `${api3.baseUrl}/public/getTokenImage/${symbol}`;
    const blob = await api3.getBlob({ path: imageUrl, headers: ApiController._getApiHeaders() });
    AssetController.setTokenImage(symbol, URL.createObjectURL(blob));
  },
  async fetchNetworkImages() {
    const requestedCaipNetworks = NetworkController.getRequestedCaipNetworks();
    const ids = requestedCaipNetworks == null ? void 0 : requestedCaipNetworks.map(({ imageId }) => imageId).filter(Boolean);
    if (ids) {
      await Promise.allSettled(ids.map((id) => ApiController._fetchNetworkImage(id)));
    }
  },
  async fetchConnectorImages() {
    const { connectors } = ConnectorController.state;
    const ids = connectors.map(({ imageId }) => imageId).filter(Boolean);
    await Promise.allSettled(ids.map((id) => ApiController._fetchConnectorImage(id)));
  },
  async fetchCurrencyImages(currencies = []) {
    await Promise.allSettled(currencies.map((currency) => ApiController._fetchCurrencyImage(currency)));
  },
  async fetchTokenImages(tokens = []) {
    await Promise.allSettled(tokens.map((token) => ApiController._fetchTokenImage(token)));
  },
  async fetchFeaturedWallets() {
    const { featuredWalletIds } = OptionsController.state;
    if (featuredWalletIds == null ? void 0 : featuredWalletIds.length) {
      const { data } = await api3.get({
        path: "/getWallets",
        headers: ApiController._getApiHeaders(),
        params: {
          page: "1",
          entries: (featuredWalletIds == null ? void 0 : featuredWalletIds.length) ? String(featuredWalletIds.length) : recommendedEntries,
          include: featuredWalletIds == null ? void 0 : featuredWalletIds.join(",")
        }
      });
      data.sort((a2, b) => featuredWalletIds.indexOf(a2.id) - featuredWalletIds.indexOf(b.id));
      const images = data.map((d) => d.image_id).filter(Boolean);
      await Promise.allSettled(images.map((id) => ApiController._fetchWalletImage(id)));
      state13.featured = data;
    }
  },
  async fetchRecommendedWallets() {
    var _a2;
    const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
    const exclude = [...excludeWalletIds ?? [], ...featuredWalletIds ?? []].filter(Boolean);
    const { data, count } = await api3.get({
      path: "/getWallets",
      headers: ApiController._getApiHeaders(),
      params: {
        page: "1",
        chains: (_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id,
        entries: recommendedEntries,
        include: includeWalletIds == null ? void 0 : includeWalletIds.join(","),
        exclude: exclude == null ? void 0 : exclude.join(",")
      }
    });
    const recent = StorageUtil.getRecentWallets();
    const recommendedImages = data.map((d) => d.image_id).filter(Boolean);
    const recentImages = recent.map((r) => r.image_id).filter(Boolean);
    await Promise.allSettled([...recommendedImages, ...recentImages].map((id) => ApiController._fetchWalletImage(id)));
    state13.recommended = data;
    state13.count = count ?? 0;
  },
  async fetchWallets({ page }) {
    var _a2;
    const { includeWalletIds, excludeWalletIds, featuredWalletIds } = OptionsController.state;
    const exclude = [
      ...state13.recommended.map(({ id }) => id),
      ...excludeWalletIds ?? [],
      ...featuredWalletIds ?? []
    ].filter(Boolean);
    const { data, count } = await api3.get({
      path: "/getWallets",
      headers: ApiController._getApiHeaders(),
      params: {
        page: String(page),
        entries,
        chains: (_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id,
        include: includeWalletIds == null ? void 0 : includeWalletIds.join(","),
        exclude: exclude.join(",")
      }
    });
    const images = data.map((w2) => w2.image_id).filter(Boolean);
    await Promise.allSettled([
      ...images.map((id) => ApiController._fetchWalletImage(id)),
      CoreHelperUtil.wait(300)
    ]);
    state13.wallets = CoreHelperUtil.uniqueBy([...state13.wallets, ...data], "id");
    state13.count = count > state13.count ? count : state13.count;
    state13.page = page;
  },
  async searchWalletByIds({ ids }) {
    var _a2;
    const { data } = await api3.get({
      path: "/getWallets",
      headers: ApiController._getApiHeaders(),
      params: {
        page: "1",
        entries: String(ids.length),
        chains: (_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id,
        include: ids == null ? void 0 : ids.join(",")
      }
    });
    if (data) {
      data.forEach((wallet) => {
        if (wallet == null ? void 0 : wallet.rdns) {
          state13.excludedRDNS.push(wallet.rdns);
        }
      });
    }
  },
  async searchWallet({ search }) {
    var _a2;
    const { includeWalletIds, excludeWalletIds } = OptionsController.state;
    state13.search = [];
    const { data } = await api3.get({
      path: "/getWallets",
      headers: ApiController._getApiHeaders(),
      params: {
        page: "1",
        entries: "100",
        search: search == null ? void 0 : search.trim(),
        chains: (_a2 = NetworkController.state.caipNetwork) == null ? void 0 : _a2.id,
        include: includeWalletIds == null ? void 0 : includeWalletIds.join(","),
        exclude: excludeWalletIds == null ? void 0 : excludeWalletIds.join(",")
      }
    });
    const images = data.map((w2) => w2.image_id).filter(Boolean);
    await Promise.allSettled([
      ...images.map((id) => ApiController._fetchWalletImage(id)),
      CoreHelperUtil.wait(300)
    ]);
    state13.search = data;
  },
  async reFetchWallets() {
    state13.page = 1;
    state13.wallets = [];
    await ApiController.fetchFeaturedWallets();
    await ApiController.fetchRecommendedWallets();
  },
  prefetch() {
    const promises = [
      ApiController.fetchFeaturedWallets(),
      ApiController.fetchRecommendedWallets(),
      ApiController.fetchNetworkImages(),
      ApiController.fetchConnectorImages()
    ];
    if (OptionsController.state.enableAnalytics === void 0) {
      promises.push(ApiController.fetchAnalyticsConfig());
    }
    state13.prefetchPromise = Promise.race([Promise.allSettled(promises), CoreHelperUtil.wait(3e3)]);
  },
  async fetchAnalyticsConfig() {
    const { isAnalyticsEnabled } = await api3.get({
      path: "/getAnalyticsConfig",
      headers: ApiController._getApiHeaders()
    });
    OptionsController.setEnableAnalytics(isAnalyticsEnabled);
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/OptionsController.js
var state14 = proxy({
  projectId: "",
  sdkType: "w3m",
  sdkVersion: "html-wagmi-undefined"
});
var OptionsController = {
  state: state14,
  subscribeKey(key, callback) {
    return subscribeKey(state14, key, callback);
  },
  setProjectId(projectId) {
    state14.projectId = projectId;
  },
  setAllWallets(allWallets) {
    state14.allWallets = allWallets;
  },
  setIncludeWalletIds(includeWalletIds) {
    state14.includeWalletIds = includeWalletIds;
  },
  setExcludeWalletIds(excludeWalletIds) {
    state14.excludeWalletIds = excludeWalletIds;
    if (excludeWalletIds) {
      ApiController.searchWalletByIds({ ids: excludeWalletIds });
    }
  },
  setFeaturedWalletIds(featuredWalletIds) {
    state14.featuredWalletIds = featuredWalletIds;
  },
  setTokens(tokens) {
    state14.tokens = tokens;
  },
  setTermsConditionsUrl(termsConditionsUrl) {
    state14.termsConditionsUrl = termsConditionsUrl;
  },
  setPrivacyPolicyUrl(privacyPolicyUrl) {
    state14.privacyPolicyUrl = privacyPolicyUrl;
  },
  setCustomWallets(customWallets) {
    state14.customWallets = customWallets;
  },
  setIsSiweEnabled(isSiweEnabled) {
    state14.isSiweEnabled = isSiweEnabled;
  },
  setEnableAnalytics(enableAnalytics) {
    state14.enableAnalytics = enableAnalytics;
  },
  setSdkVersion(sdkVersion) {
    state14.sdkVersion = sdkVersion;
  },
  setMetadata(metadata) {
    state14.metadata = metadata;
  },
  setOnrampEnabled(enableOnramp) {
    state14.enableOnramp = enableOnramp;
  },
  setDisableAppend(disableAppend) {
    state14.disableAppend = disableAppend;
  },
  setEIP6963Enabled(enableEIP6963) {
    state14.enableEIP6963 = enableEIP6963;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/ConnectorController.js
var state15 = proxy({
  connectors: []
});
var ConnectorController = {
  state: state15,
  subscribeKey(key, callback) {
    return subscribeKey(state15, key, callback);
  },
  setConnectors(connectors, multiChain) {
    if (multiChain) {
      state15.connectors = [...state15.connectors, ...connectors.map((c) => ref(c))];
      state15.connectors = this.mergeMultiChainConnectors(state15.connectors);
    } else {
      state15.connectors = connectors.map((c) => ref(c));
    }
  },
  mergeMultiChainConnectors(connectors) {
    const mergedConnectors = [];
    connectors.forEach((connector) => {
      const { name, chain, type } = connector;
      const existingConnectorIndex = mergedConnectors.findIndex((existingConnector) => existingConnector.name === name);
      if (existingConnectorIndex === -1) {
        mergedConnectors.push({ ...connector });
      } else {
        const existingConnector = mergedConnectors[existingConnectorIndex];
        if (existingConnector) {
          if ((existingConnector == null ? void 0 : existingConnector.chain) === chain || existingConnector.type === type) {
            mergedConnectors.push({ ...connector });
          } else if (existingConnector.type === "MULTI_CHAIN") {
            mergedConnectors.push({ ...connector });
          } else {
            mergedConnectors[existingConnectorIndex] = {
              ...existingConnector,
              type: "MULTI_CHAIN",
              providers: [existingConnector, connector]
            };
          }
        }
      }
    });
    return mergedConnectors;
  },
  addConnector(connector) {
    var _a2, _b;
    state15.connectors.push(ref(connector));
    if (connector.id === "w3mAuth") {
      const authConnector = connector;
      const optionsState = snapshot(OptionsController.state);
      const themeMode = ThemeController.getSnapshot().themeMode;
      const themeVariables = ThemeController.getSnapshot().themeVariables;
      (_b = (_a2 = authConnector == null ? void 0 : authConnector.provider) == null ? void 0 : _a2.syncDappData) == null ? void 0 : _b.call(_a2, {
        metadata: optionsState.metadata,
        sdkVersion: optionsState.sdkVersion,
        projectId: optionsState.projectId
      });
      authConnector.provider.syncTheme({
        themeMode,
        themeVariables,
        w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
      });
    }
  },
  getAuthConnector() {
    return state15.connectors.find((c) => c.type === "AUTH");
  },
  getAnnouncedConnectorRdns() {
    return state15.connectors.filter((c) => c.type === "ANNOUNCED").map((c) => {
      var _a2;
      return (_a2 = c.info) == null ? void 0 : _a2.rdns;
    });
  },
  getConnectors() {
    return state15.connectors;
  },
  getConnector(id, rdns) {
    return state15.connectors.find((c) => {
      var _a2;
      return c.explorerId === id || ((_a2 = c.info) == null ? void 0 : _a2.rdns) === rdns;
    });
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/ThemeController.js
var state16 = proxy({
  themeMode: "dark",
  themeVariables: {},
  w3mThemeVariables: void 0
});
var ThemeController = {
  state: state16,
  subscribe(callback) {
    return subscribe(state16, () => callback(state16));
  },
  setThemeMode(themeMode) {
    state16.themeMode = themeMode;
    try {
      const authConnector = ConnectorController.getAuthConnector();
      if (authConnector) {
        const themeVariables = ThemeController.getSnapshot().themeVariables;
        authConnector.provider.syncTheme({
          themeMode,
          themeVariables,
          w3mThemeVariables: getW3mThemeVariables(themeVariables, themeMode)
        });
      }
    } catch {
      console.info("Unable to sync theme to auth connector");
    }
  },
  setThemeVariables(themeVariables) {
    state16.themeVariables = { ...state16.themeVariables, ...themeVariables };
    try {
      const authConnector = ConnectorController.getAuthConnector();
      if (authConnector) {
        const themeVariablesSnapshot = ThemeController.getSnapshot().themeVariables;
        authConnector.provider.syncTheme({
          themeVariables: themeVariablesSnapshot,
          w3mThemeVariables: getW3mThemeVariables(state16.themeVariables, state16.themeMode)
        });
      }
    } catch {
      console.info("Unable to sync theme to auth connector");
    }
  },
  getSnapshot() {
    return snapshot(state16);
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/RouterUtil.js
var RouterUtil = {
  goBackOrCloseModal() {
    if (RouterController.state.history.length > 1) {
      RouterController.goBack();
    } else {
      ModalController.close();
    }
  },
  navigateAfterNetworkSwitch() {
    const { history } = RouterController.state;
    const networkSelectIndex = history.findIndex((name) => name === "Networks");
    if (networkSelectIndex >= 1) {
      RouterController.goBackToIndex(networkSelectIndex - 1);
    } else {
      ModalController.close();
    }
  },
  navigateAfterPreferredAccountTypeSelect() {
    const { isSiweEnabled } = OptionsController.state;
    if (isSiweEnabled && ChainController.state.activeChain === ConstantsUtil.CHAIN.EVM) {
      RouterController.push("ConnectingSiwe");
    } else {
      RouterController.push("Account");
    }
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/OnRampController.js
var USDC_CURRENCY_DEFAULT = {
  id: "2b92315d-eab7-5bef-84fa-089a131333f5",
  name: "USD Coin",
  symbol: "USDC",
  networks: [
    {
      name: "ethereum-mainnet",
      display_name: "Ethereum",
      chain_id: "1",
      contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    },
    {
      name: "polygon-mainnet",
      display_name: "Polygon",
      chain_id: "137",
      contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
    }
  ]
};
var USD_CURRENCY_DEFAULT = {
  id: "USD",
  payment_method_limits: [
    {
      id: "card",
      min: "10.00",
      max: "7500.00"
    },
    {
      id: "ach_bank_account",
      min: "10.00",
      max: "25000.00"
    }
  ]
};
var defaultState = {
  providers: ONRAMP_PROVIDERS,
  selectedProvider: null,
  error: null,
  purchaseCurrency: USDC_CURRENCY_DEFAULT,
  paymentCurrency: USD_CURRENCY_DEFAULT,
  purchaseCurrencies: [USDC_CURRENCY_DEFAULT],
  paymentCurrencies: [],
  quotesLoading: false
};
var state17 = proxy(defaultState);
var OnRampController = {
  state: state17,
  subscribe(callback) {
    return subscribe(state17, () => callback(state17));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state17, key, callback);
  },
  setSelectedProvider(provider) {
    state17.selectedProvider = provider;
  },
  setPurchaseCurrency(currency) {
    state17.purchaseCurrency = currency;
  },
  setPaymentCurrency(currency) {
    state17.paymentCurrency = currency;
  },
  setPurchaseAmount(amount) {
    this.state.purchaseAmount = amount;
  },
  setPaymentAmount(amount) {
    this.state.paymentAmount = amount;
  },
  async getAvailableCurrencies() {
    const options = await BlockchainApiController.getOnrampOptions();
    state17.purchaseCurrencies = options.purchaseCurrencies;
    state17.paymentCurrencies = options.paymentCurrencies;
    state17.paymentCurrency = options.paymentCurrencies[0] || USD_CURRENCY_DEFAULT;
    state17.purchaseCurrency = options.purchaseCurrencies[0] || USDC_CURRENCY_DEFAULT;
    await ApiController.fetchCurrencyImages(options.paymentCurrencies.map((currency) => currency.id));
    await ApiController.fetchTokenImages(options.purchaseCurrencies.map((currency) => currency.symbol));
  },
  async getQuote() {
    var _a2, _b;
    state17.quotesLoading = true;
    try {
      const quote = await BlockchainApiController.getOnrampQuote({
        purchaseCurrency: state17.purchaseCurrency,
        paymentCurrency: state17.paymentCurrency,
        amount: ((_a2 = state17.paymentAmount) == null ? void 0 : _a2.toString()) || "0",
        network: (_b = state17.purchaseCurrency) == null ? void 0 : _b.symbol
      });
      state17.quotesLoading = false;
      state17.purchaseAmount = Number(quote.purchaseAmount.amount);
      return quote;
    } catch (error) {
      state17.error = error.message;
      state17.quotesLoading = false;
      return null;
    } finally {
      state17.quotesLoading = false;
    }
  },
  resetState() {
    state17.providers = ONRAMP_PROVIDERS;
    state17.selectedProvider = null;
    state17.error = null;
    state17.purchaseCurrency = USDC_CURRENCY_DEFAULT;
    state17.paymentCurrency = USD_CURRENCY_DEFAULT;
    state17.purchaseCurrencies = [USDC_CURRENCY_DEFAULT];
    state17.paymentCurrencies = [];
    state17.paymentAmount = void 0;
    state17.purchaseAmount = void 0;
    state17.quotesLoading = false;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/SendController.js
var state18 = proxy({
  loading: false
});
var SendController = {
  state: state18,
  subscribe(callback) {
    return subscribe(state18, () => callback(state18));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state18, key, callback);
  },
  setToken(token) {
    if (token) {
      state18.token = ref(token);
    }
  },
  setTokenAmount(sendTokenAmount) {
    state18.sendTokenAmount = sendTokenAmount;
  },
  setReceiverAddress(receiverAddress) {
    state18.receiverAddress = receiverAddress;
  },
  setReceiverProfileImageUrl(receiverProfileImageUrl) {
    state18.receiverProfileImageUrl = receiverProfileImageUrl;
  },
  setReceiverProfileName(receiverProfileName) {
    state18.receiverProfileName = receiverProfileName;
  },
  setGasPrice(gasPrice) {
    state18.gasPrice = gasPrice;
  },
  setGasPriceInUsd(gasPriceInUSD) {
    state18.gasPriceInUSD = gasPriceInUSD;
  },
  setLoading(loading) {
    state18.loading = loading;
  },
  sendToken() {
    var _a2, _b, _c, _d, _e;
    if (((_a2 = this.state.token) == null ? void 0 : _a2.address) && this.state.sendTokenAmount && this.state.receiverAddress) {
      EventsController.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: this.state.token.address,
          amount: this.state.sendTokenAmount,
          network: ((_b = NetworkController.state.caipNetwork) == null ? void 0 : _b.id) || ""
        }
      });
      this.sendERC20Token({
        receiverAddress: this.state.receiverAddress,
        tokenAddress: this.state.token.address,
        sendTokenAmount: this.state.sendTokenAmount,
        decimals: this.state.token.quantity.decimals
      });
    } else if (this.state.receiverAddress && this.state.sendTokenAmount && this.state.gasPrice && ((_c = this.state.token) == null ? void 0 : _c.quantity.decimals)) {
      EventsController.sendEvent({
        type: "track",
        event: "SEND_INITIATED",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: (_d = this.state.token) == null ? void 0 : _d.symbol,
          amount: this.state.sendTokenAmount,
          network: ((_e = NetworkController.state.caipNetwork) == null ? void 0 : _e.id) || ""
        }
      });
      this.sendNativeToken({
        receiverAddress: this.state.receiverAddress,
        sendTokenAmount: this.state.sendTokenAmount,
        gasPrice: this.state.gasPrice,
        decimals: this.state.token.quantity.decimals
      });
    }
  },
  async sendNativeToken(params) {
    var _a2, _b, _c, _d;
    RouterController.pushTransactionStack({
      view: "Account",
      goBack: false
    });
    const to = params.receiverAddress;
    const address = AccountController.state.address;
    const value = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
    const data = "0x";
    try {
      await ConnectionController.sendTransaction({
        to,
        address,
        data,
        value,
        gasPrice: params.gasPrice
      });
      SnackController.showSuccess("Transaction started");
      EventsController.sendEvent({
        type: "track",
        event: "SEND_SUCCESS",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((_a2 = this.state.token) == null ? void 0 : _a2.symbol) || "",
          amount: params.sendTokenAmount,
          network: ((_b = NetworkController.state.caipNetwork) == null ? void 0 : _b.id) || ""
        }
      });
      this.resetSend();
    } catch (error) {
      EventsController.sendEvent({
        type: "track",
        event: "SEND_ERROR",
        properties: {
          isSmartAccount: AccountController.state.preferredAccountType === W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
          token: ((_c = this.state.token) == null ? void 0 : _c.symbol) || "",
          amount: params.sendTokenAmount,
          network: ((_d = NetworkController.state.caipNetwork) == null ? void 0 : _d.id) || ""
        }
      });
      SnackController.showError("Something went wrong");
    }
  },
  async sendERC20Token(params) {
    RouterController.pushTransactionStack({
      view: "Account",
      goBack: false
    });
    const amount = ConnectionController.parseUnits(params.sendTokenAmount.toString(), Number(params.decimals));
    try {
      if (AccountController.state.address && params.sendTokenAmount && params.receiverAddress && params.tokenAddress) {
        await ConnectionController.writeContract({
          fromAddress: AccountController.state.address,
          tokenAddress: CoreHelperUtil.getPlainAddress(params.tokenAddress),
          receiverAddress: params.receiverAddress,
          tokenAmount: amount,
          method: "transfer",
          abi: erc20ABI
        });
        SnackController.showSuccess("Transaction started");
        this.resetSend();
      }
    } catch (error) {
      SnackController.showError("Something went wrong");
    }
  },
  resetSend() {
    state18.token = void 0;
    state18.sendTokenAmount = void 0;
    state18.receiverAddress = void 0;
    state18.receiverProfileImageUrl = void 0;
    state18.receiverProfileName = void 0;
    state18.loading = false;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/TooltipController.js
var state19 = proxy({
  message: "",
  open: false,
  triggerRect: {
    width: 0,
    height: 0,
    top: 0,
    left: 0
  },
  variant: "shade"
});
var TooltipController = {
  state: state19,
  subscribe(callback) {
    return subscribe(state19, () => callback(state19));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state19, key, callback);
  },
  showTooltip({ message, triggerRect, variant }) {
    state19.open = true;
    state19.message = message;
    state19.triggerRect = triggerRect;
    state19.variant = variant;
  },
  hide() {
    state19.open = false;
    state19.message = "";
    state19.triggerRect = {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    };
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/EnsUtil.js
var SLIP44_MSB = 2147483648;
var EnsUtil = {
  convertEVMChainIdToCoinType(chainId) {
    if (chainId >= SLIP44_MSB) {
      throw new Error("Invalid chainId");
    }
    return (SLIP44_MSB | chainId) >>> 0;
  }
};

// node_modules/@web3modal/core/dist/esm/src/controllers/EnsController.js
var state20 = proxy({
  suggestions: [],
  loading: false
});
var EnsController = {
  state: state20,
  subscribe(callback) {
    return subscribe(state20, () => callback(state20));
  },
  subscribeKey(key, callback) {
    return subscribeKey(state20, key, callback);
  },
  async resolveName(name) {
    var _a2, _b;
    try {
      return await BlockchainApiController.lookupEnsName(name);
    } catch (e) {
      const error = e;
      throw new Error(((_b = (_a2 = error == null ? void 0 : error.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b.description) || "Error resolving name");
    }
  },
  async isNameRegistered(name) {
    try {
      await BlockchainApiController.lookupEnsName(name);
      return true;
    } catch {
      return false;
    }
  },
  async getSuggestions(name) {
    try {
      state20.loading = true;
      state20.suggestions = [];
      const response = await BlockchainApiController.getEnsNameSuggestions(name);
      state20.suggestions = response.suggestions.map((suggestion) => ({
        ...suggestion,
        name: suggestion.name.replace(ConstantsUtil.WC_NAME_SUFFIX, "")
      })) || [];
      return state20.suggestions;
    } catch (e) {
      const errorMessage = this.parseEnsApiError(e, "Error fetching name suggestions");
      throw new Error(errorMessage);
    } finally {
      state20.loading = false;
    }
  },
  async getNamesForAddress(address) {
    try {
      const network = NetworkController.state.caipNetwork;
      if (!network) {
        return [];
      }
      const response = await BlockchainApiController.reverseLookupEnsName({ address });
      return response;
    } catch (e) {
      const errorMessage = this.parseEnsApiError(e, "Error fetching names for address");
      throw new Error(errorMessage);
    }
  },
  async registerName(name) {
    const network = NetworkController.state.caipNetwork;
    if (!network) {
      throw new Error("Network not found");
    }
    const address = AccountController.state.address;
    const emailConnector = ConnectorController.getAuthConnector();
    if (!address || !emailConnector) {
      throw new Error("Address or auth connector not found");
    }
    state20.loading = true;
    try {
      const message = JSON.stringify({
        name: `${name}${ConstantsUtil.WC_NAME_SUFFIX}`,
        attributes: {},
        timestamp: Math.floor(Date.now() / 1e3)
      });
      RouterController.pushTransactionStack({
        view: "RegisterAccountNameSuccess",
        goBack: false,
        replace: true,
        onCancel() {
          state20.loading = false;
        }
      });
      const signature = await ConnectionController.signMessage(message);
      const networkId = NetworkUtil.caipNetworkIdToNumber(network.id);
      if (!networkId) {
        throw new Error("Network not found");
      }
      const coinType = EnsUtil.convertEVMChainIdToCoinType(networkId);
      await BlockchainApiController.registerEnsName({
        coinType,
        address,
        signature,
        message
      });
      AccountController.setProfileName(`${name}${ConstantsUtil.WC_NAME_SUFFIX}`);
      RouterController.replace("RegisterAccountNameSuccess");
    } catch (e) {
      const errorMessage = this.parseEnsApiError(e, `Error registering name ${name}`);
      RouterController.replace("RegisterAccountName");
      throw new Error(errorMessage);
    } finally {
      state20.loading = false;
    }
  },
  validateName(name) {
    return /^[a-zA-Z0-9-]{4,}$/u.test(name);
  },
  parseEnsApiError(error, defaultError) {
    var _a2, _b;
    const ensError = error;
    return ((_b = (_a2 = ensError == null ? void 0 : ensError.reasons) == null ? void 0 : _a2[0]) == null ? void 0 : _b.description) || defaultError;
  }
};

// node_modules/@web3modal/core/dist/esm/src/utils/AssetUtil.js
var AssetUtil = {
  getWalletImage(wallet) {
    if (wallet == null ? void 0 : wallet.image_url) {
      return wallet == null ? void 0 : wallet.image_url;
    }
    if (wallet == null ? void 0 : wallet.image_id) {
      return AssetController.state.walletImages[wallet.image_id];
    }
    return void 0;
  },
  getNetworkImage(network) {
    if (network == null ? void 0 : network.imageUrl) {
      return network == null ? void 0 : network.imageUrl;
    }
    if (network == null ? void 0 : network.imageId) {
      return AssetController.state.networkImages[network.imageId];
    }
    return void 0;
  },
  getConnectorImage(connector) {
    if (connector == null ? void 0 : connector.imageUrl) {
      return connector.imageUrl;
    }
    if (connector == null ? void 0 : connector.imageId) {
      return AssetController.state.connectorImages[connector.imageId];
    }
    return void 0;
  }
};

export {
  subscribeKey,
  ConstantsUtil2 as ConstantsUtil,
  CoreHelperUtil,
  StorageUtil,
  AssetController,
  ThemeController,
  ConnectorController,
  PublicStateController,
  EventsController,
  ChainController,
  NetworkController,
  ApiController,
  OptionsController,
  BlockchainApiController,
  SnackController,
  W3mFrameConstants,
  W3mFrameRpcConstants,
  W3mFrameHelpers,
  W3mFrameProvider,
  TransactionsController,
  ConnectionController,
  RouterController,
  SwapController,
  AccountController,
  ModalController,
  OnRampController,
  SendController,
  TooltipController,
  EnsController,
  AssetUtil,
  RouterUtil
};
//# sourceMappingURL=chunk-6FCUEIFE.js.map
