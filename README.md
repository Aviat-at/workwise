# 🏗️ Workwise Infrastructure (Terraform)

This branch contains the **Infrastructure as Code (IaC)** setup for the Workwise project using **Terraform**.  
It provisions and manages cloud resources required for the **backend** (Django API) and **frontend** (React) services.

---

## 📂 Project Structure

```
infra-terraform/
├── main.tf              # Main Terraform configuration
├── variables.tf         # Input variables
├── outputs.tf           # Outputs such as instance IPs or database URLs
├── provider.tf          # Cloud provider configuration (e.g. AWS, GCP, Azure)
├── terraform.tfvars     # Variable values for the current environment
└── environments/
    ├── dev/             # Development environment configs
    ├── staging/         # Staging environment configs
    └── prod/            # Production environment configs
```

---

## ⚙️ Prerequisites

Before running Terraform, ensure you have:

- [Terraform CLI](https://developer.hashicorp.com/terraform/downloads) installed  
- Access to your cloud provider credentials (e.g. AWS access keys, Azure service principal)
- Initialized backend and environment variables

Example for AWS:

```bash
export AWS_ACCESS_KEY_ID="your_access_key"
export AWS_SECRET_ACCESS_KEY="your_secret_key"
```

---

## 🚀 Usage

### 1. Initialize Terraform

```bash
terraform init
```

### 2. Validate configuration

```bash
terraform validate
```

### 3. Preview changes

```bash
terraform plan -var-file="terraform.tfvars"
```

### 4. Apply infrastructure changes

```bash
terraform apply -var-file="terraform.tfvars"
```

### 5. Destroy resources (when needed)

```bash
terraform destroy -var-file="terraform.tfvars"
```

---

## 🧩 Common Resources Managed

- VPCs, Subnets, Security Groups
- EC2 Instances / Compute Engines
- RDS / Cloud SQL Databases
- Load Balancers
- IAM Roles and Policies
- S3 Buckets or Cloud Storage

---

## 🔒 Security Notes

- Never commit `.tfstate` files or secrets to Git.
- Use a remote backend (e.g., AWS S3 + DynamoDB) for storing state files.
- Always use `terraform plan` before applying changes to avoid unexpected modifications.

---

## 📘 Documentation

- [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- [AWS Provider Docs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)

---

## 👥 Maintainers

- **DevOps / Infra Team** – Aviat Technologies
- **Contact**: infra@aviat.lk

---

## 🧠 Tip

Use Git branching for each environment (`infra/dev`, `infra/staging`, `infra/prod`) to isolate configurations.