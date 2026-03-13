export function Head() {
  return(
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Titosy Fitia",
              "jobTitle": "Développeur Fullstack",
              "url": process.env.NEXT_PUBLIC_SITE_URL,
              "sameAs": [
                "https://www.linkedin.com/in/titosy-fitia-365686321/", 
                "https://github.com/Titosy-fit"
              ],
              "skills": ["React", "Next.js", "TypeScript", "Java", "PHP", "Spring", "Node", "C#"]
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Titosy Fitia",
              "url": process.env.NEXT_PUBLIC_SITE_URL,
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/static/images/titosy-logo.png`
            }
          ])
        }}
      />

    </>
  );
}