(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{slWF:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},l={_frontmatter:r},s=i.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(s,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Capacity Management Overview"),Object(n.b)("p",null,"Capacity is the provision to handle a simultaneous planned and unplanned outage, without making the user experience unacceptable performance; this often results in an “N + 2” configuration, where peak traffic can be handled by N instances (possibly in degraded mode) while the largest 2 instances are unavailable."),Object(n.b)("p",null,"While simple High Availability makes sure that the service is ",Object(n.b)("em",{parentName:"p"},"available"),", Capacity Management makes sure that it ",Object(n.b)("em",{parentName:"p"},"performs")," well.\nWhile ",Object(n.b)("a",o({parentName:"p"},{href:"../Scalability"}),"Scalability")," ensures that the service can scale out, Capacity Management tells us when it needs to (and how much)."),Object(n.b)("p",null,"Some basic pattens (or best practices) for Capacity Management include:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Validate prior demand forecasts against reality until they consistently match. Divergence implies unstable forecasting, inefficient provisioning, and risk of a capacity shortfall."),Object(n.b)("li",{parentName:"ul"},"Use load testing rather than tradition to establish the resource-to-capacity ratio: a cluster of X machines could handle Y queries per second three months ago, but can it still do so given changes to the system?"),Object(n.b)("li",{parentName:"ul"},"Don’t mistake Day-1 load for steady-state load. Launches often attract more traffic, while they’re also the time you especially want to put the product’s best foot forward. "),Object(n.b)("li",{parentName:"ul"},"Plan ahead to make sure that your existing infrastructure can handle expected future loads (future deployments, seasonal loads)"),Object(n.b)("li",{parentName:"ul"},"Make sure that your Capacity Management methodology matches your deployment plans. For example, if you do blue/green deployment you need to have capacity for unexpected issues in both the blue and green environment.  ")),Object(n.b)("p",null,"Capacity Management maps very well to the Golden Signal called “Saturation”, which is commonly defined as:"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"How “full” your service is. A measure of your system fraction, emphasizing the resources that are most constrained (e.g., in a memory-constrained system, show memory; in an I/O-constrained system, show I/O). Note that many systems degrade in performance before they achieve 100% utilization, so having a utilization target is essential.")),Object(n.b)("p",null,"(from the ",Object(n.b)("a",o({parentName:"p"},{href:"https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/"}),"Google SRE book"),")"),Object(n.b)("p",null,"Measuring your service’s Saturation (whether it be an infrastructure metric such as memory or application metric such as queue throughput) will give you an idea of how close you are to filling your capacity."),Object(n.b)("p",null,"In a well configured OpenShift cluster, with spare capacity, we would expect to have a setup resembling the following, with the service distibuted evenly across the hosts, and with the capacity for 2 hosts to fail without affecting the system. For simplicity of this discussion, let us assume a node can run up to 4 pods."),Object(n.b)("img",{src:"/assets/img/day2/capacity_00_nodes+2.png",alt:"Cluster with N+2 capacity",width:"500",align:"center"}),Object(n.b)("p",null,"In the following example, we have deployed a new version of the service in the cluster (coloured green) and the cluster has spread the pods across the available hosts: "),Object(n.b)("img",{src:"/assets/img/day2/capacity_01_nodes+bluegreen.png",alt:"Cluster with blue-green deployment",width:"500",align:"center"}),Object(n.b)("p",null,"The cluster is currently functioning with N+1 capacity, since we only have 1 spare server."),Object(n.b)("p",null,"If we now experience a failure in one of the hosts, then the cluster will reach full saturation, without capacity for any futher work and no capability to handle any more failures. While from a user’s perspective the cluster and the services running on the cluster are fully functional, there is a high risk that any further failure will cause customer affecting incidents:"),Object(n.b)("img",{src:"/assets/img/day2/capacity_02_nodes+bluegreen+failure.png",alt:"Fully saturated cluster",width:"500",align:"center"}),Object(n.b)("p",null,"At this point the best course of action is to immediately scale out the cluster and add an addition node to handle unexpected failures in the existing nodes. This is above and beyond the actions required to solve the problem with the failed node, of course. "),Object(n.b)("img",{src:"/assets/img/day2/capacity_03_nodes+bluegreen+failure+spare.png",alt:"Cluster with node added to restore spare capacity",width:"600",align:"center"}),Object(n.b)("p",null,"While the examples above are for Compute resources (CPU, Memory), they are equally relevant for resources such as storage, network bandwidth and so on."),Object(n.b)("p",null,"The goal of Day-2 Capacity Management is to keep the available resources at an N+2 level, meaning that whenever resources are consumed there is a response which may include any of the following action types:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Allocate more resources (e.g scale out by adding additional resources)."),Object(n.b)("li",{parentName:"ul"},"Reduce the use of resources(e.g roll back any changes that caused the additional use of resources or throttle the use of the resources)."),Object(n.b)("li",{parentName:"ul"},"Accept the additional risk and plan accordingly (e.g add additional monitors or prepare to allocate more resources).")),Object(n.b)("p",null,"Monitoring the deployment of services and use of resources will help determine the correct cause of action:\nFor example, if there is a business peak on Thursdays which consumes a lot of resources it may be a legitimate plan of action to simply accept a lower level of capacity at that time, while making sure that no deployments may be scheduled for that time period, thus keeping the risk of capacity lowered to N+1 at a minimum."),Object(n.b)("p",null,"On the other hand, if there is a requirement to deploy during peak hours, then a schedule of scaling out the resources before deployment may be a better plan. In the end, a business case must be made to decide which response to lowered capacity is better suited for scenario (lower velocity of deployment by limiting changes or raise costs by scaling out more hardware)."),Object(n.b)("h2",null,"Day 1 Platform"),Object(n.b)("p",null,"Infrastructure capacity for OpenShift covers the traditional resources of an IaaS environment - Compute, Memory, Storage and other assets such as available network addresses so on."),Object(n.b)("p",null,"During Day 1 setup, we should have a set of ",Object(n.b)("a",o({parentName:"p"},{href:"../Monitoring"}),"monitoring")," dashboards and alerts which will measure the usage and saturation of the resources. Set your monitoring thresholds so that you get capacity notifications when you fail the N + 2 tests (e.g when you no longer have double redundancy or capacity)."),Object(n.b)("p",null,"A tool called ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/kubernetes-sigs/cluster-capacity"}),Object(n.b)("inlineCode",{parentName:"a"},"cluster-capacity"))," can be used to assess how many more pods (of a standard type) can be deployed on the cluster."),Object(n.b)("h2",null,"Day 2 Platform"),Object(n.b)("p",null,"During Day 2 operations, we want to allow regular changes to occur in the OpenShift cluster without risking a capacity failure.\nFor example, while executing a canary deployment the cluster will be under a higher level of load because more instances of the deployed service will be running in parallel (the old version and the newer one). This may reduce our capacity to N + 1.\nIf, during that period, one of the cluster nodes fails then our capacity will be further reduced to N. At this point we are at risk that additional application traffic will saturate available resources and the system will enter a failure state."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#approximating-cluster-capacity"}),"Monitor cluster capacity")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#setup-metering"}),"Use Metering Reports")," "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#Capacity-dashboards-and-alerts"}),"Update Capacity Dashboards and Alerts")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#Perform-Chaos-Engineering-tests"}),"Perform Chaos engineering"))),Object(n.b)("h2",null,"Day 1 Application"),Object(n.b)("p",null,"While the principles of capacity management for applications are similar to those of infrastructure resources, the implementation is more complex because application capacity does not scale with hardware or “simple” resources. "),Object(n.b)("p",null,"If the throughput of a queue is X messages per second, adding additional Compute, Network or Storage resources might not add to that value and it will probably not be linear. As part of the preparation to deploy applications on Day-1, the various parameters which are relevant to capacity must be determined."),Object(n.b)("p",null,"For example, what are the bottlenecks of the application and how can they be resolved? Should the application be scaled vertically (i.e. more resources for each individual pod) or horizontally (i.e. deploy more pods)? In theory, a ",Object(n.b)("a",o({parentName:"p"},{href:"https://12factor.net/"}),"12-factor")," application should have additional capacity when scaled horizontally, but in reality various bottlenecks such as queues, locks and other dependencies may affect behaviour.\nEnd-to-End load testing during application development should expose the bottlenecks, monitors developed to detect them and solutions should be put in place to handle cases where the applications become close to saturated."),Object(n.b)("h2",null,"Day 2 Application"),Object(n.b)("p",null,"During Day-2 operations, our goal is to monitor the behaviour and resource consumption of applications and make sure that they are never close to a saturation point where a single additional failure will cause a client affecting failure. "),Object(n.b)("p",null,"While the monitoring solution may notify us that either the resource usage of the application is rising or that the available resources are reduced due to a failure, the immediate response will be to lower the saturation level of the appliaction (lower the ratio of resource usage to resource availability).\nExample of solutions may include:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Scaling out the application horizontally"),Object(n.b)("li",{parentName:"ul"},"Scaling out the underlying infrastructure (as a pre-requisite to further application scaling)"),Object(n.b)("li",{parentName:"ul"},"Scaling down other applications (thus freeing up resources for the capacity-bound application)"),Object(n.b)("li",{parentName:"ul"},"Throttling access to the application so that less requests are sent and lowering capacity requriements"),Object(n.b)("li",{parentName:"ul"},"Feature toggling the application so that high-capacity requests are not available")),Object(n.b)("p",null,"Again, the decision as to which solution is the best must be decided as a business case. For example, perhaps only some users should have their requests throttled or features deactivated, due to their roles."),Object(n.b)("p",null,"During the lifcycle of an application, design changes should be implemented which will improve the way the application handles capacity problems. For example, if the capacity bottleneck of an application is a global queue (which cannot be scaled horizontally) then perhaps the application can be modified so that each pod has it’s own individual queue as a side-car container. This will mean that scaling out the application pod horizontally will now increase queue capacity. In this case, rasising capacity of the application requires development changes. "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#saturation-monitors-as-part-of-application-design"}),"Define saturation monitors as part of application design")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#Configure-JDK-settings-for-containers"}),"Configure JDK settings for containers")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#Configure-resource-quotas"}),"Configure resource quotas")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"#Idle-inactive-applications"}),"Idle inactive applications"))),Object(n.b)("h2",null,"Mapping to Personas"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Persona"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"task"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Monitor Cluster Capacity")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Use Metering Reports")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Update Capacity Dashboards and Alerts")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"SRE"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Perform Chaos Engineering tests")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"SRE & DevOps Engineer"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Define saturation monitors as part of application design")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"SRE & DevOps Engineer"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Configure JDK settings for containers")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"SRE & DevOps Engineer"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Configure resource quotas")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"SRE & DevOps Engineer"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Idle inactive applications")))),Object(n.b)("h2",null,"Platform tasks"),Object(n.b)("a",{name:"approximating-cluster-capacity"}),Object(n.b)("h2",null,"Monitoring Cluster Capacity: ","[ SRE ]"),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"cluster-capacity")," tool enables you to approximate the number of additional pods that the cluster can allocate.\nAfter installing the tool, you create a template of a “standard” pod. Upon running the tool, it will tell you how many of these “standard” pods can be added to the existing cluster, based on the current load and hardware."),Object(n.b)("p",null,"You can run this tool on a schedule, write out the results to a log and send out an alert when the number of additional pods gets too low."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/clusters/nodes-cluster-resource-levels.html#nodes-cluster-resource-levels-about_nodes-cluster-resource-levels"}),"Working with the cluster capacity tool")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/clusters/nodes-cluster-resource-levels.html#nodes-cluster-resource-levels-job_nodes-cluster-resource-levels"}),"Running the tool as a Kubenetes job"))),Object(n.b)("a",{name:"setup-metering"}),Object(n.b)("h2",null,"Use Metering Reports: ","[ SRE ]"),Object(n.b)("p",null,"Besides costs and accounting, metering is a useful tool to generate reports regarding the usage patterns of the cluster.\nUse ",Object(n.b)("a",o({parentName:"p"},{href:"../Metering"}),"metering")," to help plan your capacity needs to see if your assumptions are correct."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/metering/metering-about-metering.html"}),"Metering overview"))),Object(n.b)("a",{name:"Capacity-dashboards-and-alerts"}),Object(n.b)("h2",null,"Update Capacity Dashboards and Alerts: ","[ SRE ]"),Object(n.b)("p",null,"Make sure that you are familiar with the monitoring dashboards that represent the current capacity of the cluster infrastructure. Set alerts when thresholds are crossed (the specific thresholds will depend on the way you define your capacity planning)."),Object(n.b)("a",{name:"Perform-Chaos-Engineering-tests"}),Object(n.b)("h2",null,"Perform Chaos Engineering tests: ","[ SRE ]"),Object(n.b)("p",null,"Since you are operating at a capacity of N+2, performing periodic ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/manage/practice_chaotic_testing/practice_resiliency"}),"chaos engineering tests")," which will ensure that these assumptions are correct. "),Object(n.b)("h2",null,"Application tasks"),Object(n.b)("a",{name:"saturation-monitors-as-part-of-application-design"}),Object(n.b)("h2",null,"Define saturation monitors as part of application design: ","[ SRE, DevOps Engineer ]"),Object(n.b)("p",null,"As part of the design of the application, find out which resources represent the bottlenecks and saturation metrics for the application (is it number of records written per second? number of items in queue? number of responses per second?) and try to figure out:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"How to measure these metrics"),Object(n.b)("li",{parentName:"ul"},"Develop a runbook to detail what needs to be done when a threshold is met (scale out resources, throttle requests, etc…)")),Object(n.b)("p",null,"Note that both the metrics and the runbooks may change during the lifecycle of the application."),Object(n.b)("a",{name:"Configure-JDK-settings-for-containers"}),Object(n.b)("h2",null,"Configure JDK settings for containers: ","[ SRE, DevOps Engineer ]"),Object(n.b)("p",null,"Without proper planning, the JDK running inside application containers may attempt to allocate a larger than necessary slice of the node’s memory. The default OpenJDK settings do not work well with containerized environments. As a result, some additional Java memory settings must always be provided whenever running the OpenJDK in a container."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/clusters/nodes-cluster-resource-configure.html#nodes-cluster-resource-configure-jdk_nodes-cluster-resource-configure"}),"Configure OpenJDK settings")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/clusters/nodes-cluster-resource-configure.html#nodes-cluster-resource-configure-jdk-heap_nodes-cluster-resource-configure"}),"Override JVM maximum heap size")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/clusters/nodes-cluster-resource-configure.html#nodes-cluster-resource-configure-jdk-unused_nodes-cluster-resource-configure"}),"Configure memory release on node")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/clusters/nodes-cluster-resource-configure.html#nodes-cluster-resource-configure-jdk-proc_nodes-cluster-resource-configure"}),"Configure JVM resource limits in pod"))),Object(n.b)("a",{name:"Configure-resource-quotas"}),Object(n.b)("h2",null,"Configure resource quotas: ","[ SRE, DevOps Engineer ]"),Object(n.b)("p",null,"By setting quotas and limits, you can make sure that applications will not attempt to allocate too many resources and pose capacity problems for the entire cluster. Note however that by creating hard resource limits for applications you are limiting their capability to scale-out automatically and putting application performance at risk. A high quality of monitoring is necessary to detect when applications are nearing their quotas. Take care to balance the necessity of application performance vs keeping spare capacity for emergencies."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/quotas/quotas-setting-per-project.html"}),"Setting resource quotas per project"))),Object(n.b)("a",{name:"Idle-inactive-applications"}),Object(n.b)("h2",null,"Idle inactive applications: ","[ SRE, DevOps Engineer ]"),Object(n.b)("p",null,"If you know that an application can be idled (perhaps it’s only needed on specific days of the month), then you can scale them down and free up resources. Note that these applications will scale back up as soon as network traffic is directed back to them."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/idling-applications.html"}),"Scale down idle applications"))),Object(n.b)("h2",null,"Implementing Capacity Management"),Object(n.b)("h2",null,"Kubernetes"),Object(n.b)("p",null,"All of the tasks detailed above are relevant to vanilla Kubernetes, but the specific tools may not be available out of the box. One exception is the ",Object(n.b)("inlineCode",{parentName:"p"},"cluster-capacity")," tool which is available through the Kubernetes Special Interest Group:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/kubernetes-sigs/cluster-capacity"}),"Cluster capacity tool")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/kubernetes-sigs/cluster-capacity/blob/master/doc/cluster-capacity.md"}),"Cluster capacity analysis"))),Object(n.b)("h2",null,"OpenShift"),Object(n.b)("p",null,"OpenShift comes with a series of tools which help SREs manage the cluster capacity - both measuring it and freeing up available resources.\nThe ",Object(n.b)("a",o({parentName:"p"},{href:"../Monitoring"}),"monitoring")," stack which comes with OpenShift is also useful in detecting potential capacity issues.\nThe following series of articles ",Object(n.b)("strong",{parentName:"p"},"How Full is my Cluster")," describe a Capacity Management in OpenShift 3.x, which is relevant for 4.x too:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://blog.openshift.com/full-cluster-capacity-management-monitoring-openshift/"}),"How Full is My Cluster? Capacity Management and Monitoring on OpenShift")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://blog.openshift.com/full-cluster-part-2-protecting-nodes/"}),"How Full is My Cluster – Part 2: Protecting the Nodes")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://blog.openshift.com/full-cluster-part-3-capacity-management/"}),"How Full is My Cluster – Part 3: Capacity Management")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://blog.openshift.com/how-full-is-my-cluster-part-4-right-sizing-pods-with-vertical-pod-autoscaler/"}),"How Full is My Cluster – Part 4: Right-Sizing Pods with Vertical Pod Autoscaler")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://blog.openshift.com/how-full-is-my-cluster-part-5-a-capacity-management-dashboard/"}),"How Full is My Cluster – Part 5: A Capacity Management Dashboard"))),Object(n.b)("h2",null,"On IBM Cloud"),Object(n.b)("p",null,"In addition to the capabilities in OpenShift, OpenShift on IBM Cloud which is IBM’s managed offering has the additional monitoring service with SysDig which can present potential capacity problems in infrastructure and applications."),Object(n.b)("h2",null,"With IBM Cloud Pak for MCM"),Object(n.b)("p",null,"In addition to the capabilities in OpenShift, IBM Cloud Pak for Multicloud Management has the additional monitoring tool IBM Cloud App Management (ICAM) which can present potential capacity problems in infrastructure and applications. ICAM specializes in monitoring and alerting against the golden signals, of which Saturation reflects capacity problems."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-capacity-index-mdx-06377496cfbc9c2aecec.js.map