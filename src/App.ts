import { AppContents } from "./pages";
import createRouter from "./router";

export default function App() {
  const $root = document.querySelector("#root");

  const pages = {
    home: () => ($root.innerHTML = AppContents({ children: `home입니다` })),
    products: () => ($root.innerHTML = AppContents({ children: `products 입니다` })),
  };
  const router = createRouter();

  router.addRoute("#/", pages.home).addRoute("#/products", pages.products).start();
}
