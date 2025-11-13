import { Loading } from "@/components/Loading";
import { ProductList } from "@/components/ProductList";
import { SearchForm } from "@/components/SearchForm";
import { ProductState } from "@/store/products-list/productStore";

function ProductListPage(state: ProductState) {
  const { loading, products } = state;

  return /* html */ `
    ${SearchForm}
    <div class="mb-6">
        ${loading ? `${Loading}` : `${ProductList(products)}`}
    </div>
`;
}

export { ProductListPage };
