export const useAppStore = defineStore('app', () => {
  const app = ref({
    redirectUrl: '/',
    authenticated: false,
    mustShow: true,
  });

  const isAuthenticated = computed(() => {
    return app.value.authenticated;
  });

  const showComponent = computed(() => app.value.mustShow);

  /**
   * Sets the app to an authenticated state.
   */
// sourcery skip: avoid-function-declarations-in-blocks
  function authenticate() {
    app.value.authenticated = true;
  };

  function updateShow(show: boolean) {
    app.value.mustShow = show;
  }

  return {
    app,
    isAuthenticated,
    authenticate,
    updateShow,
    showComponent,
  };
});
