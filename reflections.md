Team Member Reflections
1. Muziwakhe Sitsha (AWS DevOps Specialist)
The Good:
Successfully deployed our application to AWS using EC2 instances and implemented a robust CI/CD pipeline with GitHub Actions. The Elastic Beanstalk environment provided smooth scaling capabilities, and S3 integration for static assets worked seamlessly. The deployment process became fully automated after configuring the pipeline correctly.

The Challenges:
Initial IAM configuration was complex - understanding the precise permissions needed for GitHub Actions to deploy to EC2 required multiple iterations. Security group management was initially overwhelming, but breaking it down to essential HTTP/HTTPS rules simplified the approach. Cost monitoring setup needed careful attention to avoid unexpected charges.

Key Learning:
AWS provides powerful services but requires careful security configuration. The visual editor for IAM policies made complex permissions manageable. CloudWatch dashboards gave excellent visibility into application performance, and setting budget alerts early prevented potential cost overruns.

2. Celimpilo Gumede (Azure DevOps Specialist)
The Good:
Azure App Service provided a streamlined deployment experience with excellent integration to GitHub Actions. The managed identity feature simplified secure access to Azure Storage and other resources. The publish profile method made initial deployment straightforward, and Azure Monitor offered comprehensive application insights.

The Challenges:
RBAC configuration required understanding the difference between Azure's role-based access and AWS's IAM policies. Initial deployment failures due to incorrect service principal permissions were frustrating but educational. Network security groups needed careful configuration to maintain accessibility while ensuring security.

Key Learning:
Azure's integration between services is excellent once the initial learning curve is overcome. The portal interface is intuitive, and the cost management features provided clear visibility into our spending. The F1 Free tier was perfect for our development needs while learning the platform.

3. Katleho Lephuting (Security & Operations Lead)
The Good:
Implementing security across both platforms revealed interesting similarities and differences between AWS IAM and Azure RBAC. Setting up monitoring dashboards in both CloudWatch and Azure Monitor provided comprehensive visibility. Budget alerts on both platforms gave us cost control and peace of mind.

The Challenges:
Translating security concepts between AWS and Azure terminology was initially confusing. Ensuring consistent security posture across both clouds required careful planning. The service principal concept in Azure took time to understand compared to AWS's IAM users.

Key Learning:
Both cloud platforms share fundamental security principles despite different implementations. The "least privilege" principle proved essential for both IAM policies and RBAC assignments. Automated monitoring and alerting are crucial for maintaining secure and cost-effective cloud operations. Documentation and screenshots became invaluable for tracking our security configurations.

Team Reflection
As a group, we learned that multi-cloud deployment requires careful planning and consistent security practices across platforms. The project highlighted how similar cloud concepts can have different implementations in AWS versus Azure. Our Kanban approach helped us track parallel workstreams effectively.
