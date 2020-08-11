export function showNotification(isShow: (show: boolean) => void) {
  isShow(true);
  setTimeout(() => {
    isShow(false);
  }, 1500);
}
