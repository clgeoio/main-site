---
title: What is Web Architecture?
description:
author: Cody G
image: /static/images/code-projected-over-woman-3861969.jpg
categories:
  - leetcode
  - problem solving

date: 2020-10-13
draft: true
---

# What is Web Architecture?

We’ve already learned a bit about the client-server architecture when discussing the two-tier, three-tier & the N-tier architecture. Now we look at it in detail.

The architecture works on a request-response model. The client sends the request to the server for information & the server responds with it.

## The Client

The client holds the user interface, for a page like this it is HTML, JS and CSS. This website is built on NextJS which uses the React library under the hood.

You may hear of two types of client, thick and thin

- A _thick_ client
  Has both the user interface and business logic (like video game) and only reaches out to the server to sync or set state.

- A _thin_ client
  Only holds the user interface of the application, it has not business logic of any sort.

## The Server

Every service, running online, needs a server to run. Servers running web applications are commonly known as the application servers.
A server could be, a proxy server, a mail server, a virtual server among others, but we will stick with application servers from here on.

## How the client and server communicate

A common method of client-server communication in a web app is HTTP REST.
HTTP is a common protocol of communication and REST stands for Representational State Transfer.
