import {
  ConstantsUtil,
  Web3Modal
} from "./chunk-MUTN5JV7.js";
import "./chunk-7WLNPGCA.js";
import "./chunk-YJGNAP7T.js";
import "./chunk-YJTPXML4.js";
import "./chunk-6FCUEIFE.js";
import "./chunk-A3MKZKSE.js";
import "./chunk-VX2SFTVG.js";
import "./chunk-75QXM6Y4.js";
import "./chunk-UWELQ4IB.js";
import "./chunk-RZICIBFF.js";
import "./chunk-DA7JULEP.js";
import "./chunk-LBT3Y426.js";
import "./chunk-I34SU4M3.js";
import "./chunk-ZEZODQPH.js";
import "./chunk-AWQZ5TNI.js";
import "./chunk-ASP2MYOE.js";
import "./chunk-3TZCOB37.js";
import {
  require_react
} from "./chunk-HBMOUMJU.js";
import "./chunk-Z5S3DQDB.js";
import "./chunk-LGOXUJ7V.js";
import "./chunk-OFS4JK5L.js";
import "./chunk-6AJRL3KS.js";
import "./chunk-TMEMN4EL.js";
import {
  __toESM
} from "./chunk-MSFXBLHD.js";

// node_modules/@web3modal/scaffold-react/dist/esm/index.js
var import_react = __toESM(require_react());
var modal = void 0;
function getWeb3Modal(web3modal) {
  if (web3modal) {
    modal = web3modal;
  }
}
function useWeb3ModalTheme() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalTheme" hook');
  }
  function setThemeMode(themeMode2) {
    modal == null ? void 0 : modal.setThemeMode(themeMode2);
  }
  function setThemeVariables(themeVariables2) {
    modal == null ? void 0 : modal.setThemeVariables(themeVariables2);
  }
  const [themeMode, setInternalThemeMode] = (0, import_react.useState)(modal.getThemeMode());
  const [themeVariables, setInternalThemeVariables] = (0, import_react.useState)(modal.getThemeVariables());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeTheme((state) => {
      setInternalThemeMode(state.themeMode);
      setInternalThemeVariables(state.themeVariables);
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return {
    themeMode,
    themeVariables,
    setThemeMode,
    setThemeVariables
  };
}
function useWeb3Modal() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');
  }
  async function open(options) {
    await (modal == null ? void 0 : modal.open(options));
  }
  async function close() {
    await (modal == null ? void 0 : modal.close());
  }
  return { open, close };
}
function useWalletInfo() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWalletInfo" hook');
  }
  const walletInfo = (0, import_react.useSyncExternalStore)(modal.subscribeWalletInfo, modal.getWalletInfo, modal.getWalletInfo);
  return { walletInfo };
}
function useWeb3ModalState() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalState" hook');
  }
  const [state, setState] = (0, import_react.useState)(modal.getState());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeState((newState) => {
      setState({ ...newState });
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return state;
}
function useWeb3ModalEvents() {
  if (!modal) {
    throw new Error('Please call "createWeb3Modal" before using "useWeb3ModalEvents" hook');
  }
  const [event, setEvents] = (0, import_react.useState)(modal.getEvent());
  (0, import_react.useEffect)(() => {
    const unsubscribe = modal == null ? void 0 : modal.subscribeEvents((newEvent) => {
      setEvents({ ...newEvent });
    });
    return () => {
      unsubscribe == null ? void 0 : unsubscribe();
    };
  }, []);
  return event;
}

// node_modules/@web3modal/wagmi/dist/esm/exports/react/index.js
var modal2 = void 0;
function createWeb3Modal(options) {
  if (!modal2) {
    modal2 = new Web3Modal({ ...options, _sdkVersion: `react-wagmi-${ConstantsUtil.VERSION}` });
    getWeb3Modal(modal2);
  }
  return modal2;
}
export {
  createWeb3Modal,
  useWalletInfo,
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme
};
//# sourceMappingURL=@web3modal_wagmi_react.js.map
