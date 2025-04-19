import React, { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainComponent from './components/main';
import "./styles.css";
import { WagmiProvider, useAccount } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http } from "wagmi";
import { mainnet, arbitrum } from "viem/chains";
import { walletConnect, coinbaseWallet, injected } from "wagmi/connectors";
import { authConnector } from "@web3modal/wagmi";
import Signup from "./components/Signup";
import Chat from "./components/Chat";
import { UserProvider, useUser } from "./components/UserContext";

const queryClient = new QueryClient();
const projectId = import.meta.env.VITE_WAGMI_PROJECTID; // .env is gitignored
if (!projectId) throw new Error("Project ID is undefined");
/*
ЧАТ

//задержка, слышу но прерывисто вот щас я слышу отдельно взятые буквы, теперь вообще ничего
//я как раз сказал ну ладно, буду говорить игнрируя помехи, и звонок оборвался
//звонок висит, игнорируя помехи это пран так себе
так и будем)
это оно
своя телега)

хотели чат создать, вот

"Илья Сергиенко передал(а) вам биткоин"

xXx_gorno_xXx постасил(а) отметку "нравится" на Ваше сообщение
про тайпскрипт услышал, только оборвалось на "короче яяяяяяяяяяяяяя"                                 посмотри как чат вырос ------->
ну шо за язык я так и не понял, как он работает тоже, надо разбираться


я говорю что я так понимаю от звонка толку нету))
да, можно так и общаться в коде
давай
прикольно же
короче, про тайпскрипт я сам хз, на нем был пример кода который я украл и от которого отталкивался
там  была просто страница с кнопкой подключения кошелька
правил
но говорить не украл, а тактично взял в пользование
повз
а

иствовал
ааааа

ААА
слышишь, а у тебя тоже да весь проэкт скачет вверх вниз когда я чет делаю?

неа
только текст порвало

ну это я)

та ничё
посмотри выше
справа
Т
надеюсь с кодом будет также
туда сюда и работает


ага
погнали вниз, return хочу показать





*/

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum] as const;

const connectors = [
  walletConnect({ projectId, metadata, showQrModal: false }),
  injected({ shimDisconnect: true }),
  coinbaseWallet({
    appName: metadata.name,
    appLogoUrl: metadata.icons[0],
  }),
  authConnector({
    options: { projectId },
    socials: ['google', 'x', 'github', 'discord', 'apple'],
    showWallets: true,
    email: true,
    walletFeatures: false,
  }),
];

const wagmiConfig = createConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
  },
  connectors,
});

function PrivateRoute({ children }: { children: ReactNode }) {
  const { isConnected } = useAccount();
  return isConnected ? <>{children}</> : <Navigate to="/" />;
}

function App() {
//я тут
/*


т
ут
 ааа
 тут хтмл код
 который отображается на странице
ещё есть роутер, он для того чтобы в одном компоненте выводить несколько разделов
например /signup это будет раздел на странице 
example.com/signup
я вижу тут рандомный набор букАв
path это путь
еще всякие провайдеры, это для разных функций, wagmi для подключения к кошельку, чтобы во всех компонентах был доступ к одной и той же сессии
 

слушай, а с табуляциями тут что? как работают? зачем?
я даже не знаю что такое табуляции ))
пробелы, табуляция это 4 пробела  
ааа
таб
оооо 
куда полетел
  + СВОЯ ИГРА, быстро м                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ы развиваемся
йоу, ты двигаешьсякапец мы продуктивные

лышишь с?войжи
так, я чет потерялся в пространстве в моменте
*дух Сталина ты здесь? Дух Сталина поговори со мной, ответь мне*/
  return (
    <React.StrictMode>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainComponent />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/chat"
                element={
                  <PrivateRoute>
                    <UserProvider>
                      <Chat />
                    </UserProvider>
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(<App />);
/*



нене я не про это
хочу return показать

*/