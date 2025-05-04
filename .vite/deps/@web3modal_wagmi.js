import {
  coinbaseWallet,
  walletConnect
} from "./chunk-3YRU2S3C.js";
import {
  ConstantsUtil,
  Web3Modal,
  getTransport
} from "./chunk-MUTN5JV7.js";
import "./chunk-7WLNPGCA.js";
import "./chunk-YJGNAP7T.js";
import "./chunk-YJTPXML4.js";
import {
  W3mFrameProvider
} from "./chunk-6FCUEIFE.js";
import "./chunk-A3MKZKSE.js";
import "./chunk-VX2SFTVG.js";
import "./chunk-75QXM6Y4.js";
import "./chunk-UWELQ4IB.js";
import "./chunk-RZICIBFF.js";
import "./chunk-DA7JULEP.js";
import "./chunk-LBT3Y426.js";
import "./chunk-I34SU4M3.js";
import {
  createConfig,
  createConnector,
  injected
} from "./chunk-ZEZODQPH.js";
import "./chunk-AWQZ5TNI.js";
import "./chunk-ASP2MYOE.js";
import {
  SwitchChainError
} from "./chunk-3TZCOB37.js";
import "./chunk-HBMOUMJU.js";
import "./chunk-Z5S3DQDB.js";
import "./chunk-LGOXUJ7V.js";
import "./chunk-OFS4JK5L.js";
import {
  getAddress
} from "./chunk-6AJRL3KS.js";
import "./chunk-TMEMN4EL.js";
import "./chunk-MSFXBLHD.js";

// node_modules/@web3modal/wagmi/dist/esm/src/connectors/AuthConnector.js
function authConnector(parameters) {
  return createConnector((config) => ({
    id: ConstantsUtil.AUTH_CONNECTOR_ID,
    name: "Web3Modal Auth",
    type: "w3mAuth",
    socials: parameters.socials,
    email: parameters.email,
    showWallets: parameters.showWallets,
    walletFeatures: parameters.walletFeatures,
    async connect(options = {}) {
      const provider = await this.getProvider();
      const { address, chainId } = await provider.connect({ chainId: options.chainId });
      await provider.getSmartAccountEnabledNetworks();
      return {
        accounts: [address],
        account: address,
        chainId,
        chain: {
          id: chainId,
          unsuported: false
        }
      };
    },
    async disconnect() {
      const provider = await this.getProvider();
      await provider.disconnect();
    },
    async getAccounts() {
      const provider = await this.getProvider();
      const { address } = await provider.connect();
      config.emitter.emit("change", { accounts: [address] });
      return [address];
    },
    async getProvider() {
      if (!this.provider) {
        this.provider = new W3mFrameProvider(parameters.options.projectId);
      }
      return Promise.resolve(this.provider);
    },
    async getChainId() {
      const provider = await this.getProvider();
      const { chainId } = await provider.getChainId();
      return chainId;
    },
    async isAuthorized() {
      const provider = await this.getProvider();
      const { isConnected } = await provider.isConnected();
      return isConnected;
    },
    async switchChain({ chainId }) {
      try {
        const chain = config.chains.find((c) => c.id === chainId);
        if (!chain) {
          throw new SwitchChainError(new Error("chain not found on connector."));
        }
        const provider = await this.getProvider();
        await provider.switchNetwork(chainId);
        config.emitter.emit("change", { chainId: Number(chainId) });
        return chain;
      } catch (error) {
        if (error instanceof Error) {
          throw new SwitchChainError(error);
        }
        throw error;
      }
    },
    onAccountsChanged(accounts) {
      if (accounts.length === 0) {
        this.onDisconnect();
      } else {
        config.emitter.emit("change", { accounts: accounts.map(getAddress) });
      }
    },
    onChainChanged(chain) {
      const chainId = Number(chain);
      config.emitter.emit("change", { chainId });
    },
    async onConnect(connectInfo) {
      const chainId = Number(connectInfo.chainId);
      const accounts = await this.getAccounts();
      config.emitter.emit("connect", { accounts, chainId });
    },
    async onDisconnect(_error) {
      const provider = await this.getProvider();
      await provider.disconnect();
    }
  }));
}

// node_modules/@web3modal/wagmi/dist/esm/src/utils/defaultWagmiCoreConfig.js
function defaultWagmiConfig({ projectId, chains, metadata, enableCoinbase, enableInjected, auth = {}, enableWalletConnect, enableEIP6963, ...wagmiConfig }) {
  const connectors = [];
  const transportsArr = chains.map((chain) => [chain.id, getTransport({ chain, projectId })]);
  const transports = Object.fromEntries(transportsArr);
  const defaultAuth = {
    email: true,
    showWallets: true,
    walletFeatures: true
  };
  if (enableWalletConnect !== false) {
    connectors.push(walletConnect({ projectId, metadata, showQrModal: false }));
  }
  if (enableInjected !== false) {
    connectors.push(injected({ shimDisconnect: true }));
  }
  if (enableCoinbase !== false) {
    connectors.push(coinbaseWallet({
      version: "4",
      appName: (metadata == null ? void 0 : metadata.name) ?? "Unknown",
      appLogoUrl: (metadata == null ? void 0 : metadata.icons[0]) ?? "Unknown",
      preference: wagmiConfig.coinbasePreference || "all"
    }));
  }
  const mergedAuth = {
    ...defaultAuth,
    ...auth
  };
  if (mergedAuth.email || mergedAuth.socials) {
    connectors.push(authConnector({
      chains: [...chains],
      options: { projectId },
      socials: mergedAuth.socials,
      email: mergedAuth.email,
      showWallets: mergedAuth.showWallets,
      walletFeatures: mergedAuth.walletFeatures
    }));
  }
  return createConfig({
    chains,
    multiInjectedProviderDiscovery: enableEIP6963 !== false,
    transports,
    ...wagmiConfig,
    connectors
  });
}

// node_modules/@web3modal/wagmi/dist/esm/src/connectors/AuthConnectorExport.js
function authConnector2(parameters) {
  return authConnector({
    email: true,
    showWallets: true,
    walletFeatures: true,
    ...parameters
  });
}

// node_modules/@web3modal/wagmi/dist/esm/exports/index.js
function createWeb3Modal(options) {
  return new Web3Modal({ ...options, _sdkVersion: `html-wagmi-${ConstantsUtil.VERSION}` });
}
export {
  authConnector2 as authConnector,
  createWeb3Modal,
  defaultWagmiConfig
};
//# sourceMappingURL=@web3modal_wagmi.js.map
