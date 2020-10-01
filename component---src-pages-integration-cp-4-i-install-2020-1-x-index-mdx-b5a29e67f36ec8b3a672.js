(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"FG5+":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return h}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),o=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},s=l("InlineNotification"),c=l("PageDescription"),b=l("AnchorLinks"),p=l("AnchorLink"),d=l("Tabs"),m=l("Tab"),u={_frontmatter:i},g=o.a;function h(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(g,r({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s,{mdxType:"InlineNotification"},Object(a.b)("p",null,"This page provides installation guidance for Cloud Pak for Integration v2020.1.x.  Please see our ",Object(a.b)("a",r({parentName:"p"},{href:"cp4i-install-latest"}),"latest update")," for the v2020.2 is out for Cloud Pak for Ingegration featuring Operators.")),Object(a.b)(c,{mdxType:"PageDescription"},Object(a.b)("p",null,"Installation of the Cloud Pak for Integration 2020.1.x\nrequires OpenShift Cloud Platform (OCP) 4.2 / 4.3.",Object(a.b)("br",{parentName:"p"}),"\n","This guide assumes you are installing into an OCP environment\nthat meets this criteria.  Both online and offline\ninstallation options are included. Review the ",Object(a.b)("strong",{parentName:"p"},"Requirements"),"\nsection to determine your specific environment needs.")),Object(a.b)(b,{mdxType:"AnchorLinks"},Object(a.b)(p,{mdxType:"AnchorLink"},"Configuring Your Installation"),Object(a.b)(p,{mdxType:"AnchorLink"},"Offline Installation"),Object(a.b)(p,{mdxType:"AnchorLink"},"Online Installation"),Object(a.b)(p,{mdxType:"AnchorLink"},"Uninstall")),Object(a.b)(s,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Update:")," This document was recently updated to include\nCloud Pak for Integration 2020.1.1.  Not all of these\ninstallation techniques will work with other versions.",Object(a.b)("br",{parentName:"p"}),"\n","If you need specific instrucations for older versions please\nreference the\n",Object(a.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_20.1/install/install.html"}),"Knowledge Center"),"\ndocumentation. Use the ",Object(a.b)("strong",{parentName:"p"},"Change version or product")," tab to\nswitch to an older version.")),Object(a.b)("h2",null,"Prerequisites"),Object(a.b)("p",null,"This document does not describe how to install or configure\nthe underlying OpenShift Cloud Platform (OCP). Prior to\ninstalling ensure you have a working OCP cluster with the\nnecessary capacity available."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Check the ",Object(a.b)("strong",{parentName:"li"},"Requirements")," section to ensure proper cluster sizing"),Object(a.b)("li",{parentName:"ul"},"For ",Object(a.b)("strong",{parentName:"li"},"offline")," installs ensure you have downloaded the Cloud Pak for Integration Passport Advantage Archive (PPA) file for offline deployments (see requirements) and it is available from your installation server"),Object(a.b)("li",{parentName:"ul"},"All ",Object(a.b)("strong",{parentName:"li"},"offline")," installation will require the docker client install on the installation server"),Object(a.b)("li",{parentName:"ul"},"For ",Object(a.b)("strong",{parentName:"li"},"online installs")," make sure you have an entitlement key from ",Object(a.b)("a",r({parentName:"li"},{href:"https://myibm.ibm.com/products-services/containerlibrary"}),"MyIBM Container Software Library")," to access the IBM Entitled Docker Registry"),Object(a.b)("li",{parentName:"ul"},"For ",Object(a.b)("strong",{parentName:"li"},"online")," installs ensure you have downloaded the Cloud Pak for Integration Passport Advantage Archive (PPA) file for online deployments (see requirements) and it is available from your installation server"),Object(a.b)("li",{parentName:"ul"},"All installation types require the ",Object(a.b)("a",r({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/cli_reference/openshift_cli/getting-started-cli.html"}),"OpenShift Container Platform CLI")," be configured on your installation server"),Object(a.b)("li",{parentName:"ul"},"Offline installation will require the docker client install on the installation server")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Common Passport Advantage Part Numbers")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CC644EN")," - IBM Cloud Pak For Integration 2020.1.1 On Openshift For Linux English"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"CC645EN")," - IBM Cloud Pak For Integration 2020.1.1 On Openshift For Linux English Online Installer")),Object(a.b)("h2",null,"Configuring Your Installation"),Object(a.b)("p",null,"The installation of the Cloud Pak is configured via the\nsettings in your ",Object(a.b)("strong",{parentName:"p"},"config.yaml"),".  As part of either the\n",Object(a.b)("strong",{parentName:"p"},"online")," or ",Object(a.b)("strong",{parentName:"p"},"offline")," or air-gap install, this file will\nbe made available to you via the installation package."),Object(a.b)("p",null,"Below is an example of the ",Object(a.b)("strong",{parentName:"p"},"config.yaml")," extracted from\nthe inception image."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"# Licensed Materials - Property of IBM\n# IBM Cloud Pak for Integration\n# @ Copyright IBM Corp. 2019 All Rights Reserved\n# US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.\n\n---\n\n# Nodes selected to run common services components.\n#\n# The value of the master, proxy, and management parameters is an array,\n# by providing multiple nodes the common services will be configured in\n# a high availability configuration.\n#\n# It is recommended to install the components onto one or more openshift\n# worker nodes. The master, proxy, and management components can all share\n# the same node or set of nodes.\ncluster_nodes:\n  master:\n    - <your-openshift-dedicated-node-to-deploy-master-components>\n  proxy:\n    - <your-openshift-dedicated-node-to-deploy-proxy-components>\n  management:\n    - <your-openshift-dedicated-node-to-deploy-management-components>\n\n# Storage Class\nstorage_class: <storage class available in OpenShift>\n\n## You can set different storage class for logging.\n## By default it will use the value of storage_class.\n# elasticsearch_storage_class:\n\n## If you are installing on ROKS environment please update following settings\n## roks_enabled: set this to true\n## roks_url: Openshift public service endpoint URL\n## roks_user_prefix: User prefix used for users enabled on ROKS, Default value is 'IAM#'.\n## You can get users information from command 'oc get users'.\n\n# default_admin_password:\n# password_rules:\n\n## You can disable following services if they are not needed\nmanagement_services:\n  # Common services\n  iam-policy-controller: enabled\n  metering: enabled\n  licensing: disabled\n  monitoring: enabled\n  nginx-ingress: enabled\n  common-web-ui: enabled\n  catalog-ui: enabled\n  mcm-kui: enabled\n  logging: enabled\n  audit-logging: disabled\n  system-healthcheck-service: disabled\n  multitenancy-enforcement: disabled\n  configmap-watcher: disabled\n\n# This section installs the IBM Cloud Pak for Integration Platform Navigator.\n# The navigator will be available after installation at:\n# https://ibm-icp4i-prod-integration.some-openshift-apps-domain/\narchive_addons:\n  icp4i:\n    namespace: integration\n    repo: local-charts\n    path: icp4icontent/IBM-Cloud-Pak-for-Integration-3.1.0.tgz\n\n    charts:\n      - name: ibm-icp4i-prod\n        values: {}\n")),Object(a.b)("p",null,"Each section is described below."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"cluster_nodes")," - This section describes which nodes in your cluster used to run Common Services. These components are split into three sections master, proxy and management. The number of nodes you specify in each section determines the number of nodes that the work can be split across and will determine the potential level resiliency.  The most common best-practice approach to to specify the same three nodes for each of these.  The values supplied should be chosen from the context of the results of ",Object(a.b)("inlineCode",{parentName:"p"},"oc get nodes"),".  You must include master nodes in this list but you ",Object(a.b)("strong",{parentName:"p"},"do not include your OCP master nodes"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"storage_class")," - The storage class is the dynamic storage class that the installer will use when creating persistent volumes. The Cloud Pak for Integration base installation requires a ",Object(a.b)("inlineCode",{parentName:"p"},"block")," storage provider. Use ",Object(a.b)("inlineCode",{parentName:"p"},"oc get sc")," to view your available storage classes."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"default_admin_password")," - The default_admin_password is the password that will be assigned the default ",Object(a.b)("inlineCode",{parentName:"p"},"admin")," user to authenticate to the Cloud Pak for Integration Navigator. Match the password format requirements for your organization.  The below stanza provides a very open policy.  Specify the default password for the ",Object(a.b)("inlineCode",{parentName:"p"},"admin")," user."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"default_admin_password: your_password_here\npassword_rules:\n- '(.*)'\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"management_services")," - The management_service section allows you to enable or disable some the Common Services. The default values are generally sufficient.  Additional services may require additional capacity."),Object(a.b)("h2",null,"Offline Installation"),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(a.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAByElEQVQoz21Sz0sbYRB98+1m16Rx4yZN0tAaD9FgJMVDKCQExHqqVK9i6a3+AYIXqVDBk6Dij5i2SdSkaYqXHvtPePDk/1Pom92l2OrAY779ZubNzPsWQCcBdH36p0CPZ6DR+CEinQxwkQe+ZI3pPgPOXI3xzLxOljVJBNYhupEP7OsLftSJORZlCgVIeN+bdN1WNZcbTALtzOrqr8TGxieStHPG9HIkSYR56/jP7ixgxODviAixnZ2PfqUCs7e3Er+5GYzr5ebmh+Rw2CbhT+M458xvxUV6Nh6xOKEBN5XyLb0YjUbJen1RV/SItON4SjqhG4uclEX6NcsacKNTXwSs8eyIQ2GNhbyukjn3O9l2zF1YWPr7XSpp8WK2VjuY2to6zOgwzEnT6/pPiEBX7VxRRsX1NXB7u2ZFHJqk06XUizhaEMSGw6odDiDUGCvEG6KmsRniLQPTql+xuJ1fXtYHek8Co834wihy24JlgVO9y5fLR7PNZqukk3meHWOtNn5+X8NAKmNggO8k7r6mn9IGDyXffwn0G8DVK5FdP9LtH0uEo8dUSxJecq3P/P++ueF6tjZkzIse73iWDecJNj4lxqO4aL37B1OaRhrDAv0cAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Offline Install Process",title:"Offline Install Process",src:"/static/d4774fabc6c07bf732526a3328788042/3cbba/offline-install-flow.png",srcSet:["/static/d4774fabc6c07bf732526a3328788042/7fc1e/offline-install-flow.png 288w","/static/d4774fabc6c07bf732526a3328788042/a5df1/offline-install-flow.png 576w","/static/d4774fabc6c07bf732526a3328788042/3cbba/offline-install-flow.png 1152w","/static/d4774fabc6c07bf732526a3328788042/0b124/offline-install-flow.png 1728w","/static/d4774fabc6c07bf732526a3328788042/4ea69/offline-install-flow.png 2304w","/static/d4774fabc6c07bf732526a3328788042/cadee/offline-install-flow.png 2724w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(a.b)("p",null,"This installation requires that you have downloaded the\n",Object(a.b)("strong",{parentName:"p"},"offline")," installation package and it is available from\nyour installation server that has both Docker and the Open\nContainer CLI installed."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1.")," From your installation server command line authenticate\nto the OpenShift Cloud Platform (OCP) cluster where you would\nlike to install the Cloud Pak (the connection token can be\ncopied from the OpenShift Console UI)"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"oc login --token=your_token_here --server=your_server_URL_here\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"2.")," Create a working directory and move the PPA archive\npackage into that directory."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"mkdir ibm-cp-int\nmv ibm-cp-int-2020.1.1-offline.tgz ibm-cp-int/ibm-cp-int-2020.1.1-offline.tgz\ncd ibm-cp-int\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"3.")," Extract the package and load the archive ( this may\ntake ~10-20 minutes)"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"tar xvf ibm-cp-int-2020.1.1-offline.tgz\ntar xf installer_files/cluster/images/common-services-boeblingen-x86_64.tar.gz -O | docker load\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"4.")," Change to the cluster directory and create the\nkubeconfig file that the installation will use to connect to\nyour OCP cluster."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"cd installer_files/cluster\noc config view --minify=true --flatten=true > kubeconfig\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"5.")," Edit the ",Object(a.b)("strong",{parentName:"p"},"config.yaml")," and update the ",Object(a.b)("strong",{parentName:"p"},"cluster_node")," section adding the names of your cluster compute / worker nodes to deploy the Common Services to. Remember, the best-practice is to use the same three nodes for each master, proxy and management.  Use the exact node names from the ",Object(a.b)("inlineCode",{parentName:"p"},"oc get nodes")," command."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"6.")," Add the storage class for your cluster in the ",Object(a.b)("strong",{parentName:"p"},"storage_class")," field. The storage class must be a block storage provider. Use the exact node names from the ",Object(a.b)("inlineCode",{parentName:"p"},"oc get sc")," command."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"7.")," Update the ",Object(a.b)("strong",{parentName:"p"},"default_admin_password")," field with a suitable password"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"8.")," Define the ",Object(a.b)("strong",{parentName:"p"},"management_services"),"  appropriate to your install.  (The default is sufficient for many deployments.)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"9.")," Start the installation (this can run for ~30-45min).  The below command adds verbose logging and streams the results to an output file that can be referenced later."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"sudo docker run -t --net=host -e LICENSE=accept -v $(pwd):/installer/cluster:z -v /var/run:/var/run:z -v /etc/docker:/etc/docker:z --security-opt label:disable cp.icr.io/cp/icp-foundation/icp-inception:3.2.4 addon -vvv | tee output.txt\n")),Object(a.b)(s,{mdxType:"InlineNotification"},Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," The command above will fail if you have spaces in your directory path. Run ",Object(a.b)("inlineCode",{parentName:"p"},"pwd")," to verify your path and remove spaces, then re-run installation command.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"10.")," Connect to the IBM Cloud Pak for Integration UI to verify the installation. Use the ",Object(a.b)("inlineCode",{parentName:"p"},"oc get routes -A | grep integration")," command to find the URL.  The URL will take a form similar to the following ibm-icp4i-prod-integration.apps.your-cluster-domain.com"),Object(a.b)("h2",null,"Online Installation"),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(a.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABe0lEQVQoz1VRyy4EURA91bf7tp7b09ow4zlDvDKZeEQMySSS8Q8sPNY2fIEVYsEGETH0YMOGjX+w9wvWPqOdO01Qyem6Xc9TVQBuI6KfKIl8CCgiSQlIysDNMNAqWZtSSTffReApEIFL0wgxQ1QIjV+5Y1J7Hrinbvq1GhzgqjA9fTMxPv4aNRpvwfHxRQychJ7XjqPoxRYTrXOx1v4cUB4W2QqAZw+4dDuEvtGRg4PTeHsb7tpa0ays+F2FAvyNjSoT2nlilMwHgSOdpiljWz3AWVXkmoSSqWxagMG7cJwoZ3/S9J3o1M5nvrwdh6z3BsIwqS0uPo4BYaA1ckpp5rgh0B/8GVm4G5SMMUzcLDabralK5dDuLVRK2UCtlLHaZyP5/BzzrI95s9RNok50ZbXWO98qsZoxepjkWAtcPBfdyGWLd4aoOeZy3Nd3Uq7XLyeA3sgYsLDwcMLinvuHoa3uSKZnHWPOf+we/sn+AA+3xKZsuNP93/d75S+WkT2iDJqhgwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Online Install Process",title:"Online Install Process",src:"/static/bc133c46bdad5e86d8f1db75b452a56d/3cbba/online-install-flow.png",srcSet:["/static/bc133c46bdad5e86d8f1db75b452a56d/7fc1e/online-install-flow.png 288w","/static/bc133c46bdad5e86d8f1db75b452a56d/a5df1/online-install-flow.png 576w","/static/bc133c46bdad5e86d8f1db75b452a56d/3cbba/online-install-flow.png 1152w","/static/bc133c46bdad5e86d8f1db75b452a56d/0b124/online-install-flow.png 1728w","/static/bc133c46bdad5e86d8f1db75b452a56d/4ea69/online-install-flow.png 2304w","/static/bc133c46bdad5e86d8f1db75b452a56d/0fff2/online-install-flow.png 3124w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(a.b)("p",null,"This installation requires that you have downloaded the ",Object(a.b)("strong",{parentName:"p"},"online")," installation package and it is available from your installation server (this may be your laptop) that has both Docker and the Open Container CLI installed."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1.")," Log in to ",Object(a.b)("a",r({parentName:"p"},{href:"https://myibm.ibm.com/products-services/containerlibrary"}),"MyIBM Container Software Library")," with the IBMid and password that are associated with the entitled software.  In the Entitlement Keys section, copy the entitlement key. This key will be used in future steps."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"2.")," From your installation server command line authenticate to the OpenShift Cloud Platform (OCP) cluster where you would like to install the Cloud Pak (the connection token can be copied from the OpenShift Console UI)"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"oc login --token=your_token_here --server=your_server_URL_here\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"3.")," Verify that you are able to login to the public docker repo using your entitlement key.  With some Cloud Pak installations (non-Integration), you would pull your inception image from this registry.  For Integration you downloaded that image from PPA.  This step simply verifies your entitlement key from above is valid."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"docker login cp.icr.io --username cp --password <your entitlement key>\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"4.")," Create a working directory and move the PPA archive (online installation) package into that directory."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"mkdir ibm-cp-int\nmv ibm-cp-int-2020.1.1-online.tgz ibm-cp-int/ibm-cp-int-2020.1.1-online.tgz\ncd ibm-cp-int\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"5.")," Extract the package and load the archive with Docker"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"tar xvf ibm-cp-int-2020.1.1-online.tgz\nsudo docker load -i installer_files/cluster/images/icp-inception-3.2.4.tgz\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"4.")," Change to the cluster directory and create the kubeconfig file that the installation will use to connect to your OCP cluster"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"cd installer_files/cluster\noc config view --minify=true --flatten=true > kubeconfig\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"5.")," Edit the ",Object(a.b)("strong",{parentName:"p"},"config.yaml")," and update the ",Object(a.b)("strong",{parentName:"p"},"cluster_node")," section adding the names of your cluster compute / worker nodes to deploy the Common Services to. Remember, the best-practice is to use the same three nodes for each master, proxy and management.  Use the exact node names from the ",Object(a.b)("inlineCode",{parentName:"p"},"oc get nodes")," command."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"6.")," Continue in the ",Object(a.b)("strong",{parentName:"p"},"config.yaml")," and add the storage class for your cluster in the ",Object(a.b)("strong",{parentName:"p"},"storage_class")," field. The storage class must be a block storage provider. Use the exact node names from the ",Object(a.b)("inlineCode",{parentName:"p"},"oc get sc")," command."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"7.")," Continue in the ",Object(a.b)("strong",{parentName:"p"},"config.yaml")," and update the ",Object(a.b)("strong",{parentName:"p"},"default_admin_password")," field with a suitable password"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"8.")," Also in the ",Object(a.b)("strong",{parentName:"p"},"config.yaml")," include the required cloud and IBM entitled registry settings"),Object(a.b)(d,{mdxType:"Tabs"},Object(a.b)(m,{label:"Deploy to ROKS",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),'roks_enabled: true\nroks_url: <your OCP cluster API server URL from OC login command>\nroks_user_prefix: "IAM#"\n\nprivate_registry_enabled: true\nimage_repo: cp.icr.io/cp/icp-foundation\ndocker_username: cp\ndocker_password: your_entitlement_key_here\n'))),Object(a.b)(m,{label:"Non-ROKS",mdxType:"Tab"},Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"private_registry_enabled: true\nimage_repo: cp.icr.io/cp/icp-foundation\ndocker_username: cp\ndocker_password: your_entitlement_key_here\n")))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"9.")," Define the ",Object(a.b)("strong",{parentName:"p"},"management_services"),"  appropriate to your install.  (The default is sufficient for many deployments.)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"10.")," Start the installation (this can run for ~30-45min).  The below command adds verbose logging and streams the results to an output file that can be referenced later."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"sudo docker run -t --net=host -e LICENSE=accept -v $(pwd):/installer/cluster:z -v /var/run:/var/run:z -v /etc/docker:/etc/docker:z --security-opt label:disable ibmcom/icp-inception-amd64:3.2.4 addon -vvv | tee output.txt\n")),Object(a.b)("h2",null,"Uninstall"),Object(a.b)("p",null,"Run the following command to uninstall the Cloud Pak for Integration"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-bash"}),"sudo docker run -t --net=host -e LICENSE=accept -v $(pwd):/installer/cluster:z -v /var/run:/var/run:z -v /etc/docker:/etc/docker:z --security-opt label:disable ibmcom/icp-inception-amd64:3.2.4 uninstall-addon -vvv | tee output.txt\n")),Object(a.b)("h2",null,"Additional Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{href:"https://www.ibm.com/support/knowledgecenter/SSGT7J_20.1/install/install.html"},"Knowledge Center - Cloud Pak for Integration 2020.1.1 Installation"))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integration-cp-4-i-install-2020-1-x-index-mdx-b5a29e67f36ec8b3a672.js.map