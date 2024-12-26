export const quotesReducer = (state, action) => {
    switch (action.type) {
        case "add":
            const quote = {
                title: action.payload,
                likes: 0,
                id: crypto.randomUUID()
            };
            return [quote, ...state];
        case "delete":
            return state.filter((quote) => quote.id !== action.payload);
        case "like":
            return [...state].map((quote) => {
                return quote.id === action.payload ? { ...quote, likes: quote.likes + 1 } : quote
            });
        case "dislike":
            return [...state].map((quote) => {
                return quote.id === action.payload ? { ...quote, likes: quote.likes - 1 } : quote
            });
        case "sort":
            return [...state].sort((a, b) => b.likes - a.likes);
    }
};
