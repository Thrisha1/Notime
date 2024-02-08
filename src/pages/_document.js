import Document, { Head, Html, Main, NextScript } from "next/document";


class AppDocument extends Document {
  static async getInitialProps(context) {
    const originalRenderPage = context.renderPage;

    context.renderPage = () => 
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(context);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
        {/* <script>
            {`
              window.embeddedChatbotConfig = {
                chatbotId: process.env.CHATBOT_ID,
                domain: process.env.CHATBOT_DOMAIN,
              };              
            `}
          </script>
          <script
            src="https://www.chatbase.co/embed.min.js"
            chatbotId="My4J6sb8cbXqIFZmPkrMO"
            domain="www.chatbase.co"
            defer
          ></script> */}
          <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
