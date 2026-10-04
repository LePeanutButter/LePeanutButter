import type { SkillGroup } from "@/src/types";

// Full-Stack Architecture
import springBootLogo from "@/public/skills/spring-boot.svg";
import nextjsLogo from "@/public/skills/nextjs.svg";
import reactLogo from "@/public/skills/react.svg";
import fastApiLogo from "@/public/skills/fastapi.svg";
import javaLogo from "@/public/skills/java.svg";
import typescriptLogo from "@/public/skills/typescript.svg";
import kotlinLogo from "@/public/skills/kotlin.svg";
import javascriptLogo from "@/public/skills/javascript.svg";
import cLogo from "@/public/skills/c-language.svg";
import csharpLogo from "@/public/skills/c-sharp.svg";
import djangoLogo from "@/public/skills/django.svg";
import mavenLogo from "@/public/skills/maven.svg";
import jqueryLogo from "@/public/skills/jquery.svg";
import svelteLogo from "@/public/skills/svelte.svg";
import phpLogo from "@/public/skills/php.svg";
import dotnetLogo from "@/public/skills/dotnet.svg";
import unityLogo from "@/public/skills/unity.svg";

// Cloud & Infrastructure
import awsLogo from "@/public/skills/aws.svg";
import azureLogo from "@/public/skills/azure.svg";
import dockerLogo from "@/public/skills/docker.svg";
import terraformLogo from "@/public/skills/terraform.svg";
import yamlLogo from "@/public/skills/yaml.svg";
import hclLogo from "@/public/skills/hcl.svg";
import bashLogo from "@/public/skills/bash.svg";
import nginxLogo from "@/public/skills/nginx.svg";
import traefikProxyLogo from "@/public/skills/traefik.svg";
import linuxLogo from "@/public/skills/linux.svg";
import windowsLogo from "@/public/skills/windows.svg";
import ciscoLogo from "@/public/skills/cisco.svg";
import gitLogo from "@/public/skills/git.svg";
import githubLogo from "@/public/skills/github.svg";
import slackLogo from "@/public/skills/slack.svg";
import azureDevopsLogo from "@/public/skills/devops.svg";
import sonarLogo from "@/public/skills/sonar.svg";
import umlLogo from "@/public/skills/uml.svg";
import figmaLogo from "@/public/skills/figma.svg";
import miroLogo from "@/public/skills/miro.svg";

// Data Engineering
import postgresqlLogo from "@/public/skills/postgresql.svg";
import mongodbLogo from "@/public/skills/mongodb.svg";
import oracleSqlLogo from "@/public/skills/oracle-sql.svg";
import flywayLogo from "@/public/skills/flyway.svg";
import sqlLogo from "@/public/skills/sql.svg";
import mysqlLogo from "@/public/skills/my-sql.svg";
import mariadbLogo from "@/public/skills/mariadb.svg";

// AI & Automation
import n8nLogo from "@/public/skills/n8n.svg";
import langchainLogo from "@/public/skills/langchain.svg";
import pythonLogo from "@/public/skills/python.svg";
import automationAnywhereLogo from "@/public/skills/automation-anywhere.svg";
import appianLogo from "@/public/skills/appian.svg";

export const skillGroups: SkillGroup[] = [
{
    domain: "full-stack",
    title: "Full-Stack: Core Development & Architecture",
    items: [
      { name: "Java", image: javaLogo },
      { name: "Spring Boot", image: springBootLogo },
      { name: "TypeScript", image: typescriptLogo },
      { name: "Next.js", image: nextjsLogo },
      { name: "React", image: reactLogo },
      { name: "Kotlin", image: kotlinLogo },
      { name: "JavaScript", image: javascriptLogo },
      { name: "C", image: cLogo },
      { name: "C#", image: csharpLogo },
      { name: "Django", image: djangoLogo },
      { name: "Maven", image: mavenLogo },
      { name: "jQuery", image: jqueryLogo },
      { name: "Svelte", image: svelteLogo },
      { name: "PHP", image: phpLogo },
      { name: ".NET", image: dotnetLogo },
      { name: "Unity", image: unityLogo },
      { name: "FastAPI", image: fastApiLogo },
    ],
  },
{
    domain: "cloud-devops",
    title: "Cloud & DevOps: Cloud, Systems & DevOps Infrastructure",
    items: [
      { name: "AWS", image: awsLogo },
      { name: "Azure", image: azureLogo },
      { name: "Docker", image: dockerLogo },
      { name: "Terraform", image: terraformLogo },
      { name: "YAML", image: yamlLogo },
      { name: "HCL", image: hclLogo },
      { name: "Bash", image: bashLogo },
      { name: "NGINX", image: nginxLogo },
      { name: "Traefik Proxy", image: traefikProxyLogo },
      { name: "Linux", image: linuxLogo },
      { name: "Windows", image: windowsLogo },
      { name: "Cisco", image: ciscoLogo },
      { name: "Git", image: gitLogo },
      { name: "GitHub", image: githubLogo },
      { name: "Slack", image: slackLogo },
      { name: "Azure DevOps", image: azureDevopsLogo },
      { name: "SonarQube", image: sonarLogo },
      { name: "UML", image: umlLogo },
      { name: "Figma", image: figmaLogo },
      { name: "Miro", image: miroLogo },
    ],
  },
{
    domain: "data",
    title: "Data: Data Engineering & Storage Systems",
    items: [
      { name: "PostgreSQL", image: postgresqlLogo },
      { name: "MongoDB", image: mongodbLogo },
      { name: "Oracle SQL", image: oracleSqlLogo },
      { name: "SQL", image: sqlLogo },
      { name: "MySQL", image: mysqlLogo },
      { name: "MariaDB", image: mariadbLogo },
      { name: "Flyway", image: flywayLogo },
    ],
  },
{
    domain: "ai-automation",
    title: "AI & Automation: Intelligent Automation & AI Systems",
    items: [
      { name: "n8n", image: n8nLogo },
      { name: "Python", image: pythonLogo },
      { name: "Automation Anywhere", image: automationAnywhereLogo },
      { name: "Appian", image: appianLogo },
      { name: "LangChain", image: langchainLogo },
    ],
  },
];
