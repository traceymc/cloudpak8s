(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{tBVH:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c={},i={_frontmatter:c},s=r.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,o({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",null,"Configure LDAP Identity Provider"),Object(n.b)("p",null,"We will show you how to configre the LDAP Identity Provider (LDAP authentication)\nwith an OpenShift cluster.  "),Object(n.b)("h2",null,"Configure LDAP TLS Certificate Authority ConfigMap and Bind Password Secret"),Object(n.b)("p",null,"In our scenario, we will use the TLS for the LDAP protocol (a.k.a. LDAPS).\nWe will store the LDAP Server’s TLS certificate authority (CA) certificate in\na ConfigMap in the ",Object(n.b)("strong",{parentName:"p"},"openshift-config")," namespace. The LDAP Server which we will\nuse requires LDAP bind credentials to perform searches for user accounts. The\nbind user is configured as the ",Object(n.b)("strong",{parentName:"p"},"bindDN")," in the Identity Provider configuration.\nThe bind password must be stored as a secret using the ",Object(n.b)("strong",{parentName:"p"},"bindPassword")," data key.   "),Object(n.b)("p",null,"Create a ConfigMap as follows."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"$ oc --user=admin create configmap -n openshift-config <configmap_name> --from-file=ca.crt=<ca_file_name>\n")),Object(n.b)("p",null,"Here is the command output in our environment."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"$ oc --user=admin create configmap -n openshift-config opentlc-ipa-tls-ca --from-file=ca.crt=ipa-ca.crt\nconfigmap/opentlc-ipa-tls-ca created\n$ \n")),Object(n.b)("p",null,"Then, create a secret as follows."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"$ oc --user=admin create secret generic -n openshift-config <secret_name> --from-literal=bindPassword=<password>\n")),Object(n.b)("p",null,"Here is the command output in our environment."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"$ oc --user=admin create secret generic -n openshift-config opentlc-ipa-bind-password --from-literal=bindPassword='r3dh4t1!'\nsecret/opentlc-ipa-bind-password created\n$ \n")),Object(n.b)("h2",null,"Configure LDAP Identity Provider"),Object(n.b)("p",null,"Now, we have a ConfigMap and a secret for LDAP. The next step will configure\nthe identity provider. Edit the ",Object(n.b)("strong",{parentName:"p"},"oauth-config.yaml")," file and add the LDAP\nidentity provider configuration. Here are several fields you would use with\nyour LDAP authentication. It really depends on your LDAP server configuration.\nThis is just an example.  "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Field"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"ldap.attributes.email"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"User email address configured as mail")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"ldap.attributes.id"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"User identity in LDAP configured as dn")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"ldap.attributes.name"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"Name attribute configured as cn")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"ldap.attributes.preferredUsername"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"Preferred username configured as uid")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"ldap.bindDN"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"LDAP bind user DN for user search")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"ldap.bindPassword.name"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"OpenShift secret name configured with bind password for LDAP user search bind")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"ldap.ca.name"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"OpenShift ConfigMap name configured with ca.crt for your LDAP Server")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"ldap.insecure"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"Configured for secure communication with TLS encryption")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"ldap.url"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"LDAP user search URL with base DN location for user accounts, username attribute set to uid, searching the LDAP subtree under the base DN, and filter to restrict users to only those that are member of specific group")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"name"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"Identity provider name appears on the OpenShift Web Console")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"type"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),"LDAP value indicates LDAP identity provider")))),Object(n.b)("p",null,"Here is an example of the ",Object(n.b)("strong",{parentName:"p"},"oauth-config.yaml")," file with an LDAP identity\nprovider."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),'apiVersion: config.openshift.io/v1\nkind: OAuth\nmetadata:\n  name: cluster\nspec:\n  identityProviders:\n  - name: Local Password\n    mappingMethod: claim\n    type: HTPasswd\n    htpasswd:\n      fileData:\n        name: htpasswd\n  - name: OPENTLC LDAP\n    challenge: true\n    login: true\n    mappingMethod: claim\n    type: LDAP\n    ldap:\n      attributes:\n        email: ["mail"]\n        id: ["dn"]\n        name: ["cn"]\n        preferredUsername: ["uid"]\n      bindDN: "uid=admin,cn=users,cn=accounts,dc=shared,dc=example,dc=opentlc,dc=com"\n      bindPassword:\n        name: opentlc-ipa-bind-password\n      insecure: false\n      ca:\n        name: opentlc-ipa-tls-ca\n      url: "ldaps://ipa.shared.example.opentlc.com:636/cn=users,cn=accounts,dc=shared,dc=example,dc=opentlc,dc=com?uid?sub?(memberOf=cn=ocp-users,cn=groups,cn=accounts,dc=shared,dc=example,dc=opentlc,dc=com)" \n\n')),Object(n.b)("p",null,"Once you create (or update) the yaml file, replace the OAuth configuration\nwith the LDAP settings in the ",Object(n.b)("strong",{parentName:"p"},"oauth-config.yaml")," file."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"$ oc --user=admin replace -f oauth-config.yaml\noauth.config.openshift.io/cluster replaced\n$ \n")),Object(n.b)("p",null,"In our scenario, we now have both Htpasswd and LDAP for the authentication.\nSince we have not logged in with the users via LDAP authentication yet, at\nthis moment, we don’t see those users with the ",Object(n.b)("inlineCode",{parentName:"p"},"oc get users")," command. We only\nsee users who have logged in before with the Htpasswd (Local Password) identity\nprovider. In other words, until we have logged in with those users, those users\nwon’t show up."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"$ oc --user=admin get users\nNAME    UID                                    FULL NAME   IDENTITIES\nalice   962fdf1e-1848-11ea-a3e1-0a580a80011d               Local Password:alice\nbob     d0d4f046-1845-11ea-a3e1-0a580a80011d               Local Password:bob\n$ \n$ oc --user=admin get identities\nNAME                   IDP NAME         IDP USER NAME   USER NAME   USER UID\nLocal Password:alice   Local Password   alice           alice       962fdf1e-1848-11ea-a3e1-0a580a80011d\nLocal Password:bob     Local Password   bob             bob         d0d4f046-1845-11ea-a3e1-0a580a80011d\n$ \n")),Object(n.b)("h2",null,"Test LDAP Identity Provider"),Object(n.b)("p",null,"Access the OpenShift Console and you see three options for ",Object(n.b)("strong",{parentName:"p"},"Log in with…"),"\nas shown in below."),Object(n.b)("img",{src:"/assets/img/day2/ldap_1.png",alt:"ldap_1"}),Object(n.b)("p",null,"For LDAP authentication, click on ",Object(n.b)("strong",{parentName:"p"},"OPENTLC LDAP")," on the list. Note that",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("strong",{parentName:"p"},"OPENTLC LDAP")," is configured for the\n",Object(n.b)("strong",{parentName:"p"},"spec.identityProviders.name")," in the ",Object(n.b)("strong",{parentName:"p"},"oauth-config.yaml")," file in the\nprevious step. Next, we see the following page."),Object(n.b)("img",{src:"/assets/img/day2/ldap_2.png",alt:"ldap_2"}),Object(n.b)("p",null,"Then type the user and its password for the LDAP authentication.  "),Object(n.b)("p",null,"In our case, two users named ",Object(n.b)("strong",{parentName:"p"},"andrew")," and ",Object(n.b)("strong",{parentName:"p"},"karla")," successfully logged in\nvia LDAP authentication. Check to see if those users are listed with\nthe ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," commands."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),"$ oc --user=admin get users\nNAME     UID                                    FULL NAME        IDENTITIES\nalice    962fdf1e-1848-11ea-a3e1-0a580a80011d                    Local Password:alice\nandrew   b8387e3f-1a70-11ea-abd6-0a580a80019a   andrew OSEUser   OPENTLC LDAP:dWlkPWFuZHJldyxjbj11c2Vycyxjbj1hY2NvdW50cyxkYz1zaGFyZWQsZGM9ZXhhbXBsZSxkYz1vcGVudGxjLGRjPWNvbQ\nbob      d0d4f046-1845-11ea-a3e1-0a580a80011d                    Local Password:bob\nkarla    2075f2ee-1a72-11ea-abd6-0a580a80019a   karla OSEUser    OPENTLC LDAP:dWlkPWthcmxhLGNuPXVzZXJzLGNuPWFjY291bnRzLGRjPXNoYXJlZCxkYz1leGFtcGxlLGRjPW9wZW50bGMsZGM9Y29t\n$ \n$ oc --user=admin get identities\nNAME                                                                                                          IDP NAME         IDP USER NAME                                                                                    USER NAME   USER UID\nLocal Password:alice                                                                                          Local Password   alice                                                                                            alice       962fdf1e-1848-11ea-a3e1-0a580a80011d\nLocal Password:bob                                                                                            Local Password   bob                                                                                              bob         d0d4f046-1845-11ea-a3e1-0a580a80011d\nOPENTLC LDAP:dWlkPWFuZHJldyxjbj11c2Vycyxjbj1hY2NvdW50cyxkYz1zaGFyZWQsZGM9ZXhhbXBsZSxkYz1vcGVudGxjLGRjPWNvbQ   OPENTLC LDAP     dWlkPWFuZHJldyxjbj11c2Vycyxjbj1hY2NvdW50cyxkYz1zaGFyZWQsZGM9ZXhhbXBsZSxkYz1vcGVudGxjLGRjPWNvbQ   andrew      b8387e3f-1a70-11ea-abd6-0a580a80019a\nOPENTLC LDAP:dWlkPWthcmxhLGNuPXVzZXJzLGNuPWFjY291bnRzLGRjPXNoYXJlZCxkYz1leGFtcGxlLGRjPW9wZW50bGMsZGM9Y29t     OPENTLC LDAP     dWlkPWthcmxhLGNuPXVzZXJzLGNuPWFjY291bnRzLGRjPXNoYXJlZCxkYz1leGFtcGxlLGRjPW9wZW50bGMsZGM9Y29t     karla       2075f2ee-1a72-11ea-abd6-0a580a80019a\n$\n")),Object(n.b)("p",null,"As you see above, ",Object(n.b)("strong",{parentName:"p"},"andrew")," and ",Object(n.b)("strong",{parentName:"p"},"karla")," are using the LDAP identity\nprovider for their authentication."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-user-user-ldap-index-mdx-394bc9e5db931080c449.js.map