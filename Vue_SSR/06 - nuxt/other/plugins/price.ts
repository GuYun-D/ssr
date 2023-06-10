export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      formPrice: (price: number) => {
        return "￥" + price;
      },
    },
  };
});
