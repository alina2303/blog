import Script from "next/script"

const GScript = () => {
  console.log('runs')
  return (<>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-C08KXWYJ7P" />
    <Script id="google-analytics">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-C08KXWYJ7P');
        `}
    </Script>
  </>
  )
}

export default GScript
