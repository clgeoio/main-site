---
title: What is a Tier?
description:
author: Cody G
image: /static/images/code-projected-over-woman-3861969.jpg
categories:
  - leetcode
  - problem solving

date: 2020-10-13
draft: true
---

# What is a Tier?

- A tier is a logical separation of components in an application or service, like a DB or an aplplication server

## Single Tier Application

A single tier application is where the user interface, the business logic and the database (if any) all reside on the same machine. An application like Microsoft Word is a single tier application.

### Advantages

- No network
- Everything at the ready

### Disadvantages

- Once shipped, hard to fix or add features

## Two Tier Application

A two tier application involves a client and a server. The client would contain the user interface & the business logic in one machine. And the backend server would be the database running on a different machine. The database server is hosted by the business & has control over it.

## Three Tier Application

In a three-tier application, the user interface, application logic & the database all lie on different machines & thus have different tiers. They are physically separated.

For a simple blog, the user interface would be written using Html, JavaScript, CSS, the backend application logic would run on a server like Apache & the database would be MySQL. A three-tier architecture works best for simple use cases.

## The N-tier Application

An N-tier application is an application which has more than three components involved.
e.g.

- Cache
- Load balancer
- Message Queue
- Web services

The need for so many tiers comes from the software design principles: the Single Responsibility Principle & the Separation of Concerns.
