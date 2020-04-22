import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

type StyledDocumentProps = {
    styleTags: Array<React.ReactElement<{}>>;
}

/**
 * This is a pretty textbook Document hook for nextjs, enabling styled-components to render correctly
 * during SSR.
 */
export default class StyledDocument extends Document<StyledDocumentProps> {

    render() {
        return (
            <html>
                <Head>
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

StyledDocument.getInitialProps = async ({ renderPage }) => {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
        sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
}