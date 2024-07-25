# Containerization of a Web Microservice using Docker and Kubernetes Orchestration

<div style="height: 20px;"></div>

## Introduction

<div style="height: 10px;"></div>

Containerized `Node microservice` using `Docker` and then deployed it on `Google Kubernetes Engine` using the provided manifest files. This setup includes configurations for Pods, Deployments, and Services **(NodePort and LoadBalancer)**.

<div style="height: 30px;"></div>

## Table of Contents

<div style="height: 10px;"></div>

- [Prerequisites](#prerequisites)
- [Manifests](#manifests)
- [Deployment Instructions](#deployment-instructions)
- [Accessing the Application](#accessing-the-application)
- [Health Checks](#health-checks)
- [Clean Up](#clean-up)
- [Contact](#contact)
- [Project Status](#project-status)
- [Contributing](#contributing)
- [License](#license)

<div style="height: 30px;"></div>

## Prerequisites

- Kubernetes cluster
- `kubectl` configured to interact with your cluster

<div style="height: 30px;"></div>

## Manifests

<div style="height: 20px;"></div>

- **Pod Manifest**
  - Single instance of the application
  - Container specification with image and ports
  - Liveness and readiness probes for health checks

<div style="height: 20px;"></div>

- **Deployment Manifest**
  - Replica sets for high availability and scalability
  - Rolling updates strategy
  - Resource requests and limits
  - Liveness and readiness probes

<div style="height: 20px;"></div>

- **NodePort Service Manifest**
  - Exposes service on a static port across all nodes
  - Access via `<NodeIP>:<NodePort>`

<div style="height: 20px;"></div>

- **LoadBalancer Service Manifest**
  - External load balancer creation
  - Cloud provider-specific (e.g., AWS, GCP, Azure)
  - Access via external IP provided by the load balancer

<div style="height: 30px;"></div>

## Deployment Instructions

<div style="height: 20px;"></div>

1. Apply the manifests:

   ```sh
   kubectl apply -f pod.yaml
   kubectl apply -f deployment.yaml
   kubectl apply -f svc_np.yaml
   kubectl apply -f svc_lb.yaml
   ```

2. Verify deployments and services:
   ```sh
   kubectl get pods
   kubectl get deployments
   kubectl get services
   ```

<div style="height: 30px;"></div>

## Accessing the Application

<div style="height: 20px;"></div>

- **NodePort**
  - Access the application using `<NodeIP>:<NodePort>`
  - Example: `http://<NodeIP>:30001`

<div style="height: 20px;"></div>

- **LoadBalancer**
  - Access the application using the external IP assigned by the load balancer
  - Example: `http://<External-IP>:4000`

<div style="height: 30px;"></div>

## Health Checks

- **Liveness Probe**: `/healthz`
- **Readiness Probe**: `/readiness`
- Ensures the application is running and ready to serve traffic

<div style="height: 30px;"></div>

## Clean Up

1. Delete the resources:

```sh
    kubectl delete -f pod.yaml
    kubectl delete -f deployment.yaml
    kubectl delete -f svc_np.yaml
    kubectl delete -f svc_lb.yaml
```

<div style="height: 30px;"></div>

## Contact

<div style="height: 10px;"></div>

**Adarsh Kumar** @ [21cs3060@rgipt.ac.in](mailto:21cs3060@rgipt.ac.in)

<div style="height: 30px;"></div>

## Project Status

<div style="height: 10px;"></div>

Completed ✌️

<div style="height: 10px;"></div>

### Alert

<div style="height: 10px;"></div>

Due to high incurring charges for Google Kubernetes Engine service at Google Cloud, The Web page has been taken down. However, I have provided the link to Docker image of the API.

<div style="height: 30px;"></div>

## Contributing

<div style="height: 10px;"></div>

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

<div style="height: 30px;"></div>

## License

<div style="height: 10px;"></div>

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License. See `LICENSE` for more information.

<div style="height: 20px;"></div>
