import axios from "axios"

export const storeModule = {
    state: () => ({
        products: [],
        isFetching: false,
        selectedSort: "",
        searchQuery: "",
        limit: 20,
        sortOptions: [
            {value: "", name: "Standard"},
            {value: "price", name: "Price"},
            {value: "rate", name: "Rating"},
        ]
    }),
    getters: {
        sortedProducts(state) {
            return [...state.products].sort((a, b) => {
                return a[state.selectedSort] - b[state.selectedSort]
            })
        },
        searchProducts(state, getters) {
            return getters.sortedProducts.filter(product => product.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        },
    },
    mutations: {
        setProducts(state, products) {
            state.products = products
        },
        setFetching(state, bool) {
            state.isFetching = bool
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
    },
    actions: {
        async fetchProducts({state, commit}) {
            commit("setFetching", true)
            try {
                const response = await axios.get("https://fakestoreapi.com/products", {
                    params: {
                        limit: state.limit,
                    }
                })
                commit("setProducts", response.data.map((elem) => {
                    return {...elem, rate: elem.rating.rate};
                }))
            } catch (error) {
                console.log(error)
            } finally {
                commit("setFetching", false)
            }
        },
    },
    namespaced: true,
}