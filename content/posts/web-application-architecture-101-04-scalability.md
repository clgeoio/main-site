---
title: What is scalability?
description:
author: Cody G
image: /static/images/code-projected-over-woman-3861969.jpg
categories:
  - leetcode
  - problem solving

date: 2020-10-13
draft: true
---

I am pretty sure, being in the software development universe, you’ve come across this word a lot many times. Scalability. What is it? Why is it so important? Why is everyone talking about it? Is it important to scale systems? What are your plans or contingencies to scale when your app or the platform experiences significant traffic growth?

Firstly, lets define latency

## What is Latency?

Latency is the amount of time a system takes to respond to a user request. Let’s say you send a request to an app to fetch an image & the system takes 2 seconds to respond to your request. The latency of the system is 2 seconds.

Minimum latency is what efficient software systems strive for. No matter how much the traffic load on a system builds up, the latency should not go up. This is what scalability is.

If the latency remains the same, we can say yeah, the application scaled well with the increased load & is highly scalable.

Let’s think of scalability in terms of Big-O notation. Ideally, the complexity of a system or an algorithm should be O(1) which is constant time like in a key-value database.

A program with the complexity of O(n^2) where n is the size of the data set is not scalable. As the size of the data set increases the system will need more computational power to process the tasks.

So, how do we measure latency?

## What is Scalability?

Scalability means the ability of the application to handle & withstand increased workload without sacrificing the latency.

For instance, if your app takes x seconds to respond to a user request. It should take the same x seconds to respond to each of the million concurrent user requests on your app.

The backend infrastructure of the app should not crumble under a load of a million concurrent requests. It should scale well when subjected to a heavy traffic load & should maintain the latency of the system
