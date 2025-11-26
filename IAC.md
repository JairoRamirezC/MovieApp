# Deploy EKS Infrastructure with Terraform

This Backstage template automates the deployment of Amazon EKS (Elastic Kubernetes Service) infrastructure using Terraform through GitHub Actions workflows.

## Overview

This template triggers a GitHub workflow dispatch event that provisions a complete EKS cluster with all necessary AWS resources including VPC, subnets, security groups, and worker nodes.

*Tags:* aws, terraform, eks

*Repository:* https://github.com/example-org/terraform-eks-workflows (example)

*Workflow:* deploy-eks-cluster.yml

## Parameters

The template uses modular parameters imported from ./params/parameters.yaml. All parameters are organized into logical sections:

### 1. Project Information (Required)

| Parameter | Type | Description | Required | Default |
|-----------|------|-------------|----------|---------|
| project_name | string | Name of the project for EKS cluster identification. Must be lowercase with hyphens only. | Yes | - |
| environment | enum | Target deployment environment: development, staging, production | Yes | development |
| aws_region | enum | AWS region for deployment: us-east-1, us-west-2, eu-west-1, eu-central-1, ap-southeast-1 | Yes | us-east-1 |

### 2. EKS Cluster Configuration (Required)

| Parameter | Type | Description | Required | Default |
|-----------|------|-------------|----------|---------|
| cluster_version | enum | Kubernetes version: 1.28, 1.29, 1.30 | Yes | 1.30 |
| node_instance_type | enum | EC2 instance type for worker nodes | Yes | t3.medium |
| desired_capacity | integer | Desired number of worker nodes (1-10) | Yes | 2 |
| min_capacity | integer | Minimum nodes for autoscaling (1-5) | No | 1 |
| max_capacity | integer | Maximum nodes for autoscaling (1-20) | No | 5 |

*Available Instance Types:*
t3.medium - 2 vCPU, 4 GB RAM
t3.large - 2 vCPU, 8 GB RAM
t3.xlarge - 4 vCPU, 16 GB RAM
m5.large - 2 vCPU, 8 GB RAM
m5.xlarge - 4 vCPU, 16 GB RAM
m5.2xlarge - 8 vCPU, 32 GB RAM

### 3. Network Configuration (Optional)

| Parameter | Type | Description | Required | Default |
|-----------|------|-------------|----------|---------|
| vpc_cidr | string | CIDR block for the VPC | No | 10.0.0.0/16 |
| enable_nat_gateway | boolean | Enable NAT Gateway for private subnets | No | true |
| enable_vpn_gateway | boolean | Enable VPN Gateway for VPC | No | false |

### 4. Additional Features (Optional)

| Parameter | Type | Description | Required | Default |
|-----------|------|-------------|----------|---------|
| enable_monitoring | boolean | Enable enhanced CloudWatch monitoring | No | true |
| enable_logging | boolean | Enable EKS control plane logging | No | true |
| install_metrics_server | boolean | Install Kubernetes Metrics Server | No | true |
| install_cluster_autoscaler | boolean | Install Cluster Autoscaler for automatic scaling | No | false |
| tags | string | Additional tags for resources (format: key1=value1,key2=value2) | No | - |

## Steps

The template executes the following steps in sequence:

### Step 1: Log Template Execution
*Action:* debug:log
*Purpose:* Logs the initiation of the EKS deployment with key parameters
*Output:* Console log message with project details

### Step 2: Trigger GitHub Workflow for EKS Deployment
*Action:* github:actions:dispatch
*Purpose:* Dispatches the GitHub Actions workflow with all configuration parameters
*Repository:* github.com/example-org/terraform-eks-workflows
*Workflow:* deploy-eks-cluster.yml
*Branch:* main
*Inputs:* All user-provided parameters are passed as workflow inputs

*Workflow Inputs Passed:*
yaml
project_name: ${{ parameters.project_name }}
environment: ${{ parameters.environment }}
aws_region: ${{ parameters.aws_region }}
cluster_version: ${{ parameters.cluster_version }}
node_instance_type: ${{ parameters.node_instance_type }}
desired_capacity: ${{ parameters.desired_capacity }}
min_capacity: ${{ parameters.min_capacity }}
max_capacity: ${{ parameters.max_capacity }}
vpc_cidr: ${{ parameters.vpc_cidr }}
enable_nat_gateway: ${{ parameters.enable_nat_gateway }}
enable_vpn_gateway: ${{ parameters.enable_vpn_gateway }}
enable_monitoring: ${{ parameters.enable_monitoring }}
enable_logging: ${{ parameters.enable_logging }}
install_metrics_server: ${{ parameters.install_metrics_server }}
install_cluster_autoscaler: ${{ parameters.install_cluster_autoscaler }}
tags: ${{ parameters.tags }}



### Step 3: Register EKS Cluster in Catalog
*Action:* catalog:register
*Purpose:* Registers the newly created EKS cluster in Backstage catalog
*Optional:* Yes (will not fail if catalog registration is unavailable)
*Catalog File:* /catalog-info.yaml from the repository

### Step 4: Send Slack Notification
*Action:* slack:post
*Purpose:* Sends a formatted notification to the infrastructure team
*Channel:* #infrastructure-deployments
*Optional:* Yes (will not fail if Slack integration is unavailable)

## Output

Upon successful execution, the template provides:

### Links
1. *GitHub Actions Workflow* - Direct link to monitor deployment progress
2. *AWS Console - EKS* - Direct link to EKS cluster dashboard in AWS Console
3. *View in Backstage Catalog* - Link to the registered entity in Backstage

### Deployment Summary
A detailed text summary including:
Cluster configuration details
Network configuration
Enabled features
Estimated deployment time (15-20 minutes)

## Example Usage

1. Navigate to Backstage Software Templates
2. Select "Deploy EKS Infrastructure with Terraform"
3. Fill in the required parameters:
   
   Project Name: my-app-cluster
   Environment: production
   AWS Region: us-east-1
   Cluster Version: 1.30
   Node Instance Type: m5.large
   Desired Capacity: 3
   

4. Configure optional parameters as needed
5. Review and execute the template
6. Monitor the GitHub Actions workflow for deployment progress

## Prerequisites

GitHub repository with Terraform configurations for EKS
GitHub Actions workflow file (deploy-eks-cluster.yml) configured with workflow_dispatch trigger
AWS credentials configured in GitHub Secrets
Backstage GitHub integration configured
(Optional) Slack integration for notifications

## Expected Deployment Time

VPC and Network Resources: 3-5 minutes
EKS Control Plane: 10-12 minutes
Worker Nodes: 3-5 minutes
Total: *15-20 minutes*

## Troubleshooting

Ensure GitHub token has workflow dispatch permissions
Verify AWS credentials are valid and have necessary IAM permissions
Check GitHub Actions logs for Terraform execution errors
Ensure the target AWS region has sufficient capacity for requested instance types

## Related Documentation

[Backstage Software Templates](https://backstage.io/docs/features/software-templates/)
[AWS EKS Documentation](https://docs.aws.amazon.com/eks/)
[Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
[GitHub Actions Workflow Dispatch](https://docs.github.com/en/actions/using-workflows/manually-running-a-workflow)