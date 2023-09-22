import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          {/* Netlify Location Form  */}
          <form data-netlify="true" hidden name="location" netlify-honeypot="bot-field">
            <input type="text" name="firstName" />
            <input type="text" name="mob" />
            <input type="email" name="email" />
            <input type="text" name="company" />
            <input type="textarea" name="msg" />
            <input type="submit" />
          </form>

          {/* Netlify Franchise Form  */}
          <form data-netlify="true" hidden name="franchise" netlify-honeypot="bot-field">
            <input type="text" name="name" />
            <input type="text" name="mob" />
            <input type="email" name="email" />
            <input type="text" name="company" />
            <input type="text" name="city" />
            <input type="text" name="country" />
            <input type="text" name="showroom" />
            <input type="submit" />
          </form>

          {/* Netlify Home Newsletter Form  */}
          <form data-netlify="true" hidden name="newsletter" netlify-honeypot="bot-field">
            <input type="email" name="email" />
          </form>

          {/* Netlify Job-Listing Form  */}
          <form data-netlify="true" hidden name="jobListing" netlify-honeypot="bot-field">
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="text" name="mob" />
            <input type="text" name="position" />
            <input type="radio2" name="radio2" />
            <input type="file" name="file" />
            <input type="submit" />
          </form>

          {/* Netlify Newsletter Form  */}
          {/* <form data-netlify="true" hidden name="newsletter" netlify-honeypot="bot-field">
            <input type="email" name="email" />
            <input type="submit" />
          </form> */}


          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument