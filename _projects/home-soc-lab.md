---
layout: page
title: "Home SOC Lab - Security Operations Center Environment"
description: "A comprehensive containerized Security Operations Center (SOC) lab environment built with Docker Compose. Integrates Wazuh SIEM, ELK Stack, Zeek, Suricata, Grafana, MISP, and TheHive for complete security monitoring, threat detection, and incident response capabilities."
category: 
  - 'Cybersecurity'
  - 'DevOps'
  - 'Dev'
tags:
  - Docker
  - Docker Compose
  - Security Operations
  - SIEM
  - Wazuh
  - ELK Stack
  - Network Monitoring
  - Threat Intelligence
  - Incident Response
  - Zeek
  - Suricata
  - Grafana
  - MISP
  - TheHive
  - Cybersecurity
  - Infrastructure
  - Containerization
  - DevOps
  - IDS/IPS
link: "https://github.com/dordazrodriguez/HomeSOCLab"
date: 2024-12-01
show_date: true
importance: 1
featured: true
---

## Overview

The Home SOC Lab provides a complete security operations environment that integrates industry-standard open-source security tools into a unified, containerized platform. This lab enables hands-on experience with enterprise-grade security monitoring, threat detection, log analysis, and incident response workflows.

## Key Features

### Security Information and Event Management (SIEM)
- **Wazuh SIEM**: Complete Wazuh stack (Manager, Indexer, Dashboard) for centralized security event management
- **Real-time monitoring**: Continuous security event collection and analysis
- **Custom rules and decoders**: Configurable detection rules for threat identification
- **Agent management**: Support for Wazuh agents across multiple systems

### Log Aggregation and Analysis
- **ELK Stack**: Elasticsearch, Logstash, and Kibana for centralized log management
- **Multi-source log ingestion**: Support for syslog, Beats, and file-based logs
- **Advanced search and analytics**: Powerful querying capabilities with Kibana
- **Log retention and indexing**: Efficient storage and retrieval of security logs

### Network Monitoring and Intrusion Detection
- **Zeek Network Analysis**: Deep packet inspection and network protocol analysis
- **Suricata IDS/IPS**: Real-time intrusion detection and prevention
- **Network traffic analysis**: Comprehensive network monitoring and threat detection
- **Custom rule sets**: Configurable detection rules for network-based threats

### Visualization and Dashboards
- **Grafana Integration**: Unified visualization platform connecting to multiple data sources
- **Pre-configured dashboards**: Security overview and monitoring dashboards
- **Custom visualizations**: Flexible dashboard creation for specific use cases
- **Real-time metrics**: Live monitoring of security events and system health

### Threat Intelligence
- **MISP Platform**: Threat intelligence sharing and IOC management
- **Threat correlation**: Automated correlation of security events with threat intelligence
- **IOC management**: Indicators of Compromise tracking and sharing
- **Threat feed integration**: Support for external threat intelligence feeds

### Incident Response
- **TheHive Platform**: Security incident management and case tracking
- **Case management**: Structured incident response workflows
- **Task management**: Assignment and tracking of incident response tasks
- **Integration with MISP**: Seamless threat intelligence integration

## Architecture

The lab is built using Docker Compose with a modular architecture:

```
┌─────────────────────────────────────────┐
│         Home SOC Lab Network             │
│         (Docker Bridge Network)          │
└─────────────────────────────────────────┘
              │
    ┌─────────┼─────────┐
    │         │         │
┌───▼───┐ ┌───▼───┐ ┌───▼───┐
│ Wazuh │ │  ELK  │ │Network│
│ Stack │ │ Stack │ │Monitor│
└───┬───┘ └───┬───┘ └───┬───┘
    │         │         │
    └─────────┼─────────┘
              │
    ┌─────────┼─────────┐
    │         │         │
┌───▼───┐ ┌───▼───┐ ┌───▼───┐
│Grafana│ │TheHive│ │ MISP  │
└───────┘ └───────┘ └───────┘
```

## Technologies

- **Containerization**: Docker and Docker Compose
- **SIEM**: Wazuh 4.8.0
- **Log Management**: ELK Stack (Elasticsearch 8.11.0, Logstash 8.11.0, Kibana 8.11.0)
- **Network Monitoring**: Zeek and Suricata
- **Visualization**: Grafana
- **Threat Intelligence**: MISP
- **Incident Response**: TheHive
- **Databases**: Cassandra, PostgreSQL, Redis
- **Configuration Management**: YAML-based configuration files

## Components

### Core Services
1. **Wazuh Manager**: Security event collection and processing
2. **Wazuh Indexer**: Security data storage and indexing
3. **Wazuh Dashboard**: Web-based SIEM interface
4. **Elasticsearch**: Search and analytics engine
5. **Logstash**: Log processing pipeline
6. **Kibana**: Log visualization and exploration
7. **Zeek**: Network analysis framework
8. **Suricata**: Intrusion Detection/Prevention System
9. **Grafana**: Unified visualization platform
10. **MISP**: Threat intelligence platform
11. **TheHive**: Incident response platform

### Supporting Infrastructure
- **Cassandra**: Database for TheHive
- **PostgreSQL**: Relational database for various services
- **Redis**: Caching and message queuing

## Features

### Easy Setup and Management
- **One-command setup**: Automated installation script
- **Service management**: Start, stop, and restart scripts
- **Log viewing**: Centralized log viewing utility
- **Reset capability**: Complete lab reset functionality

### Comprehensive Documentation
- Architecture documentation
- Installation guides
- Configuration guides
- Usage instructions
- Component-specific guides (Wazuh, ELK, Network Monitoring)
- Incident response playbooks

### Incident Response Playbooks
Pre-configured playbooks for:
- Account compromise
- Data exfiltration
- Malware detection
- Network intrusion

### Customization
- Configurable detection rules
- Custom decoders
- Flexible dashboard creation
- Integration with external tools

## System Requirements

### Minimum Requirements
- CPU: 4 cores
- RAM: 8GB
- Disk: 50GB free space
- OS: Linux, macOS, or Windows with WSL2

### Recommended Requirements
- CPU: 8+ cores
- RAM: 16GB+
- Disk: 100GB+ free space (SSD recommended)
- OS: Linux or macOS

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/dordazrodriguez/HomeSOCLab.git
   cd HomeSOCLab
   ```

2. **Run setup script**
   ```bash
   ./scripts/setup.sh
   ```

3. **Start all services**
   ```bash
   ./scripts/start.sh
   ```

4. **Access services**
   - Wazuh Dashboard: http://localhost:5601
   - Kibana: http://localhost:5602
   - Grafana: http://localhost:3000
   - TheHive: http://localhost:9000
   - MISP: https://localhost:8443

## Use Cases

- **Security Training**: Learn SOC operations and security monitoring
- **Threat Detection Testing**: Test and validate security detection rules
- **Incident Response Practice**: Practice incident response workflows
- **Security Tool Evaluation**: Evaluate security tools before deployment
- **Professional Development**: Build hands-on cybersecurity experience
- **Home Network Security**: Monitor and secure home network infrastructure

## Security Considerations

⚠️ **Lab Environment**: This is designed as a lab environment with default credentials for convenience. For production use:
- Change all default passwords
- Enable proper authentication
- Use TLS/SSL certificates
- Restrict network access
- Regularly update all components

## Project Structure

```
HomeSOCLab/
├── docker/              # Docker Compose configurations
├── config/              # Configuration files for all tools
│   ├── wazuh/          # Wazuh configuration
│   ├── elasticsearch/  # Elasticsearch configuration
│   ├── logstash/       # Logstash pipelines
│   ├── kibana/         # Kibana configuration
│   ├── zeek/           # Zeek configuration
│   ├── suricata/       # Suricata configuration
│   └── grafana/        # Grafana dashboards and provisioning
├── scripts/             # Setup and utility scripts
├── docs/                # Comprehensive documentation
├── playbooks/           # Incident response playbooks
└── data/                # Data and logs (gitignored)
```

## Documentation

Comprehensive documentation includes:
- [Architecture Guide](docs/ARCHITECTURE.md)
- [Installation Guide](docs/INSTALLATION.md)
- [Configuration Guide](docs/CONFIGURATION.md)
- [Usage Guide](docs/USAGE.md)
- [Wazuh Guide](docs/WAZUH.md)
- [ELK Stack Guide](docs/ELK.md)
- [Network Monitoring Guide](docs/NETWORK_MONITORING.md)
- [Incident Response Guide](docs/INCIDENT_RESPONSE.md)

## Skills Demonstrated

- **Containerization**: Docker and Docker Compose orchestration
- **Security Operations**: SIEM configuration and management
- **Log Management**: ELK Stack setup and configuration
- **Network Security**: Intrusion detection system deployment
- **Infrastructure as Code**: YAML-based configuration management
- **DevOps**: Automated deployment and service management
- **Cybersecurity**: Threat detection, incident response, and security monitoring
- **System Integration**: Integrating multiple security tools into a unified platform

## Links

- GitHub Repository: [HomeSOCLab](https://github.com/dordazrodriguez/HomeSOCLab)
