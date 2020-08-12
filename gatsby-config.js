module.exports = {
  siteMetadata: {
    title: 'IBM Cloud Pak Playbook',
    description: 'IBM Cloud Pak Playbook',
    keywords: 'cloudpak,implementation,openshift,ibm,cloud,pack,cloud pak,cloudpack,integration,automation,security,multicloud,multi-cloud,mcm,applications,cp4apps,cp4int,cp4integration,cp4i,cp4a,cp4auto,cp4s,cp4sec,cp4mcm',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149377589-5",
        head: true
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://github.com/ibm-cloud-architecture/cloudpak8s',
          subDirectory: '/',
        },
      },
    },
  ],
};
