export default {
    name: 'ScrollIndicator',
    data() {
        return {
          progress: "0%"
        };
      },
      methods: {
        updateProgressIndicator() {
          const { documentElement, body } = document;
          let windowScroll = body.scrollTop || documentElement.scrollTop;
          let height = documentElement.scrollHeight - documentElement.clientHeight;
          this.progress = (windowScroll / height) * 100 + "%";
        }
      },
      mounted() {
        document.addEventListener("scroll", this.updateProgressIndicator);
      },
      unmounted() {
        document.removeEventListener("scroll", this.updateProgressIndicator);
      }
}